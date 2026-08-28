import { useCallback, useEffect, useRef, useState } from 'react';

const SECTION_IDS = ['about', 'skills', 'experience', 'contact'];

/**
 * Drives the page's scroll-linked behavior: parallax offsets per section,
 * per-section reveal-in/out state (IntersectionObserver), and the
 * "curtain" cover/reveal transition used for the nav's smooth-scroll links.
 * Mirrors the original design's DCLogic component (scrollY + offsets +
 * revealed + phase state, observer wiring, timed nav transition).
 */
export function useScrollReveal() {
  const [scrollY, setScrollY] = useState(0);
  const [offsets, setOffsets] = useState({});
  const [revealed, setRevealed] = useState({});
  const [phase, setPhase] = useState('idle'); // 'idle' | 'covering' | 'revealing'

  const sectionRefs = useRef({});
  const observerRef = useRef(null);
  const lastScrollTsRef = useRef(0);
  const navTimer1Ref = useRef(null);
  const navTimer2Ref = useRef(null);
  const navClickCacheRef = useRef({});

  const measureOffsets = useCallback(() => {
    const next = {};
    Object.keys(sectionRefs.current).forEach((key) => {
      const el = sectionRefs.current[key];
      if (el) next[key] = el.getBoundingClientRect().top;
    });
    return next;
  }, []);

  const ensureObserver = useCallback(() => {
    if (observerRef.current) return observerRef.current;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setRevealed((prev) => {
          let changed = false;
          const next = { ...prev };
          entries.forEach((entry) => {
            const id = entry.target.id;
            if (!id) return;
            const isIn = entry.isIntersecting && entry.intersectionRatio > 0.2;
            if (next[id] !== isIn) {
              next[id] = isIn;
              changed = true;
            }
          });
          return changed ? next : prev;
        });
      },
      { threshold: [0, 0.2, 0.4] }
    );
    return observerRef.current;
  }, []);

  const registerSection = useCallback(
    (id) => (node) => {
      if (node) {
        sectionRefs.current[id] = node;
        ensureObserver().observe(node);
      }
    },
    [ensureObserver]
  );

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTsRef.current < 16) return;
      lastScrollTsRef.current = now;
      setOffsets(measureOffsets());
      setScrollY(window.scrollY || window.pageYOffset || 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const initial = {};
    SECTION_IDS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) {
        const r = el.getBoundingClientRect();
        initial[id] = r.top < window.innerHeight * 0.8 && r.bottom > 0;
      }
    });
    setRevealed(initial);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) observerRef.current.disconnect();
      if (navTimer1Ref.current) clearTimeout(navTimer1Ref.current);
      if (navTimer2Ref.current) clearTimeout(navTimer2Ref.current);
    };
  }, [measureOffsets]);

  const handleNavClick = useCallback((targetId) => {
    if (!navClickCacheRef.current[targetId]) {
      navClickCacheRef.current[targetId] = (e) => {
        e.preventDefault();
        setPhase((current) => {
          if (current !== 'idle') return current;
          navTimer1Ref.current = setTimeout(() => {
            const el = sectionRefs.current[targetId] || document.getElementById(targetId);
            if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
            setPhase('revealing');
            navTimer2Ref.current = setTimeout(() => setPhase('idle'), 550);
          }, 480);
          return 'covering';
        });
      };
    }
    return navClickCacheRef.current[targetId];
  }, []);

  return { scrollY, offsets, revealed, phase, registerSection, handleNavClick };
}
