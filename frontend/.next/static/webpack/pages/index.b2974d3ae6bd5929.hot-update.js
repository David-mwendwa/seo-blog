"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Header() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>setIsOpen(!isOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n            color: \"light\",\n            light: true,\n            expand: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarBrand, {\n                    href: \"/\",\n                    children: \"seo-blog\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarToggler, {\n                    onClick: toggle\n                }, void 0, false, {\n                    fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Collapse, {\n                    isOpen: isOpen,\n                    navbar: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                            className: \"me-auto\",\n                            navbar: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                        href: \"/components/\",\n                                        children: \"Components\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                        href: \"https://github.com/reactstrap/reactstrap\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.UncontrolledDropdown, {\n                                    nav: true,\n                                    inNavbar: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownToggle, {\n                                        nav: true,\n                                        caret: true,\n                                        children: \"Options\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.NavbarText, {\n                            children: \"Simple Text\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\MERN\\\\projects\\\\Ryan-Dhungel\\\\seo-blog\\\\frontend\\\\components\\\\Header.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQWNwQjtBQUVwQixTQUFTYyxTQUFTOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNZ0IsU0FBUyxJQUFNRCxVQUFVLENBQUNEO0lBRWhDLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ2YsOENBQU1BO1lBQUNnQixPQUFNO1lBQVFDLEtBQUs7WUFBQ0MsUUFBTzs7OEJBQ2pDLDhEQUFDaEIsbURBQVdBO29CQUFDaUIsTUFBSzs4QkFBSTs7Ozs7OzhCQUN0Qiw4REFBQ2xCLHFEQUFhQTtvQkFBQ21CLFNBQVNOOzs7Ozs7OEJBQ3hCLDhEQUFDZixnREFBUUE7b0JBQUNhLFFBQVFBO29CQUFRUyxNQUFNOztzQ0FDOUIsOERBQUNsQiwyQ0FBR0E7NEJBQUNtQixXQUFVOzRCQUFVRCxNQUFNOzs4Q0FDN0IsOERBQUNqQiwrQ0FBT0E7OENBQ04sNEVBQUNDLCtDQUFPQTt3Q0FBQ2MsTUFBSztrREFBZTs7Ozs7Ozs7Ozs7OENBRS9CLDhEQUFDZiwrQ0FBT0E7OENBQ04sNEVBQUNDLCtDQUFPQTt3Q0FBQ2MsTUFBSztrREFBMkM7Ozs7Ozs7Ozs7OzhDQUkzRCw4REFBQ2IsNERBQW9CQTtvQ0FBQ2lCLEdBQUc7b0NBQUNDLFFBQVE7OENBQ2hDLDRFQUFDakIsc0RBQWNBO3dDQUFDZ0IsR0FBRzt3Q0FBQ0UsS0FBSztrREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzlCLDhEQUFDZixrREFBVUE7c0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBL0JTQztLQUFBQTtBQWlDVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgTmF2YmFyVGV4dCxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGNvbG9yPSdsaWdodCcgbGlnaHQgZXhwYW5kPSdtZCc+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9Jy8nPnNlby1ibG9nPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nbWUtYXV0bycgbmF2YmFyPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPScvY29tcG9uZW50cy8nPkNvbXBvbmVudHM8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3JlYWN0c3RyYXAvcmVhY3RzdHJhcCc+XHJcbiAgICAgICAgICAgICAgICBHaXRIdWJcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxyXG4gICAgICAgICAgICAgICAgT3B0aW9uc1xyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDxOYXZiYXJUZXh0PlNpbXBsZSBUZXh0PC9OYXZiYXJUZXh0PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbGxhcHNlIiwiTmF2YmFyIiwiTmF2YmFyVG9nZ2xlciIsIk5hdmJhckJyYW5kIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJVbmNvbnRyb2xsZWREcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiTmF2YmFyVGV4dCIsIkhlYWRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsImRpdiIsImNvbG9yIiwibGlnaHQiLCJleHBhbmQiLCJocmVmIiwib25DbGljayIsIm5hdmJhciIsImNsYXNzTmFtZSIsIm5hdiIsImluTmF2YmFyIiwiY2FyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});