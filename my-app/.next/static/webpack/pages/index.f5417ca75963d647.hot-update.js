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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numOfWhitelisted = ref1[0], setNumOfWhitelisted = ref1[1];\n    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open\n    var web3ModalRef = useRef();\n    var connectWallet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        try {\n                            setWalletConnected(true);\n                        } catch (error) {\n                            console.log(error);\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    useEffect(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"rinkeby\",\n                providerOptions: {},\n                disabledInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \" Whitelist dApp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist dApp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Welcome to Crypto Devs!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            numOfWhitelisted,\n                            \" have already joined the Whitelist\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().images),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with \\u2764 by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"D+lfoffsiuCBlucAXgveFSTml3U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QjtBQUNFO0FBQ0U7QUFDYztBQUNiOztBQUVsQixTQUFTSyxJQUFJLEdBQUc7O0lBQzdCLElBQThDSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRESSxlQUFlLEdBQXdCSixHQUFlLEdBQXZDLEVBQUVLLGtCQUFrQixHQUFJTCxHQUFlLEdBQW5CO0lBQzFDLElBQWdEQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXBETSxnQkFBZ0IsR0FBeUJOLElBQVcsR0FBcEMsRUFBRU8sbUJBQW1CLEdBQUlQLElBQVcsR0FBZjtJQUM1QyxvSEFBb0g7SUFDcEgsSUFBTVEsWUFBWSxHQUFHQyxNQUFNLEVBQUU7SUFFN0IsSUFBTUMsYUFBYTttQkFBRywwUUFBWTs7Ozt3QkFDaEMsSUFBSTs0QkFDRkwsa0JBQWtCLENBQUMsSUFBSSxDQUFDO3lCQUN6QixDQUFDLE9BQU9NLEtBQUssRUFBRTs0QkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQzt5QkFDbkI7Ozs7OztTQUNGO3dCQU5LRCxhQUFhOzs7T0FNbEI7SUFFREksU0FBUyxDQUFDLFdBQU07UUFDZCxJQUFJLENBQUNWLGVBQWUsRUFBRTtZQUNwQkksWUFBWSxDQUFDTyxPQUFPLEdBQUcsSUFBSWIsa0RBQVMsQ0FBQztnQkFDbkNjLE9BQU8sRUFBRSxTQUFTO2dCQUNsQkMsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CQyx3QkFBd0IsRUFBRSxLQUFLO2FBQ2hDLENBQUM7WUFDRlIsYUFBYSxFQUFFO1NBQ2hCO0tBQ0YsRUFBRTtRQUFDTixlQUFlO0tBQUMsQ0FBQztJQUVyQixxQkFDRSw4REFBQ2UsS0FBRzs7MEJBQ0YsOERBQUNyQixrREFBSTs7a0NBQ0gsOERBQUNzQixPQUFLO2tDQUFDLGlCQUFlOzs7Ozs0QkFBUTtrQ0FDOUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsZ0JBQWdCOzs7Ozs0QkFBUTs7Ozs7O29CQUNwRDswQkFDUCw4REFBQ0osS0FBRztnQkFBQ0ssU0FBUyxFQUFFdkIscUVBQVc7O2tDQUN6Qiw4REFBQ3lCLElBQUU7d0JBQUNGLFNBQVMsRUFBRXZCLHNFQUFZO2tDQUFFLHlCQUF1Qjs7Ozs7NEJBQUs7a0NBQ3pELDhEQUFDa0IsS0FBRzt3QkFBQ0ssU0FBUyxFQUFFdkIsNEVBQWtCOzs0QkFDL0JLLGdCQUFnQjs0QkFBQyxvQ0FDcEI7Ozs7Ozs0QkFBTTtrQ0FDTiw4REFBQ2EsS0FBRztrQ0FDRiw0RUFBQ1MsS0FBRzs0QkFBQ0osU0FBUyxFQUFFdkIsdUVBQWE7NEJBQUU2QixHQUFHLEVBQUMsbUJBQW1COzs7OztnQ0FBTzs7Ozs7NEJBQ3pEOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNDLFFBQU07Z0JBQUNQLFNBQVMsRUFBRXZCLHVFQUFhOzBCQUFFLGlDQUVsQzs7Ozs7b0JBQVM7Ozs7OztZQUNMLENBQ1A7Q0FDRjtHQTdDdUJFLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbnVtT2ZXaGl0ZWxpc3RlZCwgc2V0TnVtT2ZXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZSgwKVxuICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIFdlYjMgTW9kYWwgKHVzZWQgZm9yIGNvbm5lY3RpbmcgdG8gTWV0YW1hc2spIHdoaWNoIHBlcnNpc3RzIGFzIGxvbmcgYXMgdGhlIHBhZ2UgaXMgb3BlblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcInJpbmtlYnlcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZWRJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICBjb25uZWN0V2FsbGV0KClcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IFdoaXRlbGlzdCBkQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1doaXRlbGlzdCBkQXBwJz48L21ldGE+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge251bU9mV2hpdGVsaXN0ZWR9IGhhdmUgYWxyZWFkeSBqb2luZWQgdGhlIFdoaXRlbGlzdFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc30gc3JjPScuL2NyeXB0by1kZXZzLnN2Zyc+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIldlYjNNb2RhbCIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJudW1PZldoaXRlbGlzdGVkIiwic2V0TnVtT2ZXaGl0ZWxpc3RlZCIsIndlYjNNb2RhbFJlZiIsInVzZVJlZiIsImNvbm5lY3RXYWxsZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwibmV0d29yayIsInByb3ZpZGVyT3B0aW9ucyIsImRpc2FibGVkSW5qZWN0ZWRQcm92aWRlciIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwiZGVzY3JpcHRpb24iLCJpbWciLCJpbWFnZXMiLCJzcmMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});