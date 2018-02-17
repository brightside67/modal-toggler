"use strict";

modal.exports = function modalToggler(options) {
  var optionsBox = {
    modalClass: options.modalClass || false,
    toggleClass: options.toggleClass || false,
    backgroundNode: options.backgroundNode || false,
    backgroundClass: options.backgroundClass || false
  };
  var modalClass = optionsBox.modalClass;
  var backgroundNode = document.querySelector(options.backgroundNode);
  var backgroundClass = options.backgroundClass;
  var modalsArr = document.querySelectorAll("[data-modal-open]");
  var closeArr = document.querySelectorAll("[data-modal-close]");
  var toggleArr = document.querySelectorAll("[data-modal-toggle]");
  var modalsArrLength = modalsArr.length;
  var closeArrLength = closeArr.length;
  var toggleArrLength = toggleArr.length;

  if (modalsArrLength) {
    for (var i = 0; i < modalsArrLength; i++) {
      modalsArr[i].addEventListener("click", function(e) {
        e.preventDefault();
        var targetNode = e.target.dataset.modalOpen;
        document.querySelector(targetNode).classList.add(modalClass);
        if (backgroundNode) {
          backgroundNode.classList.add(backgroundClass);
        }
      });
    }
  }

  if (closeArrLength) {
    for (var _i = 0; _i < closeArrLength; _i++) {
      closeArr[_i].addEventListener("click", function(e) {
        e.preventDefault();
        var targetNode = e.target.dataset.modalClose;
        document.querySelector(targetNode).classList.remove(modalClass);
        if (backgroundNode) {
          backgroundNode.classList.remove(backgroundClass);
        }
      });
    }
  }

  if (toggleArrLength) {
    for (var _i2 = 0; _i2 < toggleArrLength; _i2++) {
      toggleArr[_i2].addEventListener("click", function(e) {
        e.preventDefault();
        var targetNode = e.target.dataset.modalToggle;
        document
          .querySelector(targetNode)
          .classList.toggle(optionsBox.toggleClass);
      });
    }
  }
};
