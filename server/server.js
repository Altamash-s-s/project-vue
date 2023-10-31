module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		59: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"icon-account","1":"icon-add_to_cart","2":"icon-added_to_cart","3":"icon-arrow_down","4":"icon-arrow_left","5":"icon-arrow_right","6":"icon-arrow_top","7":"icon-check","8":"icon-chevron_down","9":"icon-chevron_left","10":"icon-chevron_right","11":"icon-chevron_up","12":"icon-clock","13":"icon-credits","14":"icon-cross","15":"icon-drag","16":"icon-empty_cart","17":"icon-error","18":"icon-filter","19":"icon-filter2","20":"icon-gift","21":"icon-heart","22":"icon-heart_fill","23":"icon-home","24":"icon-home_fill","25":"icon-info","26":"icon-info_circle","27":"icon-info_shield","28":"icon-list","29":"icon-login","30":"icon-logout","31":"icon-mail","32":"icon-marker","33":"icon-marker_fill","34":"icon-menu","35":"icon-message","36":"icon-minus","37":"icon-more","38":"icon-newsletter","39":"icon-phone","40":"icon-plus","41":"icon-profile","42":"icon-profile_fill","43":"icon-question_mark","44":"icon-return","45":"icon-rewards","46":"icon-safety","47":"icon-search","48":"icon-shipping","49":"icon-show_password","50":"icon-sort","51":"icon-star","52":"icon-store","53":"icon-tiles","54":"pages/Home","55":"pages/Page","60":"icon-empty_cart-svg","61":"icon-error-svg","62":"lang-de.js","63":"pages/Cms","64":"pages/Faq"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 207);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ composition_api_["computed"]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ composition_api_["inject"]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ composition_api_["nextTick"]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ composition_api_["onBeforeMount"]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ composition_api_["onMounted"]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ composition_api_["onUnmounted"]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ composition_api_["provide"]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ composition_api_["reactive"]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ composition_api_["readonly"]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ composition_api_["ref"]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ composition_api_["set"]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ composition_api_["toRef"]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ composition_api_["toRefs"]; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ composition_api_["watch"]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ defineComponent; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ globalPlugin; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* binding */ setMetaPlugin; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* binding */ ssrRef; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* binding */ useAsync; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* binding */ useContext; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* binding */ useFetch; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* binding */ useRoute; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* binding */ useRouter; });

// UNUSED EXPORTS: createApp, createRef, customRef, defineAsyncComponent, del, effectScope, getCurrentInstance, getCurrentScope, h, isRaw, isReactive, isReadonly, isRef, markRaw, onActivated, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onScopeDispose, onServerPrefetch, onUpdated, proxyRefs, shallowReactive, shallowReadonly, shallowRef, toRaw, triggerRef, unref, useAttrs, useCSSModule, useCssModule, useSlots, version, warn, watchEffect, watchPostEffect, watchSyncEffect, defineNuxtMiddleware, defineNuxtPlugin, onGlobalSetup, reqRef, reqSsrRef, setSSRContext, shallowSsrRef, ssrPromise, useMeta, useStatic, useStore, withContext, wrapProperty

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@vue/composition-api"
var composition_api_ = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/composition-api/globals.mjs
const isFullStatic = false;
const staticPath = "D:/Zaid/Work/Human Abstract/assets_dev/testing_setup/ha-test/.nuxt/static-json";
const publicPath = "/";
const globalContext = "__NUXT__";
const globalNuxt = "$nuxt";
// EXTERNAL MODULE: ./node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(141);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs






function validateKey(key) {
  if (!key) {
    throw new Error("You must provide a key. You can have it generated automatically by adding '@nuxtjs/composition-api/dist/babel-plugin' to your Babel plugins.");
  }
}
function getCurrentInstance() {
  const vm = Object(composition_api_["getCurrentInstance"])();
  if (!vm) return;
  return vm.proxy;
}
function getValue(value) {
  if (value instanceof Function) return value();
  return value;
}
let globalRefs = {};
function setSSRContext(app) {
  globalRefs = Object.assign({}, {});
  app.context.ssrContext.nuxt.globalRefs = globalRefs;
}
const useServerData = () => {
  const vm = getCurrentInstance();
  const type = vm ? 'ssrRefs' : 'globalRefs';
  let ssrRefs;
  if (vm && true) {
    const ssrContext = (vm[globalNuxt] || vm.$options).context.ssrContext;
    ssrRefs = ssrContext.nuxt.ssrRefs = ssrContext.nuxt.ssrRefs || {};
  }
  const setData = (key, val) => {
    const refs = ssrRefs || globalRefs;
    refs[key] = sanitise(val);
  };
  return {
    type,
    setData
  };
};
const isProxyable = val => !!val && typeof val === 'object';
const sanitise = val => val && JSON.parse(JSON.stringify(val)) || val;
const ssrValue = (value, key, type = 'globalRefs') => {
  var _a, _b, _c, _d;
  if (false) {}
  return getValue(value);
};
const ssrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  let val = ssrValue(value, key, type);
  if (false) {}
  if (value instanceof Function) setData(key, val);
  const getProxy = (track, trigger, observable) => new Proxy(observable, {
    get(target, prop) {
      track();
      if (isProxyable(target[prop])) return getProxy(track, trigger, target[prop]);
      const value2 = Reflect.get(target, prop);
      return typeof value2 === 'function' ? value2.bind(target) : value2;
    },
    set(obj, prop, newVal) {
      const result = Reflect.set(obj, prop, newVal);
      setData(key, val);
      trigger();
      return result;
    }
  });
  const proxy = Object(composition_api_["customRef"])((track, trigger) => ({
    get: () => {
      track();
      if (isProxyable(val)) return getProxy(track, trigger, val);
      return val;
    },
    set: v => {
      setData(key, v);
      val = v;
      trigger();
    }
  }));
  return proxy;
};
const shallowSsrRef = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  if (false) {}
  const _val = getValue(value);
  if (value instanceof Function) {
    setData(key, _val);
  }
  return Object(composition_api_["customRef"])((track, trigger) => ({
    get() {
      track();
      return _val;
    },
    set(newValue) {
      setData(key, newValue);
      value = newValue;
      trigger();
    }
  }));
};
const ssrPromise = (value, key) => {
  validateKey(key);
  const {
    type,
    setData
  } = useServerData();
  const val = ssrValue(value, key, type);
  if (false) {}
  Object(composition_api_["onServerPrefetch"])(async () => {
    setData(key, await val);
  });
  return val;
};
const useAsync = (cb, key) => {
  var _a;
  validateKey(key);
  const _ref = Object(composition_api_["isRef"])(key) ? key : ssrRef(null, key);
  if (!_ref.value ||  false && (false)) {
    const p = Promise.resolve(cb());
    if (true) {
      Object(composition_api_["onServerPrefetch"])(async () => {
        _ref.value = await p;
      });
    } else {}
  }
  return _ref;
};
function createEmptyMeta() {
  return {
    titleTemplate: null,
    __dangerouslyDisableSanitizers: [],
    __dangerouslyDisableSanitizersByTagID: {},
    title: void 0,
    htmlAttrs: {},
    headAttrs: {},
    bodyAttrs: {},
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: [],
    changed: void 0,
    afterNavigation: void 0
  };
}
const getHeadOptions = options => {
  const head = function () {
    const optionHead = options.head instanceof Function ? options.head.call(this) : options.head;
    if (!this._computedHead) return optionHead;
    const computedHead = this._computedHead.map(h => {
      if (Object(composition_api_["isReactive"])(h)) return Object(composition_api_["toRaw"])(h);
      if (Object(composition_api_["isRef"])(h)) return h.value;
      return h;
    });
    return defu_default()({}, ...computedHead.reverse(), optionHead);
  };
  return {
    head
  };
};
const useMeta = init => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('useMeta must be called within a component.');
  if (!('head' in vm.$options)) throw new Error('In order to enable `useMeta`, please make sure you include `head: {}` within your component definition, and you are using the `defineComponent` exported from @nuxtjs/composition-api.');
  const refreshMeta = () => vm.$meta().refresh();
  if (!vm._computedHead) {
    const metaRefs = Object(composition_api_["reactive"])(createEmptyMeta());
    vm._computedHead = [metaRefs];
    vm._metaRefs = Object(composition_api_["toRefs"])(metaRefs);
    if (false) {}
  }
  if (init) {
    const initRef = init instanceof Function ? Object(composition_api_["computed"])(init) : Object(composition_api_["ref"])(init);
    vm._computedHead.push(initRef);
    if (false) {}
  }
  return vm._metaRefs;
};
const defineComponent = options => {
  if (!('head' in options)) return options;
  return {
    ...options,
    ...getHeadOptions(options)
  };
};
const withContext = callback => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  callback((vm[globalNuxt] || vm.$options).context);
};
const useContext = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  return {
    ...(vm[globalNuxt] || vm.$options).context,
    route: Object(composition_api_["computed"])(() => vm.$route),
    query: Object(composition_api_["computed"])(() => vm.$route.query),
    from: Object(composition_api_["computed"])(() => (vm[globalNuxt] || vm.$options).context.from),
    params: Object(composition_api_["computed"])(() => vm.$route.params)
  };
};
const defineNuxtPlugin = plugin => plugin;
const defineNuxtMiddleware = middleware => middleware;
const nuxtState =  false && false;
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
const fetches = new WeakMap();
const fetchPromises = new Map();
const isSsrHydration = vm => {
  var _a, _b, _c;
  return (_c = (_b = (_a = vm.$vnode) == null ? void 0 : _a.elm) == null ? void 0 : _b.dataset) == null ? void 0 : _c.fetchKey;
};
function registerCallback(vm, callback) {
  const callbacks = fetches.get(vm) || [];
  fetches.set(vm, [...callbacks, callback]);
}
async function callFetches() {
  const fetchesToCall = fetches.get(this);
  if (!fetchesToCall) return;
  this[globalNuxt].nbFetching++;
  this.$fetchState.pending = true;
  this.$fetchState.error = null;
  this._hydrated = false;
  let error = null;
  const startTime = Date.now();
  try {
    await Promise.all(fetchesToCall.map(fetch => {
      if (fetchPromises.has(fetch)) return fetchPromises.get(fetch);
      const promise = Promise.resolve(fetch(this)).finally(() => fetchPromises.delete(fetch));
      fetchPromises.set(fetch, promise);
      return promise;
    }));
  } catch (err) {
    if (false) {}
    error = normalizeError(err);
  }
  const delayLeft = (this._fetchDelay || 0) - (Date.now() - startTime);
  if (delayLeft > 0) {
    await new Promise(resolve => setTimeout(resolve, delayLeft));
  }
  this.$fetchState.error = error;
  this.$fetchState.pending = false;
  this.$fetchState.timestamp = Date.now();
  this.$nextTick(() => this[globalNuxt].nbFetching--);
}
const setFetchState = vm => {
  vm.$fetchState = vm.$fetchState || Object(composition_api_["reactive"])({
    error: null,
    pending: false,
    timestamp: 0
  });
};
const mergeDataOnMount = data => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  Object(composition_api_["onBeforeMount"])(() => {
    for (const key in data) {
      try {
        if (key in vm) {
          const _key = key;
          if (vm[_key] === data[key]) continue;
          if (typeof vm[_key] === 'function') continue;
          if (Object(composition_api_["isReactive"])(vm[_key])) {
            for (const k in vm[_key]) {
              if (!(k in data[key])) {
                delete vm[_key][k];
              }
            }
            Object.assign(vm[_key], data[key]);
            continue;
          }
        }
        Object(composition_api_["set"])(vm, key, data[key]);
      } catch (e) {
        if (false) {}
      }
    }
  });
};
const loadFullStatic = vm => {
  vm._fetchKey = getKey(vm);
  const {
    fetchOnServer
  } = vm.$options;
  const fetchedOnServer = typeof fetchOnServer === 'function' ? fetchOnServer.call(vm) !== false : fetchOnServer !== false;
  const nuxt = vm[globalNuxt];
  if (!fetchedOnServer || (nuxt == null ? void 0 : nuxt.isPreview) || !(nuxt == null ? void 0 : nuxt._pagePayload)) {
    return;
  }
  vm._hydrated = true;
  const data = nuxt._pagePayload.fetch[vm._fetchKey];
  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return;
  }
  mergeDataOnMount(data);
};
async function serverPrefetch(vm) {
  if (!vm._fetchOnServer) return;
  setFetchState(vm);
  try {
    await callFetches.call(vm);
  } catch (err) {
    if (false) {}
    vm.$fetchState.error = normalizeError(err);
  }
  vm.$fetchState.pending = false;
  vm._fetchKey = 'push' in vm.$ssrContext.nuxt.fetch ? vm.$ssrContext.nuxt.fetch.length : vm._fetchKey || vm.$ssrContext.fetchCounters['']++;
  if (!vm.$vnode.data) vm.$vnode.data = {};
  const attrs = vm.$vnode.data.attrs = vm.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = vm._fetchKey;
  const data = {
    ...vm._data
  };
  Object.entries(vm.__composition_api_state__.rawBindings).forEach(([key, val]) => {
    if (val instanceof Function || val instanceof Promise) return;
    data[key] = Object(composition_api_["isRef"])(val) ? val.value : val;
  });
  const content = vm.$fetchState.error ? {
    _error: vm.$fetchState.error
  } : JSON.parse(JSON.stringify(data));
  if ('push' in vm.$ssrContext.nuxt.fetch) {
    vm.$ssrContext.nuxt.fetch.push(content);
  } else {
    vm.$ssrContext.nuxt.fetch[vm._fetchKey] = content;
  }
}
function getKey(vm) {
  const nuxtState2 = vm[globalNuxt];
  if ( true && 'push' in vm.$ssrContext.nuxt.fetch) {
    return void 0;
  } else if (false) {}
  const defaultKey = vm.$options._scopeId || vm.$options.name || '';
  const getCounter = createGetCounter( true ? vm.$ssrContext.fetchCounters : undefined, defaultKey);
  const options = vm.$options;
  if (typeof options.fetchKey === 'function') {
    return options.fetchKey.call(vm, getCounter);
  } else {
    const key = typeof options.fetchKey === 'string' ? options.fetchKey : defaultKey;
    return key ? key + ':' + getCounter(key) : String(getCounter(key));
  }
}
const useFetch = callback => {
  var _a;
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  registerCallback(vm, callback);
  if (typeof vm.$options.fetchOnServer === 'function') {
    vm._fetchOnServer = vm.$options.fetchOnServer.call(vm) !== false;
  } else {
    vm._fetchOnServer = vm.$options.fetchOnServer !== false;
  }
  if (true) {
    vm._fetchKey = getKey(vm);
  }
  setFetchState(vm);
  Object(composition_api_["onServerPrefetch"])(() => serverPrefetch(vm));
  function result() {
    return {
      fetch: vm.$fetch,
      fetchState: vm.$fetchState,
      $fetch: vm.$fetch,
      $fetchState: vm.$fetchState
    };
  }
  vm._fetchDelay = typeof vm.$options.fetchDelay === 'number' ? vm.$options.fetchDelay : 0;
  vm.$fetch = callFetches.bind(vm);
  Object(composition_api_["onBeforeMount"])(() => !vm._hydrated && callFetches.call(vm));
  if (true) {
    if (false) {}
    return result();
  }
  vm._hydrated = true;
  vm._fetchKey = ((_a = vm.$vnode.elm) == null ? void 0 : _a.dataset.fetchKey) || getKey(vm);
  const data = nuxtState.fetch[vm._fetchKey];
  if (data && data._error) {
    vm.$fetchState.error = data._error;
    return result();
  }
  mergeDataOnMount(data);
  return result();
};
const reqRefs = new Set();
const reqRef = initialValue => {
  const _ref = Object(composition_api_["ref"])(initialValue);
  if (true) reqRefs.add(() => _ref.value = initialValue);
  return _ref;
};
const reqSsrRef = (initialValue, key) => {
  const _ref = ssrRef(initialValue, key);
  if (true) reqRefs.add(() => {
    _ref.value = initialValue instanceof Function ? sanitise(initialValue()) : initialValue;
  });
  return _ref;
};
let globalSetup;
const onGlobalSetup = fn => {
  globalSetup.add(fn);
};
const setMetaPlugin = context => {
  const {
    head
  } = context.app;
  Object.assign(context.app, getHeadOptions({
    head
  }));
};
const globalPlugin = context => {
  if (true) {
    reqRefs.forEach(reset => reset());
    setSSRContext(context.app);
  }
  const {
    setup
  } = context.app;
  globalSetup = new Set();
  context.app.setup = function (...args) {
    let result = {};
    if (setup instanceof Function) {
      result = setup(...args) || {};
    }
    for (const fn of globalSetup) {
      result = {
        ...result,
        ...(fn.call(this, ...args) || {})
      };
    }
    return result;
  };
};
const staticCache = {};
function writeFile(key, value) {
  if (true) return;
  const {
    writeFileSync
  } =  false ? undefined : __webpack_require__(212);
  const {
    join
  } =  false ? undefined : __webpack_require__(213);
  try {
    writeFileSync(join(staticPath, `${key}.json`), value);
  } catch (e) {
    console.log(e);
  }
}
const useStatic = (factory, param = Object(composition_api_["ref"])(''), keyBase) => {
  var _a, _b;
  const key = Object(composition_api_["computed"])(() => `${keyBase}-${param.value}`);
  const result = ssrRef(null, key.value);
  if (result.value) staticCache[key.value] = result.value;
  if (false) {} else {
    if (key.value in staticCache) {
      result.value = staticCache[key.value];
      return result;
    }
    Object(composition_api_["onServerPrefetch"])(async () => {
      const [_key, _param] = [key.value, param.value];
      result.value = await factory(_param, _key);
      staticCache[_key] = result.value;
      writeFile(_key, JSON.stringify(result.value));
    });
  }
  return result;
};
const wrapProperty = (property, makeComputed) => {
  return () => {
    const vm = getCurrentInstance();
    if (!vm) throw new Error('This must be called within a setup function.');
    return makeComputed !== false ? Object(composition_api_["computed"])(() => vm[property]) : vm[property];
  };
};
const useRouter = wrapProperty('$router', false);
const useRoute = wrapProperty('$route');
const useStore = key => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');
  return vm.$store;
};
if (false) {}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Logger; });

// CONCATENATED MODULE: ./helpers/logger/style.ts
const createLogEntryVariantStyle = (backgroundColor, textColor) => `
  padding: 2px; 
  border-radius: 0 2px 2px 0; 
  background: ${backgroundColor};
  color: ${textColor};
`;
const colors = {
  white: '#fff',
  black: '#000',
  // Storefront UI colors
  success: '#5ece7b',
  danger: '#d12727',
  warning: '#ecc713',
  info: '#0468db'
};
const defaultStyle = createLogEntryVariantStyle(colors.success, colors.white);
const logEntryVariantProperties = {
  error: {
    prefixText: '[error]',
    style: createLogEntryVariantStyle(colors.danger, colors.white)
  },
  warn: {
    prefixText: '[warn]',
    style: createLogEntryVariantStyle(colors.warning, colors.black)
  },
  info: {
    prefixText: '[info]',
    style: createLogEntryVariantStyle(colors.info, colors.white)
  },
  debug: {
    prefixText: '[debug]',
    style: defaultStyle
  },
  none: {
    prefixText: '',
    style: defaultStyle
  }
};
const isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]' || process.env.APPLICATION_ENV === 'production';
const getStyledConsolePrefix = logEntryVariant => {
  const {
    prefixText,
    style
  } = logEntryVariantProperties[logEntryVariant];
  const prefix = `[VSF]${prefixText}`;
  const nodeStyle = [`${prefix}: `];
  const browserStyle = [`%c${prefix}%c:`, style, 'background: transparent;'];
  return isNode ? nodeStyle : browserStyle;
};
// CONCATENATED MODULE: ./helpers/logger/verbosity.ts

const partial = (fn, ...args) => (...laterArgs) => fn(...args, ...laterArgs);
const getLoggerWithVerbosity = verbosity => {
  const noOperation = () => {};
  const matches = verbosities => verbosities.includes(verbosity);
  return {
    debug: matches(['debug']) ? partial(console.debug, ...getStyledConsolePrefix('debug')) : noOperation,
    info: matches(['info', 'debug']) ? partial(console.info, ...getStyledConsolePrefix('info')) : noOperation,
    warn: matches(['info', 'warn', 'error']) ? partial(console.warn, ...getStyledConsolePrefix('warn')) : noOperation,
    error: matches(['info', 'warn', 'debug', 'error']) ? partial(console.error, ...getStyledConsolePrefix('error')) : noOperation
  };
};
const getVerbosity = nodeEnv => {
  var _a;
  const defaultModes = {
    // Test
    test: 'none',
    // Development
    dev: 'debug',
    development: 'debug',
    // Production
    prod: 'error',
    production: 'error'
  };
  return (_a = defaultModes[nodeEnv]) !== null && _a !== void 0 ? _a : 'warn';
};
// CONCATENATED MODULE: ./helpers/logger/index.ts

const logger_verbosity = getVerbosity("production");
const Logger = getLoggerWithVerbosity(logger_verbosity);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@vue/composition-api");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', { value: true });

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }
  return input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)["URLSearchParams"]))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ __webpack_exports__["a"] = (isObject);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useApi["b" /* useApi */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ useCategory["a" /* useCategory */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ useConfig; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ useContent; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ useCountrySearch["a" /* useCountrySearch */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ useCurrency; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ useExternalCheckout; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ useFacet; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ useForgotPassword["a" /* useForgotPassword */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ useGuestUser; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ useImage; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ useProduct["a" /* useProduct */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ useStore; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ useUiHelpers; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ useUiNotification["a" /* useUiNotification */]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ useUiState["a" /* useUiState */]; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ useWishlist["b" /* useWishlist */]; });

// UNUSED EXPORTS: useAddresses, useBilling, useCart, useCategorySearch, useGetShippingMethods, useMagentoConfiguration, useMakeOrder, useNewsletter, usePaymentProvider, useRelatedProducts, useReview, useShipping, useShippingProvider, useUpsellProducts, useUrlResolver, useUser, useUserAddress, useUserOrder, useCartView, ProductStockStatus, SortEnum, SubscriptionStatusesEnum, WishlistCartUserInputErrorType

// EXTERNAL MODULE: ./composables/useApi/index.ts
var useApi = __webpack_require__(33);

// EXTERNAL MODULE: ./modules/customer/composables/useAddresses/index.ts + 1 modules
var useAddresses = __webpack_require__(85);

// EXTERNAL MODULE: ./modules/checkout/composables/useBilling/index.ts + 2 modules
var useBilling = __webpack_require__(98);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// EXTERNAL MODULE: ./modules/catalog/category/composables/useCategory/index.ts + 2 modules
var useCategory = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/catalog/category/composables/useCategorySearch/useCategorySearch.ts

// CONCATENATED MODULE: ./modules/catalog/category/composables/useCategorySearch/index.ts


/**
 * Allows searching for categories. It is
 * commonly used in subtrees navigation.
 *
 * See the {@link UseCategorySearchInterface} for a list of methods and values available in this composable.
 */
function useCategorySearch() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null
  });
  const result = Object(runtime["l" /* ref */])(null);
  const search = async params => {
    var _a;
    logger["a" /* Logger */].debug('useCategory/search', params);
    try {
      loading.value = true;
      const {
        filters
      } = params;
      const {
        data
      } = await app.context.$vsf.$magento.api.categorySearch({
        filters
      }, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      result.value = data.categoryList;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      result.value = null;
      logger["a" /* Logger */].error('useCategory/search', err);
    } finally {
      loading.value = false;
    }
  };
  return {
    search,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error),
    result: Object(runtime["k" /* readonly */])(result)
  };
}

/* harmony default export */ var composables_useCategorySearch = (useCategorySearch);
// EXTERNAL MODULE: external "pinia"
var external_pinia_ = __webpack_require__(9);

// CONCATENATED MODULE: ./stores/config.ts

const useConfigStore = Object(external_pinia_["defineStore"])('magentoConfig', {
  state: () => ({
    storeConfig: {},
    stores: [],
    currency: {}
  })
});
// CONCATENATED MODULE: ./composables/useConfig/useConfig.ts

// CONCATENATED MODULE: ./composables/useConfig/index.ts



/**
 * Allows interacting with the store configuration.
 *
 * See the {@link UseConfigInterface} for a list of methods and values available in this composable.
 */
function useConfig() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null
  });
  const configStore = useConfigStore();
  const config = Object(runtime["a" /* computed */])(() => configStore.storeConfig);
  const load = async params => {
    var _a;
    error.value.load = null;
    loading.value = true;
    logger["a" /* Logger */].debug('useConfig/load');
    try {
      const {
        data
      } = await app.$vsf.$magento.api.storeConfig((_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      configStore.$patch(state => {
        state.storeConfig = data.storeConfig || {};
      });
    } catch (err) {
      logger["a" /* Logger */].debug('[ERROR] useConfig/load', err);
      error.value.load = err;
    } finally {
      loading.value = false;
    }
  };
  return {
    config,
    loading: Object(runtime["k" /* readonly */])(loading),
    load
  };
}

/* harmony default export */ var composables_useConfig = (useConfig);
// CONCATENATED MODULE: ./composables/useContent/commands/loadContentCommand.ts

const loadContentCommand = {
  execute: async (context, params) => {
    var _a;
    logger["a" /* Logger */].debug('[Magento]: Load CMS Page content', {
      params
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const {
      data
    } = await context.$magento.api.cmsPage(params.identifier, (_a = params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return data.cmsPage;
  }
};
// CONCATENATED MODULE: ./composables/useContent/commands/loadBlocksCommand.ts

const loadBlocksCommand = {
  execute: async (context, params) => {
    var _a;
    logger["a" /* Logger */].debug('[Magento]: Load CMS Blocks content', {
      params
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const {
      data
    } = await context.$magento.api.cmsBlocks(params.identifiers, (_a = params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return data.cmsBlocks.items;
  }
};
// CONCATENATED MODULE: ./composables/useContent/useContent.ts

// CONCATENATED MODULE: ./composables/useContent/index.ts




/**
 * Allows loading CMS Pages or Blocks from Magento API.
 *
 * See the {@link UseContentInterface} for a list of methods and values available in this composable.
 */
function useContent() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    page: null,
    blocks: null
  });
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const context = app.$vsf;
  async function loadPage(params) {
    logger["a" /* Logger */].debug('useContent/loadPage');
    loading.value = true;
    let result = null;
    try {
      error.value.page = null;
      result = await loadContentCommand.execute(context, params);
    } catch (err) {
      error.value.page = err;
    } finally {
      loading.value = false;
    }
    return result;
  }
  async function loadBlocks(params) {
    logger["a" /* Logger */].debug('useContent/loadBlocks');
    loading.value = true;
    let result = [];
    try {
      error.value.blocks = null;
      result = await loadBlocksCommand.execute(context, params);
    } catch (err) {
      error.value.blocks = err;
    } finally {
      loading.value = false;
    }
    return result;
  }
  return {
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading),
    loadPage,
    loadBlocks
  };
}
/* harmony default export */ var composables_useContent = (useContent);

// EXTERNAL MODULE: ./composables/useCountrySearch/index.ts + 1 modules
var useCountrySearch = __webpack_require__(101);

// CONCATENATED MODULE: ./composables/useCurrency/useCurrency.ts

// CONCATENATED MODULE: ./composables/useCurrency/index.ts



/**
 * Allows loading and changing the currency.
 *
 * See the {@link UseCurrencyInterface} for a list of methods and values available in this composable.
 */
function useCurrency() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    change: null
  });
  const configStore = useConfigStore();
  const currency = Object(runtime["a" /* computed */])(() => configStore.currency);
  const load = async params => {
    var _a, _b;
    error.value.load = null;
    loading.value = true;
    logger["a" /* Logger */].debug('useCurrency/load');
    try {
      const {
        data
      } = await app.$vsf.$magento.api.currency((_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, (_b = params === null || params === void 0 ? void 0 : params.customHeaders) !== null && _b !== void 0 ? _b : null);
      configStore.$patch(state => {
        var _a;
        state.currency = (_a = data === null || data === void 0 ? void 0 : data.currency) !== null && _a !== void 0 ? _a : {};
      });
    } catch (err) {
      logger["a" /* Logger */].debug('[ERROR] useCurrency/load', err);
      error.value.load = err;
    } finally {
      loading.value = false;
    }
  };
  const change = params => {
    error.value.change = null;
    logger["a" /* Logger */].debug('useCurrency/change');
    try {
      app.$vsf.$magento.config.state.setCurrency(params.id);
      window.location.reload();
    } catch (err) {
      logger["a" /* Logger */].debug('[ERROR] useCurrency/change', err);
      error.value.change = err;
    }
  };
  return {
    load,
    change,
    currency,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useCurrency = (useCurrency);
// CONCATENATED MODULE: ./composables/useExternalCheckout/useExternalCheckout.ts

// CONCATENATED MODULE: ./composables/useExternalCheckout/index.ts


/**
 * Allows redirecting to external checkout process. It depends on the {@link https://github.com/Vendic/magento2-external-checkout | magento2-external-checkout repository}.
 *
 * See the {@link UseExternalCheckoutInterface} for a list of methods and values available in this composable.
 */
function useExternalCheckout() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])(null);
  // eslint-disable-next-line consistent-return
  const initializeCheckout = params => {
    logger["a" /* Logger */].debug('[Magento]: Initialize external checkout', {
      params
    });
    try {
      const {
        externalCheckout,
        state
      } = app.context.$vsf.$magento.config;
      const userToken = state.getCustomerToken();
      const cartToken = state.getCartId();
      logger["a" /* Logger */].debug({
        userToken,
        cartToken
      });
      loading.value = true;
      if (externalCheckout.enable) {
        if (userToken && cartToken) {
          window.location.replace(`${externalCheckout.cmsUrl}${externalCheckout.syncUrlPath}/token/${userToken}/cart/${cartToken}`);
          return '';
        }
        window.location.replace(`${externalCheckout.cmsUrl}${externalCheckout.syncUrlPath}/token//cart/${cartToken}`);
        return '';
      }
      return params.baseUrl;
    } catch (err) {
      error.value = err;
      logger["a" /* Logger */].error(err);
    } finally {
      loading.value = false;
    }
  };
  return {
    initializeCheckout,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}

/* harmony default export */ var composables_useExternalCheckout = (useExternalCheckout);
// CONCATENATED MODULE: ./modules/catalog/category/composables/useFacet/sortingOptions.ts
var SortingOptionsValuesEnum;
(function (SortingOptionsValuesEnum) {
  SortingOptionsValuesEnum["DEFAULT"] = "";
  SortingOptionsValuesEnum["NAME_ASC"] = "name_ASC";
  SortingOptionsValuesEnum["NAME_DESC"] = "name_DESC";
  SortingOptionsValuesEnum["PRICE_ASC"] = "price_ASC";
  SortingOptionsValuesEnum["PRICE_DESC"] = "price_DESC";
})(SortingOptionsValuesEnum || (SortingOptionsValuesEnum = {}));
const sortingOptions = [{
  label: 'Sort: Default',
  value: SortingOptionsValuesEnum.DEFAULT
}, {
  label: 'Sort: Name A-Z',
  value: SortingOptionsValuesEnum.NAME_ASC
}, {
  label: 'Sort: Name Z-A',
  value: SortingOptionsValuesEnum.NAME_DESC
}, {
  label: 'Sort: Price from low to high',
  value: SortingOptionsValuesEnum.PRICE_ASC
}, {
  label: 'Sort: Price from high to low',
  value: SortingOptionsValuesEnum.PRICE_DESC
}];
// EXTERNAL MODULE: ./modules/catalog/category/composables/useFacet/perPageOptions.ts
var perPageOptions = __webpack_require__(110);

// CONCATENATED MODULE: ./modules/catalog/category/composables/useFacet/input/createProductAttributeFilterInput.ts
const rangeFilters = ['price'];
function createProductAttributeFilterInput(params) {
  var _a, _b;
  const attributeFilter = {};
  const inputFilters = (_a = params === null || params === void 0 ? void 0 : params.filters) !== null && _a !== void 0 ? _a : {};
  const categoryFilter = {
    category_uid: {
      in: [params.category_uid, ...((_b = inputFilters.category_uid) !== null && _b !== void 0 ? _b : [])]
    }
  };
  Object.keys(inputFilters).forEach(key => {
    if (rangeFilters.includes(key)) {
      const range = {
        from: 0,
        to: 0
      };
      const flatValue = inputFilters[key].flatMap(inputFilter => inputFilter.split('_')).map(str => Number.parseFloat(str)).sort((a, b) => a - b);
      [range.from] = flatValue;
      range.to = flatValue[flatValue.length - 1];
      attributeFilter[key] = range;
    } else if (typeof inputFilters[key] === 'string') {
      attributeFilter[key] = {
        eq: inputFilters[key]
      };
    } else if (inputFilters[key].length === 1) {
      attributeFilter[key] = {
        eq: inputFilters[key][0]
      };
    } else {
      attributeFilter[key] = {
        in: inputFilters[key]
      };
    }
  });
  return {
    ...attributeFilter,
    ...categoryFilter
  };
}
// CONCATENATED MODULE: ./modules/catalog/category/composables/useFacet/input/createProductAttributeSortInput.ts
function createProductAttributeSortInput(sortData) {
  const baseData = sortData.split(/_/gi);
  return baseData.length > 0 ? Object.fromEntries([baseData]) : {};
}
// CONCATENATED MODULE: ./modules/catalog/category/composables/useFacet/getFacetData.gql.ts
/**
 * GraphQL Query that fetches products using received search term and the params
 * for filter, sort and pagination.
 */
/* harmony default export */ var getFacetData_gql = (`
  query getFacetData($search: String = "", $filter: ProductAttributeFilterInput, $pageSize: Int = 10, $currentPage: Int = 1, $sort: ProductAttributeSortInput) {
    products(search: $search, filter: $filter, pageSize: $pageSize, currentPage: $currentPage, sort: $sort) {
      items {
        __typename
        uid
        sku
        name
        stock_status
        only_x_left_in_stock
        thumbnail {
          url
          position
          disabled
          label
        }
        url_key
        url_rewrites {
          url
        }
        price_range {
          maximum_price {
            final_price {
              currency
              value
            }
            regular_price {
              currency
              value
            }
          }
          minimum_price {
            final_price {
              currency
              value
            }
            regular_price {
              currency
              value
            }
          }
        }
        ... on GroupedProduct {
          items {
            product {
              sku
            }
          }
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }
`);
// CONCATENATED MODULE: ./modules/catalog/category/composables/useFacet/useFacet.ts

// CONCATENATED MODULE: ./modules/catalog/category/composables/useFacet/index.ts








/**
 * Allows searching for products with pagination, totals and sorting options.
 *
 * See the {@link UseFacetInterface} for a list of methods and values available in this composable.
 */
function useFacet() {
  const {
    query
  } = Object(useApi["a" /* default */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const result = Object(runtime["l" /* ref */])({
    data: null,
    input: null
  });
  const error = Object(runtime["l" /* ref */])({
    search: null
  });
  const defaultItemsPerPage = 20;
  const search = async params => {
    var _a, _b;
    logger["a" /* Logger */].debug('useFacet/search', params);
    result.value.input = params;
    try {
      loading.value = true;
      const pageSize = params.itemsPerPage ? params.itemsPerPage : defaultItemsPerPage;
      const productSearchParams = {
        pageSize,
        search: params.term ? params.term : '',
        filter: createProductAttributeFilterInput(params),
        sort: createProductAttributeSortInput(params.sort || ''),
        currentPage: params.page
      };
      const {
        data
      } = await query(getFacetData_gql, productSearchParams);
      const products = (_a = data === null || data === void 0 ? void 0 : data.products) !== null && _a !== void 0 ? _a : null;
      logger["a" /* Logger */].debug('[Result]:', {
        products
      });
      result.value.data = {
        items: (_b = products === null || products === void 0 ? void 0 : products.items) !== null && _b !== void 0 ? _b : [],
        total: products === null || products === void 0 ? void 0 : products.total_count,
        availableSortingOptions: sortingOptions,
        perPageOptions: perPageOptions["a" /* perPageOptions */],
        itemsPerPage: pageSize
      };
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useFacet/search', err);
    } finally {
      loading.value = false;
    }
  };
  return {
    search,
    result,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useFacet = (useFacet);
// EXTERNAL MODULE: ./modules/customer/composables/useForgotPassword/index.ts + 1 modules
var useForgotPassword = __webpack_require__(102);

// CONCATENATED MODULE: ./modules/checkout/composables/useGetShippingMethods/commands/getGuestShippingMethodsCommand.ts
const getGuestShippingMethodsCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    const {
      data
    } = await context.$vsf.$magento.api.getAvailableShippingMethods({
      cartId: params.cartId
    }, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    const hasAddresses = data.cart.shipping_addresses.length > 0;
    return hasAddresses ? (_c = (_b = data === null || data === void 0 ? void 0 : data.cart) === null || _b === void 0 ? void 0 : _b.shipping_addresses[0]) === null || _c === void 0 ? void 0 : _c.available_shipping_methods : [];
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useGetShippingMethods/commands/getCustomerShippingMethodsCommand.ts
const getCustomerShippingMethodsCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    const {
      data: {
        customerCart: {
          shipping_addresses: shippingAddresses
        }
      }
    } = await context.$magento.api.getAvailableCustomerShippingMethods((_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    return (_c = (_b = shippingAddresses[0]) === null || _b === void 0 ? void 0 : _b.available_shipping_methods) !== null && _c !== void 0 ? _c : [];
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useGetShippingMethods/useGetShippingMethods.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useGetShippingMethods/index.ts




/**
 * Allows fetching shipping methods available for a given cart.
 *
 * See the {@link UseGetShippingMethodsInterface} for a list of methods and values available in this composable.
 */
function useGetShippingMethods() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null
  });
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const {
    context
  } = app;
  const load = async params => {
    logger["a" /* Logger */].debug('useGetShippingMethods/load', {
      params
    });
    let result = [];
    try {
      loading.value = true;
      const isGuest = params.cartId;
      result = await (isGuest
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      ? getGuestShippingMethodsCommand.execute(context, params)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      : getCustomerShippingMethodsCommand.execute(context, params));
      logger["a" /* Logger */].debug('[Result]:', {
        result
      });
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useGetShippingMethods/load', err);
    } finally {
      loading.value = false;
    }
    return result;
  };
  return {
    load,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}

// CONCATENATED MODULE: ./modules/customer/composables/useGuestUser/commands/attachToCartCommand.ts

const attachToCartCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('[Magento]: Attach guest cart to user');
    const emailOnCartInput = {
      email: params === null || params === void 0 ? void 0 : params.email,
      cart_id: (_b = (_a = params === null || params === void 0 ? void 0 : params.cart) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.id
    };
    await context.app.$vsf.$magento.api.setGuestEmailOnCart({
      ...emailOnCartInput
    }, (_c = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _c !== void 0 ? _c : null, params === null || params === void 0 ? void 0 : params.customHeaders);
  }
};
// CONCATENATED MODULE: ./modules/customer/composables/useGuestUser/useGuestUser.ts

// CONCATENATED MODULE: ./modules/customer/composables/useGuestUser/index.ts



/**
 * Allows to attach a guest cart to a user.
 *
 * See the {@link UseGuestUserInterface} for a list of methods and values available in this composable.
 */
function useGuestUser() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    attachToCart: null
  });
  const context = Object(runtime["s" /* useContext */])();
  const attachToCart = async params => {
    logger["a" /* Logger */].debug('useGuestUserFactory.attachToCart', {
      params
    });
    try {
      loading.value = true;
      await attachToCartCommand.execute(context, params);
      error.value.attachToCart = null;
    } catch (err) {
      error.value.attachToCart = err;
      logger["a" /* Logger */].error('useGuestUser/attachToCart', err);
    } finally {
      loading.value = false;
    }
  };
  return {
    attachToCart,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}

/* harmony default export */ var composables_useGuestUser = (useGuestUser);
// CONCATENATED MODULE: ./composables/useImage/useImage.ts

// CONCATENATED MODULE: ./composables/useImage/index.ts

const imageSizes = {
  productCard: {
    width: 216,
    height: 268
  },
  productCardHorizontal: {
    width: 140,
    height: 200
  },
  checkout: {
    imageWidth: 100,
    imageHeight: 100
  },
  productGallery: {
    thumbWidth: 160,
    thumbHeight: 160,
    imageWidth: 1080,
    imageHeight: 1340
  },
  cart: {
    imageWidth: 170,
    imageHeight: 170
  }
};
/**
 * Allows extracting image paths from magento URL.
 *
 * See the {@link UseImageInterface} for a list of methods and values available in this composable.
 * */
function useImage() {
  const context = Object(runtime["s" /* useContext */])();
  /**
   * Extract image path from Magento URL.
   *
   * @param fullImageUrl {string | null}
   *
   * @return {string}
   */
  const getMagentoImage = fullImageUrl => {
    if (!fullImageUrl) return '';
    // @ts-ignore
    const {
      imageProvider,
      magentoBaseUrl
    } = context.$vsf.$magento.config;
    if (imageProvider !== 'ipx') {
      const url = fullImageUrl.split(`${magentoBaseUrl}`);
      const regex = /cache\/(.*?)\//gm;
      return url[1].replace(regex, '');
    }
    return fullImageUrl;
  };
  return {
    getMagentoImage,
    imageSizes
  };
}

/* harmony default export */ var composables_useImage = (useImage);
// EXTERNAL MODULE: ./composables/useMagentoConfiguration/index.ts + 1 modules
var useMagentoConfiguration = __webpack_require__(42);

// EXTERNAL MODULE: ./modules/checkout/composables/useMakeOrder/index.ts + 2 modules
var useMakeOrder = __webpack_require__(99);

// EXTERNAL MODULE: ./modules/GraphQL/types.ts
var types = __webpack_require__(23);

// CONCATENATED MODULE: ./composables/useNewsletter/commands/updateSubscriptionCommand.ts
const updateSubscriptionCommand = {
  execute: async (context, params) => {
    var _a, _b, _c, _d;
    const {
      data
    } = await context.app.$vsf.$magento.api.subscribeEmailToNewsletter({
      email: params.email
    }, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, (_b = params === null || params === void 0 ? void 0 : params.customHeaders) !== null && _b !== void 0 ? _b : null);
    return (_d = (_c = data === null || data === void 0 ? void 0 : data.subscribeEmailToNewsletter) === null || _c === void 0 ? void 0 : _c.status) !== null && _d !== void 0 ? _d : null;
  }
};
// CONCATENATED MODULE: ./composables/useNewsletter/useNewsletter.ts

// CONCATENATED MODULE: ./composables/useNewsletter/index.ts




/**
 * Allows updating the subscription status of
 * an email in the newsletter.
 *
 * See the {@link UseNewsletterInterface} for a list of methods and values available in this composable.
 */
function useNewsletter() {
  const context = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    updateSubscription: null
  });
  const updateSubscription = async params => {
    logger["a" /* Logger */].debug('[Magento]: Update user newsletter subscription', {
      params
    });
    let result = types["c" /* SubscriptionStatusesEnum */].Unsubscribed;
    try {
      loading.value = true;
      error.value.updateSubscription = null;
      result = await updateSubscriptionCommand.execute(context, params);
    } catch (err) {
      error.value.updateSubscription = err;
      logger["a" /* Logger */].error('useNewsletter/updateSubscription', err);
    } finally {
      loading.value = false;
    }
    return result;
  };
  return {
    updateSubscription,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useNewsletter = (useNewsletter);
// EXTERNAL MODULE: ./modules/checkout/composables/usePaymentProvider/index.ts + 3 modules
var usePaymentProvider = __webpack_require__(97);

// EXTERNAL MODULE: ./modules/catalog/product/composables/useProduct/index.ts + 3 modules
var useProduct = __webpack_require__(82);

// EXTERNAL MODULE: ./modules/catalog/product/composables/useRelatedProducts/index.ts + 1 modules
var useRelatedProducts = __webpack_require__(103);

// EXTERNAL MODULE: ./modules/review/composables/useReview/index.ts + 5 modules
var useReview = __webpack_require__(77);

// EXTERNAL MODULE: ./modules/checkout/composables/useShipping/index.ts + 1 modules
var useShipping = __webpack_require__(88);

// EXTERNAL MODULE: ./modules/checkout/composables/useShippingProvider/index.ts + 2 modules
var useShippingProvider = __webpack_require__(49);

// CONCATENATED MODULE: ./composables/useStore/useStore.ts

// CONCATENATED MODULE: ./composables/useStore/index.ts



/**
 * Allows loading and changing currently active store.
 *
 * See the {@link UseStoreInterface} for a list of methods and values available in this composable.
 */
function useStore() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    change: null
  });
  const configStore = useConfigStore();
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const load = async (customQuery = {
    availableStores: 'availableStores'
  }, customHeaders = {}) => {
    logger["a" /* Logger */].debug('useStoreFactory.load');
    error.value.load = null;
    try {
      loading.value = true;
      const {
        data
      } = await app.$vsf.$magento.api.availableStores(customQuery, customHeaders);
      configStore.$patch(state => {
        var _a;
        state.stores = (_a = data === null || data === void 0 ? void 0 : data.availableStores) !== null && _a !== void 0 ? _a : [];
      });
    } catch (err) {
      error.value.load = err;
    } finally {
      loading.value = false;
    }
  };
  const change = store => {
    logger["a" /* Logger */].debug('useStoreFactory.change');
    error.value.change = null;
    try {
      loading.value = true;
      app.$vsf.$magento.config.state.setStore(store.store_code);
      app.$vsf.$magento.config.state.setCurrency(store.default_display_currency_code);
      app.$vsf.$magento.config.state.setLocale(store.store_code);
      const newStoreUrl = app.switchLocalePath(store.store_code);
      window.location.replace(newStoreUrl);
    } catch (err) {
      error.value.change = err;
    }
    loading.value = false;
  };
  return {
    stores: Object(runtime["a" /* computed */])(() => configStore.stores),
    load,
    change,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useStore = (useStore);

// CONCATENATED MODULE: ./composables/useUiHelpers/Params.ts

// CONCATENATED MODULE: ./composables/useUiHelpers/useUiHelpers.ts

// CONCATENATED MODULE: ./composables/useUiHelpers/index.ts

const nonFilters = new Set(['page', 'sort', 'term', 'itemsPerPage']);
function reduceFilters(query) {
  return (prev, curr) => {
    const makeArray = Array.isArray(query[curr]) || nonFilters.has(curr);
    return {
      ...prev,
      [curr]: makeArray ? query[curr] : [query[curr]]
    };
  };
}
/**
 * Allows handling the parameters for filtering,
 * searching, sorting and pagination in the URL search/query params.
 *
 * See the {@link UseUiHelpersInterface} for a list of methods and values available in this composable.
 */
function useUiHelpers() {
  const route = Object(runtime["u" /* useRoute */])();
  const router = Object(runtime["v" /* useRouter */])();
  let {
    query: routerQuery
  } = route.value;
  const resolveQuery = () => {
    if (typeof window !== 'undefined') {
      routerQuery = router.resolve((window.location.pathname + window.location.search).slice(1)).route.query;
    }
    return routerQuery;
  };
  const getFiltersDataFromUrl = (onlyFilters = false) => {
    const currentQuery = resolveQuery();
    return Object.keys(currentQuery).filter(f => onlyFilters ? !nonFilters.has(f) : f)
    // eslint-disable-next-line unicorn/prefer-object-from-entries
    .reduce(reduceFilters(currentQuery), {});
  };
  const getFacetsFromURL = () => {
    var _a;
    const currentQuery = resolveQuery();
    return {
      filters: getFiltersDataFromUrl(true),
      itemsPerPage: Number.parseInt(currentQuery.itemsPerPage, 10) || 10,
      page: Number.parseInt(currentQuery.page, 10) || 1,
      sort: (_a = currentQuery.sort) !== null && _a !== void 0 ? _a : '',
      term: currentQuery.term
    };
  };
  const changeSearchTerm = term => term;
  const getSearchTermFromUrl = () => {
    var _a;
    const currentQuery = resolveQuery();
    return {
      page: Number.parseInt(currentQuery.page, 10) || 1,
      sort: (_a = currentQuery.sort) !== null && _a !== void 0 ? _a : '',
      filters: getFiltersDataFromUrl(true),
      itemsPerPage: Number.parseInt(currentQuery.itemsPerPage, 10) || 10,
      term: currentQuery.term
    };
  };
  const getCatLink = category => `/${category.url_path}${category.url_suffix || ''}`;
  /**
   * Force push for a backward compatibility in other places, should be removed
   *
   * @param sort
   * @param forcePush
   */
  const changeSorting = async (sort, forcePush = true) => {
    if (forcePush) {
      await router.push({
        query: {
          ...routerQuery,
          sort
        }
      });
    } else {
      const routeData = router.resolve({
        query: {
          ...getFiltersDataFromUrl(),
          sort
        }
      });
      window.history.pushState({}, null, routeData.href);
    }
  };
  /**
   * Force push for a backward compatibility in other places, should be removed
   *
   * @param filters
   * @param forcePush
   */
  const changeFilters = async (filters, forcePush = true) => {
    const query = {
      ...getFiltersDataFromUrl(false),
      ...filters
    };
    if (forcePush) {
      await router.push({
        query
      });
    } else {
      const routeData = router.resolve({
        query
      });
      window.history.pushState({}, null, routeData.href);
    }
  };
  const clearFilters = async (forcePush = true) => {
    if (forcePush) {
      await router.push({
        query: {}
      });
    } else {
      const routeData = router.resolve({
        query: {}
      });
      window.history.pushState({}, null, routeData.href);
    }
  };
  /**
   * Force push for a backward compatibility in other places, should be removed
   *
   * @param itemsPerPage
   * @param forcePush
   */
  const changeItemsPerPage = async (itemsPerPage, forcePush = true) => {
    const query = {
      ...getFiltersDataFromUrl(false),
      itemsPerPage: itemsPerPage.toString(10),
      page: '0'
    };
    if (forcePush) {
      await router.push({
        query
      });
    } else {
      const routeData = router.resolve({
        query
      });
      window.history.pushState({}, null, routeData.href);
    }
  };
  const changePage = async (page, forcePush = true) => {
    const query = {
      ...getFiltersDataFromUrl(false),
      page: page.toString()
    };
    if (forcePush) {
      await router.push({
        query
      });
    } else {
      const routeData = router.resolve({
        query
      });
      window.history.pushState({}, null, routeData.href);
    }
  };
  const setTermForUrl = async term => {
    await router.push({
      query: {
        ...getFiltersDataFromUrl(false),
        term: term || undefined
      }
    });
  };
  const isFacetColor = facet => facet.id === 'color';
  const isFacetCheckbox = () => false;
  return {
    changeFilters,
    changeItemsPerPage,
    changeSearchTerm,
    changeSorting,
    clearFilters,
    getCatLink,
    getFacetsFromURL,
    getSearchTermFromUrl,
    isFacetCheckbox,
    isFacetColor,
    setTermForUrl,
    changePage
  };
}


/* harmony default export */ var composables_useUiHelpers = (useUiHelpers);
// EXTERNAL MODULE: ./composables/useUiNotification/index.ts + 1 modules
var useUiNotification = __webpack_require__(52);

// EXTERNAL MODULE: ./composables/useUiState/index.ts + 1 modules
var useUiState = __webpack_require__(50);

// EXTERNAL MODULE: ./modules/catalog/product/composables/useUpsellProducts/index.ts + 1 modules
var useUpsellProducts = __webpack_require__(104);

// CONCATENATED MODULE: ./composables/useUrlResolver/UseUrlResolver.ts

// CONCATENATED MODULE: ./composables/useUrlResolver/index.ts


/**
 * Allows searching the resolver for current
 * route path (URL).
 *
 * See the {@link UseUrlResolverInterface} for a list of methods and values available in this composable.
 */
function useUrlResolver() {
  const route = Object(runtime["u" /* useRoute */])();
  const {
    error: nuxtError,
    app
  } = Object(runtime["s" /* useContext */])();
  const context = app.$vsf;
  const {
    path
  } = route.value;
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null
  });
  const search = async params => {
    var _a, _b, _c;
    loading.value = true;
    let results = null;
    try {
      const clearUrl = path.replace(/[a-z]+\/[cp|]\//gi, '');
      logger["a" /* Logger */].debug('[Magento] Find information based on URL', {
        clearUrl
      });
      const {
        data
      } = await context.$magento.api.route(clearUrl, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, (_b = params === null || params === void 0 ? void 0 : params.customHeaders) !== null && _b !== void 0 ? _b : null);
      results = (_c = data === null || data === void 0 ? void 0 : data.route) !== null && _c !== void 0 ? _c : null;
      if (!results) nuxtError({
        statusCode: 404
      });
      logger["a" /* Logger */].debug('[Result]:', {
        results
      });
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useUrlResolver/search', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  return {
    path,
    search,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useUrlResolver = (useUrlResolver);
// EXTERNAL MODULE: ./modules/customer/composables/useUser/index.ts + 2 modules
var useUser = __webpack_require__(17);

// EXTERNAL MODULE: ./modules/customer/composables/useUserAddress/index.ts + 4 modules
var useUserAddress = __webpack_require__(86);

// EXTERNAL MODULE: ./modules/customer/composables/useUserOrder/index.ts + 1 modules
var useUserOrder = __webpack_require__(89);

// EXTERNAL MODULE: ./modules/wishlist/composables/useWishlist/index.ts + 3 modules
var useWishlist = __webpack_require__(31);

// EXTERNAL MODULE: ./modules/checkout/composables/useCartView/index.ts + 1 modules
var useCartView = __webpack_require__(90);

// CONCATENATED MODULE: ./composables/types.ts

// CONCATENATED MODULE: ./composables/index.ts
/**
 * Composables, getters, helpers and components  for Magento 2 integration for Vue Storefront 2.
 *
 * @remarks
 * This package includes all things tou need to develop own Magento 2 shop
 *
 * @packageDocumentation
 */








































/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCart; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/addItemCommand.ts

const addItemCommand = {
  execute: async (context, {
    product,
    quantity,
    currentCart,
    productConfiguration,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('[Magento]: Add item to cart', {
      product,
      quantity,
      currentCart
    });
    const apiState = context.$magento.config.state;
    const cartId = apiState.getCartId();
    if (!product) {
      return;
    }
    // eslint-disable-next-line no-underscore-dangle
    switch (product.__typename) {
      case 'SimpleProduct':
        const simpleCartInput = {
          cartId,
          cartItems: [{
            quantity,
            sku: product.sku
          }]
        };
        const simpleProduct = await context.$magento.api.addProductsToCart(simpleCartInput, customQuery, customHeaders);
        logger["a" /* Logger */].debug('[Result]:', {
          data: simpleProduct.data
        });
        if (simpleProduct.data.addProductsToCart.user_errors.length > 0) {
          throw new Error(String(simpleProduct.data.addProductsToCart.user_errors[0].message));
        }
        // eslint-disable-next-line consistent-return
        return simpleProduct.data.addProductsToCart.cart;
      case 'ConfigurableProduct':
        const selectedOptions = Object.values(productConfiguration);
        const configurableCartInput = {
          cartId,
          cartItems: [{
            quantity,
            sku: product.sku,
            selected_options: selectedOptions
          }]
        };
        const configurableProduct = await context.$magento.api.addProductsToCart(configurableCartInput, customQuery, customHeaders);
        logger["a" /* Logger */].debug('[Result]:', {
          data: configurableProduct.data
        });
        if (configurableProduct.data.addProductsToCart.user_errors.length > 0) {
          throw new Error(String(configurableProduct.data.addProductsToCart.user_errors[0].message));
        }
        // eslint-disable-next-line consistent-return
        return configurableProduct.data.addProductsToCart.cart;
      case 'BundleProduct':
        const createEnteredOptions = () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        product.bundle_options.map(bundleOption => ({
          ...bundleOption,
          value: bundleOption.value.toString()
        }));
        const bundleCartInput = {
          cartId,
          cartItems: [{
            quantity,
            sku: product.sku,
            entered_options: createEnteredOptions()
          }]
        };
        const bundleProduct = await context.$magento.api.addProductsToCart(bundleCartInput, customQuery, customHeaders);
        logger["a" /* Logger */].debug('[Result]:', {
          data: bundleProduct
        });
        if (bundleProduct.data.addProductsToCart.user_errors.length > 0) {
          throw new Error(String(bundleProduct.data.addProductsToCart.user_errors[0].message));
        }
        // eslint-disable-next-line consistent-return
        return bundleProduct.data.addProductsToCart.cart;
      case 'DownloadableProduct':
        const downloadableCartInput = {
          cartId,
          cartItems: [{
            quantity,
            sku: product.sku
          }]
        };
        const downloadableProduct = await context.$magento.api.addProductsToCart(downloadableCartInput, customQuery, customHeaders);
        logger["a" /* Logger */].debug('[Result DownloadableProduct]:', {
          data: downloadableProduct
        });
        if (downloadableProduct.data.addProductsToCart.user_errors.length > 0) {
          throw new Error(String(downloadableProduct.data.addProductsToCart.user_errors[0].message));
        }
        // eslint-disable-next-line consistent-return
        return downloadableProduct.data.addProductsToCart.cart;
      case 'VirtualProduct':
        const virtualCartInput = {
          cartId,
          cartItems: [{
            quantity,
            sku: product.sku
          }]
        };
        const virtualProduct = await context.$magento.api.addProductsToCart(virtualCartInput, customQuery, customHeaders);
        logger["a" /* Logger */].debug('[Result VirtualProduct]:', {
          data: virtualProduct
        });
        if (virtualProduct.data.addProductsToCart.user_errors.length > 0) {
          throw new Error(String(virtualProduct.data.addProductsToCart.user_errors[0].message));
        }
        // eslint-disable-next-line consistent-return
        return virtualProduct.data.addProductsToCart.cart;
      case 'GroupedProduct':
        const groupedCartInput = {
          cartId,
          cartItems: product.items.map(item => ({
            quantity,
            sku: item.product.sku
          }))
        };
        const groupedProduct = await context.$magento.api.addProductsToCart(groupedCartInput, customQuery);
        logger["a" /* Logger */].debug('[Result GroupedProduct]:', {
          data: groupedProduct
        });
        if (groupedProduct.data.addProductsToCart.user_errors.length > 0) {
          throw new Error(String(groupedProduct.data.addProductsToCart.user_errors[0].message));
        }
        // eslint-disable-next-line consistent-return
        return groupedProduct.data.addProductsToCart.cart;
      default:
        // eslint-disable-next-line no-underscore-dangle
        throw new Error(`Product Type ${product.__typename} not supported in add to cart yet`);
    }
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/applyCouponCommand.ts

const applyCouponCommand = {
  execute: async (context, {
    currentCart,
    couponCode,
    customQuery = {
      applyCouponToCart: 'applyCouponToCart'
    },
    customHeaders = {}
  }) => {
    var _a;
    logger["a" /* Logger */].debug('[Magento]: Apply coupon on cart', {
      couponCode,
      currentCart
    });
    const {
      data,
      errors
    } = await context.$magento.api.applyCouponToCart({
      cart_id: currentCart.id,
      coupon_code: couponCode
    }, customQuery, customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data,
      errors
    });
    return {
      updatedCart: (_a = data.applyCouponToCart) === null || _a === void 0 ? void 0 : _a.cart,
      updatedCoupon: {
        code: couponCode
      },
      errors
    };
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/loadCartCommand.ts

const loadCartCommand = {
  execute: async (context, params) => {
    const apiState = context.$magento.config.state;
    logger["a" /* Logger */].debug('[Magento Storefront]: Loading Cart');
    const customerToken = apiState.getCustomerToken();
    const virtual = !params.realCart;
    const createVirtualCart = () => null;
    const createRealCart = async () => {
      logger["a" /* Logger */].debug('[Magento Storefront]: useCart.load.createNewCart');
      apiState.setCartId();
      const {
        data
      } = await context.$magento.api.createEmptyCart();
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      apiState.setCartId(data.createEmptyCart);
      return data.createEmptyCart;
    };
    const getCartData = async id => {
      logger["a" /* Logger */].debug('[Magento Storefront]: useCart.load.getCartData ID->', id);
      const {
        data,
        errors
      } = await context.$magento.api.cart(id);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      if (!(data === null || data === void 0 ? void 0 : data.cart) && (errors === null || errors === void 0 ? void 0 : errors.length)) {
        throw errors[0];
      }
      data.cart.items = data.cart.items.filter(Boolean);
      return data.cart;
    };
    const getCart = async (virtualCart, cartId) => {
      if (!cartId) {
        if (virtualCart) {
          return createVirtualCart();
        }
        // eslint-disable-next-line no-param-reassign
        cartId = await createRealCart();
        apiState.setCartId(cartId);
      }
      return getCartData(cartId);
    };
    // Try to load cart for existing customer, clean customer token if not possible
    if (customerToken) {
      try {
        const {
          data,
          errors
        } = await context.$magento.api.customerCart();
        logger["a" /* Logger */].debug('[Result]:', {
          data,
          errors
        });
        if (!(data === null || data === void 0 ? void 0 : data.customerCart) && (errors === null || errors === void 0 ? void 0 : errors.length)) {
          throw errors[0];
        }
        apiState.setCartId(data.customerCart.id);
        data.customerCart.items = data.customerCart.items.filter(Boolean);
        return data.customerCart;
      } catch {
        apiState.setCustomerToken();
      }
    }
    try {
      // If it's not existing customer check if cart id is set and try to load it
      const cartId = apiState.getCartId();
      return await getCart(virtual, cartId);
    } catch {
      apiState.setCartId();
      return await getCart(virtual);
    }
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/loadTotalQtyCommand.ts

const loadTotalQtyCommand = {
  execute: async (context, params) => {
    var _a, _b, _c, _d;
    logger["a" /* Logger */].debug('[Magento]: Load cart total qty');
    const apiState = context.$magento.config.state;
    if (apiState.getCartId()) {
      const {
        data
      } = await context.$magento.api.cartTotalQty(apiState.getCartId(), (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, (_b = params === null || params === void 0 ? void 0 : params.customHeaders) !== null && _b !== void 0 ? _b : null);
      return (_d = (_c = data === null || data === void 0 ? void 0 : data.cart) === null || _c === void 0 ? void 0 : _c.total_quantity) !== null && _d !== void 0 ? _d : 0;
    }
    return 0;
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/removeCouponCommand.ts

const removeCouponCommand = {
  execute: async (context, {
    currentCart,
    customQuery = {
      removeCouponFromCart: 'removeCouponFromCart'
    },
    customHeaders = {}
  }) => {
    var _a;
    logger["a" /* Logger */].debug('[Magento]: Remove coupon from cart', {
      currentCart
    });
    const {
      data,
      errors
    } = await context.$magento.api.removeCouponFromCart({
      cart_id: currentCart.id
    }, customQuery, customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return {
      updatedCart: (_a = data.removeCouponFromCart) === null || _a === void 0 ? void 0 : _a.cart,
      updatedCoupon: {
        code: ''
      },
      errors
    };
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/removeItemCommand.ts

const removeItemCommand = {
  execute: async (context, {
    currentCart,
    product,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('[Magento]: Remove item from cart', {
      product,
      currentCart
    });
    const item = currentCart.items.find(cartItem => cartItem.uid === product.uid);
    if (!item) {
      return;
    }
    const removeItemParams = {
      cart_id: currentCart.id,
      cart_item_uid: item.uid
    };
    const {
      data
    } = await context.$magento.api.removeItemFromCart(removeItemParams, customQuery, customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    // eslint-disable-next-line consistent-return
    return data.removeItemFromCart.cart;
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useCart/commands/updateItemQtyCommand.ts

const updateItemQtyCommand = {
  execute: async (context, {
    currentCart,
    product,
    quantity,
    customQuery = {
      updateCartItems: 'updateCartItems'
    },
    customHeaders = {}
  }) => {
    logger["a" /* Logger */].debug('[Magento]: Update product quantity on cart', {
      product,
      quantity,
      currentCart
    });
    const updateCartParams = {
      cart_id: currentCart.id,
      cart_items: [{
        cart_item_uid: product.uid,
        quantity
      }]
    };
    const {
      data
    } = await context.$magento.api.updateCartItems(updateCartParams, customQuery, customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return data.updateCartItems.cart;
  }
};
// EXTERNAL MODULE: ./modules/GraphQL/types.ts
var types = __webpack_require__(23);

// EXTERNAL MODULE: external "pinia"
var external_pinia_ = __webpack_require__(9);

// CONCATENATED MODULE: ./modules/checkout/stores/cart.ts

const useCartStore = Object(external_pinia_["defineStore"])('cart', {
  state: () => ({
    cart: {
      id: '',
      is_virtual: false,
      total_quantity: 0,
      shipping_addresses: []
    }
  })
});
// EXTERNAL MODULE: ./modules/wishlist/composables/useWishlist/index.ts + 3 modules
var useWishlist = __webpack_require__(31);

// CONCATENATED MODULE: ./modules/checkout/composables/useCart/useCart.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useCart/index.ts












/**
 * Allows loading and manipulating cart of the current user.
 *
 * See the {@link UseCartInterface} for a list of methods and values available in this composable.
 */
function useCart() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    addItem: null,
    removeItem: null,
    updateItemQty: null,
    load: null,
    clear: null,
    applyCoupon: null,
    removeCoupon: null,
    loadTotalQty: null
  });
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const context = app.$vsf;
  const route = Object(runtime["u" /* useRoute */])();
  const cartStore = useCartStore();
  const cart = Object(runtime["a" /* computed */])(() => cartStore.cart);
  const apiState = context.$magento.config.state;
  const {
    loading: wishlistLoading,
    afterAddingWishlistItemToCart
  } = Object(useWishlist["b" /* useWishlist */])();
  /**
   * Assign new cart object
   * @param newCart
   *
   * @return void
   */
  const setCart = newCart => {
    logger["a" /* Logger */].debug('useCart.setCart', newCart);
    cartStore.$patch(state => {
      state.cart = newCart;
    });
  };
  /**
   * Check if product is in the cart
   * @param product
   *
   * @return boolean
   */
  const isInCart = product => {
    var _a, _b;
    return !!((_b = (_a = cart.value) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.find(cartItem => {
      var _a;
      return ((_a = cartItem === null || cartItem === void 0 ? void 0 : cartItem.product) === null || _a === void 0 ? void 0 : _a.uid) === product.uid;
    }));
  };
  const load = async ({
    customQuery = {},
    customHeaders = {},
    realCart = false
  } = {
    customQuery: {
      cart: 'cart'
    },
    customHeaders: {}
  }) => {
    logger["a" /* Logger */].debug('useCart.load');
    try {
      loading.value = true;
      const loadedCart = await loadCartCommand.execute(context, {
        customQuery,
        customHeaders,
        realCart
      });
      cartStore.$patch(state => {
        state.cart = loadedCart;
      });
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useCart/load', err);
    } finally {
      loading.value = false;
    }
  };
  const clear = async ({
    customQuery,
    customHeaders
  } = {
    customQuery: {
      cart: 'cart'
    },
    customHeaders: {}
  }) => {
    logger["a" /* Logger */].debug('useCart.clear');
    try {
      loading.value = true;
      context.$magento.config.state.removeCartId();
      const loadedCart = await loadCartCommand.execute(context, {
        customQuery,
        customHeaders
      });
      cartStore.$patch(state => {
        state.cart = loadedCart;
      });
    } catch (err) {
      error.value.clear = err;
      logger["a" /* Logger */].error('useCart/clear', err);
    } finally {
      loading.value = false;
    }
  };
  const loadTotalQty = async params => {
    logger["a" /* Logger */].debug('useCart.loadTotalQty');
    try {
      loading.value = true;
      const totalQuantity = await loadTotalQtyCommand.execute(context, params);
      cartStore.$patch(state => {
        state.cart.total_quantity = totalQuantity;
      });
    } catch (err) {
      error.value.loadTotalQty = err;
      logger["a" /* Logger */].error('useCart/loadTotalQty', err);
    } finally {
      loading.value = false;
    }
  };
  const addItem = async ({
    product,
    quantity,
    productConfiguration,
    customQuery,
    customHeaders
  }) => {
    var _a;
    logger["a" /* Logger */].debug('useCart.addItem', {
      product,
      quantity
    });
    try {
      loading.value = true;
      if (!apiState.getCartId()) {
        await load({
          realCart: true
        });
      }
      const updatedCart = await addItemCommand.execute(context, {
        currentCart: cart.value,
        product,
        quantity,
        productConfiguration,
        customQuery,
        customHeaders
      });
      error.value.addItem = null;
      cartStore.$patch(state => {
        state.cart = updatedCart;
      });
    } catch (err) {
      error.value.addItem = err;
      logger["a" /* Logger */].error('useCart/addItem', err);
    } finally {
      if (!wishlistLoading.value && ((_a = route.value.query) === null || _a === void 0 ? void 0 : _a.wishlist)) {
        afterAddingWishlistItemToCart({
          product,
          cartError: error.value.addItem
        });
      }
      loading.value = false;
    }
  };
  const removeItem = async ({
    product,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('useCart.removeItem', {
      product
    });
    try {
      loading.value = true;
      const updatedCart = await removeItemCommand.execute(context, {
        currentCart: cart.value,
        product,
        customQuery,
        customHeaders
      });
      error.value.removeItem = null;
      cartStore.$patch(state => {
        state.cart = updatedCart;
      });
    } catch (err) {
      error.value.removeItem = err;
      logger["a" /* Logger */].error('useCart/removeItem', err);
    } finally {
      loading.value = false;
    }
  };
  const updateItemQty = async ({
    product,
    quantity,
    customQuery = {
      updateCartItems: 'updateCartItems'
    }
  }) => {
    logger["a" /* Logger */].debug('useCart.updateItemQty', {
      product,
      quantity
    });
    if (quantity && quantity > 0) {
      try {
        loading.value = true;
        const updatedCart = await updateItemQtyCommand.execute(context, {
          currentCart: cart.value,
          product,
          quantity,
          customQuery
        });
        error.value.updateItemQty = null;
        cartStore.$patch(state => {
          state.cart = updatedCart;
        });
      } catch (err) {
        error.value.updateItemQty = err;
        logger["a" /* Logger */].error('useCart/updateItemQty', err);
      } finally {
        loading.value = false;
      }
    }
  };
  const handleCoupon = async (couponCode = null, customQuery = null) => {
    const variables = {
      currentCart: cart.value,
      customQuery,
      couponCode
    };
    const {
      updatedCart,
      errors
    } = couponCode ? await applyCouponCommand.execute(context, variables) : await removeCouponCommand.execute(context, variables);
    if (errors) {
      throw errors[0];
    }
    if (updatedCart) {
      cartStore.$patch(state => {
        state.cart = updatedCart;
      });
    }
  };
  const applyCoupon = async ({
    couponCode,
    customQuery
  }) => {
    logger["a" /* Logger */].debug('useCart.applyCoupon');
    try {
      loading.value = true;
      await handleCoupon(couponCode, customQuery);
      error.value.applyCoupon = null;
    } catch (err) {
      error.value.applyCoupon = err;
      logger["a" /* Logger */].error('useCart/applyCoupon', err);
    } finally {
      loading.value = false;
    }
  };
  const removeCoupon = async ({
    customQuery
  }) => {
    logger["a" /* Logger */].debug('useCart.removeCoupon');
    try {
      loading.value = true;
      await handleCoupon(null, customQuery);
      error.value.applyCoupon = null;
    } catch (err) {
      error.value.removeCoupon = err;
      logger["a" /* Logger */].error('useCart/removeCoupon', err);
    } finally {
      loading.value = false;
    }
  };
  const canAddToCart = (product, qty = 1) => {
    var _a, _b;
    // eslint-disable-next-line no-underscore-dangle
    if ((product === null || product === void 0 ? void 0 : product.__typename) === 'ConfigurableProduct') {
      return !!((_b = (_a = product === null || product === void 0 ? void 0 : product.configurable_product_options_selection) === null || _a === void 0 ? void 0 : _a.variant) === null || _b === void 0 ? void 0 : _b.uid);
    }
    const inStock = (product === null || product === void 0 ? void 0 : product.stock_status) === types["a" /* ProductStockStatus */].InStock;
    const stockLeft = (product === null || product === void 0 ? void 0 : product.only_x_left_in_stock) === null ? true : qty <= (product === null || product === void 0 ? void 0 : product.only_x_left_in_stock);
    return inStock && stockLeft;
  };
  return {
    setCart,
    cart,
    loadTotalQty,
    isInCart,
    addItem,
    load,
    removeItem,
    clear,
    updateItemQty,
    applyCoupon,
    removeCoupon,
    canAddToCart,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useCart = __webpack_exports__["a"] = (useCart);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("pinia");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(134);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}
module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] || freeSelf || Function('return this')();
/* harmony default export */ __webpack_exports__["a"] = (root);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=3267e628&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.props.link ? _vm.injections.components.SfLink : 'button',_vm._g(_vm._b({tag:"component",class:[
    _vm.data.class,
    _vm.data.staticClass,
    'sf-button',
    {
      'is-disabled--button': _vm.$options.buttonActive(
        _vm.props.link,
        _vm.props.disabled
      ),
      'is-disabled--link': _vm.$options.linkActive(_vm.props.link, _vm.props.disabled),
    } ],style:([_vm.data.style, _vm.data.staticStyle]),attrs:{"aria-disabled":_vm.props.disabled,"link":_vm.props.link,"type":_vm.props.type,"aria-label":_vm.props.ariaLabel}},'component',_vm.data.attrs,false),!_vm.props.disabled ? _vm.listeners : {}),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=template&id=3267e628&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfButtonvue_type_script_lang_js_ = ({
  name: "SfButton",
  inject: {
    components: {
      default: {
        SfLink: SfLink["a" /* default */]
      }
    }
  },
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button",
      validator: value => ["button", "submit", "reset"].includes(value)
    },
    link: {
      type: [String, Object],
      default: null
    },
    ariaLabel: {
      type: String,
      default: "button"
    }
  },
  linkActive(link, disabled) {
    return link && disabled;
  },
  buttonActive(link, disabled) {
    return !link && disabled;
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfButton_SfButtonvue_type_script_lang_js_ = (SfButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfButton_SfButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "4429f1e1"
  
)

/* harmony default export */ var SfButton = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=4502e76e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',_vm._g({ref:"icon",class:['sf-icon', _vm.iconColorClass, _vm.iconSizeClass],style:(_vm.iconCustomStyle)},_vm.$listeners),[(!_vm.isLoaded)?_vm._t("default",function(){return [_c('svg',{staticClass:"sf-icon-path",attrs:{"viewBox":_vm.iconViewBox,"preserveAspectRatio":"none"}},[_c('defs',{class:{ 'display-none': _vm.coverage > 1 }},[_c('linearGradient',{attrs:{"id":("linearGradient-" + _vm._uid),"x1":"0","y1":"0","x2":"1","y2":"0"}},[_c('stop',{attrs:{"offset":_vm.coverage,"stop-color":"var(--icon-color)"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0","stop-color":"var(--icon-color-negative, var(--c-gray-variant))"}})],1)],1),_vm._v(" "),_vm._l((_vm.iconPaths),function(path,index){return _c('path',{key:index,staticStyle:{"height":"100%"},attrs:{"d":path,"fill":_vm.fillPath}})})],2)]},null,{ viewBox: _vm.viewBox, iconPaths: _vm.iconPaths, icon: _vm.icon }):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=template&id=4502e76e&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/variables/colors.js
var colors = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/shared/variables/sizes.js
// Icon sizes
const sizes = {
  xxs: "xxs", 
  xs: "xs", 
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
  xl3: "xl3",
  xl4: "xl4"
};
// Typography sizes
const typographySizes = {
  "extra-small": "extra-small",
  "small": "small",
  "regular": "regular",
  "big": "big",
};
const sizesValues = Object.values(sizes);
/* harmony default export */ var variables_sizes = (sizes);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfIconvue_type_script_lang_js_ = ({
  name: "SfIcon",
  props: {
    icon: {
      type: [String, Array],
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },
    coverage: {
      type: [String, Number],
      default: 1
    }
  },
  data() {
    return {
      iconFile: null,
      isLoaded: false
    };
  },
  computed: {
    isSFColors() {
      return colors["b" /* iconColorsValues */].includes(this.color.trim());
    },
    isSFSizes() {
      const size = this.size.trim();
      return sizesValues.includes(size);
    },
    iconColorClass() {
      return this.isSFColors ? `color-${this.color.trim()}` : "";
    },
    iconSizeClass() {
      if (this.isSFSizes) {
        switch (this.size.trim()) {
          case "xxs":
            return "size-xxs";
          case "xs":
            return "size-xs";
          case "sm":
            return "size-sm";
          case "md":
            return "size-md";
          case "lg":
            return "size-lg";
          case "xl":
            return "size-xl";
          case "xxl":
            return "size-xxl";
          case "xl3":
            return "size-xl3";
          case "xl4":
            return "size-xl4";
          default:
            return "size-lg";
        }
      } else {
        return "";
      }
    },
    iconCustomStyle() {
      return {
        "--icon-color": !this.isSFColors ? this.color : "",
        "--icon-size": !this.isSFSizes ? this.size : ""
      };
    },
    isSFIcons() {
      return typeof this.icon === "string" && this.iconFile ? true : null;
    },
    iconViewBox() {
      return this.isSFIcons ? this.iconFile.viewBox || this.viewBox : this.viewBox;
    },
    iconPaths() {
      if (this.isSFIcons) {
        return this.iconFile.hasOwnProperty("paths") ? this.iconFile.paths : Array.isArray(this.iconFile) ? this.iconFile : [this.iconFile];
      } else {
        return Array.isArray(this.icon) ? this.icon : [this.icon];
      }
    },
    fillPath() {
      return this.coverage === 1 ? "var(--icon-color)" : this.fillPathUrl(this._uid);
    }
  },
  watch: {
    icon: {
      immediate: true,
      handler: function (value) {
        if (value) {
          // checks if icon file name passed, otherwise load icon path
          if (!new RegExp("[A-Z]+[0-9]+").test(value)) {
            this.isLoaded = true;
            __webpack_require__(218)(`./${value}`).then(module => module.default).then(icon => {
              this.iconFile = icon;
              this.isLoaded = false;
            });
          } else {
            this.iconFile = value;
          }
        }
      }
    }
  },
  methods: {
    fillPathUrl(uid) {
      return `url(#linearGradient-${uid})`;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfIcon_SfIconvue_type_script_lang_js_ = (SfIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(219)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfIcon_SfIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d8c5c41"
  
)

/* harmony default export */ var SfIcon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (typeof val === "number" || typeof val === "boolean") {
    val = String(val);
  }
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputStr) {
  return ["./", "../"].some((str) => inputStr.startsWith(str));
}
const PROTOCOL_REGEX = /^\w+:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputStr) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((str) => str.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.substring(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.substring(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, opts = {}) {
  if (!opts.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!opts.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!opts.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?#]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isEqual = isEqual;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withHttp = withHttp;
exports.withHttps = withHttps;
exports.withLeadingSlash = withLeadingSlash;
exports.withProtocol = withProtocol;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutProtocol = withoutProtocol;
exports.withoutTrailingSlash = withoutTrailingSlash;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(60)["URLSearchParams"]))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const maskString = el => `${el.charAt(0)}***${el.slice(-1)}`;
const maskAny = el => {
  if (typeof el === 'string') {
    return maskString(el);
  }
  return '***';
};
const mask = el => {
  if (typeof el === 'object' && !Array.isArray(el)) {
    return Object.fromEntries(Object.keys(el).map(key => [key, maskAny(el[key])]));
  }
  return maskAny(el);
};
/* harmony default export */ __webpack_exports__["a"] = (mask);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useUser; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./composables/utils/mask.ts
var mask = __webpack_require__(16);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./modules/customer/stores/customer.ts
var customer = __webpack_require__(53);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/customer/helpers/generateUserData.ts
const generateUserData = userData => {
  const baseData = {
    email: userData.email,
    firstname: userData.firstName || userData.firstname,
    lastname: userData.lastName || userData.lastname
  };
  if (Object.prototype.hasOwnProperty.call(userData, 'is_subscribed')) {
    baseData.is_subscribed = userData.is_subscribed;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'dateOfBirth') || Object.prototype.hasOwnProperty.call(userData, 'date_of_birth')) {
    baseData.date_of_birth = userData.dateOfBirth || userData.date_of_birth;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'gender')) {
    baseData.gender = userData.gender;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'taxvat')) {
    baseData.taxvat = userData.taxvat;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'prefix')) {
    baseData.prefix = userData.prefix;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'suffix')) {
    baseData.suffix = userData.suffix;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'password')) {
    baseData.password = userData.password;
  }
  if (Object.prototype.hasOwnProperty.call(userData, 'recaptchaToken')) {
    baseData.recaptchaToken = userData.recaptchaToken;
  }
  return baseData;
};
// EXTERNAL MODULE: ./composables/useUiNotification/index.ts + 1 modules
var useUiNotification = __webpack_require__(52);

// CONCATENATED MODULE: ./modules/customer/composables/useUser/useUser.ts

// CONCATENATED MODULE: ./modules/customer/composables/useUser/index.ts







/**
 * Allows loading and manipulating data of the current user.
 *
 * See the {@link UseUserInterface} for a list of methods and values available in this composable.
 */
function useUser() {
  const customerStore = Object(customer["a" /* useCustomerStore */])();
  // @ts-ignore
  const {
    app,
    $recaptcha
  } = Object(runtime["s" /* useContext */])();
  const {
    setCart
  } = Object(useCart["b" /* useCart */])();
  const {
    send: sendNotification
  } = Object(useUiNotification["a" /* useUiNotification */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const errorsFactory = () => ({
    updateUser: null,
    register: null,
    login: null,
    logout: null,
    changePassword: null,
    load: null
  });
  const error = Object(runtime["l" /* ref */])(errorsFactory());
  const setUser = newUser => {
    customerStore.user = newUser;
    logger["a" /* Logger */].debug('useUserFactory.setUser', newUser);
  };
  const resetErrorValue = () => {
    error.value = errorsFactory();
  };
  const updateCustomerEmail = async credentials => {
    const {
      errors
    } = await app.context.$vsf.$magento.api.updateCustomerEmail(credentials);
    if (errors) {
      throw errors.map(e => e.message).join(',');
    }
  };
  // eslint-disable-next-line consistent-return
  const updateUser = async ({
    user: providedUser,
    customQuery,
    customHeaders
  }) => {
    var _a;
    logger["a" /* Logger */].debug('[Magento] Update user information', {
      providedUser,
      customQuery,
      customHeaders
    });
    resetErrorValue();
    try {
      loading.value = true;
      const {
        email: oldEmail
      } = customerStore.user;
      const {
        email,
        password,
        ...updateData
      } = providedUser;
      const userData = generateUserData(updateData);
      if (email && email !== oldEmail) {
        await updateCustomerEmail({
          email,
          password
        });
      }
      const {
        data,
        errors
      } = await app.context.$vsf.$magento.api.updateCustomer(userData, customQuery, customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      if (errors) {
        const allErrorMessages = errors.map(e => e.message).join(',');
        logger["a" /* Logger */].error(allErrorMessages);
        error.value.updateUser = allErrorMessages;
      }
      customerStore.user = ((_a = data === null || data === void 0 ? void 0 : data.updateCustomerV2) === null || _a === void 0 ? void 0 : _a.customer) || {};
      error.value.updateUser = null;
    } catch (err) {
      error.value.updateUser = err;
      logger["a" /* Logger */].error('useUser/updateUser', err);
    } finally {
      loading.value = false;
    }
  };
  const logout = async ({
    customQuery = {},
    customHeaders = {}
  } = {}) => {
    logger["a" /* Logger */].debug('[Magento] useUserFactory.logout');
    resetErrorValue();
    try {
      const apiState = app.context.$vsf.$magento.config.state;
      await app.context.$vsf.$magento.api.revokeCustomerToken(customQuery, customHeaders);
      apiState.removeCustomerToken();
      apiState.removeCartId();
      setCart(null);
      customerStore.setIsLoggedIn(false);
      error.value.logout = null;
      customerStore.user = null;
    } catch (err) {
      error.value.logout = err;
      logger["a" /* Logger */].error('useUser/logout', err);
    }
  };
  const load = async ({
    customQuery = {},
    customHeaders = {}
  } = {}) => {
    var _a;
    logger["a" /* Logger */].debug('[Magento] useUser.load');
    resetErrorValue();
    try {
      loading.value = true;
      const apiState = app.context.$vsf.$magento.config.state;
      if (!apiState.getCustomerToken()) {
        return null;
      }
      try {
        const {
          data
        } = await app.context.$vsf.$magento.api.customer(customQuery, customHeaders);
        logger["a" /* Logger */].debug('[Result]:', {
          data
        });
        customerStore.user = (_a = data === null || data === void 0 ? void 0 : data.customer) !== null && _a !== void 0 ? _a : {};
      } catch {
        // eslint-disable-next-line no-void
        // @ts-ignore
        await logout();
      }
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useUser/load', err);
    } finally {
      loading.value = false;
    }
    return customerStore.user;
  };
  // eslint-disable-next-line @typescript-eslint/require-await,no-empty-pattern
  const login = async ({
    user: providedUser,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('[Magento] useUser.login', providedUser);
    resetErrorValue();
    try {
      loading.value = true;
      const apiState = app.context.$vsf.$magento.config.state;
      const {
        data,
        errors
      } = await app.$vsf.$magento.api.generateCustomerToken({
        email: providedUser.email,
        password: providedUser.password,
        recaptchaToken: providedUser.recaptchaToken
      }, customQuery || {}, customHeaders || {});
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      if (errors) {
        const joinedErrors = errors.map(e => e.message).join(',');
        logger["a" /* Logger */].error(joinedErrors);
        errors.forEach((registerError, i) => sendNotification({
          icon: 'error',
          id: Symbol(`registration_error-${i}`),
          message: registerError.message,
          persist: true,
          title: 'Registration error',
          type: 'danger'
        }));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        throw new Error(joinedErrors);
      }
      customerStore.setIsLoggedIn(true);
      apiState.setCustomerToken(data.generateCustomerToken.token);
      // merge existing cart with customer cart
      // todo: move this logic to separate method
      const currentCartId = apiState.getCartId();
      const cart = await app.context.$vsf.$magento.api.customerCart();
      const newCartId = cart.data.customerCart.id;
      try {
        if (newCartId && currentCartId && currentCartId !== newCartId) {
          const {
            data: dataMergeCart
          } = await app.context.$vsf.$magento.api.mergeCarts({
            sourceCartId: currentCartId,
            destinationCartId: newCartId
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setCart(dataMergeCart.mergeCarts);
          apiState.setCartId(dataMergeCart.mergeCarts.id);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setCart(cart.data.customerCart);
        }
      } catch {
        // Workaround for Magento 2.4.4 mergeCarts mutation error related with Bundle products
        // It can be removed when Magento 2.4.5 will be release
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setCart(cart.data.customerCart);
      }
      error.value.login = null;
    } catch (err) {
      error.value.login = err;
      logger["a" /* Logger */].error('useUser/login', err);
    } finally {
      loading.value = false;
    }
  };
  // eslint-disable-next-line consistent-return
  const register = async ({
    user: providedUser,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('[Magento] useUser.register', providedUser);
    resetErrorValue();
    try {
      loading.value = true;
      const {
        email,
        password,
        recaptchaToken,
        ...baseData
      } = generateUserData(providedUser);
      const {
        data,
        errors
      } = await app.$vsf.$magento.api.createCustomer({
        email,
        password,
        recaptchaToken,
        ...baseData
      }, customQuery || {}, customHeaders || {});
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      if (errors) {
        const joinedErrors = errors.map(e => e.message).join(',');
        logger["a" /* Logger */].error(joinedErrors);
        errors.forEach((registerError, i) => sendNotification({
          icon: 'error',
          id: Symbol(`registration_error-${i}`),
          message: registerError.message,
          persist: true,
          title: 'Registration error',
          type: 'danger'
        }));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        throw new Error(joinedErrors);
      }
      error.value.register = null;
      let loginRecaptchaToken = '';
      if ($recaptcha && recaptchaToken) {
        loginRecaptchaToken = await $recaptcha.getResponse();
      }
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const {
        customer: {
          customer_create_account_confirm
        }
      } = app.context.$vsf.$magento.config;
      if (customer_create_account_confirm) {
        return await new Promise(resolve => {
          sendNotification({
            id: Symbol('registration_confirmation'),
            message: app.i18n.t('You must confirm your account. Please check your email for the confirmation link.'),
            persist: true,
            title: 'Registration confirmation',
            type: 'success',
            icon: 'check'
          });
          resolve();
        });
      }
      await login({
        user: {
          email,
          password,
          recaptchaToken: loginRecaptchaToken
        },
        customQuery: {}
      });
    } catch (err) {
      error.value.register = err;
      logger["a" /* Logger */].error('useUser/register', err);
    } finally {
      loading.value = false;
    }
  };
  // eslint-disable-next-line consistent-return
  const changePassword = async params => {
    logger["a" /* Logger */].debug('[Magento] useUser.changePassword', {
      currentPassword: Object(mask["a" /* default */])(params.current),
      newPassword: Object(mask["a" /* default */])(params.new)
    });
    resetErrorValue();
    try {
      loading.value = true;
      const {
        data,
        errors
      } = await app.context.$vsf.$magento.api.changeCustomerPassword({
        currentUser: customerStore.user,
        currentPassword: params.current,
        newPassword: params.new
      }, params.customQuery, params === null || params === void 0 ? void 0 : params.customHeaders);
      let joinedErrors = null;
      if (errors) {
        joinedErrors = errors.map(e => e.message).join(',');
        logger["a" /* Logger */].error(joinedErrors);
      }
      logger["a" /* Logger */].debug('[Result] ', {
        data
      });
      customerStore.user = data === null || data === void 0 ? void 0 : data.changeCustomerPassword;
      error.value.changePassword = joinedErrors;
    } catch (err) {
      error.value.changePassword = err;
      logger["a" /* Logger */].error('useUser/changePassword', err);
    } finally {
      loading.value = false;
    }
  };
  return {
    setUser,
    updateUser,
    register,
    login,
    logout,
    changePassword,
    load,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error),
    user: Object(runtime["a" /* computed */])(() => customerStore.user),
    isAuthenticated: Object(runtime["a" /* computed */])(() => customerStore.isLoggedIn)
  };
}
/* harmony default export */ var composables_useUser = __webpack_exports__["a"] = (useUser);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol["a" /* default */] ? _Symbol["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ var _getRawTag = (getRawTag);
// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}
/* harmony default export */ var _objectToString = (objectToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol["a" /* default */] ? _Symbol["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}
/* harmony default export */ var _baseGetTag = __webpack_exports__["a"] = (baseGetTag);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Symbol;
/* harmony default export */ __webpack_exports__["a"] = (Symbol);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue-demi");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=2e13fdd7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.linkComponentTag,_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],tag:"component",staticClass:"sf-link"},'component',_vm.urlTag,false),_vm.$listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=template&id=2e13fdd7&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfLinkvue_type_script_lang_js_ = ({
  name: "SfLink",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  props: {
    link: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    isExternal() {
      return typeof this.link === "string" && this.link.search(/(^\/|^#)/g) === -1;
    },
    isNativeLinkTag() {
      return this.isExternal || !this.$router;
    },
    urlTag() {
      return this.isNativeLinkTag ? {
        href: this.link
      } : {
        to: this.link || ""
      };
    },
    linkComponentTag() {
      const routerLink = this.$nuxt ? "nuxt-link" : "router-link";
      return this.isNativeLinkTag ? "a" : routerLink;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfLink_SfLinkvue_type_script_lang_js_ = (SfLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(214)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfLink_SfLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "43e32921"
  
)

/* harmony default export */ var SfLink = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getItems */
/* unused harmony export getItemName */
/* unused harmony export getSlug */
/* unused harmony export getItemImage */
/* unused harmony export getItemPrice */
/* unused harmony export productHasSpecialPrice */
/* unused harmony export getItemQty */
/* unused harmony export getItemAttributes */
/* unused harmony export getItemSku */
/* unused harmony export getTotals */
/* unused harmony export getShippingPrice */
/* unused harmony export getTotalItems */
/* unused harmony export getConfiguredVariant */
/* unused harmony export getCoupons */
/* unused harmony export getDiscounts */
/* unused harmony export getDiscountAmount */
/* unused harmony export getAppliedCoupon */
/* unused harmony export getSelectedShippingMethod */
/* unused harmony export getAvailablePaymentMethods */
/* unused harmony export getStockStatus */
/* harmony import */ var _modules_catalog_product_getters_productGetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

const getItems = cart => {
  if (!cart || !cart.items) {
    return [];
  }
  return cart.items;
};
const getItemName = product => Object(_modules_catalog_product_getters_productGetters__WEBPACK_IMPORTED_MODULE_0__[/* getName */ "f"])(product.product);
const getSlug = product => Object(_modules_catalog_product_getters_productGetters__WEBPACK_IMPORTED_MODULE_0__[/* getSlug */ "i"])(product.product);
const getItemImage = product => Object(_modules_catalog_product_getters_productGetters__WEBPACK_IMPORTED_MODULE_0__[/* getProductThumbnailImage */ "h"])(product.product);
const getItemPrice = product => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
  if (!product || !product.prices) {
    return {
      regular: 0,
      special: 0
    };
  }
  if (product.prices) {
    return {
      regular: product.prices.row_total.value || 0,
      special: product.prices.total_item_discount.value || 0
    };
  }
  const regularPrice = (_d = (_c = (_b = (_a = product.product) === null || _a === void 0 ? void 0 : _a.price_range) === null || _b === void 0 ? void 0 : _b.minimum_price) === null || _c === void 0 ? void 0 : _c.regular_price) === null || _d === void 0 ? void 0 : _d.value;
  const specialPrice = (_h = (_g = (_f = (_e = product.product) === null || _e === void 0 ? void 0 : _e.price_range) === null || _f === void 0 ? void 0 : _f.minimum_price) === null || _g === void 0 ? void 0 : _g.final_price) === null || _h === void 0 ? void 0 : _h.value;
  return {
    regular: regularPrice || 0,
    special: specialPrice || 0,
    // @ts-ignore
    credit: Math.round(specialPrice / 10),
    discountPercentage: 100 - Math.round(specialPrice / regularPrice * 100),
    total: (_k = (_j = product.prices) === null || _j === void 0 ? void 0 : _j.row_total) === null || _k === void 0 ? void 0 : _k.value
  };
};
const productHasSpecialPrice = product => getItemPrice(product).regular < getItemPrice(product).special;
const getItemQty = product => product.quantity;
const getItemAttributes = ({
  product
}, _filterByAttributeName) => {
  const attributes = {};
  if (!product || !product.configurable_options) {
    return attributes;
  }
  const configurableOptions = product.configurable_options;
  // eslint-disable-next-line no-restricted-syntax
  for (const option of configurableOptions) {
    attributes[option.attribute_code] = {
      name: option.attribute_code,
      label: option.label,
      value: option.values.map(value => {
        const obj = {};
        obj[value.value_index] = value.label;
        return obj;
      })
    };
  }
  return attributes;
};
const getItemSku = product => {
  var _a;
  return ((_a = product === null || product === void 0 ? void 0 : product.product) === null || _a === void 0 ? void 0 : _a.sku) || '';
};
const calculateDiscounts = discounts => discounts.reduce((a, b) => Number.parseFloat(`${a}`) + Number.parseFloat(`${b.amount.value}`), 0);
const getTotals = cart => {
  if (!cart || !cart.prices) return {};
  const subtotal = cart.prices.subtotal_including_tax.value;
  return {
    total: cart.prices.grand_total.value,
    subtotal: cart.prices.subtotal_including_tax.value,
    special: cart.prices.discounts ? subtotal - calculateDiscounts(cart.prices.discounts) : subtotal
  };
};
const getShippingPrice = cart => {
  if (!cart.shipping_addresses) {
    return 0;
  }
  return cart.shipping_addresses.reduce((acc, shippingAddress) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {
      selected_shipping_method
    } = shippingAddress;
    if (selected_shipping_method) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      return acc + selected_shipping_method.amount.value;
    }
    return acc;
  }, 0);
};
const getTotalItems = cart => {
  if (!cart) {
    return 0;
  }
  return cart.total_quantity;
};
const getConfiguredVariant = product => (product === null || product === void 0 ? void 0 : product.configured_variant) || null;
const getCoupons = cart => Array.isArray(cart === null || cart === void 0 ? void 0 : cart.applied_coupons) ? cart.applied_coupons.map(c => ({
  id: c.code,
  name: c.code,
  value: 0,
  code: c.code
})) : [];
const getDiscounts = cart => {
  var _a;
  return Array.isArray((_a = cart === null || cart === void 0 ? void 0 : cart.prices) === null || _a === void 0 ? void 0 : _a.discounts) ? cart.prices.discounts.map(d => ({
    id: d.label,
    name: d.label,
    description: '',
    value: d.amount.value,
    code: d.label
  })) : [];
};
const getDiscountAmount = cart => {
  var _a, _b;
  return calculateDiscounts((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.prices) === null || _a === void 0 ? void 0 : _a.discounts) !== null && _b !== void 0 ? _b : []);
};
const getAppliedCoupon = cart => Array.isArray(cart === null || cart === void 0 ? void 0 : cart.applied_coupons) && (cart === null || cart === void 0 ? void 0 : cart.applied_coupons.length) > 0 ? {
  id: cart.applied_coupons[0].code,
  name: cart.applied_coupons[0].code,
  value: 0,
  code: cart.applied_coupons[0].code
} : null;
const getSelectedShippingMethod = cart => {
  var _a, _b;
  return ((_a = cart === null || cart === void 0 ? void 0 : cart.shipping_addresses) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (_b = cart === null || cart === void 0 ? void 0 : cart.shipping_addresses[0]) === null || _b === void 0 ? void 0 : _b.selected_shipping_method : null;
};
const getAvailablePaymentMethods = cart => cart === null || cart === void 0 ? void 0 : cart.available_payment_methods.map(p => ({
  label: p.title,
  value: p.code
}));
const getStockStatus = product => product.product.stock_status;
const cartGetters = {
  getAppliedCoupon,
  getAvailablePaymentMethods,
  getCoupons,
  getDiscounts,
  getItemAttributes,
  getItemImage,
  getItemName,
  getSlug,
  getItemPrice,
  getItemQty,
  getItems,
  getItemSku,
  getSelectedShippingMethod,
  getShippingPrice,
  getTotalItems,
  getTotals,
  getDiscountAmount,
  productHasSpecialPrice,
  getStockStatus,
  getConfiguredVariant
};
/* harmony default export */ __webpack_exports__["a"] = (cartGetters);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStockStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SortEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SubscriptionStatusesEnum; });
/* unused harmony export WishlistCartUserInputErrorType */
/** This enumeration states whether a product stock status is in stock or out of stock */
var ProductStockStatus;
(function (ProductStockStatus) {
  ProductStockStatus["InStock"] = "IN_STOCK";
  ProductStockStatus["OutOfStock"] = "OUT_OF_STOCK";
})(ProductStockStatus || (ProductStockStatus = {}));
/** This enumeration indicates whether to return results in ascending or descending order */
var SortEnum;
(function (SortEnum) {
  SortEnum["Asc"] = "ASC";
  SortEnum["Desc"] = "DESC";
})(SortEnum || (SortEnum = {}));
var SubscriptionStatusesEnum;
(function (SubscriptionStatusesEnum) {
  SubscriptionStatusesEnum["NotActive"] = "NOT_ACTIVE";
  SubscriptionStatusesEnum["Subscribed"] = "SUBSCRIBED";
  SubscriptionStatusesEnum["Unconfirmed"] = "UNCONFIRMED";
  SubscriptionStatusesEnum["Unsubscribed"] = "UNSUBSCRIBED";
})(SubscriptionStatusesEnum || (SubscriptionStatusesEnum = {}));
var WishlistCartUserInputErrorType;
(function (WishlistCartUserInputErrorType) {
  WishlistCartUserInputErrorType["InsufficientStock"] = "INSUFFICIENT_STOCK";
  WishlistCartUserInputErrorType["NotSalable"] = "NOT_SALABLE";
  WishlistCartUserInputErrorType["ProductNotFound"] = "PRODUCT_NOT_FOUND";
  WishlistCartUserInputErrorType["Undefined"] = "UNDEFINED";
})(WishlistCartUserInputErrorType || (WishlistCartUserInputErrorType = {}));
// # sourceMappingURL=GraphQL.d.ts.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/* harmony default export */ __webpack_exports__["a"] = (eq);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/* harmony default export */ var _listCacheClear = (listCacheClear);
// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(eq["a" /* default */])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/* harmony default export */ var _assocIndexOf = (assocIndexOf);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
/* harmony default export */ var _listCacheDelete = (listCacheDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/* harmony default export */ var _listCacheGet = (listCacheGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}
/* harmony default export */ var _listCacheHas = (listCacheHas);
// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
/* harmony default export */ var _listCacheSet = (listCacheSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
/* harmony default export */ var _ListCache = __webpack_exports__["a"] = (ListCache);

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ __webpack_exports__["a"] = (isArray);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformUserCreateAddressInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transformUserUpdateAddressInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transformUserGetter; });
const transformUserCreateAddressInput = addressInputParams => {
  const {
    apartment,
    neighborhood,
    extra,
    ...address
  } = addressInputParams.address;
  const street = [address.street];
  if (apartment) street.push(apartment);
  if (neighborhood) street.push(neighborhood);
  if (extra) street.push(extra);
  return {
    ...address,
    street
  };
};
const transformUserUpdateAddressInput = addressInputParams => {
  const {
    apartment,
    neighborhood,
    extra,
    id,
    // @ts-ignore
    // eslint-disable-next-line
    extension_attributes,
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    __typename: typenameAddress,
    ...address
  } = addressInputParams.address;
  const {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    __typename: typenameRegion,
    ...region
  } = address.region;
  const street = Array.isArray(address.street) ? [...address.street] : [address.street];
  if (apartment) street.push(apartment);
  if (neighborhood) street.push(neighborhood);
  if (extra) street.push(extra);
  const addressParams = {
    ...address,
    region,
    street: street.filter(Boolean)
  };
  return {
    addressId: id,
    input: {
      ...addressParams
    }
  };
};
const transformUserGetter = addressInput => ({
  ...addressInput,
  street: addressInput.street[0],
  apartment: addressInput.street[1],
  neighborhood: addressInput.street[2],
  extra: addressInput.street[3]
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/General/SvgImage.vue?vue&type=template&id=74dc5528&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"svg-image",attrs:{"aria-label":_vm.label,"role":_vm.role || (_vm.label ? 'img' : null)}},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('use',{attrs:{"xlink:href":("#" + _vm.icon)}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/General/SvgImage.vue?vue&type=template&id=74dc5528&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/General/SvgImage.vue?vue&type=script&lang=ts&

/* harmony default export */ var SvgImagevue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'SvgImage',
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '24'
    },
    height: {
      type: String,
      default: '24'
    },
    tag: {
      type: String,
      default: 'span'
    },
    label: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    }
  }
}));
// CONCATENATED MODULE: ./components/General/SvgImage.vue?vue&type=script&lang=ts&
 /* harmony default export */ var General_SvgImagevue_type_script_lang_ts_ = (SvgImagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/General/SvgImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  General_SvgImagevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "74dc5528",
  "7a586fb9"
  
)

/* harmony default export */ var SvgImage = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getReviewId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getReviewAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getReviewMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getReviewRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getReviewDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTotalReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAverageRating; });
/* unused harmony export getRatesCount */
/* unused harmony export getReviewsPage */
/* unused harmony export getReviewMetadata */
/* unused harmony export getProductName */
const getItems = review => {
  var _a;
  return ((_a = review === null || review === void 0 ? void 0 : review.reviews) === null || _a === void 0 ? void 0 : _a.items) || [];
};
const getReviewId = item => `${item.nickname}_${item.created_at}_${item.average_rating}`;
const getReviewAuthor = item => item.nickname;
const getReviewMessage = item => item.text;
const getReviewRating = item => {
  var _a;
  return Number.parseInt((_a = item.ratings_breakdown.find(r => r.name === 'Rating')) === null || _a === void 0 ? void 0 : _a.value, 10) || 0;
};
const getReviewDate = item => item.created_at;
const getTotalReviews = review => (review === null || review === void 0 ? void 0 : review.review_count) || 0;
const getAverageRating = review => {
  var _a, _b, _c;
  return ((_c = (_b = (_a = review === null || review === void 0 ? void 0 : review.reviews) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.reduce((acc, curr) => Number.parseInt(`${acc}`, 10) + getReviewRating(curr), 0)) !== null && _c !== void 0 ? _c : 0) / ((review === null || review === void 0 ? void 0 : review.review_count) || 1) || 0;
};
const getRatesCount = _review => [];
const getReviewsPage = review => {
  var _a;
  return ((_a = review === null || review === void 0 ? void 0 : review.reviews.page_info) === null || _a === void 0 ? void 0 : _a.page_size) || 0;
};
const getReviewMetadata = reviewData => reviewData === null || reviewData === void 0 ? void 0 : reviewData.map(m => ({
  ...m,
  values: m.values.map(v => ({
    label: Number.parseInt(v.value, 10) || v.value,
    id: v.value_id
  }))
}));
const getProductName = review => {
  var _a;
  return ((_a = review === null || review === void 0 ? void 0 : review.product) === null || _a === void 0 ? void 0 : _a.name) || '';
};
const reviewGetters = {
  getAverageRating,
  getItems,
  getRatesCount,
  getReviewAuthor,
  getReviewDate,
  getReviewId,
  getReviewMessage,
  getReviewMetadata,
  getReviewRating,
  getReviewsPage,
  getTotalReviews,
  getProductName
};
/* harmony default export */ __webpack_exports__["a"] = (reviewGetters);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useWishlist; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./modules/wishlist/helpers/productMatch.ts
const productMatch = (productA, productB) => {
  const equalSku = (productA === null || productA === void 0 ? void 0 : productA.sku) === (productB === null || productB === void 0 ? void 0 : productB.sku);
  const equalUid = (productA === null || productA === void 0 ? void 0 : productA.uid) === (productB === null || productB === void 0 ? void 0 : productB.uid);
  return equalSku && equalUid;
};
// CONCATENATED MODULE: ./modules/wishlist/helpers/findItemOnWishlist.ts

const findItemOnWishlist = (currentWishlist, product) => {
  var _a, _b;
  const wishlist = Array.isArray(currentWishlist) ? currentWishlist[0] : currentWishlist;
  return (_b = (_a = wishlist === null || wishlist === void 0 ? void 0 : wishlist.items_v2) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.find(item => productMatch(item.product, product));
};
// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./modules/wishlist/store/wishlistStore.ts
var store_wishlistStore = __webpack_require__(43);

// EXTERNAL MODULE: ./composables/index.ts + 39 modules
var composables = __webpack_require__(7);

// CONCATENATED MODULE: ./modules/wishlist/composables/useWishlist/useWishlist.ts

// CONCATENATED MODULE: ./modules/wishlist/composables/useWishlist/index.ts





/**
 * Allows loading and manipulating wishlist of the current user.
 *
 * See the {@link UseWishlistInterface} for a list of methods and values available in this composable.
 */
function useWishlist() {
  const wishlistStore = Object(store_wishlistStore["a" /* useWishlistStore */])();
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const {
    send: sendNotification
  } = Object(composables["o" /* useUiNotification */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const calculateWishlistTotal = wishlists => wishlists.reduce((acc, current) => {
    var _a;
    return acc + ((_a = current === null || current === void 0 ? void 0 : current.items_count) !== null && _a !== void 0 ? _a : 0);
  }, 0);
  const error = Object(runtime["l" /* ref */])({
    addItem: null,
    removeItem: null,
    load: null,
    clear: null,
    loadItemsCount: null,
    afterAddingWishlistItemToCart: null
  });
  const load = async params => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('useWishlist/load');
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento Storefront]: useWishlist.load params->', params);
      const apiState = app.$vsf.$magento.config.state;
      if (apiState.getCustomerToken()) {
        const {
          data
        } = await app.$vsf.$magento.api.wishlist(params === null || params === void 0 ? void 0 : params.searchParams, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
        logger["a" /* Logger */].debug('[Result]:', {
          data
        });
        const loadedWishlist = (_c = (_b = data === null || data === void 0 ? void 0 : data.customer) === null || _b === void 0 ? void 0 : _b.wishlists) !== null && _c !== void 0 ? _c : [];
        if (loadedWishlist[0]) {
          // @ts-expect-error M2-579
          [wishlistStore.wishlist] = loadedWishlist;
        }
      }
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useWishlist/load', err);
    } finally {
      loading.value = false;
    }
    return wishlistStore.wishlist;
  };
  const isInWishlist = ({
    product
  }) => {
    logger["a" /* Logger */].debug('useWishlist/isInWishlist', product);
    const wishlistProduct = findItemOnWishlist(wishlistStore.wishlist, product);
    return !!((wishlistProduct === null || wishlistProduct === void 0 ? void 0 : wishlistProduct.id) && (wishlistProduct === null || wishlistProduct === void 0 ? void 0 : wishlistProduct.quantity));
  };
  const setWishlist = newWishlist => {
    wishlistStore.wishlist = newWishlist;
    logger["a" /* Logger */].debug('useWishlist/setWishlist', newWishlist);
  };
  const removeItem = async ({
    product,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('useWishlist/removeItem', product);
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento Storefront]: useWishlist.removeItem params->', {
        currentWishlist: wishlistStore.wishlist,
        product,
        customQuery,
        customHeaders
      });
      const itemOnWishlist = findItemOnWishlist(wishlistStore.wishlist, product);
      const {
        data
      } = await app.context.$vsf.$magento.api.removeProductsFromWishlist({
        id: '0',
        items: [itemOnWishlist.id]
      }, customQuery, customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      error.value.removeItem = null;
      wishlistStore.$patch(state => {
        var _a, _b;
        state.wishlist = (_b = (_a = data === null || data === void 0 ? void 0 : data.removeProductsFromWishlist) === null || _a === void 0 ? void 0 : _a.wishlist) !== null && _b !== void 0 ? _b : {};
      });
    } catch (err) {
      error.value.removeItem = err;
      logger["a" /* Logger */].error('useWishlist/removeItem', err);
    } finally {
      loading.value = false;
    }
  };
  const loadItemsCount = async () => {
    var _a, _b;
    logger["a" /* Logger */].debug('useWishlist/wishlistItemsCount');
    const apiState = app.context.$vsf.$magento.config.state;
    let itemsCount = null;
    try {
      loading.value = true;
      error.value.loadItemsCount = null;
      if (apiState.getCustomerToken()) {
        const {
          data
        } = await app.context.$vsf.$magento.api.wishlistItemsCount();
        logger["a" /* Logger */].debug('[Result]:', {
          data
        });
        const loadedWishlist = (_b = (_a = data === null || data === void 0 ? void 0 : data.customer) === null || _a === void 0 ? void 0 : _a.wishlists) !== null && _b !== void 0 ? _b : [];
        itemsCount = calculateWishlistTotal(loadedWishlist);
        wishlistStore.$patch(state => {
          state.wishlist.items_count = itemsCount;
        });
      }
    } catch (err) {
      error.value.loadItemsCount = err;
      logger["a" /* Logger */].error('useWishlist/wishlistItemsCount', err);
    } finally {
      loading.value = false;
    }
    return itemsCount;
  };
  // eslint-disable-next-line consistent-return
  const addItem = async ({
    product,
    customQuery,
    customHeaders
  }) => {
    var _a, _b;
    logger["a" /* Logger */].debug('useWishlist/addItem', product);
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento Storefront]: useWishlist.addItem params->', {
        currentWishlist: wishlistStore.wishlist,
        product,
        customQuery,
        customHeaders
      });
      if (!wishlistStore.wishlist) {
        await load({});
      }
      const itemOnWishlist = findItemOnWishlist(wishlistStore.wishlist, product);
      if (itemOnWishlist) {
        return;
      }
      if (!app.$vsf.$magento.config.state.getCustomerToken()) {
        logger["a" /* Logger */].error('Need to be authenticated to add a product to wishlist');
      }
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      switch (product.__typename) {
        case 'VirtualProduct':
        case 'DownloadableProduct':
        case 'GroupedProduct':
        case 'GiftCard':
        case 'SimpleProduct':
          {
            const {
              data
            } = await app.context.$vsf.$magento.api.addProductToWishList({
              id: '0',
              items: [{
                sku: product.sku,
                quantity: 1
              }]
            }, customQuery, customHeaders);
            logger["a" /* Logger */].debug('[Result]:', {
              data
            });
            wishlistStore.$patch(state => {
              var _a, _b;
              state.wishlist = (_b = (_a = data === null || data === void 0 ? void 0 : data.addProductsToWishlist) === null || _a === void 0 ? void 0 : _a.wishlist) !== null && _b !== void 0 ? _b : {};
            });
            break;
          }
        case 'ConfigurableProduct':
          {
            const {
              data: configurableProductData
            } = await app.context.$vsf.$magento.api.addProductToWishList({
              id: '0',
              items: [{
                sku: ((_b = (_a = product.configurable_product_options_selection) === null || _a === void 0 ? void 0 : _a.variant) === null || _b === void 0 ? void 0 : _b.sku) || product.sku,
                quantity: 1,
                parent_sku: product.sku
              }]
            }, customQuery, customHeaders);
            logger["a" /* Logger */].debug('[Result]:', {
              data: configurableProductData
            });
            wishlistStore.$patch(state => {
              var _a, _b;
              state.wishlist = (_b = (_a = configurableProductData === null || configurableProductData === void 0 ? void 0 : configurableProductData.addProductsToWishlist) === null || _a === void 0 ? void 0 : _a.wishlist) !== null && _b !== void 0 ? _b : {};
            });
            break;
          }
        case 'BundleProduct':
          {
            const {
              data: bundleProductData
            } = await app.context.$vsf.$magento.api.addProductToWishList({
              id: '0',
              items: [{
                sku: product.sku,
                quantity: 1,
                entered_options: []
              }]
            }, customQuery, customHeaders);
            logger["a" /* Logger */].debug('[Result]:', {
              data: bundleProductData
            });
            wishlistStore.$patch(state => {
              var _a, _b;
              state.wishlist = (_b = (_a = bundleProductData === null || bundleProductData === void 0 ? void 0 : bundleProductData.addProductsToWishlist) === null || _a === void 0 ? void 0 : _a.wishlist) !== null && _b !== void 0 ? _b : {};
            });
            break;
          }
        default:
          // @ts-ignore
          // eslint-disable-next-line no-underscore-dangle
          logger["a" /* Logger */].error(`Product Type ${product.__typename} not supported in add to wishlist yet`);
      }
    } catch (err) {
      error.value.addItem = err;
      logger["a" /* Logger */].error('useWishlist/addItem', err);
    } finally {
      loading.value = false;
    }
  };
  // eslint-disable-next-line @typescript-eslint/require-await
  const clear = async () => {
    logger["a" /* Logger */].debug('useWishlist/clear');
    try {
      loading.value = true;
      error.value.clear = null;
      wishlistStore.$patch(state => {
        state.wishlist = {};
      });
    } catch (err) {
      error.value.clear = err;
      logger["a" /* Logger */].error('useWishlist/clear', err);
    } finally {
      loading.value = false;
    }
  };
  const afterAddingWishlistItemToCart = ({
    product,
    cartError
  }) => {
    logger["a" /* Logger */].debug('useWishlist/afterAddingItemToCart', product);
    if (!isInWishlist({
      product
    })) return;
    try {
      if (cartError === null || cartError === void 0 ? void 0 : cartError.message) {
        sendNotification({
          id: Symbol('product_added_to_cart_from_wishlist_error'),
          message: cartError.message,
          type: 'danger',
          icon: 'cross',
          persist: false,
          title: 'Wishlist error'
        });
      } else {
        // eslint-disable-next-line promise/catch-or-return
        removeItem({
          product
        })
        // eslint-disable-next-line promise/always-return
        .then(() => {
          sendNotification({
            id: Symbol('product_added_to_cart_from_wishlist'),
            message: app.i18n.t('You added {product} to your shopping cart.', {
              product: product.name
            }),
            type: 'success',
            icon: 'check',
            persist: false,
            title: 'Wishlist'
          });
        });
      }
    } catch (err) {
      error.value.afterAddingWishlistItemToCart = err;
      logger["a" /* Logger */].error('useWishlist/afterAddingWishlistItemToCart', err);
    }
  };
  const addOrRemoveItem = async ({
    product,
    customQuery,
    customHeaders
  }) => {
    await (isInWishlist({
      product
    }) ? removeItem({
      product,
      customQuery,
      customHeaders
    }) : addItem({
      product,
      customQuery,
      customHeaders
    }));
  };
  return {
    loadItemsCount,
    isInWishlist,
    addItem,
    load,
    removeItem,
    clear,
    setWishlist,
    afterAddingWishlistItemToCart,
    addOrRemoveItem,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useWishlist = __webpack_exports__["a"] = (useWishlist);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["a" /* default */]['__core-js_shared__'];
/* harmony default export */ var _coreJsData = (coreJsData);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ var _isMasked = (isMasked);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!Object(isObject["a" /* default */])(value) || _isMasked(value)) {
    return false;
  }
  var pattern = Object(isFunction["a" /* default */])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource["a" /* default */])(value));
}
/* harmony default export */ var _baseIsNative = (baseIsNative);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ var _getValue = (getValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}
/* harmony default export */ var _getNative = __webpack_exports__["a"] = (getNative);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApi; });
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


/**
 * Allows executing arbitrary GraphQL queries and mutations.
 *
 * See the {@link UseApiInterface} for a list of methods and values available in this composable.
 */
function useApi() {
  const context = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* useContext */ "s"])();
  // @ts-ignore
  const query = async (request, variables) => {
    const reqID = `id${Math.random().toString(16).slice(2)}`;
    _helpers_logger__WEBPACK_IMPORTED_MODULE_1__[/* Logger */ "a"].debug(`customQuery/request/${reqID}`, request);
    const {
      data,
      errors
    } = await context.app.$vsf.$magento.api.customQuery({
      query: request,
      queryVariables: variables
    });
    _helpers_logger__WEBPACK_IMPORTED_MODULE_1__[/* Logger */ "a"].debug(`customQuery/result/${reqID}`, {
      data,
      errors
    });
    return {
      data,
      errors
    };
  };
  // @ts-ignore
  const mutate = async (request, variables) => {
    const reqID = `id${Math.random().toString(16).slice(2)}`;
    _helpers_logger__WEBPACK_IMPORTED_MODULE_1__[/* Logger */ "a"].debug(`customQuery/request/${reqID}`, request);
    const {
      data,
      errors
    } = await context.app.$vsf.$magento.api.customMutation({
      mutation: request,
      mutationVariables: variables
    });
    _helpers_logger__WEBPACK_IMPORTED_MODULE_1__[/* Logger */ "a"].debug(`customQuery/result/${reqID}`, {
      data,
      errors
    });
    return {
      data,
      errors
    };
  };
  return {
    query,
    mutate
  };
}
/* harmony default export */ __webpack_exports__["a"] = (useApi);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value.length) && !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
}
/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ __webpack_exports__["a"] = (isFunction);

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}
Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(isObjectLike["a" /* default */])(value) && Object(_baseGetTag["a" /* default */])(value) == argsTag;
}
/* harmony default export */ var _baseIsArguments = (baseIsArguments);
// CONCATENATED MODULE: ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return Object(isObjectLike["a" /* default */])(value) && isArguments_hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ var lodash_es_isArguments = __webpack_exports__["a"] = (isArguments);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ getName; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ getSlug; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getPrice; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getGallery; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getProductThumbnailImage; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getBreadcrumbs; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ getSwatchData; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getGroupedProducts; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getBundleProducts; });

// UNUSED EXPORTS: getCoverImage, getAttributes, getDescription, getShortDescription, getCategoryIds, getCategory, getId, getProductSku, getTypeId, getTotalReviews, getAverageRating, getProductRelatedProduct, getProductUpsellProduct

// CONCATENATED MODULE: ./helpers/htmlDecoder.ts
function htmlDecode(input) {
  const formatName = () => {
    try {
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(input, 'text/html');
      return doc.documentElement.textContent;
    } catch {
      return input;
    }
  };
  const name = formatName();
  return name === 'undefined' ? '' : name;
}
// EXTERNAL MODULE: ./modules/review/getters/reviewGetters.ts
var reviewGetters = __webpack_require__(30);

// CONCATENATED MODULE: ./modules/catalog/product/getters/productGetters.ts


const getName = product => {
  if (!product) {
    return '';
  }
  return htmlDecode(product.name);
};
const getSlug = (product, category) => {
  const rewrites = product === null || product === void 0 ? void 0 : product.url_rewrites;
  let url = (product === null || product === void 0 ? void 0 : product.sku) ? `/p/${product.sku}` : '';
  if (!rewrites || rewrites.length === 0) {
    return url;
  }
  url = `/${rewrites[0].url}`;
  // eslint-disable-next-line no-restricted-syntax
  for (const rewrite of rewrites) {
    if (category && category.uid) {
      url = `/${rewrite.url}`;
      break;
    }
  }
  return url;
};
const getPrice = product => {
  let regular = 0;
  let special = null;
  let maximum = null;
  let final = null;
  if (product === null || product === void 0 ? void 0 : product.price_range) {
    regular = product.price_range.minimum_price.regular_price.value;
    final = product.price_range.minimum_price.final_price.value;
    maximum = product.price_range.maximum_price.final_price.value;
    if (final < regular) {
      special = final;
    }
  }
  return {
    regular,
    special,
    maximum,
    final
  };
};
const getGallery = (product, maxGallerySize = 4) => {
  var _a, _b, _c, _d;
  const images = [];
  if (!((_a = product === null || product === void 0 ? void 0 : product.media_gallery) === null || _a === void 0 ? void 0 : _a.length) && !((_c = (_b = product === null || product === void 0 ? void 0 : product.configurable_product_options_selection) === null || _b === void 0 ? void 0 : _b.media_gallery) === null || _c === void 0 ? void 0 : _c.length)) {
    return images;
  }
  const selectedGallery = ((_d = product.configurable_product_options_selection) === null || _d === void 0 ? void 0 : _d.media_gallery.length) ? product.configurable_product_options_selection.media_gallery : product.media_gallery;
  // eslint-disable-next-line no-restricted-syntax
  for (const galleryItem of selectedGallery) {
    images.push({
      small: galleryItem.url,
      normal: galleryItem.url,
      big: galleryItem.url
    });
  }
  return images.slice(0, maxGallerySize);
};
const getCoverImage = product => {
  if (!product || !product.image) {
    return null;
  }
  return product.image.url;
};
const getProductThumbnailImage = product => {
  if (!product || !product.thumbnail) {
    return null;
  }
  return product.thumbnail.url;
};
const getAttributes = (products, _filterByAttributeName) => {
  if (!products || !(products === null || products === void 0 ? void 0 : products.configurable_options)) {
    return {};
  }
  const attributes = {};
  const configurableOptions = products.configurable_options;
  // eslint-disable-next-line no-restricted-syntax
  for (const option of configurableOptions) {
    attributes[option.attribute_code] = {
      code: option.attribute_code,
      label: option.label,
      value: option.values.map(value => {
        const obj = {};
        obj[value.value_index] = value.label;
        return obj;
      })
    };
  }
  return attributes;
};
const getDescription = product => {
  if (!product || !(product === null || product === void 0 ? void 0 : product.description)) {
    return '';
  }
  return product.description.html;
};
const getShortDescription = product => {
  if (!product || !product.short_description) {
    return '';
  }
  return product.short_description.html;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCategoryIds = product => {
  const categoryIds = [];
  if (!(product === null || product === void 0 ? void 0 : product.categories)) {
    return categoryIds;
  }
  return product.categories.map(category => category.uid);
};
const getCategory = (product, currentUrlPath) => {
  if (!(product === null || product === void 0 ? void 0 : product.categories) || (product === null || product === void 0 ? void 0 : product.categories.length) === 0) {
    return null;
  }
  const categories = currentUrlPath.split('/');
  categories.pop();
  if (categories.length === 0) {
    return null;
  }
  const categoryPath = categories.join('/');
  // eslint-disable-next-line no-restricted-syntax
  for (const category of product.categories) {
    if (`/${category.url_path}` === categoryPath) {
      return category;
    }
  }
  return null;
};
const getId = product => product.uid;
const getProductSku = product => product.sku;
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const getTypeId = product => product.__typename;
const getCategoryBreadcrumbs = category => {
  let breadcrumbs = [];
  if (!category) {
    return [];
  }
  if (Array.isArray(category === null || category === void 0 ? void 0 : category.breadcrumbs)) {
    breadcrumbs = category.breadcrumbs.map(breadcrumb => ({
      text: breadcrumb.category_name,
      link: `/${breadcrumb.category_url_path}${category.url_suffix || ''}`
    }));
  }
  breadcrumbs.push({
    text: category.name,
    link: `/${category.url_path}${category.url_suffix || ''}`
  });
  return breadcrumbs;
};
const getBreadcrumbs = (product, category) => {
  var _a, _b, _c;
  let breadcrumbs = [];
  if (!product) {
    return breadcrumbs;
  }
  if (category) {
    breadcrumbs = getCategoryBreadcrumbs(category);
  }
  breadcrumbs.push({
    text: getName(product),
    link: `/${(_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.url_rewrites) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url) !== null && _c !== void 0 ? _c : product.url_key}`
  });
  return breadcrumbs;
};

const getProductRelatedProduct = product => (product === null || product === void 0 ? void 0 : product.related_products) || [];
const getProductUpsellProduct = product => (product === null || product === void 0 ? void 0 : product.upsell_products) || [];
const getSwatchData = swatchData => swatchData === null || swatchData === void 0 ? void 0 : swatchData.value;
const sortProduct = (a, b) => a.position - b.position;
// eslint-disable-next-line no-underscore-dangle
const getGroupedProducts = product => {
  var _a;
  return product.__typename === 'GroupedProduct' && ((_a = product === null || product === void 0 ? void 0 : product.items) === null || _a === void 0 ? void 0 : _a.sort(sortProduct));
};
// eslint-disable-next-line no-underscore-dangle
const getBundleProducts = product => {
  var _a;
  return product.__typename === 'BundleProduct' && ((_a = product === null || product === void 0 ? void 0 : product.items) === null || _a === void 0 ? void 0 : _a.sort(sortProduct));
};
const productGetters = {
  getAttributes,
  getAverageRating: reviewGetters["b" /* getAverageRating */],
  getBreadcrumbs,
  getCategory,
  getCategoryIds,
  getCoverImage,
  getDescription,
  getGallery,
  getId,
  getName,
  getPrice,
  getProductRelatedProduct,
  getProductSku,
  getProductThumbnailImage,
  getProductUpsellProduct,
  getShortDescription,
  getSlug,
  getTotalReviews: reviewGetters["h" /* getTotalReviews */],
  getTypeId,
  getSwatchData,
  getGroupedProducts,
  getBundleProducts
};
/* harmony default export */ var getters_productGetters = __webpack_exports__["a"] = (productGetters);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=5803ce72&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c(_vm.injections.components.SfButton,_vm._g(_vm._b({tag:"component",class:[_vm.data.class, _vm.data.staticClass, 'sf-circle-icon'],attrs:{"aria-label":_vm.props.ariaLabel,"disabled":_vm.props.disabled}},'component',_vm.data.attrs,false),_vm.listeners),[_vm._t("default",function(){return [_c(_vm.injections.components.SfIcon,{tag:"component",staticClass:"sf-circle-icon__icon",attrs:{"aria-hidden":"true","icon":_vm.props.icon,"size":_vm.props.iconSize}})]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=template&id=5803ce72&functional=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 5 modules
var SfIcon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfCircleIconvue_type_script_lang_js_ = ({
  name: "SfCircleIcon",
  inject: {
    components: {
      default: {
        SfButton: SfButton["a" /* default */],
        SfIcon: SfIcon["a" /* default */]
      }
    }
  },
  props: {
    icon: {
      type: [String, Array],
      default: "home"
    },
    iconSize: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: "button-icon"
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCircleIcon_SfCircleIconvue_type_script_lang_js_ = (SfCircleIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(227)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCircleIcon_SfCircleIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "025cf2c1"
  
)

/* harmony default export */ var SfCircleIcon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useMagentoConfiguration; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./composables/index.ts + 39 modules
var composables = __webpack_require__(7);

// CONCATENATED MODULE: ./composables/useMagentoConfiguration/UseMagentoConfiguration.ts

// CONCATENATED MODULE: ./composables/useMagentoConfiguration/index.ts


/**
 * Allows getting the Magento's major
 * definitions, e.g., the selected currency, store, locale, and config object.
 *
 * See the {@link UseMagentoConfigurationInterface} for a list of methods and values available in this composable.
 */
function useMagentoConfiguration() {
  const {
    app: {
      $vsf: {
        $magento: {
          config
        }
      }
    }
  } = Object(runtime["s" /* useContext */])();
  const {
    config: storeConfig
  } = Object(composables["c" /* useConfig */])();
  const selectedCurrency = Object(runtime["a" /* computed */])(() => config.state.getCurrency());
  const selectedLocale = Object(runtime["a" /* computed */])(() => config.state.getLocale());
  const selectedStore = Object(runtime["a" /* computed */])(() => config.state.getStore());
  return {
    storeConfig,
    selectedCurrency,
    selectedLocale,
    selectedStore
  };
}

/* harmony default export */ var composables_useMagentoConfiguration = (useMagentoConfiguration);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWishlistStore; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);

const useWishlistStore = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])('wishlist', {
  state: () => ({
    wishlist: {
      items_count: 0
    }
  })
});

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("body-scroll-lock");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_root_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'Map');
/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (isBuffer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/* harmony default export */ __webpack_exports__["a"] = (isPrototype);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/lodash-es/isLength.js
var isLength = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(isObjectLike["a" /* default */])(value) && Object(isLength["a" /* default */])(value.length) && !!typedArrayTags[Object(_baseGetTag["a" /* default */])(value)];
}
/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ var _baseUnary = (baseUnary);
// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__(74);

// CONCATENATED MODULE: ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil["a" /* default */] && _nodeUtil["a" /* default */].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
/* harmony default export */ var lodash_es_isTypedArray = __webpack_exports__["a"] = (isTypedArray);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useShippingProvider

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/checkout/composables/useShippingProvider/commands/setShippingMethodsOnCartCommand.ts
const setShippingMethodsOnCartCommand = {
  execute: async (context, shippingMethodParams, customQuery, customHeaders) => {
    var _a, _b;
    const {
      data
    } = await context.app.$vsf.$magento.api.setShippingMethodsOnCart(shippingMethodParams, customQuery, customHeaders);
    // TODO: Find out why 'Cart' doesn't match the type of the response data.
    return (_b = (_a = data === null || data === void 0 ? void 0 : data.setShippingMethodsOnCart) === null || _a === void 0 ? void 0 : _a.cart) !== null && _b !== void 0 ? _b : null;
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/useShippingProvider/useShippingProvider.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useShippingProvider/index.ts




/**
 * Allows loading the shipping provider
 * for the current cart and saving (selecting) other shipping provider for the
 * same cart.
 *
 * See the {@link UseShippingProviderInterface} for a list of methods and values available in this composable.
 */
function useShippingProvider() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    save: null
  });
  const {
    cart,
    setCart,
    load: loadCart
  } = Object(useCart["a" /* default */])();
  const context = Object(runtime["s" /* useContext */])();
  const save = async ({
    shippingMethod,
    customQuery = null,
    customHeaders = {}
  }) => {
    logger["a" /* Logger */].debug('useShippingProvider.save');
    let result = null;
    try {
      loading.value = true;
      const shippingMethodParams = {
        cart_id: cart.value.id,
        shipping_methods: [shippingMethod]
      };
      const cartData = await setShippingMethodsOnCartCommand.execute(context, shippingMethodParams, customQuery, customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        cartData
      });
      setCart(cartData);
      result = cartData.shipping_addresses[0].selected_shipping_method;
      error.value.save = null;
    } catch (err) {
      error.value.save = err;
      logger["a" /* Logger */].error('useShippingProvider/save', err);
    } finally {
      loading.value = false;
    }
    return result;
  };
  const load = async ({
    customQuery = null,
    customHeaders = {}
  } = {}) => {
    var _a, _b, _c, _d;
    logger["a" /* Logger */].debug('useShippingProvider.load');
    let result = null;
    try {
      loading.value = true;
      if (!((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.value) === null || _a === void 0 ? void 0 : _a.shipping_addresses[0]) === null || _b === void 0 ? void 0 : _b.selected_shipping_method)) {
        await loadCart({
          customQuery,
          customHeaders
        });
      }
      result = (_d = (_c = cart.value) === null || _c === void 0 ? void 0 : _c.shipping_addresses[0]) === null || _d === void 0 ? void 0 : _d.selected_shipping_method;
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useShippingProvider/load', err);
    } finally {
      loading.value = false;
    }
    return result;
  };
  return {
    load,
    save,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useShippingProvider = __webpack_exports__["a"] = (useShippingProvider);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useUiState; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./composables/useUiState/useUiState.ts

// CONCATENATED MODULE: ./composables/useUiState/index.ts

const state = Object(runtime["j" /* reactive */])({
  isCartSidebarOpen: false,
  isWishlistSidebarOpen: false,
  isLoginModalOpen: false,
  isNewsletterModalOpen: false,
  isCategoryGridView: true,
  isWishlistGridView: true,
  isFilterSidebarOpen: false,
  isMobileMenuOpen: false
});
/**
 * Global store for managing UI state.
 *
 * See the {@link UseUiStateInterface} for a list of methods and values available in this composable.
 */
function useUiState() {
  const toggleMobileMenu = () => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  };
  const toggleCartSidebar = () => {
    if (state.isMobileMenuOpen) toggleMobileMenu();
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };
  const toggleWishlistSidebar = () => {
    if (state.isMobileMenuOpen) toggleMobileMenu();
    state.isWishlistSidebarOpen = !state.isWishlistSidebarOpen;
  };
  const toggleLoginModal = () => {
    if (state.isMobileMenuOpen) toggleMobileMenu();
    state.isLoginModalOpen = !state.isLoginModalOpen;
  };
  const toggleNewsletterModal = () => {
    state.isNewsletterModalOpen = !state.isNewsletterModalOpen;
  };
  const changeToCategoryGridView = () => {
    state.isCategoryGridView = true;
  };
  const changeToCategoryListView = () => {
    state.isCategoryGridView = false;
  };
  const changeToWishlistGridView = () => {
    state.isWishlistGridView = true;
  };
  const changeToWishlistListView = () => {
    state.isWishlistGridView = false;
  };
  const toggleFilterSidebar = () => {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
  };
  return {
    isMobileMenuOpen: Object(runtime["a" /* computed */])(() => state.isMobileMenuOpen),
    isCartSidebarOpen: Object(runtime["a" /* computed */])(() => state.isCartSidebarOpen),
    isWishlistSidebarOpen: Object(runtime["a" /* computed */])(() => state.isWishlistSidebarOpen),
    isLoginModalOpen: Object(runtime["a" /* computed */])(() => state.isLoginModalOpen),
    isNewsletterModalOpen: Object(runtime["a" /* computed */])(() => state.isNewsletterModalOpen),
    isCategoryGridView: Object(runtime["a" /* computed */])(() => state.isCategoryGridView),
    isWishlistGridView: Object(runtime["a" /* computed */])(() => state.isWishlistGridView),
    isFilterSidebarOpen: Object(runtime["a" /* computed */])(() => state.isFilterSidebarOpen),
    toggleMobileMenu,
    toggleCartSidebar,
    toggleWishlistSidebar,
    toggleLoginModal,
    toggleNewsletterModal,
    changeToCategoryGridView,
    changeToCategoryListView,
    changeToWishlistGridView,
    changeToWishlistListView,
    toggleFilterSidebar
  };
}
/* harmony default export */ var composables_useUiState = (useUiState);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCategory; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/catalog/category/composables/useCategory/categoryMeta.gql.ts
/* harmony default export */ var categoryMeta_gql = (`
  query categoryMeta($filters: CategoryFilterInput) {
    categories(filters: $filters) {
      items {
        meta_title
        meta_description
        meta_keywords
        name
      }
    }
  }
`);
// CONCATENATED MODULE: ./modules/catalog/category/composables/useCategory/useCategory.ts

// CONCATENATED MODULE: ./modules/catalog/category/composables/useCategory/index.ts



/**
 * @public
 *
 * Allows loading categories from Magento API. It
 * is commonly used in navigation menus, and provides the load function and
 * refs for the categories, loading and error.
 *
 * See the {@link UseCategoryInterface} for a list of methods and values available in this composable.
 *
 * @remarks
 *
 * Under the hood, it calls the following Server Middleware API method:
 *
 * - {@link @vue-storefront/magento-api#categoryList} for loading category list;
 *
 * It is currently used in:
 *
 * - `components/AppHeader.vue`
 *
 * - `components/MobileMenuSidebar.vue`
 *
 * @example
 *
 * Load categories on client side using the `onMounted` Composition API hook:
 *
 * ```vue
 * <template>
 *   <div v-if="loading">
 *     Loading categories…
 *   </div>
 *   <div v-else-if="error.load">
 *     Error: {{ error.load.message }}
 *   </div>
 *   <div v-else>
 *     <!-- Display 'categories' -->
 *   </div>
 * </template>
 *
 * <script>
 * import { onMounted } from '@nuxtjs/composition-api';
 * import { useCategory } from '~/modules/catalog/category/composables/useCategory';
 *
 * export default {
 *   setup() {
 *     const { categories, error, load, loading } = useCategory();
 *
 *     onMounted(async () => {
 *       await load({ pageSize: 10 });
 *     });
 *
 *     return {
 *       error,
 *       loading,
 *       categories,
 *     };
 *   },
 * };
 * </script>
 * ```
 */
function useCategory() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    loadCategoryMeta: null
  });
  const categories = Object(runtime["l" /* ref */])(null);
  const load = async params => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('useCategory/load', params);
    try {
      loading.value = true;
      const {
        data
      } = await app.context.$vsf.$magento.api.categoryList(params, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      categories.value = (_c = (_b = data === null || data === void 0 ? void 0 : data.categories) === null || _b === void 0 ? void 0 : _b.items) !== null && _c !== void 0 ? _c : [];
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useCategory/load', err);
    } finally {
      loading.value = false;
    }
  };
  const loadCategoryMeta = async params => {
    var _a;
    logger["a" /* Logger */].debug('useCategory/loadCategoryMeta', params);
    let categoryMeta = null;
    try {
      loading.value = true;
      const {
        data
      } = await app.context.$vsf.$magento.api.customQuery({
        query: categoryMeta_gql,
        queryVariables: {
          filters: {
            category_uid: {
              eq: params.category_uid
            }
          }
        },
        customHeaders: params === null || params === void 0 ? void 0 : params.customHeaders
      });
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      categoryMeta = ((_a = data.categoryList) === null || _a === void 0 ? void 0 : _a[0]) || null;
      error.value.loadCategoryMeta = null;
    } catch (err) {
      error.value.loadCategoryMeta = err;
      logger["a" /* Logger */].error('useCategory/loadCategoryMeta', err);
    } finally {
      loading.value = false;
    }
    return categoryMeta;
  };
  return {
    load,
    loadCategoryMeta,
    loading,
    error,
    categories
  };
}

/* harmony default export */ var composables_useCategory = (useCategory);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useUiNotification; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./composables/useUiNotification/useUiNotification.ts

// CONCATENATED MODULE: ./composables/useUiNotification/index.ts

const state = Object(runtime["j" /* reactive */])({
  notifications: []
});
const maxVisibleNotifications = 3;
const timeToLive = 3000;
/**
 * Allows managing and showing notifications to the user.
 *
 * See the {@link UseUiNotificationInterface} for a list of methods and values available in this composable.
 */
function useUiNotification() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  // @ts-ignore
  const cookieMessage = app.$vsf.$magento.config.state.getMessage();
  const send = notification => {
    const id = Symbol('id');
    const dismiss = () => {
      const index = state.notifications.findIndex(n => n.id === id);
      if (index !== -1) state.notifications.splice(index, 1);
      // @ts-ignore
      app.$vsf.$magento.config.state.removeMessage();
    };
    const newNotification = {
      ...notification,
      id,
      dismiss
    };
    if (!state.notifications.some(stateNotification => stateNotification.message === notification.message)) {
      state.notifications.push(newNotification);
    }
    if (state.notifications.length > maxVisibleNotifications) {
      state.notifications.shift();
    }
    if (!notification.persist) {
      setTimeout(dismiss, timeToLive);
    }
  };
  if (cookieMessage) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    send(cookieMessage);
    // @ts-ignore
    app.$vsf.$magento.config.state.removeMessage();
  }
  return {
    send,
    notifications: Object(runtime["a" /* computed */])(() => state.notifications)
  };
}
/* harmony default export */ var composables_useUiNotification = (useUiNotification);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCustomerStore; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);

const useCustomerStore = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])('customer', {
  state: () => ({
    user: null,
    isLoggedIn: false
  }),
  actions: {
    setIsLoggedIn(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == symbolTag;
}
/* harmony default export */ __webpack_exports__["a"] = (isSymbol);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ __webpack_exports__["a"] = (isLength);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/* harmony default export */ __webpack_exports__["a"] = (isIndex);

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 59 */,
/* 60 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }
      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }
      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var normalizeHeaderName = __webpack_require__(247);
var enhanceError = __webpack_require__(63);
var transitionalDefaults = __webpack_require__(64);
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(248);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(254);
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
    if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(63);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  "version": "0.26.1"
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Uint8Array;
/* harmony default export */ __webpack_exports__["a"] = (Uint8Array);

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const defuArrayFn = createDefu((object, key, currentValue, _namespace) => {
  if (Array.isArray(object[key]) && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

exports.createDefu = createDefu;
exports.default = defu;
exports.defu = defu;
exports.defuArrayFn = defuArrayFn;
exports.defuFn = defuFn;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePageStore; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);

const usePageStore = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])('page', {
  state: () => ({
    routeData: null
  })
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=da87b454&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"sf-image--wrapper",attrs:{"data-testid":"image-wrapper"}},[_c(_vm.imageComponentTag,_vm._g(_vm._b({tag:"component",class:_vm.classes,style:(_vm.styles),attrs:{"loading":_vm.loading,"src":_vm.src,"alt":_vm.alt},on:{"load":_vm.onLoad}},'component',_vm.attributes,false),_vm.$listeners)),_vm._ssrNode(" "),_vm._t("placeholder",function(){return [_c('img',{staticClass:"sf-image--placeholder",class:{ 'display-none': _vm.isPlaceholderVisible },attrs:{"src":_vm.placeholder,"alt":"Placeholder","width":_vm.width || _vm.nuxtImgConfig.width,"height":_vm.height || _vm.nuxtImgConfig.height}})]},null,{
      isPlaceholderVisible: _vm.isPlaceholderVisible,
      placeholder: _vm.placeholder,
      width: _vm.width,
      height: _vm.height,
      nuxtImgConfig: _vm.nuxtImgConfig,
    }),_vm._ssrNode(" "),_vm._ssrNode("<span"+(_vm._ssrClass("sf-image--overlay",{ 'display-none': !_vm.$slots.default }))+">","</span>",[_vm._t("default")],2),_vm._ssrNode(" <noscript><img"+(_vm._ssrAttr("src",_vm.src))+(_vm._ssrAttr("alt",_vm.alt))+(_vm._ssrAttr("width",_vm.width))+(_vm._ssrAttr("height",_vm.height))+(_vm._ssrAttrs(_vm.$attrs))+" class=\"sf-image sf-image-loaded\"></noscript>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=template&id=da87b454&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/shared/images/product_placeholder.svg
var product_placeholder = __webpack_require__(142);
var product_placeholder_default = /*#__PURE__*/__webpack_require__.n(product_placeholder);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfImagevue_type_script_lang_js_ = ({
  name: "SfImage",
  props: {
    src: {
      type: String,
      required: true
    },
    srcsets: {
      type: Array,
      default: () => [],
      validator: value => value.length === 0 || value.every(item => item.resolution && item.src) || value.every(item => item.src && item.width)
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: null,
      validator: value => !isNaN(value)
    },
    height: {
      type: [Number, String],
      default: null,
      validator: value => !isNaN(value)
    },
    placeholder: {
      type: String,
      default: product_placeholder_default.a
    },
    loading: {
      type: String,
      default: "lazy",
      validator: value => ["", "lazy", "eager"].includes(value)
    },
    imageTag: {
      type: String,
      default: "img",
      validator: value => ["", "img", "nuxt-img", "nuxt-picture"].includes(value)
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loaded: false
    };
  },
  computed: {
    sortedSrcsets() {
      const arr = [...this.srcsets];
      arr.sort((setA, setB) => setA.width && setB.width ? Number.parseInt(setA.width) - Number.parseInt(setB.width) : Number.parseInt(setA.resolution) - Number.parseInt(setB.resolution));
      return arr;
    },
    srcset() {
      if (this.sortedSrcsets.length === 0) return null;
      return this.sortedSrcsets.reduce((str, set) => `${this.prefix(str)}${set.src} ${this.srcsetDescriptor(set)}`, "");
    },
    sizes() {
      const hasBreakpoints = this.sortedSrcsets.every(set => set.breakpoint && set.width);
      if (!hasBreakpoints) return null;
      return this.sortedSrcsets.reduce((str, set) => `${this.prefix(str)}${this.formatBreakpoint(set.breakpoint)}${this.formatDimension(set.width)}`, "");
    },
    classes() {
      if (this.loaded) {
        return "sf-image sf-image-loaded";
      } else {
        return "sf-image";
      }
    },
    imageComponentTag() {
      return !this.$nuxt ? "img" : this.imageTag || "img";
    },
    isPlaceholderVisible() {
      return this.loaded || !this.loaded && !this.placeholder;
    },
    attributes() {
      return this.imageTag === "img" || this.imageTag === "" ? {
        ...this.$attrs,
        sizes: this.sizes,
        srcset: this.srcset
      } : {
        ...this.$attrs,
        width: this.width ? this.width : null,
        height: this.height ? this.height : null,
        ...this.nuxtImgConfig
      };
    },
    styles() {
      if (!this.width && !this.srcset && (this.imageTag === "img" || this.imageTag === "")) {
        console.warn(`Missing required prop width.`);
      }
      if (!this.height && !this.srcset && (this.imageTag === "img" || this.imageTag === "")) {
        console.warn(`Missing required prop height.`);
      }
      const sizeHandler = size => {
        return size === null ? null : `${size}px`;
      };
      return {
        "--_image-width": sizeHandler(this.width),
        "--_image-height": sizeHandler(this.height)
      };
    }
  },
  methods: {
    onLoad() {
      this.loaded = true;
    },
    formatResolution(resolution) {
      return ("" + resolution).endsWith("x") ? resolution : `${resolution}x`;
    },
    formatDimension(size) {
      if (typeof size === null) return;
      if (["%"].includes(`${size}`.slice(-1)) || ["rem"].includes(`${size}`.slice(-3)) || ["em", "px", "vw", "vh"].includes(`${size}`.slice(-2)) || !parseInt(size, 10)) {
        return size;
      } else {
        return `${size}px`;
      }
    },
    formatBreakpoint(breakpoint) {
      return breakpoint ? `(max-width: ${breakpoint}px) ` : "";
    },
    prefix(str) {
      return str ? `${str}, ` : "";
    },
    srcsetDescriptor(srcset) {
      return srcset.width ? `${Number.parseInt(srcset.width) || ""}w` : this.formatResolution(srcset.resolution);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfImage_SfImagevue_type_script_lang_js_ = (SfImagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(223)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfImage_SfImagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1d895099"
  
)

/* harmony default export */ var SfImage = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useReview; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/review/composables/useReview/commands/addReviewCommand.ts

const addReviewCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('[Magento] add review params input:', JSON.stringify(params, null, 2));
    const {
      customQuery,
      ...input
    } = params;
    const {
      data
    } = await context.$magento.api.createProductReview(input, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return (_c = (_b = data === null || data === void 0 ? void 0 : data.createProductReview) === null || _b === void 0 ? void 0 : _b.review) !== null && _c !== void 0 ? _c : {};
  }
};
// CONCATENATED MODULE: ./modules/review/composables/useReview/commands/loadCustomerReviewsCommand.ts

const loadCustomerReviewsCommand = {
  execute: async (context, params) => {
    var _a, _b;
    logger["a" /* Logger */].debug('[Magento] load customer review based on:', {
      params
    });
    const {
      data
    } = await context.$magento.api.customerProductReview(params, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return (_b = data === null || data === void 0 ? void 0 : data.customer) !== null && _b !== void 0 ? _b : {};
  }
};
// CONCATENATED MODULE: ./modules/review/composables/useReview/commands/loadReviewMetadataCommand.ts

const loadReviewMetadataCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('[Magento] load review metadata');
    const {
      data
    } = await context.$magento.api.productReviewRatingsMetadata((_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return (_c = (_b = data === null || data === void 0 ? void 0 : data.productReviewRatingsMetadata) === null || _b === void 0 ? void 0 : _b.items) !== null && _c !== void 0 ? _c : [];
  }
};
// CONCATENATED MODULE: ./modules/review/composables/useReview/commands/searchReviewsCommand.ts

const searchReviewsCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('[Magento] search review params input:', JSON.stringify(params, null, 2));
    const {
      customQuery,
      ...input
    } = params;
    const {
      data
    } = await context.$magento.api.productReview(input, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return (_c = (_b = data === null || data === void 0 ? void 0 : data.products) === null || _b === void 0 ? void 0 : _b.items) !== null && _c !== void 0 ? _c : [];
  }
};
// CONCATENATED MODULE: ./modules/review/composables/useReview/useReview.ts

// CONCATENATED MODULE: ./modules/review/composables/useReview/index.ts
/* eslint-disable consistent-return */






/**
 * Allows loading and adding product reviews.
 *
 * See the {@link UseReviewInterface} for a list of methods and values available in this composable.
 */
function useReview() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null,
    addReview: null,
    loadReviewMetadata: null,
    loadCustomerReviews: null
  });
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const context = app.$vsf;
  const search = async searchParams => {
    logger["a" /* Logger */].debug('useReview/search', searchParams);
    try {
      loading.value = true;
      error.value.search = null;
      return await searchReviewsCommand.execute(context, searchParams);
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useReview/search', err);
    } finally {
      loading.value = false;
    }
  };
  const loadCustomerReviews = async () => {
    logger["a" /* Logger */].debug('useReview/loadCustomerReviews');
    try {
      loading.value = true;
      error.value.loadCustomerReviews = null;
      return await loadCustomerReviewsCommand.execute(context);
    } catch (err) {
      error.value.loadCustomerReviews = err;
      logger["a" /* Logger */].error('useReview/loadCustomerReviews', err);
    } finally {
      loading.value = false;
    }
  };
  const loadReviewMetadata = async params => {
    logger["a" /* Logger */].debug('useReview/loadReviewMetadata');
    try {
      loading.value = true;
      error.value.loadReviewMetadata = null;
      return await loadReviewMetadataCommand.execute(context, params);
    } catch (err) {
      error.value.loadReviewMetadata = err;
      logger["a" /* Logger */].error('useReview/loadReviewMetadata', err);
    } finally {
      loading.value = false;
    }
  };
  const addReview = async params => {
    logger["a" /* Logger */].debug('useReview/addReview', params);
    try {
      loading.value = true;
      error.value.addReview = null;
      return await addReviewCommand.execute(context, params);
    } catch (err) {
      error.value.addReview = err;
      logger["a" /* Logger */].error('useReview/addReview', err);
    } finally {
      loading.value = false;
    }
  };
  return {
    search,
    addReview,
    loadReviewMetadata,
    loadCustomerReviews,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useReview = (useReview);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=05a0e329&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('transition',{attrs:{"name":_vm.props.transition}},[(_vm.props.visible)?_c('div',{ref:"overlay",class:[_vm.data.class, _vm.data.staticClass, 'sf-overlay'],on:{"click":function($event){_vm.listeners.click && _vm.listeners.click($event)}}}):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=template&id=05a0e329&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfOverlayvue_type_script_lang_js_ = ({
  name: "SfOverlay",
  props: {
    transition: {
      type: String,
      default: "sf-fade"
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfOverlay_SfOverlayvue_type_script_lang_js_ = (SfOverlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfOverlay_SfOverlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "33c53343"
  
)

/* harmony default export */ var SfOverlay = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("vue-lazy-hydration");

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=4bedd77c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"will-change",rawName:"v-will-change",value:('font-size'),expression:"'font-size'"}],staticClass:"sf-input",class:{
    'has-text': !!_vm.value,
    invalid: !_vm.valid,
  },attrs:{"data-testid":_vm.nameWithoutWhitespace}},[_vm._ssrNode("<div class=\"sf-input__wrapper\">","</div>",[_c('input',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],class:{ 'sf-input--is-password': _vm.isPassword },attrs:{"id":_vm.nameWithoutWhitespace,"required":_vm.required,"disabled":_vm.disabled,"name":_vm.name,"type":_vm.inputType,"aria-invalid":!_vm.valid,"aria-required":_vm.required,"aria-describedby":_vm.errorMessage ? (_vm.nameWithoutWhitespace + "-error") : null},domProps:{"value":_vm.value}},'input',_vm.$attrs,false),_vm.listeners),[]),_vm._ssrNode(" <span class=\"sf-input__bar\"></span> "),_vm._ssrNode("<label"+(_vm._ssrAttr("for",_vm.nameWithoutWhitespace))+(_vm._ssrClass("sf-input__label will-change",{ 'display-none': !_vm.label }))+">","</label>",[_vm._t("label",function(){return [_vm._v(_vm._s(_vm.label))]},null,{ label: _vm.label })],2),_vm._ssrNode(" "),_vm._t("icon",function(){return [_c('SfButton',{staticClass:"sf-input__button sf-button--pure",class:{ 'display-none': !_vm.icon.icon || _vm.isPassword },on:{"click":function($event){return _vm.$emit('click:icon')}}},[_c('SfIcon',{staticClass:"sf-input__icon",attrs:{"color":_vm.icon.color,"size":_vm.icon.size,"icon":_vm.icon.icon}})],1),_vm._v(" "),_c('SfButton',{staticClass:"sf-input__password-button",class:{ 'display-none': !_vm.isPassword },attrs:{"type":"button","aria-label":'switch-visibility-password',"aria-pressed":_vm.isPasswordVisible.toString()},on:{"click":_vm.switchVisibilityPassword}},[_c('SfIcon',{staticClass:"sf-input__password-icon",class:{
            hidden: !_vm.isPasswordVisible,
          },attrs:{"icon":"show_password","size":"18px","color":"black"}})],1)]},null,{
        icon: _vm.icon,
        isPasswordVisible: _vm.isPasswordVisible,
        switchVisibilityPassword: _vm.switchVisibilityPassword,
      })],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-input__error-message\">","</div>",[_c('transition',{attrs:{"name":"sf-fade"}},[_vm._t("error-message",function(){return [_c('div',{class:{ 'display-none': _vm.valid },attrs:{"id":(_vm.nameWithoutWhitespace + "-error"),"aria-live":"assertive"}},[_vm._v("\n          "+_vm._s(_vm.errorMessage)+"\n        ")])]},null,{ errorMessage: _vm.errorMessage })],2)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=template&id=4bedd77c&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 5 modules
var SfIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/will-change/will-change-directive.js
var will_change_directive = __webpack_require__(275);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SfInputvue_type_script_lang_js_ = ({
  name: "SfInput",
  directives: {
    focus: focus_directive["a" /* focus */],
    willChange: will_change_directive["a" /* willChange */]
  },
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    icon: {
      type: Object,
      default: () => {
        return {
          icon: ""
        };
      }
    },
    valid: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute"
    },
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    },
    hasShowPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPasswordVisible: false,
      inputType: "",
      isNumberTypeSafari: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },
    isPassword() {
      return this.type === "password" && this.hasShowPassword;
    },
    nameWithoutWhitespace() {
      return this.name.replace(/\s/g, "");
    }
  },
  watch: {
    type: {
      immediate: true,
      handler: function (type) {
        let inputType = type;
        // Safari has bug for number input
        if (typeof window !== "undefined" || typeof document !== "undefined") {
          const ua = navigator.userAgent.toLocaleLowerCase();
          if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1 && type === "number") {
            this.isNumberTypeSafari = true;
            inputType = "text";
          }
        }
        this.inputType = inputType;
      }
    },
    value: {
      immediate: true,
      handler: function (value) {
        if (!this.isNumberTypeSafari) return;
        if (isNaN(value)) {
          this.$emit("input");
        }
      }
    }
  },
  methods: {
    switchVisibilityPassword() {
      if (this.type !== "password") return;
      this.isPasswordVisible = !this.isPasswordVisible;
      this.inputType = this.isPasswordVisible ? "text" : "password";
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfInput_SfInputvue_type_script_lang_js_ = (SfInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(231)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfInput_SfInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "30daaf77"
  
)

/* harmony default export */ var SfInput = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=2451306e&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('div',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-heading'],style:([_vm.data.style, _vm.data.staticStyle])},'div',_vm.data.attrs,false),_vm.listeners),[_vm._t("title",function(){return [_c(("h" + (_vm.props.level)),{tag:"component",staticClass:"sf-heading__title",class:_vm.props.level > 1 && _vm.$options.headingClass(_vm.props.level)},[_vm._v("\n      "+_vm._s(_vm.props.title)+"\n    ")])]},null,{ props: _vm.props }),_vm._ssrNode(" "),_vm._t("description",function(){return [_c('div',{staticClass:"sf-heading__description",class:{
        'display-none': !_vm.$options.hasDescription(_vm.props.description, _vm.slots),
      }},[_vm._v("\n      "+_vm._s(_vm.props.description)+"\n    ")])]},null,{ props: _vm.props })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=template&id=2451306e&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfHeadingvue_type_script_lang_js_ = ({
  name: "SfHeading",
  props: {
    level: {
      type: Number,
      default: 2
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  hasDescription(descriptionProp, slots) {
    return !!descriptionProp || slots().description;
  },
  headingClass(headingLevel) {
    return headingLevel <= 6 ? `h${headingLevel}` : `h2`;
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeading_SfHeadingvue_type_script_lang_js_ = (SfHeadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(229)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfHeading_SfHeadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "3fa8c3b2"
  
)

/* harmony default export */ var SfHeading = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useProduct; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/catalog/product/composables/useProduct/commands/getProductListCommand.ts
const getProductListCommand = {
  execute: async (context, searchParams, customQuery = {
    products: 'products'
  }, customHeaders = {}) => {
    var _a;
    const {
      data
    } = await context.app.$vsf.$magento.api.products(searchParams, customQuery, customHeaders);
    return (_a = data === null || data === void 0 ? void 0 : data.products) !== null && _a !== void 0 ? _a : null;
  }
};
// CONCATENATED MODULE: ./modules/catalog/product/composables/useProduct/commands/getProductDetailsCommand.ts
const getProductDetailsCommand = {
  execute: async (context, searchParams, customQuery = {
    productDetails: 'productDetails'
  }, customHeaders = {}) => {
    var _a;
    const {
      data
    } = await context.app.$vsf.$magento.api.productDetails(searchParams, customQuery, customHeaders);
    return (_a = data === null || data === void 0 ? void 0 : data.products) !== null && _a !== void 0 ? _a : null;
  }
};
// CONCATENATED MODULE: ./modules/catalog/product/composables/useProduct/useProduct.ts

// CONCATENATED MODULE: ./modules/catalog/product/composables/useProduct/index.ts




/**
 * Allows loading product details or list with
 * params for sorting, filtering and pagination.
 *
 * See the {@link UseProductInterface} for a list of methods and values available in this composable.
 */
function useProduct(id) {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    getProductList: null,
    getProductDetails: null
  });
  const context = Object(runtime["s" /* useContext */])();
  const getProductList = async searchParams => {
    logger["a" /* Logger */].debug(`useProduct/${id}/getProductList`, searchParams);
    let products = null;
    try {
      loading.value = true;
      products = await getProductListCommand.execute(context, searchParams);
      error.value.getProductList = null;
    } catch (err) {
      error.value.getProductList = err;
      logger["a" /* Logger */].error(`useProduct/${id}/search`, err);
    } finally {
      loading.value = false;
    }
    return products;
  };
  const getProductDetails = async searchParams => {
    logger["a" /* Logger */].debug(`useProduct/${id}/getProductDetails`, searchParams);
    let products = null;
    try {
      loading.value = true;
      products = await getProductDetailsCommand.execute(context, searchParams);
      error.value.getProductDetails = null;
    } catch (err) {
      error.value.getProductDetails = err;
      logger["a" /* Logger */].error(`useProduct/${id}/search`, err);
    } finally {
      loading.value = false;
    }
    return products;
  };
  const getProductPath = product => {
    var _a, _b, _c;
    if (!product) return '/';
    return `/${(_c = (_b = (_a = product === null || product === void 0 ? void 0 : product.url_rewrites) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.url) !== null && _c !== void 0 ? _c : product.url_key}`;
  };
  return {
    getProductList,
    getProductDetails,
    getProductPath,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useProduct = (useProduct);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export iconColors */
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorsValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return iconColorsValues; });
const iconColors = {
  greenPrimary: "green-primary",
  greenSecondary: "green-secondary",
  black: 'black',
  darkSecondary: 'dark-secondary',
  grayPrimary: "gray-primary",
  graySecondary: "gray-secondary",
  lightPrimary: "light-primary",
  white: "white",
  redPrimary: "red-primary",
  redSecondary: "red-secondary",
  yellowPrimary: "yellow-primary",
  yellowSecondary: "yellow-secondary",
  bluePrimary: "blue-primary",
  blueSecondary: "blue-secondary",
};
const colors = {
  primary: "color-primary",
  secondary: "color-secondary",
  light: "color-light",
  dark: "color-dark",
  info: "color-info",
  success: "color-success",
  warning: 'color-warning',
  danger: 'color-danger'
};
const colorsValues = Object.values(colors);
const iconColorsValues = Object.values(iconColors);
/* unused harmony default export */ var _unused_webpack_default_export = (colors);


/***/ }),
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useAddresses; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./modules/customer/helpers/userAddressManipulator.ts
var userAddressManipulator = __webpack_require__(28);

// CONCATENATED MODULE: ./modules/customer/composables/useAddresses/useAddresses.ts

// CONCATENATED MODULE: ./modules/customer/composables/useAddresses/index.ts



/**
 * @public
 *
 * Allows loading and manipulating addresses of the current user. These
 * addresses can be used for both billing and shipping.
 *
 * See the {@link UseAddressesInterface} for a list of methods and values available in this composable.
 */
function useAddresses() {
  const error = Object(runtime["l" /* ref */])({
    load: null,
    save: null,
    remove: null,
    update: null
  });
  const loading = Object(runtime["l" /* ref */])(false);
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const context = app.$vsf;
  const load = async (customQuery, customHeaders) => {
    var _a, _b;
    logger["a" /* Logger */].debug('[Magento] load user addresses');
    let results = null;
    try {
      loading.value = true;
      const {
        data
      } = await context.$magento.api.getCustomerAddresses(customQuery, customHeaders);
      results = (_b = (_a = data === null || data === void 0 ? void 0 : data.customer) === null || _a === void 0 ? void 0 : _a.addresses) !== null && _b !== void 0 ? _b : [];
      logger["a" /* Logger */].debug('[Magento] load user addresses results:', results);
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('Magento] load user addresses error', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  const save = async params => {
    var _a, _b;
    logger["a" /* Logger */].debug('[Magento] save user address:', params.address);
    let results = null;
    try {
      loading.value = true;
      const {
        data
      } = await context.$magento.api.createCustomerAddress(Object(userAddressManipulator["a" /* transformUserCreateAddressInput */])(params), (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      results = (_b = data === null || data === void 0 ? void 0 : data.createCustomerAddress) !== null && _b !== void 0 ? _b : {};
      logger["a" /* Logger */].debug('[Magento] save user address results:', params.address);
      error.value.save = null;
    } catch (err) {
      error.value.save = err;
      logger["a" /* Logger */].error('[Magento] save user address error:', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  const update = async params => {
    var _a, _b;
    logger["a" /* Logger */].debug('[Magento] update user address:', params.address);
    let results = null;
    try {
      loading.value = true;
      const {
        data
      } = await context.$magento.api.updateCustomerAddress(Object(userAddressManipulator["c" /* transformUserUpdateAddressInput */])(params), (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      results = (_b = data === null || data === void 0 ? void 0 : data.updateCustomerAddress) !== null && _b !== void 0 ? _b : {};
      logger["a" /* Logger */].debug('[Magento] update user address results:', results);
      error.value.update = null;
    } catch (err) {
      error.value.update = err;
      logger["a" /* Logger */].error('[Magento] update user address error:', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  const remove = async params => {
    var _a;
    logger["a" /* Logger */].debug('[Magento] remove user address:', params.address);
    let results = null;
    try {
      loading.value = true;
      const {
        data
      } = await context.$magento.api.deleteCustomerAddress(params.address.id, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      results = !!data.deleteCustomerAddress;
      logger["a" /* Logger */].debug('[Magento] remove user address results:', results);
      error.value.remove = null;
    } catch (err) {
      error.value.remove = err;
      logger["a" /* Logger */].error('[Magento] remove user address error:', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  return {
    error,
    loading,
    load,
    save,
    update,
    remove
  };
}

/* harmony default export */ var composables_useAddresses = (useAddresses);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useUserAddress; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./modules/customer/composables/useUser/index.ts + 2 modules
var useUser = __webpack_require__(17);

// EXTERNAL MODULE: ./modules/customer/helpers/userAddressManipulator.ts
var userAddressManipulator = __webpack_require__(28);

// EXTERNAL MODULE: ./composables/utils/mask.ts
var mask = __webpack_require__(16);

// CONCATENATED MODULE: ./modules/customer/composables/useUserAddress/commands/createCustomerAddressCommand.ts
const createCustomerAddressCommand = {
  execute: async (context, params, customQuery, customHeaders) => {
    var _a;
    const {
      data
    } = await context.app.$vsf.$magento.api.createCustomerAddress(params, customQuery, customHeaders);
    return (_a = data === null || data === void 0 ? void 0 : data.createCustomerAddress) !== null && _a !== void 0 ? _a : {};
  }
};
// CONCATENATED MODULE: ./modules/customer/composables/useUserAddress/commands/deleteCustomerAddressCommand.ts
const deleteCustomerAddressCommand = {
  execute: async (context, address, customQuery, customHeaders) => {
    var _a;
    const {
      data
    } = await context.app.$vsf.$magento.api.deleteCustomerAddress(address.id, customQuery, customHeaders);
    return (_a = data === null || data === void 0 ? void 0 : data.deleteCustomerAddress) !== null && _a !== void 0 ? _a : {};
  }
};
// CONCATENATED MODULE: ./modules/customer/composables/useUserAddress/commands/updateCustomerAddressCommand.ts
const updateCustomerAddressCommand = {
  execute: async (context, params, customQuery, customHeaders) => {
    var _a;
    const {
      data
    } = await context.app.$vsf.$magento.api.updateCustomerAddress(params, customQuery, customHeaders);
    return (_a = data === null || data === void 0 ? void 0 : data.updateCustomerAddress) !== null && _a !== void 0 ? _a : {};
  }
};
// CONCATENATED MODULE: ./modules/customer/composables/useUserAddress/useUserAddress.ts

// CONCATENATED MODULE: ./modules/customer/composables/useUserAddress/index.ts








/**
 * Allows loading and manipulating addresses of the current user.
 *
 * See the {@link UseUserAddressInterface} for a list of methods and values available in this composable.
 */
function useUserAddress() {
  const loading = Object(runtime["l" /* ref */])(false);
  const shipping = Object(runtime["l" /* ref */])({});
  const error = Object(runtime["l" /* ref */])({
    addAddress: null,
    deleteAddress: null,
    updateAddress: null,
    load: null,
    setDefaultAddress: null
  });
  const {
    user,
    load: loadUser
  } = Object(useUser["b" /* useUser */])();
  const context = Object(runtime["s" /* useContext */])();
  const addAddress = async ({
    address,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('useUserAddress.addAddress', Object(mask["a" /* default */])(address));
    let result = {};
    try {
      loading.value = true;
      const customerAddressInput = Object(userAddressManipulator["a" /* transformUserCreateAddressInput */])({
        address,
        shipping: shipping.value
      });
      result = await createCustomerAddressCommand.execute(context, customerAddressInput, customQuery, customHeaders);
      error.value.addAddress = null;
    } catch (err) {
      error.value.addAddress = err;
      logger["a" /* Logger */].error('useUserAddress/addAddress', err);
    } finally {
      loading.value = false;
    }
    logger["a" /* Logger */].debug('[Result]:', {
      result: Object(mask["a" /* default */])(result)
    });
    return result;
  };
  const deleteAddress = async (address, customQuery, customHeaders) => {
    logger["a" /* Logger */].debug('useUserAddress.deleteAddress', address);
    let result = {};
    try {
      loading.value = true;
      result = await deleteCustomerAddressCommand.execute(context, address, customQuery, customHeaders);
      error.value.deleteAddress = null;
    } catch (err) {
      error.value.deleteAddress = err;
      logger["a" /* Logger */].error('useUserAddress/deleteAddress', err);
    } finally {
      loading.value = false;
    }
    logger["a" /* Logger */].debug('[Result]:', {
      result: Object(mask["a" /* default */])(result)
    });
    return result;
  };
  const updateAddress = async ({
    address,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('useUserAddress.updateAddress', Object(mask["a" /* default */])(address));
    let result = {};
    try {
      loading.value = true;
      const customerAddressInput = Object(userAddressManipulator["c" /* transformUserUpdateAddressInput */])({
        address,
        shipping: shipping.value
      });
      result = await updateCustomerAddressCommand.execute(context, customerAddressInput, customQuery, customHeaders);
      error.value.updateAddress = null;
    } catch (err) {
      error.value.updateAddress = err;
      logger["a" /* Logger */].error('useUserAddress/updateAddress', err);
    } finally {
      loading.value = false;
    }
    logger["a" /* Logger */].debug('[Result]:', {
      result: Object(mask["a" /* default */])(result)
    });
    return result;
  };
  const load = async (force = false) => {
    var _a;
    logger["a" /* Logger */].debug('useUserAddress.load');
    try {
      loading.value = true;
      if (force || !((_a = user === null || user === void 0 ? void 0 : user.value) === null || _a === void 0 ? void 0 : _a.id)) {
        await loadUser();
      }
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useUserAddress/load', err);
    } finally {
      loading.value = false;
    }
    return user === null || user === void 0 ? void 0 : user.value;
  };
  const setDefaultAddress = async ({
    address,
    customQuery,
    customHeaders
  }) => {
    logger["a" /* Logger */].debug('useUserAddress.setDefaultAddress', Object(mask["a" /* default */])(address));
    let result = {};
    try {
      loading.value = true;
      const updateAddressInput = Object(userAddressManipulator["c" /* transformUserUpdateAddressInput */])({
        address,
        shipping: shipping.value,
        customQuery,
        customHeaders
      });
      result = await updateCustomerAddressCommand.execute(context, updateAddressInput, customQuery, customHeaders);
      error.value.setDefaultAddress = null;
    } catch (err) {
      error.value.setDefaultAddress = err;
      logger["a" /* Logger */].error('useUserAddress/setDefaultAddress', err);
    } finally {
      loading.value = false;
    }
    logger["a" /* Logger */].debug('[Result]:', {
      result: Object(mask["a" /* default */])(result)
    });
    return result;
  };
  return {
    addAddress,
    deleteAddress,
    updateAddress,
    load,
    setDefaultAddress,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useUserAddress = __webpack_exports__["a"] = (useUserAddress);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=3978c74c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bar"},[_vm._ssrNode("<div>","</div>",[_vm._t("back",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",class:{ 'display-none': !_vm.back },attrs:{"aria-label":'back',"type":"button"},on:{"click":function($event){return _vm.$emit('click:back')}}},[_c('SfIcon',{attrs:{"icon":"chevron_left","size":"0.875rem"}})],1)]})],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("title",function(){return [_c('div',{staticClass:"sf-bar__title"},[_vm._v(_vm._s(_vm.title))])]},null,{ title: _vm.title })],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._t("close",function(){return [_c('SfButton',{staticClass:"sf-button--pure sf-bar__icon",class:{ 'display-none': !_vm.close },attrs:{"aria-label":'close',"type":"button"},on:{"click":function($event){return _vm.$emit('click:close')}}},[_c('SfIcon',{attrs:{"icon":"cross","size":"14px"}})],1)]})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=template&id=3978c74c&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 5 modules
var SfIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfBarvue_type_script_lang_js_ = ({
  name: "SfBar",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBar_SfBarvue_type_script_lang_js_ = (SfBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(226)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBar_SfBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "762277f4"
  
)

/* harmony default export */ var SfBar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useShipping

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/checkout/composables/useShipping/useShipping.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useShipping/index.ts



/**
 * Allows loading the shipping information for
 * the current cart and saving (selecting) other shipping information for the
 * same cart.
 *
 * See the {@link UseShippingInterface} for a list of methods and values available in this composable.
 */
function useShipping() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    save: null
  });
  const {
    cart,
    load: loadCart
  } = Object(useCart["a" /* default */])();
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const load = async (params = {}) => {
    var _a;
    logger["a" /* Logger */].debug('useShipping.load');
    let shippingInfo = null;
    try {
      loading.value = true;
      if (((_a = cart === null || cart === void 0 ? void 0 : cart.value) === null || _a === void 0 ? void 0 : _a.shipping_addresses.length) === 0) {
        await loadCart(params);
      }
      [shippingInfo] = cart.value.shipping_addresses;
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useShipping/load', err);
    } finally {
      loading.value = false;
    }
    return shippingInfo;
  };
  const save = async ({
    shippingDetails
  }) => {
    logger["a" /* Logger */].debug('useShipping.save');
    let shippingInfo = null;
    try {
      loading.value = true;
      const {
        id
      } = cart.value;
      const {
        apartment,
        neighborhood,
        extra,
        customerAddressId,
        ...address
      } = shippingDetails;
      const shippingData = customerAddressId ? {
        customer_address_id: customerAddressId
      } : {
        address: {
          ...address,
          street: [address.street, apartment, neighborhood, extra].filter(Boolean)
        }
      };
      const shippingAddressInput = {
        cart_id: id,
        shipping_addresses: [{
          ...shippingData
        }]
      };
      const {
        data
      } = await app.$vsf.$magento.api.setShippingAddressesOnCart(shippingAddressInput);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      [shippingInfo] = data.setShippingAddressesOnCart.cart.shipping_addresses;
      error.value.save = null;
    } catch (err) {
      error.value.save = err;
      logger["a" /* Logger */].error('useShipping/save', err);
    } finally {
      loading.value = false;
    }
    return shippingInfo;
  };
  return {
    load,
    save,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useShipping = __webpack_exports__["a"] = (useShipping);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useUserOrder; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/customer/composables/useUserOrder/useUserOrder.ts

// CONCATENATED MODULE: ./modules/customer/composables/useUserOrder/index.ts


/**
 * Allows fetching customer orders.
 *
 * See the {@link UseUserOrderInterface} for a list of methods and values available in this composable.
 */
function useUserOrder() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null
  });
  const search = async params => {
    var _a, _b, _c;
    let results = null;
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento] search user orders', {
        params
      });
      const {
        data
      } = await app.$vsf.$magento.api.customerOrders(params, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      results = (_c = (_b = data === null || data === void 0 ? void 0 : data.customer) === null || _b === void 0 ? void 0 : _b.orders) !== null && _c !== void 0 ? _c : null;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useRelatedProducts/search', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  return {
    search,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useUserOrder = (useUserOrder);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCartView; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/lodash-es/debounce.js + 4 modules
var debounce = __webpack_require__(279);

// EXTERNAL MODULE: ./modules/checkout/getters/cartGetters.ts
var cartGetters = __webpack_require__(22);

// EXTERNAL MODULE: ./composables/index.ts + 39 modules
var composables = __webpack_require__(7);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// EXTERNAL MODULE: ./modules/customer/composables/useUser/index.ts + 2 modules
var useUser = __webpack_require__(17);

// EXTERNAL MODULE: ./modules/GraphQL/types.ts
var types = __webpack_require__(23);

// CONCATENATED MODULE: ./modules/checkout/composables/useCartView/useCartView.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useCartView/index.ts
/* eslint-disable @typescript-eslint/no-unsafe-argument */







/**
 * Allows loading and manipulating cart view.
 *
 * See the {@link UseCartViewInterface} for a list of methods and values available in this composable.
 */
function useCartView() {
  const {
    localePath,
    app: {
      i18n
    }
  } = Object(runtime["s" /* useContext */])();
  const {
    initializeCheckout
  } = Object(composables["g" /* useExternalCheckout */])();
  const {
    getMagentoImage,
    imageSizes
  } = Object(composables["k" /* useImage */])();
  const router = Object(runtime["v" /* useRouter */])();
  const {
    getProductPath
  } = Object(composables["l" /* useProduct */])();
  const {
    cart,
    removeItem,
    updateItemQty,
    load: loadCart,
    loading
  } = Object(useCart["b" /* useCart */])();
  const {
    isAuthenticated
  } = Object(useUser["b" /* useUser */])();
  const {
    send: sendNotification,
    notifications
  } = Object(composables["o" /* useUiNotification */])();
  const products = Object(runtime["a" /* computed */])(() => cartGetters["a" /* default */].getItems(cart.value).filter(Boolean).map(item => {
    var _a;
    return {
      ...item,
      product: {
        ...item.product,
        ...[(_a = item.configured_variant) !== null && _a !== void 0 ? _a : {}],
        original_sku: item.product.sku
      }
    };
  }));
  const totals = Object(runtime["a" /* computed */])(() => cartGetters["a" /* default */].getTotals(cart.value));
  const discount = Object(runtime["a" /* computed */])(() => -cartGetters["a" /* default */].getDiscountAmount(cart.value));
  const totalItems = Object(runtime["a" /* computed */])(() => cartGetters["a" /* default */].getTotalItems(cart.value));
  const getAttributes = product => product.configurable_options || [];
  const getBundles = product => {
    var _a;
    return ((_a = product.bundle_options) === null || _a === void 0 ? void 0 : _a.map(b => b.values).flat()) || [];
  };
  const isRemoveModalVisible = Object(runtime["l" /* ref */])(false);
  const itemToRemove = Object(runtime["l" /* ref */])();
  Object(runtime["g" /* onMounted */])(() => {
    if (!cart.value.id) {
      loadCart();
    }
  });
  const goToCheckout = async () => {
    const redirectUrl = initializeCheckout({
      baseUrl: '/checkout/user-account'
    });
    await router.push(localePath(redirectUrl));
  };
  const showRemoveItemModal = ({
    product
  }) => {
    if (notifications.value.length > 0) {
      notifications.value[0].dismiss();
    }
    isRemoveModalVisible.value = true;
    itemToRemove.value = product;
  };
  const removeItemAndSendNotification = async product => {
    await removeItem({
      product
    });
    isRemoveModalVisible.value = false;
    sendNotification({
      id: Symbol('product_removed'),
      message: i18n.t('{0} has been successfully removed from your cart', {
        0: cartGetters["a" /* default */].getItemName(product)
      }),
      type: 'success',
      icon: 'check',
      persist: false,
      title: 'Product removed'
    });
  };
  const delayedUpdateItemQty = Object(debounce["a" /* default */])(params => updateItemQty(params), 1000);
  const isInStock = product => cartGetters["a" /* default */].getStockStatus(product) === types["a" /* ProductStockStatus */].InStock;
  return {
    showRemoveItemModal,
    removeItemAndSendNotification,
    delayedUpdateItemQty,
    goToCheckout,
    getAttributes,
    getBundles,
    isInStock,
    getMagentoImage,
    getProductPath,
    loading,
    isAuthenticated,
    products,
    isRemoveModalVisible,
    itemToRemove,
    totals,
    totalItems,
    imageSizes,
    discount,
    cartGetters: cartGetters["a" /* default */]
  };
}
/* harmony default export */ var composables_useCartView = (useCartView);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ __webpack_exports__["a"] = (toSource);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ __webpack_exports__["a"] = (overArg);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative["a" /* default */])(Object, 'create');
/* harmony default export */ var _nativeCreate = (nativeCreate);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}
/* harmony default export */ var _hashClear = (hashClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ var _hashDelete = (hashDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/* harmony default export */ var _hashGet = (hashGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : _hashHas_hasOwnProperty.call(data, key);
}
/* harmony default export */ var _hashHas = (hashHas);
// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? _hashSet_HASH_UNDEFINED : value;
  return this;
}
/* harmony default export */ var _hashSet = (hashSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
/* harmony default export */ var _Hash = (Hash);
// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map["a" /* default */] || _ListCache["a" /* default */])(),
    'string': new _Hash()
  };
}
/* harmony default export */ var _mapCacheClear = (mapCacheClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/* harmony default export */ var _isKeyable = (isKeyable);
// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/* harmony default export */ var _getMapData = (getMapData);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}
/* harmony default export */ var _mapCacheGet = (mapCacheGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}
/* harmony default export */ var _mapCacheHas = (mapCacheHas);
// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/* harmony default export */ var _mapCacheSet = (mapCacheSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
/* harmony default export */ var _MapCache = __webpack_exports__["a"] = (MapCache);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache["a" /* default */]();
  this.size = 0;
}
/* harmony default export */ var _stackClear = (stackClear);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
/* harmony default export */ var _stackDelete = (stackDelete);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
/* harmony default export */ var _stackGet = (stackGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
/* harmony default export */ var _stackHas = (stackHas);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache["a" /* default */]) {
    var pairs = data.__data__;
    if (!_Map["a" /* default */] || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache["a" /* default */](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
/* harmony default export */ var _stackSet = (stackSet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache["a" /* default */](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
/* harmony default export */ var _Stack = __webpack_exports__["a"] = (Stack);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=9977ff80&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentIs,_vm._g(_vm._b({tag:"component",staticClass:"sf-menu-item",attrs:{"data-testid":_vm.label}},'component',_vm.bind,false),_vm.$listeners),[_vm._t("icon"),_vm._v(" "),_vm._t("label",function(){return [_c('span',{staticClass:"sf-menu-item__label"},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label }),_vm._v(" "),_vm._t("count",function(){return [_c('span',{staticClass:"sf-menu-item__count"},[_vm._v(_vm._s(_vm.count))])]},null,{ count: _vm.count }),_vm._v(" "),_vm._t("mobile-nav-icon",function(){return [_c('SfIcon',{staticClass:"sf-menu-item__mobile-nav-icon smartphone-only",class:{ 'display-none': !_vm.icon },attrs:{"icon":_vm.icon,"size":"14px"}})]},null,{ icon: _vm.icon })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=template&id=9977ff80&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 5 modules
var SfIcon = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var SfMenuItemvue_type_script_lang_js_ = ({
  name: "SfMenuItem",
  components: {
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: [String, Array],
      default: "chevron_right"
    },
    count: {
      type: [String, Number],
      default: ""
    },
    link: {
      type: [String, Object],
      default: null
    }
  },
  computed: {
    bind() {
      const bind = {};
      if (this.link) {
        bind.link = this.link;
      } else {
        bind.class = "sf-button--pure";
      }
      return bind;
    },
    componentIs() {
      return this.link ? "SfLink" : "SfButton";
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfMenuItem_SfMenuItemvue_type_script_lang_js_ = (SfMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(225)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfMenuItem_SfMenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c703068"
  
)

/* harmony default export */ var SfMenuItem = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/utils/LoadWhenVisible.vue?vue&type=template&id=1df4d0b5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"root"},[(_vm.isVisible)?_vm._t("default"):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/utils/LoadWhenVisible.vue?vue&type=template&id=1df4d0b5&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/utils/LoadWhenVisible.vue?vue&type=script&lang=ts&

/* harmony default export */ var LoadWhenVisiblevue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'LoadWhenVisible',
  props: {
    options: {
      type: Object,
      default: () => ({
        rootMargin: '0px 0px 200px 0px'
      })
    }
  },
  setup({
    options
  }) {
    const isVisible = Object(runtime["l" /* ref */])(false);
    const root = Object(runtime["l" /* ref */])(null);
    let observer = null;
    if (false) {}
    Object(runtime["g" /* onMounted */])(() => {
      if (observer) {
        observer.observe(root.value);
      }
    });
    Object(runtime["h" /* onUnmounted */])(() => {
      if (observer) {
        observer.unobserve(root.value);
      }
    });
    return {
      root,
      isVisible
    };
  }
}));
// CONCATENATED MODULE: ./components/utils/LoadWhenVisible.vue?vue&type=script&lang=ts&
 /* harmony default export */ var utils_LoadWhenVisiblevue_type_script_lang_ts_ = (LoadWhenVisiblevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/utils/LoadWhenVisible.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  utils_LoadWhenVisiblevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0546ae09"
  
)

/* harmony default export */ var LoadWhenVisible = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: usePaymentProvider

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/checkout/composables/usePaymentProvider/commands/setPaymentMethodOnCartCommand.ts
const setPaymentMethodOnCartCommand = {
  execute: async (context, params) => {
    var _a, _b, _c;
    const {
      data
    } = await context.app.$vsf.$magento.api.setPaymentMethodOnCart(params, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    return (_c = (_b = data === null || data === void 0 ? void 0 : data.setPaymentMethodOnCart) === null || _b === void 0 ? void 0 : _b.cart.available_payment_methods) !== null && _c !== void 0 ? _c : [];
  }
};
// CONCATENATED MODULE: ./modules/checkout/composables/usePaymentProvider/commands/getAvailablePaymentMethodsCommand.ts
const getAvailablePaymentMethodsCommand = {
  execute: async (context, cartId, customQuery, customHeaders) => {
    var _a, _b;
    const {
      data
    } = await context.app.$vsf.$magento.api.getAvailablePaymentMethods({
      cartId
    }, customQuery, customHeaders);
    return (_b = (_a = data === null || data === void 0 ? void 0 : data.cart) === null || _a === void 0 ? void 0 : _a.available_payment_methods) !== null && _b !== void 0 ? _b : [];
  }
};
// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/checkout/composables/usePaymentProvider/usePaymentProvider.ts

// CONCATENATED MODULE: ./modules/checkout/composables/usePaymentProvider/index.ts





/**
 * Allows loading the available payment
 * methods for current cart, and selecting (saving) one of them.
 *
 * See the {@link UsePaymentProviderInterface} for a list of methods and values available in this composable.
 */
function usePaymentProvider() {
  const context = Object(runtime["s" /* useContext */])();
  const {
    cart
  } = Object(useCart["a" /* default */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    save: null
  });
  const save = async params => {
    logger["a" /* Logger */].debug('usePaymentProvider.save');
    let result = null;
    try {
      loading.value = true;
      const paymentMethodParams = {
        cart_id: cart.value.id,
        payment_method: {
          ...params.paymentMethod
        },
        customQuery: params.customQuery,
        customHeaders: params === null || params === void 0 ? void 0 : params.customHeaders
      };
      result = await setPaymentMethodOnCartCommand.execute(context, paymentMethodParams);
      error.value.save = null;
    } catch (err) {
      error.value.save = err;
      logger["a" /* Logger */].error('usePaymentProvider/save', err);
    } finally {
      loading.value = false;
    }
    logger["a" /* Logger */].debug('[Result]:', {
      result
    });
    return result;
  };
  const load = async (customQuery, customHeaders) => {
    logger["a" /* Logger */].debug('usePaymentProvider.load');
    let result = null;
    try {
      loading.value = true;
      result = await getAvailablePaymentMethodsCommand.execute(context, cart.value.id, customQuery, customHeaders);
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('usePaymentProvider/load', err);
    } finally {
      loading.value = false;
    }
    logger["a" /* Logger */].debug('[Result]:', {
      result
    });
    return result;
  };
  return {
    load,
    save,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_usePaymentProvider = __webpack_exports__["a"] = (usePaymentProvider);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useBilling

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/checkout/composables/useBilling/commands/saveBillingAddressCommand.ts

const saveBillingAddressCommand = {
  execute: async (context, cartId, billingDetails, customQuery, customHeaders) => {
    var _a, _b, _c;
    const {
      apartment,
      neighborhood,
      extra,
      sameAsShipping,
      customerAddressId,
      ...address
    } = billingDetails;
    const billingData = customerAddressId ? {
      customer_address_id: customerAddressId
    } : {
      address: {
        ...address,
        street: [address.street, apartment, neighborhood, extra].filter(Boolean)
      },
      same_as_shipping: sameAsShipping
    };
    const setBillingAddressOnCartInput = {
      cart_id: cartId,
      billing_address: billingData
    };
    const {
      data
    } = await context.$vsf.$magento.api.setBillingAddressOnCart(setBillingAddressOnCartInput, customQuery, customHeaders);
    logger["a" /* Logger */].debug('[Result]:', {
      data
    });
    return (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.setBillingAddressOnCart) === null || _a === void 0 ? void 0 : _a.cart) === null || _b === void 0 ? void 0 : _b.billing_address) !== null && _c !== void 0 ? _c : null;
  }
};
// EXTERNAL MODULE: ./modules/checkout/composables/useShippingProvider/index.ts + 2 modules
var useShippingProvider = __webpack_require__(49);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/checkout/composables/useBilling/useBilling.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useBilling/index.ts





/**
 * Allows loading and saving billing information
 * of the current cart.
 *
 * See the {@link UseBillingInterface} for a list of methods and values available in this composable.
 */
function useBilling() {
  const context = Object(runtime["s" /* useContext */])();
  const {
    load: loadShippingAddress,
    save: saveShippingAddress
  } = Object(useShippingProvider["a" /* default */])();
  const {
    cart,
    load: loadCart
  } = Object(useCart["a" /* default */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    load: null,
    save: null
  });
  const load = async ({
    customQuery = null,
    customHeaders = {}
  } = {}) => {
    var _a, _b, _c;
    logger["a" /* Logger */].debug('useBilling.load');
    let billingInfo = null;
    try {
      loading.value = true;
      if (!((_a = cart === null || cart === void 0 ? void 0 : cart.value) === null || _a === void 0 ? void 0 : _a.billing_address)) {
        await loadCart({
          customQuery,
          customHeaders
        });
      }
      billingInfo = (_c = (_b = cart === null || cart === void 0 ? void 0 : cart.value) === null || _b === void 0 ? void 0 : _b.billing_address) !== null && _c !== void 0 ? _c : null;
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      logger["a" /* Logger */].error('useBilling/load', err);
    } finally {
      loading.value = false;
    }
    return billingInfo;
  };
  const save = async ({
    billingDetails,
    customQuery = null,
    customHeaders = {}
  }) => {
    logger["a" /* Logger */].debug('useBilling.save');
    let billingInfo = null;
    try {
      loading.value = true;
      billingInfo = await saveBillingAddressCommand.execute(context, cart.value.id, billingDetails, customQuery, customHeaders);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      /**
       * This is a workaround needed due to Magento GraphQL API
       * cleaning the Shipping method after defining the billing address
       */
      const shippingMethod = await loadShippingAddress();
      logger["a" /* Logger */].debug('[Magento]: Defining the shipping method as:', JSON.stringify(shippingMethod, null, 2));
      await saveShippingAddress({
        shippingMethod: {
          carrier_code: shippingMethod.carrier_code,
          method_code: shippingMethod.method_code
        }
      });
      /**
       * End of GraphQL Workaround
       */
      error.value.save = null;
    } catch (err) {
      error.value.save = err;
      logger["a" /* Logger */].error('useBilling/save', err);
    } finally {
      loading.value = false;
    }
    return billingInfo;
  };
  return {
    load,
    save,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useBilling = __webpack_exports__["a"] = (useBilling);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useMakeOrder

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/checkout/composables/useMakeOrder/commands/placeOrderCommand.ts
const placeOrderCommand = {
  execute: async (context, cartId, params) => {
    var _a, _b;
    const {
      data
    } = await context.app.$vsf.$magento.api.placeOrder({
      cart_id: cartId
    }, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
    return (_b = data === null || data === void 0 ? void 0 : data.placeOrder) !== null && _b !== void 0 ? _b : null;
  }
};
// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// CONCATENATED MODULE: ./modules/checkout/composables/useMakeOrder/useMakeOrder.ts

// CONCATENATED MODULE: ./modules/checkout/composables/useMakeOrder/index.ts




/**
 * Allows making an order from a cart.
 *
 * See the {@link UseMakeOrderInterface} for a list of methods and values available in this composable.
 */
function useMakeOrder() {
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    make: null
  });
  const {
    cart
  } = Object(useCart["a" /* default */])();
  const context = Object(runtime["s" /* useContext */])();
  const make = async params => {
    logger["a" /* Logger */].debug('useMakeOrder.make');
    let placedOrder = null;
    try {
      loading.value = true;
      placedOrder = await placeOrderCommand.execute(context, cart.value.id, params);
      error.value.make = null;
    } catch (err) {
      error.value.make = err;
      logger["a" /* Logger */].error('useMakeOrder.make', err);
    } finally {
      loading.value = false;
    }
    return placedOrder;
  };
  return {
    make,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useMakeOrder = __webpack_exports__["a"] = (useMakeOrder);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/* harmony default export */ var _baseTimes = (baseTimes);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 2 modules
var isTypedArray = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(isArray["a" /* default */])(value),
    isArg = !isArr && Object(isArguments["a" /* default */])(value),
    isBuff = !isArr && !isArg && Object(isBuffer["a" /* default */])(value),
    isType = !isArr && !isArg && !isBuff && Object(isTypedArray["a" /* default */])(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? _baseTimes(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    Object(_isIndex["a" /* default */])(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ var _arrayLikeKeys = __webpack_exports__["a"] = (arrayLikeKeys);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCountrySearch; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./composables/useCountrySearch/useCountrySearch.ts

// CONCATENATED MODULE: ./composables/useCountrySearch/index.ts


/**
 * Allows fetching a list of countries or a single country by ID
 *
 * See the {@link UseCountrySearchInterface} for a list of methods and values available in this composable.
 */
function useCountrySearch() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null,
    load: null
  });
  const search = async params => {
    var _a, _b, _c;
    let results = null;
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento]: Search country information based on', {
        params
      });
      const {
        data
      } = await app.$vsf.$magento.api.country(params.id, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, (_b = params === null || params === void 0 ? void 0 : params.customHeaders) !== null && _b !== void 0 ? _b : null);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      results = (_c = data === null || data === void 0 ? void 0 : data.country) !== null && _c !== void 0 ? _c : null;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useCountrySearch/search', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  const load = async () => {
    var _a;
    let results = [];
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento]: Load available countries on store');
      const {
        data
      } = await app.$vsf.$magento.api.countries();
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      results = (_a = data === null || data === void 0 ? void 0 : data.countries) !== null && _a !== void 0 ? _a : [];
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useCountrySearch/load', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  return {
    load,
    search,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}

/* harmony default export */ var composables_useCountrySearch = (useCountrySearch);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useForgotPassword; });

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/customer/composables/useForgotPassword/useForgotPassword.ts

// CONCATENATED MODULE: ./modules/customer/composables/useForgotPassword/index.ts


/**
 * Allows to request a password reset email and to set a new password to a user.
 *
 * Se the {@link UseForgotPasswordInterface} for a list of methods and values available in this composable.
 */
function useForgotPassword() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const result = Object(runtime["l" /* ref */])({
    resetPasswordResult: null,
    setNewPasswordResult: null
  });
  const error = Object(runtime["l" /* ref */])({
    request: null,
    setNew: null
  });
  // eslint-disable-next-line @typescript-eslint/require-await,consistent-return
  const resetPassword = async resetPasswordParams => {
    var _a, _b;
    logger["a" /* Logger */].debug('useForgotPassword/request', resetPasswordParams.email);
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento]: Reset user password', resetPasswordParams);
      // eslint-disable-next-line max-len
      const {
        data
      } = await app.context.$vsf.$magento.api.requestPasswordResetEmail({
        email: resetPasswordParams.email,
        recaptchaToken: resetPasswordParams.recaptchaToken
      }, (_a = resetPasswordParams === null || resetPasswordParams === void 0 ? void 0 : resetPasswordParams.customQuery) !== null && _a !== void 0 ? _a : null, resetPasswordParams === null || resetPasswordParams === void 0 ? void 0 : resetPasswordParams.customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      error.value.request = data;
      result.value.resetPasswordResult = (_b = data === null || data === void 0 ? void 0 : data.requestPasswordResetEmail) !== null && _b !== void 0 ? _b : false;
    } catch (err) {
      error.value.request = err;
      logger["a" /* Logger */].error('useForgotPassword/request', err);
    } finally {
      loading.value = false;
    }
  };
  const setNewPassword = async setNewPasswordParams => {
    var _a, _b;
    logger["a" /* Logger */].debug('useForgotPassword/setNew', setNewPasswordParams);
    try {
      loading.value = true;
      const {
        data
      } = await app.context.$vsf.$magento.api.resetPassword({
        email: setNewPasswordParams.email,
        newPassword: setNewPasswordParams.newPassword,
        resetPasswordToken: setNewPasswordParams.tokenValue,
        recaptchaToken: setNewPasswordParams.recaptchaToken
      }, (_a = setNewPasswordParams === null || setNewPasswordParams === void 0 ? void 0 : setNewPasswordParams.customQuery) !== null && _a !== void 0 ? _a : null, setNewPasswordParams === null || setNewPasswordParams === void 0 ? void 0 : setNewPasswordParams.customHeaders);
      logger["a" /* Logger */].debug('[Result]:', {
        data
      });
      result.value.setNewPasswordResult = (_b = data === null || data === void 0 ? void 0 : data.resetPassword) !== null && _b !== void 0 ? _b : false;
      error.value.setNew = null;
    } catch (err) {
      error.value.setNew = err;
      logger["a" /* Logger */].error('useForgotPassword/setNew', err);
    } finally {
      loading.value = false;
    }
  };
  return {
    request: resetPassword,
    setNew: setNewPassword,
    loading: Object(runtime["k" /* readonly */])(loading),
    result: Object(runtime["k" /* readonly */])(result),
    error: Object(runtime["k" /* readonly */])(error)
  };
}

/* harmony default export */ var composables_useForgotPassword = (useForgotPassword);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useRelatedProducts

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/catalog/product/composables/useRelatedProducts/useRelatedProducts.ts

// CONCATENATED MODULE: ./modules/catalog/product/composables/useRelatedProducts/index.ts


/**
 * Allows searching for related products
 * with params for sort, filter and pagination.
 *
 * See the {@link UseRelatedProductsInterface} for a list of methods and values available in this composable.
 */
function useRelatedProducts() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null
  });
  const search = async params => {
    var _a, _b, _c;
    const {
      customQuery,
      ...searchParams
    } = params;
    let results = null;
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento] Load related products based on ', {
        searchParams
      });
      const {
        data
      } = await app.$vsf.$magento.api.relatedProducts(searchParams, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      logger["a" /* Logger */].debug('[Result] Related products:', {
        data
      });
      results = (_c = (_b = data.products) === null || _b === void 0 ? void 0 : _b.items[0]) === null || _c === void 0 ? void 0 : _c.related_products;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useRelatedProducts/search', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  return {
    search,
    error: Object(runtime["k" /* readonly */])(error),
    loading: Object(runtime["k" /* readonly */])(loading)
  };
}

/* harmony default export */ var composables_useRelatedProducts = __webpack_exports__["a"] = (useRelatedProducts);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: useUpsellProducts

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/catalog/product/composables/useUpsellProducts/useUpsellProducts.ts

// CONCATENATED MODULE: ./modules/catalog/product/composables/useUpsellProducts/index.ts


/**
 * Allows loading upsell products.
 *
 * See the {@link UseUpsellProductsInterface} for a list of methods and values available in this composable.
 */
function useUpsellProducts() {
  const {
    app
  } = Object(runtime["s" /* useContext */])();
  const loading = Object(runtime["l" /* ref */])(false);
  const error = Object(runtime["l" /* ref */])({
    search: null
  });
  const search = async params => {
    var _a, _b, _c;
    const {
      customQuery,
      ...searchParams
    } = params;
    let results = null;
    try {
      loading.value = true;
      logger["a" /* Logger */].debug('[Magento] Load upsell products based on ', {
        searchParams
      });
      const {
        data
      } = await app.$vsf.$magento.api.upsellProducts(searchParams, (_a = params === null || params === void 0 ? void 0 : params.customQuery) !== null && _a !== void 0 ? _a : null, params === null || params === void 0 ? void 0 : params.customHeaders);
      logger["a" /* Logger */].debug('[Result] Upsell products:', {
        data
      });
      results = (_c = (_b = data.products) === null || _b === void 0 ? void 0 : _b.items[0]) === null || _c === void 0 ? void 0 : _c.upsell_products;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      logger["a" /* Logger */].error('useUpsellProducts/search', err);
    } finally {
      loading.value = false;
    }
    return results;
  };
  return {
    search,
    loading: Object(runtime["k" /* readonly */])(loading),
    error: Object(runtime["k" /* readonly */])(error)
  };
}
/* harmony default export */ var composables_useUpsellProducts = __webpack_exports__["a"] = (useUpsellProducts);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useCategoryStore; });

// EXTERNAL MODULE: external "pinia"
var external_pinia_ = __webpack_require__(9);

// CONCATENATED MODULE: ./modules/catalog/category/stores/graphql/categoryList.gql.ts
const fragmentCategory = `
  fragment CategoryFields on CategoryTree {
    is_anchor
    name
    position
    product_count
    uid
    url_path
    url_suffix
    include_in_menu
  }
`;
/* harmony default export */ var categoryList_gql = (`
  query categoryList {
    categories {
      items {
        ...CategoryFields
        children {
          ...CategoryFields
          children {
            ...CategoryFields
            children {
              ...CategoryFields
            }
          }
        }
      }
    }
  }
  ${fragmentCategory}
`);
// CONCATENATED MODULE: ./modules/catalog/category/stores/category.ts


const useCategoryStore = Object(external_pinia_["defineStore"])('category', {
  state: () => ({
    rawCategories: null
  }),
  actions: {
    async load() {
      var _a;
      const {
        data
      } = await this.$nuxt.app.$vsf.$magento.api.customQuery({
        query: categoryList_gql
      });
      this.rawCategories = (_a = data === null || data === void 0 ? void 0 : data.categories) !== null && _a !== void 0 ? _a : null;
    }
  },
  getters: {
    categories(state) {
      var _a;
      if (state.rawCategories === null) {
        return null;
      }
      return (_a = state.rawCategories) === null || _a === void 0 ? void 0 : _a.items[0];
    }
  }
});

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPageOptions; });
const perPageOptions = [10, 20, 50];

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 113 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(65);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(250);
var combineURLs = __webpack_require__(251);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("follow-redirects");

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }
  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };
  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;

module.exports = defu;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/product_placeholder.6d9cbdf.svg";

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;
  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;
  if (protoCheck) {
    return true;
  }
  const _encrypted = req.connection ? req.connection.encrypted : void 0;
  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;
  if (encryptedCheck) {
    return true;
  }
  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }
  return false;
}
module.exports = isHTTPS;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ __webpack_exports__["a"] = (stubFalse);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/* harmony default export */ __webpack_exports__["a"] = (cloneBuffer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 148 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"@vue-storefront/magento-theme\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"@vue-storefront/magento-theme\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"Magento2 Integration for Vue Storefront 2\"},{\"hid\":\"theme-color\",\"name\":\"theme-color\",\"content\":\"#5ECE7B\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"@vue-storefront/magento-theme\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"@vue-storefront/magento-theme\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"Magento2 Integration for Vue Storefront 2\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.87f449.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.87f449.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.243c0b66.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-dompurify");

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=a8128fc2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-sidebar",class:{ 'sf-sidebar--right': _vm.position === 'right' }},[_c('SfOverlay',{attrs:{"visible":_vm.visibleOverlay}}),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.transitionName,"appear":""}},[(_vm.visible && _vm.isOpen)?_c('aside',{directives:[{name:"focus-trap",rawName:"v-focus-trap"},{name:"click-outside",rawName:"v-click-outside",value:(_vm.checkPersistence),expression:"checkPersistence"}],ref:"asideContent",staticClass:"sf-sidebar__aside"},[_vm._t("bar",function(){return [_c('SfBar',{staticClass:"smartphone-only",attrs:{"title":_vm.title,"back":true},on:{"click:back":_vm.close}})]}),_vm._v(" "),_vm._t("circle-icon",function(){return [_c('SfCircleIcon',{staticClass:"sf-sidebar__circle-icon desktop-only",class:{ 'display-none': !_vm.button },attrs:{"icon-size":"12px","aria-label":'Close sidebar',"icon":"cross"},on:{"click":_vm.close}})]},null,{ close: _vm.close, button: _vm.button }),_vm._v(" "),_c('div',{staticClass:"sf-sidebar__top",class:{ 'display-none': !_vm.title || (!_vm.title && !_vm.hasTop) }},[_vm._t("title",function(){return [_c('SfHeading',{staticClass:"\n              sf-heading--left sf-heading--no-underline\n              sf-sidebar__title\n              desktop-only\n            ",class:{ 'display-none': !_vm.title },attrs:{"title":_vm.title,"description":_vm.subtitle,"level":_vm.headingLevel}})]},null,{ title: _vm.title, subtitle: _vm.subtitle, headingLevel: _vm.headingLevel }),_vm._v(" "),_vm._t("content-top")],2),_vm._v(" "),_c('div',{staticClass:"sf-sidebar__content"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"sf-sidebar__bottom",class:{ 'display-none': !_vm.hasBottom }},[_vm._t("content-bottom")],2)],2):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=template&id=a8128fc2&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js + 1 modules
var focus_trap_directive = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js
var click_outside_directive = __webpack_require__(273);

// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBar/SfBar.vue + 4 modules
var SfBar = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var SfSidebarvue_type_script_lang_js_ = ({
  name: "SfSidebar",
  directives: {
    focusTrap: focus_trap_directive["a" /* focusTrap */],
    clickOutside: click_outside_directive["a" /* clickOutside */]
  },
  components: {
    SfBar: SfBar["a" /* default */],
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfOverlay: SfOverlay["a" /* default */],
    SfHeading: SfHeading["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 3
    },
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    persistent: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left",
      validator: value => ["left", "right"].includes(value)
    }
  },
  data() {
    return {
      transition: this.position,
      isOpen: this.visible
    };
  },
  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },
    transitionName() {
      return "sf-slide-" + this.transition;
    },
    hasTop() {
      return this.$slots.hasOwnProperty("content-top");
    },
    hasBottom() {
      return this.$slots.hasOwnProperty("content-bottom");
    }
  },
  watch: {
    visible: {
      handler(value) {
        if (!check_environment["a" /* isClient */]) return;
        if (value) {
          this.isOpen = true;
          this.transition = this.position;
          this.$nextTick(() => {
            const sidebarContent = document.getElementsByClassName("sf-sidebar__content")[0];
            Object(external_body_scroll_lock_["disableBodyScroll"])(sidebarContent);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
          document.removeEventListener("keydown", this.keydownHandler);
          this.isOpen = false;
        }
      },
      immediate: true
    },
    isOpen: {
      // handle out animation for async load component
      handler(value) {
        if (!check_environment["a" /* isClient */]) return;
        if (!value) {
          this.transition = this.position === "right" ? "left" : "right";
        }
      }
    }
  },
  beforeDestroy() {
    Object(external_body_scroll_lock_["clearAllBodyScrollLocks"])();
  },
  methods: {
    close() {
      this.isOpen = false;
      this.$emit("close");
    },
    checkPersistence() {
      if (!this.persistent) this.close();
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSidebar_SfSidebarvue_type_script_lang_js_ = (SfSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfSidebar_SfSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6b6c867a"
  
)

/* harmony default export */ var SfSidebar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=2b93b22c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfInput',_vm._g(_vm._b({directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-search-bar",attrs:{"type":"search","name":"search","value":_vm.value,"placeholder":_vm.placeholder,"icon":_vm.icon},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('input', _vm.value)}},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_vm._t("icon",null,null,{ icon: _vm.icon })]},proxy:true}],null,true)},'SfInput',_vm.$attrs,false),_vm.listeners))}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=template&id=2b93b22c&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfInput/SfInput.vue + 4 modules
var SfInput = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfSearchBarvue_type_script_lang_js_ = ({
  name: "SfSearchBar",
  components: {
    SfInput: SfInput["a" /* default */]
  },
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String],
      default: null
    },
    icon: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        "keyup.esc": () => this.$emit("input", ""),
        blur: () => this.$emit("blur"),
        "click:icon": () => this.$emit("click:icon", this.value)
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfSearchBar_SfSearchBarvue_type_script_lang_js_ = (SfSearchBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(232)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfSearchBar_SfSearchBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "54230838"
  
)

/* harmony default export */ var SfSearchBar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(262);


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (() => {});

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const middleware = () => {
  _helpers_logger__WEBPACK_IMPORTED_MODULE_0__[/* Logger */ "a"].error('Please implement vendor-specific checkout.js middleware in the \'middleware\' directory to block access to checkout steps when customer did not yet complete previous steps');
};
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const middleware = context => {
  if (!context.app.$vsf.$magento.config.state.getCustomerToken()) {
    const homepage = context.localeRoute({
      name: 'home'
    });
    context.redirect(homepage);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stores_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const urlResolverMiddleware = async context => {
  var _a;
  const pageStore = Object(_stores_page__WEBPACK_IMPORTED_MODULE_0__[/* usePageStore */ "a"])();
  const {
    path
  } = context.route;
  const clearUrl = path.replace(/[a-z]+\/[cp|]\//gi, '').replace(`/${context.i18n.locale}`, '');
  _helpers_logger__WEBPACK_IMPORTED_MODULE_1__[/* Logger */ "a"].debug('middleware/url-resolver', clearUrl);
  const {
    data,
    errors
  } = await context.app.$vsf.$magento.api.route(clearUrl);
  _helpers_logger__WEBPACK_IMPORTED_MODULE_1__[/* Logger */ "a"].debug('middleware/url-resolver/result', {
    data,
    errors
  });
  const results = (_a = data === null || data === void 0 ? void 0 : data.route) !== null && _a !== void 0 ? _a : null;
  if (!results || (errors === null || errors === void 0 ? void 0 : errors.length)) context.error({
    statusCode: 404
  });
  pageStore.$patch(state => {
    state.routeData = results;
  });
};
/* harmony default export */ __webpack_exports__["default"] = (urlResolverMiddleware);

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_id_2e13fdd7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_id_2e13fdd7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_id_2e13fdd7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_id_2e13fdd7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfLink_vue_vue_type_style_index_0_id_2e13fdd7_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_id_3267e628_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_id_3267e628_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_id_3267e628_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_id_3267e628_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfButton_vue_vue_type_style_index_0_id_3267e628_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_1015fe80_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_1015fe80_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_1015fe80_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_1015fe80_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_error_vue_vue_type_style_index_0_id_1015fe80_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account": [
		153,
		9,
		0
	],
	"./account.js": [
		153,
		9,
		0
	],
	"./add_to_cart": [
		154,
		9,
		1
	],
	"./add_to_cart.js": [
		154,
		9,
		1
	],
	"./added_to_cart": [
		155,
		9,
		2
	],
	"./added_to_cart.js": [
		155,
		9,
		2
	],
	"./arrow_down": [
		156,
		9,
		3
	],
	"./arrow_down.js": [
		156,
		9,
		3
	],
	"./arrow_left": [
		157,
		9,
		4
	],
	"./arrow_left.js": [
		157,
		9,
		4
	],
	"./arrow_right": [
		158,
		9,
		5
	],
	"./arrow_right.js": [
		158,
		9,
		5
	],
	"./arrow_top": [
		159,
		9,
		6
	],
	"./arrow_top.js": [
		159,
		9,
		6
	],
	"./check": [
		160,
		9,
		7
	],
	"./check.js": [
		160,
		9,
		7
	],
	"./chevron_down": [
		161,
		9,
		8
	],
	"./chevron_down.js": [
		161,
		9,
		8
	],
	"./chevron_left": [
		162,
		9,
		9
	],
	"./chevron_left.js": [
		162,
		9,
		9
	],
	"./chevron_right": [
		163,
		9,
		10
	],
	"./chevron_right.js": [
		163,
		9,
		10
	],
	"./chevron_up": [
		164,
		9,
		11
	],
	"./chevron_up.js": [
		164,
		9,
		11
	],
	"./clock": [
		165,
		9,
		12
	],
	"./clock.js": [
		165,
		9,
		12
	],
	"./credits": [
		166,
		9,
		13
	],
	"./credits.js": [
		166,
		9,
		13
	],
	"./cross": [
		167,
		9,
		14
	],
	"./cross.js": [
		167,
		9,
		14
	],
	"./drag": [
		168,
		9,
		15
	],
	"./drag.js": [
		168,
		9,
		15
	],
	"./empty_cart": [
		169,
		9,
		16
	],
	"./empty_cart.js": [
		169,
		9,
		16
	],
	"./empty_cart.svg": [
		267,
		7,
		60
	],
	"./error": [
		170,
		9,
		17
	],
	"./error.js": [
		170,
		9,
		17
	],
	"./error.svg": [
		268,
		7,
		61
	],
	"./filter": [
		171,
		9,
		18
	],
	"./filter.js": [
		171,
		9,
		18
	],
	"./filter2": [
		172,
		9,
		19
	],
	"./filter2.js": [
		172,
		9,
		19
	],
	"./gift": [
		173,
		9,
		20
	],
	"./gift.js": [
		173,
		9,
		20
	],
	"./heart": [
		174,
		9,
		21
	],
	"./heart.js": [
		174,
		9,
		21
	],
	"./heart_fill": [
		175,
		9,
		22
	],
	"./heart_fill.js": [
		175,
		9,
		22
	],
	"./home": [
		176,
		9,
		23
	],
	"./home.js": [
		176,
		9,
		23
	],
	"./home_fill": [
		177,
		9,
		24
	],
	"./home_fill.js": [
		177,
		9,
		24
	],
	"./info": [
		178,
		9,
		25
	],
	"./info.js": [
		178,
		9,
		25
	],
	"./info_circle": [
		179,
		9,
		26
	],
	"./info_circle.js": [
		179,
		9,
		26
	],
	"./info_shield": [
		180,
		9,
		27
	],
	"./info_shield.js": [
		180,
		9,
		27
	],
	"./list": [
		181,
		9,
		28
	],
	"./list.js": [
		181,
		9,
		28
	],
	"./login": [
		182,
		9,
		29
	],
	"./login.js": [
		182,
		9,
		29
	],
	"./logout": [
		183,
		9,
		30
	],
	"./logout.js": [
		183,
		9,
		30
	],
	"./mail": [
		184,
		9,
		31
	],
	"./mail.js": [
		184,
		9,
		31
	],
	"./marker": [
		185,
		9,
		32
	],
	"./marker.js": [
		185,
		9,
		32
	],
	"./marker_fill": [
		186,
		9,
		33
	],
	"./marker_fill.js": [
		186,
		9,
		33
	],
	"./menu": [
		187,
		9,
		34
	],
	"./menu.js": [
		187,
		9,
		34
	],
	"./message": [
		188,
		9,
		35
	],
	"./message.js": [
		188,
		9,
		35
	],
	"./minus": [
		189,
		9,
		36
	],
	"./minus.js": [
		189,
		9,
		36
	],
	"./more": [
		190,
		9,
		37
	],
	"./more.js": [
		190,
		9,
		37
	],
	"./newsletter": [
		191,
		9,
		38
	],
	"./newsletter.js": [
		191,
		9,
		38
	],
	"./phone": [
		192,
		9,
		39
	],
	"./phone.js": [
		192,
		9,
		39
	],
	"./plus": [
		193,
		9,
		40
	],
	"./plus.js": [
		193,
		9,
		40
	],
	"./profile": [
		194,
		9,
		41
	],
	"./profile.js": [
		194,
		9,
		41
	],
	"./profile_fill": [
		195,
		9,
		42
	],
	"./profile_fill.js": [
		195,
		9,
		42
	],
	"./question_mark": [
		196,
		9,
		43
	],
	"./question_mark.js": [
		196,
		9,
		43
	],
	"./return": [
		197,
		9,
		44
	],
	"./return.js": [
		197,
		9,
		44
	],
	"./rewards": [
		198,
		9,
		45
	],
	"./rewards.js": [
		198,
		9,
		45
	],
	"./safety": [
		199,
		9,
		46
	],
	"./safety.js": [
		199,
		9,
		46
	],
	"./search": [
		200,
		9,
		47
	],
	"./search.js": [
		200,
		9,
		47
	],
	"./shipping": [
		201,
		9,
		48
	],
	"./shipping.js": [
		201,
		9,
		48
	],
	"./show_password": [
		202,
		9,
		49
	],
	"./show_password.js": [
		202,
		9,
		49
	],
	"./sort": [
		203,
		9,
		50
	],
	"./sort.js": [
		203,
		9,
		50
	],
	"./star": [
		204,
		9,
		51
	],
	"./star.js": [
		204,
		9,
		51
	],
	"./store": [
		205,
		9,
		52
	],
	"./store.js": [
		205,
		9,
		52
	],
	"./tiles": [
		206,
		9,
		53
	],
	"./tiles.js": [
		206,
		9,
		53
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[2]).then(function() {
		return __webpack_require__.t(id, ids[1])
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_id_4502e76e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_id_4502e76e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_id_4502e76e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_id_4502e76e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfIcon_vue_vue_type_style_index_0_id_4502e76e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigationItem_vue_vue_type_style_index_0_id_e1a153d8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigationItem_vue_vue_type_style_index_0_id_e1a153d8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigationItem_vue_vue_type_style_index_0_id_e1a153d8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigationItem_vue_vue_type_style_index_0_id_e1a153d8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigationItem_vue_vue_type_style_index_0_id_e1a153d8_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigation_vue_vue_type_style_index_0_id_1cbf7868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigation_vue_vue_type_style_index_0_id_1cbf7868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigation_vue_vue_type_style_index_0_id_1cbf7868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigation_vue_vue_type_style_index_0_id_1cbf7868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderNavigation_vue_vue_type_style_index_0_id_1cbf7868_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SvgImage_vue_vue_type_style_index_0_id_74dc5528_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SvgImage_vue_vue_type_style_index_0_id_74dc5528_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SvgImage_vue_vue_type_style_index_0_id_74dc5528_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SvgImage_vue_vue_type_style_index_0_id_74dc5528_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SvgImage_vue_vue_type_style_index_0_id_74dc5528_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_id_da87b454_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_id_da87b454_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_id_da87b454_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_id_da87b454_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfImage_vue_vue_type_style_index_0_id_da87b454_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderLogo_vue_vue_type_style_index_0_id_ae09f2b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderLogo_vue_vue_type_style_index_0_id_ae09f2b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderLogo_vue_vue_type_style_index_0_id_ae09f2b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderLogo_vue_vue_type_style_index_0_id_ae09f2b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeaderLogo_vue_vue_type_style_index_0_id_ae09f2b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_id_9977ff80_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_id_9977ff80_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_id_9977ff80_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_id_9977ff80_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfMenuItem_vue_vue_type_style_index_0_id_9977ff80_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_id_3978c74c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_id_3978c74c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_id_3978c74c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_id_3978c74c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBar_vue_vue_type_style_index_0_id_3978c74c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_id_5803ce72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_id_5803ce72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_id_5803ce72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_id_5803ce72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCircleIcon_vue_vue_type_style_index_0_id_5803ce72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_id_05a0e329_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_id_05a0e329_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_id_05a0e329_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_id_05a0e329_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfOverlay_vue_vue_type_style_index_0_id_05a0e329_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_id_2451306e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_id_2451306e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_id_2451306e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_id_2451306e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeading_vue_vue_type_style_index_0_id_2451306e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_id_a8128fc2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_id_a8128fc2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_id_a8128fc2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_id_a8128fc2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSidebar_vue_vue_type_style_index_0_id_a8128fc2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_id_4bedd77c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_id_4bedd77c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_id_4bedd77c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_id_4bedd77c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfInput_vue_vue_type_style_index_0_id_4bedd77c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_id_2b93b22c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_id_2b93b22c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_id_2b93b22c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_id_2b93b22c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfSearchBar_vue_vue_type_style_index_0_id_2b93b22c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_id_335aea87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_id_335aea87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_id_335aea87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_id_335aea87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfHeader_vue_vue_type_style_index_0_id_335aea87_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_id_d8f0a870_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_id_d8f0a870_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_id_d8f0a870_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_id_d8f0a870_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBadge_vue_vue_type_style_index_0_id_d8f0a870_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_2a6e0524_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_2a6e0524_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_2a6e0524_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_2a6e0524_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_AppHeader_vue_vue_type_style_index_0_id_2a6e0524_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_id_5b744ae0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_id_5b744ae0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_id_5b744ae0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_id_5b744ae0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBottomNavigation_vue_vue_type_style_index_0_id_5b744ae0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_BottomNavigation_vue_vue_type_style_index_0_id_82e65b58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_BottomNavigation_vue_vue_type_style_index_0_id_82e65b58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_BottomNavigation_vue_vue_type_style_index_0_id_82e65b58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_BottomNavigation_vue_vue_type_style_index_0_id_82e65b58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_BottomNavigation_vue_vue_type_style_index_0_id_82e65b58_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_id_2772494f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_id_2772494f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_id_2772494f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_id_2772494f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfTopBar_vue_vue_type_style_index_0_id_2772494f_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_6ffa6fbb_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_6ffa6fbb_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_6ffa6fbb_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_6ffa6fbb_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_TopBar_vue_vue_type_style_index_0_id_6ffa6fbb_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_id_32bd0b49_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_id_32bd0b49_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_id_32bd0b49_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_id_32bd0b49_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_default_vue_vue_type_style_index_0_id_32bd0b49_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var bind = __webpack_require__(134);
var Axios = __webpack_require__(243);
var mergeConfig = __webpack_require__(139);
var defaults = __webpack_require__(62);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(37);
axios.CancelToken = __webpack_require__(259);
axios.isCancel = __webpack_require__(138);
axios.VERSION = __webpack_require__(66).version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(260);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(261);
module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var buildURL = __webpack_require__(61);
var InterceptorManager = __webpack_require__(244);
var dispatchRequest = __webpack_require__(245);
var mergeConfig = __webpack_require__(139);
var validator = __webpack_require__(258);
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }
  var transitional = config.transitional;
  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
module.exports = InterceptorManager;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var transformData = __webpack_require__(246);
var isCancel = __webpack_require__(138);
var defaults = __webpack_require__(62);
var Cancel = __webpack_require__(37);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(config, config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var defaults = __webpack_require__(62);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });
  return data;
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var settle = __webpack_require__(135);
var cookies = __webpack_require__(249);
var buildURL = __webpack_require__(61);
var buildFullPath = __webpack_require__(136);
var parseHeaders = __webpack_require__(252);
var isURLSameOrigin = __webpack_require__(253);
var createError = __webpack_require__(65);
var transitionalDefaults = __webpack_require__(64);
var Cancel = __webpack_require__(37);
module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function (cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
module.exports = utils.isStandardBrowserEnv() ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }
      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
module.exports = utils.isStandardBrowserEnv() ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);
var settle = __webpack_require__(135);
var buildFullPath = __webpack_require__(136);
var buildURL = __webpack_require__(61);
var http = __webpack_require__(255);
var https = __webpack_require__(256);
var httpFollow = __webpack_require__(137).http;
var httpsFollow = __webpack_require__(137).https;
var url = __webpack_require__(60);
var zlib = __webpack_require__(257);
var VERSION = __webpack_require__(66).version;
var createError = __webpack_require__(65);
var enhanceError = __webpack_require__(63);
var transitionalDefaults = __webpack_require__(64);
var Cancel = __webpack_require__(37);
var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    var resolve = function resolve(value) {
      done();
      resolvePromise(value);
    };
    var rejected = false;
    var reject = function reject(value) {
      done();
      rejected = true;
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;
    var headerNames = {};
    Object.keys(headers).forEach(function storeLowerName(name) {
      headerNames[name.toLowerCase()] = name;
    });

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('user-agent' in headerNames) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers[headerNames['user-agent']]) {
        delete headers[headerNames['user-agent']];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + VERSION;
    }
    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
      }
      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(createError('Request body larger than maxBodyLength limit', config));
      }

      // Add Content-Length header if data exists
      if (!headerNames['content-length']) {
        headers['Content-Length'] = data.length;
      }
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';
    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }
    if (auth && headerNames.authorization) {
      delete headers[headerNames.authorization];
    }
    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    try {
      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
    } catch (err) {
      var customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      reject(customErr);
    }
    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: {
        http: config.httpAgent,
        https: config.httpsAgent
      },
      auth: auth
    };
    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }
    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;
        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });
          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }
            return parsed.hostname === proxyElement;
          });
        }
        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };
          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }
    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }
    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }
    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }
    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
          /*eslint default-case:0*/
          case 'gzip':
          case 'compress':
          case 'deflate':
            // add the unzipper to the body stream processing pipeline
            stream = stream.pipe(zlib.createUnzip());

            // remove the content-encoding in order to not confuse downstream operations
            delete res.headers['content-encoding'];
            break;
        }
      }
      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };
      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destoy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest));
          }
        });
        stream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          stream.destroy();
          reject(createError('error request aborted', config, 'ERR_REQUEST_ABORTED', lastRequest));
        });
        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });
        stream.on('end', function handleStreamEnd() {
          try {
            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (config.responseType !== 'arraybuffer') {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                responseData = utils.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            reject(enhanceError(err, config, err.code, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);
      if (isNaN(timeout)) {
        reject(createError('error trying to parse `config.timeout` to int', config, 'ERR_PARSE_TIMEOUT', req));
        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        var timeoutErrorMessage = '';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        } else {
          timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        }
        var transitional = config.transitional || transitionalDefaults;
        reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED', req));
      });
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function (cancel) {
        if (req.aborted) return;
        req.abort();
        reject(!cancel || cancel && cancel.type ? new Cancel('canceled') : cancel);
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 256 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VERSION = __webpack_require__(66).version;
var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}
module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(37);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function (cancel) {
    if (!token._listeners) return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function (onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function (resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};
module.exports = CancelToken;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(10);

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
};

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js
var ipx_namespaceObject = {};
__webpack_require__.r(ipx_namespaceObject);
__webpack_require__.d(ipx_namespaceObject, "getImage", function() { return ipx_getImage; });
__webpack_require__.d(ipx_namespaceObject, "validateDomains", function() { return validateDomains; });
__webpack_require__.d(ipx_namespaceObject, "supportsAlias", function() { return supportsAlias; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.cjs
var dist = __webpack_require__(5);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(140);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['checkout'] = __webpack_require__(209);
middleware['checkout'] = middleware['checkout'].default || middleware['checkout'];
middleware['is-authenticated'] = __webpack_require__(210);
middleware['is-authenticated'] = middleware['is-authenticated'].default || middleware['is-authenticated'];
middleware['url-resolver'] = __webpack_require__(211);
middleware['url-resolver'] = middleware['url-resolver'].default || middleware['url-resolver'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "VSF_MAGENTO_GRAPHQL_URL": "https://magento-1150741-4004803.cloudwaysapps.com/graphql"
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', utils_flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function utils_flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(38);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(69);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(58);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(70);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
function scrollBehavior(_to, _from, savedPosition) {
  return savedPosition || {
    x: 0,
    y: 0
  };
}
// CONCATENATED MODULE: ./.nuxt/router.js





const _07e10470 = () => interopDefault(__webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(null, 597)));
const _7f1db5d0 = () => interopDefault(__webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, 613)));
const _68218e14 = () => interopDefault(__webpack_require__.e(/* import() */ 90).then(__webpack_require__.bind(null, 595)));
const _38790416 = () => interopDefault(__webpack_require__.e(/* import() */ 88).then(__webpack_require__.bind(null, 614)));
const _fb1a6000 = () => interopDefault(__webpack_require__.e(/* import() */ 83).then(__webpack_require__.bind(null, 615)));
const _573311b8 = () => interopDefault(__webpack_require__.e(/* import() */ 92).then(__webpack_require__.bind(null, 616)));
const _84177a6a = () => interopDefault(__webpack_require__.e(/* import() */ 99).then(__webpack_require__.bind(null, 617)));
const _6c09badc = () => interopDefault(__webpack_require__.e(/* import() */ 95).then(__webpack_require__.bind(null, 618)));
const _7a3daea2 = () => interopDefault(__webpack_require__.e(/* import() | pages/Cms */ 63).then(__webpack_require__.bind(null, 502)));
const _5b56649e = () => interopDefault(__webpack_require__.e(/* import() */ 107).then(__webpack_require__.bind(null, 607)));
const _363439b9 = () => interopDefault(__webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, 619)));
const _4bd13c50 = () => interopDefault(__webpack_require__.e(/* import() */ 91).then(__webpack_require__.bind(null, 620)));
const _4f82147b = () => interopDefault(__webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(null, 598)));
const _79d0278c = () => interopDefault(__webpack_require__.e(/* import() */ 86).then(__webpack_require__.bind(null, 621)));
const _812c7ab8 = () => interopDefault(__webpack_require__.e(/* import() */ 69).then(__webpack_require__.bind(null, 608)));
const _4c9f4b0e = () => interopDefault(__webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, 609)));
const _20547d45 = () => interopDefault(__webpack_require__.e(/* import() */ 78).then(__webpack_require__.bind(null, 622)));
const _2e0aafc7 = () => interopDefault(__webpack_require__.e(/* import() */ 97).then(__webpack_require__.bind(null, 610)));
const _0b7f8796 = () => interopDefault(__webpack_require__.e(/* import() */ 74).then(__webpack_require__.bind(null, 623)));
const _20a4030d = () => interopDefault(__webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(null, 599)));
const _045a09ef = () => interopDefault(__webpack_require__.e(/* import() | pages/Faq */ 64).then(__webpack_require__.bind(null, 646)));
const _3753c0d6 = () => interopDefault(__webpack_require__.e(/* import() | pages/Home */ 54).then(__webpack_require__.bind(null, 597)));
const _f0ee52f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/Page */ 55).then(__webpack_require__.bind(null, 592)));
const _58161a20 = () => interopDefault(__webpack_require__.e(/* import() */ 55).then(__webpack_require__.bind(null, 592)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: scrollBehavior,
  routes: [{
    path: "/default",
    component: _07e10470,
    name: "home___default"
  }, {
    path: "/german",
    component: _07e10470,
    name: "home___german"
  }, {
    path: "/default/cart",
    component: _7f1db5d0,
    name: "cart___default"
  }, {
    path: "/default/checkout",
    component: _68218e14,
    name: "checkout___default",
    children: [{
      path: "billing",
      component: _38790416,
      name: "billing___default"
    }, {
      path: "payment",
      component: _fb1a6000,
      name: "payment___default"
    }, {
      path: "shipping",
      component: _573311b8,
      name: "shipping___default"
    }, {
      path: "thank-you",
      component: _84177a6a,
      name: "thank-you___default"
    }, {
      path: "user-account",
      component: _6c09badc,
      name: "user-account___default"
    }]
  }, {
    path: "/default/Cms",
    component: _7a3daea2,
    name: "Cms___default"
  }, {
    path: "/default/customer",
    component: _5b56649e,
    meta: {
      "titleLabel": "My Account"
    },
    name: "customer___default",
    children: [{
      path: "addresses-details",
      component: _363439b9,
      meta: {
        "titleLabel": "Addresses details"
      },
      name: "customer-addresses-details___default"
    }, {
      path: "my-newsletter",
      component: _4bd13c50,
      meta: {
        "titleLabel": "My newsletter"
      },
      name: "customer-my-newsletter___default"
    }, {
      path: "my-profile",
      component: _4f82147b,
      meta: {
        "titleLabel": "My profile"
      },
      name: "customer-my-profile___default"
    }, {
      path: "my-reviews",
      component: _79d0278c,
      meta: {
        "titleLabel": "My reviews"
      },
      name: "customer-my-reviews___default"
    }, {
      path: "my-wishlist",
      component: _812c7ab8,
      meta: {
        "titleLabel": "My wishlist"
      },
      name: "customer-my-wishlist___default"
    }, {
      path: "order-history",
      component: _4c9f4b0e,
      meta: {
        "titleLabel": "Order history"
      },
      name: "customer-order-history___default"
    }, {
      path: "addresses-details/create",
      component: _20547d45,
      meta: {
        "titleLabel": "Addresses details"
      },
      name: "customer-addresses-details-new___default"
    }, {
      path: "/default/reset-password",
      component: _2e0aafc7,
      alias: "/customer/account/createPassword",
      name: "reset-password___default"
    }, {
      path: "addresses-details/edit/:addressId",
      component: _0b7f8796,
      meta: {
        "titleLabel": "Addresses details"
      },
      props: true,
      name: "customer-addresses-details-edit___default"
    }, {
      path: "order-history/:orderId",
      component: _20a4030d,
      meta: {
        "titleLabel": "Order history"
      },
      props: true,
      name: "customer-single-order___default"
    }]
  }, {
    path: "/default/Faq",
    component: _045a09ef,
    name: "Faq___default"
  }, {
    path: "/default/Home",
    component: _3753c0d6,
    name: "Home___default"
  }, {
    path: "/default/Page",
    component: _f0ee52f4,
    name: "Page___default"
  }, {
    path: "/german/cart",
    component: _7f1db5d0,
    name: "cart___german"
  }, {
    path: "/german/checkout",
    component: _68218e14,
    name: "checkout___german",
    children: [{
      path: "billing",
      component: _38790416,
      name: "billing___german"
    }, {
      path: "payment",
      component: _fb1a6000,
      name: "payment___german"
    }, {
      path: "shipping",
      component: _573311b8,
      name: "shipping___german"
    }, {
      path: "thank-you",
      component: _84177a6a,
      name: "thank-you___german"
    }, {
      path: "user-account",
      component: _6c09badc,
      name: "user-account___german"
    }]
  }, {
    path: "/german/Cms",
    component: _7a3daea2,
    name: "Cms___german"
  }, {
    path: "/german/customer",
    component: _5b56649e,
    meta: {
      "titleLabel": "My Account"
    },
    name: "customer___german",
    children: [{
      path: "addresses-details",
      component: _363439b9,
      meta: {
        "titleLabel": "Addresses details"
      },
      name: "customer-addresses-details___german"
    }, {
      path: "my-newsletter",
      component: _4bd13c50,
      meta: {
        "titleLabel": "My newsletter"
      },
      name: "customer-my-newsletter___german"
    }, {
      path: "my-profile",
      component: _4f82147b,
      meta: {
        "titleLabel": "My profile"
      },
      name: "customer-my-profile___german"
    }, {
      path: "my-reviews",
      component: _79d0278c,
      meta: {
        "titleLabel": "My reviews"
      },
      name: "customer-my-reviews___german"
    }, {
      path: "my-wishlist",
      component: _812c7ab8,
      meta: {
        "titleLabel": "My wishlist"
      },
      name: "customer-my-wishlist___german"
    }, {
      path: "order-history",
      component: _4c9f4b0e,
      meta: {
        "titleLabel": "Order history"
      },
      name: "customer-order-history___german"
    }, {
      path: "addresses-details/create",
      component: _20547d45,
      meta: {
        "titleLabel": "Addresses details"
      },
      name: "customer-addresses-details-new___german"
    }, {
      path: "/german/reset-password",
      component: _2e0aafc7,
      alias: "/customer/account/createPassword",
      name: "reset-password___german"
    }, {
      path: "addresses-details/edit/:addressId",
      component: _0b7f8796,
      meta: {
        "titleLabel": "Addresses details"
      },
      props: true,
      name: "customer-addresses-details-edit___german"
    }, {
      path: "order-history/:orderId",
      component: _20a4030d,
      meta: {
        "titleLabel": "Order history"
      },
      props: true,
      name: "customer-single-order___german"
    }]
  }, {
    path: "/german/Faq",
    component: _045a09ef,
    name: "Faq___german"
  }, {
    path: "/german/Home",
    component: _3753c0d6,
    name: "Home___german"
  }, {
    path: "/german/Page",
    component: _f0ee52f4,
    name: "Page___german"
  }, {
    path: "/default/:slug+",
    component: _58161a20,
    name: "page___default"
  }, {
    path: "/german/:slug+",
    component: _58161a20,
    name: "page___german"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/error.vue?vue&type=template&id=1015fe80&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"error-page"},[_vm._ssrNode(((_vm.error.statusCode === 404)?("<h1 data-v-1015fe80>"+_vm._ssrEscape("\n    "+_vm._s(_vm.$t('Page not found'))+"\n  ")+"</h1>"):("<h1 data-v-1015fe80>"+_vm._ssrEscape("\n    "+_vm._s(_vm.$t('An error occurred'))+"\n  ")+"</h1>"))+" "),_c('SfButton',{attrs:{"link":_vm.localePath('/')}},[_vm._v("\n    "+_vm._s(_vm.$t('Back to Home page'))+"\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=1015fe80&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/error.vue?vue&type=script&lang=ts&


/* harmony default export */ var errorvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  components: {
    SfButton: SfButton["a" /* default */]
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}));
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_errorvue_type_script_lang_ts_ = (errorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1015fe80",
  "39c6a2c6"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(217)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "97012852"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/default.vue?vue&type=template&id=32bd0b49&
var defaultvue_type_template_id_32bd0b49_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('IconSprite'),_vm._ssrNode(" "),(_vm.isCartSidebarOpen)?_c('CartSidebar'):_vm._e(),_vm._ssrNode(" "),(_vm.isWishlistSidebarOpen)?_c('WishlistSidebar'):_vm._e(),_vm._ssrNode(" "),(_vm.isLoginModalOpen)?_c('LoginModal',{on:{"close":_vm.toggleLoginModal}}):_vm._e(),_vm._ssrNode(" "),_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('Notification')],1),_vm._ssrNode(" "),_c('TopBar',{staticClass:"desktop-only"}),_vm._ssrNode(" "),_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"layout\">","</div>",[_c('nuxt',{key:_vm.route.fullPath})],1),_vm._ssrNode(" "),_c('BottomNavigation'),_vm._ssrNode(" "),_c('LoadWhenVisible',[_c('AppFooter')],1)],2)}
var defaultvue_type_template_id_32bd0b49_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=32bd0b49&

// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(79);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// EXTERNAL MODULE: ./composables/index.ts + 39 modules
var composables = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/AppHeader.vue?vue&type=template&id=2a6e0524&scoped=true&
var AppHeadervue_type_template_id_2a6e0524_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfHeader',{staticClass:"sf-header--has-mobile-search",class:{ 'header-on-top': _vm.isSearchOpen },scopedSlots:_vm._u([{key:"logo",fn:function(){return [_c('HeaderLogo')]},proxy:true},{key:"navigation",fn:function(){return [_c('HeaderNavigation',{attrs:{"category-tree":_vm.categoryTree}})]},proxy:true},{key:"aside",fn:function(){return [_c('div',{staticClass:"sf-header__switchers"},[(_vm.hasCurrencyToSelect)?_c('CurrencySelector',{staticClass:"smartphone-only"}):_vm._e(),_vm._v(" "),(_vm.hasStoresToSelect)?_c('StoreSwitcher',{staticClass:"smartphone-only"}):_vm._e()],1)]},proxy:true},{key:"header-icons",fn:function(ref){
var activeIcon = ref.activeIcon;
return [_c('div',{staticClass:"sf-header__icons"},[_c('SfButton',{directives:[{name:"e2e",rawName:"v-e2e",value:('app-header-account'),expression:"'app-header-account'"}],staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"accountIcon","aria-label":"Account"},on:{"click":_vm.handleAccountClick}},[_c('SvgImage',{class:{
              'sf-header__icon is-active': activeIcon === 'account',
            },attrs:{"icon":_vm.accountIcon,"label":_vm.$t('Account'),"width":"1.25rem","height":"1.25rem"}})],1),_vm._v(" "),(_vm.isAuthenticated)?_c('SfButton',{staticClass:"sf-button--pure sf-header__action",attrs:{"data-testid":"wishlistIcon","aria-label":"Wishlist"},on:{"click":_vm.toggleWishlistSidebar}},[_c('SvgImage',{staticClass:"sf-header__icon",class:{
              'sf-header__icon is-active': activeIcon === 'wishlist',
            },attrs:{"icon":_vm.wishlistHasProducts ? 'heart_fill' : 'heart',"label":_vm.$t('Wishlist'),"width":"1.25rem","height":"1.25rem"}}),_vm._v(" "),(_vm.wishlistHasProducts)?_c('SfBadge',{staticClass:"sf-badge--number cart-badge"},[_vm._v("\n            "+_vm._s(_vm.wishlistItemsQty)+"\n          ")]):_vm._e()],1):_vm._e(),_vm._v(" "),_c('SfButton',{directives:[{name:"e2e",rawName:"v-e2e",value:('app-header-cart'),expression:"'app-header-cart'"}],staticClass:"sf-button--pure sf-header__action",attrs:{"aria-label":"Toggle cart sidebar"},on:{"click":_vm.toggleCartSidebar}},[_c('SvgImage',{staticClass:"sf-header__icon",class:{
              'sf-header__icon is-active': activeIcon === 'cart',
            },attrs:{"icon":"empty_cart","label":_vm.$t('Cart'),"width":"20","height":"20"}}),_vm._v(" "),(_vm.cartTotalItems)?_c('SfBadge',{staticClass:"sf-badge--number cart-badge"},[_vm._v("\n            "+_vm._s(_vm.cartTotalItems)+"\n          ")]):_vm._e()],1)],1)]}},{key:"search",fn:function(){return [_c('SearchBar',{attrs:{"is-search-open":_vm.isSearchOpen},on:{"set-is-open":function($event){_vm.isSearchOpen = $event},"set-search-results":function($event){_vm.productSearchResults = $event}}})]},proxy:true}])}),_vm._ssrNode(" "),(_vm.isSearchOpen)?_c('SearchResults',{attrs:{"visible":_vm.isSearchOpen,"search-results":_vm.productSearchResults},on:{"close":function($event){_vm.isSearchOpen = false}}}):_vm._e(),_vm._ssrNode(" "),_c('SfOverlay',{attrs:{"visible":_vm.isSearchOpen}})],2)}
var AppHeadervue_type_template_id_2a6e0524_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=template&id=2a6e0524&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=335aea87&
var SfHeadervue_type_template_id_335aea87_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-header",class:{ 'is-sticky': _vm.sticky, 'is-hidden': _vm.hidden }},[_vm._ssrNode("<div class=\"sf-header__wrapper\">","</div>",[_vm._ssrNode("<header class=\"sf-header__header\">","</header>",[_vm._t("logo",function(){return [_c('SfLink',{attrs:{"link":"/"}},[(_vm.logo)?_c('SfImage',{staticClass:"sf-header__logo",attrs:{"src":_vm.logo,"alt":_vm.title,"width":_vm.logoWidth,"height":_vm.logoHeight}}):_c('h1',{staticClass:"sf-header__title"},[_vm._v(_vm._s(_vm.title))])],1)]},null,{ logo: _vm.logo, title: _vm.title }),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header__aside\">","</div>",[_vm._t("aside")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header__actions\">","</div>",[_vm._ssrNode("<nav"+(_vm._ssrClass("sf-header__navigation",{ 'is-visible': _vm.isNavVisible }))+">","</nav>",[_vm._t("navigation")],2),_vm._ssrNode(" "),_vm._t("search",function(){return [_c('SfSearchBar',{staticClass:"sf-header__search",attrs:{"value":_vm.searchValue,"placeholder":_vm.searchPlaceholder,"aria-label":"Search"},on:{"input":function($event){return _vm.$emit('change:search', $event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('enter:search', $event)}}})]},null,{ searchValue: _vm.searchValue, searchPlaceholder: _vm.searchPlaceholder }),_vm._ssrNode(" "),_vm._t("header-icons",function(){return [_c('div',{staticClass:"sf-header__icons"},[_c('SfButton',{staticClass:"sf-button--pure sf-header__action",class:{ 'display-none': !_vm.accountIcon },attrs:{"data-testid":"accountIcon","aria-label":'Account'},on:{"click":function($event){return _vm.$emit('click:account')}}},[_c('SfIcon',{class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'account',
                },attrs:{"icon":_vm.accountIcon,"size":"1.25rem"}})],1),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-header__action",class:{ 'display-none': !_vm.wishlistIcon },attrs:{"data-testid":"wishlistIcon","aria-label":'Wishlist'},on:{"click":function($event){return _vm.$emit('click:wishlist')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'wishlist',
                },attrs:{"icon":_vm.wishlistIcon,"size":"1.25rem"}})],1),_vm._v(" "),_c('SfButton',{staticClass:"sf-button--pure sf-header__action",class:{ 'display-none': !_vm.cartIcon },attrs:{"data-testid":"cartIcon","aria-label":'Cart'},on:{"click":function($event){return _vm.$emit('click:cart')}}},[_c('SfIcon',{staticClass:"sf-header__icon",class:{
                  'sf-header__icon is-active': _vm.activeIcon === 'cart',
                },attrs:{"icon":_vm.cartIcon,"size":"1.25rem"}})],1)],1)]},null,{
            activeIcon: _vm.activeIcon,
            cartHasProducts: _vm.cartHasProducts,
            cartItemsQty: _vm.cartItemsQty,
            cartIcon: _vm.cartIcon,
            wishlistIcon: _vm.wishlistIcon,
            accountIcon: _vm.accountIcon,
          })],2)],2)])])}
var SfHeadervue_type_template_id_335aea87_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=template&id=335aea87&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=3addb0fd&
var SfHeaderNavigationItemvue_type_template_id_3addb0fd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation-item"},_vm.$listeners),[_vm._ssrNode("<div class=\"\n      sf-header-navigation-item__item sf-header-navigation-item__item--desktop\n    \">","</div>",[_vm._t("desktop-navigation-item",function(){return [_c('SfLink',{staticClass:"sf-header-navigation-item__link",attrs:{"link":_vm.link}},[_vm._v(_vm._s(_vm.label))])]}),_vm._ssrNode(" "),_vm._t("default")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"\n      sf-header-navigation-item__item sf-header-navigation-item__item--mobile\n    \">","</div>",[_vm._t("mobile-navigation-item",function(){return [_c('SfMenuItem',{staticClass:"sf-header-navigation-item__menu-item",attrs:{"label":_vm.label}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n      ")])]}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-header-navigation-item__content\">","</div>",[_vm._t("default")],2)],2)],2)}
var SfHeaderNavigationItemvue_type_template_id_3addb0fd_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=template&id=3addb0fd&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfMenuItem/SfMenuItem.vue + 4 modules
var SfMenuItem = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfHeaderNavigationItemvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigationItem",
  components: {
    SfLink: SfLink["a" /* default */],
    SfMenuItem: SfMenuItem["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    link: {
      type: [String, Object],
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationItemvue_type_script_lang_js_ = (SfHeaderNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem.vue





/* normalize component */

var SfHeaderNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeaderNavigationItemvue_type_script_lang_js_,
  SfHeaderNavigationItemvue_type_template_id_3addb0fd_render,
  SfHeaderNavigationItemvue_type_template_id_3addb0fd_staticRenderFns,
  false,
  null,
  null,
  "f0d2a072"
  
)

/* harmony default export */ var SfHeaderNavigationItem = (SfHeaderNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=a93c31a6&
var SfHeaderNavigationvue_type_template_id_a93c31a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-header-navigation"},_vm.$listeners),[_vm._ssrNode("<div class=\"sf-header-navigation__menu\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_c('SfSidebar',{staticClass:"sf-header-navigation__sidebar",attrs:{"persistent":true},on:{"close":function($event){return _vm.$emit('close')}}},[_vm._t("default")],2)],2)}
var SfHeaderNavigationvue_type_template_id_a93c31a6_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=template&id=a93c31a6&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfSidebar/SfSidebar.vue + 4 modules
var SfSidebar = __webpack_require__(150);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfHeaderNavigationvue_type_script_lang_js_ = ({
  name: "SfHeaderNavigation",
  components: {
    SfSidebar: SfSidebar["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfHeaderNavigationvue_type_script_lang_js_ = (SfHeaderNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigation.vue





/* normalize component */

var SfHeaderNavigation_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfHeaderNavigationvue_type_script_lang_js_,
  SfHeaderNavigationvue_type_template_id_a93c31a6_render,
  SfHeaderNavigationvue_type_template_id_a93c31a6_staticRenderFns,
  false,
  null,
  null,
  "dcb09fd8"
  
)

/* harmony default export */ var SfHeaderNavigation = (SfHeaderNavigation_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/helpers/check-environment.js
var check_environment = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue + 4 modules
var SfSearchBar = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 5 modules
var SfIcon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_vue_default.a.component("SfHeaderNavigation", SfHeaderNavigation);
external_vue_default.a.component("SfHeaderNavigationItem", SfHeaderNavigationItem);






/* harmony default export */ var SfHeadervue_type_script_lang_js_ = ({
  name: "SfHeader",
  components: {
    SfImage: SfImage["a" /* default */],
    SfSearchBar: SfSearchBar["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfLink: SfLink["a" /* default */]
  },
  props: {
    logo: {
      type: [String, Object],
      default: ""
    },
    logoHeight: {
      type: [Number, String],
      default: 35
    },
    logoWidth: {
      type: [Number, String],
      default: 34
    },
    title: {
      type: String,
      default: ""
    },
    cartIcon: {
      type: [String, Boolean, Array],
      default: "empty_cart"
    },
    wishlistIcon: {
      type: [String, Boolean, Array],
      default: "heart"
    },
    accountIcon: {
      type: [String, Boolean, Array],
      default: "profile"
    },
    activeIcon: {
      type: String,
      default: "",
      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      }
    },
    searchPlaceholder: {
      type: String,
      default: "Search for items"
    },
    searchValue: {
      type: String,
      default: ""
    },
    wishlistItemsQty: {
      type: [String, Number],
      default: "0"
    },
    cartItemsQty: {
      type: [String, Number],
      default: "0"
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    isNavVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      icons: [],
      hidden: false,
      sticky: false,
      scrollDirection: null,
      lastScrollPosition: 0,
      animationStart: null,
      animationLong: null,
      animationDuration: 300
    };
  },
  computed: {
    cartHasProducts() {
      return parseInt(this.cartItemsQty, 10) > 0;
    },
    wishlistHasProducts() {
      return parseInt(this.wishlistItemsQty, 10) > 0;
    }
  },
  watch: {
    scrollDirection: {
      handler() {
        if (!check_environment["a" /* isClient */]) return;
        window.cancelAnimationFrame(this.animationLong);
        this.animationLong = null;
        this.animationStart = null;
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
      }
    },
    isSticky: {
      handler(isSticky) {
        if (!check_environment["a" /* isClient */]) return;
        this.sticky = isSticky;
      },
      immediate: true
    }
  },
  mounted() {
    if (this.isSticky) {
      window.addEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },
  beforeDestroy() {
    if (this.isSticky) {
      window.removeEventListener("scroll", this.scrollHandler, {
        passive: true
      });
    }
  },
  methods: {
    animationHandler(timestamp) {
      if (!this.animationStart) this.animationStart = timestamp;
      const progress = timestamp - this.animationStart;
      if (progress < this.animationDuration) {
        this.animationLong = window.requestAnimationFrame(this.animationHandler);
        return;
      }
      this.hidden = this.scrollDirection === "down";
    },
    scrollHandler() {
      if (!check_environment["a" /* isClient */]) return;
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (!!this.refs) {
        if (currentScrollPosition >= this.$refs.header.offsetHeight) {
          this.scrollDirection = currentScrollPosition < this.lastScrollPosition ? "up" : "down";
        }
      }
      this.lastScrollPosition = currentScrollPosition;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfHeader_SfHeadervue_type_script_lang_js_ = (SfHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfHeader/SfHeader.vue



function SfHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(233)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfHeader_component = Object(componentNormalizer["a" /* default */])(
  SfHeader_SfHeadervue_type_script_lang_js_,
  SfHeadervue_type_template_id_335aea87_render,
  SfHeadervue_type_template_id_335aea87_staticRenderFns,
  false,
  SfHeader_injectStyles,
  null,
  "64ae4420"
  
)

/* harmony default export */ var SfHeader = (SfHeader_component.exports);
// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfOverlay/SfOverlay.vue + 4 modules
var SfOverlay = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue + 4 modules
var SfBadge = __webpack_require__(263);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Header/Navigation/HeaderNavigation.vue?vue&type=template&id=1cbf7868&scoped=true&
var HeaderNavigationvue_type_template_id_1cbf7868_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-navigation",on:{"mouseleave":function($event){return _vm.setCurrentCategory(null)}}},[_vm._ssrNode("<div class=\"sf-header-navigation-item__item sf-header-navigation-item__item--desktop\" data-v-1cbf7868>","</div>",_vm._l((_vm.categoryTree),function(category,index){return _c('HeaderNavigationItem',{key:index,ref:"lvl0CatRefs",refInFor:true,staticClass:"nav-item",attrs:{"data-testid":category.uid,"label":category.name,"link":_vm.localePath(_vm.getCatLink(category)),"tabindex":"1","aria-haspopup":"true","data-index":index,"has-children":_vm.hasChildren(category)},nativeOn:{"mouseenter":function($event){$event.preventDefault();return _vm.onMouseEnter(category)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.setCurrentCategory(category)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.setCurrentCategory(null)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();return _vm.navRight()},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();return _vm.navLeft()}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();return _vm.setFocus($event)}}})}),1),_vm._ssrNode(" "),(_vm.hasChildren(_vm.currentCategory))?_c('HeaderNavigationSubcategories',{attrs:{"current-category":_vm.currentCategory,"has-focus":_vm.hasFocus},on:{"hideSubcategories":_vm.focusRootElementAndHideSubcategories}}):_vm._e()],2)}
var HeaderNavigationvue_type_template_id_1cbf7868_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/Navigation/HeaderNavigation.vue?vue&type=template&id=1cbf7868&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Header/Navigation/HeaderNavigationItem.vue?vue&type=template&id=e1a153d8&
var HeaderNavigationItemvue_type_template_id_e1a153d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfLink',{staticClass:"sf-header-navigation-item__link",attrs:{"link":_vm.link}},[_vm._v("\n  "+_vm._s(_vm.label)+"\n  "),(_vm.hasChildren)?_c('SfIcon',{attrs:{"icon":"chevron_down","size":"xxs","color":"green-primary","viewBox":"0 0 24 24","coverage":1}}):_vm._e()],1)}
var HeaderNavigationItemvue_type_template_id_e1a153d8_staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/Navigation/HeaderNavigationItem.vue?vue&type=template&id=e1a153d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Header/Navigation/HeaderNavigationItem.vue?vue&type=script&lang=ts&


/* harmony default export */ var HeaderNavigationItemvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'HeaderNavigationItem',
  components: {
    SfLink: SfLink["a" /* default */],
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    link: {
      type: [String, Object],
      default: ''
    },
    hasChildren: {
      type: Boolean,
      default: false
    }
  }
}));
// CONCATENATED MODULE: ./components/Header/Navigation/HeaderNavigationItem.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Navigation_HeaderNavigationItemvue_type_script_lang_ts_ = (HeaderNavigationItemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/Header/Navigation/HeaderNavigationItem.vue



function HeaderNavigationItem_injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var HeaderNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  Navigation_HeaderNavigationItemvue_type_script_lang_ts_,
  HeaderNavigationItemvue_type_template_id_e1a153d8_render,
  HeaderNavigationItemvue_type_template_id_e1a153d8_staticRenderFns,
  false,
  HeaderNavigationItem_injectStyles,
  null,
  "9b29aa0a"
  
)

/* harmony default export */ var HeaderNavigationItem = (HeaderNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Header/Navigation/HeaderNavigation.vue?vue&type=script&lang=ts&



/* harmony default export */ var HeaderNavigationvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'HeaderNavigation',
  components: {
    HeaderNavigationSubcategories: () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.bind(null, 641)),
    HeaderNavigationItem: HeaderNavigationItem
  },
  props: {
    categoryTree: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const {
      getCatLink
    } = Object(composables["n" /* useUiHelpers */])();
    const currentCategory = Object(runtime["l" /* ref */])(null);
    const lvl0CatRefs = Object(runtime["l" /* ref */])();
    const hasFocus = Object(runtime["l" /* ref */])(false);
    let lvl0CatFocusIdx = 0;
    let focusedElement = null;
    const setCurrentCategory = category => {
      currentCategory.value = category;
    };
    const hasChildren = category => {
      var _a;
      return Boolean((_a = category === null || category === void 0 ? void 0 : category.children) === null || _a === void 0 ? void 0 : _a.length);
    };
    const setFocus = event => {
      focusedElement = event.target;
      lvl0CatFocusIdx = Number(event.target.dataset.index);
      hasFocus.value = true;
    };
    const focusRootElementAndHideSubcategories = () => {
      setCurrentCategory(null);
      if (focusedElement !== null) focusedElement.focus();
    };
    const navRight = () => {
      lvl0CatFocusIdx++;
      if (lvl0CatRefs.value[lvl0CatFocusIdx]) {
        lvl0CatRefs.value[lvl0CatFocusIdx].$el.focus();
        focusedElement = lvl0CatRefs.value[lvl0CatFocusIdx].$el;
      } else {
        lvl0CatFocusIdx--;
      }
    };
    const navLeft = () => {
      lvl0CatFocusIdx--;
      if (lvl0CatRefs.value[lvl0CatFocusIdx]) {
        lvl0CatRefs.value[lvl0CatFocusIdx].$el.focus();
        focusedElement = lvl0CatRefs.value[lvl0CatFocusIdx].$el;
      } else {
        lvl0CatFocusIdx++;
      }
    };
    const onMouseEnter = category => {
      currentCategory.value = category;
      focusedElement = null;
      hasFocus.value = false;
    };
    return {
      getCatLink,
      setCurrentCategory,
      currentCategory,
      hasChildren,
      setFocus,
      focusRootElementAndHideSubcategories,
      lvl0CatRefs,
      navRight,
      navLeft,
      hasFocus,
      onMouseEnter
    };
  }
}));
// CONCATENATED MODULE: ./components/Header/Navigation/HeaderNavigation.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Navigation_HeaderNavigationvue_type_script_lang_ts_ = (HeaderNavigationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/Header/Navigation/HeaderNavigation.vue



function HeaderNavigation_injectStyles (context) {
  
  var style0 = __webpack_require__(221)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var HeaderNavigation_component = Object(componentNormalizer["a" /* default */])(
  Navigation_HeaderNavigationvue_type_script_lang_ts_,
  HeaderNavigationvue_type_template_id_1cbf7868_scoped_true_render,
  HeaderNavigationvue_type_template_id_1cbf7868_scoped_true_staticRenderFns,
  false,
  HeaderNavigation_injectStyles,
  "1cbf7868",
  "6bc1e548"
  
)

/* harmony default export */ var HeaderNavigation = (HeaderNavigation_component.exports);
// EXTERNAL MODULE: ./modules/catalog/category/composables/useCategory/index.ts + 2 modules
var useCategory = __webpack_require__(51);

// EXTERNAL MODULE: ./modules/checkout/composables/useCart/index.ts + 9 modules
var useCart = __webpack_require__(8);

// EXTERNAL MODULE: ./modules/wishlist/composables/useWishlist/index.ts + 3 modules
var useWishlist = __webpack_require__(31);

// EXTERNAL MODULE: ./modules/customer/composables/useUser/index.ts + 2 modules
var useUser = __webpack_require__(17);

// EXTERNAL MODULE: ./modules/wishlist/store/wishlistStore.ts
var store_wishlistStore = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/HeaderLogo.vue?vue&type=template&id=ae09f2b2&scoped=true&
var HeaderLogovue_type_template_id_ae09f2b2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"sf-header__logo",attrs:{"to":_vm.localePath('/')}},[(_vm.logoSrc)?_c('SfImage',{attrs:{"image-tag":"nuxt-img","src":_vm.logoSrc,"alt":_vm.logoAlt,"title":_vm.logoAlt,"width":_vm.logoWidth,"height":_vm.logoHeight}}):_c('SvgImage',{attrs:{"icon":"logo","label":_vm.$t('Vue Storefront Next'),"width":"35","height":"34"}})],1)}
var HeaderLogovue_type_template_id_ae09f2b2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderLogo.vue?vue&type=template&id=ae09f2b2&scoped=true&

// EXTERNAL MODULE: ./components/General/SvgImage.vue + 4 modules
var SvgImage = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/HeaderLogo.vue?vue&type=script&lang=ts&




/* harmony default export */ var HeaderLogovue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'HeaderLogo',
  components: {
    SvgImage: SvgImage["a" /* default */],
    SfImage: SfImage["a" /* default */]
  },
  setup() {
    const {
      config
    } = Object(composables["c" /* useConfig */])();
    const logoSrc = Object(runtime["a" /* computed */])(() => {
      const baseMediaUrl = config.value.base_media_url;
      const logo = config.value.header_logo_src;
      return baseMediaUrl && logo ? `${baseMediaUrl}logo/${logo}` : '';
    });
    const logoWidth = Object(runtime["a" /* computed */])(() => config.value.logo_width || '35');
    const logoHeight = Object(runtime["a" /* computed */])(() => config.value.logo_height || '34');
    const logoAlt = Object(runtime["a" /* computed */])(() => config.value.logo_alt || '');
    return {
      logoAlt,
      logoHeight,
      logoSrc,
      logoWidth
    };
  }
}));
// CONCATENATED MODULE: ./components/HeaderLogo.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_HeaderLogovue_type_script_lang_ts_ = (HeaderLogovue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/HeaderLogo.vue



function HeaderLogo_injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var HeaderLogo_component = Object(componentNormalizer["a" /* default */])(
  components_HeaderLogovue_type_script_lang_ts_,
  HeaderLogovue_type_template_id_ae09f2b2_scoped_true_render,
  HeaderLogovue_type_template_id_ae09f2b2_scoped_true_staticRenderFns,
  false,
  HeaderLogo_injectStyles,
  "ae09f2b2",
  "a48a3cb4"
  
)

/* harmony default export */ var HeaderLogo = (HeaderLogo_component.exports);
// EXTERNAL MODULE: ./composables/useApi/index.ts
var useApi = __webpack_require__(33);

// CONCATENATED MODULE: ./components/TopBar/checkStoresAndCurrency.gql.ts
/* harmony default export */ var checkStoresAndCurrency_gql = (`
  query getStoresAndCurrencies {
      availableStores {
        store_code
      }
    currency {
      available_currency_codes
    }
  }
`);
// CONCATENATED MODULE: ./components/TopBar/useTopBar.ts



const useTopBar = () => {
  const {
    query
  } = Object(useApi["b" /* useApi */])();
  const hasStoresToSelect = Object(runtime["l" /* ref */])(null);
  const hasCurrencyToSelect = Object(runtime["l" /* ref */])(null);
  Object(runtime["g" /* onMounted */])(() => {
    query(checkStoresAndCurrency_gql).then(response => {
      var _a, _b, _c, _d;
      // eslint-disable-next-line promise/always-return
      hasStoresToSelect.value = (_b = ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.availableStores.length) > 1) !== null && _b !== void 0 ? _b : false;
      // eslint-disable-next-line promise/always-return
      hasCurrencyToSelect.value = (_d = ((_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.currency.available_currency_codes.length) > 1) !== null && _d !== void 0 ? _d : false;
    }).catch(() => {
      hasStoresToSelect.value = false;
      hasCurrencyToSelect.value = false;
    });
  });
  return {
    hasStoresToSelect,
    hasCurrencyToSelect
  };
};
/* harmony default export */ var TopBar_useTopBar = (useTopBar);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/AppHeader.vue?vue&type=script&lang=ts&












/* harmony default export */ var AppHeadervue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  components: {
    HeaderNavigation: HeaderNavigation,
    SfHeader: SfHeader,
    SfOverlay: SfOverlay["a" /* default */],
    HeaderLogo: HeaderLogo,
    SvgImage: SvgImage["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfBadge: SfBadge["a" /* default */],
    CurrencySelector: () => __webpack_require__.e(/* import() */ 56).then(__webpack_require__.bind(null, 603)),
    StoreSwitcher: () => __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(null, 604)),
    SearchBar: () => __webpack_require__.e(/* import() */ 109).then(__webpack_require__.bind(null, 611)),
    SearchResults: () => __webpack_require__.e(/* import() */ 82).then(__webpack_require__.bind(null, 601))
  },
  setup() {
    const router = Object(runtime["v" /* useRouter */])();
    const {
      app
    } = Object(runtime["s" /* useContext */])();
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal
    } = Object(composables["p" /* useUiState */])();
    const {
      setTermForUrl,
      getCatLink
    } = Object(composables["n" /* useUiHelpers */])();
    const {
      isAuthenticated
    } = Object(useUser["b" /* useUser */])();
    const {
      loadTotalQty: loadCartTotalQty,
      cart
    } = Object(useCart["b" /* useCart */])();
    const {
      loadItemsCount: loadWishlistItemsCount
    } = Object(useWishlist["b" /* useWishlist */])();
    const {
      categories: categoryList,
      load: categoriesListLoad
    } = Object(useCategory["a" /* useCategory */])();
    const {
      hasCurrencyToSelect,
      hasStoresToSelect
    } = useTopBar();
    const isSearchOpen = Object(runtime["l" /* ref */])(false);
    const productSearchResults = Object(runtime["l" /* ref */])(null);
    const wishlistStore = Object(store_wishlistStore["a" /* useWishlistStore */])();
    const wishlistItemsQty = Object(runtime["a" /* computed */])(() => {
      var _a, _b;
      return (_b = (_a = wishlistStore.wishlist) === null || _a === void 0 ? void 0 : _a.items_count) !== null && _b !== void 0 ? _b : 0;
    });
    const wishlistHasProducts = Object(runtime["a" /* computed */])(() => wishlistItemsQty.value > 0);
    const accountIcon = Object(runtime["a" /* computed */])(() => isAuthenticated.value ? 'profile_fill' : 'profile');
    const categoryTree = Object(runtime["l" /* ref */])([]);
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        await router.push(app.localeRoute({
          name: 'customer-my-profile'
        }));
      } else {
        toggleLoginModal();
      }
    };
    Object(runtime["t" /* useFetch */])(async () => {
      var _a, _b;
      await categoriesListLoad({
        pageSize: 20
      });
      categoryTree.value = (_b = (_a = categoryList.value) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.children.filter(category => category.include_in_menu);
    });
    Object(runtime["g" /* onMounted */])(async () => {
      if (app.$device.isDesktop) {
        await loadCartTotalQty();
        // eslint-disable-next-line promise/catch-or-return
        await loadWishlistItemsCount();
      }
    });
    return {
      accountIcon,
      cartTotalItems: Object(runtime["a" /* computed */])(() => {
        var _a, _b;
        return (_b = (_a = cart.value) === null || _a === void 0 ? void 0 : _a.total_quantity) !== null && _b !== void 0 ? _b : 0;
      }),
      categoryTree,
      getCatLink,
      handleAccountClick,
      isAuthenticated,
      isSearchOpen,
      productSearchResults,
      setTermForUrl,
      toggleCartSidebar,
      toggleWishlistSidebar,
      wishlistHasProducts,
      wishlistItemsQty,
      hasCurrencyToSelect,
      hasStoresToSelect
    };
  }
}));
// CONCATENATED MODULE: ./components/AppHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AppHeadervue_type_script_lang_ts_ = (AppHeadervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/AppHeader.vue



function AppHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(235)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppHeader_component = Object(componentNormalizer["a" /* default */])(
  components_AppHeadervue_type_script_lang_ts_,
  AppHeadervue_type_template_id_2a6e0524_scoped_true_render,
  AppHeadervue_type_template_id_2a6e0524_scoped_true_staticRenderFns,
  false,
  AppHeader_injectStyles,
  "2a6e0524",
  "382e1bb0"
  
)

/* harmony default export */ var AppHeader = (AppHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/BottomNavigation.vue?vue&type=template&id=82e65b58&scoped=true&
var BottomNavigationvue_type_template_id_82e65b58_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"smartphone-only"},[_c('SfBottomNavigation',{staticClass:"navigation-bottom"},[_c('SfBottomNavigationItem',{class:{ 'sf-bottom-navigation__item--active': _vm.$route.name && _vm.$route.name.startsWith('home') },attrs:{"label":_vm.$t('Home'),"data-testid":"bottom-navigation-home"},on:{"click":_vm.handleHomeClick},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SvgImage',{attrs:{"icon":"home","label":_vm.$t('Home'),"width":"20","height":"20"}})]},proxy:true}])}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"label":_vm.$t('Menu'),"data-testid":"bottom-navigation-menu"},on:{"click":_vm.loadCategoryMenu},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SvgImage',{attrs:{"icon":"menu","label":_vm.$t('Menu'),"width":"20","height":"20"}})]},proxy:true}])}),_vm._v(" "),(_vm.isAuthenticated)?_c('SfBottomNavigationItem',{attrs:{"label":_vm.$t('Wishlist'),"data-testid":"bottom-navigation-wishlist"},on:{"click":_vm.toggleWishlistSidebar},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SvgImage',{attrs:{"icon":"heart","label":_vm.$t('Wishlist'),"width":"20","height":"20"}})]},proxy:true}],null,false,2208007988)}):_vm._e(),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"label":_vm.$t('Account'),"data-testid":"bottom-navigation-account"},on:{"click":_vm.handleAccountClick},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SvgImage',{attrs:{"icon":"profile","label":_vm.$t('Account'),"width":"20","height":"20"}})]},proxy:true}])}),_vm._v(" "),_c('SfBottomNavigationItem',{attrs:{"label":_vm.$t('Cart'),"data-testid":"bottom-navigation-cart"},on:{"click":_vm.toggleCartSidebar},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_c('SfCircleIcon',{attrs:{"aria-label":"Go to cart"}},[_c('SvgImage',{staticClass:"navigation-bottom__add-to-cart",attrs:{"icon":"add_to_cart","width":"25","height":"25"}})],1)]},proxy:true}])})],1),_vm._ssrNode(" "),(_vm.isMobileMenuOpen)?_c('MobileCategorySidebar'):_vm._e()],2)}
var BottomNavigationvue_type_template_id_82e65b58_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/BottomNavigation.vue?vue&type=template&id=82e65b58&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=5b744ae0&
var SfBottomNavigationvue_type_template_id_5b744ae0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-bottom-navigation"},[_vm._t("default")],2)}
var SfBottomNavigationvue_type_template_id_5b744ae0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=template&id=5b744ae0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=13417594&
var SfBottomNavigationItemvue_type_template_id_13417594_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._g({staticClass:"sf-bottom-navigation-item",class:{
    'is-active': _vm.isActive,
    'is-floating': _vm.isFloating,
    center: !_vm.icon || !_vm.label,
  }},_vm.$listeners),[_vm._t("icon",function(){return [(_vm.isFloating)?_c('SfCircleIcon',{attrs:{"icon":_vm.icon,"icon-color":"white","icon-size":"28px","aria-label":_vm.label}}):(_vm.icon)?_c('SfButton',{staticClass:"sf-button--pure sf-bottom-navigation-item__icon",attrs:{"aria-label":_vm.label}},[_c('SfIcon',{attrs:{"icon":_vm.currentIcon,"size":_vm.iconSize}})],1):_vm._e()]},null,{ icon: _vm.icon, iconActive: _vm.iconActive, iconSize: _vm.iconSize, isFloating: _vm.isFloating }),_vm._ssrNode(" "),_vm._t("label",function(){return [_c('div',{staticClass:"sf-bottom-navigation-item__label",class:{
        'display-none': !_vm.label,
        'has-margin': _vm.icon,
      }},[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")])]},null,{ label: _vm.label })],2)}
var SfBottomNavigationItemvue_type_template_id_13417594_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=template&id=13417594&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfCircleIcon/SfCircleIcon.vue + 4 modules
var SfCircleIcon = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SfBottomNavigationItemvue_type_script_lang_js_ = ({
  name: "SfBottomNavigationItem",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  components: {
    SfCircleIcon: SfCircleIcon["a" /* default */],
    SfIcon: SfIcon["a" /* default */],
    SfButton: SfButton["a" /* default */]
  },
  props: {
    icon: {
      type: [String, Array],
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    },
    iconActive: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "20px"
    },
    isFloating: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive ? this.iconActive : this.icon;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfBottomNavigationItemvue_type_script_lang_js_ = (SfBottomNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem.vue





/* normalize component */

var SfBottomNavigationItem_component = Object(componentNormalizer["a" /* default */])(
  _internal_SfBottomNavigationItemvue_type_script_lang_js_,
  SfBottomNavigationItemvue_type_template_id_13417594_render,
  SfBottomNavigationItemvue_type_template_id_13417594_staticRenderFns,
  false,
  null,
  null,
  "331f07d3"
  
)

/* harmony default export */ var SfBottomNavigationItem = (SfBottomNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//



external_vue_default.a.component("SfBottomNavigationItem", SfBottomNavigationItem);
/* harmony default export */ var SfBottomNavigationvue_type_script_lang_js_ = ({
  name: "SfBottomNavigation"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_ = (SfBottomNavigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBottomNavigation/SfBottomNavigation.vue



function SfBottomNavigation_injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfBottomNavigation_component = Object(componentNormalizer["a" /* default */])(
  SfBottomNavigation_SfBottomNavigationvue_type_script_lang_js_,
  SfBottomNavigationvue_type_template_id_5b744ae0_render,
  SfBottomNavigationvue_type_template_id_5b744ae0_staticRenderFns,
  false,
  SfBottomNavigation_injectStyles,
  null,
  "7a9415e0"
  
)

/* harmony default export */ var SfBottomNavigation = (SfBottomNavigation_component.exports);
// EXTERNAL MODULE: ./composables/useUiState/index.ts + 1 modules
var useUiState = __webpack_require__(50);

// EXTERNAL MODULE: ./modules/catalog/category/stores/category.ts + 1 modules
var category = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/BottomNavigation.vue?vue&type=script&lang=ts&






const MobileCategorySidebar = () => __webpack_require__.e(/* import() */ 100).then(__webpack_require__.bind(null, 612));
/* harmony default export */ var BottomNavigationvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'BottomNavigation',
  components: {
    SfBottomNavigation: SfBottomNavigation,
    SfCircleIcon: SfCircleIcon["a" /* default */],
    MobileCategorySidebar,
    SvgImage: SvgImage["a" /* default */]
  },
  setup() {
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
      toggleMobileMenu,
      isMobileMenuOpen
    } = Object(useUiState["a" /* useUiState */])();
    const {
      isAuthenticated
    } = Object(useUser["b" /* useUser */])();
    const router = Object(runtime["v" /* useRouter */])();
    const {
      app
    } = Object(runtime["s" /* useContext */])();
    const handleHomeClick = async () => {
      const homePath = app.localeRoute({
        name: 'home'
      });
      await router.push(homePath);
      if (isMobileMenuOpen.value) {
        toggleMobileMenu();
      }
    };
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        await router.push(app.localeRoute({
          name: 'customer'
        }));
      } else {
        toggleLoginModal();
      }
    };
    const loadCategoryMenu = async () => {
      const categories = Object(category["a" /* useCategoryStore */])();
      if (categories.categories === null) {
        await categories.load();
      }
      toggleMobileMenu();
    };
    return {
      isAuthenticated,
      isMobileMenuOpen,
      toggleWishlistSidebar,
      toggleCartSidebar,
      toggleMobileMenu,
      loadCategoryMenu,
      handleAccountClick,
      handleHomeClick
    };
  }
}));
// CONCATENATED MODULE: ./components/BottomNavigation.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_BottomNavigationvue_type_script_lang_ts_ = (BottomNavigationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/BottomNavigation.vue



function BottomNavigation_injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BottomNavigation_component = Object(componentNormalizer["a" /* default */])(
  components_BottomNavigationvue_type_script_lang_ts_,
  BottomNavigationvue_type_template_id_82e65b58_scoped_true_render,
  BottomNavigationvue_type_template_id_82e65b58_scoped_true_staticRenderFns,
  false,
  BottomNavigation_injectStyles,
  "82e65b58",
  "04f1de6d"
  
)

/* harmony default export */ var BottomNavigation = (BottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/General/IconSprite.vue?vue&type=template&id=897b0aba&
var IconSpritevue_type_template_id_897b0aba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticStyle:{"position":"absolute","visibility":"hidden"},attrs:{"width":"0","height":"0"}},[_vm._ssrNode("<symbol id=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 231 221.4210525\"><g><path d=\"M79.2165 5.92401C77.6462 6.90053 76.1052 8.44147 73.0234 11.5234C69.9418 14.6048 68.4004 16.1463 67.424 17.7165C64.192 22.914 64.192 29.496 67.424 34.6935C68.4003 36.2635 69.9409 37.8041 73.0215 40.8848L73.023 40.8864C76.1049 43.9682 77.6462 45.5095 79.2165 46.486C84.414 49.718 90.996 49.718 96.1935 46.486C97.7638 45.5095 99.3048 43.9685 102.387 40.8867C105.469 37.8048 107.009 36.2638 107.986 34.6935C111.218 29.496 111.218 22.914 107.986 17.7165C107.009 16.1462 105.469 14.6053 102.387 11.5234C99.3048 8.44154 97.7638 6.90053 96.1935 5.92401C90.996 2.69202 84.414 2.69198 79.2165 5.92401Z\" fill=\"#02C652\"></path> <path d=\"M99.4928 102.341L135.353 66.4804C136.839 64.9946 138.603 63.8161 140.544 63.012C142.485 62.2079 144.566 61.7941 146.667 61.7941C148.768 61.7941 150.848 62.2079 152.79 63.012C154.731 63.8161 156.495 64.9946 157.98 66.4803L176 84.4998C175.891 84.608 88 172.5 88 172.5L0 84.4999C0.238745 84.2618 9.9816 74.5188 18.2092 66.291C19.6941 64.8059 21.4571 63.6279 23.3973 62.8242C25.3376 62.0205 27.4172 61.607 29.5173 61.6071C31.6174 61.6073 33.6969 62.0212 35.6371 62.8252C37.5772 63.6292 39.3399 64.8075 40.8246 66.2928L76.8743 102.342C78.3595 103.827 80.1227 105.005 82.0632 105.809C84.0037 106.613 86.0835 107.026 88.1838 107.026C90.2842 107.026 92.3639 106.612 94.3043 105.808C96.2447 105.004 98.0077 103.826 99.4928 102.341Z\" fill=\"#02C652\"></path></g></symbol> <symbol id=\"add_to_cart\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M10.281 17.165c-1.177 0-2.147.97-2.147 2.147 0 1.177.97 2.147 2.147 2.147 1.177 0 2.147-.97 2.147-2.146a2.16 2.16 0 00-2.147-2.148zm0 2.994a.838.838 0 01-.847-.847c0-.475.372-.847.847-.847s.847.372.847.847a.865.865 0 01-.847.847zM17.386 17.165c-1.177 0-2.148.97-2.148 2.147 0 1.177.97 2.147 2.148 2.147 1.176 0 2.147-.97 2.147-2.147-.02-1.176-.97-2.147-2.147-2.147zm0 2.994a.838.838 0 01-.847-.847c0-.475.371-.847.847-.847.475 0 .847.372.847.847a.864.864 0 01-.847.847zM14.132 11.834a.66.66 0 01-.206-.033c-.007-.002-.012-.003-.017-.006a.598.598 0 01-.198-.117l-2.14-1.827a.499.499 0 01-.175-.375c0-.142.062-.276.175-.376a.627.627 0 01.42-.156c.158 0 .309.055.42.156l1.126.92V4.21c0-.293.266-.532.595-.532.328 0 .595.238.595.532v5.807l1.126-.92a.628.628 0 01.42-.155c.158 0 .308.055.42.156.112.1.174.234.174.375a.499.499 0 01-.174.376l-2.141 1.827a.62.62 0 01-.195.116l-.02.007a.62.62 0 01-.205.034z\"></path> <path d=\"M19.634 6.035c.599 0 1.177.29 1.55.764.392.475.515 1.095.371 1.674l-1.549 6.36a1.968 1.968 0 01-1.92 1.508h-8.24c-.908 0-1.692-.62-1.92-1.508L5.407 4.797a.682.682 0 00-.66-.516H2.64A.644.644 0 012 3.64C2 3.288 2.29 3 2.64 3h2.107c.909 0 1.693.62 1.92 1.508l.392 1.527h4.524v1.302H7.39l1.796 7.206c.083.31.351.516.66.516h8.24c.31 0 .579-.206.661-.516l1.549-6.36a.65.65 0 00-.123-.578.686.686 0 00-.538-.268H16.68V6.035h2.955z\"></path></g></symbol> <symbol id=\"added_to_cart\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M10.547 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056a2.066 2.066 0 002.056-2.055c0-1.128-.93-2.058-2.056-2.058zM17.35 16.567c-1.127 0-2.057.93-2.057 2.057 0 1.127.93 2.056 2.057 2.056 1.127 0 2.056-.929 2.056-2.056-.02-1.126-.93-2.057-2.056-2.057z\"></path> <path d=\"M19.506 5.908c.573 0 1.127.276 1.483.731.376.456.494 1.049.356 1.604l-1.483 6.091a1.885 1.885 0 01-1.84 1.444h-7.89c-.871 0-1.622-.593-1.84-1.444L5.879 4.722a.653.653 0 00-.632-.494H3.229a.616.616 0 01-.613-.614c0-.337.277-.613.613-.613h2.018c.87 0 1.621.593 1.839 1.444l.375 1.463h12.045zm-6.908 8.19a.971.971 0 00.695.293h.018a.951.951 0 00.704-.321l4.352-4.84c.37-.405.342-1.039-.056-1.407a.956.956 0 00-1.38.057l-3.666 4.082-1.76-1.795a.964.964 0 00-1.38 0c-.379.387-.379 1.02 0 1.407l2.473 2.524z\"></path></g></symbol> <symbol id=\"empty_cart\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.561 6.874a2.026 2.026 0 00-1.579-.779H7.16l-.4-1.558A2.024 2.024 0 004.801 3H2.653A.656.656 0 002 3.653c0 .358.294.653.653.653h2.148c.316 0 .59.21.673.527l2.57 10.234a2.024 2.024 0 001.958 1.537h8.4c.927 0 1.749-.632 1.96-1.537L21.94 8.58a1.931 1.931 0 00-.38-1.707zm-.904 1.41l-1.58 6.487a.695.695 0 01-.673.526h-8.402a.695.695 0 01-.674-.526L7.496 7.422h12.487a.7.7 0 01.548.274.662.662 0 01.126.589zM10.445 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189a2.2 2.2 0 002.19-2.189c0-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863s.863.379.863.863c0 .464-.4.864-.863.864zM17.688 17.445c-1.2 0-2.19.99-2.19 2.19s.99 2.189 2.19 2.189 2.19-.99 2.19-2.19c-.021-1.2-.99-2.19-2.19-2.19zm0 3.053a.854.854 0 01-.864-.864c0-.484.38-.863.864-.863.485 0 .864.379.864.863 0 .464-.4.864-.864.864z\"></path></g></symbol> <symbol id=\"clock\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.463A8.525 8.525 0 0120.537 12 8.525 8.525 0 0112 20.537 8.525 8.525 0 013.463 12 8.525 8.525 0 0112 3.463zm0 1.22a.732.732 0 00-.732.732V12c0 .27.148.506.366.633l5.282 3.048a.73.73 0 10.732-1.265l-4.916-2.835V5.415A.732.732 0 0012 4.683z\"></path></g></symbol> <symbol id=\"arrow_left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M24 13L2 13L2 11L24 11L24 13Z\"></path> <path d=\"M6.61667 6L8 7.25423L2.76478 12L8 16.7458L6.61667 18L-5.24538e-07 12L6.61667 6Z\"></path></g></symbol> <symbol id=\"arrow_right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M0 11L22 11L22 13L-3.49691e-07 13L0 11Z\"></path> <path d=\"M17.3833 18L16 16.7458L21.2352 12L16 7.25423L17.3833 6L24 12L17.3833 18Z\"></path></g></symbol> <symbol id=\"arrow_top\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M11 24L11 2L13 2L13 24L11 24Z\"></path> <path d=\"M18 6.61667L16.7458 8L12 2.76478L7.25423 8L6 6.61667L12 -2.62269e-07L18 6.61667Z\"></path></g></symbol> <symbol id=\"arrow_down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M13 0L13 22L11 22L11 -8.74228e-08L13 0Z\"></path> <path d=\"M6 17.3833L7.25423 16L12 21.2352L16.7458 16L18 17.3833L12 24L6 17.3833Z\"></path></g></symbol> <symbol id=\"check\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M10.7136 17C10.3594 17 10.0181 16.8476 9.76516 16.5711L6.38899 12.8793C5.87034 12.3122 5.87034 11.3859 6.38899 10.8194C6.90765 10.2522 7.75481 10.2522 8.27289 10.8194L10.6755 13.4465L15.6833 7.47328C16.1762 6.87859 17.0239 6.837 17.5672 7.3901C18.111 7.92914 18.1491 8.85607 17.6432 9.45009L11.7 16.5301C11.4599 16.8207 11.1057 17 10.7387 17L10.7136 17Z\"></path></g></symbol> <symbol id=\"chevron_down\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M2 8.364L3.6 7l8.4 7.254L20.4 7 22 8.364 12 17z\"></path></g></symbol> <symbol id=\"chevron_up\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M22 15.636L20.4 17 12 9.746 3.6 17 2 15.636 12 7z\"></path></g></symbol> <symbol id=\"chevron_left\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M15.636 2L17 3.6 9.746 12 17 20.4 15.636 22 7 12z\"></path></g></symbol> <symbol id=\"chevron_right\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M8.364 22L7 20.4l7.254-8.4L7 3.6 8.364 2 17 12z\"></path></g></symbol> <symbol id=\"cross\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.261 2.22a.748.748 0 00-1.057 0l-8.464 8.463-8.463-8.464a.748.748 0 10-1.058 1.058l8.464 8.463-8.464 8.464a.748.748 0 101.058 1.057l8.463-8.463 8.464 8.463a.748.748 0 101.057-1.057l-8.463-8.464 8.463-8.463a.748.748 0 000-1.058z\"></path></g></symbol> <symbol id=\"heart\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z\"></path></g></symbol> <symbol id=\"heart_fill\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 20.429a.878.878 0 01-.52-.168l-.442-.325c-4.064-2.976-6.517-4.773-7.945-7.17-1.369-2.291-1.204-4.1-.827-5.215.46-1.353 1.496-2.443 2.918-3.067A5.85 5.85 0 017.544 4c1.764 0 3.394.711 4.456 1.883C13.06 4.711 14.69 4 16.455 4c.835 0 1.628.162 2.36.483 1.422.624 2.458 1.713 2.918 3.067.379 1.113.542 2.923-.827 5.215-1.429 2.397-3.885 4.196-7.954 7.176l-.432.32a.884.884 0 01-.52.168z\"></path></g></symbol> <symbol id=\"home\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M19.354 9.45v11.27c.001-.13-.002.099-.002.043 0 .053.025-.074.002-.026a.172.172 0 00-.015.053c-.008.05.041-.061.008-.024a.208.208 0 00-.026.045c-.02.045.056-.05.015-.02a.197.197 0 00-.037.036c-.02.026.072-.05-.002 0l-.012.007c-.031.016-.031.016 0 .001l.024-.01-.039.013c-.098.024.076.004-.029.006H5.65c-.28 0-.556.002-.835 0h-.045c-.076 0 .02-.004.026.004-.002-.004-.045-.012-.054-.014-.077-.018.027.004.023.01-.001.001-.04-.024-.046-.027-.072-.034.046.056 0-.001a.292.292 0 01-.037-.04c.01-.012.045.076.016.018a.687.687 0 01-.026-.047c.015-.008.025.087.01.023a.93.93 0 01-.015-.053c.012-.002.004.092.004.026V9.43c-.067.119-.135.236-.203.354L5.962 8.68l.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.4-.293.814-.576 1.204-.886a.35.35 0 00.018-.012h-.414l1 .737c.712.523 1.424 1.045 2.135 1.57l1.969 1.45c.256.19.512.378.77.567.61.451 1.221.902 1.835 1.353.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562a604.21 604.21 0 01-1.691-1.247c-.267-.197-.532-.392-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H19.037c.24 0 .47-.002.685-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41-.225.02-.411.19-.411.42z\"></path> <path d=\"M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149zM14.05 13.809V20.34c0 .302-.012.607 0 .909v.014l.41-.41H9.56l.41.41V13.785c0-.066.01.026-.006.026a.727.727 0 01.02-.078c.019-.08-.042.07 0 0a.95.95 0 01.042-.067c.014.01-.062.066-.015.023.004-.004.056-.056.057-.053.01.014-.083.049-.008.01.007-.002.057-.033.057-.032-.016.007-.032.015-.049.02a.336.336 0 01.051-.016l.053-.012c-.064.008-.073.008-.026.007h3.719c.089.001-.012.004-.012-.005a.74.74 0 01.078.021c.074.018-.07-.045 0 0l.067.041c-.004.007-.075-.072-.023-.015a.651.651 0 01.054.058c-.007.004-.056-.089-.017-.02.002.003.041.066.04.069-.018.006-.027-.086-.013-.025l.02.078a.459.459 0 00-.007-.056v.05c.004.215.184.42.41.41.217-.01.417-.18.41-.41a1.04 1.04 0 00-1.024-1.024c-.094-.002-.19 0-.285 0h-3.089c-.1 0-.2-.002-.302 0-.548.01-.98.425-1.023.968-.015.182-.002.369-.002.551v4.746c0 .726-.01 1.452 0 2.175v.033c0 .221.189.41.41.41h4.901c.222 0 .41-.189.41-.41v-6.532c0-.301.009-.605 0-.908v-.015c0-.215-.188-.42-.41-.41a.426.426 0 00-.406.416z\"></path></g></symbol> <symbol id=\"home_fill\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149z\"></path> <path d=\"M19.355 9.45V20.738a.159.159 0 01-.002.025c0 .053.025-.074.002-.026a.133.133 0 00-.012.035.406.406 0 00-.003.018c-.008.05.04-.061.008-.024a.237.237 0 00-.026.045c-.02.045.056-.05.015-.02a.274.274 0 00-.036.034l-.001.002c-.02.026.07-.049.001-.002l-.003.002a.086.086 0 00-.011.006c-.032.017-.032.017-.001.002l.024-.01-.023.008a.562.562 0 01-.039.011H15.313l-.378-.009V12.49H9.14v8.358l-1.66-.004H5.65c-.28 0-.556.002-.835 0H4.77c-.076 0 .02-.004.026.004l-.01-.004-.037-.009-.007-.001c-.077-.018.027.004.023.01l-.016-.009-.028-.016a.089.089 0 00-.002-.002c-.071-.034.042.053.002.002l-.002-.003a.227.227 0 01-.037-.04c.011.005.018.017.022.026.007.013.009.02-.006-.008a.438.438 0 01-.026-.047c.008.002.013.017.015.029.004.017.003.028-.005-.006a.162.162 0 01-.007-.023l-.001-.004-.007-.026c.002 0 .003.002.004.005a.08.08 0 01.003.02l-.003-.02V9.429c-.067.119-.135.236-.203.354l.203-.15 1.292-.953.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.337-.248.685-.487 1.02-.742a11.164 11.164 0 00.202-.156H11.8l.211.156c.264.193.525.387.79.58l.173.128c.654.48 1.307.961 1.96 1.443l1.97 1.45c.256.19.512.378.77.567l.034.026c.548.404 1.097.81 1.647 1.214l.154.113c.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562-.564-.414-1.128-.83-1.691-1.247a217.81 217.81 0 00-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H9.14V12.49h5.794l-.07 9.172h4.172c.24 0 .47-.002.686-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41\"></path> <path d=\"M19.355 10.256v-.61l-1.647-1.214-.035-.026-.77-.566-1.968-1.45c-.654-.483-1.307-.963-1.961-1.444L12.8 4.82c-.264-.195-.525-.388-.789-.581-.334.255-.682.494-1.02.742l-2.173 1.6c-.621.46-1.245.916-1.866 1.374l-.989.726-1.292.953v11.081l.003.029c.006.006.01.02.013.033a.099.099 0 01.017.026c.008.009.015.015.015.014l.03.02c.01.001.027.005.038.008h.028c.279.002.556 0 .835 0h3.49v-7.06a1 1 0 011-1h3.731a1 1 0 011 1v7.06H19.248a.313.313 0 01.039-.01.086.086 0 01.011-.007.29.29 0 01.03-.03.218.218 0 01.015-.025.133.133 0 01.011-.034v-.036c.002-.33 0-.66 0-.989V10.256z\"></path></g></symbol> <symbol id=\"store\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M5.21602 10.7781C5.15525 11.0027 5.16536 11.1843 5.2323 11.3176L5.21602 10.7781ZM5.21602 10.7781C5.27661 10.5541 5.40553 10.2963 5.60276 10.0206M5.21602 10.7781L5.60276 10.0206M5.60276 10.0206L7.05524 7.99014M5.60276 10.0206L7.05524 7.99014M7.05524 7.99014H8.53621L6.42279 11.7745C6.11281 11.7695 5.85211 11.7245 5.65108 11.6474C5.43734 11.5655 5.29917 11.4508 5.2323 11.3176L7.05524 7.99014ZM6.67908 12.5614H17.321V18.6798C17.321 18.7553 17.2612 18.8137 17.1908 18.8137H14.3905V13.758C14.3905 13.5096 14.1925 13.3061 13.9442 13.3061H10.254C10.0057 13.3061 9.80771 13.5096 9.80771 13.758V18.8143L6.80939 18.8137H6.80937C6.73877 18.8137 6.67851 18.7551 6.67851 18.6792L6.67908 12.5614ZM18.7678 11.3176L18.8572 11.3625L18.7678 11.3176C18.7009 11.4508 18.5628 11.5655 18.349 11.6475C18.1358 11.7293 17.8553 11.775 17.5201 11.775H17.4299L15.3157 7.99072H16.9443L18.3973 10.0212L18.3973 10.0212C18.5945 10.2966 18.7235 10.5543 18.7841 10.7781C18.8448 11.0027 18.8347 11.1843 18.7678 11.3176ZM19.0263 9.56002L17.6364 7.61814V5.3203C17.6364 4.81296 17.2322 4.4 16.729 4.4H7.27097C6.76777 4.4 6.36356 4.81296 6.36356 5.3203V7.61754L4.9737 9.56003C4.97369 9.56004 4.97368 9.56005 4.97367 9.56006C4.45214 10.2884 4.28666 10.9765 4.47509 11.5198C4.6581 12.0474 5.16129 12.4013 5.90186 12.5182V18.6797C5.90186 19.187 6.30606 19.6 6.80926 19.6H17.1901C17.6933 19.6 18.0975 19.187 18.0975 18.6797L18.0981 12.5177C18.8387 12.401 19.3419 12.0473 19.5249 11.5197C19.7134 10.9765 19.5479 10.2884 19.0263 9.56005C19.0263 9.56004 19.0263 9.56003 19.0263 9.56002ZM7.14018 5.3203C7.14018 5.24468 7.20019 5.18575 7.27104 5.18575H16.7291C16.7995 5.18575 16.86 5.24485 16.86 5.3203V7.20492H7.14021L7.14018 5.3203ZM10.0243 7.99072L9.01761 11.775H7.31494L9.42916 7.99072H10.0243ZM9.82215 11.775L10.8289 7.99072H11.538V11.775H9.82215ZM12.3145 7.99072H13.0236L14.0303 11.775H12.3145L12.3145 7.99072ZM14.8349 11.775L13.8282 7.99072H14.424L16.5382 11.775H14.8349ZM13.6139 18.8137H10.5843V14.0919H13.6139V18.8137Z\"></path></g></symbol> <symbol id=\"menu\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.883 17.628l-3.27-3.407a5.694 5.694 0 001.301-3.64C19.914 7.502 17.51 5 14.557 5 11.604 5 9.2 7.504 9.2 10.58c0 3.077 2.404 5.58 5.357 5.58a5.212 5.212 0 003.495-1.355l3.27 3.407c.078.08.18.121.28.121.102 0 .203-.04.28-.121a.423.423 0 00.001-.584zm-7.326-2.293c-2.516 0-4.564-2.133-4.564-4.755 0-2.62 2.047-4.754 4.564-4.754 2.516 0 4.564 2.133 4.564 4.754 0 2.622-2.048 4.755-4.564 4.755zM2.417 5.833h5.566a.417.417 0 110 .834H2.417a.417.417 0 110-.834zM2.417 11.667h4.766a.417.417 0 110 .833H2.417a.417.417 0 110-.833zM2.417 16.667H10.383a.417.417 0 110 .833H2.417a.417.417 0 110-.833z\"></path></g></symbol> <symbol id=\"message\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M4.26182 20.3996C4.047 20.4006 3.84561 20.2963 3.72166 20.1216C3.59772 19.9459 3.56571 19.7217 3.63697 19.5191L4.7813 16.2814H4.78233C3.38704 13.9241 3.22798 11.0346 4.35578 8.53875C5.48462 6.04298 7.75777 4.25417 10.4483 3.74569C13.1377 3.23826 15.9067 4.07432 17.867 5.98724C19.8262 7.90015 20.7309 10.6491 20.2899 13.3526C19.8489 16.0562 18.119 18.3751 15.6537 19.5656C13.1874 20.7561 10.2965 20.6683 7.90771 19.331L4.45205 20.3738C4.39008 20.3913 4.32605 20.4006 4.26202 20.3996L4.26182 20.3996ZM7.99214 17.9524C8.11297 17.9535 8.23175 17.9865 8.33503 18.0506C10.3428 19.2732 12.8245 19.423 14.9645 18.4516C17.1045 17.4801 18.6269 15.5136 19.0307 13.1976C19.4345 10.8817 18.6681 8.51516 16.9826 6.87593C15.2981 5.23689 12.9122 4.53726 10.6101 5.00746C8.30701 5.47664 6.38508 7.05472 5.47609 9.22299C4.5662 11.3912 4.78617 13.8684 6.06376 15.8423C6.18873 16.0304 6.20939 16.2691 6.11953 16.4769L5.32635 18.7442L7.80919 17.996V17.995C7.86806 17.9733 7.92899 17.9588 7.99199 17.9526L7.99214 17.9524Z\"></path></g></symbol> <symbol id=\"search\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z\"></path></g></symbol> <symbol id=\"profile\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z\"></path></g></symbol> <symbol id=\"profile_fill\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-9.268c-2.707 0-4.901-2.184-4.901-4.878S9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878z\"></path></g></symbol> <symbol id=\"newsletter\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M18.508 7.365v-4a.956.956 0 00-.953-.952H5.492a.956.956 0 00-.953.953v4c-1.904 1.936-2.031 1.968-2 2.127v11.079c0 .318.127.603.317.794.191.19.477.317.794.317h15.683c.317 0 .603-.126.794-.317.19-.19.317-.476.317-.794V9.492c.064-.222.032-.127-1.936-2.127zm1.365 13.175v.032l-5.174-5.143 5.174-5.175V20.54zm-.127-11.047l-1.238 1.206V8.254l1.238 1.239zM5.492 3.048h12.063c.19 0 .317.159.317.318v7.968l-3.84 3.872-2.508 2.476-6.35-6.35V3.366c0-.158.128-.317.318-.317zM3.207 20.603V10.254l5.142 5.175-5.142 5.174zM4.54 8.254v2.445L3.334 9.492 4.54 8.254zm-.858 12.793H3.65l5.175-5.174L11.3 18.35a.307.307 0 00.445 0l2.475-2.476 5.176 5.174H3.682z\"></path> <path d=\"M7.333 6.286h8.381M7.333 8.381h8.381M7.333 10.477h8.381\"></path></g></symbol> <symbol id=\"info\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z\"></path> <path d=\"M3.59961 12.0001C3.59961 16.6393 7.36042 20.4001 11.9996 20.4001C16.6388 20.4001 20.3996 16.6393 20.3996 12.0001C20.3996 7.36091 16.6388 3.6001 11.9996 3.6001C7.36042 3.6001 3.59961 7.36091 3.59961 12.0001ZM18.8723 12.0001C18.8723 15.7958 15.7953 18.8728 11.9996 18.8728C8.20385 18.8728 5.12683 15.7958 5.12683 12.0001C5.12683 8.20439 8.20385 5.12737 11.9996 5.12737C15.7953 5.12737 18.8723 8.20439 18.8723 12.0001ZM12.7632 15.0546V12.0001C12.7632 11.5784 12.4213 11.2365 11.9995 11.2365C11.5778 11.2365 11.2359 11.5784 11.2359 12.0001V15.0546C11.2359 15.4764 11.5778 15.8183 11.9995 15.8183C12.4213 15.8183 12.7632 15.4764 12.7632 15.0546ZM12.5395 10.2492C12.2413 10.5474 11.7578 10.5474 11.4596 10.2492C11.1613 9.95095 11.1613 9.46744 11.4596 9.16922C11.7578 8.87101 12.2413 8.87101 12.5395 9.16922C12.8377 9.46744 12.8377 9.95095 12.5395 10.2492Z\"></path></g></symbol> <symbol id=\"info_circle\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 2.4A9.588 9.588 0 002.4 12c0 5.311 4.288 9.6 9.6 9.6 5.311 0 9.6-4.289 9.6-9.6 0-5.312-4.289-9.6-9.6-9.6zm1.515 14.933c0 .47-.405.875-.875.875h-1.323a.893.893 0 01-.875-.875v-5.59c0-.49.405-.874.875-.874h1.323c.469 0 .875.405.875.875v5.59zm-1.537-7.915c-.982 0-1.792-.81-1.792-1.813s.811-1.814 1.792-1.814c1.003 0 1.813.811 1.813 1.814 0 1.003-.81 1.813-1.813 1.813z\"></path></g></symbol> <symbol id=\"info_shield\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M11.945 2L4 5.46c0 10.662 1.34 12.014 7.945 16.402 6.605-4.388 7.945-5.74 7.945-16.402L11.945 2zm0 4.469c.685 0 1.241.556 1.241 1.241l-.248 4.47a.993.993 0 11-1.986 0l-.249-4.47c0-.685.556-1.241 1.242-1.241zm0 7.448a1.49 1.49 0 110 2.98 1.49 1.49 0 010-2.98z\"></path></g></symbol> <symbol id=\"error\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z\"></path> <path d=\"M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM19.3636 12C19.3636 16.0668 16.0668 19.3636 12 19.3636C7.93318 19.3636 4.63636 16.0668 4.63636 12C4.63636 7.93318 7.93318 4.63636 12 4.63636C16.0668 4.63636 19.3636 7.93318 19.3636 12ZM11.1818 8.72727V12C11.1818 12.4519 11.5481 12.8182 12 12.8182C12.4519 12.8182 12.8182 12.4519 12.8182 12V8.72727C12.8182 8.2754 12.4519 7.90909 12 7.90909C11.5481 7.90909 11.1818 8.2754 11.1818 8.72727ZM12.5785 13.876C12.8981 14.1955 12.8981 14.7136 12.5785 15.0331C12.259 15.3526 11.741 15.3526 11.4215 15.0331C11.1019 14.7136 11.1019 14.1955 11.4215 13.876C11.741 13.5565 12.259 13.5565 12.5785 13.876Z\"></path></g></symbol> <symbol id=\"question_mark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 19.5C13.9894 19.5 15.8971 18.7098 17.3035 17.3035C18.7098 15.8971 19.5 13.9894 19.5 12C19.5 10.0106 18.7098 8.10287 17.3035 6.69653C15.8971 5.29021 13.9894 4.5 12 4.5C10.0106 4.5 8.10287 5.29022 6.69653 6.69653C5.29021 8.10285 4.5 10.0106 4.5 12C4.50245 13.9881 5.29328 15.8946 6.69967 17.3003C8.10538 18.7067 10.0119 19.4975 12 19.5ZM12 5.96394C13.6 5.96394 15.1352 6.59967 16.2669 7.73139C17.3986 8.86307 18.0343 10.3975 18.0343 11.9983C18.0343 13.5983 17.3992 15.1335 16.2675 16.2652C15.1358 17.3968 13.6014 18.0326 12.0013 18.0332C10.4006 18.0332 8.86607 17.3981 7.7339 16.2664C6.60223 15.1353 5.96582 13.6003 5.96582 12.0002C5.96766 10.4002 6.60339 8.86622 7.735 7.73516C8.86607 6.60348 10.3998 5.9677 12 5.96598V5.96394ZM12.6829 15.6752V15.6758C12.6829 15.9891 12.4935 16.2717 12.2041 16.3919C11.9142 16.512 11.5807 16.4452 11.3594 16.2239C11.1374 16.002 11.0712 15.6685 11.1914 15.3791C11.3109 15.0891 11.5936 14.9003 11.9074 14.9003C12.1134 14.9003 12.3108 14.9819 12.4561 15.1278C12.6014 15.2737 12.6829 15.4711 12.6829 15.6771V15.6752ZM9.4889 9.63366C9.42085 9.44055 9.43311 9.22905 9.522 9.04514C9.73412 8.59946 10.0676 8.22304 10.4839 7.9582C10.9001 7.69398 11.3826 7.55176 11.8761 7.54929H11.892H11.8914C12.5799 7.55175 13.2408 7.82088 13.7355 8.29904C14.2302 8.77784 14.5214 9.42889 14.5471 10.1167C14.5649 10.6813 14.4 11.2361 14.0776 11.6996C13.7551 12.1637 13.2916 12.5107 12.7564 12.6903C12.7564 12.6903 12.6798 12.7173 12.6798 12.7626V13.3781H12.6792C12.6792 13.8042 12.334 14.1494 11.908 14.1494C11.4819 14.1494 11.1368 13.8042 11.1368 13.3781V12.7626C11.1441 12.0638 11.5959 11.447 12.2605 11.2294C12.7184 11.0743 13.0213 10.6378 13.0059 10.1541C12.9747 9.56315 12.4904 9.09723 11.8982 9.08865C11.4776 9.09355 11.0969 9.33693 10.9173 9.71641C10.783 10.0015 10.4894 10.1762 10.1749 10.1578C9.86039 10.14 9.58881 9.9322 9.48888 9.63365L9.4889 9.63366Z\"></path></g></symbol> <symbol id=\"mail\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M19.713 19.587H4.126A2.126 2.126 0 012 17.462V6.126C2 4.952 2.952 4 4.126 4h15.587c1.173 0 2.125.952 2.125 2.126v11.336a2.126 2.126 0 01-2.125 2.125zM4.126 5.417a.708.708 0 00-.709.709v11.336a.71.71 0 00.708.708h15.588a.709.709 0 00.708-.708V6.126a.709.709 0 00-.708-.709H4.126z\"></path> <path d=\"M11.919 12.134a2.125 2.125 0 01-1.297-.44L2.751 5.638a.71.71 0 11.864-1.126l7.872 6.057a.71.71 0 00.864 0l7.872-6.057a.71.71 0 11.864 1.126l-7.872 6.058c-.372.285-.828.44-1.296.44z\"></path></g></symbol> <symbol id=\"marker\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z\"></path> <path d=\"M12.7391 19.5149C13.4579 18.9078 14.1764 18.2219 14.8489 17.469C16.8102 15.2733 17.9998 12.9602 17.9998 10.6001C17.9998 6.7341 15.0449 3.6001 11.3998 3.6001C7.75472 3.6001 4.7998 6.7341 4.7998 10.6001C4.7998 12.9602 5.98939 15.2733 7.95068 17.469C8.62318 18.2219 9.34176 18.9078 10.0605 19.5149C10.3125 19.7277 10.547 19.9158 10.7581 20.0775C10.8868 20.1761 10.9806 20.245 11.0337 20.2825C11.2554 20.4393 11.5442 20.4393 11.7659 20.2825C11.819 20.245 11.9128 20.1761 12.0415 20.0775C12.2526 19.9158 12.4871 19.7277 12.7391 19.5149ZM13.8906 16.5062C13.2637 17.208 12.5901 17.851 11.9167 18.4197C11.7329 18.5749 11.5597 18.7156 11.3997 18.8409C11.2398 18.7156 11.0665 18.5749 10.8827 18.4197C10.2093 17.851 9.53572 17.208 8.90885 16.5062C7.15764 14.5456 6.11973 12.5275 6.11973 10.6001C6.11973 7.50729 8.48366 5.00009 11.3997 5.00009C14.3158 5.00009 16.6797 7.50729 16.6797 10.6001C16.6797 12.5275 15.6418 14.5456 13.8906 16.5062ZM11.3998 13.4001C9.94173 13.4001 8.75977 12.1465 8.75977 10.6001C8.75977 9.0537 9.94173 7.8001 11.3998 7.8001C12.8578 7.8001 14.0398 9.0537 14.0398 10.6001C14.0398 12.1465 12.8578 13.4001 11.3998 13.4001ZM12.7199 10.6001C12.7199 11.3733 12.1289 12.0001 11.3999 12.0001C10.6709 12.0001 10.0799 11.3733 10.0799 10.6001C10.0799 9.82689 10.6709 9.20009 11.3999 9.20009C12.1289 9.20009 12.7199 9.82689 12.7199 10.6001Z\"></path></g></symbol> <symbol id=\"marker_fill\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12.438 22c2.597-2.948 7.509-8.491 7.509-12.562 0-4.07-3.369-7.438-7.509-7.438C8.368 2 5 5.369 5 9.438c0 4.07 4.912 9.614 7.438 12.562zm0-15.65c1.755 0 3.158 1.404 3.158 3.088a3.144 3.144 0 01-3.158 3.158c-1.684 0-3.087-1.403-3.087-3.158 0-1.684 1.403-3.087 3.087-3.087z\"></path></g></symbol> <symbol id=\"minus\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z\"></path></g></symbol> <symbol id=\"plus\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z\"></path> <path d=\"M11 11V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11Z\"></path></g></symbol> <symbol id=\"more\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M13.907 11.813c0 1.354-1.1 2.454-2.454 2.454A2.455 2.455 0 019 11.813c0-1.353 1.1-2.453 2.453-2.453 1.354 0 2.454 1.1 2.454 2.453zm-2.454-4.906c1.354 0 2.454-1.1 2.454-2.454C13.907 3.1 12.807 2 11.453 2A2.455 2.455 0 009 4.453c0 1.354 1.1 2.454 2.453 2.454zm0 9.813A2.455 2.455 0 009 19.173c0 1.354 1.1 2.454 2.453 2.454 1.354 0 2.454-1.1 2.454-2.454 0-1.353-1.1-2.453-2.454-2.453z\"></path></g></symbol> <symbol id=\"credits\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M8.462 3c-1.722 0-3.282.338-4.45.922C2.845 4.506 2 5.377 2 6.452v10.34c0 1.065.835 1.932 2.006 2.517 1.17.585 2.733.929 4.456.929 1.448 0 2.78-.248 3.863-.674.847.43 1.802.674 2.814.674a6.253 6.253 0 006.246-6.247 6.253 6.253 0 00-6.246-6.246c-.075 0-.15.005-.223.007v-1.3c0-1.075-.838-1.946-2.005-2.53C11.743 3.338 10.183 3 8.46 3zm0 .868c1.61 0 3.064.334 4.078.842 1.015.507 1.528 1.153 1.528 1.743-.2.914-.87 1.418-1.528 1.736-1.014.508-2.469.842-4.078.842-1.61 0-3.065-.334-4.08-.842-.752-.39-1.436-.983-1.527-1.736 0-.59.513-1.236 1.528-1.743 1.014-.508 2.469-.842 4.079-.842zm-5.6 4.335c.318.293.713.555 1.15.774 1.168.584 2.728.922 4.45.922.746 0 1.46-.069 2.126-.188a6.276 6.276 0 00-1.211 1.864c-.298.026-.603.047-.916.047-1.607 0-3.059-.335-4.072-.841-1.013-.507-1.527-1.144-1.527-1.743v-.835zm12.276.404a5.378 5.378 0 015.385 5.384 5.378 5.378 0 01-5.385 5.385 5.378 5.378 0 01-5.384-5.385 5.378 5.378 0 015.384-5.384zm-12.276 2.18c.317.292.708.55 1.144.768 1.17.585 2.732.929 4.456.929.21 0 .414-.01.619-.02a6.27 6.27 0 00-.189 1.527c0 .07.005.14.007.209-.145.006-.29.007-.437.007-1.607 0-3.06-.335-4.072-.842-1.013-.506-1.528-1.143-1.528-1.743v-.834zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.93 4.456.93.176 0 .352-.006.525-.014.102.593.287 1.158.545 1.683a10.81 10.81 0 01-1.07.053c-1.607 0-3.06-.335-4.072-.841-1.013-.506-1.528-1.143-1.528-1.743v-.835zm0 2.585c.317.292.708.55 1.144.767 1.17.585 2.732.929 4.456.929.536 0 1.057-.03 1.554-.094a6.245 6.245 0 001.367 1.413c-.85.25-1.85.404-2.921.404-1.607 0-3.058-.335-4.072-.841-1.014-.507-1.528-1.144-1.528-1.744v-.834z\"></path></g></symbol> <symbol id=\"rewards\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M10.663 15.912a.3.3 0 00-.299-.299H3.605a5.602 5.602 0 015.587-5.297c1.078 0 2.125.307 3.027.89a.299.299 0 00.324-.503 6.17 6.17 0 00-3.35-.984A6.2 6.2 0 003 15.911a.3.3 0 00.3.3h7.065a.3.3 0 00.298-.3h0zM9.09 9.163a3.587 3.587 0 003.582-3.583A3.585 3.585 0 009.09 2a3.584 3.584 0 00-3.58 3.58 3.585 3.585 0 003.58 3.583zm0-6.565a2.987 2.987 0 012.984 2.982 2.988 2.988 0 01-2.985 2.986A2.987 2.987 0 016.107 5.58 2.986 2.986 0 019.09 2.598z\"></path> <path d=\"M18.945 19.427l-2.071-3.013c.395-.52.614-1.148.619-1.812a3.05 3.05 0 00-3.023-3.068 3.057 3.057 0 00-3.067 3.025c-.005.681.219 1.31.595 1.82L9.88 19.363a.299.299 0 00.306.465l1.675-.357.294 1.573a.3.3 0 00.556.087l1.712-3.168 1.667 3.192a.299.299 0 00.558-.08l.317-1.567 1.667.381a.299.299 0 00.312-.462h0zm-4.495-7.295h.015a2.45 2.45 0 012.43 2.466 2.425 2.425 0 01-.73 1.724 2.431 2.431 0 01-1.717.704h-.019A2.449 2.449 0 0112 14.562a2.453 2.453 0 012.45-2.43h0zm-1.863 7.97l-.195-1.044a.298.298 0 00-.356-.238l-1.225.262 1.596-2.25c.423.385.954.65 1.543.747l-1.363 2.523zm4.213-1.247a.3.3 0 00-.36.232l-.21 1.041-1.328-2.542a3.016 3.016 0 001.554-.724l1.562 2.27-1.219-.277z\"></path></g></symbol> <symbol id=\"shipping\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.998 7.324L17.845 2H7.154L3 7.324V22h19l-.002-14.676zm-1.643-.357h-7.31V3.103h4.284l3.026 3.864zM7.668 3.103h4.283v3.864h-7.31l3.027-3.864zM4.062 20.895V8.037h16.873v12.858H4.063zm8.436-10.486l2.802 2.824-.772.78-1.514-1.527v5.78h-1.063v-5.78l-1.513 1.526-.772-.779 2.832-2.824z\"></path></g></symbol> <symbol id=\"return\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.218 7.18L17.017 2H6.202L2 7.18v14.278h19.22L21.218 7.18zm-1.662-.348h-7.394V3.074h4.333l3.062 3.758zM6.723 3.074h4.333v3.758H3.661l3.061-3.758zm-3.648 17.31V7.873h17.07v12.51H3.073z\"></path> <path d=\"M12.584 14.034l.44-.435h-2.543c-.339 0-.643.034-.882.201-.474.334-.576.87-.441 1.237.102.4.407.835 1.017.87.509.033 1.018.033 1.56.033h1.154c.34 0 .577.268.577.568-.002.3-.272.534-.578.534H10.99c-.305 0-.577 0-.883-.034a2.225 2.225 0 01-2.034-1.705c-.272-.969.102-1.939.95-2.507.508-.334 1.051-.4 1.525-.4h2.544l-.543-.436a.612.612 0 01-.17-.4c0-.134.068-.3.17-.401.103-.1.273-.134.408-.134a.63.63 0 01.406.168l1.459 1.437c.102.1.17.268.135.401 0 .133-.068.3-.17.4l-1.39 1.439a.63.63 0 01-.407.167.564.564 0 01-.407-.167.612.612 0 01-.17-.401.434.434 0 01.171-.435z\"></path></g></symbol> <symbol id=\"safety\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M11.667 2a4.62 4.62 0 00-4.598 4.644V9.24h-1.61a.46.46 0 00-.459.46v9.196a.46.46 0 00.253.414l4.828 2.321c1.008.49 2.187.49 3.195 0l4.804-2.321a.46.46 0 00.253-.414V9.7a.46.46 0 00-.46-.46h-1.609V6.644A4.62 4.62 0 0011.666 2zM7.989 6.644a3.679 3.679 0 017.356 0V9.24H7.989V6.644zm9.425 11.954l-4.552 2.207a2.737 2.737 0 01-2.39 0L5.92 18.621v-8.46h11.494v8.437z\"></path> <path d=\"M11.681 17.652a.563.563 0 00.563-.563v-2.252a.563.563 0 10-1.126 0v2.252a.563.563 0 00.563.563z\"></path></g></symbol> <symbol id=\"star\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11 10\"><g fill-rule=\"evenodd\"><path d=\"M5.5 0l1.235 3.8h3.996L7.498 6.15l1.235 3.8L5.5 7.6 2.267 9.95l1.235-3.8L.269 3.8h3.996L5.5 0z\"></path></g></symbol> <symbol id=\"show_password\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M11.974 17.727c3.815 0 7.425-2.052 9.903-5.63a.41.41 0 000-.466C19.399 8.051 15.789 6 11.974 6 8.16 6 4.55 8.053 2.073 11.631a.409.409 0 000 .466c2.477 3.577 6.086 5.63 9.901 5.63zm0-10.909c3.46 0 6.749 1.836 9.065 5.046-2.316 3.21-5.606 5.045-9.065 5.045-3.46 0-6.749-1.834-9.064-5.045 2.314-3.211 5.604-5.046 9.064-5.046z\"></path> <path d=\"M11.974 16.257a4.399 4.399 0 004.395-4.394 4.399 4.399 0 00-4.395-4.394 4.399 4.399 0 00-4.394 4.395 4.399 4.399 0 004.394 4.393zm0-7.97a3.58 3.58 0 013.576 3.576 3.58 3.58 0 01-3.576 3.576 3.58 3.58 0 01-3.576-3.576 3.58 3.58 0 013.576-3.576z\"></path> <path d=\"M11.974 14.43a2.57 2.57 0 002.568-2.567 2.57 2.57 0 00-3.734-2.285.41.41 0 00-.21.468l.265 1.005-.876-.188a.41.41 0 00-.478.287 2.57 2.57 0 002.465 3.28z\"></path></g></symbol> <symbol id=\"phone\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M16.028 20.747a7.54 7.54 0 01-1.845-.232c-4.461-1.124-10.827-7.49-11.95-11.95-.454-1.8-.241-3.611.614-5.236a2.466 2.466 0 011.825-1.301c.78-.116 1.55.134 2.11.694l1.825 1.825c.719.718.926 1.817.518 2.732-.214.482-.488.89-.813 1.214-.222.223-.267.592-.132 1.096.492 1.834 3.143 4.487 4.978 4.979.505.135.874.09 1.097-.133a4.01 4.01 0 011.214-.812c.915-.41 2.014-.201 2.732.517l1.825 1.825c.56.56.813 1.329.694 2.11a2.46 2.46 0 01-1.301 1.824 7.22 7.22 0 01-3.391.848zM5.044 3.25a1.224 1.224 0 00-1.092.662c-.72 1.367-.89 2.83-.508 4.348 1.017 4.04 7.003 10.027 11.043 11.043 1.517.383 2.98.211 4.348-.509.352-.186.588-.515.648-.906a1.2 1.2 0 00-.343-1.038l-1.825-1.825a1.215 1.215 0 00-1.34-.26c-.34.152-.623.338-.84.554-.385.386-1.098.779-2.302.457-2.29-.614-5.249-3.573-5.863-5.863-.323-1.204.07-1.918.456-2.303a2.77 2.77 0 00.554-.838c.2-.447.095-.985-.26-1.34L5.897 3.604a1.202 1.202 0 00-.853-.355z\"></path></g></symbol> <symbol id=\"drag\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M13.836 9.603c-.234.17-.4.398-.493.65a1.404 1.404 0 00-2.08.584l-1.76-2.423a1.403 1.403 0 10-2.272 1.65l4.026 5.54-1.295-.576a1.403 1.403 0 00-1.141 2.564l.921.41c1 .449 2.101 1.641 3.104 2.09 1.4.624 3.467 1.286 3.584 1.325a.35.35 0 00.22-.666c-.116-.038-2.364-.782-3.52-1.302-.786-.353-2.012-1.607-3.102-2.087l-.922-.41a.702.702 0 01.571-1.283l2.4 1.069c.25.135.713-.218.466-.558L7.8 9.651a.702.702 0 111.135-.825l3.506 4.826a.351.351 0 10.568-.412l-1.032-1.42a.702.702 0 011.136-.824l1.031 1.42a.352.352 0 00.568-.414l-.619-.852a.701.701 0 111.136-.824l1.03 1.419a.351.351 0 00.569-.412l-.62-.852a.702.702 0 011.136-.825l1.444 1.987c1.35 1.86 1.503 4.456 2.577 5.935a.352.352 0 00.568-.413c-.926-1.275-1.221-4.068-2.577-5.934l-1.444-1.988a1.404 1.404 0 00-2.453.34 1.404 1.404 0 00-1.623.02zM5.085 7.892a.35.35 0 11.496.496L4.178 9.792a.35.35 0 01-.496 0L2.278 8.388a.351.351 0 01.497-.496l.804.805v-6.17a.351.351 0 11.701 0v6.172l.805-.807z\"></path></g></symbol> <symbol id=\"list\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M2 3h20v3.636H2zM2 17.545h20v3.636H2zM2 10.273h12.727v3.636H2z\"></path></g></symbol> <symbol id=\"tiles\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M2 2h4v4H2zM2 10h4v4H2zM2 18h4v4H2zM10 2h4v4h-4zM10 10h4v4h-4zM10 18h4v4h-4zM18 2h4v4h-4zM18 10h4v4h-4zM18 18h4v4h-4z\"></path></g></symbol> <symbol id=\"filter\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M4.44 2H4.24A2.246 2.246 0 002 4.242v.199a2.247 2.247 0 002.241 2.252h.199a2.249 2.249 0 002.253-2.252v-.199A2.249 2.249 0 004.44 2zm1.613 2.44A1.605 1.605 0 014.44 6.054H4.24A1.606 1.606 0 012.64 4.441v-.199c0-.884.718-1.6 1.601-1.602h.199a1.603 1.603 0 011.613 1.602v.199zM11.811 2h-.214a2.246 2.246 0 00-2.235 2.242v.199a2.247 2.247 0 002.235 2.252h.214a2.247 2.247 0 002.236-2.252v-.199A2.246 2.246 0 0011.81 2zm1.603 2.44h-.001a1.604 1.604 0 01-1.602 1.613h-.214a1.604 1.604 0 01-1.601-1.602v-.199a1.604 1.604 0 011.601-1.612h.214c.884.001 1.601.718 1.602 1.602v.199zM19.17 2h-.199a2.249 2.249 0 00-2.253 2.242v.199a2.247 2.247 0 002.253 2.252h.198a2.247 2.247 0 002.242-2.252v-.199A2.246 2.246 0 0019.169 2zm1.601 2.44a1.607 1.607 0 01-1.602 1.613h-.198a1.604 1.604 0 01-1.613-1.612v-.199A1.602 1.602 0 0118.97 2.64h.198c.884.001 1.601.718 1.602 1.602v.199zM4.44 9.657H4.24A2.246 2.246 0 002 11.901v.199a2.246 2.246 0 002.241 2.242h.199a2.247 2.247 0 002.253-2.244V11.9A2.249 2.249 0 004.44 9.658zm1.613 2.44A1.604 1.604 0 014.451 13.7h-.199a1.605 1.605 0 01-1.612-1.601v-.199c0-.884.718-1.6 1.601-1.602h.199a1.602 1.602 0 011.613 1.604v.197zM11.813 9.657h-.215a2.247 2.247 0 00-2.235 2.244v.199a2.246 2.246 0 002.235 2.242h.215a2.247 2.247 0 002.235-2.244V11.9a2.246 2.246 0 00-2.235-2.243zm1.602 2.44c0 .886-.718 1.603-1.602 1.605h-.215a1.605 1.605 0 01-1.601-1.603v-.198c0-.885.717-1.602 1.601-1.604h.215c.883.002 1.6.718 1.601 1.602v.199zM19.17 9.657h-.199a2.247 2.247 0 00-2.253 2.244v.199a2.249 2.249 0 002.253 2.242h.198a2.246 2.246 0 002.242-2.244V11.9a2.246 2.246 0 00-2.242-2.243zm1.601 2.441c0 .884-.718 1.6-1.602 1.602h-.198a1.606 1.606 0 01-1.613-1.602V11.9c.001-.885.718-1.601 1.602-1.603h.198a1.604 1.604 0 011.613 1.604v.197zM11.813 17.318h-.215a2.246 2.246 0 00-2.235 2.241v.199A2.246 2.246 0 0011.598 22h.215a2.247 2.247 0 002.235-2.242v-.199a2.246 2.246 0 00-2.235-2.241zm1.602 2.44c-.002.884-.719 1.6-1.602 1.602h-.215a1.604 1.604 0 01-1.601-1.602v-.199c0-.883.718-1.6 1.601-1.601h.215c.883 0 1.6.718 1.601 1.601v.2z\"></path></g></symbol> <symbol id=\"filter2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M18.3998 11.5631H17.4398C17.2402 10.793 16.5452 10.2555 15.7493 10.2555C14.9534 10.2555 14.2584 10.793 14.0589 11.5631H5.44176C5.19805 11.5631 5 11.7611 5 12.0048C5 12.2486 5.19805 12.4466 5.44176 12.4466H14.0589C14.2584 13.2167 14.9534 13.7542 15.7493 13.7542C16.5452 13.7542 17.2402 13.2167 17.4398 12.4466H18.3998C18.6435 12.4466 18.8416 12.2486 18.8416 12.0048C18.8416 11.7611 18.6435 11.5631 18.3998 11.5631ZM15.7494 12.8707C15.399 12.8707 15.0839 12.6594 14.9499 12.3362C14.8151 12.013 14.8895 11.6404 15.1369 11.3923C15.385 11.1449 15.7575 11.0706 16.0807 11.2053C16.4039 11.3393 16.6152 11.6544 16.6152 12.0048C16.6152 12.4827 16.2272 12.8707 15.7494 12.8707L15.7494 12.8707ZM18.3998 15.8157H13.6113C13.4118 15.0456 12.7168 14.5081 11.9209 14.5081C11.125 14.5081 10.43 15.0456 10.2304 15.8157H5.44191C5.19821 15.8157 5.00015 16.0137 5.00015 16.2574C5.00015 16.5011 5.19821 16.6992 5.44191 16.6992H10.2304C10.43 17.4693 11.125 18.0068 11.9209 18.0068C12.7168 18.0068 13.4118 17.4693 13.6113 16.6992H18.3998C18.6435 16.6992 18.8416 16.5011 18.8416 16.2574C18.8416 16.0137 18.6435 15.8157 18.3998 15.8157ZM11.9208 17.1262C11.5704 17.1262 11.2553 16.9149 11.1213 16.5917C10.9865 16.2685 11.0609 15.8959 11.3083 15.6478C11.5564 15.4004 11.9289 15.3261 12.2521 15.4608C12.5753 15.5948 12.7867 15.9099 12.7867 16.2604C12.7867 16.7382 12.3986 17.1262 11.9208 17.1262L11.9208 17.1262ZM5.44183 8.1911H6.40191C6.60144 8.96121 7.29646 9.49868 8.09235 9.49868C8.88825 9.49868 9.58327 8.96121 9.78279 8.1911H18.3999C18.6436 8.1911 18.8417 7.99305 18.8417 7.74934C18.8417 7.50564 18.6436 7.30758 18.3999 7.30758H9.78279C9.58327 6.53747 8.88825 6 8.09235 6C7.29646 6 6.60144 6.53747 6.40191 7.30758H5.44183C5.19813 7.30758 5.00008 7.50564 5.00008 7.74934C5.00008 7.99305 5.19813 8.1911 5.44183 8.1911ZM8.09224 6.88352C8.4427 6.88352 8.7578 7.09483 8.89181 7.41803C9.02654 7.74124 8.95218 8.11379 8.7048 8.3619C8.45669 8.60928 8.08414 8.68364 7.76093 8.54891C7.43773 8.41491 7.22642 8.0998 7.22642 7.74934C7.22642 7.51962 7.31772 7.29949 7.4797 7.13678C7.64241 6.9748 7.86254 6.8835 8.09226 6.8835L8.09224 6.88352Z\"></path></g></symbol> <symbol id=\"sort\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M7.08539 6.39352C6.96919 6.62961 6.96919 6.91304 7.10012 7.14912C7.10012 7.16511 7.11486 7.16511 7.11486 7.18048L10.5973 12.4844V18.4491C10.5973 18.6692 10.7135 18.8586 10.8875 18.9527C10.9601 18.984 11.0326 19 11.1052 19C11.2214 19 11.3376 18.9527 11.4243 18.874L13.2092 17.2527C13.3254 17.1426 13.3979 17.0006 13.3979 16.8279L13.3974 12.4689L16.8798 7.16505C16.8798 7.14907 16.8945 7.14907 16.8945 7.1337C17.0249 6.89761 17.0396 6.61418 16.9093 6.3781C16.7931 6.14201 16.5613 6.00061 16.3141 6.00061L7.67998 6C7.43342 6 7.20102 6.15739 7.08539 6.39348L7.08539 6.39352ZM15.6895 7.10178L12.483 11.9809C12.4252 12.0756 12.3816 12.1856 12.3816 12.2957V16.5612L11.6124 17.2535V12.2957C11.6124 12.1857 11.5835 12.0756 11.511 11.9809L8.31872 7.10184L15.6895 7.10178Z\"></path></g></symbol> <symbol id=\"account\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12.014 2c3.413 0 6.19 2.645 6.19 5.895 0 2.204-1.273 4.132-3.124 5.125 3.76 1.157 6.537 4.297 6.884 8.209.116.991-1.851 1.047-1.909.11-.405-3.912-3.934-6.887-8.041-6.887-4.166 0-7.637 2.975-8.042 6.887-.116.937-2.083.881-1.967-.11.405-3.857 3.182-7.052 6.884-8.21-1.852-.99-3.124-2.92-3.124-5.124C5.765 4.645 8.6 2 12.014 2zm0 1.873c-2.372 0-4.282 1.818-4.282 4.022 0 2.259 1.91 4.078 4.282 4.078 2.314 0 4.222-1.818 4.222-4.078 0-2.204-1.909-4.022-4.223-4.022z\"></path></g></symbol> <symbol id=\"login\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z\"></path> <path d=\"M13.4397 20.4001H17.0397C18.2327 20.4001 19.1997 19.3744 19.1997 18.1092V5.89101C19.1997 4.62577 18.2327 3.6001 17.0397 3.6001H13.4397C13.0421 3.6001 12.7197 3.94199 12.7197 4.36373C12.7197 4.78548 13.0421 5.12737 13.4397 5.12737H17.0397C17.4374 5.12737 17.7597 5.46926 17.7597 5.89101V18.1092C17.7597 18.5309 17.4374 18.8728 17.0397 18.8728H13.4397C13.0421 18.8728 12.7197 19.2147 12.7197 19.6365C12.7197 20.0582 13.0421 20.4001 13.4397 20.4001ZM10.7706 14.5147C10.4895 14.8129 10.4895 15.2964 10.7706 15.5946C11.0518 15.8928 11.5077 15.8928 11.7889 15.5946L14.6649 12.5443C14.6806 12.5279 14.6955 12.5109 14.7097 12.4931C14.7495 12.4433 14.7823 12.3894 14.8081 12.3327C14.854 12.2322 14.8798 12.1193 14.8798 12.0001C14.8798 11.8767 14.8522 11.7602 14.8032 11.657C14.7811 11.6103 14.7541 11.5655 14.7224 11.5235C14.7042 11.4994 14.6847 11.4765 14.6639 11.4549L11.7889 8.40559C11.5077 8.10737 11.0518 8.10737 10.7706 8.40559C10.4895 8.70381 10.4895 9.18732 10.7706 9.48554L12.4215 11.2365H5.5198C5.12216 11.2365 4.7998 11.5784 4.7998 12.0001C4.7998 12.4218 5.12216 12.7637 5.5198 12.7637H12.4215L10.7706 14.5147Z\"></path></g></symbol> <symbol id=\"logout\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z\"></path> <path d=\"M10.5598 18.8728H6.9598C6.56216 18.8728 6.2398 18.5309 6.2398 18.1092V5.89101C6.2398 5.46926 6.56216 5.12737 6.9598 5.12737H10.5598C10.9575 5.12737 11.2798 4.78548 11.2798 4.36373C11.2798 3.94199 10.9575 3.6001 10.5598 3.6001H6.9598C5.76687 3.6001 4.7998 4.62577 4.7998 5.89101V18.1092C4.7998 19.3744 5.76687 20.4001 6.9598 20.4001H10.5598C10.9575 20.4001 11.2798 20.0582 11.2798 19.6365C11.2798 19.2147 10.9575 18.8728 10.5598 18.8728ZM15.0908 14.5147C14.8096 14.8129 14.8096 15.2964 15.0908 15.5946C15.3719 15.8928 15.8278 15.8928 16.109 15.5946L18.989 12.5401C19.2702 12.2419 19.2702 11.7584 18.989 11.4601L16.109 8.40559C15.8278 8.10737 15.3719 8.10737 15.0908 8.40559C14.8096 8.70381 14.8096 9.18732 15.0908 9.48554L16.7416 11.2365H9.83973C9.44208 11.2365 9.11973 11.5784 9.11973 12.0001C9.11973 12.4218 9.44208 12.7637 9.83973 12.7637H16.7417L15.0908 14.5147Z\"></path></g></symbol> <symbol id=\"gift\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M18.6 8.40005H15.8734C16.0794 8.04639 16.1997 7.63715 16.1997 7.19981C16.1997 5.88005 15.1204 4.80005 13.7999 4.80005C13.0841 4.80005 12.4407 5.11926 11.9999 5.6206C11.559 5.11926 10.9157 4.80005 10.1999 4.80005C8.87942 4.80005 7.80012 5.88005 7.80012 7.19981C7.80012 7.63645 7.92036 8.04567 8.12637 8.40005H5.40027C5.03956 8.40005 4.7998 8.63981 4.7998 8.99981V11.4003C4.7998 11.7603 5.03956 12 5.39957 12V18.6003C5.39957 18.9596 5.63933 19.2 5.99933 19.2H17.9996C18.3596 19.2 18.6 18.9596 18.6 18.6003V12C18.9593 12 19.1998 11.7603 19.1998 11.4003V8.99981C19.1998 8.63981 18.9593 8.40005 18.6 8.40005ZM17.9996 10.7998H12.5996V9.60028H17.9996V10.7998ZM13.7999 6.0003C14.4594 6.0003 15.0001 6.5403 15.0001 7.20054C15.0001 7.86008 14.4594 8.40007 13.7999 8.40007H12.5996V7.19984C12.5996 6.5403 13.1403 6.0003 13.7999 6.0003ZM8.99961 7.19983C8.99961 6.53959 9.53961 5.99959 10.1999 5.99959C10.8601 5.99959 11.4001 6.53959 11.4001 7.19983V8.40007H10.1999C9.53961 8.40007 8.99961 7.86007 8.99961 7.19983ZM6.00001 9.60031H11.4V10.7999H6.00001V9.60031ZM6.59981 12.0001H11.4001V17.9998H6.59981V12.0001ZM17.3999 17.9998H12.5996V12.0001H17.3999V17.9998Z\"></path></g></symbol> <symbol id=\"error_image\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 412 412\"><g><path d=\"M98.1707 164.285C98.1868 164.334 98.1868 164.382 98.2029 164.43C98.219 164.478 98.2672 164.494 98.2833 164.527C104.801 180.331 117.499 194.477 134.382 203.635C144.022 208.865 152.31 211.054 159.906 211.054C172.829 211.054 183.789 204.713 196.101 196.328L216.267 207.288C216.572 207.449 216.91 207.546 217.248 207.546C217.972 207.546 218.681 207.159 219.051 206.467C219.598 205.47 219.228 204.214 218.23 203.667L198.065 192.707C198.628 169.033 196.632 151.087 170.609 136.943C145.036 123.054 115.083 123.327 94.3061 137.619C94.0003 137.828 93.8072 138.102 93.6624 138.423C93.6302 138.488 93.6141 138.552 93.5819 138.617C93.5175 138.778 93.4693 138.938 93.4532 139.115C93.4532 139.164 93.421 139.212 93.421 139.26C93.1796 147.742 94.8855 156.223 98.1684 164.286L98.1707 164.285ZM116.839 132.371L120.637 150.622L99.5545 139.163C104.85 136.025 110.675 133.74 116.839 132.372L116.839 132.371ZM167.519 140.45L175.872 180.636L153.003 168.212L145.519 132.21C152.97 133.659 160.406 136.266 167.519 140C167.519 140.144 167.487 140.305 167.519 140.45L167.519 140.45ZM135.654 199.144C135.509 199.208 135.396 199.305 135.267 199.385C128.267 195.442 122.022 190.63 116.759 185.158L151.039 171.833L173.908 184.257L135.654 199.144ZM113.798 181.891C109.26 176.629 105.574 170.867 102.871 164.816L123.423 156.833L146.308 169.258L113.798 181.891ZM97.5757 142.799L118.675 154.258L101.277 161.017C99.0723 155.095 97.817 148.963 97.5756 142.799L97.5757 142.799ZM140.016 201.864L178.641 186.848L192.015 194.123C174.939 205.598 161.179 211.922 140.016 201.864H140.016ZM193.996 190.486L180.622 183.211L172.189 142.623C192.161 154.902 194.35 169.902 193.996 190.485V190.486ZM141.161 131.504L148.259 165.639L125.373 153.214L120.883 131.633C127.45 130.619 134.273 130.57 141.162 131.504L141.161 131.504Z\" fill=\"#BEBFC4\"></path> <path d=\"M295.145 184.658H295.161C295.193 184.675 295.209 184.691 295.241 184.707C295.563 184.9 295.917 184.98 296.271 184.98C296.545 184.98 296.835 184.916 297.108 184.803C302.451 182.437 307.231 178.881 311.271 174.455C311.303 174.423 311.335 174.423 311.351 174.391C311.383 174.359 311.399 174.31 311.432 174.278C319.318 165.571 324.355 153.533 325.063 140.384C326.174 120.106 316.533 112.413 302.645 104.254L303.465 89.0937C303.53 87.9511 302.661 86.9855 301.518 86.9211C300.279 86.8406 299.41 87.7258 299.345 88.8685L298.525 104.029C283.831 110.611 273.402 117.21 272.292 137.504C271.181 157.428 280.145 175.92 295.145 184.657L295.145 184.658ZM286.792 171.912L295.129 165.603L294.388 179.138C291.572 177.111 289.029 174.681 286.792 171.912L286.792 171.912ZM278.922 157.428L296.304 144.279L295.435 160.196L284.298 168.629C282.077 165.233 280.258 161.467 278.923 157.428H278.922ZM276.396 138.936L297.462 122.987L296.593 138.888L277.796 153.114C276.75 148.592 276.235 143.828 276.396 138.936H276.396ZM317.839 155.303L300.715 139.113L301.584 123.196L320.8 141.35C320.43 146.242 319.4 150.926 317.839 155.303L317.839 155.303ZM309.695 170.013L299.54 160.421L300.409 144.504L316.246 159.472C314.491 163.334 312.287 166.891 309.696 170.013H309.695ZM298.51 179.363L299.25 165.812L306.863 173.006C304.336 175.517 301.536 177.641 298.511 179.363H298.51ZM320.961 135.848L301.874 117.807L302.357 108.891C313.268 115.473 320.478 121.814 320.961 135.848H320.961ZM298.253 108.682L297.77 117.598L276.832 133.45C278.86 119.513 286.713 114.009 298.253 108.682L298.253 108.682Z\" fill=\"#BEBFC4\"></path> <path d=\"M220.63 289.348C220.614 289.252 220.614 289.123 220.582 289.042C220.566 289.01 220.582 288.994 220.566 288.962C220.55 288.93 220.533 288.914 220.533 288.897C220.485 288.817 220.437 288.737 220.389 288.64C220.324 288.543 220.276 288.431 220.196 288.35C220.147 288.302 220.115 288.27 220.083 288.222C220.067 288.205 220.067 288.173 220.051 288.173C211.811 280.48 201.865 274.703 190.937 270.873C190.873 270.84 190.824 270.792 190.76 270.776C190.68 270.744 190.583 270.744 190.486 270.728C168.985 263.308 143.704 263.518 119.688 272.241C86.4709 284.327 67.2532 308.564 62.4905 344.258L33.1033 354.928C32.0412 355.314 31.4779 356.505 31.8641 357.567C32.1699 358.404 32.9585 358.919 33.7954 358.919C34.0368 358.919 34.2621 358.871 34.5035 358.791L63.8746 348.104C81.6581 364.359 101.1 372.567 121.975 372.567C132.307 372.567 142.977 370.571 153.969 366.58C190.389 353.335 216.556 323.237 220.647 289.911C220.647 289.879 220.631 289.863 220.647 289.83V289.669C220.679 289.573 220.647 289.46 220.631 289.348L220.63 289.348ZM206.87 318.252L183.228 304.734L216.027 292.808C214.514 301.66 211.408 310.254 206.87 318.253L206.87 318.252ZM214.611 288.946L181.812 300.871L191.243 275.33C199.886 278.549 207.772 283.136 214.612 288.946H214.611ZM187.348 273.995L176.743 302.706L142.189 315.275L159.072 269.535C168.905 269.632 178.449 271.144 187.349 273.993L187.348 273.995ZM153.085 361.627L103.966 333.543L138.519 320.974L182.537 346.145C174.088 352.759 164.384 358.247 153.746 362.238C153.585 362.013 153.375 361.788 153.086 361.627L153.085 361.627ZM122.169 276.619C122.281 276.329 122.297 276.023 122.265 275.718C133 271.952 143.959 269.924 154.662 269.57L137.104 317.111L102.551 329.68L122.169 276.619ZM117.437 277.552L97.5133 331.516L66.903 342.653C71.7151 310.691 88.3076 289.336 117.439 277.553L117.437 277.552ZM68.2857 346.529L98.9121 335.409L148.867 363.975C118.981 373.648 92.5384 367.95 68.284 346.529H68.2857ZM185.932 343.359C185.932 343.343 185.932 343.343 185.916 343.343L143.591 319.138L178.161 306.569L204.731 321.777C199.742 329.679 193.401 336.97 185.934 343.359L185.932 343.359Z\" fill=\"#BEBFC4\"></path> <path d=\"M203.554 140.982C203.876 140.982 204.197 140.902 204.503 140.741C228.66 128.123 250.709 111.869 270.003 92.4749C270.808 91.6702 270.808 90.3666 269.987 89.562C269.182 88.7573 267.879 88.7573 267.074 89.5781C248.083 108.681 226.373 124.662 202.588 137.086C201.574 137.617 201.188 138.856 201.719 139.87C202.089 140.578 202.813 140.98 203.553 140.98L203.554 140.982Z\" fill=\"#BEBFC4\"></path> <path d=\"M277.181 83.9778C277.745 83.9778 278.308 83.7524 278.71 83.3018C281.06 80.7107 283.361 78.0554 285.598 75.3675C286.323 74.4985 286.21 73.1949 285.341 72.4707C284.472 71.7465 283.168 71.8591 282.444 72.7282C280.239 75.3836 277.97 77.9746 275.653 80.5496C274.896 81.3864 274.961 82.69 275.797 83.4625C276.184 83.8005 276.683 83.9775 277.182 83.9775L277.181 83.9778Z\" fill=\"#BEBFC4\"></path> <path d=\"M291.877 66.2087C292.505 66.2087 293.116 65.9351 293.519 65.3879C295.257 63.0865 296.963 60.7529 298.62 58.4033C299.28 57.4699 299.055 56.1984 298.138 55.5386C297.22 54.8949 295.933 55.1041 295.273 56.0375C293.631 58.355 291.958 60.6564 290.235 62.9097C289.543 63.8109 289.736 65.1145 290.638 65.7904C291.008 66.0801 291.442 66.2089 291.877 66.2089L291.877 66.2087Z\" fill=\"#BEBFC4\"></path> <path d=\"M301.485 50.6141C301.839 50.8394 302.225 50.9521 302.611 50.9521C303.287 50.9521 303.947 50.6302 304.333 50.0187C305.653 47.9908 306.957 45.9469 308.212 43.8708C308.807 42.9052 308.502 41.6338 307.536 41.0383C306.57 40.4428 305.299 40.7486 304.703 41.7142C303.448 43.7581 302.177 45.7699 300.873 47.7657C300.262 48.7313 300.519 50.0027 301.485 50.6143L301.485 50.6141Z\" fill=\"#BEBFC4\"></path> <path d=\"M376.399 88.7242C375.24 88.4667 374.194 89.1909 373.952 90.3014C357.907 165.042 311.654 231.799 247.052 273.464C246.103 274.076 245.813 275.363 246.441 276.313C246.843 276.924 247.503 277.262 248.179 277.262C248.565 277.262 248.951 277.166 249.289 276.941C314.777 234.678 361.687 166.974 377.973 91.1697C378.215 90.0592 377.507 88.9648 376.396 88.7234L376.399 88.7242Z\" fill=\"#BEBFC4\"></path> <path d=\"M380.086 66.8551C378.992 66.7102 377.914 67.4827 377.769 68.6093C377.511 70.4118 377.254 72.1982 376.98 74.0007C376.803 75.1273 377.576 76.1734 378.702 76.3504C378.815 76.3665 378.912 76.3826 379.024 76.3826C380.022 76.3826 380.891 75.6584 381.052 74.6445C381.326 72.8259 381.599 71.0073 381.857 69.1888C382.002 68.0461 381.213 67 380.086 66.8552V66.8551Z\" fill=\"#BEBFC4\"></path> <path d=\"M381.648 51.628C380.538 51.5475 379.524 52.3683 379.427 53.511C379.299 55.1203 379.154 56.7297 378.993 58.3392C378.88 59.4658 379.701 60.4796 380.827 60.5923C380.908 60.5923 380.972 60.6084 381.037 60.6084C382.083 60.6084 382.984 59.8198 383.08 58.7576C383.241 57.1322 383.386 55.4906 383.531 53.8491C383.612 52.7064 382.775 51.7247 381.648 51.6282V51.628Z\" fill=\"#BEBFC4\"></path> <path d=\"M382.197 42.4731H380.137L380.04 43.9538C379.96 45.0804 380.813 46.0781 381.94 46.1586H382.1C383.163 46.1586 384.08 45.3379 384.144 44.2435L384.241 42.7307L382.197 42.4731Z\" fill=\"#BEBFC4\"></path> <path d=\"M326.559 108.731C326.881 108.924 327.235 109.004 327.573 109.004C328.281 109.004 328.989 108.634 329.359 107.958C336.231 95.9201 342.089 83.1419 346.757 69.9448C347.143 68.8665 346.564 67.6917 345.501 67.3215C344.423 66.9513 343.248 67.4985 342.862 68.5768C338.275 81.5321 332.53 94.1014 325.771 105.914C325.223 106.912 325.561 108.167 326.559 108.731L326.559 108.731Z\" fill=\"#BEBFC4\"></path> <path d=\"M347.221 62.154C347.43 62.2184 347.623 62.2506 347.816 62.2506C348.701 62.2506 349.506 61.6873 349.78 60.8022C350.391 58.8066 350.987 56.8109 351.55 54.7993C351.856 53.705 351.212 52.5623 350.118 52.2565C349.023 51.9507 347.897 52.5945 347.591 53.6889C347.044 55.6684 346.464 57.6318 345.853 59.5953C345.515 60.6736 346.126 61.8323 347.221 62.1542L347.221 62.154Z\" fill=\"#BEBFC4\"></path> <path d=\"M351.136 48.3936C351.297 48.4258 351.458 48.458 351.619 48.458C352.553 48.458 353.389 47.8304 353.615 46.8808C353.904 45.6255 354.21 44.3863 354.484 43.131C354.725 42.0205 354.033 40.9261 352.923 40.6686C351.764 40.4272 350.718 41.1193 350.46 42.2297C350.187 43.4689 349.897 44.6921 349.607 45.9152C349.35 47.0095 350.026 48.12 351.136 48.3936V48.3936Z\" fill=\"#BEBFC4\"></path></g></symbol> <symbol id=\"empty_cart_image\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 211 143\"><g><path opacity=\".1\" d=\"M7.175 136.363v2.871l-5.74-.633v-2.238h5.74z\" fill=\"#fff\"></path> <path d=\"M11.814 97.215l33.084-5.416v31.508l-31.434-1.655-1.65-24.438z\" fill=\"#5ECE7B\"></path> <path opacity=\".05\" d=\"M11.814 97.215l33.084-5.416v31.508l-31.434-1.655-1.65-24.438z\" fill=\"#000\"></path> <path d=\"M44.899 91.799l39.385 2.986-2.18 27.42-37.205 1.102V91.799z\" fill=\"#5ECE7B\"></path> <path opacity=\".1\" d=\"M44.899 91.799l39.385 2.986-2.18 27.42-37.205 1.102V91.799z\" fill=\"#000\"></path> <path d=\"M56.972 82.346L44.9 91.963l39.27 2.986 6.417-9.841-33.614-2.762zM0 86.789l29.676-3.655L44.9 91.886l-32.964 5.427L0 86.789zM51.987 100.069V143l-15.435-1.594-6.714-.689-2.046-.216-6.71-.693-9.268-.956v-41.54L44.76 99.57l7.227.499zM84.283 94.95v41.816l-12.373 2.387-6.017 1.162-13.906 2.684V100.12l32.296-5.17z\" fill=\"#5ECE7B\"></path> <path opacity=\".05\" d=\"M84.283 94.95v41.816l-12.373 2.387-6.017 1.162-13.906 2.684V100.12l32.296-5.17z\" fill=\"#000\"></path> <path d=\"M0 106.221l11.904-8.909 40.085 2.718-5.901 9.886L0 106.221z\" fill=\"#5ECE7B\"></path> <path opacity=\".1\" d=\"M0 106.221l11.904-8.909 40.085 2.718-5.901 9.886L0 106.221z\" fill=\"#fff\"></path> <path d=\"M84.136 94.95l-32.149 5.287 10.464 9.679 34.436-5.966-12.751-9z\" fill=\"#5ECE7B\"></path> <path opacity=\".1\" d=\"M84.136 94.95l-32.149 5.287 10.464 9.679 34.436-5.966-12.751-9zM71.681 138.701l-5.513 1.148v-5.678l5.164-1.411.35 5.941zM78.77 137.914l-5.514 1.148v-8.829l5.165-1.412.35 9.093z\" fill=\"#fff\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.975 119.148c-.68 1.949-2.788 3.37-5.283 3.37a6.164 6.164 0 01-2.975-.747 4.334 4.334 0 108.258-2.623z\" fill=\"#F1F2F3\"></path> <mask id=\"a\" maskUnits=\"userSpaceOnUse\" x=\"16\" y=\"119\" width=\"10\" height=\"6\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24.975 119.148c-.68 1.949-2.788 3.37-5.283 3.37a6.164 6.164 0 01-2.975-.747 4.334 4.334 0 108.258-2.623z\" fill=\"#fff\"></path></mask> <g mask=\"url(#a)\"><circle cx=\"22.054\" cy=\"124.094\" r=\"1.575\" fill=\"#1D1F22\"></circle> <path d=\"M17.065 123.999H17l2.2.938a4.227 4.227 0 001.659.341h.757a2.911 2.911 0 002.662-1.722v-.15a.147.147 0 00-.123-.145 2.747 2.747 0 00-1.277.111l-.379.127-1.18.296a3.592 3.592 0 01-1.653.017l-.462-.104a2.123 2.123 0 00-1.306.119 2.09 2.09 0 01-.833.172z\" fill=\"#4D9AF5\"></path></g> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.94 119.863c.485 2.033 2.485 3.66 5.001 3.871a6.193 6.193 0 002.938-.457 4.334 4.334 0 11-7.94-3.414z\" fill=\"#F1F2F3\"></path> <mask id=\"b\" maskUnits=\"userSpaceOnUse\" x=\"35\" y=\"119\" width=\"10\" height=\"8\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.24 119.367a4.726 4.726 0 007.79 3.339 4.334 4.334 0 11-7.79-3.339z\" fill=\"#fff\"></path></mask> <g mask=\"url(#b)\"><circle r=\"1.575\" transform=\"matrix(-1 0 0 1 38.598 125.413)\" fill=\"#1D1F22\"></circle> <path d=\"M41.904 125.414l.598.024A1.562 1.562 0 0144 126.999h-3.55a5 5 0 01-2.53-.687L35 124.599c0-.713.77-1.16 1.39-.806l1.643.939c.306.175.653.267 1.006.267h.868c.392 0 .781.072 1.148.212l.157.06c.221.085.455.133.692.143z\" fill=\"#4D9AF5\"></path></g> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M35.405 132.292c-1.217-2.235-3.457-3.79-6.09-3.929-2.636-.139-5.03 1.176-6.474 3.277a6.698 6.698 0 0112.564.652z\" fill=\"#F1F2F3\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.35 132.515a.938.938 0 00-.896-.242.939.939 0 00-.648.636.848.848 0 011.543-.394zM22.06 131.661a.938.938 0 01.915.006.94.94 0 01.462.803.851.851 0 00-1.376-.809z\" fill=\"#F1F2F3\"></path> <path d=\"M114.956 39.108l.002.002.006.014a.31.31 0 00.103.138.352.352 0 00.124.06 6.898 6.898 0 002.862.044c.007 0 .011.003.016 0 .008-.001.015-.006.022-.007 1.894-.362 3.765-1.443 5.199-3.1 2.213-2.552 1.77-4.518.835-6.965l1.653-1.91a.338.338 0 00-.026-.478c-.15-.133-.351-.103-.476.04l-1.653 1.91c-2.544-.592-4.547-.759-6.761 1.796-2.177 2.506-2.924 5.822-1.906 8.456zm.238-2.501l1.707-.002-1.477 1.704a6.41 6.41 0 01-.23-1.702zm.477-2.682l3.558-.004-1.737 2.004-2.28.004c.064-.666.217-1.341.459-2.004zm1.567-2.678l4.313-.007-1.735 2.002-3.848.005a9.427 9.427 0 011.27-2zm3.608 6.255l-.528-3.822 1.737-2.004.593 4.288a9.147 9.147 0 01-1.802 1.538zm-2.54 1.125l-.314-2.266 1.736-2.004.489 3.535a7.83 7.83 0 01-1.911.735zm-2.38.12l1.478-1.706.235 1.699c-.578.079-1.152.08-1.713.006zm7.305-3.49l-.589-4.26.972-1.123c.718 1.946.989 3.493-.383 5.383zm-.118-5.817l-.972 1.123-4.287.007c1.682-1.63 3.245-1.574 5.259-1.13zM117.227 56.824l-.002.002-.015.004a.309.309 0 00-.143.096.354.354 0 00-.067.12 6.884 6.884 0 00-.207 2.855c0 .007-.003.01-.001.016.001.008.005.015.006.023.253 1.911 1.226 3.84 2.798 5.366 2.423 2.355 4.41 2.025 6.907 1.23l1.812 1.76c.137.133.35.133.479.001.142-.142.123-.344-.013-.477l-1.812-1.76c.736-2.506 1.016-4.495-1.408-6.852-2.378-2.316-5.647-3.25-8.334-2.384zm2.483.38l-.094 1.704-1.618-1.572a6.437 6.437 0 011.712-.132zm2.651.63l-.199 3.55-1.902-1.847.127-2.277a8.099 8.099 0 011.974.573zm2.585 1.716l-.239 4.306-1.9-1.846.214-3.842a9.427 9.427 0 011.925 1.382zm-6.452 3.245l3.847-.309 1.902 1.848-4.315.349a9.15 9.15 0 01-1.434-1.888zm-.978-2.6l2.28-.184 1.902 1.848-3.557.286a7.855 7.855 0 01-.625-1.95zm.017-2.383l1.619 1.574-1.71.137a6.418 6.418 0 01.091-1.71zm3.067 7.492l4.287-.345 1.066 1.035c-1.983.606-3.543.788-5.353-.69zm5.815.214l-1.066-1.034.238-4.28c1.53 1.772 1.386 3.329.828 5.314zM149.658 42.68v.003l-.01.012a.314.314 0 00-.066.16.363.363 0 00.013.137 6.895 6.895 0 001.422 2.483c.005.005.004.01.009.014.005.006.013.01.017.015 1.279 1.444 3.164 2.5 5.32 2.887 3.325.599 4.789-.785 6.416-2.84l2.486.446a.338.338 0 00.397-.266c.039-.197-.09-.355-.277-.389l-2.486-.446c-.791-2.49-1.67-4.296-4.997-4.895-3.266-.592-6.499.46-8.244 2.68zm2.272-1.072l.874 1.466-2.22-.4a6.451 6.451 0 011.346-1.066zm2.55-.96l1.82 3.057-2.61-.47-1.168-1.958a8.105 8.105 0 011.958-.629zm3.103-.02l2.208 3.704-2.607-.469-1.97-3.305a9.405 9.405 0 012.369.07zm-3.537 6.296l3.018-2.406 2.609.47-3.383 2.7a9.16 9.16 0 01-2.244-.764zm-2.264-1.61l1.788-1.426 2.61.47-2.79 2.224a7.859 7.859 0 01-1.608-1.267zm-1.318-1.984l2.222.4-1.341 1.069a6.471 6.471 0 01-.881-1.47zm6.731 4.498l3.362-2.682 1.462.263c-1.306 1.61-2.498 2.633-4.824 2.419zm4.941-3.072l-1.462-.263-2.194-3.681c2.259.614 3.01 1.986 3.656 3.944z\" fill=\"#5ECE7B\"></path> <path opacity=\".3\" d=\"M84.447 51.351c-.005.002-.013.005-.017.008-.002.001-.003 0-.005.002l-.003.003a.233.233 0 01-.014.013l-.014.016a.05.05 0 01-.006.009l-.003.003a5.072 5.072 0 00-.58 2.017c-.001.005-.004.008-.004.012l.002.017c-.105 1.404.312 2.909 1.223 4.2 1.263 1.787 3.036 2.54 5.271 2.246l1.116 1.58a.13.13 0 00.18.032.127.127 0 00.03-.178l-1.115-1.579c.699-1.325.884-2.618.55-3.863a5.71 5.71 0 00-.873-1.812c-1.383-1.959-3.623-3.032-5.704-2.736-.002 0-.003.002-.005.001l-.01.003c-.006 0-.012.003-.019.006zm1.969.352l-.44 1.63-1.246-1.764a4.95 4.95 0 011.686.134zm-1.897.014l1.246 1.763-1.696-.148a4.81 4.81 0 01.45-1.615zm-.468 1.869l1.906.167 1.313 1.858-3.037-.266a5.853 5.853 0 01-.182-1.76zm5.849.624l-.914 3.386-1.313-1.858.82-3.035a6.685 6.685 0 011.433 1.457.126.126 0 00-.026.05zm-4.648 3.222a.121.121 0 00-.056.01c-.4-.58-.698-1.201-.89-1.834l3.156.277 1.313 1.858-3.523-.31zm.132.268l3.583.314 1.163 1.646c-2.01.23-3.568-.413-4.746-1.96zm4.958 1.814l-1.162-1.647.929-3.444c1.063 1.627 1.141 3.297.233 5.092zm-2.073-6.968v.001l-.788 2.918-1.313-1.859.495-1.832c.558.17 1.1.43 1.606.772zM109.712 95.5c-.002.005-.006.013-.006.018l-.001.005-.001.005a.108.108 0 01.001.018c.001.007 0 .015.002.021a.022.022 0 01.003.01v.005c.234.66.616 1.262 1.108 1.783.002.004.004.008.007.01.003.005.008.007.013.011.971 1.019 2.367 1.719 3.937 1.909 2.171.26 3.92-.55 5.2-2.405l1.92.232a.13.13 0 00.144-.112.128.128 0 00-.11-.143l-1.92-.23c-.515-1.407-1.349-2.412-2.497-3a5.711 5.711 0 00-1.931-.567c-2.38-.286-4.678.655-5.854 2.398-.001.002 0 .003-.002.004l-.005.01c-.004.004-.006.01-.008.018zm1.581-1.224l.915 1.419-2.144-.259c.336-.45.752-.842 1.229-1.16zm-1.261 1.416l2.143.258-1.247 1.158a4.832 4.832 0 01-.897-1.416h.001zm1.072 1.6l1.403-1.302 2.258.272-2.233 2.075a5.85 5.85 0 01-1.428-1.045zm4.385-3.92l1.899 2.948-2.258-.272-1.703-2.642a6.684 6.684 0 012.043-.087.112.112 0 00.019.052zm-.726 5.609a.126.126 0 00-.031.047 6.65 6.65 0 01-1.957-.569l2.322-2.156 2.259.272-2.593 2.406zm.287.08l2.635-2.447 2.001.24c-1.176 1.647-2.698 2.37-4.636 2.208zm4.671-2.461l-2.001-.242-1.932-2.999c1.919.302 3.211 1.364 3.933 3.24zm-6.56-3.135l.001.002 1.636 2.54-2.259-.272-1.027-1.596a5.968 5.968 0 011.649-.674zM199.664 108.44a.06.06 0 00.012.015l.003.004.004.002.016.01.019.009.011.004c.001 0 .002.002.003.001a5.065 5.065 0 002.099.013h.013l.016-.006c1.379-.279 2.715-1.088 3.712-2.315 1.377-1.699 1.623-3.61.734-5.682l1.22-1.502a.13.13 0 00-.019-.181.124.124 0 00-.179.017l-1.218 1.502c-1.465-.314-2.76-.143-3.869.516a5.71 5.71 0 00-1.507 1.332c-1.511 1.862-1.938 4.308-1.089 6.231l.002.005.005.008c.002.007.007.012.011.017h.001zm-.194-1.99l1.688-.018-1.361 1.677a4.976 4.976 0 01-.327-1.659zm.526 1.822l1.361-1.677.316 1.673a4.82 4.82 0 01-1.677.004zm1.926-.055l-.355-1.881 1.433-1.767.567 2.996a5.848 5.848 0 01-1.645.652zm-.983-5.799l3.507-.038-1.433 1.767-3.143.033a6.686 6.686 0 011.014-1.774.139.139 0 00.055.012zm4.361 3.601a.118.118 0 00.024.052c-.45.541-.967.996-1.524 1.353l-.588-3.114 1.433-1.767.655 3.476zm.221-.199l-.667-3.534 1.269-1.566c.767 1.873.569 3.546-.602 5.1zm.405-5.265l-1.271 1.565-3.567.038c1.278-1.464 2.864-1.991 4.838-1.603zm-6.147 3.882l.001.001 3.022-.032-1.434 1.767-1.897.02a5.979 5.979 0 01.308-1.755v-.001zM120.196 3.93c-.003.005-.009.01-.011.016l-.003.004-.001.004a.138.138 0 01-.004.018c-.001.007-.004.015-.004.022a.02.02 0 010 .01v.004c.049.7.257 1.381.592 2.014l.004.012.011.014c.665 1.24 1.824 2.286 3.287 2.886 2.024.83 3.924.514 5.652-.935l1.79.735a.13.13 0 00.168-.07.128.128 0 00-.068-.167l-1.79-.733c-.121-1.493-.659-2.683-1.609-3.555a5.708 5.708 0 00-1.71-1.06c-2.219-.91-4.684-.613-6.281.754l-.003.004-.007.007c-.006.003-.009.01-.013.016zm1.85-.76l.504 1.611-1.998-.819a4.944 4.944 0 011.494-.792zm-1.593 1.03l1.998.819-1.511.785a4.802 4.802 0 01-.487-1.605zm.608 1.828l1.698-.882 2.105.863-2.705 1.406a5.848 5.848 0 01-1.098-1.387zm5.27-2.613l1.047 3.347-2.105-.863-.939-3a6.68 6.68 0 011.992.46.135.135 0 00.004.056h.001zm-2.192 5.214a.119.119 0 00-.042.037 6.646 6.646 0 01-1.735-1.069l2.811-1.46 2.106.862-3.14 1.63zm.255.154l3.192-1.658 1.864.764c-1.572 1.274-3.231 1.567-5.056.894zm5.158-1.13l-1.865-.766-1.065-3.405c1.77.802 2.732 2.17 2.93 4.17zm-5.49-4.767v.001l.902 2.885-2.106-.864-.566-1.811a5.986 5.986 0 011.77-.211zM54.504 66.658l.007.018c.002.002 0 .003.002.005l.003.003a.214.214 0 01.013.014l.015.015a.05.05 0 01.009.006c.001 0 .002.003.003.002a5.07 5.07 0 002 .64l.012.003.017-.001c1.4.145 2.916-.228 4.233-1.102 1.822-1.21 2.627-2.961 2.397-5.204l1.612-1.07a.13.13 0 00.037-.178.127.127 0 00-.177-.037l-1.61 1.07c-1.304-.736-2.592-.96-3.846-.662a5.708 5.708 0 00-1.837.821c-1.997 1.327-3.135 3.534-2.9 5.623l.002.005.002.01c0 .006.003.012.006.019zm.409-1.957l1.617.486-1.8 1.195a4.95 4.95 0 01.183-1.681zm-.042 1.896l1.8-1.195-.198 1.691a4.808 4.808 0 01-1.602-.496zm1.855.522l.223-1.9 1.895-1.26-.354 3.028a5.847 5.847 0 01-1.764.132zm.793-5.828l3.358 1.01-1.895 1.259-3.01-.906a6.685 6.685 0 011.498-1.391.126.126 0 00.049.028zm3.087 4.739a.12.12 0 00.007.056c-.59.382-1.22.662-1.858.836l.368-3.147 1.895-1.258-.412 3.513zm.27-.125l.418-3.572 1.68-1.115c.172 2.016-.517 3.554-2.097 4.687zm1.958-4.904l-1.68 1.115-3.416-1.029c1.657-1.015 3.329-1.045 5.096-.086zm-7.025 1.871c0 .001 0 .001 0 0l2.895.872-1.897 1.26-1.816-.549a5.983 5.983 0 01.818-1.583zM97.205 17.764c.002.006.004.014.007.018.002.002.001.003.002.005l.003.004a.214.214 0 01.013.013c.005.005.01.011.016.015l.008.006.003.003a5.073 5.073 0 002 .639l.012.003h.017c1.4.145 2.916-.229 4.233-1.103 1.822-1.21 2.627-2.96 2.397-5.204l1.612-1.069a.13.13 0 00.037-.178.128.128 0 00-.136-.055.15.15 0 00-.041.018l-1.61 1.07c-1.304-.737-2.592-.96-3.846-.662a5.71 5.71 0 00-1.837.82c-1.997 1.327-3.135 3.534-2.9 5.623.001.002.003.003.002.005l.002.01c0 .006.003.013.006.02zm.41-1.957l1.616.487-1.8 1.194a4.948 4.948 0 01.183-1.681zm-.042 1.896l1.799-1.194-.198 1.69a4.809 4.809 0 01-1.602-.496zm1.854.522l.223-1.9 1.895-1.259-.354 3.028a5.851 5.851 0 01-1.764.131zm.793-5.828l3.358 1.01-1.895 1.26-3.01-.907a6.692 6.692 0 011.498-1.39.126.126 0 00.049.027zm3.087 4.739a.134.134 0 00.007.056 6.64 6.64 0 01-1.858.837l.368-3.147 1.895-1.259-.412 3.513zm.271-.124l.417-3.573 1.679-1.115c.173 2.016-.515 3.554-2.096 4.688zm1.957-4.904l-1.68 1.114-3.415-1.028c1.656-1.016 3.328-1.046 5.095-.086zm-7.025 1.87v.001l2.895.872-1.896 1.258-1.817-.547a5.98 5.98 0 01.818-1.583zM175.405 21.555c0 .007-.002.015 0 .02v.005l.001.004.006.018c.003.006.005.014.009.02.003.003.005.005.006.008l.002.004a5.068 5.068 0 001.611 1.345l.01.008c.005.003.011.003.017.005 1.241.662 2.787.888 4.336.575 2.144-.435 3.549-1.753 4.181-3.918l1.896-.383a.13.13 0 00.101-.151.126.126 0 00-.149-.1l-1.896.383c-.93-1.173-2.038-1.865-3.312-2.062a5.71 5.71 0 00-2.011.069c-2.35.476-4.236 2.091-4.804 4.115l-.001.006-.001.01c-.003.005-.002.012-.003.02h.001zm1.116-1.659l1.314 1.06-2.116.429a4.96 4.96 0 01.802-1.489zm-.753 1.741l2.117-.428-.821 1.491a4.82 4.82 0 01-1.296-1.063zm1.521 1.183l.923-1.677 2.229-.452-1.468 2.672a5.863 5.863 0 01-1.684-.543zm2.931-5.1l2.73 2.201-2.23.452-2.447-1.973a6.693 6.693 0 011.912-.724.122.122 0 00.035.044zm1.074 5.553a.117.117 0 00-.015.054 6.643 6.643 0 01-2.036.075l1.526-2.777 2.23-.451-1.705 3.099zm.298-.014l1.732-3.151 1.975-.4c-.599 1.932-1.816 3.097-3.708 3.551h.001zm3.66-3.805l-1.976.4-2.776-2.24c1.917-.317 3.476.286 4.752 1.84zm-7.212-.914v.001l2.353 1.898-2.231.451-1.477-1.192a5.999 5.999 0 011.354-1.158h.001zM184.293 61.647c-.005.004-.012.008-.015.013l-.004.003-.002.004a.223.223 0 01-.01.016c-.003.006-.007.012-.009.02a.031.031 0 01-.004.01l-.001.002a5.067 5.067 0 00-.021 2.1v.013l.006.016c.274 1.38 1.078 2.719 2.302 3.72 1.693 1.384 3.604 1.636 5.679.755l1.497 1.225a.131.131 0 00.182-.018.128.128 0 00-.017-.179l-1.498-1.224c.32-1.463.153-2.759-.501-3.87a5.711 5.711 0 00-1.327-1.512c-1.856-1.518-4.301-1.954-6.227-1.112l-.004.002-.009.005c-.006.002-.011.007-.017.011zm1.991-.186l.012 1.688-1.672-1.367a4.946 4.946 0 011.66-.321zm-1.824.52l1.672 1.366-1.674.31a4.817 4.817 0 01.002-1.677zm.048 1.926l1.882-.348 1.761 1.44-2.997.555a5.843 5.843 0 01-.646-1.647zm5.803-.962l.025 3.507-1.762-1.44-.022-3.142a6.68 6.68 0 011.771 1.02.134.134 0 00-.012.055zm-3.618 4.348a.116.116 0 00-.051.023 6.654 6.654 0 01-1.348-1.529l3.116-.576 1.762 1.44-3.479.642zm.199.222l3.537-.655 1.56 1.275c-1.875.76-3.548.556-5.097-.62zm5.263.424l-1.56-1.277-.025-3.567c1.459 1.283 1.98 2.872 1.585 4.844zm-3.86-6.162v.002l.021 3.022-1.762-1.44-.013-1.898c.583.014 1.175.12 1.754.314zM153.415 77.582c.005.004.01.01.015.013.002 0 .002.002.004.003l.004.002a.29.29 0 01.018.006c.007.002.013.006.021.006.004 0 .007 0 .01.002h.004a5.07 5.07 0 002.068-.36c.004 0 .009 0 .012-.002.005-.001.01-.005.015-.008 1.308-.52 2.479-1.553 3.242-2.937 1.055-1.917.957-3.841-.285-5.723l.934-1.694a.13.13 0 00-.051-.175.126.126 0 00-.173.05l-.932 1.693c-1.497-.049-2.741.35-3.716 1.194a5.704 5.704 0 00-1.247 1.579c-1.157 2.1-1.143 4.583.033 6.326l.004.003.006.008c.003.006.009.01.014.014zm-.543-1.924l1.658-.317-1.042 1.891a4.951 4.951 0 01-.616-1.574zm.841 1.7l1.041-1.892.608 1.59c-.535.198-1.092.3-1.649.302zm1.886-.396l-.683-1.788 1.096-1.993 1.089 2.847c-.463.394-.97.709-1.502.934zm-1.997-5.533l3.445-.66-1.097 1.994-3.087.59a6.707 6.707 0 01.683-1.926.126.126 0 00.056.002zm4.931 2.77a.114.114 0 00.032.047 6.633 6.633 0 01-1.259 1.602l-1.131-2.96 1.096-1.993 1.262 3.305zm.182-.235l-1.284-3.36.972-1.765c1.087 1.707 1.188 3.389.312 5.125zm-.536-5.253l-.973 1.766-3.503.67c.998-1.667 2.466-2.468 4.476-2.436zm-5.36 4.912h.001l2.969-.568-1.098 1.994-1.864.356a5.941 5.941 0 01-.008-1.782z\" fill=\"#5ECE7B\"></path></g></symbol>")])}
var IconSpritevue_type_template_id_897b0aba_staticRenderFns = []


// CONCATENATED MODULE: ./components/General/IconSprite.vue?vue&type=template&id=897b0aba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/General/IconSprite.vue?vue&type=script&lang=ts&

/* harmony default export */ var IconSpritevue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'IconSprite'
}));
// CONCATENATED MODULE: ./components/General/IconSprite.vue?vue&type=script&lang=ts&
 /* harmony default export */ var General_IconSpritevue_type_script_lang_ts_ = (IconSpritevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/General/IconSprite.vue





/* normalize component */

var IconSprite_component = Object(componentNormalizer["a" /* default */])(
  General_IconSpritevue_type_script_lang_ts_,
  IconSpritevue_type_template_id_897b0aba_render,
  IconSpritevue_type_template_id_897b0aba_staticRenderFns,
  false,
  null,
  null,
  "23699d00"
  
)

/* harmony default export */ var IconSprite = (IconSprite_component.exports);
// EXTERNAL MODULE: ./components/utils/LoadWhenVisible.vue + 4 modules
var LoadWhenVisible = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/TopBar/TopBar.vue?vue&type=template&id=6ffa6fbb&scoped=true&
var TopBarvue_type_template_id_6ffa6fbb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfTopBar',{staticClass:"topbar",scopedSlots:_vm._u([{key:"left",fn:function(){return [_c('SfButton',{staticClass:"sf-button--text"},[_vm._v("\n      "+_vm._s(_vm.$t('Help & FAQs'))+"\n    ")])]},proxy:true},{key:"center",fn:function(){return [_c('p',[_vm._v(_vm._s(_vm.$t('Download')))]),_vm._v(" "),_c('SfButton',{staticClass:"topbar__button sf-button--text"},[_vm._v("\n      "+_vm._s(_vm.$t('Find out more'))+"\n    ")])]},proxy:true},{key:"right",fn:function(){return [(_vm.hasCurrencyToSelect)?_c('CurrencySelector'):_vm._e(),_vm._v(" "),(_vm.hasStoresToSelect)?_c('StoreSwitcher'):_vm._e()]},proxy:true}])})}
var TopBarvue_type_template_id_6ffa6fbb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/TopBar/TopBar.vue?vue&type=template&id=6ffa6fbb&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=2772494f&
var SfTopBarvue_type_template_id_2772494f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-top-bar"},[_vm._ssrNode("<div class=\"sf-top-bar__container\">","</div>",[_vm._ssrNode("<div class=\"sf-top-bar__left\">","</div>",[_vm._t("left")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-top-bar__center\">","</div>",[_vm._t("center")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-top-bar__right\">","</div>",[_vm._t("right")],2)],2)])}
var SfTopBarvue_type_template_id_2772494f_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=template&id=2772494f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfTopBarvue_type_script_lang_js_ = ({
  name: "SFTopBar"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfTopBar_SfTopBarvue_type_script_lang_js_ = (SfTopBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfTopBar/SfTopBar.vue



function SfTopBar_injectStyles (context) {
  
  var style0 = __webpack_require__(238)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfTopBar_component = Object(componentNormalizer["a" /* default */])(
  SfTopBar_SfTopBarvue_type_script_lang_js_,
  SfTopBarvue_type_template_id_2772494f_render,
  SfTopBarvue_type_template_id_2772494f_staticRenderFns,
  false,
  SfTopBar_injectStyles,
  null,
  "5a6c9340"
  
)

/* harmony default export */ var SfTopBar = (SfTopBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/TopBar/TopBar.vue?vue&type=script&lang=ts&



/* harmony default export */ var TopBarvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  components: {
    CurrencySelector: () => __webpack_require__.e(/* import() */ 56).then(__webpack_require__.bind(null, 603)),
    StoreSwitcher: () => __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(null, 604)),
    SfTopBar: SfTopBar,
    SfButton: SfButton["a" /* default */]
  },
  setup() {
    const {
      hasCurrencyToSelect,
      hasStoresToSelect
    } = useTopBar();
    return {
      hasCurrencyToSelect,
      hasStoresToSelect
    };
  }
}));
// CONCATENATED MODULE: ./components/TopBar/TopBar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var TopBar_TopBarvue_type_script_lang_ts_ = (TopBarvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/TopBar/TopBar.vue



function TopBar_injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopBar_component = Object(componentNormalizer["a" /* default */])(
  TopBar_TopBarvue_type_script_lang_ts_,
  TopBarvue_type_template_id_6ffa6fbb_scoped_true_render,
  TopBarvue_type_template_id_6ffa6fbb_scoped_true_staticRenderFns,
  false,
  TopBar_injectStyles,
  "6ffa6fbb",
  "49dabd44"
  
)

/* harmony default export */ var TopBar = (TopBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./layouts/default.vue?vue&type=script&lang=ts&








/* harmony default export */ var defaultvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'DefaultLayout',
  components: {
    LoadWhenVisible: LoadWhenVisible["a" /* default */],
    LazyHydrate: external_vue_lazy_hydration_default.a,
    AppHeader: AppHeader,
    BottomNavigation: BottomNavigation,
    IconSprite: IconSprite,
    TopBar: TopBar,
    AppFooter: () => __webpack_require__.e(/* import() */ 94).then(__webpack_require__.bind(null, 600)),
    CartSidebar: () => __webpack_require__.e(/* import() */ 79).then(__webpack_require__.bind(null, 625)),
    WishlistSidebar: () => __webpack_require__.e(/* import() */ 87).then(__webpack_require__.bind(null, 626)),
    LoginModal: () => __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(null, 594)),
    Notification: () => __webpack_require__.e(/* import() */ 103).then(__webpack_require__.bind(null, 627))
  },
  setup() {
    const route = Object(runtime["u" /* useRoute */])();
    const {
      isCartSidebarOpen,
      isWishlistSidebarOpen,
      isLoginModalOpen,
      toggleLoginModal
    } = Object(composables["p" /* useUiState */])();
    return {
      isCartSidebarOpen,
      isWishlistSidebarOpen,
      isLoginModalOpen,
      toggleLoginModal,
      route
    };
  },
  head: {
    link: [{
      rel: 'stylesheet',
      href: '/_nuxt/fonts.css'
    }]
  }
}));
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_ts_,
  defaultvue_type_template_id_32bd0b49_render,
  defaultvue_type_template_id_32bd0b49_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "0e6d39d4"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (layouts_error.options || layouts_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/composition-api/plugin.mjs

/* harmony default export */ var composition_api_plugin = (runtime["c" /* globalPlugin */]);
// CONCATENATED MODULE: ./.nuxt/nuxt.plugin.0d717043.js
/* eslint-disable */
/* harmony default export */ var nuxt_plugin_0d717043 = (ctx => {
  const options = {
    "enabled": false,
    "invalidation": {
      "endpoint": "\u002Fcache-invalidate",
      "key": undefined,
      "handlers": ["@vue-storefront\u002Fcache\u002FdefaultHandler"]
    },
    "driver": ["@vue-storefront\u002Fredis-cache", {
      "defaultTimeout": 86400,
      "redis": {
        "keyPrefix": "",
        "host": "127.0.0.1",
        "port": "6379"
      }
    }]
  };
  ctx.req.$vsfCache = {
    ...options,
    tagsSet: new Set()
  };
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(133);

// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(143);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var is_https_dist = __webpack_require__(144);
var is_https_dist_default = /*#__PURE__*/__webpack_require__.n(is_https_dist);

// CONCATENATED MODULE: ./lang/en.js
/* eslint-disable  */

/* harmony default export */ var en = ({
  "About us": "About us",
  "Account": "Account",
  "Add new address": "Add new address",
  "Add to compare": "Add to compare",
  "Add to Wishlist": "Add to Wishlist",
  "Additional Information": "Additional Information",
  "All Orders": "All Orders",
  "Allow order notifications": "Allow order notifications",
  "Apply": "Apply",
  "Applied Coupon": "Applied Coupon",
  "Attention!": "Attention!",
  "Back to home": "Back to home",
  "Back to homepage": "Back to homepage",
  "Billing": "Billing",
  "Billing address": "Billing address",
  "Brand": "Brand",
  "Cancel": "Cancel",
  "Cart": "Cart",
  "Categories": "Categories",
  "Change": "Change",
  "Change password your account": "If you want to change the password to access your account, enter the following information",
  "Clear all": "Clear all",
  "Color": "Color",
  "Commercial information": "and agree to receive personalized commercial information from Brand name by email",
  "Contact details updated": "Keep your addresses and contact details updated.",
  "Contact us": "Contact us",
  "Continue to billing": "Continue to billing",
  "Continue to payment": "Continue to payment",
  "Continue to shipping": "Continue to shipping",
  "Cookies Policy": "Cookies Policy",
  "Create an account": "Create an account",
  "Customer Reviews": "Customer Reviews",
  "Customer service": "Customer service",
  "Date": "Date",
  "Default Billing Address": "Default Billing Address",
  "Default Shipping Address": "Default Shipping Address",
  "Delete": "Delete",
  "Departments": "Departments",
  "Description": "Description",
  "Details and status orders": "Check the details and status of your orders in the online store. You can also cancel your order or request a return.",
  "Discount": "Discount",
  "Done": "Done",
  "Download": "Download",
  "Download all": "Download all",
  "Edit": "Edit",
  "Email address": "Email address",
  "Empty": "Looks like you haven’t added any items to the bag yet. Start shopping to fill it in.",
  "Empty bag": "Empty bag",
  "Enjoy your free account": "Enjoy these perks with your free account!",
  "Enter promo code": "Enter promo code",
  "Feedback": "Your feedback is important to us. Let us know what we could improve.",
  "Feel free to edit": "Feel free to edit any of your details below so your account is always up to date",
  "Filters": "Filters",
  "Find out more": "Find out more",
  "First Name": "First Name",
  "Forgot Password": "If you can’t remember your password, you can reset it.",
  "Forgot Password Modal Email": "Email you are using to sign in:",
  "forgotPasswordConfirmation": "Thanks! If there is an account registered with the {0} email, you will find message with a password reset link in your inbox.",
  "Forgotten password?": "Forgotten password?",
  "Go back": "Go back",
  "Go back shopping": "Go back shopping",
  "Go back to shop": "Go back to shop",
  "Go to checkout": "Go to checkout",
  "Go to cart": "Go to cart",
  "Guarantee": "Guarantee",
  "Help": "Help",
  "Help & FAQs": "Help & FAQs",
  "hide": "hide",
  "Home": "Home",
  "I agree to": "I agree to",
  "I confirm subscription": "I confirm subscription",
  "I want to create an account": "I want to create an account",
  "Info after order": "You can log to your account using e-mail and password defined earlier. On your account you can edit your profile data, check history of transactions, edit subscription to newsletter.",
  "Instruction1": "Take care of me",
  "Instruction2": "Just here for the care instructions?",
  "Instruction3": "Yeah, we thought so",
  "It was not possible to request a new password, please check the entered email address.": "It was not possible to request a new password, please check the entered email address.",
  "Item": "Item",
  "Items": "Items",
  "Kidswear": "Kidswear",
  "Last Name": "Last Name",
  "Let’s start now – we’ll help you": "Let’s start now – we’ll help you.",
  "Log into your account": "Log into your account",
  "Login": "Login",
  "login in to your account": "login in to your account",
  "Looks like you haven’t added any items to the bag yet. Start shopping to fill it in.": "Looks like you haven’t added any items to the bag yet. Start shopping to fill it in.",
  "Looks like you haven’t added any items to the Wishlist.": "Looks like you haven’t added any items to the Wishlist.",
  "Make an order": "Make an order",
  "Manage addresses": "Manage all the addresses you want (work place, home address...) This way you won\"t have to enter the address manually with each order.",
  "Manage billing addresses": "Manage all the billing addresses you want (work place, home address...) This way you won\"t have to enter the billing address manually with each order.",
  "Manage shipping addresses": "Manage all the shipping addresses you want (work place, home address...) This way you won\"t have to enter the shipping address manually with each order.",
  "Match it with": "Match it with",
  "Men fashion": "Men fashion",
  "Menu": "Menu",
  "My billing and shipping address are the same": "My billing and shipping address are the same",
  "My Cart": "My Cart",
  "No account": "Don't have an account yet?",
  "or": "or",
  "or fill the details below": "or fill the details below",
  "Order ID": "Order ID",
  "Order information": "Order information",
  "Order No.": "Order No.",
  "Order summary": "Order summary",
  "Other products you might like": "Other products you might like",
  "Out of stock": "Out of stock",
  "Password": "Password",
  "Password Changed": "Password successfuly changed. You can now go back to homepage and sign in.",
  "Pay for order": "Pay for order",
  "Payment": "Payment",
  "Payment & Delivery": "Payment & Delivery",
  "Payment Method": "Payment Method",
  "Payment Methods": "Payment Methods",
  "Personal details": "Personal details",
  "Please type your current password to change your email address.": "Please type your current password to change your email address.",
  "Price": "Price",
  "Privacy": "Privacy",
  "Privacy Policy": "Privacy Policy",
  "Product": "Product",
  "Product suggestions": "Product suggestions",
  "Products": "Products",
  "Products found": "Products found",
  "Purchase terms": "Purchase terms",
  "Quality in the details": "Quality in the details",
  "Quantity": "Quantity",
  "Read all reviews": "Read all reviews",
  "Read and understand": "I have read and understand the",
  "Read reviews": "Read reviews",
  "Register": "Register",
  "Register today": "Register today",
  "Remove": "Remove",
  "Remove Address": "Remove Address",
  "Remove from Wishlist": "Remove from Wishlist",
  "Repeat Password": "Repeat Password",
  "Reset Password": "Reset Password",
  "Review my order": "Review my order",
  "Same as shipping address": "Same as shipping address",
  "Save changes": "Save changes",
  "Save for later": "Save for later",
  "Save Password": "Save Password",
  "Search": "Search",
  "Search for items": "Search for items",
  "Search results": "Search results",
  "Sections that interest you": "Sections that interest you",
  "See all results": "See all results",
  "See more": "See more",
  "Select payment method": "Select payment method",
  "Select shipping method": "Select shipping method",
  "Send my feedback": "Send my feedback",
  "Set up newsletter": "Set up your newsletter and we will send you information about new products and trends from the sections you selected every week.",
  "Share your look": "Share your look",
  "Shipping": "Shipping",
  "Shipping address": "Shipping address",
  "Shipping details": "Shipping details",
  "Shipping method": "Shipping method",
  "Show": "Show",
  "show more": "show more",
  "Show on page": "Show on page",
  "Sign in": "Sign in",
  "Size guide": "Size guide",
  "Sign Up for Newsletter": "Sign Up for Newsletter",
  "Sort by": "Sort by",
  "Sort: Default": "Default",
  "Sort: Name A-Z": "Name A-Z",
  "Sort: Name Z-A": "Name Z-A",
  "Sort: Price from high to low": "Price from high to low",
  "Sort: Price from low to high": "Price from low to high",
  "Start shopping": "Start shopping",
  "Status": "Status",
  "Subscribe": "Subscribe",
  "Subscribe to newsletter": "Subscribe to newsletter",
  "subscribeToNewsletterModalContent": "After signing up for the newsletter, you will receive special offers and messages from VSF via email. We will not sell or distribute your email to any third party at any time. Please see our {0}.",
  "Subtotal": "Subtotal",
  "Subtotal price": "Subtotal price",
  "Successful placed order": "You have successfully placed the order. You can check status of your order by using our delivery status feature. You will receive an order confirmation e-mail with details of your order and a link to track its progress.",
  "Terms and conditions": "Terms and conditions",
  "Thank you": "Thank you",
  "Thank You Inbox": "If the message is not arriving in your inbox, try another email address you might’ve used to register.",
  "Total": "Total",
  "Order Total": "Order Total",
  "Total items": "Total items",
  "Total price": "Total price",
  "Update password": "Update password",
  "Update personal data": "Update personal data",
  "Use your personal data": "At Brand name, we attach great importance to privacy issues and are committed to protecting the personal data of our users. Learn more about how we care and use your personal data in the",
  "User Account": "User Account",
  "View": "View",
  "View details": "View details",
  "Vue Storefront Next": "Vue Storefront Next",
  "Who we are": "Who we are",
  "Wishlist": "Wishlist",
  "Women fashion": "Women fashion",
  "You added {product} to your shopping cart.": "You added {product} to your shopping cart.",
  "You are not authorized, please log in": "You are not authorized, please log in",
  "You can unsubscribe at any time": "You can unsubscribe at any time",
  "You currently have no orders": "You currently have no orders",
  "You haven\’t searched for items yet": "You haven’t searched for items yet.",
  "Your bag is empty": "Your bag is empty",
  "Your current email address is": "Your current email address is",
  "Your email": "Your email",
  "The email field must be a valid email": "The email field must be a valid email",
  'You have submitted no reviews': 'You have submitted no reviews',
  "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.": "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
  "A customer with the same email address already exists in an associated website.": "A customer with the same email address already exists in an associated website.",
  "Invalid email": "Invalid email",
  "SUMMER COLLECTION {year}": "SUMMER COLLECTION {year}",
  "Colorful summer dresses are already in store": "Colorful summer dresses are already in store",
  "Learn more": "Learn more",
  "Dresses": "Dresses",
  "Cocktail & Party": "Cocktail & Party",
  "Linen Dresses": "Linen Dresses",
  "T-Shirts": "T-Shirts",
  "The office life": "The office life",
  "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.": "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
  "Shop now": "Shop now",
  "The Office Life": "The Office Life",
  "Summer Sandals": "Summer Sandals",
  "Eco Sandals": "Eco Sandals",
  "Subscribe to Newsletters": "Subscribe to Newsletters",
  "Be aware of upcoming sales and events. Receive gifts and special offers!": "Be aware of upcoming sales and events. Receive gifts and special offers",
  "Fashion to take away": "Fashion to take away",
  "Download our application to your mobile": "Download our application to your mobile",
  "Share Your Look": "Share Your Look",
  "My Account": "My Account",
  "My profile": "My profile",
  "Personal Details": "Personal Details",
  "Addresses details": "Addresses details",
  "My newsletter": "My newsletter",
  "Log out": "Log out",
  "My reviews": "My reviews",
  "Order history": "Order history",
  "Order details": "Order details",
  "My wishlist": "My wishlist",
  "Password change": "Password change",
  "Personal data": "Personal data",
  "Your e-mail": "Your e-mail",
  "Current Password": "Current Password",
  "You are not authorized, please log in.": "You are not authorized, please log in.",
  "Go To Product": "Go To Product",
  "Change to list view": "Change to list view",
  "Change to grid view": "Change to grid view",
  "Returns": "Returns",
  "My orders": "My orders",
  "Add the address": "Add the address",
  "Set as default shipping": "Set as default shipping",
  "Set as default billing": "Set as default billing",
  "House/Apartment number": "House/Apartment number",
  "Street Name": "Street Name",
  "City": "City",
  "State/Province": "State/Province",
  "Zip-code": "Zip-code",
  "Country": "Country",
  "Phone number": "Phone number",
  "Please select a country first": "Please select a country first",
  "This field is required": "This field is required",
  "The field should have at least 2 characters": "The field should have at least 2 characters",
  "The field should have at least 4 characters": "The field should have at least 4 characters",
  "The field should have at least 8 characters": "The field should have at least 8 characters",
  "New Password": "New Password",
  "New Products": "New Products",
  "There are no shipping methods available for this country. We are sorry, please try with different country.": "There are no shipping methods available for this country. We are sorry, please try with different country.",
  "There was some error while trying to fetch shipping methods. We are sorry, please try with different shipping details.": "There was some error while trying to fetch shipping methods. We are sorry, please try with different shipping details.",
  "There was some error while trying to select this shipping method. We are sorry, please try with different shipping method.": "There was some error while trying to select this shipping method. We are sorry, please try with different shipping method.",
  "We can't find products matching the selection.": "We can't find products matching the selection.",
  'Page not found': 'Page not found',
  'Back to Home page': 'Back to Home page',
  'An error occurred': 'An error occurred',
  "AllProductsFromCategory": "All {categoryName}",
  "Show more": "Show more",
  "Show less": "Show less",
  "Yes": "Yes",
  "No": "No",
  "Apply filters": "Apply filters",
  "The coupon code isn't valid. Verify the code and try again.": "The coupon code isn't valid. Verify the code and try again.",
  "From": "From",
  "To": "To",
  "Your customization": "Your customization",
  "Passwords don't match": "Passwords don't match",
  "The password must be at least 8 characters long and must contain at least: 1 uppercase or lowercase letter, 1 number, or one special character (E.g. , . _ & ? etc)": "The password must be at least 8 characters long and must contain at least: 1 uppercase or lowercase letter, 1 number, or one special character (E.g. , . _ & ? etc)",
  "Show all products": "Show all products",
  "Select previously saved address": "Select previously saved address",
  "Enter different address": "Enter different address",
  "You must confirm your account. Please check your email for the confirmation link.": "You must confirm your account. Please check your email for the confirmation link.",
  "Change Store": "Change Store",
  "Choose Currency": "Choose Currency",
  "Add a review": "Add a review",
  "Add to cart": "Add to cart",
  "Title": "Title",
  "Name": "Name",
  "Review": "Review",
  "Add review": "Add review",
  "Are you sure you would like to remove this item from the shopping cart?": "Are you sure you would like to remove this item from the shopping cart?",
  "Your cart is empty": "Your cart is empty",
  "Are you sure?": "Are you sure?",
  "{0} has been successfully removed from your cart": "{0} has been successfully removed from your cart",
  "Amount": "Amount",
  "Thank you for your order!": "Thank you for your order!",
  "Your Purchase": "Your Purchase",
  "Primary contacts for any questions": "Primary contacts for any questions",
  "Your Account": "Your account",
  "What can we improve": "What can we improve",
  "Payment date": "Payment date",
  "The user password was changed successfully updated!": "The user password was changed successfully updated!",
  "The user account data was successfully updated!": "The user account data was successfully updated!",
  "You submitted your review for moderation.": "You submitted your review for moderation.",
  "Starting at": "Starting at"
});
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js

const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options_options = {
  vueI18n: {
    "fallbackLocale": "default",
    "numberFormats": {
      "default": {
        "currency": {
          "style": "currency",
          "currency": "USD",
          "currencyDisplay": "symbol"
        }
      },
      "german": {
        "currency": {
          "style": "currency",
          "currency": "EUR",
          "currencyDisplay": "symbol"
        }
      }
    }
  },
  vueI18nLoader: false,
  locales: [{
    "code": "default",
    "file": "en.js",
    "iso": "en_US",
    "defaultCurrency": "USD"
  }, {
    "code": "german",
    "file": "de.js",
    "iso": "de_DE",
    "defaultCurrency": "EUR"
  }],
  defaultLocale: "default",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: true,
  langDir: "D:\\Zaid\\Work\\Human Abstract\\assets_dev\\testing_setup\\ha-test\\lang",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  seo: true,
  baseUrl: "http://localhost:3000",
  vuex: {
    "moduleName": "i18n",
    "syncLocale": false,
    "syncMessages": false,
    "syncRouteParams": true
  },
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  country: "US",
  normalizedLocales: [{
    "code": "default",
    "file": "en.js",
    "iso": "en_US",
    "defaultCurrency": "USD"
  }, {
    "code": "german",
    "file": "de.js",
    "iso": "de_DE",
    "defaultCurrency": "EUR"
  }],
  localeCodes: ["default", "german"]
};
const localeMessages = {
  'en.js': () => Promise.resolve(en),
  'de.js': () => __webpack_require__.e(/* import() | lang-de.js */ 62).then(__webpack_require__.bind(null, 591))
};
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(71);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(241);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js



/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */
function formatMessage(text) {
  return `[nuxt-i18n] ${text}`;
}

/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */
function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}

/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */
function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = [];

  // Normalise appLocales input
  /** @type {{ code: string, iso: string }[]} */
  const normalizedAppLocales = [];
  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  }

  // First pass: match exact locale.
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  }

  // Second pass: match only locale code part of the browser locale (not including country).
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  }

  // Sort the list by score (0 - lowest, 1 - highest).
  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }
      return localeB.score - localeA.score;
    });
  }
  return matchedLocales.length ? matchedLocales[0].code : undefined;
}

/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */
function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;
  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }
  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);
    if (matchingLocale) {
      return matchingLocale.code;
    }
  }
  return '';
}

/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */
function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`, 'i');
}

/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */
function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */
  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);
      if (matches && matches.length > 1) {
        return matches[1];
      }
    }
    return '';
  };
  return getLocaleFromRoute;
}

/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */
function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;
    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }
    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}

/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */
function setLocaleCookie(locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }
  const date = new Date();
  /** @type {import('cookie').CookieSerializeOptions} */
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };
  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }
  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];
    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }
    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js



// @ts-ignore


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */
async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;
  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }
  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = options_options.normalizedLocales.find(l => l.code === locale);
    if (localeObject) {
      const {
        file
      } = localeObject;
      if (file) {
        /*  */
        /** @type {import('vue-i18n').LocaleMessageObject | undefined} */
        let messages;
        if (false) {}
        if (!messages) {
          try {
            // @ts-ignore
            const getter = await localeMessages[file]().then(m => m.default || m);
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(formatMessage(`Failed loading async locale export: ${error.message}`));
          }
        }
        if (messages) {
          i18n.setLocaleMessage(locale, messages);
          i18n.loadedLanguages.push(locale);
        }
        /*  */
      } else {
        console.warn(formatMessage(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}

/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */
function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }
  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });
    if (domain) {
      return domain;
    }
  }
  return baseUrl;
}

/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */
function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);
  if (lang && lang.domain) {
    if (Object(dist["hasProtocol"])(lang.domain)) {
      return lang.domain;
    }
    let protocol;
    if (true) {
      protocol = req && is_https_dist_default()(req) ? 'https' : 'http';
    } else {}
    return `${protocol}://${lang.domain}`;
  }

  // eslint-disable-next-line no-console
  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}

/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */
function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({
      ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: {
      ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }
      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }
      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}
          commit('setRouteParams', params);
        }
      } : {})
    },
    mutations: {
      ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }
      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }
      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }
      } : {})
    },
    getters: {
      ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};
          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}

/**
 * Dispatch store module actions to keep it in sync with app's locale data
 *
 * @param  {import('vuex').Store<void>} store
 * @param  {string | null} locale The current locale
 * @param  {object | null} messages Current messages
 * @param  {ResolvedOptions['vuex']} vuex
 * @return {Promise<void>}
 */
async function syncVuex(store, locale = null, messages = null, vuex) {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }
    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
}

/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */
function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(formatMessage('Route params should be an object'));
    return;
  }
  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}

/**
 * @param {any} value
 * @return {boolean}
 */
function isObject(value) {
  return value && !Array.isArray(value) && typeof value === 'object';
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/head-meta.js




/**
 * @this {import('vue/types/vue').Vue}
 * @return {import('vue-meta').MetaInfo}
 */
function nuxtI18nHead({
  addDirAttribute = true,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }

  /** @type {import('../../types/vue').NuxtI18nMeta} */
  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || options_options.defaultDirection;

  /**
   * Adding Direction Attribute:
   */
  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }

  /**
   * Adding SEO Meta:
   */
  if (addSeoAttributes && (
  // @ts-ignore
  external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && this.$options[Constants.COMPONENT_OPTIONS_KEY] !== false &&
  // @ts-ignore
  !(this.$options[Constants.COMPONENT_OPTIONS_KEY] && this.$options[Constants.COMPONENT_OPTIONS_KEY].seo === false)) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales = /** @type {import('../../types').LocaleObject[]} */this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }

  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */
  function addHreflangLinks(locales, baseUrl, link) {
    if (options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */
    const localeMap = new Map();
    for (const locale of locales) {
      const localeIso = locale.iso;
      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(formatMessage('Locale ISO code is required to generate alternate link'));
        continue;
      }
      const [language, region] = localeIso.split('-');
      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }
      localeMap.set(localeIso, locale);
    }
    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);
      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }
    if (options_options.defaultLocale) {
      const localePath = this.switchLocalePath(options_options.defaultLocale);
      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */
  function addCanonicalLinks(baseUrl, link) {
    const currentRoute = this.localeRoute({
      ...this.$route,
      name: this.getRouteBaseName()
    });
    const canonicalPath = currentRoute ? currentRoute.path : null;
    if (canonicalPath) {
      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href: toAbsoluteUrl(canonicalPath, baseUrl)
      });
    }
  }

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */
  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;
    if (!hasCurrentLocaleAndIso) {
      return;
    }
    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */
  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });
    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }

  /**
   * @param {string | undefined} str
   * @return {string}
   */
  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }

  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */
  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }
    return baseUrl + urlOrPath;
  }
  return metaObject;
}

/**
 * @deprecated Use `nuxtI18nHead()` instead.
 * @this {import('vue/types/vue').Vue}
 */
function nuxtI18nSeo() {
  return nuxtI18nHead.call(this, {
    addDirAttribute: false,
    addSeoAttributes: true
  });
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.seo.js



/** @type {Vue.PluginObject<void>} */
const plugin_seo_plugin = {
  install(Vue) {
    Vue.mixin({
      head() {
        return nuxtI18nHead.call(this, {
          addDirAttribute: false,
          addSeoAttributes: true
        });
      }
    });
  }
};
external_vue_default.a.use(plugin_seo_plugin);
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore


/** @type {import('@nuxt/types').Middleware} */
const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;
  if (isHMR) {
    return;
  }
  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);
  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js




// @ts-ignore


/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */
function plugin_routing_localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.fullPath : '';
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */
function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */
function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */
function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }
  const {
    i18n
  } = this;
  locale = locale || i18n.locale;
  if (!locale) {
    return;
  }

  // If route parameter is a string, check if it's a path or name of route.
  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }
  let localizedRoute = Object.assign({}, route);
  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);
    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === options_options.defaultLocale;
      // if route has a path defined but no name, resolve full route using the path
      const isPrefixed =
      // don't prefix default locale
      !(isDefaultLocale && [Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options_options.strategy)) &&
      // no prefix for any language
      !(options_options.strategy === Constants.STRATEGIES.NO_PREFIX) &&
      // no prefix for different domains
      !i18n.differentDomains;
      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }
      localizedRoute.path = nuxtOptions.trailingSlash ? Object(dist["withTrailingSlash"])(localizedRoute.path, true) : Object(dist["withoutTrailingSlash"])(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }
    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;
    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }
  const resolvedRoute = this.router.resolve(localizedRoute);
  if (resolvedRoute.route.name) {
    return resolvedRoute;
  }
  // If didn't resolve to an existing route then just return resolved route based on original input.
  return this.router.resolve(route);
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */
function switchLocalePath(locale) {
  const name = this.getRouteBaseName();
  if (!name) {
    return '';
  }
  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};
  if (options_options.vuex && options_options.vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${options_options.vuex.moduleName}/localeRouteParams`](locale);
  }
  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: {
      ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale);

  // Handle different domains
  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);
    if (domain) {
      path = domain + path;
    }
  }
  return path;
}

/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */
function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;
  if (!route || !route.name) {
    return;
  }
  return route.name.split(options_options.routesNameSeparator)[0];
}

/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */
function getLocaleRouteName(routeName, locale) {
  let name = routeName + (options_options.strategy === Constants.STRATEGIES.NO_PREFIX ? '' : options_options.routesNameSeparator + locale);
  if (locale === options_options.defaultLocale && options_options.strategy === Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
    name += options_options.routesNameSeparator + options_options.defaultLocaleRouteNameSuffix;
  }
  return name;
}

/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */
const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};

/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */
const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};

/** @type {import('vue').PluginObject<void>} */
const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(plugin_routing_localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }
};

/** @type {import('@nuxt/types').Plugin} */
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, plugin_routing_localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(72);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js






// @ts-ignore

// @ts-ignore

external_vue_default.a.use(external_vue_i18n_default.a);

/** @type {import('@nuxt/types').Plugin} */
/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;
  if (options_options.vuex && store) {
    registerStore(store, options_options.vuex, options_options.localeCodes);
  }
  const {
    lazy
  } = options_options;
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);
  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 276, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;
      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];
        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {
            // Ignore - client-side will load the chunk asynchronously.
          }
        }
      }
      nuxtState.__i18n = {
        langs
      };
    });
  }
  const {
    alwaysRedirect,
    fallbackLocale,
    onlyOnNoPrefix,
    onlyOnRoot,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } = /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */options_options.detectBrowserLanguage;

  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */
  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    }

    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }
    const oldLocale = app.i18n.locale;
    if (newLocale === oldLocale) {
      return;
    }
    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);
    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }
      newLocale = localeOverride;
    }
    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }
    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }
    if (options_options.langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;
      if (options_options.lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];
          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }
          await Promise.all(localesToLoadPromises);
        }
        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(options_options.localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    }
    app.i18n.locale = newLocale;
    /** @type {import('../../types').LocaleObject} */
    const newLocaleProperties = options_options.normalizedLocales.find(l => l.code === newLocale) || {
      code: newLocale
    };
    // In case certain locale has more properties than another, reset all the properties.
    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = undefined;
    }
    // Copy properties of the new locale
    for (const [key, value] of Object.entries(newLocaleProperties)) {
      external_vue_default.a.set(app.i18n.localeProperties, key, klona(value));
    }
    if (options_options.vuex) {
      await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), options_options.vuex);
    }

    // Must retrieve from context as it might have changed since plugin initialization.
    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);
    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);
      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };
  const getLocaleFromRoute = createLocaleFromRouteGetter(options_options.localeCodes, {
    routesNameSeparator: options_options.routesNameSeparator,
    defaultLocaleRouteNameSuffix: options_options.defaultLocaleRouteNameSuffix
  });

  /**
   * Gets the redirect path for locale.
   *
   * @param {import("vue-router").Route} route
   * @param {string | undefined} locale
   * @return {string} The redirect path for locale.
   */
  const getRedirectPathForLocale = (route, locale) => {
    // Redirects are ignored if it is a nuxt generate.
    if (false) {}
    if (!locale || app.i18n.differentDomains || options_options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return '';
    }
    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" or "onlyOnNoPrefix" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== options_options.defaultLocale || options_options.strategy !== Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
        return '';
      }
    }

    // At this point we are left with route that either has no or different locale.
    let redirectPath = app.switchLocalePath(locale);
    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }
    if (!redirectPath || redirectPath === route.fullPath || redirectPath.startsWith('//')) {
      return '';
    }
    return redirectPath;
  };

  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */
  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && options_options.rootRedirect) {
      let statusCode = 302;
      let path = options_options.rootRedirect;
      if (typeof options_options.rootRedirect !== 'string') {
        statusCode = options_options.rootRedirect.statusCode;
        path = options_options.rootRedirect.path;
      }
      return [statusCode, `/${path}`, /* preserve query */true];
    }
    const storedRedirect = app.i18n.__redirect;
    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }
    const resolveBaseUrlOptions = {
      differentDomains: options_options.differentDomains,
      normalizedLocales: options_options.normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = options_options.detectBrowserLanguage && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    if (options_options.skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }
    return [null, null];
  };
  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }
    await app.i18n.setLocale(app.i18n.__pendingLocale);
    app.i18n.__resolvePendingLocalePromise('');
    app.i18n.__pendingLocale = null;
  };
  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };
  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return matchBrowserLocale(options_options.normalizedLocales, parseAcceptLanguage(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };

  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */
  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (false) {}
    if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      if (onlyOnRoot) {
        if (route.path !== '/') {
          return '';
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route.path.match(getLocalesRegex(options_options.localeCodes))) {
          return '';
        }
      }
    }
    let matchedLocale;
    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {
      // Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }
    const finalLocale = matchedLocale || fallbackLocale;

    // Handle cookie option to prevent multiple redirections
    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }
    return '';
  };

  /**
   * Extends the newly created vue-i18n instance with nuxt-i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */
  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(options_options.locales);
    i18n.localeCodes = klona(options_options.localeCodes);
    i18n.localeProperties = external_vue_default.a.observable(klona(options_options.normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    }));
    i18n.defaultLocale = options_options.defaultLocale;
    i18n.differentDomains = options_options.differentDomains;
    i18n.beforeLanguageSwitch = options_options.beforeLanguageSwitch;
    i18n.onBeforeLanguageSwitch = options_options.onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = options_options.onLanguageSwitched;
    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });
    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: options_options.localeCodes
    });
    i18n.setLocale = locale => loadAndSetLocale(locale);
    i18n.getBrowserLocale = () => getBrowserLocale();
    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  };

  // Set instance options
  const vueI18nOptions = typeof options_options.vueI18n === 'function' ? await options_options.vueI18n(context) : klona(options_options.vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  // @ts-ignore
  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions);
  // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey
  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: options_options.differentDomains,
    normalizedLocales: options_options.normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(options_options.baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;
  external_vue_default.a.prototype.$nuxtI18nHead = nuxtI18nHead;
  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;
    if (store.state.localeDomains) {
      for (const locale of app.i18n.locales) {
        if (typeof locale === 'string') {
          continue;
        }
        locale.domain = store.state.localeDomains[locale.code];
      }
    }
  }

  /** @type {string | undefined} */
  let finalLocale = options_options.detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';
  if (!finalLocale) {
    const {
      vuex
    } = options_options;
    if (vuex && vuex.syncLocale && store && store.state[vuex.moduleName].locale !== '') {
      finalLocale = store.state[vuex.moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const domainLocale = getLocaleDomain(options_options.normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (options_options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }
  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }
  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }
  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });
  if (false) {}
});
// EXTERNAL MODULE: external "vue-demi"
var external_vue_demi_ = __webpack_require__(20);

// EXTERNAL MODULE: external "pinia"
var external_pinia_ = __webpack_require__(9);

// CONCATENATED MODULE: ./.nuxt/dist.plugin.2af28716.mjs


if (external_vue_demi_["isVue2"]) {
  Object(external_vue_demi_["install"])();
  const Vue = "default" in external_vue_demi_["Vue2"] ? external_vue_demi_["Vue2"].default : external_vue_demi_["Vue2"];
  Vue.use(external_pinia_["PiniaVuePlugin"]);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = Object(external_pinia_["createPinia"])();
  if (external_vue_demi_["isVue2"]) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  if (external_vue_demi_["isVue2"]) {
    inject("pinia", pinia);
  } else {
    context.provide("pinia", pinia);
  }
  context.pinia = pinia;
  Object(external_pinia_["setActivePinia"])(pinia);
  pinia._p.push(({
    store
  }) => {
    Object.defineProperty(store, "$nuxt", {
      value: context
    });
  });
  if (true) {
    if (external_vue_demi_["isVue2"]) {
      context.beforeNuxtRender(({
        nuxtState
      }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else {}
};

// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(73);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// EXTERNAL MODULE: ./node_modules/@nuxt/image/node_modules/ufo/dist/index.cjs
var ufo_dist = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}
async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 277, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };
    img.onerror = err => reject(err);
    img.src = url;
  });
}
function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }
  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }
  if (typeof x === "string") {
    return parseInt(x, 10);
  }
  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;
  if (!contents) {
    return html;
  }
  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };
  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);
    if (image.isStatic) {
      handleStaticImage(image, input);
    }
    return image;
  };
  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, {
      ...options,
      modifiers: defu_default()(modifiers, options.modifiers || {})
    }).url;
  };
  function handleStaticImage(image, input) {
    if (false) { var _ssrState$data, _ssrContext$image; } else if (true) {
      image.url = input;
    }
  }
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, {
      ...globalOptions.presets[presetName],
      ...options
    });
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, {
    ...options
  });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(ufo_dist["hasProtocol"])(input) ? input : Object(ufo_dist["withLeadingSlash"])(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(ufo_dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && Object(ufo_dist["hasProtocol"])(input)) {
    const inputHost = Object(ufo_dist["parseURL"])(input).host;
    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu_default()(options, preset, defaults);
  _options.modifiers = {
    ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;
  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;
  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, {
        ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=4c03b41d&
var nuxt_imgvue_type_template_id_4c03b41d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',_vm._g(_vm._b({key:_vm.nSrc,ref:"img",attrs:{"src":_vm.nSrc}},'img',_vm.nAttrs,false),_vm.$listeners),[])}
var nuxt_imgvue_type_template_id_4c03b41d_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js

const defineMixin = opts => opts;
const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },
    nModifiers() {
      return {
        ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },
    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
//
//
//
//



const defineComponent = opts => opts;
/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],
  props: {
    placeholder: {
      type: [Boolean, String, Number, Array],
      default: void 0
    }
  },
  head() {
    if (this.preload === true) {
      return {
        link: [{
          rel: "preload",
          as: "image",
          href: this.nSrc
        }]
      };
    }
    return {};
  },
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nMainSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, {
        ...this.nOptions,
        sizes: this.sizes,
        modifiers: {
          ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    },
    nSrc() {
      return this.nPlaceholder ? this.nPlaceholder : this.nMainSrc;
    },
    nPlaceholder() {
      let placeholder = this.placeholder;
      if (placeholder === "") {
        placeholder = true;
      }
      if (!placeholder || this.placeholderLoaded) {
        return false;
      }
      if (typeof placeholder === "string") {
        return placeholder;
      }
      const size = Array.isArray(placeholder) ? placeholder : typeof placeholder === "number" ? [placeholder, placeholder] : [10, 10];
      return this.$img(this.src, {
        ...this.nModifiers,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, this.nOptions);
    }
  },
  mounted() {
    if (this.nPlaceholder) {
      const img = new Image();
      img.src = this.nMainSrc;
      img.onload = () => {
        this.$refs.img.src = this.nMainSrc;
        this.placeholderLoaded = true;
      };
    }
    if (false) {}
  }
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_4c03b41d_render,
  nuxt_imgvue_type_template_id_4c03b41d_staticRenderFns,
  false,
  null,
  null,
  "c6621f8a"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=310bdcc2&
var nuxt_picturevue_type_template_id_310bdcc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',{key:_vm.nSources[0].src},[_vm._ssrNode(((_vm.nSources[1])?("<source"+(_vm._ssrAttr("type",_vm.nSources[1].type))+(_vm._ssrAttr("srcset",_vm.nSources[1].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[1].sizes))+">"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.nSources[0].src))+(_vm._ssrAttr("srcset",_vm.nSources[0].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[0].sizes))+(_vm._ssrAttrs(Object.assign({}, _vm.nImgAttrs, _vm.imgAttrs)))+">")])}
var nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;
/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },
  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };
      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }
      return {
        link: [link]
      };
    }
    return {};
  },
  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },
    originalFormat() {
      return getFileExtension(this.src);
    },
    nFormat() {
      if (this.format) {
        return this.format;
      }
      if (this.originalFormat === "svg") {
        return "svg";
      }
      return "webp";
    },
    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }
      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },
    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }
      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, {
          ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: {
            ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }
  },
  created() {
    if (false) {}
  }
}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_310bdcc2_render,
  nuxt_picturevue_type_template_id_310bdcc2_staticRenderFns,
  false,
  null,
  null,
  "46782014"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(ufo_dist["encodeParam"])(key) + "_" + Object(ufo_dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL
} = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    var _ctx$nuxtContext;
    baseURL = Object(ufo_dist["joinURL"])(((_ctx$nuxtContext = ctx.nuxtContext) === null || _ctx$nuxtContext === void 0 ? void 0 : _ctx$nuxtContext.base) || "/", "/_ipx");
  }
  return {
    url: Object(ufo_dist["joinURL"])(baseURL, params, Object(ufo_dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({
  ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./.nuxt/image.js






const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  },
  ['ipx']: {
    provider: ipx_namespaceObject,
    defaults: {}
  }
};
external_vue_default.a.component(nuxt_img.name, nuxt_img);
external_vue_default.a.component(nuxt_picture.name, nuxt_picture);
external_vue_default.a.component('NImg', nuxt_img);
external_vue_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);
  if (false) {}
  inject('img', $img);
});
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(145);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./modules/core/integrationPlugin/context.ts
/* eslint-disable no-param-reassign */
/**
 * It extends given integartion, defined by `tag` in the context.
 */
const createExtendIntegrationInCtx = ({
  tag,
  nuxtCtx,
  inject
}) => integrationProperties => {
  const integrationKey = `$${tag}`;
  if (!nuxtCtx.$vsf || !nuxtCtx.$vsf[integrationKey]) {
    inject('vsf', {
      [integrationKey]: {}
    });
  }
  Object.keys(integrationProperties).filter(k => !['api', 'client', 'config'].includes(k)).forEach(key => {
    nuxtCtx.$vsf[integrationKey][key] = integrationProperties[key];
  });
};
/**
 * It creates a function that adds an integration to the context under the given name, defined by `tag`.
 */
const createAddIntegrationToCtx = ({
  tag,
  nuxtCtx,
  inject
}) => integrationProperties => {
  const integrationKey = `$${tag}`;
  if (nuxtCtx.$vsf && !nuxtCtx.$vsf[integrationKey]) {
    nuxtCtx.$vsf[integrationKey] = integrationProperties;
    return;
  }
  inject('vsf', {
    [integrationKey]: integrationProperties
  });
};
// EXTERNAL MODULE: ./node_modules/lodash-es/merge.js + 32 modules
var merge = __webpack_require__(278);

// EXTERNAL MODULE: ./helpers/logger/index.ts + 2 modules
var logger = __webpack_require__(1);

// CONCATENATED MODULE: ./modules/core/integrationPlugin/_proxyUtils.ts


const createProxiedApi = ({
  givenApi,
  client,
  tag,
  nuxtCtx
}) => new Proxy(givenApi, {
  get: (target, prop, receiver) => {
    const functionName = String(prop);
    if (Reflect.has(target, functionName)) {
      return Reflect.get(target, prop, receiver);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    return async (...args) => client.post(`/${tag}/${functionName}`, args).then(r => r.data).catch(err => {
      logger["a" /* Logger */].debug(err);
      nuxtCtx.error({
        statusCode: err.statusCode,
        message: err
      });
      return {};
    });
  }
});
const getCookies = context => {
  var _a, _b, _c;
  return (_c = (_b = (_a = context === null || context === void 0 ? void 0 : context.req) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.cookie) !== null && _c !== void 0 ? _c : '';
};
const getIntegrationConfig = (context, configuration) => {
  const cookie = getCookies(context);
  return Object(merge["a" /* default */])({
    axios: {
      headers: {
        ...(cookie ? {
          cookie
        } : {})
      },
      withCredentials: true
    }
  }, configuration);
};
// CONCATENATED MODULE: ./modules/core/integrationPlugin/index.ts



const parseCookies = cookieString => Object.fromEntries(cookieString.split(';')
// eslint-disable-next-line unicorn/no-array-callback-reference
.filter(String).map(item => item.split('=').map(part => part.trim())).map(([name, value]) => [name, value]));
const setCookieValues = (cookieValues, cookieString = '') => {
  const parsed = parseCookies(cookieString);
  // eslint-disable-next-line no-return-assign
  Object.entries(cookieValues).forEach(([name, value]) => parsed[name] = value);
  return Object.entries(parsed).map(([name, value]) => `${name}=${value}`).join('; ');
};
const integrationPlugin = pluginFn => (nuxtCtx, inject) => {
  const configure = (tag, configuration) => {
    const injectInContext = createAddIntegrationToCtx({
      tag,
      nuxtCtx,
      inject
    });
    const config = getIntegrationConfig(nuxtCtx, configuration);
    const {
      middlewareUrl,
      ssrMiddlewareUrl
    } = nuxtCtx.$config;
    if (middlewareUrl || ssrMiddlewareUrl) {
      config.axios.baseURL =  true ? ssrMiddlewareUrl || middlewareUrl : undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const client = axios_default.a.create(config.axios);
    const api = createProxiedApi({
      givenApi: configuration.api || {},
      client,
      tag,
      nuxtCtx
    });
    if (nuxtCtx.app.i18n.cookieValues) {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      client.defaults.headers.cookie = setCookieValues(nuxtCtx.app.i18n.cookieValues, client.defaults.headers.cookie);
    }
    injectInContext({
      api,
      client,
      config
    });
  };
  const extend = (tag, integrationProperties) => {
    createExtendIntegrationInCtx({
      tag,
      nuxtCtx,
      inject
    })(integrationProperties);
  };
  const integration = {
    configure,
    extend
  };
  pluginFn({
    ...nuxtCtx,
    integration
  }, inject);
};
// CONCATENATED MODULE: ./modules/core/defaultConfig.ts
const defaultConfig = {
  cookies: {
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale',
    cartCookieName: 'vsf-cart',
    customerCookieName: 'vsf-customer',
    storeCookieName: 'vsf-store',
    messageCookieName: 'vsf-message'
  },
  locale: undefined,
  country: undefined,
  currency: undefined
};
// CONCATENATED MODULE: ./modules/core/helpers/getLocaleSettings.ts

const getLocaleSettings = (app, moduleOptions, additionalProperties) => {
  const localeSettings = moduleOptions.cookies ? {
    currency: additionalProperties.state.getCurrency(),
    locale: additionalProperties.state.getLocale(),
    country: additionalProperties.state.getCountry()
  } : {};
  return {
    currency: localeSettings.currency || moduleOptions.currency || defaultConfig.currency || undefined,
    locale: app.i18n.locale || localeSettings.locale || moduleOptions.locale || defaultConfig.locale || undefined,
    country: localeSettings.country || moduleOptions.country || defaultConfig.country || undefined
  };
};
// CONCATENATED MODULE: ./modules/core/helpers/mapConfigToSetupObject.ts


const mapConfigToSetupObject = ({
  app,
  moduleOptions,
  additionalProperties = {}
}) => ({
  ...defaultConfig,
  ...moduleOptions,
  ...additionalProperties,
  ...getLocaleSettings(app, moduleOptions, additionalProperties)
});
// CONCATENATED MODULE: ./.nuxt/core.plugin.557c1e53.ts



const core_plugin_557c1e53_moduleOptions = JSON.parse('{"cookies":{"currencyCookieName":"vsf-currency","countryCookieName":"vsf-country","localeCookieName":"vsf-locale","cartCookieName":"vsf-cart","customerCookieName":"vsf-customer","storeCookieName":"vsf-store","messageCookieName":"vsf-message"},"cookiesDefaultOpts":{"httpOnly":false,"secure":false,"sameSite":"lax","path":"/"},"externalCheckout":{"enable":false,"cmsUrl":"https://magento-1150741-4004803.cloudwaysapps.com","syncUrlPath":"/vue/cart/sync","stores":{"default":false}},"defaultStore":"default","magentoBaseUrl":"https://magento-1150741-4004803.cloudwaysapps.com","imageProvider":"ipx","magentoApiEndpoint":"https://magento-1150741-4004803.cloudwaysapps.com/graphql","customApolloHttpLinkOptions":{"useGETForQueries":true},"customer":{"customer_create_account_confirm":true}}');
/* harmony default export */ var core_plugin_557c1e53 = (integrationPlugin(plugin => {
  const getCookieName = property => {
    var _a, _b;
    return (_b = (_a = core_plugin_557c1e53_moduleOptions.cookies) === null || _a === void 0 ? void 0 : _a[property]) !== null && _b !== void 0 ? _b : defaultConfig.cookies[property];
  };
  const cookieOpts = {
    [defaultConfig.cookies.currencyCookieName]: {
      ...core_plugin_557c1e53_moduleOptions.cookiesDefaultOpts
    },
    [defaultConfig.cookies.localeCookieName]: {
      ...core_plugin_557c1e53_moduleOptions.cookiesDefaultOpts
    },
    [defaultConfig.cookies.storeCookieName]: {
      ...core_plugin_557c1e53_moduleOptions.cookiesDefaultOpts
    },
    [defaultConfig.cookies.customerCookieName]: {
      ...core_plugin_557c1e53_moduleOptions.cookiesDefaultOpts
    },
    [defaultConfig.cookies.cartCookieName]: {
      ...core_plugin_557c1e53_moduleOptions.cookiesDefaultOpts
    },
    [defaultConfig.cookies.messageCookieName]: {
      ...core_plugin_557c1e53_moduleOptions.cookiesDefaultOpts
    }
  };
  const getCookieOpt = cookieName => {
    var _a;
    return (_a = cookieOpts[cookieName]) !== null && _a !== void 0 ? _a : {};
  };
  const cookieNames = {
    cart: getCookieName('cartCookieName'),
    customer: getCookieName('customerCookieName'),
    currency: getCookieName('currencyCookieName'),
    store: getCookieName('storeCookieName'),
    locale: getCookieName('localeCookieName'),
    country: getCookieName('countryCookieName'),
    message: getCookieName('messageCookieName')
  };
  const {
    $cookies
  } = plugin.app;
  const createCookieOperationsInstance = cookies => cookieName => ({
    get: opts => cookies.get(cookieName, opts),
    set: (value, opts) => cookies.set(cookieName, value, {
      ...getCookieOpt(cookieName),
      ...opts
    }),
    remove: opts => cookies.remove(cookieName, opts)
  });
  const createCookieOperations = createCookieOperationsInstance($cookies);
  // TODO Refactor to separate containers (state.cart.get() .set() .remove()) - this requires a breaking change in api-client types
  const {
    get: getCartId,
    set: setCartId,
    remove: removeCartId
  } = createCookieOperations(cookieNames.cart);
  const {
    get: getCustomerToken,
    set: setCustomerToken,
    remove: removeCustomerToken
  } = createCookieOperations(cookieNames.customer);
  const {
    get: getStore,
    set: setStore,
    remove: removeStore
  } = createCookieOperations(cookieNames.store);
  const {
    get: getCurrency,
    set: setCurrency,
    remove: removeCurrency
  } = createCookieOperations(cookieNames.currency);
  const {
    get: getLocale,
    set: setLocale,
    remove: removeLocale
  } = createCookieOperations(cookieNames.locale);
  const {
    get: getCountry,
    set: setCountry,
    remove: removeCountry
  } = createCookieOperations(cookieNames.country);
  const {
    get: getMessage,
    set: setMessage,
    remove: removeMessage
  } = createCookieOperations(cookieNames.message);
  const settings = mapConfigToSetupObject({
    moduleOptions: core_plugin_557c1e53_moduleOptions,
    app: plugin.app,
    additionalProperties: {
      state: {
        getCartId,
        setCartId,
        removeCartId,
        getCustomerToken,
        setCustomerToken,
        removeCustomerToken,
        getStore,
        setStore,
        removeStore,
        getCurrency,
        setCurrency,
        removeCurrency,
        getLocale,
        setLocale,
        removeLocale,
        getCountry,
        setCountry,
        removeCountry,
        getMessage,
        setMessage,
        removeMessage
      }
    }
  });
  plugin.integration.configure('magento', settings);
}));
// CONCATENATED MODULE: ./.nuxt/plugins.e2e-testing.a9f9485a.js

const e2eTestingPlugin = ctx => {
  external_vue_default.a.directive('e2e', {
    bind: (element, binding) => {
      const enabled = ctx.isDev || ctx.env.NUXT_ENV_E2E === true.toString();
      return enabled && element.setAttribute('data-e2e', binding.value);
    }
  });
};
/* harmony default export */ var plugins_e2e_testing_a9f9485a = (e2eTestingPlugin);
// CONCATENATED MODULE: ./.nuxt/device.plugin.js


// eslint-disable-next-line
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

// eslint-disable-next-line
const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4));
}

// eslint-disable-next-line
const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
// eslint-disable-next-line
const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

// eslint-disable-next-line
const REGEX_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;
function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4));
}
function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}
function isAndroid(a) {
  return /android/i.test(a);
}
function isWindows(a) {
  return /Windows/.test(a);
}
function isMacOS(a) {
  return /Mac OS X/.test(a);
}

// Following regular expressions are originated from bowser(https://github.com/lancedikson/bowser).
// Copyright 2015, Dustin Diaz (the "Original Author")
// https://github.com/lancedikson/bowser/blob/master/LICENSE
const browsers = [{
  name: 'Samsung',
  test: /SamsungBrowser/i
}, {
  name: 'Edge',
  test: /edg([ea]|ios|)\//i
}, {
  name: 'Firefox',
  test: /firefox|iceweasel|fxios/i
}, {
  name: 'Chrome',
  test: /chrome|crios|crmo/i
}, {
  name: 'Safari',
  test: /safari|applewebkit/i
}];
function getBrowserName(a) {
  for (let b of browsers) {
    if (b.test.test(a)) {
      return b.name;
    }
  }
  return null;
}
const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
const REFRESH_ON_RESIZE = true;
function extractDevices(ctx, userAgent = DEFAULT_USER_AGENT) {
  let mobile = null;
  let mobileOrTablet = null;
  let ios = null;
  let android = null;
  if (userAgent === 'Amazon CloudFront') {
    if (ctx.req.headers['cloudfront-is-mobile-viewer'] === 'true') {
      mobile = true;
      mobileOrTablet = true;
    }
    if (ctx.req.headers['cloudfront-is-tablet-viewer'] === 'true') {
      mobile = false;
      mobileOrTablet = true;
    }
  } else if (ctx.req && ctx.req.headers['cf-device-type']) {
    // Cloudflare
    switch (ctx.req.headers['cf-device-type']) {
      case 'mobile':
        mobile = true;
        mobileOrTablet = true;
        break;
      case 'tablet':
        mobile = false;
        mobileOrTablet = true;
        break;
      case 'desktop':
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }
  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === 'Safari';
  const isFirefox = browserName === 'Firefox';
  const isEdge = browserName === 'Edge';
  const isChrome = browserName === 'Chrome';
  const isSamsung = browserName === 'Samsung';
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    mobile,
    mobileOrTablet,
    ios,
    android,
    windows,
    macOS,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}
/* harmony default export */ var device_plugin = (async function (ctx, inject) {
  const makeFlags = () => {
    let userAgent = '';
    if (typeof ctx.req !== 'undefined') {
      userAgent = ctx.req.headers['user-agent'];
    } else if (typeof navigator !== 'undefined') {
      userAgent = navigator.userAgent;
    }
    const {
      mobile,
      mobileOrTablet,
      ios,
      android,
      windows,
      macOS,
      isSafari,
      isFirefox,
      isEdge,
      isChrome,
      isSamsung,
      isCrawler
    } = extractDevices(ctx, userAgent);
    return {
      userAgent,
      isMobile: mobile,
      isMobileOrTablet: mobileOrTablet,
      isTablet: !mobile && mobileOrTablet,
      isDesktop: !mobileOrTablet,
      isIos: ios,
      isAndroid: android,
      isWindows: windows,
      isMacOS: macOS,
      isDesktopOrTablet: !mobile,
      isSafari,
      isFirefox,
      isEdge,
      isChrome,
      isSamsung,
      isCrawler
    };
  };
  const flags = makeFlags(ctx);
  if (REFRESH_ON_RESIZE && typeof window !== 'undefined') {
    inject('device', external_vue_default.a.observable(flags));
    window.addEventListener('resize', () => {
      setTimeout(() => {
        const newFlags = makeFlags(ctx);
        for (let key in newFlags) {
          ctx.$device[key] = newFlags[key];
        }
      }, 50);
    });
  } else {
    inject('device', flags);
  }
});
// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }
  for (const key in from) {
    const value = from[key];
    if (Array.isArray(value)) {
      to[key] = to[key] || [];
      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        }
        // Add meta
        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};
      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}
function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(148);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.87f449.png",
    "120x120": "/_nuxt/icons/icon_120x120.87f449.png",
    "144x144": "/_nuxt/icons/icon_144x144.87f449.png",
    "152x152": "/_nuxt/icons/icon_152x152.87f449.png",
    "192x192": "/_nuxt/icons/icon_192x192.87f449.png",
    "384x384": "/_nuxt/icons/icon_384x384.87f449.png",
    "512x512": "/_nuxt/icons/icon_512x512.87f449.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.87f449.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.87f449.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.87f449.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.87f449.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.87f449.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.87f449.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.87f449.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.87f449.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.87f449.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.87f449.png"
  };
  const getIcon = size => icons[size + 'x' + size] || '';
  inject('icon', getIcon);
});
// EXTERNAL MODULE: ./modules/customer/stores/customer.ts
var customer = __webpack_require__(53);

// CONCATENATED MODULE: ./plugins/token-expired.ts

const hasGraphqlAuthorizationError = res => {
  var _a, _b;
  return (_b = (_a = res === null || res === void 0 ? void 0 : res.errors) === null || _a === void 0 ? void 0 : _a.some(error => {
    var _a;
    return ((_a = error === null || error === void 0 ? void 0 : error.extensions) === null || _a === void 0 ? void 0 : _a.category) === 'graphql-authorization';
  })) !== null && _b !== void 0 ? _b : false;
};
const token_expired_plugin = ({
  $pinia,
  app
}) => {
  const customerStore = Object(customer["a" /* useCustomerStore */])($pinia);
  if (app.$vsf.$magento.config.state.getCustomerToken()) {
    customerStore.setIsLoggedIn(true);
  }
  app.$vsf.$magento.client.interceptors.response.use(res => {
    if (!hasGraphqlAuthorizationError(res.data)) {
      return res;
    }
    customerStore.setIsLoggedIn(false);
    app.$vsf.$magento.config.state.removeCustomerToken();
    app.$vsf.$magento.config.state.removeCartId();
    app.$vsf.$magento.config.state.setMessage({
      id: Symbol(''),
      message: app.i18n.t('You are not authorized, please log in.'),
      type: 'warning',
      icon: null,
      persist: true,
      title: null
    });
    app.router.push(app.localePath('/'));
    return res;
  });
};
/* harmony default export */ var token_expired = (token_expired_plugin);
// CONCATENATED MODULE: ./plugins/i18n.ts
const findLocaleBasedOnMagentoStoreCode = (storeCode, locales) => locales.find(locale => (typeof locale === 'object' ? locale.code : locale) === storeCode);
const findCurrencyBasedOnMagentoStoreCode = (storeCode, locales) => {
  const match = locales.find(locale => typeof locale === 'object' && locale.code === storeCode);
  return match === null || match === void 0 ? void 0 : match.defaultCurrency;
};
/* harmony default export */ var plugins_i18n = (({
  app,
  route
}) => app.$vsf.$magento.client.interceptors.request.use(async request => {
  var _a;
  const {
    $vsf: {
      $magento: {
        config: {
          state
        }
      }
    },
    i18n
  } = app;
  const currentStoreCode = (_a = app.$vsf.$magento.config.state.getStore()) !== null && _a !== void 0 ? _a : route.path.split('/')[1]; // localhost:3000/default
  const shouldSetDefaultLocale = !currentStoreCode || !findLocaleBasedOnMagentoStoreCode(currentStoreCode, i18n.locales);
  if (shouldSetDefaultLocale) {
    await i18n.setLocale(i18n.defaultLocale);
  }
  const i18nCurrentLocaleCode = i18n.locale;
  const shouldLocaleBeRefreshed = i18nCurrentLocaleCode !== state.getLocale();
  if (shouldLocaleBeRefreshed) {
    const currency = findCurrencyBasedOnMagentoStoreCode(i18nCurrentLocaleCode, i18n.locales);
    state.setStore(i18nCurrentLocaleCode);
    state.setLocale(i18nCurrentLocaleCode);
    state.setCurrency(currency);
  }
  return request;
}));
// CONCATENATED MODULE: ./helpers/formatCurrency.ts
const formatCurrency = (value, locale, options) => {
  if (typeof value === 'string') {
    // eslint-disable-next-line no-param-reassign
    value = Number(value);
  }
  // eslint-disable-next-line no-param-reassign
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    ...options
  }).format(value);
};
/* harmony default export */ var helpers_formatCurrency = (formatCurrency);
// CONCATENATED MODULE: ./plugins/fcPlugin.ts

const fcPlugin_plugin = (context, inject) => {
  inject('fc', (value, locale, options = {}) => {
    var _a, _b, _c, _d;
    // eslint-disable-next-line no-param-reassign
    locale = (locale || ((_b = (_a = context.i18n) === null || _a === void 0 ? void 0 : _a.localeProperties) === null || _b === void 0 ? void 0 : _b.iso) || '').replace('_', '-');
    // eslint-disable-next-line no-param-reassign
    options = {
      currency: context.app.$vsf.$magento.config.state.getCurrency() || ((_d = (_c = context.i18n) === null || _c === void 0 ? void 0 : _c.localeProperties) === null || _d === void 0 ? void 0 : _d.defaultCurrency),
      ...options
    };
    return helpers_formatCurrency(value, locale, options);
  });
};
/* harmony default export */ var fcPlugin = (fcPlugin_plugin);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length,
    result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
/* harmony default export */ var _arrayMap = (arrayMap);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol["a" /* default */] ? _Symbol["a" /* default */].prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(isArray["a" /* default */])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (Object(isSymbol["a" /* default */])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/* harmony default export */ var _baseToString = (baseToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/toString.js


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}
/* harmony default export */ var lodash_es_toString = (toString_toString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_basePropertyOf.js
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}
/* harmony default export */ var _basePropertyOf = (basePropertyOf);
// CONCATENATED MODULE: ./node_modules/lodash-es/_unescapeHtmlChar.js


/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
};

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = _basePropertyOf(htmlUnescapes);
/* harmony default export */ var _unescapeHtmlChar = (unescapeHtmlChar);
// CONCATENATED MODULE: ./node_modules/lodash-es/unescape.js



/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
  reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape_unescape(string) {
  string = lodash_es_toString(string);
  return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, _unescapeHtmlChar) : string;
}
/* harmony default export */ var lodash_es_unescape = (unescape_unescape);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(149);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);

// CONCATENATED MODULE: ./plugins/dompurify.ts


const dompurify_plugin = (_, inject) => {
  inject('dompurify', html => lodash_es_unescape(external_isomorphic_dompurify_default.a.sanitize(html)));
};
/* harmony default export */ var dompurify = (dompurify_plugin);
// CONCATENATED MODULE: ./plugins/query/StoreConfig.gql.ts
/** GraphQL Query that fetches store configuration from the API */
const StoreConfigQuery = `
  query storeConfig {
    storeConfig {
        store_code,
        default_title,
        store_name,
        default_display_currency_code,
        locale,
        header_logo_src,
        logo_width,
        logo_height,
        logo_alt
    }
  }
`;
/* harmony default export */ var StoreConfig_gql = (StoreConfigQuery);
// CONCATENATED MODULE: ./plugins/storeConfigPlugin.ts


const storeConfigPlugin = async ({
  $pinia,
  app
}) => {
  const {
    data
  } = await app.$vsf.$magento.api.customQuery({
    query: StoreConfig_gql
  });
  $pinia.use(({
    store
  }) => {
    var _a;
    if (store.$id !== 'magentoConfig') return;
    const storeConfig = Object(runtime["l" /* ref */])((_a = data === null || data === void 0 ? void 0 : data.storeConfig) !== null && _a !== void 0 ? _a : {});
    // eslint-disable-next-line no-prototype-builtins
    if (!store.$state.hasOwnProperty('storeConfig')) {
      Object(runtime["m" /* set */])(store.$state, 'storeConfig', storeConfig);
    } else {
      // eslint-disable-next-line no-param-reassign
      store.$state.storeConfig = storeConfig;
    }
  });
};
/* harmony default export */ var plugins_storeConfigPlugin = (storeConfigPlugin);
// CONCATENATED MODULE: ./.nuxt/composition-api/meta.mjs

/* harmony default export */ var composition_api_meta = (runtime["n" /* setMetaPlugin */]);
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: .\\composition-api\\plugin.mjs (mode: 'all')
 // Source: .\\nuxt.plugin.0d717043.js (mode: 'server')
 // Source: .\\vue-scrollto.js (mode: 'client')
 // Source: .\\cookie-universal-nuxt.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.seo.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
 // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
 // Source: .\\dist.plugin.2af28716.mjs (mode: 'all')
 // Source: .\\image.js (mode: 'all')
 // Source: .\\core.plugin.557c1e53.ts (mode: 'all')
 // Source: .\\plugins.e2e-testing.a9f9485a.js (mode: 'all')
 // Source: .\\device.plugin.js (mode: 'all')
 // Source: .\\workbox.js (mode: 'client')
 // Source: .\\pwa\\meta.plugin.js (mode: 'all')
 // Source: .\\pwa\\icon.plugin.js (mode: 'all')
 // Source: ..\\plugins\\token-expired (mode: 'all')
 // Source: ..\\plugins\\i18n (mode: 'all')
 // Source: ..\\plugins\\fcPlugin (mode: 'all')
 // Source: ..\\plugins\\dompurify (mode: 'all')
 // Source: ..\\plugins\\storeConfigPlugin (mode: 'all')
 // Source: .\\composition-api\\meta.mjs (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "@vue-storefront\u002Fmagento-theme",
      "meta": [{
        "charset": "utf8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Magento2 Integration for Vue Storefront 2"
      }, {
        "name": "generator",
        "content": "Vue Storefront 2"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof composition_api_plugin === 'function') {
    await composition_api_plugin(app.context, inject);
  }
  if ( true && typeof nuxt_plugin_0d717043 === 'function') {
    await nuxt_plugin_0d717043(app.context, inject);
  }
  if (false) {}
  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.seo.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.seo.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }
  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }
  if (typeof PiniaNuxtPlugin === 'function') {
    await PiniaNuxtPlugin(app.context, inject);
  }
  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  }
  if (typeof core_plugin_557c1e53 === 'function') {
    await core_plugin_557c1e53(app.context, inject);
  }
  if (typeof plugins_e2e_testing_a9f9485a === 'function') {
    await plugins_e2e_testing_a9f9485a(app.context, inject);
  }
  if (typeof device_plugin === 'function') {
    await device_plugin(app.context, inject);
  }
  if (false) {}
  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }
  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }
  if (typeof token_expired === 'function') {
    await token_expired(app.context, inject);
  }
  if (typeof plugins_i18n === 'function') {
    await plugins_i18n(app.context, inject);
  }
  if (typeof fcPlugin === 'function') {
    await fcPlugin(app.context, inject);
  }
  if (typeof dompurify === 'function') {
    await dompurify(app.context, inject);
  }
  if (typeof plugins_storeConfigPlugin === 'function') {
    await plugins_storeConfigPlugin(app.context, inject);
  }
  if (typeof composition_api_meta === 'function') {
    await composition_api_meta(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: false
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=d8f0a870&functional=true&
var render = function (_h,_vm) {var _c=_vm._c;return _c('span',_vm._g(_vm._b({class:[_vm.data.class, _vm.data.staticClass, 'sf-badge'],style:([_vm.data.style, _vm.data.staticStyle])},'span',_vm.data.attrs,false),_vm.listeners),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=template&id=d8f0a870&functional=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBadgevue_type_script_lang_js_ = ({
  name: "SfBadge"
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBadge_SfBadgevue_type_script_lang_js_ = (SfBadgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfBadge/SfBadge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBadge_SfBadgevue_type_script_lang_js_,
  render,
  staticRenderFns,
  true,
  injectStyles,
  null,
  "15e5a529"
  
)

/* harmony default export */ var SfBadge = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = require("@vue-storefront/cache");

/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = require("omit-deep");

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = require("deepdash/findDeep");

/***/ }),
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return focus; });
const focus = {
  bind(el) {
    el._mouseHandler = function () {
      el.style.outline = "none";
    };
    el._keyHandler = function (e) {
      el.style.outline = "";
      if (e.code === "Tab") el.focus();
    };
    window.addEventListener("mousedown", el._mouseHandler);
    el.addEventListener("keyup", el._keyHandler);
  },
  unbind(el) {
    window.removeEventListener("mousedown", el._mouseHandler);
    el.removeEventListener("keyup", el._keyHandler);
  },
};


/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clickOutside; });
const clickOutside = {
  bind(el, binding) {
    binding.name = "click-outside";
    const closeHandler = binding.value;
    el._outsideClickHandler = function (event) {
      if (!el.contains(event.target)) {
        event.stopPropagation();
        closeHandler(event);
      }
    };
    document.addEventListener("mousedown", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },
  unbind(el) {
    document.removeEventListener("mousedown", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
    el._outsideClickHandler = null;
  },
};


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isClient; });
const isClient = (() =>
  typeof window !== "undefined" || typeof document !== "undefined")();


/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return willChange; });
const willChange = {
  bind(el, binding) {
    binding.name = "will-change";
    el._willChangeActive = function () {
      const label = el.getElementsByClassName("will-change");
      label[0].style.willChange = binding.value;
    };
    el._willChangeAuto = function () {
      const label = el.getElementsByClassName("will-change");
      label[0].style.willChange = "auto";
    };
    el.addEventListener("mouseenter", el._willChangeActive);
    el.addEventListener("transitionend", el._willChangeAuto);
  },
  unbind(el) {
    el.removeEventListener("mouseenter", el._willChangeActive);
    el.removeEventListener("transitionend", el._willChangeAuto);
  },
};


/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/lodash-es/_defineProperty.js

var defineProperty = function () {
  try {
    var func = Object(_getNative["a" /* default */])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/* harmony default export */ var _defineProperty = (defineProperty);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseAssignValue.js


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/* harmony default export */ var _baseAssignValue = (baseAssignValue);
// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/lodash-es/_assignMergeValue.js



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !Object(eq["a" /* default */])(object[key], value) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}
/* harmony default export */ var _assignMergeValue = (assignMergeValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
      iterable = Object(object),
      props = keysFunc(object),
      length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
/* harmony default export */ var _createBaseFor = (createBaseFor);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();
/* harmony default export */ var _baseFor = (baseFor);
// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Uint8Array.js
var _Uint8Array = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array["a" /* default */](result).set(new _Uint8Array["a" /* default */](arrayBuffer));
  return result;
}
/* harmony default export */ var _cloneArrayBuffer = (cloneArrayBuffer);
// CONCATENATED MODULE: ./node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/* harmony default export */ var _cloneTypedArray = (cloneTypedArray);
// CONCATENATED MODULE: ./node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
/* harmony default export */ var _copyArray = (copyArray);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!Object(isObject["a" /* default */])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/* harmony default export */ var _baseCreate = (baseCreate);
// EXTERNAL MODULE: ./node_modules/lodash-es/_overArg.js
var _overArg = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = Object(_overArg["a" /* default */])(Object.getPrototypeOf, Object);
/* harmony default export */ var _getPrototype = (getPrototype);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !Object(_isPrototype["a" /* default */])(object) ? _baseCreate(_getPrototype(object)) : {};
}
/* harmony default export */ var _initCloneObject = (initCloneObject);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return Object(isObjectLike["a" /* default */])(value) && Object(isArrayLike["a" /* default */])(value);
}
/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js
var isBuffer = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(isObjectLike["a" /* default */])(value) || Object(_baseGetTag["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 2 modules
var isTypedArray = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/lodash-es/_safeGet.js
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}
/* harmony default export */ var _safeGet = (safeGet);
// CONCATENATED MODULE: ./node_modules/lodash-es/_assignValue.js



/** Used for built-in method references. */
var _assignValue_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _assignValue_hasOwnProperty = _assignValue_objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(_assignValue_hasOwnProperty.call(object, key) && Object(eq["a" /* default */])(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}
/* harmony default export */ var _assignValue = (assignValue);
// CONCATENATED MODULE: ./node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}
/* harmony default export */ var _copyObject = (copyObject);
// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js + 1 modules
var _arrayLikeKeys = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(isObject["a" /* default */])(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = Object(_isPrototype["a" /* default */])(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ var _baseKeysIn = (baseKeysIn);
// CONCATENATED MODULE: ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return Object(isArrayLike["a" /* default */])(object) ? Object(_arrayLikeKeys["a" /* default */])(object, true) : _baseKeysIn(object);
}
/* harmony default export */ var lodash_es_keysIn = (keysIn);
// CONCATENATED MODULE: ./node_modules/lodash-es/toPlainObject.js



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, lodash_es_keysIn(value));
}
/* harmony default export */ var lodash_es_toPlainObject = (toPlainObject);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMergeDeep.js
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
    srcValue = _safeGet(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = Object(isArray["a" /* default */])(srcValue),
      isBuff = !isArr && Object(isBuffer["a" /* default */])(srcValue),
      isTyped = !isArr && !isBuff && Object(isTypedArray["a" /* default */])(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Object(isArray["a" /* default */])(objValue)) {
        newValue = objValue;
      } else if (lodash_es_isArrayLikeObject(objValue)) {
        newValue = _copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = Object(_cloneBuffer["a" /* default */])(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (lodash_es_isPlainObject(srcValue) || Object(isArguments["a" /* default */])(srcValue)) {
      newValue = objValue;
      if (Object(isArguments["a" /* default */])(objValue)) {
        newValue = lodash_es_toPlainObject(objValue);
      } else if (!Object(isObject["a" /* default */])(objValue) || Object(isFunction["a" /* default */])(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}
/* harmony default export */ var _baseMergeDeep = (baseMergeDeep);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseMerge.js








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function (srcValue, key) {
    stack || (stack = new _Stack["a" /* default */]());
    if (Object(isObject["a" /* default */])(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(_safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, lodash_es_keysIn);
}
/* harmony default export */ var _baseMerge = (baseMerge);
// CONCATENATED MODULE: ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
/* harmony default export */ var lodash_es_identity = (identity);
// CONCATENATED MODULE: ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
/* harmony default export */ var _apply = (apply);
// CONCATENATED MODULE: ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
      index = -1,
      length = nativeMax(args.length - start, 0),
      array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}
/* harmony default export */ var _overRest = (overRest);
// CONCATENATED MODULE: ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}
/* harmony default export */ var lodash_es_constant = (constant);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? lodash_es_identity : function (func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};
/* harmony default export */ var _baseSetToString = (baseSetToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
  HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
    lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
      remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}
/* harmony default export */ var _shortOut = (shortOut);
// CONCATENATED MODULE: ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);
/* harmony default export */ var _setToString = (setToString);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}
/* harmony default export */ var _baseRest = (baseRest);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!Object(isObject["a" /* default */])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? Object(isArrayLike["a" /* default */])(object) && Object(_isIndex["a" /* default */])(index, object.length) : type == 'string' && index in object) {
    return Object(eq["a" /* default */])(object[index], value);
  }
  return false;
}
/* harmony default export */ var _isIterateeCall = (isIterateeCall);
// CONCATENATED MODULE: ./node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : undefined,
      guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
/* harmony default export */ var _createAssigner = (createAssigner);
// CONCATENATED MODULE: ./node_modules/lodash-es/merge.js



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function (object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});
/* harmony default export */ var lodash_es_merge = __webpack_exports__["a"] = (merge);

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return _root["a" /* default */].Date.now();
};
/* harmony default export */ var lodash_es_now = (now);
// CONCATENATED MODULE: ./node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
/* harmony default export */ var _trimmedEndIndex = (trimmedEndIndex);
// CONCATENATED MODULE: ./node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
/* harmony default export */ var _baseTrim = (baseTrim);
// EXTERNAL MODULE: ./node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(isSymbol["a" /* default */])(value)) {
    return NAN;
  }
  if (Object(isObject["a" /* default */])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(isObject["a" /* default */])(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/* harmony default export */ var lodash_es_toNumber = (toNumber);
// CONCATENATED MODULE: ./node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if (Object(isObject["a" /* default */])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }
  function debounced() {
    var time = lodash_es_now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/* harmony default export */ var lodash_es_debounce = __webpack_exports__["a"] = (debounce);

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ focusTrap; });

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap.js
const focusableElements = [
  "a[href]",
  "button:not([disabled])",
  "button:not([hidden])",
  "[tabindex]:not([disabled])",
  "input:not([disabled])",
  "select",
  "textarea",
];

const isHidden = (selector) => selector.offsetParent === null;

const getFocusableChildren = (el) => {
  return (
    Array.from(el.querySelectorAll(focusableElements)).filter(
      (selector) => !isHidden(selector)
    ) || []
  );
};

const isFocusable = (e, focusableChildrenElements) =>
  Array.from(focusableChildrenElements).some((el) => el === e.target);

const moveFocus = (e, focusableChildrenElements) => {
  if (!focusableChildrenElements.length || e.key !== "Tab") return;

  if (!isFocusable(e, focusableChildrenElements)) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  }

  if (focusableChildrenElements.length === 1) {
    e.preventDefault();
    return;
  }

  const lastElementIndex = focusableChildrenElements.length - 1;
  const isLastElement =
    e.target === focusableChildrenElements[lastElementIndex];
  const isFirstElement = e.target === focusableChildrenElements[0];
  const isGoingForward = e.shiftKey === false;

  if (isGoingForward && isLastElement) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  } else if (!isGoingForward && isFirstElement) {
    e.preventDefault();
    focusableChildrenElements[lastElementIndex].focus();
  }
};

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus-trap/focus-trap-directive.js



const focusTrap = {
  bind(el) {
    external_vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
    el._keyHandler = function (e) {
      if (e.key === "Tab") {
        if (!isFocusable(e, el._focusableChildrenElements)) {
          el._lastFocusedElement = e.target;
        }
      }
      moveFocus(e, el._focusableChildrenElements);
    };
    document.addEventListener("keydown", el._keyHandler);
  },
  componentUpdated(el) {
    external_vue_default.a.nextTick(() => {
      el._focusableChildrenElements = getFocusableChildren(el);
    });
  },
  unbind(el) {
    if (el._lastFocusedElement) el._lastFocusedElement.focus();
    document.removeEventListener("keydown", el._keyHandler);
  },
};


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map