document.addEventListener('DOMContentLoaded', function() {
  const oAnimationName = document.getElementById('animation-selector');
  const oAnimationDirection = document.getElementById('direction-selector');
  const oSelectBox = document.getElementsByClassName('animatr-options__selector');
  const oKeyframeOutput = document.getElementById('keyframes-box');
  const sScaleInKeyframe = {
    sScaleInCenter: `@keyframes scale-in-center {
      0% {
        transform: scale(0);
        opacity: 1;
      }

      100% {
        transform: scale(1);
        opacity: 1;
      }
    }`,
    sScaleInTop: `@keyframes scale-in-top {
      0% {
        transform: scale(0);
        transform-origin: 50% 0%;
        opacity: 1;
      }

      100% {
        transform: scale(1);
        transform-origin: 50% 0%;
        opacity: 1;
      }
    }`,
    sScaleInRight: `@keyframes scale-in-right {
      0% {
        transform: scale(0);
        transform-origin: 100% 50%;
        opacity: 1;
      }

      100% {
        transform: scale(1);
        transform-origin: 100% 50%;
        opacity: 1;
      }
    }`,
    sScaleInBottom: `@keyframes scale-in-bottom {
      0% {
        transform: scale(0);
        transform-origin: 50% 100%;
        opacity: 1;
      }

      100% {
        transform: scale(1);
        transform-origin: 50% 100%;
        opacity: 1;
      }
    }`,
    sScaleInLeft: `@keyframes scale-in-left {
      0% {
        transform: scale(0);
        transform-origin: 0% 50%;
        opacity: 1;
      }

      100% {
        transform: scale(1);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    }`,
  };
  const sScaleOutKeyframe = {
    sScaleOutCenter: `@keyframes scale-out-center {
      0% {
        transform: scale(1);
        opacity: 1;
      }
    
      100% {
        transform: scale(0);
        opacity: 1;
      }
    }`,
    sScaleOutTop: `@keyframes scale-out-top {
      0% {
        transform: scale(1);
        transform-origin: 50% 0%;
        opacity: 1;
      }
    
      100% {
        transform: scale(0);
        transform-origin: 50% 0%;
        opacity: 1;
      }
    }`,
    sScaleOutRight: `@keyframes scale-out-right {
      0% {
        transform: scale(1);
        transform-origin: 100% 50%;
        opacity: 1;
      }
    
      100% {
        transform: scale(0);
        transform-origin: 100% 50%;
        opacity: 1;
      }
    }`,
    sScaleOutBottom: `@keyframes scale-out-bottom {
      0% {
        transform: scale(1);
        transform-origin: 50% 100%;
        opacity: 1;
      }
    
      100% {
        transform: scale(0);
        transform-origin: 50% 100%;
        opacity: 1;
      }
    }`,
    sScaleOutLeft: `@keyframes scale-out-left {
      0% {
        transform: scale(1);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    
      100% {
        transform: scale(0);
        transform-origin: 0% 50%;
        opacity: 1;
      }
    }`,
  };
  const sSlideInKeyframe = {
    sSlideInTop: `@keyframes slide-in-top {
      0% {
        transform: translateY(-100%);
        visibility: hidden;
      }
    
      100% {
        transform: translateY(0);
        visibility: visible;
      }
    }`,
    sSlideInRight: `@keyframes slide-in-right {
      0% {
        transform: translateX(100%);
        visibility: hidden;
      }
    
      100% {
        transform: translateX(0);
        visibility: visible;
      }
    }`,
    sSlideInBottom: `@keyframes slide-in-bottom {
      0% {
        transform: translateY(100%);
        visibility: hidden;
      }
    
      100% {
        transform: translateY(0);
        visibility: visible;
      }
    }`,
    sSlideInLeft: `@keyframes slide-in-left {
      0% {
        transform: translateX(-100%);
        visibility: hidden;
      }
    
      100% {
        transform: translateX(0);
        visibility: visible;
      }
    }`,
  };
  const sSlideOutKeyframe = {
    sSlideOutTop: `@keyframes slide-out-top {
      0% {
        transform: translateY(0);
        visibility: visible;
      }
    
      100% {
        transform: translateY(-100%);
        visibility: hidden;
      }
    }`,
    sSlideOutRight: `@keyframes slide-out-right {
      0% {
        transform: translateX(0);
        visibility: visible;
      }
    
      100% {
        transform:  translateX(100%);
        visibility: hidden;
      }
    }`,
    sSlideOutBottom: `@keyframes slide-out-bottom {
      0% {
        transform:  translateY(0);
        visibility: visible;
      }
    
      100% {
        transform: translateY(100%);
        visibility: hidden;
      }
    }`,
    sSlideOutLeft: `@keyframes slide-out-left {
      0% {
        transform: translateX(0);
        visibility: visible;
      }
    
      100% {
        transform:  translateX(-100%);
        visibility: hidden;
      }
    }`,
  };
  const sFadeInKeyframe = {
    sFadeInCenter: `@keyframes fade-in-center {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }`,
    sFadeInTop: `@keyframes fade-in-top {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
    
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }`,
    sFadeInRight: `@keyframes fade-in-right {
      0% {
        transform: translateX(50px);
        opacity: 0;
      }
    
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }`,
    sFadeInBottom: `@keyframes fade-in-bottom {
      0% {
        transform: translateY(50px);
        opacity: 0;
      }
    
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }`,
    sFadeInLeft: `@keyframes fade-in-left {
      0% {
        transform: translateX(-50px);
        opacity: 0;
      }
    
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }`,
  };
  const sFadeOutKeyframe = {
    sFadeOutCenter: `@keyframes fade-out-center {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }`,
    sFadeOutTop: `@keyframes fade-out-top {
      0% {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    
      100% {
        transform: translateY(-50px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
    sFadeOutRight: `@keyframes fade-out-right {
      0% {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
      }
    
      100% {
        transform: translateX(50px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
    sFadeOutBottom: `@keyframes fade-out-bottom {
      0% {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
    
      100% {
        transform: translateY(50px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
    sFadeOutLeft: `@keyframes fade-out-left {
      0% {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
      }
    
      100% {
        transform: translateX(-50px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
  };
  const sTextTrackingInKeyframe = {
    sTextTrackingInCenter: `@keyframes text-tracking-in-center {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
    
      40% {
        opacity: 0.6;
      }
    
      100% {
        opacity: 1;
      }
    }`,
    sTextTrackingInTop: `@keyframes text-tracking-in-top {
      0% {
        letter-spacing: -0.5em;
        transform: translateZ(-100px) translateY(-100px);
        opacity: 0;
      }
    
      40% {
        opacity: 0.6;
      }
    
      100% {
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }`,
    sTextTrackingInBottom: `@keyframes text-tracking-in-bottom {
      0% {
        letter-spacing: -0.5em;
        transform: translateZ(100px) translateY(100px);
        opacity: 0;
      }
    
      40% {
        opacity: 0.6;
      }
    
      100% {
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }`,
  };
  const sTextTrackingOutKeyframe = {
    sTextTrackingOutCenter: `@keyframes text-tracking-out-center {
      0% {
        opacity: 1;
        visibility: visible;
      }
    
      50% {
        opacity: 1;
      }
    
      100% {
        letter-spacing: -0.5em;
        opacity: 0;
        visibility: hidden;
      }
    }`,
    sTextTrackingOutTop: `@keyframes text-tracking-out-top {
      0% {
        transform: translateZ(0) translateY(0);
        opacity: 1;
        visibility: visible;
      }
    
      60% {
        opacity: 1;
      }
    
      100% {
        letter-spacing: -0.5em;
        transform: translateZ(-100px) translateY(-100px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
    sTextTrackingOutBottom: `@keyframes text-tracking-out-bottom {
      0% {
        transform: translateZ(0) translateY(0);
        opacity: 1;
        visibility: visible;
      }
    
      60% {
        opacity: 1;
      }
    
      100% {
        letter-spacing: -0.5em;
        transform: translateZ(100px) translateY(100px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
  };
  const sTextFocusKeyframe = {
    sTextFocusKeyframe: `@keyframes text-focus {
      0% {
        filter: blur(5px);
        opacity: 0;
        visibility: hidden;
      }
    
      100% {
        filter: blur(0);
        opacity: 1;
        visibility: visible;
      }
    }`,
  };
  const sTextBlurKeyframe = {
    sTextBlurKeyframe: `@keyframes text-blur {
      0% {
        filter: blur(0);
        opacity: 1;
        visibility: visible;
      }
    
      100% {
        filter: blur(5px);
        opacity: 0;
        visibility: hidden;
      }
    }`,
  };
  const sTextShadowInKeyframe = {
    sTextShadowInCenter: `@keyframes text-shadow-in-center {
      0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    
      100% {
        text-shadow: 0 0 8px rgba(0, 0, 0, 1);
      }
    }`,
    sTextShadowInTop: `@keyframes text-shadow-in-top {
      0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    
      100% {
        text-shadow: 0 -3px 8px rgba(0, 0, 0, 1);
      }
    }`,
    sTextShadowInRight: `@keyframes text-shadow-in-right {
      0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    
      100% {
        text-shadow: 3px 0 8px rgba(0, 0, 0, 1);
      }
    }`,
    sTextShadowInBottom: `@keyframes text-shadow-in-bottom {
      0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    
      100% {
        text-shadow: 0 3px 8px rgba(0, 0, 0, 1);
      }
    }`,
    sTextShadowInLeft: `@keyframes text-shadow-in-left {
      0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    
      100% {
        text-shadow: -3px 0 8px rgba(0, 0, 0, 1);
      }
    }`,
  };
  const sTextShadowOutKeyframe = {
    sTextShadowOutCenter: `@keyframes text-shadow-out-center {
      0% {
        text-shadow: 0 0 8px rgba(0, 0, 0, 1);
      }
    
      100% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    }`,
    sTextShadowOutTop: `@keyframes text-shadow-out-top {
      0% {
        text-shadow: 0 -3px 8px rgba(0, 0, 0, 1);
      }
    
      100% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    }`,
    sTextShadowOutRight: `@keyframes text-shadow-out-right {
      0% {
        text-shadow: 3px 0 8px rgba(0, 0, 0, 1);
      }
    
      100% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    }`,
    sTextShadowOutBottom: `@keyframes text-shadow-out-bottom {
      0% {
        text-shadow: 0 3px 8px rgba(0, 0, 0, 1);
      }
    
      100% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    }`,
    sTextShadowOutLeft: `@keyframes text-shadow-out-left {
      0% {
        text-shadow: -3px 0 8px rgba(0, 0, 0, 1);
      }
    
      100% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
    }`,
  };

  /**
   * Get the value of the animation direction select box
   * If the selected animation name is Scale
   *
   * @returns void
   */
  function getScaleDirectionValue() {
    const sDirectionValue = oAnimationDirection.value;
    oKeyframeOutput.innerHTML = '';

    switch (sDirectionValue) {
      case '#oDirectionTop':
        oKeyframeOutput.innerHTML = sScaleInKeyframe.sScaleInTop + '\n\n' + sScaleOutKeyframe.sScaleOutTop;
        break;
      case '#oDirectionRight':
        oKeyframeOutput.innerHTML = sScaleInKeyframe.sScaleInRight + '\n\n' + sScaleOutKeyframe.sScaleOutRight;
        break;
      case '#oDirectionBottom':
        oKeyframeOutput.innerHTML = sScaleInKeyframe.sScaleInBottom + '\n\n' + sScaleOutKeyframe.sScaleOutBottom;
        break;
      case '#oDirectionLeft':
        oKeyframeOutput.innerHTML = sScaleInKeyframe.sScaleInLeft + '\n\n' + sScaleOutKeyframe.sScaleOutLeft;
        break;
      default:
        oKeyframeOutput.innerHTML = sScaleInKeyframe.sScaleInCenter + '\n\n' + sScaleOutKeyframe.sScaleOutCenter;
    }
  }

  /**
   * Get the value of the animation direction select box
   * If the selected animation name is Slide
   *
   * @returns void
   */
  function getSlideDirectionValue() {
    const sDirectionValue = oAnimationDirection.value;
    oKeyframeOutput.innerHTML = '';

    switch (sDirectionValue) {
      case '#oDirectionRight':
        oKeyframeOutput.innerHTML = sSlideInKeyframe.sSlideInRight + '\n\n' + sSlideOutKeyframe.sSlideOutRight;
        break;
      case '#oDirectionBottom':
        oKeyframeOutput.innerHTML = sSlideInKeyframe.sSlideInBottom + '\n\n' + sSlideOutKeyframe.sSlideOutBottom;
        break;
      case '#oDirectionLeft':
        oKeyframeOutput.innerHTML = sSlideInKeyframe.sSlideInLeft + '\n\n' + sSlideOutKeyframe.sSlideOutLeft;
        break;
      default:
        oKeyframeOutput.innerHTML = sSlideInKeyframe.sSlideInTop + '\n\n' + sSlideOutKeyframe.sSlideOutTop;
    }
  }

  /**
   * Get the value of the animation direction select box
   * If the selected animation name is Fade
   *
   * @returns void
   */
  function getFadeDirectionValue() {
    const sDirectionValue = oAnimationDirection.value;
    oKeyframeOutput.innerHTML = '';

    switch (sDirectionValue) {
      case '#oDirectionTop':
        oKeyframeOutput.innerHTML = sFadeInKeyframe.sFadeInTop + '\n\n' + sFadeOutKeyframe.sFadeOutTop;
        break;
      case '#oDirectionRight':
        oKeyframeOutput.innerHTML = sFadeInKeyframe.sFadeInRight + '\n\n' + sFadeOutKeyframe.sFadeOutRight;
        break;
      case '#oDirectionBottom':
        oKeyframeOutput.innerHTML = sFadeInKeyframe.sFadeInBottom + '\n\n' + sFadeOutKeyframe.sFadeOutBottom;
        break;
      case '#oDirectionLeft':
        oKeyframeOutput.innerHTML = sFadeInKeyframe.sFadeInLeft + '\n\n' + sFadeOutKeyframe.sFadeOutLeft;
        break;
      default:
        oKeyframeOutput.innerHTML = sFadeInKeyframe.sFadeInCenter + '\n\n' + sFadeOutKeyframe.sFadeOutCenter;
    }
  }

  /**
   * Get the value of the animation direction select box
   * If the selected animation name is Text Tracking
   *
   * @returns void
   */
  function getTextTrackingDirectionValue() {
    const sDirectionValue = oAnimationDirection.value;
    oKeyframeOutput.innerHTML = '';

    switch (sDirectionValue) {
      case '#oDirectionTop':
        oKeyframeOutput.innerHTML = sTextTrackingInKeyframe.sTextTrackingInTop + '\n\n' + sTextTrackingOutKeyframe.sTextTrackingOutTop;
        break;
      case '#oDirectionRight':
        oKeyframeOutput.innerHTML = sTextTrackingInKeyframe.sTextTrackingInRight + '\n\n' + sTextTrackingOutKeyframe.sTextTrackingOutRight;
        break;
      case '#oDirectionBottom':
        oKeyframeOutput.innerHTML = sTextTrackingInKeyframe.sTextTrackingInBottom + '\n\n' + sTextTrackingOutKeyframe.sTextTrackingOutBottom;
        break;
      case '#oDirectionLeft':
        oKeyframeOutput.innerHTML = sTextTrackingInKeyframe.sTextTrackingInLeft + '\n\n' + sTextTrackingOutKeyframe.sTextTrackingOutLeft;
        break;
      default:
        oKeyframeOutput.innerHTML = sTextTrackingInKeyframe.sTextTrackingInCenter + '\n\n' + sTextTrackingOutKeyframe.sTextTrackingOutCenter;
    }
  }

  /**
   * Get the value of the animation direction select box
   * If the selected animation name is Text Focus
   *
   * @returns void
   */
  function getFocusBlurDirectionValue() {
    const sDirectionValue = oAnimationDirection.value;
    oKeyframeOutput.innerHTML = '';

    switch (sDirectionValue) {
      case '#oDirectionRight':
        oKeyframeOutput.innerHTML = sTextFocusKeyframe.sTextFocusKeyframe + '\n\n' + sTextBlurKeyframe.sTextBlurKeyframe;
        break;
      default:
        oKeyframeOutput.innerHTML = sTextFocusKeyframe.sTextFocusKeyframe + '\n\n' + sTextBlurKeyframe.sTextBlurKeyframe;
    }
  }

  /**
   * Get the value of the animation direction select box
   * If the selected animation name is Fade
   *
   * @returns void
   */
  function getTextShadowDirectionValue() {
    const sDirectionValue = oAnimationDirection.value;
    oKeyframeOutput.innerHTML = '';

    switch (sDirectionValue) {
      case '#oDirectionTop':
        oKeyframeOutput.innerHTML = sTextShadowInKeyframe.sTextShadowInTop + '\n\n' + sTextShadowOutKeyframe.sTextShadowOutTop;
        break;
      case '#oDirectionRight':
        oKeyframeOutput.innerHTML = sTextShadowInKeyframe.sTextShadowInRight + '\n\n' + sTextShadowOutKeyframe.sTextShadowOutRight;
        break;
      case '#oDirectionBottom':
        oKeyframeOutput.innerHTML = sTextShadowInKeyframe.sTextShadowInBottom + '\n\n' + sTextShadowOutKeyframe.sTextShadowOutBottom;
        break;
      case '#oDirectionLeft':
        oKeyframeOutput.innerHTML = sTextShadowInKeyframe.sTextShadowInLeft + '\n\n' + sTextShadowOutKeyframe.sTextShadowOutLeft;
        break;
      default:
        oKeyframeOutput.innerHTML = sTextShadowInKeyframe.sTextShadowInCenter + '\n\n' + sTextShadowOutKeyframe.sTextShadowOutCenter;
    }
  }

  /**
   * Get the value of the animation name select box
   *
   * @returns void
   */
  function getAnimationNameValue() {
    const sNameValue = oAnimationName.value;

    switch (sNameValue) {
      case '#oSlide':
        getSlideDirectionValue();
        break;
      case '#oFade':
        getFadeDirectionValue();
        break;
      case '#oTextTracking':
        getTextTrackingDirectionValue();
        break;
      case '#oTextFocus':
        getFocusBlurDirectionValue();
        break;
      case '#oTextBlur':
        getFocusBlurDirectionValue();
        break;
      case '#oTextShadow':
        getTextShadowDirectionValue();
        break;
      default:
        getScaleDirectionValue();
    }
  }

  [].forEach.call(oSelectBox, function(oSelectedValue) {
    oSelectedValue.addEventListener('change', getAnimationNameValue);
  });

  getAnimationNameValue();
});
