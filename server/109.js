exports.ids = [109];
exports.modules = {

/***/ 470:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchBar_vue_vue_type_style_index_0_id_d3ca465c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(470);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchBar_vue_vue_type_style_index_0_id_d3ca465c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchBar_vue_vue_type_style_index_0_id_d3ca465c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchBar_vue_vue_type_style_index_0_id_d3ca465c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_SearchBar_vue_vue_type_style_index_0_id_d3ca465c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Header/SearchBar/SearchBar.vue?vue&type=template&id=d3ca465c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfSearchBar',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeSearch),expression:"closeSearch"}],staticClass:"sf-header__search",attrs:{"placeholder":_vm.$t('Search for items'),"aria-label":"Search","value":_vm.term},on:{"input":function($event){return _vm.debouncedHandleSearch($event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.handleKeydownEnter($event.target.value) /* https://github.com/vuestorefront/storefront-ui/issues/2453#issuecomment-1160231619 */},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hideSearch.apply(null, arguments)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeSearch.apply(null, arguments)}],"focus":_vm.showSearch,"click":_vm.showSearch},scopedSlots:_vm._u([{key:"icon",fn:function(){return [(!!_vm.term)?_c('SfButton',{staticClass:"sf-search-bar__button sf-button--pure",attrs:{"aria-label":"Close search"},on:{"click":_vm.closeSearch}},[_c('span',{staticClass:"sf-search-bar__icon"},[_c('SvgImage',{attrs:{"icon":"cross","label":_vm.$t('Cancel'),"width":"18","height":"18"}})],1)]):_c('SfButton',{staticClass:"sf-search-bar__button sf-button--pure",attrs:{"aria-label":"Open search"},on:{"click":_vm.toggleSearch,"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.hideSearch.apply(null, arguments)}}},[_c('span',{staticClass:"sf-search-bar__icon"},[_c('SvgImage',{attrs:{"icon":"search","label":_vm.$t('Search'),"width":"18","height":"18"}})],1)])]},proxy:true}])})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header/SearchBar/SearchBar.vue?vue&type=template&id=d3ca465c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfSearchBar/SfSearchBar.vue + 4 modules
var SfSearchBar = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/lodash-es/debounce.js + 4 modules
var debounce = __webpack_require__(279);

// CONCATENATED MODULE: ./components/directives/click-outside/click-outside-directive.ts
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const clickOutside = {
  bind(el, binding) {
    const closeHandler = binding.value;
    el._outsideClickHandler = event => {
      if (!el.contains(event.target)) {
        event.stopPropagation();
        closeHandler(event, el);
      }
    };
    document.addEventListener('mousedown', el._outsideClickHandler);
    document.addEventListener('touchstart', el._outsideClickHandler);
  },
  unbind(el) {
    document.removeEventListener('mousedown', el._outsideClickHandler);
    document.removeEventListener('touchstart', el._outsideClickHandler);
    el._outsideClickHandler = null;
  }
};
// EXTERNAL MODULE: ./components/General/SvgImage.vue + 4 modules
var SvgImage = __webpack_require__(29);

// EXTERNAL MODULE: ./modules/catalog/product/composables/useProduct/index.ts + 3 modules
var useProduct = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/Header/SearchBar/SearchBar.vue?vue&type=script&lang=ts&






/* harmony default export */ var SearchBarvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'SearchBar',
  components: {
    SfSearchBar: SfSearchBar["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SvgImage: SvgImage["a" /* default */]
  },
  directives: {
    clickOutside: clickOutside
  },
  props: {
    isSearchOpen: {
      type: Boolean,
      default: false
    },
    itemsPerPage: {
      type: Number,
      default: 12
    },
    minTermLen: {
      type: Number,
      default: 3
    }
  },
  emits: ['set-is-open', 'set-search-results'],
  setup(props, {
    emit
  }) {
    const term = Object(runtime["l" /* ref */])('');
    const route = Object(runtime["u" /* useRoute */])();
    const {
      getProductList
    } = Object(useProduct["a" /* useProduct */])();
    const showSearch = () => {
      if (!props.isSearchOpen) {
        emit('set-is-open', true);
        if (document) {
          document.body.classList.add('no-scroll');
        }
      }
    };
    const hideSearch = () => {
      if (props.isSearchOpen) {
        emit('set-is-open', false);
        emit('set-search-results', null);
        if (document) {
          document.body.classList.remove('no-scroll');
        }
      }
    };
    const toggleSearch = () => {
      if (props.isSearchOpen) {
        hideSearch();
      } else {
        showSearch();
      }
    };
    const closeSearch = event => {
      if (document) {
        const searchResultsEl = document.querySelector('.search');
        const closeTriggerElement = event.target;
        if (!(searchResultsEl === null || searchResultsEl === void 0 ? void 0 : searchResultsEl.contains(closeTriggerElement))) {
          hideSearch();
          term.value = '';
        }
      } else {
        hideSearch();
        term.value = '';
      }
    };
    const rawHandleSearch = async searchTerm => {
      term.value = searchTerm;
      if (term.value.length < props.minTermLen) return;
      // M2-579
      const productList = await getProductList({
        pageSize: props.itemsPerPage,
        search: term.value
      });
      emit('set-search-results', productList.items);
    };
    const debouncedHandleSearch = Object(debounce["a" /* default */])(rawHandleSearch, 1000);
    const handleKeydownEnter = searchTerm => {
      // cancel debounce timeout started by typing into the searchbar - this is to avoid making two network requests instead of one
      debouncedHandleSearch.cancel();
      rawHandleSearch(searchTerm);
    };
    Object(runtime["w" /* watch */])(route, () => {
      hideSearch();
      term.value = '';
    });
    return {
      closeSearch,
      showSearch,
      hideSearch,
      toggleSearch,
      rawHandleSearch,
      debouncedHandleSearch,
      handleKeydownEnter,
      term
    };
  }
}));
// CONCATENATED MODULE: ./components/Header/SearchBar/SearchBar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var SearchBar_SearchBarvue_type_script_lang_ts_ = (SearchBarvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Header/SearchBar/SearchBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(553)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SearchBar_SearchBarvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d3ca465c",
  "68781b8e"
  
)

/* harmony default export */ var SearchBar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=109.js.map