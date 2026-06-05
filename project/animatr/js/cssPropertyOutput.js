document.addEventListener('DOMContentLoaded', function() {
  const oAnimationName = document.getElementById('animation-selector');
  const oAnimationDirection = document.getElementById('direction-selector');
  const oAnimationSpeed = document.getElementById('speed-selector');
  const oAnimationTiming = document.getElementById('timing-selector');
  const oSelectBox = document.getElementsByClassName('animatr-options__selector');
  const oCssOutput = document.getElementById('css-box');
  let sCurrentAnimation = 'scale';
  let sCurrentDirection = 'center';
  let sCurrentSpeed = 'normal';
  let sCurrentTiming = 'cubic';
  let sAnimationNameIn = '';
  let sAnimationNameOut = '';
  let sAnimationDirection = '';
  let sAnimationSpeed = '';
  let sAnimationTiming = '';

  /**
   * Check the value of the Animation Name Selector select box
   *
   * @returns void
   */
  function animationSelection() {
    const oSelectedAnimation = oAnimationName.value;

    switch (oSelectedAnimation) {
      case '#oSlide':
        sCurrentAnimation = 'slide-in';
        break;
      case '#oFade':
        sCurrentAnimation = 'fade-in';
        break;
      case '#oTextTracking':
        sCurrentAnimation = 'text-tracking-in';
        break;
      case '#oTextFocus':
        sCurrentAnimation = 'text-focus';
        break;
      case '#oTextBlur':
        sCurrentAnimation = 'text-blur';
        break;
      case '#oTextShadow':
        sCurrentAnimation = 'text-shadow-in';
        break;
      default:
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

    switch (oSelectedDirection) {
      case '#oDirectionCenter':
        sCurrentDirection = 'center';
        break;
      case '#oDirectionTop':
        sCurrentDirection = 'top';
        break;
      case '#oDirectionRight':
        sCurrentDirection = 'right';
        break;
      case '#oDirectionBottom':
        sCurrentDirection = 'bottom';
        break;
      case '#oDirectionLeft':
        sCurrentDirection = 'left';
        break;
      default:
        sCurrentDirection = 'default';
    }
  }

  /**
   * Check the value of the Speed Selector select box
   *
   * @returns void
   */
  function speedSelection() {
    const oSelectedSpeed = oAnimationSpeed.value;

    switch (oSelectedSpeed) {
      case '#oSpeedFast':
        sCurrentSpeed = 'fast';
        break;
      case '#oSpeedFaster':
        sCurrentSpeed = 'faster';
        break;
      case '#oSpeedFastest':
        sCurrentSpeed = 'fastest';
        break;
      case '#oSpeedSlow':
        sCurrentSpeed = 'slow';
        break;
      case '#oSpeedSlower':
        sCurrentSpeed = 'slower';
        break;
      case '#oSpeedSlowest':
        sCurrentSpeed = 'slowest';
        break;
      default:
        sCurrentSpeed = 'normal';
    }
  }

  /**
   * Check the value of the Timing Selector select box
   *
   * @returns void
   */
  function timingSelection() {
    const oSelectedTiming = oAnimationTiming.value;

    switch (oSelectedTiming) {
      case '#oTimingEase':
        sCurrentTiming = 'ease';
        break;
      case '#oTimingEaseIn':
        sCurrentTiming = 'ease-in';
        break;
      case '#oTimingEaseOut':
        sCurrentTiming = 'ease-out';
        break;
      case '#oTimingEaseInOut':
        sCurrentTiming = 'ease-in-out';
        break;
      case '#oTimingLinear':
        sCurrentTiming = 'linear';
        break;
      default:
        sCurrentTiming = 'cubic';
    }
  }

  /**
   * Get the selected value of animation direction
   * For Scale, Fade and Text Shadow animation direction
   *
   * @returns void
   */
  function getSelectedScaleDirection() {
    switch (sCurrentDirection) {
      case 'top':
        sAnimationDirection = '-top';
        break;
      case 'right':
        sAnimationDirection = '-right';
        break;
      case 'bottom':
        sAnimationDirection = '-bottom';
        break;
      case 'left':
        sAnimationDirection = '-left';
        break;
      default:
        sAnimationDirection = '-center';
    }
  }

  /**
   * Get the selected value of animation direction
   * For Slide animation direction
   *
   * @returns void
   */
  function getSelectedSlideDirection() {
    switch (sCurrentDirection) {
      case 'top':
        sAnimationDirection = '-top';
        break;
      case 'right':
        sAnimationDirection = '-right';
        break;
      case 'bottom':
        sAnimationDirection = '-bottom';
        break;
      case 'left':
        sAnimationDirection = '-left';
        break;
      default:
        sAnimationDirection = '-top';
    }
  }

  /**
   * Get the selected value of animation direction
   * For Text Tracking animation direction
   *
   * @returns void
   */
  function getSelectedTextTrackingDirection() {
    switch (sCurrentDirection) {
      case 'top':
        sAnimationDirection = '-top';
        break;
      case 'bottom':
        sAnimationDirection = '-bottom';
        break;
      default:
        sAnimationDirection = '-center';
    }
  }

  /**
   * Get the selected value of Animation Name
   *
   * @returns void
   */
  function getSelectedAnimation() {
    switch (sCurrentAnimation) {
      case 'slide-in':
        sAnimationNameIn = 'slide-in';
        sAnimationNameOut = 'slide-out';
        getSelectedSlideDirection();
        break;
      case 'fade-in':
        sAnimationNameIn = 'fade-in';
        sAnimationNameOut = 'fade-out';
        getSelectedScaleDirection();
        break;
      case 'text-tracking-in':
        sAnimationNameIn = 'text-tracking-in';
        sAnimationNameOut = 'text-tracking-out';
        getSelectedTextTrackingDirection();
        break;
      case 'text-focus':
        sAnimationNameIn = 'text-focus';
        sAnimationNameOut = 'text-blur';
        sAnimationDirection = '';
        break;
      case 'text-blur':
        sAnimationNameIn = 'text-blur';
        sAnimationNameOut = 'text-focus';
        sAnimationDirection = '';
        break;
      case 'text-shadow-in':
        sAnimationNameIn = 'text-shadow-in';
        sAnimationNameOut = 'text-shadow-out';
        getSelectedScaleDirection();
        break;
      default:
        sAnimationNameIn = 'scale-in';
        sAnimationNameOut = 'scale-out';
        getSelectedScaleDirection();
    }
  }

  /**
   * Get the selected value of animation speed
   *
   * @returns void
   */
  function getSelectedSpeed() {
    switch (sCurrentSpeed) {
      case 'fast':
        sAnimationSpeed = '0.3s';
        break;
      case 'faster':
        sAnimationSpeed = '0.2s';
        break;
      case 'fastest':
        sAnimationSpeed = '0.1s';
        break;
      case 'slow':
        sAnimationSpeed = '0.6s';
        break;
      case 'slower':
        sAnimationSpeed = '0.8s';
        break;
      case 'slowest':
        sAnimationSpeed = '1s';
        break;
      default:
        sAnimationSpeed = '0.4s';
    }
  }

  /**
   * Get the selected value of animation timing
   *
   * @returns void
   */
  function getSelectedTiming() {
    switch (sCurrentTiming) {
      case 'ease':
        sAnimationTiming = 'ease;';
        break;
      case 'ease-in':
        sAnimationTiming = 'ease-in;';
        break;
      case 'ease-out':
        sAnimationTiming = 'ease-out;';
        break;
      case 'ease-in-out':
        sAnimationTiming = 'ease-in-out;';
        break;
      case 'linear':
        sAnimationTiming = 'linear;';
        break;
      default:
        sAnimationTiming = 'cubic-bezier(.25, .46, .45, .94);';
    }
  }

  /**
   * Get the selected value of all select box
   *
   * @returns void
   */
  function getSelectedOptions() {
    timingSelection();
    speedSelection();
    directionSelection();
    animationSelection();
    getSelectedAnimation();
    getSelectedSpeed();
    getSelectedTiming();
  }

  /**
   * Show the CSS property to the CSS box
   *
   * @returns void
   */
  function showCSSProperty() {
    getSelectedOptions();
    const sCurrentProperty = '' + sAnimationDirection + ' ' + sAnimationSpeed + ' ' + sAnimationTiming + '\n}';
    oCssOutput.innerHTML = '.jaszanimatr__' + sAnimationNameIn + ' {\n  animation: ' + sAnimationNameIn + sCurrentProperty + '\n\n.jaszanimatr__' + sAnimationNameOut + ' {\n  animation: ' + sAnimationNameOut + sCurrentProperty;
  }

  /**
   * Click event of all the select box
   *
   * @param {object} oClickedItem - Clicked select box
   * @returns void
   */
  [].forEach.call(oSelectBox, function(oClickedItem) {
    oClickedItem.addEventListener('change', showCSSProperty);
  });

  /**
   * Init Function
   *
   */
  showCSSProperty();
});
