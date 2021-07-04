module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/aave.ts":
/*!***********************!*\
  !*** ./build/aave.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Aave", "icon": "icons/AAVE.svg" });


/***/ }),

/***/ "./build/ac.ts":
/*!*********************!*\
  !*** ./build/ac.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Ac", "icon": "icons/AC.svg" });


/***/ }),

/***/ "./build/adx.ts":
/*!**********************!*\
  !*** ./build/adx.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Adx", "icon": "icons/AGA.svg" });


/***/ }),

/***/ "./build/aga.ts":
/*!**********************!*\
  !*** ./build/aga.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Aga", "icon": "icons/AGA.svg" });


/***/ }),

/***/ "./build/all.ts":
/*!**********************!*\
  !*** ./build/all.ts ***!
  \**********************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
const list = { "matic": { "symbol": "Matic", "icon": "icons/MATIC.svg" }, "kai": { "symbol": "Kai", "icon": "icons/KAI.svg" }, "aave": { "symbol": "Aave", "icon": "icons/AAVE.svg" }, "ac": { "symbol": "Ac", "icon": "icons/AC.svg" }, "adx": { "symbol": "Adx", "icon": "icons/AGA.svg" }, "aga": { "symbol": "Aga", "icon": "icons/AGA.svg" }, "atri": { "symbol": "Atri", "icon": "icons/ATRI.svg" }, "bid": { "symbol": "Bid", "icon": "icons/BID.svg" }, "bs1": { "symbol": "Bs1", "icon": "icons/BS1.svg" }, "btc2x-fli": { "symbol": "BTC2x-FLI", "icon": "icons/BTC2x-FLI.svg" }, "bzn": { "symbol": "BZN", "icon": "icons/BZN.svg" } };


/***/ }),

/***/ "./build/atri.ts":
/*!***********************!*\
  !*** ./build/atri.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Atri", "icon": "icons/ATRI.svg" });


/***/ }),

/***/ "./build/bid.ts":
/*!**********************!*\
  !*** ./build/bid.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Bid", "icon": "icons/BID.svg" });


/***/ }),

/***/ "./build/bs1.ts":
/*!**********************!*\
  !*** ./build/bs1.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Bs1", "icon": "icons/BS1.svg" });


/***/ }),

/***/ "./build/btc2x-fli.ts":
/*!****************************!*\
  !*** ./build/btc2x-fli.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "BTC2x-FLI", "icon": "icons/BTC2x-FLI.svg" });


/***/ }),

/***/ "./build/bzn.ts":
/*!**********************!*\
  !*** ./build/bzn.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "BZN", "icon": "icons/BZN.svg" });


/***/ }),

/***/ "./build/index.ts":
/*!************************!*\
  !*** ./build/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matic */ "./build/matic.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _kai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kai */ "./build/kai.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _aave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aave */ "./build/aave.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ac__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ac */ "./build/ac.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _adx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adx */ "./build/adx.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _aga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aga */ "./build/aga.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _atri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atri */ "./build/atri.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _bid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bid */ "./build/bid.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _bs1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bs1 */ "./build/bs1.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _btc2x_fli__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./btc2x-fli */ "./build/btc2x-fli.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _bzn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bzn */ "./build/bzn.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all */ "./build/all.ts");












/* harmony default export */ __webpack_exports__["default"] = (_all__WEBPACK_IMPORTED_MODULE_11__["list"]);


/***/ }),

/***/ "./build/kai.ts":
/*!**********************!*\
  !*** ./build/kai.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Kai", "icon": "icons/KAI.svg" });


/***/ }),

/***/ "./build/matic.ts":
/*!************************!*\
  !*** ./build/matic.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({ "symbol": "Matic", "icon": "icons/MATIC.svg" });


/***/ })

/******/ });
//# sourceMappingURL=lib.commonjs2.js.map