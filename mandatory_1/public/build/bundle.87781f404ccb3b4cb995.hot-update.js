"use strict";
self["webpackHotUpdate"]("build/bundle",{

/***/ "./client/App.svelte":
/*!***************************!*\
  !*** ./client/App.svelte ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _home_matias_j_datamatiker_4_Semester_nodeJS_kea_DAT_Node_2021_AUTUMN_mandatory_1_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");
/* harmony import */ var _home_matias_j_datamatiker_4_Semester_nodeJS_kea_DAT_Node_2021_AUTUMN_mandatory_1_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js */ "./node_modules/svelte-hmr/runtime/proxy-adapter-dom.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* client/App.svelte generated by Svelte v3.43.0 */


function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-2x1evt", "main.svelte-2x1evt{text-align:center;padding:1em;max-width:240px;margin:0 auto}h1.svelte-2x1evt{color:#ff3e00;text-transform:uppercase;font-size:4em;font-weight:100}@media(min-width: 640px){main.svelte-2x1evt{max-width:none}}");
}

function create_fragment(ctx) {
	let main;
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let p;

	return {
		c() {
			main = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("main");
			h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Hello ");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*name*/ ctx[0]);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("!");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			p.innerHTML = `Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.`;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h1, "class", "svelte-2x1evt");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(main, "class", "svelte-2x1evt");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, main, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, h1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, p);
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, /*name*/ ctx[0]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(main);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
	};

	return [name];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { name: 0 }, add_css);
	}
}

if (module && module.hot) { if (false) {} App = _home_matias_j_datamatiker_4_Semester_nodeJS_kea_DAT_Node_2021_AUTUMN_mandatory_1_node_modules_svelte_loader_lib_hot_api_js__WEBPACK_IMPORTED_MODULE_1__.applyHmr({ m: module, id: "\"client/App.svelte\"", hotOptions: {"preserveLocalState":false,"noPreserveStateKey":["@hmr:reset","@!hmr"],"preserveAllLocalStateKey":"@hmr:keep-all","preserveLocalStateKey":"@hmr:keep","noReload":false,"optimistic":true,"acceptNamedExports":true,"acceptAccessors":true,"injectCss":false,"cssEjectDelay":100,"native":false,"importAdapterName":"___SVELTE_HMR_HOT_API_PROXY_ADAPTER","noOverlay":false}, Component: App, ProxyAdapter: _home_matias_j_datamatiker_4_Semester_nodeJS_kea_DAT_Node_2021_AUTUMN_mandatory_1_node_modules_svelte_hmr_runtime_proxy_adapter_dom_js__WEBPACK_IMPORTED_MODULE_2__.adapter, acceptable: true, preserveLocalState: false, emitCss: false, }); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8066508421ed91b9eb0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.87781f404ccb3b4cb995.hot-update.js.map