exports.ids = [99];
exports.modules = {

/***/ 373:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBasePath; });
/* harmony import */ var _nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Adds prefix with base path configured in router.base to provided url
 * @param {string} path - url to which base path will be added
 * @returns Relative path prefixed with router.base or not modified absolute path (it needs start from http or https)
 */
const addBasePath = path => {
  const pattern = /^((http|https):\/\/)/;
  if (pattern.test(path)) {
    return path;
  }
  const basePath = Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_0__[/* useRouter */ "v"])().options.base.slice(0, -1);
  return `${basePath}${path}`;
};

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_id_6962d423_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_id_6962d423_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_id_6962d423_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_id_6962d423_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfCallToAction_vue_vue_type_style_index_0_id_6962d423_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 435:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_ThankYou_vue_vue_type_style_index_0_id_7acc4212_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(435);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_ThankYou_vue_vue_type_style_index_0_id_7acc4212_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_ThankYou_vue_vue_type_style_index_0_id_7acc4212_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_ThankYou_vue_vue_type_style_index_0_id_7acc4212_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_ThankYou_vue_vue_type_style_index_0_id_7acc4212_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=template&id=6962d423&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sf-call-to-action",style:(_vm.style)},[_vm._ssrNode("<div class=\"sf-call-to-action__text-container\">","</div>",[_vm._t("title",function(){return [_c('h2',{staticClass:"sf-call-to-action__title",class:{ 'display-none': !_vm.title }},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])]},null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("description",function(){return [_c('p',{staticClass:"sf-call-to-action__description",class:{ 'display-none': !_vm.description }},[_vm._v("\n        "+_vm._s(_vm.description)+"\n      ")])]},null,{ description: _vm.description })],2),_vm._ssrNode(" "),_vm._t("button",function(){return [_c('SfButton',{staticClass:"sf-call-to-action__button",class:{ 'display-none': !_vm.buttonText },attrs:{"link":_vm.link,"data-testid":"cta-button"},on:{"click":function($event){return _vm.$emit('click')}}},[_vm._v("\n      "+_vm._s(_vm.buttonText)+"\n    ")])]},null,{ buttonText: _vm.buttonText })],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=template&id=6962d423&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfCallToActionvue_type_script_lang_js_ = ({
  name: "SfCallToAction",
  components: {
    SfButton: SfButton["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    image: {
      type: [String, Object],
      default: ""
    }
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_call-to-action-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_call-to-action-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_call-to-action-background-color": background
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfCallToAction_SfCallToActionvue_type_script_lang_js_ = (SfCallToActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(396)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfCallToAction_SfCallToActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d0a31aa8"
  
)

/* harmony default export */ var SfCallToAction = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./modules/checkout/pages/Checkout/ThankYou.vue?vue&type=template&id=7acc4212&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"thank-you"}},[_c('SfCallToAction',{directives:[{name:"e2e",rawName:"v-e2e",value:('thank-you-banner'),expression:"'thank-you-banner'"}],staticClass:"banner",attrs:{"title":_vm.$t('Thank you for your order!'),"image":{
      mobile: _vm.addBasePath('/thankyou/bannerM.png'),
      desktop: _vm.addBasePath('/thankyou/bannerD.png'),
    }},scopedSlots:_vm._u([{key:"description",fn:function(){return [_c('div',{staticClass:"banner__order-number"},[_c('span',[_vm._v(_vm._s(_vm.$t('Order No.')))]),_vm._v(" "),_c('strong',[_vm._v(_vm._s(_vm.orderNumber))])])]},proxy:true}])}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"section\" data-v-7acc4212>","</section>",[_vm._ssrNode("<div class=\"order\" data-v-7acc4212>","</div>",[_c('SfHeading',{staticClass:"order__heading heading sf-heading--left",attrs:{"title":_vm.$t('Your Purchase'),"level":3}}),_vm._ssrNode(" <p class=\"order__paragraph paragraph\" data-v-7acc4212>"+_vm._ssrEscape("\n        "+_vm._s(_vm.$t('Successful placed order'))+"\n      ")+"</p> "),_vm._ssrNode("<div class=\"order__contact\" data-v-7acc4212>","</div>",[_c('SfHeading',{staticClass:"heading sf-heading--left sf-heading--no-underline",attrs:{"level":6,"title":_vm.$t('Primary contacts for any questions')}}),_vm._ssrNode(" <div class=\"contact\" data-v-7acc4212><p class=\"contact__name\" data-v-7acc4212>"+_vm._ssrEscape("\n            "+_vm._s(_vm.companyDetails.name)+"\n          ")+"</p> <p class=\"contact__street\" data-v-7acc4212>"+_vm._ssrEscape("\n            "+_vm._s(_vm.companyDetails.street)+"\n          ")+"</p> <p class=\"contact__city\" data-v-7acc4212>"+_vm._ssrEscape("\n            "+_vm._s(_vm.companyDetails.city)+"\n          ")+"</p> <p class=\"contact__email\" data-v-7acc4212>"+_vm._ssrEscape("\n            "+_vm._s(_vm.companyDetails.email)+"\n          ")+"</p></div>")],2),_vm._ssrNode(" "),_c('SfButton',{staticClass:"order__notifications-button button-size"},[_vm._v("\n        "+_vm._s(_vm.$t('Allow order notifications'))+"\n      ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"additional-info\" data-v-7acc4212>","</div>",[_vm._ssrNode("<div data-v-7acc4212>","</div>",[_c('SfHeading',{staticClass:"heading sf-heading--left",attrs:{"title":_vm.$t('Your Account'),"level":3}}),_vm._ssrNode(" <p class=\"paragraph\" data-v-7acc4212>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('Info after order'))+"\n        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-7acc4212>","</div>",[_c('SfHeading',{staticClass:"heading sf-heading--left",attrs:{"title":_vm.$t('What can we improve'),"level":3}}),_vm._ssrNode(" <p class=\"paragraph\" data-v-7acc4212>"+_vm._ssrEscape("\n          "+_vm._s(_vm.$t('Feedback'))+"\n        ")+"</p> "),_c('SfButton',{staticClass:"feedback-button color-secondary sf-button--full-width button-size"},[_vm._v("\n          "+_vm._s(_vm.$t('Send my feedback'))+"\n        ")])],2)],2)],2),_vm._ssrNode(" "),_c('SfButton',{staticClass:"back-button color-secondary button-size"},[_vm._v("\n    "+_vm._s(_vm.$t('Go back to shop'))+"\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/checkout/pages/Checkout/ThankYou.vue?vue&type=template&id=7acc4212&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfHeading/SfHeading.vue + 4 modules
var SfHeading = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfCallToAction/SfCallToAction.vue + 4 modules
var SfCallToAction = __webpack_require__(587);

// EXTERNAL MODULE: ./helpers/addBasePath.ts
var addBasePath = __webpack_require__(395);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./modules/checkout/pages/Checkout/ThankYou.vue?vue&type=script&lang=ts&



/* harmony default export */ var ThankYouvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  components: {
    SfHeading: SfHeading["a" /* default */],
    SfButton: SfButton["a" /* default */],
    SfCallToAction: SfCallToAction["a" /* default */]
  },
  setup(props, context) {
    context.emit('changeStep', 4);
    const route = Object(runtime["u" /* useRoute */])();
    const companyDetails = Object(runtime["l" /* ref */])({
      name: 'Vue Storefront Headquarter',
      street: 'St. Dmowskiego 17, 53-534',
      city: 'Wroclaw, Poland',
      email: 'demo@vuestorefront.io'
    });
    const orderNumber = Object(runtime["a" /* computed */])(() => {
      var _a;
      return (_a = route.value.query.order) !== null && _a !== void 0 ? _a : '';
    });
    return {
      addBasePath: addBasePath["a" /* addBasePath */],
      companyDetails,
      orderNumber
    };
  }
}));
// CONCATENATED MODULE: ./modules/checkout/pages/Checkout/ThankYou.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Checkout_ThankYouvue_type_script_lang_ts_ = (ThankYouvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./modules/checkout/pages/Checkout/ThankYou.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(518)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Checkout_ThankYouvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7acc4212",
  "1a75adba"
  
)

/* harmony default export */ var ThankYou = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=99.js.map