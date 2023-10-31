exports.ids = [108];
exports.modules = {

/***/ 281:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_id_57b3f483_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_id_57b3f483_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_id_57b3f483_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_id_57b3f483_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfScrollable_vue_vue_type_style_index_0_id_57b3f483_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=57b3f483&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-scrollable",class:{ 'is-open': !_vm.isHidden }},[_vm._ssrNode("<div class=\"sf-scrollable__content\""+(_vm._ssrStyle(null,_vm.style, null))+">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("view-all",function(){return [_c('SfButton',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasScroll),expression:"hasScroll"}],staticClass:"sf-button--text sf-scrollable__view-all",on:{"click":function($event){_vm.isHidden = !_vm.isHidden}}},[(_vm.isHidden)?_c('span',[_vm._v(_vm._s(_vm.showText))]):_c('span',[_vm._v(_vm._s(_vm.hideText))])])]},null,{ hasScroll: _vm.hasScroll, showText: _vm.showText, hideText: _vm.hideText })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=template&id=57b3f483&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfScrollablevue_type_script_lang_js_ = ({
  name: "SfScrollable",
  components: {
    SfButton: SfButton["a" /* default */]
  },
  props: {
    maxContentHeight: {
      type: String,
      default: ""
    },
    showText: {
      type: String,
      default: "Show"
    },
    hideText: {
      type: String,
      default: "Hide"
    }
  },
  data() {
    return {
      isHidden: true,
      hasScroll: false
    };
  },
  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim() ? this.maxContentHeight : undefined
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfScrollable_SfScrollablevue_type_script_lang_js_ = (SfScrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(287)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfScrollable_SfScrollablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "172a142c"
  
)

/* harmony default export */ var SfScrollable = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./modules/catalog/category/components/filters/renderer/CheckboxType.vue?vue&type=template&id=17b96c04&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfHeading',{key:("filter-title-" + (_vm.filter.attribute_code)),staticClass:"filters__title sf-heading--left",attrs:{"level":4,"title":_vm.filter.label}}),_vm._ssrNode(" "),_c(_vm.filter.options.length > 4 ? 'SfScrollable' : 'div',{tag:"component",attrs:{"max-content-height":"6.875rem","show-text":_vm.$t('Show more'),"hide-text":_vm.$t('Show less')}},_vm._l((_vm.filter.options),function(option){return _c('SfCheckbox',{key:((_vm.filter.attribute_code) + "-" + (option.value)),staticClass:"filters__item",attrs:{"label":option.label,"selected":Boolean(_vm.selected(_vm.filter.attribute_code, option.value)),"data-testid":"category-filter"},on:{"change":function($event){return _vm.$emit('selectFilter', option)}},scopedSlots:_vm._u([{key:"label",fn:function(ref){
var label = ref.label;
return [_c('span',{staticClass:"sf-checkbox__label",class:{ 'display-none': !label },domProps:{"innerHTML":_vm._s(_vm.$dompurify(label))}})]}}],null,true)})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/catalog/category/components/filters/renderer/CheckboxType.vue?vue&type=template&id=17b96c04&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCheckbox/SfCheckbox.vue + 4 modules
var SfCheckbox = __webpack_require__(345);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfScrollable/SfScrollable.vue + 4 modules
var SfScrollable = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./modules/catalog/category/components/filters/renderer/CheckboxType.vue?vue&type=script&lang=ts&


/* harmony default export */ var CheckboxTypevue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  components: {
    SfCheckbox: SfCheckbox["a" /* default */],
    SfScrollable: SfScrollable["a" /* default */],
    SfHeading: SfHeading["a" /* default */]
  },
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      isFilterSelected
    } = Object(runtime["d" /* inject */])('UseFiltersProvider');
    const selected = Object(runtime["a" /* computed */])(() => (id, optVal) => isFilterSelected(id, optVal));
    return {
      selected
    };
  }
}));
// CONCATENATED MODULE: ./modules/catalog/category/components/filters/renderer/CheckboxType.vue?vue&type=script&lang=ts&
 /* harmony default export */ var renderer_CheckboxTypevue_type_script_lang_ts_ = (CheckboxTypevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./modules/catalog/category/components/filters/renderer/CheckboxType.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  renderer_CheckboxTypevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "072ec47d"
  
)

/* harmony default export */ var CheckboxType = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=108.js.map