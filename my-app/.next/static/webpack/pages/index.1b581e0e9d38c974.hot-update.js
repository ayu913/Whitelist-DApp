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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), numOfWhitelisted = ref1[0], setNumOfWhitelisted = ref1[1];\n    var web3ModalRef = useRef();\n    useEffect(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new web3ModalRef({\n                network: \"rinkeby\",\n                providerOptions: {},\n                disabledInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" Whitelist dApp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist dApp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Welcome to Crypto Devs!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                        children: [\n                            numOfWhitelisted,\n                            \" have already joined the Whitelist\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().images),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"A0AxzRhKjL9g0oDJFHjRBaeCkb4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0U7QUFDRTtBQUNjOztBQUUvQixTQUFTSSxJQUFJLEdBQUc7O0lBQzdCLElBQThDRixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQWxERyxlQUFlLEdBQXdCSCxHQUFXLEdBQW5DLEVBQUVJLGtCQUFrQixHQUFJSixHQUFXLEdBQWY7SUFDMUMsSUFBZ0RBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBcERLLGdCQUFnQixHQUF5QkwsSUFBVyxHQUFwQyxFQUFFTSxtQkFBbUIsR0FBSU4sSUFBVyxHQUFmO0lBQzVDLElBQU1PLFlBQVksR0FBR0MsTUFBTSxFQUFFO0lBRTdCQyxTQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ04sZUFBZSxFQUFFO1lBQ3BCSSxZQUFZLENBQUNHLE9BQU8sR0FBRyxJQUFJSCxZQUFZLENBQUM7Z0JBQ3RDSSxPQUFPLEVBQUUsU0FBUztnQkFDbEJDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQkMsd0JBQXdCLEVBQUUsS0FBSzthQUNoQyxDQUFDO1lBQ0ZDLGFBQWEsRUFBRTtTQUNoQjtLQUNGLEVBQUU7UUFBQ1gsZUFBZTtLQUFDLENBQUM7SUFFckIscUJBQ0UsOERBQUNZLEtBQUc7OzBCQUNGLDhEQUFDakIsa0RBQUk7O2tDQUNILDhEQUFDa0IsT0FBSztrQ0FBQyxpQkFBZTs7Ozs7NEJBQVE7a0NBQzlCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLGdCQUFnQjs7Ozs7NEJBQVE7Ozs7OztvQkFDcEQ7MEJBQ1AsOERBQUNKLEtBQUc7Z0JBQUNLLFNBQVMsRUFBRW5CLHFFQUFXOztrQ0FDekIsOERBQUNxQixJQUFFO3dCQUFDRixTQUFTLEVBQUVuQixzRUFBWTtrQ0FBRSx5QkFBdUI7Ozs7OzRCQUFLO2tDQUN6RCw4REFBQ2MsS0FBRzt3QkFBQ0ssU0FBUyxFQUFFbkIsNEVBQWtCOzs0QkFDL0JJLGdCQUFnQjs0QkFBQyxvQ0FDcEI7Ozs7Ozs0QkFBTTtrQ0FDTiw4REFBQ1UsS0FBRztrQ0FDRiw0RUFBQ1MsS0FBRzs0QkFBQ0osU0FBUyxFQUFFbkIsdUVBQWE7NEJBQUV5QixHQUFHLEVBQUMsbUJBQW1COzs7OztnQ0FBTzs7Ozs7NEJBQ3pEOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNDLFFBQU07Ozs7b0JBQVU7Ozs7OztZQUNiLENBQ1A7Q0FDRjtHQWxDdUJ6QixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtudW1PZldoaXRlbGlzdGVkLCBzZXROdW1PZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHdlYjNNb2RhbFJlZiA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgd2ViM01vZGFsUmVmLmN1cnJlbnQgPSBuZXcgd2ViM01vZGFsUmVmKHtcbiAgICAgICAgbmV0d29yazogXCJyaW5rZWJ5XCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVkSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KVxuICAgICAgY29ubmVjdFdhbGxldCgpXG4gICAgfVxuICB9LCBbd2FsbGV0Q29ubmVjdGVkXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiBXaGl0ZWxpc3QgZEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdXaGl0ZWxpc3QgZEFwcCc+PC9tZXRhPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lIHRvIENyeXB0byBEZXZzITwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIHtudW1PZldoaXRlbGlzdGVkfSBoYXZlIGFscmVhZHkgam9pbmVkIHRoZSBXaGl0ZWxpc3RcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9IHNyYz0nLi9jcnlwdG8tZGV2cy5zdmcnPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIm51bU9mV2hpdGVsaXN0ZWQiLCJzZXROdW1PZldoaXRlbGlzdGVkIiwid2ViM01vZGFsUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlZEluamVjdGVkUHJvdmlkZXIiLCJjb25uZWN0V2FsbGV0IiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJkZXNjcmlwdGlvbiIsImltZyIsImltYWdlcyIsInNyYyIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});