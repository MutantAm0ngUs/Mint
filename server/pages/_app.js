"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@thirdweb-dev/react"
var react_ = __webpack_require__(352);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/GitHubLink.tsx


function ThirdwebGuideFooter() {
    const url = "https://github.com/thirdweb-example/custom-minting-page";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    bottom: -120,
                    right: -80,
                    height: 300,
                    width: 150,
                    border: "1px solid #eaeaea",
                    transform: "rotate(45deg)",
                    backgroundColor: " #262935",
                    cursor: "pointer"
                },
                role: "button",
                onClick: ()=>window.open(url, "_blank")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "fixed",
                    bottom: 14,
                    right: 18
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/github.png",
                    width: 40,
                    height: 40,
                    role: "button",
                    style: {
                        cursor: "pointer"
                    },
                    onClick: ()=>window.open(url, "_blank")
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.tsx





// This is the chainId your dApp will work on.
const activeChainId = react_.ChainId.Goerli;
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ThirdwebProvider, {
        desiredChainId: activeChainId,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "thirdweb NFT Drop Minting Customizable Page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Learn How To Use Thirdweb's NFT Drop contract and create a customizable NFT Drop minting page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Thirdweb, thirdweb NFT drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ThirdwebGuideFooter, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 352:
/***/ ((module) => {

module.exports = require("@thirdweb-dev/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(231));
module.exports = __webpack_exports__;

})();