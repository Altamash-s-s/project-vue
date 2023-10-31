exports.ids = [54];
exports.modules = {

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMetaInfo; });
const getMetaInfo = (page, isNoIndex = false) => {
  if (!page) {
    return null;
  }
  const seoTags = {
    meta: []
  };
  if ((page === null || page === void 0 ? void 0 : page.meta_title) || (page === null || page === void 0 ? void 0 : page.title) || (page === null || page === void 0 ? void 0 : page.name)) {
    seoTags.title = (page === null || page === void 0 ? void 0 : page.meta_title) || (page === null || page === void 0 ? void 0 : page.title) || (page === null || page === void 0 ? void 0 : page.name);
  }
  if (page === null || page === void 0 ? void 0 : page.meta_description) {
    seoTags.meta.push({
      hid: 'description',
      name: 'description',
      content: page.meta_description
    });
  }
  if ((page === null || page === void 0 ? void 0 : page.meta_keyword) || (page === null || page === void 0 ? void 0 : page.meta_keywords)) {
    seoTags.meta.push({
      hid: 'keywords',
      name: 'keywords',
      content: (page === null || page === void 0 ? void 0 : page.meta_keyword) || (page === null || page === void 0 ? void 0 : page.meta_keywords)
    });
  }
  if (isNoIndex) {
    seoTags.meta.push({
      name: 'robots',
      content: 'noindex, nofollow'
    });
  }
  return seoTags;
};

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_id_1da5d4af_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(363);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_id_1da5d4af_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_id_1da5d4af_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_id_1da5d4af_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBanner_vue_vue_type_style_index_0_id_1da5d4af_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 422:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 423:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeroSection_vue_vue_type_style_index_0_id_c4bd1a5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeroSection_vue_vue_type_style_index_0_id_c4bd1a5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeroSection_vue_vue_type_style_index_0_id_c4bd1a5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeroSection_vue_vue_type_style_index_0_id_c4bd1a5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_HeroSection_vue_vue_type_style_index_0_id_c4bd1a5a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_id_71b3afb1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_id_71b3afb1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_id_71b3afb1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_id_71b3afb1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfBannerGrid_vue_vue_type_style_index_0_id_71b3afb1_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Home_vue_vue_type_style_index_0_id_1f474401_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Home_vue_vue_type_style_index_0_id_1f474401_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Home_vue_vue_type_style_index_0_id_1f474401_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Home_vue_vue_type_style_index_0_id_1f474401_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_Home_vue_vue_type_style_index_0_id_1f474401_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=template&id=1da5d4af&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',_vm._g({staticClass:"sf-banner",style:(_vm.style)},_vm.$listeners),[_c(_vm.wrapper,{tag:"component",staticClass:"sf-banner__wrapper",attrs:{"link":_vm.link}},[_vm._t("subtitle",function(){return [_c('span',{staticClass:"sf-banner__subtitle",class:{ 'display-none': !_vm.subtitle }},[_vm._v("\n        "+_vm._s(_vm.subtitle)+"\n      ")])]},null,{ subtitle: _vm.subtitle }),_vm._v(" "),_vm._t("title",function(){return [_c('span',{staticClass:"sf-banner__title",class:{ 'display-none': !_vm.title }},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])]},null,{ title: _vm.title }),_vm._v(" "),_vm._t("description",function(){return [_c('span',{staticClass:"sf-banner__description",class:{ 'display-none': !_vm.description }},[_vm._v("\n        "+_vm._s(_vm.description)+"\n      ")])]},null,{ description: _vm.description }),_vm._v(" "),_vm._t("call-to-action",null,null,{ buttonText: _vm.buttonText })],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrAttr("link",_vm.link))+" class=\"sf-banner__wrapper-desktop\">","</div>",[_vm._t("subtitle",function(){return [_c('span',{staticClass:"sf-banner__subtitle",class:{ 'display-none': !_vm.subtitle }},[_vm._v("\n        "+_vm._s(_vm.subtitle)+"\n      ")])]},null,{ subtitle: _vm.subtitle }),_vm._ssrNode(" "),_vm._t("title",function(){return [_c('span',{staticClass:"sf-banner__title",class:{ 'display-none': !_vm.title }},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])]},null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("description",function(){return [_c('span',{staticClass:"sf-banner__description",class:{ 'display-none': !_vm.description }},[_vm._v("\n        "+_vm._s(_vm.description)+"\n      ")])]},null,{ description: _vm.description }),_vm._ssrNode(" "),_vm._t("call-to-action",function(){return [(_vm.buttonText)?_c('SfButton',_vm._g({staticClass:"sf-banner__call-to-action color-secondary",attrs:{"link":_vm.link,"data-testid":"banner-cta-button"}},_vm.$listeners),[_vm._v("\n        "+_vm._s(_vm.buttonText)+"\n      ")]):_vm._e()]},null,{ buttonText: _vm.buttonText })],2),_vm._ssrNode(" "),_vm._t("img-tag")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=template&id=1da5d4af&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfLink/SfLink.vue + 4 modules
var SfLink = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfBannervue_type_script_lang_js_ = ({
  name: "SfBanner",
  components: {
    SfButton: SfButton["a" /* default */],
    SfLink: SfLink["a" /* default */]
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
    description: {
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
    background: {
      type: String,
      default: ""
    },
    image: {
      type: [String, Object],
      default: ""
    },
    imageTag: {
      type: String,
      default: null
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      const nuxtImgConvert = imgUrl => {
        return `url(${this.$img(imgUrl, this.nuxtImgConfig)})`;
      };
      if (this.imageTag === "nuxt-img" || this.imageTag === "nuxt-picture") {
        return {
          "--_banner-background-image": image.mobile ? nuxtImgConvert(image.mobile) : nuxtImgConvert(image),
          "--_banner-background-desktop-image": image.desktop && nuxtImgConvert(image.desktop),
          "--_banner-background-color": background
        };
      }
      return {
        "--_banner-background-image": image.mobile ? `url(${image.mobile})` : `url(${image})`,
        "--_banner-background-desktop-image": image.desktop && `url(${image.desktop})`,
        "--_banner-background-color": background
      };
    },
    wrapper() {
      return this.link ? "SfLink" : "SfButton";
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBanner_SfBannervue_type_script_lang_js_ = (SfBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(393)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBanner_SfBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3db032cc"
  
)

/* harmony default export */ var SfBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./pages/Home.vue?vue&type=template&id=1f474401&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"home"}},[_c('HeroSection',{staticClass:"hero-section",attrs:{"title":_vm.hero.title,"subtitle":_vm.hero.subtitle,"button-text":_vm.hero.buttonText,"link":_vm.hero.link,"image-src":_vm.hero.imageSrc,"image-width":_vm.hero.imageWidth,"image-height":_vm.hero.imageHeight,"nuxt-img-config":_vm.hero.imageConfig,"image-tag":"nuxt-img"}}),_vm._ssrNode(" "),_c('LazyHydrate',{attrs:{"when-visible":""}},[_c('SfBannerGrid',{staticClass:"banner-grid",attrs:{"banner-grid":1},scopedSlots:_vm._u([_vm._l((_vm.banners),function(item){return {key:item.slot,fn:function(){return [_c('SfBanner',{key:item.slot,class:item.class,attrs:{"title":item.title,"subtitle":item.subtitle,"description":item.description,"button-text":item.buttonText,"image-tag":"nuxt-img","image":item.image,"nuxt-img-config":item.imageConfig}})]},proxy:true}})],null,true)})],1),_vm._ssrNode(" "),_c('LoadWhenVisible',[_c('NewProducts',{staticClass:"products",attrs:{"button-text":_vm.$t('See more'),"title":_vm.$t('New Products'),"link":"/women.html"}})],1),_vm._ssrNode(" "),_c('LoadWhenVisible',[_c('CallToAction',{staticClass:"call-to-action",attrs:{"title":_vm.callToAction.title,"button-text":_vm.callToAction.buttonText,"description":_vm.callToAction.description,"image-tag":"nuxt-img","image-src":_vm.callToAction.imageSrc,"image-width":_vm.callToAction.imageWidth,"image-height":_vm.callToAction.imageHeight,"nuxt-img-config":_vm.callToAction.imageConfig}})],1),_vm._ssrNode(" "),_c('LoadWhenVisible',[_c('InstagramFeed')],1),_vm._ssrNode(" "),_c('LoadWhenVisible',[_c('MobileStoreBanner')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Home.vue?vue&type=template&id=1f474401&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: external "vue-lazy-hydration"
var external_vue_lazy_hydration_ = __webpack_require__(79);
var external_vue_lazy_hydration_default = /*#__PURE__*/__webpack_require__.n(external_vue_lazy_hydration_);

// EXTERNAL MODULE: external "@vue-storefront/cache"
var cache_ = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfBanner/SfBanner.vue + 4 modules
var SfBanner = __webpack_require__(585);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=template&id=71b3afb1&
var SfBannerGridvue_type_template_id_71b3afb1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-banner-grid"},[(_vm.bannerGrid === 1)?[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-A")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--medium\">","</div>",[_vm._t("banner-B")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-C")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-D")],2)])],2)],2)]:_vm._e(),_vm._ssrNode(" "),(_vm.bannerGrid === 2)?[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--small\">","</div>",[_vm._t("banner-A")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--higher\">","</div>",[_vm._t("banner-B")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__col sf-banner-grid__col--higher\">","</div>",[_vm._t("banner-C")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sf-banner-grid__row\">","</div>",[_vm._ssrNode("<div class=\"sf-banner-grid__col\">","</div>",[_vm._t("banner-D")],2)])],2)],2)]:_vm._e()],2)}
var SfBannerGridvue_type_template_id_71b3afb1_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=template&id=71b3afb1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SfBannerGridvue_type_script_lang_js_ = ({
  name: "SfBannerGrid",
  props: {
    bannerGrid: {
      type: Number,
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfBannerGrid_SfBannerGridvue_type_script_lang_js_ = (SfBannerGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/organisms/SfBannerGrid/SfBannerGrid.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(508)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfBannerGrid_SfBannerGridvue_type_script_lang_js_,
  SfBannerGridvue_type_template_id_71b3afb1_render,
  SfBannerGridvue_type_template_id_71b3afb1_staticRenderFns,
  false,
  injectStyles,
  null,
  "17936a40"
  
)

/* harmony default export */ var SfBannerGrid = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/HeroSection.vue?vue&type=template&id=c4bd1a5a&scoped=true&
var HeroSectionvue_type_template_id_c4bd1a5a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero"},[_c('SfImage',{staticClass:"hero__image",attrs:{"image-tag":_vm.imageTag,"src":_vm.imageSrc,"alt":_vm.title,"width":_vm.imageWidth,"height":_vm.imageHeight,"nuxt-img-config":_vm.nuxtImgConfig,"placeholder":""}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hero__wrapper\" data-v-c4bd1a5a>","</div>",[_vm._t("subtitle",function(){return [_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.subtitle),expression:"subtitle"}],staticClass:"hero__subtitle"},[_vm._v("\n        "+_vm._s(_vm.subtitle)+"\n      ")])]},null,{ subtitle: _vm.subtitle }),_vm._ssrNode(" "),_vm._t("title",function(){return [_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}],staticClass:"hero__title"},[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")])]},null,{ title: _vm.title }),_vm._ssrNode(" "),_vm._t("call-to-action",function(){return [(_vm.buttonText && _vm.link)?_c('SfButton',{staticClass:"hero__button",attrs:{"link":_vm.localePath(_vm.link)}},[_vm._v("\n        "+_vm._s(_vm.buttonText)+"\n      ")]):_vm._e()]},null,{ buttonText: _vm.buttonText, link: _vm.link })],2)],2)}
var HeroSectionvue_type_template_id_c4bd1a5a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=template&id=c4bd1a5a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfButton/SfButton.vue + 4 modules
var SfButton = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfImage/SfImage.vue + 4 modules
var SfImage = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/HeroSection.vue?vue&type=script&lang=ts&


/* harmony default export */ var HeroSectionvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'HeroSection',
  components: {
    SfButton: SfButton["a" /* default */],
    SfImage: SfImage["a" /* default */]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    },
    imageHeight: {
      type: [Number, String],
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    },
    imageTag: {
      type: String,
      default: ''
    },
    imageWidth: {
      type: [Number, String],
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({})
    }
  }
}));
// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_HeroSectionvue_type_script_lang_ts_ = (HeroSectionvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/HeroSection.vue



