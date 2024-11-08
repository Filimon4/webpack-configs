"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwepack_tsconfig_features_test"] = self["webpackChunkwepack_tsconfig_features_test"] || []).push([["index"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/test */ \"./src/utils/test.ts\");\n\nconst x = 10;\nconst z = x + _utils_test__WEBPACK_IMPORTED_MODULE_0__.myC;\nconst z1 = x + _utils_test__WEBPACK_IMPORTED_MODULE_0__.myX;\nconsole.log(z, z1);\n\n\n//# sourceURL=webpack://wepack_tsconfig_features_test/./src/index.ts?");

/***/ }),

/***/ "./src/utils/test.ts":
/*!***************************!*\
  !*** ./src/utils/test.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myC: () => (/* binding */ myC),\n/* harmony export */   myX: () => (/* binding */ myX)\n/* harmony export */ });\nconst myC = 20;\nconst myX = 40;\n\n\n//# sourceURL=webpack://wepack_tsconfig_features_test/./src/utils/test.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);