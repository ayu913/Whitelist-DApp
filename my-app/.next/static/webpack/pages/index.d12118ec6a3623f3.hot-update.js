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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numOfWhitelisted = ref1[0], setNumOfWhitelisted = ref1[1];\n    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        web3Provider = new web3modal__WEBPACK_IMPORTED_MODULE_5__.providers.Web3Provider(provider);\n                        _ctx.next = 8;\n                        return web3Provider.getNetwork();\n                    case 8:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 4)) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        window.alert(\"Change the network to Rinkeby\");\n                        throw new Error(\"Change network to Rinkeby\");\n                    case 12:\n                        if (!needSigner) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 15:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_My_Projects_BlockChain_Projects_Whitelist_Dapp_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressIsWhitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    useEffect(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"rinkeby\",\n                providerOptions: {},\n                disabledInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \" Whitelist dApp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist dApp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"Welcome to Crypto Devs!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            numOfWhitelisted,\n                            \" have already joined the Whitelist\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().images),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with \\u2764 by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\My Projects\\\\BlockChain Projects\\\\Whitelist-Dapp\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"D+lfoffsiuCBlucAXgveFSTml3U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQjs7Ozs7Z0NBQU87Ozs7OzRCQUN6RDs7Ozs7O29CQUNGOzBCQUNOLDhEQUFDQyxRQUFNO2dCQUFDUCxTQUFTLEVBQUVyQyx1RUFBYTswQkFBRSxpQ0FFbEM7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNQO0NBQ0Y7R0FuRXVCRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxuaW1wb3J0IFdlYjNNb2RhbCwgeyBwcm92aWRlcnMgfSBmcm9tIFwid2ViM21vZGFsXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3dhbGxldENvbm5lY3RlZCwgc2V0V2FsbGV0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbnVtT2ZXaGl0ZWxpc3RlZCwgc2V0TnVtT2ZXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZSgwKVxuICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIFdlYjMgTW9kYWwgKHVzZWQgZm9yIGNvbm5lY3RpbmcgdG8gTWV0YW1hc2spIHdoaWNoIHBlcnNpc3RzIGFzIGxvbmcgYXMgdGhlIHBhZ2UgaXMgb3BlblxuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKVxuXG4gIGNvbnN0IGdldFByb3ZpZGVyT3JTaWduZXIgPSBhc3luYyAobmVlZFNpZ25lciA9IGZhbHNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpXG4gICAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcilcblxuICAgICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgICBpZiAoY2hhaW5JZCAhPT0gNCkge1xuICAgICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gUmlua2VieVwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFuZ2UgbmV0d29yayB0byBSaW5rZWJ5XCIpXG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgICByZXR1cm4gc2lnbmVyXG4gICAgICB9XG4gICAgICByZXR1cm4gd2ViM1Byb3ZpZGVyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKClcbiAgICAgIHNldFdhbGxldENvbm5lY3RlZCh0cnVlKVxuICAgICAgY2hlY2tJZkFkZHJlc3NJc1doaXRlbGlzdGVkKClcbiAgICAgIGdldE51bWJlck9mV2hpdGVsaXN0ZWQoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcInJpbmtlYnlcIixcbiAgICAgICAgcHJvdmlkZXJPcHRpb25zOiB7fSxcbiAgICAgICAgZGlzYWJsZWRJbmplY3RlZFByb3ZpZGVyOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICBjb25uZWN0V2FsbGV0KClcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IFdoaXRlbGlzdCBkQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1doaXRlbGlzdCBkQXBwJz48L21ldGE+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge251bU9mV2hpdGVsaXN0ZWR9IGhhdmUgYWxyZWFkeSBqb2luZWQgdGhlIFdoaXRlbGlzdFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlc30gc3JjPScuL2NyeXB0by1kZXZzLnN2Zyc+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIE1hZGUgd2l0aCAmIzEwMDg0OyBieSBDcnlwdG8gRGV2c1xuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsIldlYjNNb2RhbCIsInByb3ZpZGVycyIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJudW1PZldoaXRlbGlzdGVkIiwic2V0TnVtT2ZXaGl0ZWxpc3RlZCIsIndlYjNNb2RhbFJlZiIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwid2luZG93IiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImNvbm5lY3RXYWxsZXQiLCJjaGVja0lmQWRkcmVzc0lzV2hpdGVsaXN0ZWQiLCJnZXROdW1iZXJPZldoaXRlbGlzdGVkIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlZEluamVjdGVkUHJvdmlkZXIiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiaW1hZ2VzIiwic3JjIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});