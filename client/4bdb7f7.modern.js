(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{424:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return f}));n(9);var r=n(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=e=>"vsf-".concat(e),c=(e,t)=>new Promise(((n,r)=>{try{var l=e();t&&t(null,l),n(l)}catch(e){t&&t(e),r(e)}})),v=(e,t)=>c((()=>JSON.parse(window.localStorage.getItem(d(e)))),t),m=(e,t)=>c((()=>{window.localStorage.removeItem(d(e))}),t),f=(e,t,n)=>c((()=>((e,t)=>{var n=window.localStorage.getItem(e),r=JSON.parse(n),l=t,d=JSON.stringify(o(o({},JSON.parse(JSON.stringify(r))),JSON.parse(JSON.stringify(l))));window.localStorage.setItem(e,d)})(d(e),t)),n)},446:function(e,t,n){"use strict";n(51);t.a={countriesList:e=>e.filter((e=>e.id&&e.full_name_english&&e.full_name_locale)).map((e=>({id:e.id,label:e.full_name_locale,englishLabel:e.full_name_english,abbreviation:e.two_letter_abbreviation}))).sort(((a,b)=>a.label.localeCompare(b.label))),regionList:e=>(null==e?void 0:e.available_regions)?e.available_regions.filter((e=>e.id&&e.code&&e.name)).map((e=>({id:e.id,label:e.name,abbreviation:e.code}))).sort(((a,b)=>a.label.localeCompare(b.label))):[]}},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),l=n(424),o=function(){var e=Object(r.a)((function*(e){var t=yield Object(l.a)("checkout");return!(!t||!t[e])}));return function(t){return e.apply(this,arguments)}}()},517:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return c}));var r=n(898),l=address=>({firstname:address.firstname,lastname:address.lastname,street:address.street[0],apartment:address.street[1],city:address.city,region:address.region.code,country_code:address.country.code,postcode:address.postcode,telephone:address.telephone}),o=address=>{var e,t,n,r,l;return{firstname:address.firstname,lastname:address.lastname,street:null===(e=address.street)||void 0===e?void 0:e[0],apartment:null===(t=address.street)||void 0===t?void 0:t[1],city:address.city,region:null!==(r=null===(n=null==address?void 0:address.region)||void 0===n?void 0:n.region_code)&&void 0!==r?r:address.region.code,country_code:null!==(l=null==address?void 0:address.country_code)&&void 0!==l?l:address.country.code,postcode:address.postcode,telephone:address.telephone}},d=()=>({firstname:"",lastname:"",street:"",apartment:"",city:"",region:"",country_code:"",postcode:"",telephone:""}),c=(e,t)=>{var n;return null!==(n=null==e?void 0:e.find((e=>Object(r.a)(o(e),o(t)))))&&void 0!==n?n:null}},572:function(e,t,n){"use strict";n(10),n(11);var r=n(1),l={getAddresses:(e,t)=>{if(r.a.debug(e),!e||!e.addresses)return[];if(!t||0===Object.keys(t).length)return e.addresses;var n=Object.entries(t);return e.addresses.filter((address=>n.every((e=>{var[t,n]=e;return address[t]===n}))))},getDefault:e=>e.addresses.find((e=>{var{default_shipping:t}=e;return t})),getTotal:e=>e.addresses.length,getPostCode:address=>(null==address?void 0:address.postcode)||"",getStreetName:address=>Array.isArray(null==address?void 0:address.street)?null==address?void 0:address.street[0]:"",getApartmentNumber:address=>Array.isArray(null==address?void 0:address.street)?null==address?void 0:address.street[1]:"",getCity:address=>(null==address?void 0:address.city)||"",getFirstName:address=>(null==address?void 0:address.firstname)||"",getLastName:address=>(null==address?void 0:address.lastname)||"",getCountry:address=>(null==address?void 0:address.country_code)||"",getPhone:address=>(null==address?void 0:address.phone)||"",getEmail:address=>(null==address?void 0:address.email)||"",getProvince:address=>{var e,t;return(null===(e=null==address?void 0:address.region)||void 0===e?void 0:e.region_code)||(null===(t=null==address?void 0:address.region)||void 0===t?void 0:t.region)||""},getCompanyName:address=>(null==address?void 0:address.company)||"",getId:address=>(null==address?void 0:address.id)||"",isDefault:address=>(null==address?void 0:address.default_shipping)||!1};t.a=l},573:function(e,t,n){},695:function(e,t,n){"use strict";n(573)},923:function(e,t,n){"use strict";n.r(t);n(9);var r=n(2),l=n(5),o=(n(23),n(10),n(11),n(144)),d=n(152),c=n(27),v=n(511),m=n(0),f=n(410),h=n(408),_=n(572),y=n(446),S=n(15),O=n(153),j=n(35),w=n(150),address=n(517),D=n(424),N=n(472);function A(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(h.c)("required",C(C({},f.f),{},{message:"This field is required"})),Object(h.c)("min",C(C({},f.d),{},{message:"The field should have at least {length} characters"})),Object(h.c)("digits",C(C({},f.b),{},{message:"Please provide a valid phone number"}));var P=Object(m.b)({name:"ShippingStep",components:{SfHeading:o.a,SfInput:d.a,SfButton:c.a,SfSelect:v.a,ValidationProvider:h.b,ValidationObserver:h.a,UserShippingAddresses:()=>n.e(95).then(n.bind(null,941)),VsfShippingProvider:()=>n.e(100).then(n.bind(null,942))},setup(){var e=Object(m.v)(),{app:t}=Object(m.s)(),n=Object(m.l)(null),{load:l,save:o,loading:d}=Object(O.a)(),{load:c,setDefaultAddress:v}=Object(w.a)(),{load:f,search:h}=Object(S.e)(),A=Object(m.l)([]),P=Object(m.l)(null),{isAuthenticated:$}=Object(j.a)(),k=Object(m.l)(Object(address.d)()),I=Object(m.l)([]),x=Object(m.l)(null),V=Object(m.l)(!1),L=Object(m.l)(!1),J=Object(m.l)(!0),E=Object(m.l)(!1),F=Object(m.a)((()=>_.a.getAddresses(n.value))),B=Object(m.a)((()=>!d.value&&k.value&&Object.keys(k.value).length>0)),R=Object(m.a)((()=>!(!$.value||!n.value)&&F.value.length>0)),H=Object(m.a)((()=>y.a.countriesList(A.value))),z=Object(m.a)((()=>y.a.regionList(P.value))),M=function(){var e=Object(r.a)((function*(e){var t=null==e?void 0:e.id;x.value=t,t&&(J.value=!1),k.value=Object(address.a)(e),P.value=e.country_code?yield h({id:e.country_code}):null,E.value=!1}));return function(t){return e.apply(this,arguments)}}(),T=(e,t)=>{k.value[e]=t,E.value=!1,x.value=null},U=function(){var e=Object(r.a)((function*(e){T("country_code",e);var t=yield h({id:e});k.value.region="",P.value=t}));return function(t){return e.apply(this,arguments)}}();return Object(m.g)(Object(r.a)((function*(){var r;(yield Object(N.a)("user-account"))||(yield e.push(t.localeRoute({name:"user-account"})));var[o,d,v]=yield Promise.all([l(),c(),f()]),[m=null]=_.a.getAddresses(d,{default_shipping:!0});if(Boolean(o)){var y=Object(address.b)(null==d?void 0:d.addresses,o);M(C(C({},o),{},{id:null==y?void 0:y.id}))}else m&&M(m);(null===(r=k.value)||void 0===r?void 0:r.country_code)&&(P.value=yield h({id:k.value.country_code})),n.value=d,A.value=v}))),{isAddNewAddressFormVisible:J,canMoveForward:B,changeCountry:U,changeShippingDetails:T,countries:A,countriesList:H,country:P,currentAddressId:x,handleAddNewAddressBtnClick:()=>{x.value=null,k.value=Object(address.d)(),J.value=!0,E.value=!1},handleAddressSubmit:e=>Object(r.a)((function*(){var t,r=x.value,l=C(C({},k.value),{},{customerAddressId:r,save_in_address_book:!1});yield Object(D.b)("checkout",{shipping:l});var d=yield o({shippingDetails:l});if(I.value=null!==(t=null==d?void 0:d.available_shipping_methods)&&void 0!==t?t:[],null!==r&&V.value){var[m]=_.a.getAddresses(n.value,{id:r});m.default_shipping=V.value,m&&(yield v({address:m}),n.value=yield c(!0))}e(),E.value=!0})),handleSetCurrentAddress:M,hasSavedShippingAddress:R,isAuthenticated:$,isFormSubmitted:L,isShippingDetailsStepCompleted:E,isShippingLoading:d,regionInformation:z,searchCountry:h,isSetAsDefaultRequested:V,shippingDetails:k,shippingMethods:I,addresses:F}}}),$=P,k=(n(695),n(8)),component=Object(k.a)($,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.handleSubmit,l=t.dirty,o=t.reset;return[n("SfHeading",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-heading",expression:"'shipping-heading'"}],staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{level:3,title:e.$t("Shipping address")}}),e._v(" "),e.hasSavedShippingAddress?n("SfHeading",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-heading",expression:"'shipping-heading'"}],staticClass:"sf-heading--left sf-heading--no-underline form-subtitle",attrs:{level:4,title:e.$t("Select previously saved address")}}):e._e(),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),r(e.handleAddressSubmit(o))}}},[e.isAuthenticated&&e.hasSavedShippingAddress?n("UserShippingAddresses",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-addresses",expression:"'shipping-addresses'"}],attrs:{"current-address-id":e.currentAddressId,"shipping-addresses":e.addresses,countries:e.countries},on:{setCurrentAddress:function(t){return e.handleSetCurrentAddress(t)}},model:{value:e.isSetAsDefaultRequested,callback:function(t){e.isSetAsDefaultRequested=t},expression:"isSetAsDefaultRequested"}}):e._e(),e._v(" "),e.isAddNewAddressFormVisible?n("div",{staticClass:"form"},[e.hasSavedShippingAddress?n("SfHeading",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-heading",expression:"'shipping-heading'"}],staticClass:"sf-heading--left sf-heading--no-underline form-subtitle",attrs:{level:4,title:e.$t("Enter different address")}}):e._e(),e._v(" "),n("ValidationProvider",{attrs:{name:"firstname",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-firstName",expression:"'shipping-firstName'"}],staticClass:"form__element form__element--half",attrs:{value:e.shippingDetails.firstname,label:e.$t("First Name"),name:"firstName",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("firstname",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"lastname",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-lastName",expression:"'shipping-lastName'"}],staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.lastname,label:e.$t("Last Name"),name:"lastName",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("lastname",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"street",rules:"required",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-streetName",expression:"'shipping-streetName'"}],staticClass:"form__element form__element--half",attrs:{value:e.shippingDetails.street,label:e.$t("Street Name"),name:"streetName",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("street",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"apartment",rules:"required|min:1",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-apartment",expression:"'shipping-apartment'"}],staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.apartment,label:e.$t("House/Apartment number"),name:"apartment",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("apartment",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"city",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-city",expression:"'shipping-city'"}],staticClass:"form__element form__element--half",attrs:{value:e.shippingDetails.city,label:e.$t("City"),name:"city",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("city",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"region",rules:e.shippingDetails.country_code&&0!==e.regionInformation.length?"required|min:2":null,slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[e.shippingDetails.country_code&&0!==e.regionInformation.length?n("SfSelect",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-state",expression:"'shipping-state'"}],staticClass:"form__element form__element--half form__element--half-even form__select sf-select--underlined",attrs:{value:e.shippingDetails.region,label:e.$t("State/Province"),name:"state",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("region",t)}}},[n("SfSelectOption",{attrs:{value:""}}),e._v(" "),e._l(e.regionInformation,(function(t){return n("SfSelectOption",{key:t.id,attrs:{value:t.abbreviation}},[e._v("\n            "+e._s(t.label)+"\n          ")])}))],2):n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-state",expression:"'shipping-state'"}],staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.region,label:e.$t("State/Province"),disabled:!e.shippingDetails.country_code,name:"state",valid:!!e.shippingDetails.country_code,"error-message":e.shippingDetails.country_code?"":e.$t("Please select a country first")},on:{input:function(t){return e.changeShippingDetails("region",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"country",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfSelect",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-country",expression:"'shipping-country'"}],staticClass:"form__element form__element--half form__select sf-select--underlined",attrs:{value:e.shippingDetails.country_code,label:e.$t("Country"),name:"country",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:e.changeCountry}},[n("SfSelectOption",{attrs:{value:""}}),e._v(" "),e._l(e.countriesList,(function(t){return n("SfSelectOption",{key:t.id,attrs:{value:t.abbreviation}},[e._v("\n            "+e._s(t.label)+"\n          ")])}))],2)]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"zipCode",rules:"required|min:2",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-zipcode",expression:"'shipping-zipcode'"}],staticClass:"form__element form__element--half form__element--half-even",attrs:{value:e.shippingDetails.postcode,label:e.$t("Zip-code"),name:"zipCode",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("postcode",t)}}})]}}],null,!0)}),e._v(" "),n("ValidationProvider",{attrs:{name:"phone",rules:"required|min:8",slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("SfInput",{directives:[{name:"e2e",rawName:"v-e2e",value:"shipping-phone",expression:"'shipping-phone'"}],staticClass:"form__element form__element--half",attrs:{label:e.$t("Phone number"),name:"phone",required:"",valid:!r[0],"error-message":e.$t(r[0])},on:{input:function(t){return e.changeShippingDetails("telephone",t)}},model:{value:e.shippingDetails.telephone,callback:function(t){e.$set(e.shippingDetails,"telephone",t)},expression:"shippingDetails.telephone"}})]}}],null,!0)})],1):e._e(),e._v(" "),e.isAddNewAddressFormVisible?e._e():n("SfButton",{staticClass:"color-light form__action-button form__action-button--add-address",attrs:{type:"submit"},on:{click:e.handleAddNewAddressBtnClick}},[e._v("\n      "+e._s(e.$t("Add new address"))+"\n    ")]),e._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"form__action"},[!e.isShippingDetailsStepCompleted||l?n("SfButton",{directives:[{name:"e2e",rawName:"v-e2e",value:"select-shipping",expression:"'select-shipping'"}],staticClass:"form__action-button",attrs:{disabled:e.isShippingLoading,type:"submit"}},[e._v("\n          "+e._s(e.$t("Select shipping method"))+"\n        ")]):e._e()],1)]),e._v(" "),e.isShippingDetailsStepCompleted&&!l?n("VsfShippingProvider",{attrs:{"shipping-methods":e.shippingMethods},on:{submit:function(t){e.$router.push(e.localeRoute({name:"billing"}))}}}):e._e()],1)]}}])})}),[],!1,null,"4120bf6e",null);t.default=component.exports}}]);
//# sourceMappingURL=4bdb7f7.modern.js.map