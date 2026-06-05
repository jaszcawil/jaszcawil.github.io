document.addEventListener('DOMContentLoaded', function() {
  const oCssProperty = document.getElementById('css-box');
  const oKeyframeProperty = document.getElementById('keyframes-box');
  const oCopyCSSButton = document.getElementsByClassName('animatr-button__copy-css')[0];
  const oCopyKeyframesButton = document.getElementsByClassName('animatr-button__copy-keyframes')[0];
  const oToast = document.getElementsByClassName('animatr-alert__toast')[0];
  const oToastText = document.getElementsByClassName('animatr-alert__toast-text')[0];

  /**
   * Copy the CSS and Keyframes property from the textarea
   *
   * @param {object} oCodeArea - Text area of the CSS or Keyframe properties
   * @returns void
   */

  function copyCode(oCodeArea) {
    oToast.classList.remove('animatr-alert__toast--show');
    oCodeArea.focus();
    oCodeArea.select();

    try {
      const eSuccess = document.execCommand('copy');
      const sMessage = eSuccess ? '<i class="fa-solid fa-circle-check animatr-alert__icon animatr-alert__icon--success"></i> Code was successfully copied.' : '<i class="fa-solid fa-circle-exclamation animatr-alert__icon animatr-alert__icon--error"></i> Code was not copied.';
      oToastText.innerHTML = sMessage;
      oToast.classList.add('animatr-alert__toast--show');
    } catch (err) {
      oToastText.innerHTML = 'There was an error copying the code!';
      oToast.classList.add('animatr-alert__toast--show');
    }
  }

  /**
   * Click event for Copy CSS button
   *
   * @returns void
   */
  oCopyCSSButton.addEventListener('click', function() {
    const oCodeArea = oCssProperty;
    copyCode(oCodeArea);
  });

  /**
   * Click event for Copy Keyframes button
   *
   * @returns void
   */
  oCopyKeyframesButton.addEventListener('click', function() {
    const oCodeArea = oKeyframeProperty;
    copyCode(oCodeArea);
  });
});