function HeroSection_injectStyles (context) {
  
  var style0 = __webpack_require__(507)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var HeroSection_component = Object(componentNormalizer["a" /* default */])(
  components_HeroSectionvue_type_script_lang_ts_,
  HeroSectionvue_type_template_id_c4bd1a5a_scoped_true_render,
  HeroSectionvue_type_template_id_c4bd1a5a_scoped_true_staticRenderFns,
  false,
  HeroSection_injectStyles,
  "c4bd1a5a",
  "1be5082d"
  
)

/* harmony default export */ var HeroSection = (HeroSection_component.exports);
// EXTERNAL MODULE: ./helpers/getMetaInfo.ts
var getMetaInfo = __webpack_require__(346);

// EXTERNAL MODULE: ./composables/index.ts + 39 modules
var composables = __webpack_require__(7);

// EXTERNAL MODULE: ./components/utils/LoadWhenVisible.vue + 4 modules
var LoadWhenVisible = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./pages/Home.vue?vue&type=script&lang=ts&








/* harmony default export */ var Homevue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'HomePage',
  components: {
    HeroSection: HeroSection,
    LazyHydrate: external_vue_lazy_hydration_default.a,
    LoadWhenVisible: LoadWhenVisible["a" /* default */],
    SfBanner: SfBanner["a" /* default */],
    SfBannerGrid: SfBannerGrid,
    CallToAction: () => __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(null, 628)),
    InstagramFeed: () => __webpack_require__.e(/* import() */ 58).then(__webpack_require__.bind(null, 629)),
    MobileStoreBanner: () => __webpack_require__.e(/* import() */ 110).then(__webpack_require__.bind(null, 590)),
    NewProducts: () => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, 630))
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const {
      addTags
    } = Object(cache_["useCache"])();
    const {
      loadPage
    } = Object(composables["d" /* useContent */])();
    const {
      app
    } = Object(runtime["s" /* useContext */])();
    const year = new Date().getFullYear();
    const {
      isDesktop
    } = app.$device;
    const page = Object(runtime["l" /* ref */])(null);
    const hero = Object(runtime["l" /* ref */])({
      title: app.i18n.t('Colorful summer dresses are already in store'),
      subtitle: app.i18n.t('SUMMER COLLECTION {year}', {
        year
      }),
      buttonText: app.i18n.t('Learn more'),
      imageSrc: '/homepage/bannerB.webp',
      imageWidth: isDesktop ? 1240 : 328,
      imageHeight: isDesktop ? 400 : 224,
      imageConfig: {
        fit: 'cover',
        format: 'webp'
      },
      link: '/women.html'
    });
    const banners = Object(runtime["l" /* ref */])([{
      slot: 'banner-A',
      subtitle: app.i18n.t('Dresses'),
      title: app.i18n.t('Cocktail & Party'),
      description: app.i18n.t('Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.'),
      buttonText: app.i18n.t('Shop now'),
      image: {
        mobile: '/homepage/bannerB.webp',
        desktop: '/homepage/bannerF.webp'
      },
      imageConfig: {
        fit: 'cover',
        width: isDesktop ? 332 : 328,
        height: isDesktop ? 840 : 343,
        format: 'webp'
      },
      class: 'sf-banner--slim desktop-only',
      link: '/women/women-clothing-skirts'
    }, {
      slot: 'banner-B',
      subtitle: app.i18n.t('Dresses'),
      title: app.i18n.t('Linen Dresses'),
      description: app.i18n.t('Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.'),
      buttonText: app.i18n.t('Shop now'),
      image: '/homepage/bannerE.webp',
      imageConfig: {
        fit: 'cover',
        width: isDesktop ? 496 : 328,
        height: isDesktop ? 840 : 343,
        format: 'webp'
      },
      class: 'sf-banner--slim banner-central desktop-only',
      link: '/women/women-clothing-dresses'
    }, {
      slot: 'banner-C',
      subtitle: app.i18n.t('T-Shirts'),
      title: app.i18n.t('The Office Life'),
      image: '/homepage/bannerC.webp',
      imageConfig: {
        fit: 'cover',
        width: isDesktop ? 332 : 328,
        height: isDesktop ? 400 : 343,
        format: 'webp'
      },
      class: 'sf-banner--slim banner__tshirt',
      link: '/women/women-clothing-shirts'
    }, {
      slot: 'banner-D',
      subtitle: app.i18n.t('Summer Sandals'),
      title: app.i18n.t('Eco Sandals'),
      image: '/homepage/bannerG.webp',
      imageConfig: {
        fit: 'cover',
        width: isDesktop ? 332 : 328,
        height: isDesktop ? 400 : 343,
        format: 'webp'
      },
      class: 'sf-banner--slim',
      link: '/women/women-shoes-sandals'
    }]);
    const callToAction = Object(runtime["l" /* ref */])({
      title: app.i18n.t('Subscribe to Newsletters'),
      description: app.i18n.t('Be aware of upcoming sales and events. Receive gifts and special offers!'),
      buttonText: app.i18n.t('Subscribe'),
      imageSrc: '/homepage/newsletter.webp',
      imageWidth: isDesktop ? 1240 : 400,
      imageHeight: isDesktop ? 202 : 200,
      imageConfig: {
        fit: 'cover',
        format: 'webp'
      }
    });
    Object(runtime["t" /* useFetch */])(async () => {
      page.value = await loadPage({
        identifier: 'home'
      });
    });
    Object(runtime["g" /* onMounted */])(() => {
      addTags([{
        prefix: cache_["CacheTagPrefix"].View,
        value: 'home'
      }]);
    });
    // @ts-ignore
    return {
      banners,
      callToAction,
      hero,
      page
    };
  },
  head() {
    return Object(getMetaInfo["a" /* getMetaInfo */])(this.page);
  }
}));
// CONCATENATED MODULE: ./pages/Home.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_Homevue_type_script_lang_ts_ = (Homevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./pages/Home.vue



function Home_injectStyles (context) {
  
  var style0 = __webpack_require__(509)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  pages_Homevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  Home_injectStyles,
  "1f474401",
  "4c73eb9f"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (Home_component.exports);

/***/ })

};;
//# sourceMappingURL=Home.js.map