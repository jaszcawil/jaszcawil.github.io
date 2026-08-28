import { useMemo } from 'react';
import { useScrollReveal } from './useScrollReveal.js';
import { PROFILE, SKILL_DEFS, JOBS } from './data.js';
import profilePhoto from './assets/profile-photo.jpg';
import aboutBg from './assets/about-bg.jpg';
import skillsBg from './assets/skills-bg.jpg';
import experienceBg from './assets/experience-bg.jpg';
import contactBg from './assets/contact-bg.jpg';

// Config, matching the original design's editable props.
const PARALLAX_STRENGTH = 'heavy'; // 'heavy' | 'subtle'

export default function App() {
  const { scrollY, offsets, revealed, phase, registerSection, handleNavClick } = useScrollReveal();
  const strength = PARALLAX_STRENGTH === 'heavy' ? 1 : 0.4;
  const y = scrollY;

  const revealClass = (id) => (revealed[id] ? 'in' : '');
  const cls = revealClass;
  const delay = (i, step = 0.1) => `${i * step}s`;

  const bgFor = (key, factor, url) => {
    const off = offsets[key] ?? 0;
    return {
      transform: `translate3d(0, ${off * factor * strength}px, 0) scale(1.3)`,
      backgroundImage: `url(${url})`,
    };
  };
  const bg = {
    about: bgFor('about', 0.45, aboutBg),
    skills: bgFor('skills', 0.4, skillsBg),
    experience: bgFor('experience', 0.35, experienceBg),
    contact: bgFor('contact', 0.42, contactBg),
  };

  let curtainTransform = 'scaleY(0)';
  let curtainOrigin = 'bottom';
  let curtainTransition = 'none';
  if (phase === 'covering') {
    curtainTransform = 'scaleY(1)';
    curtainOrigin = 'bottom';
    curtainTransition = 'transform .5s cubic-bezier(.76,0,.24,1)';
  } else if (phase === 'revealing') {
    curtainTransform = 'scaleY(0)';
    curtainOrigin = 'top';
    curtainTransition = 'transform .55s cubic-bezier(.76,0,.24,1) .05s';
  }
  const curtainStyle = {
    position: 'fixed', inset: 0, zIndex: 100, pointerEvents: 'none',
    background: 'linear-gradient(160deg, var(--color-accent-900), var(--color-bg) 70%)',
    borderBottom: '2px solid var(--color-accent)',
    transformOrigin: curtainOrigin, transform: curtainTransform, transition: curtainTransition,
  };

  const navStyle = {
    background: y > 40 ? 'color-mix(in srgb, var(--color-bg) 82%, transparent)' : 'transparent',
    backdropFilter: y > 40 ? 'blur(10px)' : 'none',
    borderBottom: y > 40 ? '1px solid var(--color-divider)' : '1px solid transparent',
    transition: 'background .3s, border-color .3s',
  };

  const photoOff = offsets.about ?? 0;
  const photoWrapStyle = { transform: `translate3d(0, ${photoOff * -0.1 * strength}px, 0)` };
  const ringStyle = {
    position: 'absolute', inset: -18, borderRadius: '50%',
    border: '1px solid var(--color-accent-700)',
    transform: `rotate(${y * 0.05 * strength}deg)`,
  };

  const heroLines = useMemo(
    () => [
      { text: PROFILE.name, color: 'var(--color-accent-300)' },
      { text: 'builds clean, accessible', color: 'inherit' },
      { text: 'web experiences.', color: 'inherit' },
    ],
    []
  ).map((l, i) => ({ ...l, cls: cls('about'), delay: delay(i, 0.12) }));

  const aboutInfo = [
    { label: 'Location', value: PROFILE.location },
    { label: 'Languages', value: PROFILE.languages },
    { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  ].map((r, i) => ({ ...r, cls: cls('about'), delay: `${0.36 + i * 0.1}s` }));

  const aboutSocial = [
    { label: 'GitHub', href: PROFILE.social.github },
    { label: 'LinkedIn', href: PROFILE.social.linkedin },
    { label: 'Facebook', href: PROFILE.social.facebook },
    { label: 'YouTube', href: PROFILE.social.youtube },
  ].map((s, i) => ({ ...s, cls: cls('about'), delay: `${0.66 + i * 0.08}s` }));

  const contactCards = [
    { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, target: '_self' },
    { label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}`, target: '_self' },
    { label: 'Website', value: PROFILE.website, href: PROFILE.websiteHref, target: '_blank' },
  ].map((c, i) => ({ ...c, cls: cls('contact'), delay: `${i * 0.12}s` }));

  const contactSocial = [
    { label: 'GitHub', href: PROFILE.social.github, target: '_blank', btnClass: 'btn btn-ghost' },
    { label: 'LinkedIn', href: PROFILE.social.linkedin, target: '_blank', btnClass: 'btn btn-ghost' },
    { label: 'Facebook', href: PROFILE.social.facebook, target: '_blank', btnClass: 'btn btn-ghost' },
    { label: 'YouTube', href: PROFILE.social.youtube, target: '_blank', btnClass: 'btn btn-ghost' },
    { label: 'Say hello', href: `mailto:${PROFILE.email}`, target: '_self', btnClass: 'btn btn-primary' },
  ].map((s, i) => ({ ...s, cls: cls('contact'), delay: `${0.4 + i * 0.08}s` }));

  const skills = useMemo(
    () =>
      SKILL_DEFS.map(([label, tagCls, size], i) => ({
        label,
        cls: tagCls,
        style: {
          fontSize: size,
          '--rot': `${(i % 2 === 0 ? 1 : -1) * (2 + (i % 3))}deg`,
          animation: `floaty ${4.5 + (i % 5) * 0.6}s ease-in-out ${(i % 6) * 0.25}s infinite`,
        },
      })),
    []
  );

  const experienceIn = revealed.experience;
  const jobs = JOBS.map((job, i) => ({
    ...job,
    revealClass: experienceIn ? 'in' : '',
    style: { animationDelay: experienceIn ? `${i * 0.12}s` : '0s' },
  }));

  return (
    <div style={{ position: 'relative', fontFamily: 'var(--font-body)', color: 'var(--color-text)', background: 'var(--color-bg)' }}>
      <div aria-hidden="true" style={curtainStyle}></div>

      {/* nav */}
      <nav className="navwrap" style={navStyle}>
        <div
          style={{
            maxWidth: 1200, margin: '0 auto', padding: '10px clamp(16px,5vw,72px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            flexWrap: 'wrap', minHeight: 56,
          }}
        >
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>
            {PROFILE.logo}
          </span>
          <div style={{ display: 'flex', gap: 'clamp(14px,3vw,28px)', alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="navlink" href="#about" onClick={handleNavClick('about')}>About</a>
            <a className="navlink" href="#skills" onClick={handleNavClick('skills')}>Skills</a>
            <a className="navlink" href="#experience" onClick={handleNavClick('experience')}>Experience</a>
            <a className="navlink" href="#contact" onClick={handleNavClick('contact')}>Contact</a>
            <a href={`mailto:${PROFILE.email}`} className="btn btn-primary hire-cta" style={{ padding: '8px 16px', fontSize: 13 }}>
              Hire me
            </a>
          </div>
        </div>
      </nav>

      {/* ABOUT */}
      <section
        id="about"
        ref={registerSection('about')}
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '96px 0 56px' }}
      >
        <div aria-hidden="true" className="bgimg" style={bg.about}></div>
        <div
          aria-hidden="true"
          className="scrim"
          style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-bg) 78%, transparent), color-mix(in srgb, var(--color-bg) 90%, transparent) 60%, var(--color-bg))' }}
        ></div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,72px)' }}>
          <div
            className="about-grid"
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0,7fr) minmax(240px,5fr)', gap: 'clamp(24px,5vw,96px)', alignItems: 'center' }}
          >
            <div className={`glass reveal-big ${revealClass('about')}`} style={{ padding: 'clamp(24px,4vw,48px)' }}>
              <span className={`kicker ${revealClass('about')}`}>Front-end Web Developer</span>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(36px,6vw,54px)', lineHeight: 1.06, letterSpacing: '-0.015em', margin: '0 0 24px' }}>
                {heroLines.map((line, i) => (
                  <span key={i} className={`reveal-up ${line.cls}`} style={{ display: 'block', color: line.color, animationDelay: line.delay }}>
                    {line.text}
                  </span>
                ))}
              </h1>
              <p
                className={`reveal-up ${revealClass('about')}`}
                style={{ animationDelay: '0.3s', fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.65, maxWidth: '56ch', color: 'color-mix(in srgb, var(--color-text) 88%, transparent)', margin: '0 0 32px' }}
              >
                Front-end developer with over a decade turning designs into responsive, SEO-friendly, accessible
                interfaces — from freelance builds to leading junior developers.
              </p>

              <div style={{ display: 'grid', gap: 12, maxWidth: 440, marginBottom: 32 }}>
                {aboutInfo.map((info) => (
                  <div key={info.label} className={`info-row reveal-up ${info.cls}`} style={{ animationDelay: info.delay }}>
                    <span className="info-label">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {aboutSocial.map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tag tag-outline reveal-up ${soc.cls}`}
                    style={{ animationDelay: soc.delay }}
                  >
                    {soc.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={photoWrapStyle}>
              <div style={{ position: 'relative', width: '100%', maxWidth: 300, margin: '0 auto' }}>
                <div aria-hidden="true" style={ringStyle}></div>
                <img
                  src={profilePhoto}
                  alt="Portrait of Jasz Cawil"
                  style={{
                    width: '100%', aspectRatio: '1 / 1', position: 'relative', zIndex: 1,
                    boxShadow: 'var(--shadow-lg)', borderRadius: '50%',
                    objectFit: 'cover', objectPosition: '50% 22%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        ref={registerSection('skills')}
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '80px 0' }}
      >
        <div aria-hidden="true" className="bgimg" style={bg.skills}></div>
        <div aria-hidden="true" className="scrim" style={{ background: 'color-mix(in srgb, var(--color-bg) 82%, transparent)' }}></div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,72px)' }}>
          <div className={`glass reveal-big ${revealClass('skills')}`} style={{ padding: 'clamp(24px,4vw,48px)' }}>
            <span className={`kicker ${revealClass('skills')}`}>Skills</span>
            <h2
              className={`reveal-up ${revealClass('skills')}`}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)', letterSpacing: '-0.012em', margin: '0 0 40px', maxWidth: '32ch' }}
            >
              What I bring to a build
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
              {skills.map((s) => (
                <span key={s.label} className={`tag ${s.cls} tagfloat`} style={s.style}>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        ref={registerSection('experience')}
        style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', padding: '96px 0' }}
      >
        <div aria-hidden="true" className="bgimg" style={bg.experience}></div>
        <div
          aria-hidden="true"
          className="scrim"
          style={{ background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-bg) 85%, transparent), color-mix(in srgb, var(--color-bg) 90%, transparent))' }}
        ></div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,72px)' }}>
          <span className={`kicker ${revealClass('experience')}`}>Experience</span>
          <h2
            className={`reveal-up ${revealClass('experience')}`}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(28px,3.5vw,42px)', letterSpacing: '-0.012em', margin: '0 0 48px', maxWidth: '32ch', color: 'var(--color-text)' }}
          >
            Where I've worked
          </h2>

          <div style={{ display: 'grid', gap: 28 }}>
            {jobs.map((job) => (
              <div key={job.id} className={`jobcard card elev-lg ${job.revealClass}`} style={job.style}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                  <p className="card-title" style={{ margin: 0, fontSize: 22 }}>{job.role}</p>
                  <span style={{ fontSize: 12.5, color: 'var(--color-accent-300)', letterSpacing: '0.03em' }}>{job.dates}</span>
                </div>
                <p className="card-kicker" style={{ margin: '0 0 16px' }}>{job.company}</p>
                <ul style={{ margin: '0 0 18px', paddingLeft: 18, display: 'grid', gap: 6 }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 14.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--color-text) 82%, transparent)' }}>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {job.stack.map((t) => (
                    <span key={t} className="tag tag-neutral" style={{ fontSize: 11.5 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        ref={registerSection('contact')}
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '96px 0 48px' }}
      >
        <div aria-hidden="true" className="bgimg" style={bg.contact}></div>
        <div aria-hidden="true" className="scrim" style={{ background: 'color-mix(in srgb, var(--color-bg) 84%, transparent)' }}></div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,72px)' }}>
          <div className={`glass reveal-big ${revealClass('contact')}`} style={{ padding: 'clamp(24px,4vw,48px)' }}>
            <span className={`kicker ${revealClass('contact')}`}>Contact</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
              <h2
                className={`reveal-up ${revealClass('contact')}`}
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(30px,4.5vw,50px)', letterSpacing: '-0.014em', margin: 0, maxWidth: '20ch' }}
              >
                Let's build something together.
              </h2>
              <span className="tag tag-accent" style={{ fontSize: 12.5, animation: 'pulseGlow 2.4s ease-in-out infinite' }}>
                Open for work
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, marginBottom: 36 }}>
              {contactCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.target}
                  rel="noopener noreferrer"
                  className={`card contactbtn reveal-up ${c.cls}`}
                  style={{ animationDelay: c.delay, textDecoration: 'none', color: 'inherit' }}
                >
                  <p style={{ margin: '0 0 4px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent-300)' }}>{c.label}</p>
                  <p style={{ margin: 0, fontSize: 15 }}>{c.value}</p>
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
              {contactSocial.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.target}
                  rel="noopener noreferrer"
                  className={`${s.btnClass} reveal-up ${s.cls}`}
                  style={{ animationDelay: s.delay }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            <footer
              style={{ fontSize: 13, color: 'color-mix(in srgb, var(--color-text) 60%, transparent)', paddingTop: 20, borderTop: '1px solid color-mix(in srgb, var(--color-neutral-100) 16%, transparent)' }}
            >
              &copy; {new Date().getFullYear()} Jasz Cawil.
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}
