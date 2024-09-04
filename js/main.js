/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
console.log('components');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

$("#phoneNumber").inputmask("+7 (999) 999-9999");
const documentsSwiper = new Swiper(".swiper.documents__swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3
    }
  }
});
const galerySwiper = new Swiper(".swiper.galery__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
let socLink = document.querySelectorAll(".socials__link");
socLink.forEach(elem => {
  elem.setAttribute("target", "_blank");
});
let mobileMenu = document.querySelector('#mobile-menu');
let burgerBtn = document.querySelector("#burger-checkbox");
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle("mobile-container-active");
});
/******/ })()
;
//# sourceMappingURL=main.js.map