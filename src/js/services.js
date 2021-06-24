"use strict";
(function () {
  let servWrapper = document.querySelector('.services__labels');
  let switchers = servWrapper.querySelectorAll('button');
  let servContent = document.querySelectorAll('.services__text div');


  window.removeActive = function (items, selector) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(selector);
      servContent[i].classList.remove('current-service');
    }
  };

  servWrapper.addEventListener('click', function (evt) {
    for (let i = 0; i < switchers.length; i++) {
      if(evt.target === switchers[i]) {
        window.removeActive(switchers, 'current');
        switchers[i].classList.add('current');
        servContent[i].classList.add('current-service');
        }
    }
  });
})();
