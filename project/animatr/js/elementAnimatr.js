document.addEventListener('DOMContentLoaded', function() {
  const oElementName = document.getElementById('element-selector');
  const oAnimationName = document.getElementById('animation-selector');
  const oAnimationDirection = document.getElementById('direction-selector');
  const oAnimationSpeed = document.getElementById('speed-selector');
  const oAnimationTiming = document.getElementById('timing-selector');
  const oSelectBox = document.getElementsByClassName('animatr-options__selector');
  const oAnimationOutput = document.getElementById('animatr-tag');
  const oAnimateButton = document.getElementsByClassName('animatr-button__animate')[0];
  const oBoxAnimation = document.getElementsByClassName('animatr-animation__box')[0];
  const oTextAnimation = document.getElementsByClassName('animatr-animation__text')[0];
  const oTextElement = document.getElementsByClassName('animatr-element__text');
  const oBoxElement = document.getElementsByClassName('animatr-element__box');
  let sCurrentAnimation = 'scale';

  /**
   * Default value of direction, speed and timing select boxes.
   *
   * @returns void
   */
  function selectionDefault() {
    const oElementToAnimate = document.getElementsByClassName('animatr__selected-tag')[0];
    oAnimationDirection.value = '#oDirectionDefault';
    oAnimationSpeed.value = '#oSpeedDefault';
    oAnimationTiming.value = '#oTimingDefault';
    oElementToAnimate.classList.remove('jaszanimatr__direction--center', 'jaszanimatr__direction--top', 'jaszanimatr__direction--right', 'jaszanimatr__direction--bottom', 'jaszanimatr__direction--left', 'jaszanimatr__speed--normal', 'jaszanimatr__speed--fast', 'jaszanimatr__speed--faster', 'jaszanimatr__speed--fastest', 'jaszanimatr__speed--slow', 'jaszanimatr__speed--slower', 'jaszanimatr__speed--slowest', 'jaszanimatr__timing--ease', 'jaszanimatr__timing--ease-in', 'jaszanimatr__timing--ease-out', 'jaszanimatr__timing--ease-in-out', 'jaszanimatr__timing--linear', 'jaszanimatr__timing--cubic');
  }

  /**
   * Hide/show animation name depends on what element is selected
   *
   * @returns void
   */
  function hideShowAnimationName(bSelectedElement) {
    oAnimationDirection.className = '';
    oAnimationDirection.className = 'animatr-options__selector';

    switch (bSelectedElement) {
      case true:
        oAnimationName.value = '#oTextTracking';
        oBoxAnimation.style.display = 'none';
        oTextAnimation.style.display = 'initial';
        oAnimationDirection.classList.add('animatr__text-tracking-selected');
        break;
      default:
        oAnimationName.value = '#oScale';
        oBoxAnimation.style.display = 'initial';
        oTextAnimation.style.display = 'none';
    }
  }

  /**
   * Check the value of the Element Selector select box
   *
   * @returns void
   */
  function elementSelection() {
    const oSelectedElement = oElementName.value;
    oAnimationOutput.innerHTML = '';

    switch (oSelectedElement) {
      case '#oElementA':
        oAnimationOutput.innerHTML = '<a href="#" class="animatr__selected-tag animatr__selected-tag--text">This is an &lt;a&gt; tag.</a>';
        break;
      case '#oElementAbbr':
        oAnimationOutput.innerHTML = '<abbr class="animatr__selected-tag animatr__selected-tag--text">This is an &lt;abbr&gt; tag.</abbr>';
        break;
      case '#oElementAddress':
        oAnimationOutput.innerHTML = '<address class="animatr__selected-tag animatr__selected-tag--text">This is an &lt;address&gt; tag.</address>';
        break;
      case '#oElementArticle':
        oAnimationOutput.innerHTML = '<article class="animatr__selected-tag animatr__selected-tag--box">This is an &lt;article&gt; tag.</article>';
        break;
      case '#oElementAside':
        oAnimationOutput.innerHTML = '<aside class="animatr__selected-tag animatr__selected-tag--box">This is an &lt;aside&gt; tag.</aside>';
        break;
      case '#oElementBlockqoute':
        oAnimationOutput.innerHTML = '<blockqoute class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;blockqoute&gt; tag.</blockqoute>';
        break;
      case '#oElementButton':
        oAnimationOutput.innerHTML = '<button class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;button&gt; tag.</button>';
        break;
      case '#oElementCode':
        oAnimationOutput.innerHTML = '<code class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;code&gt; tag.</code>';
        break;
      case '#oElementDd':
        oAnimationOutput.innerHTML = '<dd class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;dd&gt; tag.</dd>';
        break;
      case '#oElementDiv':
        oAnimationOutput.innerHTML = '<div class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;div&gt; tag.</div>';
        break;
      case '#oElementDl':
        oAnimationOutput.innerHTML = '<dl class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;dl&gt; tag.</dl>';
        break;
      case '#oElementDt':
        oAnimationOutput.innerHTML = '<dt class="animatr__selected-tag  animatr__selected-tag--text">This is a &lt;dt&gt; tag.</dt>';
        break;
      case '#oElementEm':
        oAnimationOutput.innerHTML = '<em class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;em&gt; tag.</em>';
        break;
      case '#oElementFooter':
        oAnimationOutput.innerHTML = '<footer class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;footer&gt; tag.</footer>';
        break;
      case '#oElementForm':
        oAnimationOutput.innerHTML = '<form class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;form&gt; tag.</form>';
        break;
      case '#oElementHeading':
        oAnimationOutput.innerHTML = '<h1 class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;h1&gt; tag.</h1>';
        break;
      case '#oElementI':
        oAnimationOutput.innerHTML = '<i class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;i&gt; tag.</i>';
        break;
      case '#oElementIframe':
        oAnimationOutput.innerHTML = '<iframe src="https://jasz.ml" class="animatr__selected-tag animatr__selected-tag--box"></iframe>';
        break;
      case '#oElementImg':
        oAnimationOutput.innerHTML = '<img class="animatr__selected-tag animatr__selected-tag--box" src="../img/cafe24Logo.png" alt="Cafe24 Logo" />';
        break;
      case '#oElementInput':
        oAnimationOutput.innerHTML = '<input type="text" class="animatr__selected-tag animatr__selected-tag--text" placeholder="This is an <input> tag." />';
        break;
      case '#oElementLabel':
        oAnimationOutput.innerHTML = '<label class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;label&gt; tag.</label>';
        break;
      case '#oElementLi':
        oAnimationOutput.innerHTML = '<li class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;li&gt; tag.</li>';
        break;
      case '#oElementMain':
        oAnimationOutput.innerHTML = '<main class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;main&gt; tag.</main>';
        break;
      case '#oElementMark':
        oAnimationOutput.innerHTML = '<mark class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;mark&gt; tag.</mark>';
        break;
      case '#oElementMeter':
        oAnimationOutput.innerHTML = '<meter class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;meter&gt; tag.</meter>';
        break;
      case '#oElementNav':
        oAnimationOutput.innerHTML = '<nav class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;nav&gt; tag.</nav>';
        break;
      case '#oElementOl':
        oAnimationOutput.innerHTML = '<ol class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;ol&gt; tag.</ol>';
        break;
      case '#oElementP':
        oAnimationOutput.innerHTML = '<p class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;p&gt; tag.</p>';
        break;
      case '#oElementPre':
        oAnimationOutput.innerHTML = '<pre class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;pre&gt; tag.</pre>';
        break;
      case '#oElementQ':
        oAnimationOutput.innerHTML = '<q class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;q&gt; tag.</q>';
        break;
      case '#oElementSection':
        oAnimationOutput.innerHTML = '<section class="animatr__selected-tag animatr__selected-tag--box">This is a &lt;section&gt; tag.</section>';
        break;
      case '#oElementSelect':
        oAnimationOutput.innerHTML = '<select class="animatr__selected-tag animatr__selected-tag--text"><option>This is a &lt;select&gt; tag.</option></select>';
        break;
      case '#oElementSmall':
        oAnimationOutput.innerHTML = '<small class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;small&gt; tag.</small>';
        break;
      case '#oElementSpan':
        oAnimationOutput.innerHTML = '<span class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;span&gt; tag.</span>';
        break;
      case '#oElementStrong':
        oAnimationOutput.innerHTML = '<strong class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;strong&gt; tag.</strong>';
        break;
      case '#oElementTable':
        oAnimationOutput.innerHTML = '<table class="animatr__selected-tag animatr__selected-tag--box"><tr><th>This is a &lt;table&gt; tag.</th></tr></table>';
        break;
      case '#oElementTextarea':
        oAnimationOutput.innerHTML = '<textarea class="animatr__selected-tag animatr__selected-tag--text">This is a &lt;textarea&gt; tag.</textarea>';
        break;
      case '#oElementU':
        oAnimationOutput.innerHTML = '<u class="animatr__selected-tag animatr__selected-tag--text">This is an &lt;u&gt; tag.</u>';
        break;
      case '#oElementUl':
        oAnimationOutput.innerHTML = '<ul class="animatr__selected-tag animatr__selected-tag--text">This is an &lt;ul&gt; tag.</ul>';
        break;
      case '#oElementVideo':
        oAnimationOutput.innerHTML = '<video class="animatr__selected-tag animatr__selected-tag--box" src="../video/splash-logo.mp4" controls="true"></video>';
        break;
      default:
        oAnimationOutput.innerHTML = '<a href="#" class="animatr__selected-tag animatr__selected-tag--text">This is an &lt;a&gt; tag.</a>';
    }
  }

  /**
   * Check the value of the Animation Name Selector select box
   *
   * @returns void
   */
  function animationSelection() {
    const oSelectedAnimation = oAnimationName.value;
    const oElementToAnimate = document.getElementsByClassName('animatr__selected-tag')[0];

    oElementToAnimate.classList.remove('jaszanimatr__scale-in', 'jaszanimatr__scale-out', 'jaszanimatr__slide-in', 'jaszanimatr__slide-out', 'jaszanimatr__fade-in', 'jaszanimatr__fade-out', 'jaszanimatr__text-tracking-in', 'jaszanimatr__text-tracking-out', 'jaszanimatr__text-focus', 'jaszanimatr__text-blur', 'jaszanimatr__text-shadow-in', 'jaszanimatr__text-shadow-out');
    oAnimationDirection.classList.remove('animatr__text-tracking-selected', 'animatr__slide-selected', 'animatr__text-focus-selected', 'animatr__text-blur-selected');

    switch (oSelectedAnimation) {
      case '#oSlide':
        oElementToAnimate.classList.add('jaszanimatr__slide-in');
        sCurrentAnimation = 'slide-in';
        oAnimationDirection.classList.add('animatr__slide-selected');
        break;
      case '#oFade':
        oElementToAnimate.classList.add('jaszanimatr__fade-in');
        sCurrentAnimation = 'fade-in';
        break;
      case '#oTextTracking':
        oElementToAnimate.classList.add('jaszanimatr__text-tracking-in');
        sCurrentAnimation = 'text-tracking-in';
        oAnimationDirection.classList.add('animatr__text-tracking-selected');
        break;
      case '#oTextFocus':
        oElementToAnimate.classList.add('jaszanimatr__text-focus');
        sCurrentAnimation = 'text-focus';
        oAnimationDirection.classList.add('animatr__text-focus-selected');
        break;
      case '#oTextBlur':
        oElementToAnimate.classList.add('jaszanimatr__text-blur');
        sCurrentAnimation = 'text-blur';
        oAnimationDirection.classList.add('animatr__text-blur-selected');
        break;
      case '#oTextShadow':
        oElementToAnimate.classList.add('jaszanimatr__text-shadow-in');
        sCurrentAnimation = 'text-shadow-in';
        break;
      default:
        oElementToAnimate.classList.add('jaszanimatr__scale-in');
        sCurrentAnimation = 'scale-in';
    }
  }

  /**
   * Check the value of the Direction Selector select box
   *
   * @returns void
   */
  function directionSelection() {
    const oSelectedDirection = oAnimationDirection.value;
    const oElementToAnimate = document.getElementsByClassName('animatr__selected-tag')[0];

    oElementToAnimate.classList.remove('jaszanimatr__direction--center', 'jaszanimatr__direction--top', 'jaszanimatr__direction--right', 'jaszanimatr__direction--bottom', 'jaszanimatr__direction--left');

    switch (oSelectedDirection) {
      case '#oDirectionTop':
        oElementToAnimate.classList.add('jaszanimatr__direction--top');
        break;
      case '#oDirectionRight':
        oElementToAnimate.classList.add('jaszanimatr__direction--right');
        break;
      case '#oDirectionBottom':
        oElementToAnimate.classList.add('jaszanimatr__direction--bottom');
        break;
      case '#oDirectionLeft':
        oElementToAnimate.classList.add('jaszanimatr__direction--left');
        break;
      default:
        oElementToAnimate.classList.add('jaszanimatr__direction--center');
    }
  }

  /**
   * Check the value of the Speed Selector select box
   *
   * @returns void
   */
  function speedSelection() {
    const oSelectedSpeed = oAnimationSpeed.value;
    const oElementToAnimate = document.getElementsByClassName('animatr__selected-tag')[0];

    oElementToAnimate.classList.remove('jaszanimatr__speed--normal', 'jaszanimatr__speed--fast', 'jaszanimatr__speed--faster', 'jaszanimatr__speed--fastest', 'jaszanimatr__speed--slow', 'jaszanimatr__speed--slower', 'jaszanimatr__speed--slowest');

    switch (oSelectedSpeed) {
      case '#oSpeedNormal':
        oElementToAnimate.classList.add('jaszanimatr__speed--normal');
        break;
      case '#oSpeedFast':
        oElementToAnimate.classList.add('jaszanimatr__speed--fast');
        break;
      case '#oSpeedFaster':
        oElementToAnimate.classList.add('jaszanimatr__speed--faster');
        break;
      case '#oSpeedFastest':
        oElementToAnimate.classList.add('jaszanimatr__speed--fastest');
        break;
      case '#oSpeedSlow':
        oElementToAnimate.classList.add('jaszanimatr__speed--slow');
        break;
      case '#oSpeedSlower':
        oElementToAnimate.classList.add('jaszanimatr__speed--slower');
        break;
      case '#oSpeedSlowest':
        oElementToAnimate.classList.add('jaszanimatr__speed--slowest');
        break;
      default:
        oElementToAnimate.classList.add('jaszanimatr__speed--normal');
    }
  }

  /**
   * Check the value of the Timing Selector select box
   *
   * @returns void
   */
  function timingSelection() {
    const oSelectedTiming = oAnimationTiming.value;
    const oElementToAnimate = document.getElementsByClassName('animatr__selected-tag')[0];

    oElementToAnimate.classList.remove('jaszanimatr__timing--ease', 'jaszanimatr__timing--ease-in', 'jaszanimatr__timing--ease-out', 'jaszanimatr__timing--ease-in-out', 'jaszanimatr__timing--linear', 'jaszanimatr__timing--cubic');

    switch (oSelectedTiming) {
      case '#oTimingEase':
        oElementToAnimate.classList.add('jaszanimatr__timing--ease');
        break;
      case '#oTimingEaseIn':
        oElementToAnimate.classList.add('jaszanimatr__timing--ease-in');
        break;
      case '#oTimingEaseOut':
        oElementToAnimate.classList.add('jaszanimatr__timing--ease-out');
        break;
      case '#oTimingEaseInOut':
        oElementToAnimate.classList.add('jaszanimatr__timing--ease-in-out');
        break;
      case '#oTimingLinear':
        oElementToAnimate.classList.add('jaszanimatr__timing--linear');
        break;
      case '#oTimingCubic':
        oElementToAnimate.classList.add('jaszanimatr__timing--cubic');
        break;
      default:
        oElementToAnimate.classList.add('jaszanimatr__timing--cubic');
    }
  }

  /**
   * Check the current animation of the output box if the animation is going in or out
   *
   * @returns void
   */
  function checkCurrentAnimation() {
    const oElementToAnimate = document.getElementsByClassName('animatr__selected-tag')[0];

    oElementToAnimate.classList.remove('jaszanimatr__scale-in', 'jaszanimatr__scale-out', 'jaszanimatr__slide-in', 'jaszanimatr__slide-out', 'jaszanimatr__fade-in', 'jaszanimatr__fade-out', 'jaszanimatr__text-tracking-in', 'jaszanimatr__text-tracking-out', 'jaszanimatr__text-focus', 'jaszanimatr__text-blur', 'jaszanimatr__text-shadow-in', 'jaszanimatr__text-shadow-out');

    switch (sCurrentAnimation) {
      case 'scale-in':
        oElementToAnimate.classList.add('jaszanimatr__scale-out');
        sCurrentAnimation = 'scale-out';
        break;
      case 'scale-out':
        oElementToAnimate.classList.add('jaszanimatr__scale-in');
        sCurrentAnimation = 'scale-in';
        break;
      case 'slide-in':
        oElementToAnimate.classList.add('jaszanimatr__slide-out');
        sCurrentAnimation = 'slide-out';
        break;
      case 'slide-out':
        oElementToAnimate.classList.add('jaszanimatr__slide-in');
        sCurrentAnimation = 'slide-in';
        break;
      case 'fade-in':
        oElementToAnimate.classList.add('jaszanimatr__fade-out');
        sCurrentAnimation = 'fade-out';
        break;
      case 'fade-out':
        oElementToAnimate.classList.add('jaszanimatr__fade-in');
        sCurrentAnimation = 'fade-in';
        break;
      case 'text-tracking-in':
        oElementToAnimate.classList.add('jaszanimatr__text-tracking-out');
        sCurrentAnimation = 'text-tracking-out';
        break;
      case 'text-tracking-out':
        oElementToAnimate.classList.add('jaszanimatr__text-tracking-in');
        sCurrentAnimation = 'text-tracking-in';
        break;
      case 'text-focus':
        oElementToAnimate.classList.add('jaszanimatr__text-blur');
        sCurrentAnimation = 'text-blur';
        break;
      case 'text-blur':
        oElementToAnimate.classList.add('jaszanimatr__text-focus');
        sCurrentAnimation = 'text-focus';
        break;
      case 'text-shadow-in':
        oElementToAnimate.classList.add('jaszanimatr__text-shadow-out');
        sCurrentAnimation = 'text-shadow-out';
        break;
      case 'text-shadow-out':
        oElementToAnimate.classList.add('jaszanimatr__text-shadow-in');
        sCurrentAnimation = 'text-shadow-in';
        break;
      default:
        oElementToAnimate.classList.add('jaszanimatr__scale-out');
        sCurrentAnimation = 'scale-out';
    }
  }

  /**
   * Click event of all the select box
   *
   * @param {object} oSelectedValue - Clicked select box
   * @returns void
   */
  [].forEach.call(oSelectBox, function(oSelectedValue) {
    oSelectedValue.addEventListener('change', function() {
      elementSelection();
      animationSelection();
      directionSelection();
      speedSelection();
      timingSelection();
    });
  });

  /**
   * Click event when text or box element was selected
   *
   * @param {object} oSelectedElement - Selected option in the element select box
   * @returns void
   */
  oElementName.addEventListener('change', function() {
    const oSelectedItemClass = this.options[this.selectedIndex].className;
    const oSelectedElement = document.getElementsByClassName('animatr__selected-tag')[0];
    oSelectedElement.className = '';

    switch (oSelectedItemClass) {
      case 'animatr-element__text':
        hideShowAnimationName(true);
        oSelectedElement.classList.add('animatr__selected-tag', 'animatr__selected-tag--text', 'jaszanimatr__text-tracking-in');
        sCurrentAnimation = 'text-tracking-in';
        break;
      default:
        hideShowAnimationName(false);
        oSelectedElement.classList.add('animatr__selected-tag', 'animatr__selected-tag--box', 'jaszanimatr__scale-in');
        sCurrentAnimation = 'scale-in';
    }
  });

  [].forEach.call(oTextElement, function(oSelectedElement) {
    oSelectedElement.addEventListener('click', function() {
      hideShowAnimationName(true);
    });
  });

  [].forEach.call(oBoxElement, function(oSelectedElement) {
    oSelectedElement.addEventListener('click', function() {
      hideShowAnimationName(false);
    });
  });

  /**
   * Click event that change the direction, speed, and timing
   * select box to default when animation name was changed
   *
   * @returns void
   */
  oElementName.addEventListener('change', selectionDefault);
  oAnimationName.addEventListener('change', selectionDefault);

  /**
   * Click event for the output button
   *
   * @returns void
   */
  oAnimateButton.addEventListener('click', checkCurrentAnimation);

  /**
   * Initialization
   *
   */
  hideShowAnimationName(true);
  elementSelection();
  animationSelection();
  directionSelection();
  speedSelection();
  timingSelection();
});
