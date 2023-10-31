exports.ids = [93];
exports.modules = {

/***/ 307:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_id_5774c748_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(307);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_id_5774c748_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_id_5774c748_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_id_5774c748_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfRadio_vue_vue_type_style_index_0_id_5774c748_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_customer_helpers_userAddressManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);

const userAddressesGetters = {
  getAddresses: (addresses, criteria) => {
    var _a, _b;
    if (!addresses || addresses.length === 0 || !Array.isArray(addresses)) return [];
    const addressesData = (_b = (_a = addresses === null || addresses === void 0 ? void 0 : addresses.map(a => Object(_modules_customer_helpers_userAddressManipulator__WEBPACK_IMPORTED_MODULE_0__[/* transformUserGetter */ "b"])(a))) === null || _a === void 0 ? void 0 : _a.sort((a, b) => a.default_shipping === b.default_shipping ? 0 : a.default_shipping ? -1 : 1)) === null || _b === void 0 ? void 0 : _b.sort((a, b) => a.default_billing === b.default_billing ? 0 : a.default_billing ? -1 : 1);
    if (!criteria || Object.keys(criteria).length === 0) {
      return addressesData;
    }
    const entries = Object.entries(criteria);
    return addressesData.filter(address => entries.every(([key, value]) => address[key] === value));
  },
  getTotal: addresses => addresses.length,
  getPostCode: address => (address === null || address === void 0 ? void 0 : address.postcode) || '',
  getStreetName: address => Array.isArray(address === null || address === void 0 ? void 0 : address.street) ? address === null || address === void 0 ? void 0 : address.street[0] : address === null || address === void 0 ? void 0 : address.street,
  getCity: address => (address === null || address === void 0 ? void 0 : address.city) || '',
  getFirstName: address => (address === null || address === void 0 ? void 0 : address.firstname) || '',
  getLastName: address => (address === null || address === void 0 ? void 0 : address.lastname) || '',
  getCountry: address => (address === null || address === void 0 ? void 0 : address.country_code) || '',
  getPhone: address => (address === null || address === void 0 ? void 0 : address.telephone) || '',
  getEmail: address => (address === null || address === void 0 ? void 0 : address.email) || '',
  getApartmentNumber: address => Array.isArray(address === null || address === void 0 ? void 0 : address.street) ? address === null || address === void 0 ? void 0 : address.street[1] : address === null || address === void 0 ? void 0 : address.apartment,
  getProvince: address => {
    var _a, _b;
    return ((_a = address === null || address === void 0 ? void 0 : address.region) === null || _a === void 0 ? void 0 : _a.region) || ((_b = address === null || address === void 0 ? void 0 : address.region) === null || _b === void 0 ? void 0 : _b.region_code) || '';
  },
  getCompanyName: address => (address === null || address === void 0 ? void 0 : address.company) || '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTaxNumber: address => (address === null || address === void 0 ? void 0 : address.vat_id) || '',
  getId: address => (address === null || address === void 0 ? void 0 : address.id) || '',
  getNeighborhood: address => Array.isArray(address === null || address === void 0 ? void 0 : address.street) ? address === null || address === void 0 ? void 0 : address.street[2] : address === null || address === void 0 ? void 0 : address.neighborhood,
  getAddressExtra: address => Array.isArray(address === null || address === void 0 ? void 0 : address.street) ? address === null || address === void 0 ? void 0 : address.street[3] : address === null || address === void 0 ? void 0 : address.extra,
  isDefault: address => (address === null || address === void 0 ? void 0 : address.default_shipping) || (address === null || address === void 0 ? void 0 : address.default_billing) || false,
  isDefaultShipping: address => (address === null || address === void 0 ? void 0 : address.default_shipping) || false,
  isDefaultBilling: address => (address === null || address === void 0 ? void 0 : address.default_billing) || false
};
/* harmony default export */ __webpack_exports__["a"] = (userAddressesGetters);

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=5774c748&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-radio",class:{
    'is-active': _vm.isChecked,
    'is-disabled': _vm.disabled,
  }},[_vm._ssrNode("<label class=\"sf-radio__container\">","</label>",[_c('input',{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"type":"radio","name":_vm.name,"disabled":_vm.disabled},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.changeHandler,"input":_vm.inputHandler}},[]),_vm._ssrNode(" "),_vm._t("checkmark",function(){return [_c('span',{staticClass:"sf-radio__checkmark",class:{ 'sf-radio__checkmark is-active': _vm.isChecked }})]},null,{ isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._ssrNode("<span class=\"sf-radio__content\">","</span>",[_vm._t("label",function(){return [_c('span',{staticClass:"sf-radio__label",class:{ 'display-none': !_vm.label }},[_vm._v(_vm._s(_vm.label))])]},null,{ label: _vm.label, isChecked: _vm.isChecked, disabled: _vm.disabled }),_vm._ssrNode(" "),_vm._t("details",function(){return [_c('span',{staticClass:"sf-radio__details",class:{ 'display-none': !_vm.details }},[_vm._v("\n          "+_vm._s(_vm.details)+"\n        ")])]},null,{ details: _vm.details }),_vm._ssrNode(" "),_vm._t("description",function(){return [_c('span',{staticClass:"sf-radio__description",class:{ 'display-none': !_vm.description }},[_vm._v("\n          "+_vm._s(_vm.description)+"\n        ")])]},null,{ description: _vm.description })],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=template&id=5774c748&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/utilities/directives/focus/focus-directive.js
var focus_directive = __webpack_require__(272);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SfRadiovue_type_script_lang_js_ = ({
  name: "SfRadio",
  directives: {
    focus: focus_directive["a" /* focus */]
  },
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    details: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    }
  },
  methods: {
    changeHandler() {
      this.$emit("change", this.value);
    },
    inputHandler() {
      this.$emit("input", this.value);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfRadio_SfRadiovue_type_script_lang_js_ = (SfRadiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(323)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SfRadio_SfRadiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d0ad4778"
  
)

/* harmony default export */ var SfRadio = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/UserAddressDetails.vue?vue&type=template&id=066a1ae6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<p"+(_vm._ssrStyle(null,_vm.userAddress.isDefault ? 'font-weight: bold;' : '', null))+" data-v-066a1ae6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.userAddress.firstName)+" "+_vm._s(_vm.userAddress.lastName)+"\n  ")+"</p> <p data-v-066a1ae6>"+_vm._ssrEscape(_vm._s(_vm.userAddress.street)+", "+_vm._s(_vm.userAddress.streetNumber))+"</p> <p data-v-066a1ae6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.userAddress.city)+", "+_vm._s(_vm.userAddress.province)+" -\n    "+_vm._s(_vm.userAddress.postalCode)+"\n  ")+"</p> "),_vm._ssrNode("<p data-v-066a1ae6>","</p>",[_vm._t("country",function(){return [_vm._v("\n      "+_vm._s(_vm.userAddress.country)+"\n    ")]})],2),_vm._ssrNode(" "+((_vm.userAddress.phone)?("<p class=\"phone\" data-v-066a1ae6>"+_vm._ssrEscape("\n    "+_vm._s(_vm.userAddress.phone)+"\n  ")+"</p>"):"<!---->")+" "+((_vm.isDefaultShippingText || _vm.isDefaultBillingText)?("<div class=\"badge-container\" data-v-066a1ae6>"+((_vm.isDefaultShippingText)?("<span class=\"badge-container__badge sf-badge sf-badge--number color-primary\" data-v-066a1ae6>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t(_vm.isDefaultShippingText))+"\n    ")+"</span>"):"<!---->")+" "+((_vm.isDefaultBillingText)?("<span class=\"badge-container__badge sf-badge sf-badge--number color-primary\" data-v-066a1ae6>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t(_vm.isDefaultBillingText))+"\n    ")+"</span>"):"<!---->")+"</div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/UserAddressDetails.vue?vue&type=template&id=066a1ae6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./modules/customer/getters/userAddressesGetters.ts
var userAddressesGetters = __webpack_require__(339);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./components/UserAddressDetails.vue?vue&type=script&lang=ts&


/* harmony default export */ var UserAddressDetailsvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'UserAddressDetails',
  props: {
    address: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const address = Object(runtime["p" /* toRef */])(props, 'address');
    const userAddress = Object(runtime["a" /* computed */])(() => ({
      firstName: userAddressesGetters["a" /* default */].getFirstName(address.value),
      lastName: userAddressesGetters["a" /* default */].getLastName(address.value),
      street: userAddressesGetters["a" /* default */].getStreetName(address.value),
      streetNumber: userAddressesGetters["a" /* default */].getApartmentNumber(address.value),
      postalCode: userAddressesGetters["a" /* default */].getPostCode(address.value),
      city: userAddressesGetters["a" /* default */].getCity(address.value),
      province: userAddressesGetters["a" /* default */].getProvince(address.value) || '',
      country: userAddressesGetters["a" /* default */].getCountry(address.value),
      phone: userAddressesGetters["a" /* default */].getPhone(address.value),
      isDefault: userAddressesGetters["a" /* default */].isDefault(address.value),
      isDefaultShipping: userAddressesGetters["a" /* default */].isDefaultShipping(address.value),
      isDefaultBilling: userAddressesGetters["a" /* default */].isDefaultBilling(address.value)
    }));
    const isDefaultShippingText = Object(runtime["a" /* computed */])(() => userAddress.value.isDefaultShipping ? 'Default Shipping Address' : '');
    const isDefaultBillingText = Object(runtime["a" /* computed */])(() => userAddress.value.isDefaultBilling ? 'Default Billing Address' : '');
    return {
      userAddress,
      isDefaultShippingText,
      isDefaultBillingText
    };
  }
}));
// CONCATENATED MODULE: ./components/UserAddressDetails.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserAddressDetailsvue_type_script_lang_ts_ = (UserAddressDetailsvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/UserAddressDetails.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(370)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserAddressDetailsvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "066a1ae6",
  "538521a7"
  
)

/* harmony default export */ var UserAddressDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserAddressDetails_vue_vue_type_style_index_0_id_066a1ae6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserAddressDetails_vue_vue_type_style_index_0_id_066a1ae6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserAddressDetails_vue_vue_type_style_index_0_id_066a1ae6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserAddressDetails_vue_vue_type_style_index_0_id_066a1ae6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserAddressDetails_vue_vue_type_style_index_0_id_066a1ae6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 383:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_id_eb0c39a0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(383);
/* harmony import */ var _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_id_eb0c39a0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_id_eb0c39a0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_id_eb0c39a0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_7_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_1_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_SfAddressPicker_vue_vue_type_style_index_0_id_eb0c39a0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 480:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserShippingAddresses_vue_vue_type_style_index_0_id_88cffe30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserShippingAddresses_vue_vue_type_style_index_0_id_88cffe30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserShippingAddresses_vue_vue_type_style_index_0_id_88cffe30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserShippingAddresses_vue_vue_type_style_index_0_id_88cffe30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_15_0_UserShippingAddresses_vue_vue_type_style_index_0_id_88cffe30_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=template&id=eb0c39a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-address-picker"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=template&id=eb0c39a0&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=template&id=28bee919&
var SfAddressvue_type_template_id_28bee919_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SfRadio',{staticClass:"sf-address",attrs:{"value":_vm.name,"name":"groupName"},scopedSlots:_vm._u([{key:"label",fn:function(){return [_vm._t("default")]},proxy:true},{key:"checkmark",fn:function(){return [_vm._t("icon",function(){return [_c('div',{staticClass:"sf-address__icon-container"},[_c('SfIcon',{staticClass:"sf-address__icon",attrs:{"icon":"check"}})],1)]})]},proxy:true}],null,true),model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})}
var SfAddressvue_type_template_id_28bee919_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=template&id=28bee919&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfRadio/SfRadio.vue + 4 modules
var SfRadio = __webpack_require__(358);

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/atoms/SfIcon/SfIcon.vue + 5 modules
var SfIcon = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SfAddressvue_type_script_lang_js_ = ({
  name: "SfAddressPicker",
  components: {
    SfRadio: SfRadio["a" /* default */],
    SfIcon: SfIcon["a" /* default */]
  },
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  inject: ["getSelectedValue", "setSelectedValue"],
  computed: {
    selected: {
      get() {
        return this.getSelectedValue();
      },
      set(newValue) {
        this.setSelectedValue(newValue);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue?vue&type=script&lang=js&
 /* harmony default export */ var _internal_SfAddressvue_type_script_lang_js_ = (SfAddressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/_internal/SfAddress.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _internal_SfAddressvue_type_script_lang_js_,
  SfAddressvue_type_template_id_28bee919_render,
  SfAddressvue_type_template_id_28bee919_staticRenderFns,
  false,
  null,
  null,
  "4c973264"
  
)

/* harmony default export */ var SfAddress = (component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=script&lang=js&
//
//
//
//
//



external_vue_default.a.component("SfAddress", SfAddress);
/* harmony default export */ var SfAddressPickervue_type_script_lang_js_ = ({
  name: "SfAddressPicker",
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selectedValue: this.selected
    };
  },
  provide() {
    return {
      getSelectedValue: this.getSelectedValue,
      setSelectedValue: this.setSelectedValue
    };
  },
  watch: {
    selected(newVal) {
      this.selectedValue = newVal;
    }
  },
  methods: {
    getSelectedValue() {
      return this.selectedValue;
    },
    setSelectedValue(newVal) {
      const newValue = newVal;
      this.selectedValue = newValue;
      this.$emit("change", newValue);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var SfAddressPicker_SfAddressPickervue_type_script_lang_js_ = (SfAddressPickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(406)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SfAddressPicker_component = Object(componentNormalizer["a" /* default */])(
  SfAddressPicker_SfAddressPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "510c26dc"
  
)

/* harmony default export */ var SfAddressPicker = __webpack_exports__["a"] = (SfAddressPicker_component.exports);

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./modules/checkout/components/UserShippingAddresses.vue?vue&type=template&id=88cffe30&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SfAddressPicker',{staticClass:"addresses",attrs:{"selected":("" + _vm.currentAddressId)},on:{"change":function($event){return _vm.emitSetCurrentAddress($event)}}},_vm._l((_vm.addressesWithCountryName),function(shippingAddress){return _c('SfAddress',{key:_vm.userShippingGetters.getId(shippingAddress),staticClass:"address",attrs:{"name":("" + (_vm.userShippingGetters.getId(shippingAddress)))}},[_c('UserAddressDetails',{attrs:{"address":shippingAddress},scopedSlots:_vm._u([{key:"country",fn:function(){return [_vm._v("\n          "+_vm._s(shippingAddress.countryName)+"\n        ")]},proxy:true}],null,true)})],1)}),1),_vm._ssrNode(" <hr class=\"sf-divider\" data-v-88cffe30>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./modules/checkout/components/UserShippingAddresses.vue?vue&type=template&id=88cffe30&scoped=true&

// EXTERNAL MODULE: ./node_modules/@storefront-ui/vue/src/components/molecules/SfAddressPicker/SfAddressPicker.vue + 9 modules
var SfAddressPicker = __webpack_require__(584);

// EXTERNAL MODULE: ./node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs + 1 modules
var runtime = __webpack_require__(0);

// EXTERNAL MODULE: ./modules/customer/getters/userShippingGetters.ts
var userShippingGetters = __webpack_require__(433);

// EXTERNAL MODULE: ./components/UserAddressDetails.vue + 4 modules
var UserAddressDetails = __webpack_require__(362);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--13-0!./node_modules/ts-loader??ref--13-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--15-0!./modules/checkout/components/UserShippingAddresses.vue?vue&type=script&lang=ts&




/* harmony default export */ var UserShippingAddressesvue_type_script_lang_ts_ = (Object(runtime["b" /* defineComponent */])({
  name: 'UserShippingAddresses',
  components: {
    SfAddressPicker: SfAddressPicker["a" /* default */],
    UserAddressDetails: UserAddressDetails["a" /* default */]
  },
  props: {
    currentAddressId: {
      type: Number,
      default: null
    },
    value: {
      type: Boolean,
      required: true
    },
    shippingAddresses: {
      type: Array,
      required: true
    },
    countries: {
      type: Array,
      default: () => []
    }
  },
  emits: ['setCurrentAddress'],
  setup(props, {
    emit
  }) {
    const emitSetCurrentAddress = addressId => {
      const address = props.shippingAddresses.find(({
        id
      }) => id === Number(addressId));
      if (address) {
        emit('setCurrentAddress', address);
      }
    };
    const addressesWithCountryName = Object(runtime["a" /* computed */])(() => props.shippingAddresses.map(address => {
      var _a, _b;
      return {
        ...address,
        countryName: (_b = (_a = props.countries.find(({
          id
        }) => id === address.country_code)) === null || _a === void 0 ? void 0 : _a.full_name_locale) !== null && _b !== void 0 ? _b : address.country_code
      };
    }));
    return {
      emitSetCurrentAddress,
      addressesWithCountryName,
      userShippingGetters: userShippingGetters["a" /* default */]
    };
  }
}));
// CONCATENATED MODULE: ./modules/checkout/components/UserShippingAddresses.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_UserShippingAddressesvue_type_script_lang_ts_ = (UserShippingAddressesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./modules/checkout/components/UserShippingAddresses.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(563)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserShippingAddressesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "88cffe30",
  "f687eae8"
  
)

/* harmony default export */ var UserShippingAddresses = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=93.js.map