/*
* {controls the modal guide display}
*
* @param {html class} oGuideSelect - {selects the option tag}
* @param {html class} oHideGuideDivs - {selects al the hide-guide classes}
* @returns void
*/
document.addEventListener('DOMContentLoaded', () => {
  const oGuideSelect = document.getElementById('guide-select');
  const oHideGuideDivs = document.querySelectorAll('.hide-guide');
  oGuideSelect.value = 'scale-guide';

  /*
  * {toggles the display of elements when an option is selected}
  *
  * @param {html element} oElement - {toggles off each element in the array}
  * @param {clicked html element} oOption - {toggles on clicked element}
  * @returns void
  */
  oGuideSelect.addEventListener('change', function(oOption) {
    oHideGuideDivs.forEach((oElement) => {
      if (oElement.classList.contains(oOption.target.value) === true) {
        oElement.classList.add('show-guide');
      } else {
        oElement.classList.remove('show-guide');
      }
    });
  });
});
