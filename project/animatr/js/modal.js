document.addEventListener('DOMContentLoaded', function() {
  const oGuideButton = document.getElementsByClassName('animatr-button__guide')[0];
  const oGuideModal = document.getElementById('guide-modal');
  const oModalWrapper = document.getElementsByClassName('animatr-modal__wrapper');
  const oCloseModalButton = document.getElementsByClassName('animatr-modal__close-button');

  /**
   * Close modal function
   *
   * @returns void
   */
  function modalClose() {
    oGuideModal.classList.add('hide');
    oGuideModal.classList.remove('show');
    [].forEach.call(oModalWrapper, function(oWrapper) {
      oWrapper.classList.remove('jaszanimatr__scale-in');
      oWrapper.classList.add('jaszanimatr__scale-out');
    });
  }

  /**
   * Event listener for close button
   *
   * @returns void
   */
  [].forEach.call(oCloseModalButton, function(oClickedElement) {
    oClickedElement.addEventListener('click', function() {
      modalClose();
    });
  });

  document.addEventListener('mouseup', function(oClickedElement) {
    console.log(oClickedElement.className);
    if (!oClickedElement.target.closest('.animatr-modal__wrapper')) {
      modalClose();
    }
  });

  /**
   * Even listener for guide button
   * It show the guide modal
   *
   * @returns void
   */
  oGuideButton.addEventListener('click', function() {
    oGuideModal.classList.remove('hide', 'hidden');
    oGuideModal.classList.add('show');
    [].forEach.call(oModalWrapper, function(oWrapper) {
      oWrapper.classList.remove('jaszanimatr__scale-out');
      oWrapper.classList.add('jaszanimatr__scale-in');
    });
  });
});
