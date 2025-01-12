/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 933:
/***/ (() => {

var menu = document.querySelector('#menu');
var nav = document.querySelector('nav');
var links = document.querySelectorAll('nav > a');
var closeButton = document.querySelector('.close-button');
var body = document.body;
menu.addEventListener('click', function () {
  nav.classList.toggle('active');
  body.classList.toggle('overflow-hidden');
});
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    nav.classList.remove('active');
    body.classList.remove('overflow-hidden');
  }
});
links.forEach(function (a) {
  a.addEventListener('click', function (e) {
    nav.classList.remove('active');
    body.classList.remove('overflow-hidden');
  });
});
closeButton.addEventListener('click', function (e) {
  nav.classList.remove('active');
  body.classList.remove('overflow-hidden');
});

/***/ }),

/***/ 628:
/***/ (() => {

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/images/apple-touch-icon.png
const apple_touch_icon_namespaceObject = __webpack_require__.p + "images/aca303504aa44ceab8d6.png";
;// ./src/images/favicon-16x16.png
const favicon_16x16_namespaceObject = __webpack_require__.p + "images/85c0194090ef2f740d2c.png";
;// ./src/images/favicon-32x32.png
const favicon_32x32_namespaceObject = __webpack_require__.p + "images/288610f364a8ee3c6513.png";
;// ./src/images/favicon.ico
const favicon_namespaceObject = __webpack_require__.p + "images/f0bbe36e299596d5289d.ico";
// EXTERNAL MODULE: ./src/js/menu.js
var menu = __webpack_require__(933);
// EXTERNAL MODULE: ./src/js/scroll-slow-motion.js
var scroll_slow_motion = __webpack_require__(628);
;// ./src/js/index.js












})();

/******/ })()
;