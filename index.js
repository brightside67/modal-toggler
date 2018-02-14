"use strict";

module.exports = function modalToggler(string) {
  var classString = string;
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
        document.querySelector(targetNode).classList.add(classString);
      });
    }
  }

  if (closeArrLength) {
    for (var _i = 0; _i < closeArrLength; _i++) {
      closeArr[_i].addEventListener("click", function(e) {
        e.preventDefault();
        var targetNode = e.target.dataset.modalClose;
        document.querySelector(targetNode).classList.remove(classString);
      });
    }
  }

  if (toggleArrLength) {
    for (var _i2 = 0; _i2 < closeArrLength; _i2++) {
      toggleArr[_i2].addEventListener("click", function(e) {
        e.preventDefault();
        var targetNode = e.target.dataset.modalToggle;
        document.querySelector(targetNode).classList.toggle(classString);
      });
    }
  }
};
