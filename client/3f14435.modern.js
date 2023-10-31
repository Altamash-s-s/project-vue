(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{421:function(t,e,r){},422:function(t,e,r){},423:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));var n=r(0),o={description:{ID:1,title:"Description"},reviews:{ID:2,title:"Reviews"},additional_info:{ID:3,title:"Additional info"}};function c(){var t=Object(n.l)(o.description.ID),e=e=>{t.value=e};return{activeTab:t,setActiveTab:e,openNewReviewTab:()=>{e(o.reviews.ID);var t=document.querySelector("#addReview");t&&setTimeout((()=>{t.scrollIntoView({behavior:"smooth",block:"end"})}),500)}}}},431:function(t,e,r){"use strict";var n={getFirstName:t=>t?t.firstname:"",getLastName:t=>t?t.lastname:"",getEmailAddress:t=>t?t.email:"",getFullName:t=>t?"".concat(t.firstname," ").concat(t.lastname):""};e.a=n},440:function(t,e,r){},442:function(t,e,r){},452:function(t,e,r){"use strict";r(421)},453:function(t,e,r){"use strict";r(422)},456:function(t,e,r){"use strict";var n=r(2),o=(r(23),r(0)),c=r(893),l=r(455),d=r(432),f=(r(9),r(5)),v=r(408),m=r(410),_=r(152),h=r(27),y=r(511),O=r(945),S=r(60),w=r(431),j=r(142),C=r(35),T=r(141);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function R(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(v.c)("required",R(R({},m.f),{},{message:"This field is required"})),Object(v.c)("min",R(R({},m.d),{},{message:"The field should have at least {length} characters"})),Object(v.c)("oneOf",R(R({},m.e),{},{message:"Invalid country"}));var I=Object(o.b)({name:"ProductAddReview",components:{SfInput:_.a,SfButton:h.a,SfSelect:y.a,SfTextarea:O.a,ValidationProvider:v.b,ValidationObserver:v.a},emits:["add-review"],setup(t,e){var{emit:r}=e,{routeData:c}=Object(T.a)(),{$recaptcha:l,$config:d}=Object(o.s)(),f=Object(o.l)(void 0!==l&&d.isRecaptcha),{loading:v,loadReviewMetadata:m,error:_}=Object(j.a)(),{isAuthenticated:h,user:y}=Object(C.b)(),O=Object(o.l)(!1),form=Object(o.l)({nickname:"",ratings:{},sku:c.sku,summary:"",text:""}),k=Object(o.l)([]),I=Object(o.a)((()=>S.a.getReviewMetadata([...k.value]))),P=Object(o.a)((()=>{var t=h.value?w.a.getFullName(y.value):form.value.nickname,e=Object.keys(form.value.ratings).map((t=>({id:t,value_id:"".concat(form.value.ratings[t])})));return R(R({},form.value),{},{nickname:t,ratings:e,recaptchaToken:""})}));return Object(o.f)(Object(n.a)((function*(){k.value=yield m()}))),{error:_,form:form,formSubmitValue:P,isAuthenticated:h,loading:v,ratingMetadata:I,reviewSent:O,submitForm:t=>Object(n.a)((function*(){if(P.value.ratings[0].value_id||P.value.ratings[0].id||P.value.nickname||P.value.summary||P.value.sku||P.value.text)try{if(f.value&&l.init(),f.value){var e=yield l.getResponse();P.value.recaptchaToken=e}O.value=!0,r("add-review",P.value),t(),f.value&&l.reset()}catch(t){O.value=!1}})),isRecaptchaEnabled:f}}}),P=(r(453),r(8)),A=Object(P.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.reviewSent&&!t.error.addReview?r("div",[r("p",[t._v(t._s(t.$t("You submitted your review for moderation.")))])]):t.error.addReview?r("div",[r("p",[t._v(t._s(t.error.addReview))])]):r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit,o=e.reset;return[r("form",{staticClass:"form",attrs:{id:"billing-details-form"},on:{submit:function(e){e.preventDefault(),n(t.submitForm(o))}}},[r("div",{staticClass:"form__horizontal"},[t.isAuthenticated?t._e():r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2",name:"name"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("SfInput",{attrs:{name:"name",label:t.$t("Name"),required:"",valid:!n[0],"error-message":t.$t(n[0])},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})]}}],null,!0)})],1),t._v(" "),r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2",name:"summary"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("SfInput",{attrs:{name:"summary",label:t.$t("Title"),required:"",valid:!n[0],"error-message":t.$t(n[0])},model:{value:t.form.summary,callback:function(e){t.$set(t.form,"summary",e)},expression:"form.summary"}})]}}],null,!0)})],1),t._v(" "),t._l(t.ratingMetadata,(function(e){return r("div",{key:e.id,staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required",name:e.name.toLowerCase()},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[r("SfSelect",{staticClass:"form__element form__element--half form__element--half-even form__select sf-select--underlined",attrs:{label:e.name,name:e.name.toLowerCase(),required:"",valid:!o[0],"error-message":t.$t(o[0])},model:{value:t.form.ratings[e.id],callback:function(r){t.$set(t.form.ratings,e.id,r)},expression:"form.ratings[metadata.id]"}},t._l(e.values,(function(e){return r("SfSelectOption",{key:e.id,attrs:{value:e.id}},[t._v("\n              "+t._s(e.label)+"\n            ")])})),1)]}}],null,!0)})],1)})),t._v(" "),r("div",{staticClass:"form__horizontal"},[r("ValidationProvider",{staticClass:"form__element",attrs:{rules:"required|min:2",name:"summary"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("SfTextarea",{attrs:{label:t.$t("Review"),name:"review",cols:60,rows:10,wrap:"soft",required:"",valid:!n[0],"error-message":t.$t(n[0])},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})]}}],null,!0)})],1),t._v(" "),t.isRecaptchaEnabled?r("recaptcha"):t._e(),t._v(" "),r("SfButton",{staticClass:"form__button",attrs:{type:"submit"}},[t._v("\n        "+t._s(t.$t("Add review"))+"\n      ")])],2)]}}])})],1)}),[],!1,null,"12054773",null).exports,$=r(417),x=r(423),D=Object(o.b)({name:"ProductTabs",components:{ProductAddReviewForm:A,HTMLContent:$.a,SfReview:c.a,SfTabs:l.a,SfLoader:d.a},props:{product:{type:[Object,null],default:null},openTab:{type:Number,default:x.a.description.ID}},setup(t,e){var{emit:r}=e,{routeData:c}=Object(T.a)(),l=Object(o.l)(null),d=Object(o.l)(!0),{search:f,addReview:v}=Object(j.a)(),m=()=>({filter:{sku:{eq:c.sku}}}),_=function(){var t=Object(n.a)((function*(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m(),e=yield f(t),r=Array.isArray(e)?e[0]:e;l.value=S.a.getItems(r)}));return function(){return t.apply(this,arguments)}}(),h="",y=e=>{var n=document.querySelector("#tabs");if(!n)return t.openTab;if(n.scrollIntoView({block:"start",behavior:"smooth"}),e===x.a.reviews.ID){var o=m(),c=JSON.stringify(o);h!==c&&(h=c,_(o),d.value=!1)}return r("changeTab",e),e},O=Object(o.a)((()=>y(t.openTab))),w=Object(o.a)((()=>{var e,r;return(null===(r=null===(e=t.product)||void 0===e?void 0:e.description)||void 0===r?void 0:r.html)||""})),C=function(){var t=Object(n.a)((function*(t){yield v(t),document.querySelector("#tabs").scrollIntoView({behavior:"smooth",block:"end"})}));return function(e){return t.apply(this,arguments)}}();return{reviews:l,activeTab:O,changeTab:y,isReviewsLoading:d,getReviewId:S.e,getReviewAuthor:S.c,getReviewDate:S.d,getReviewMessage:S.f,getReviewRating:S.g,productDescription:w,successAddReview:C}}}),B=D,W=Object(P.a)(B,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfTabs",{staticClass:"product__tabs",attrs:{id:"tabs","open-tab":t.activeTab},on:{"click:tab":t.changeTab}},[r("SfTab",{attrs:{title:t.$t("Description")}},[t.productDescription?r("HTMLContent",{staticClass:"product__description",attrs:{content:t.productDescription,tag:"div"}}):t._e()],1),t._v(" "),r("SfTab",{attrs:{title:t.$t("Read reviews")}},[t.isReviewsLoading?r("SfLoader",{attrs:{loading:t.isReviewsLoading}}):r("div",[t._l(t.reviews,(function(e){return r("SfReview",{key:t.getReviewId(e),staticClass:"product__review",attrs:{author:t.getReviewAuthor(e),date:t.getReviewDate(e),message:t.getReviewMessage(e),"max-rating":5,rating:t.getReviewRating(e),"char-limit":250,"read-more-text":"Read more","hide-full-text":"Read less"}})})),t._v(" "),r("div",{attrs:{id:"addReview"}},[r("ProductAddReviewForm",{on:{"add-review":t.successAddReview}})],1)],2)],1),t._v(" "),r("SfTab",{staticClass:"product__additional-info",attrs:{title:t.$t("Additional Information")}},[r("div",{staticClass:"product__additional-info"},[r("p",{staticClass:"product__additional-info__title"},[t._v("\n        "+t._s(t.$t("Instruction1"))+"\n      ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n        "+t._s(t.$t("Instruction2"))+"\n      ")]),t._v(" "),r("p",{staticClass:"product__additional-info__paragraph"},[t._v("\n        "+t._s(t.$t("Instruction3"))+"\n      ")])])])],1)}),[],!1,null,null,null);e.a=W.exports},459:function(t,e,r){"use strict";var n=r(0),o=r(27),c=r(59),l=Object(n.b)({name:"AddToWishlist",components:{SfButton:o.a,SvgImage:c.a},props:{component:{type:String,default:"span"},isInWishlist:{type:Boolean,default:!1},wishlistIcon:{type:String,default:"heart"},isInWishlistIcon:{type:String,default:"heart_fill"},isShow:{type:Boolean,default:!1}},setup:t=>({actionText:Object(n.a)((()=>t.isInWishlist?"Remove from Wishlist":"Add to Wishlist"))})}),d=(r(452),r(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShow?r(t.component,{tag:"component",staticClass:"add-to-wishlist",on:{click:function(e){return t.$emit("addToWishlist")}}},[r("SvgImage",{attrs:{icon:t.isInWishlist?t.isInWishlistIcon:t.wishlistIcon,label:t.$t("Wishlist"),width:"32",height:"32"}}),t._v(" "),r("SfButton",{staticClass:"sf-button--text"},[t._v("\n    "+t._s(t.$t(t.actionText))+"\n  ")])],1):t._e()}),[],!1,null,"9f469876",null);e.a=component.exports},460:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(0),o=r(80),c=r(15);function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",{getMagentoImage:r,imageSizes:l}=Object(c.k)(),d=Object(n.a)((()=>Object(o.d)(t.value).map((img=>({mobile:{url:r(img.small)},desktop:{url:r(img.normal)},big:{url:r(img.big)},alt:t.value.name,placeholder:e})))));return{productGallery:d,imageSizes:l}}},480:function(t,e,r){"use strict";r(440)},496:function(t,e,r){"use strict";r(442)},513:function(t,e,r){"use strict";var n=r(374),o=r(28),c=r(27),l={name:"SfColor",inject:{components:{default:{SfBadge:n.a,SfIcon:o.a,SfButton:c.a}}},props:{color:{type:String,default:""},selected:{type:Boolean,default:!1},hasBadge:{type:Boolean,default:!0}}},d=(r(480),r(8)),component=Object(d.a)(l,(function(t,e){var r=e._c;return r(e.injections.components.SfButton,e._g(e._b({tag:"component",class:[e.data.class,e.data.staticClass,"sf-button--pure sf-color",{"is-active":e.props.selected}],style:Object.assign({},e.data.style,e.data.staticStyle,{"--color-background":e.props.color}),attrs:{"aria-pressed":e.props.selected.toString(),"data-testid":e.props.color}},"component",e.data.attrs,!1),e.listeners),[r("transition",{attrs:{name:"sf-bounce"}},[e._t("badge",(function(){return[r(e.injections.components.SfBadge,{tag:"component",staticClass:"sf-color__badge smartphone-only",class:{"display-none":!e.props.hasBadge||!e.props.selected&&e.props.hasBadge}},[r(e.injections.components.SfIcon,{tag:"component",attrs:{size:"16px",color:"white",icon:"check","aria-hidden":"true"}})],1)]}),null,{props:e.props})],2)],1)}),[],!0,null,null,null);e.a=component.exports},557:function(t,e,r){"use strict";var n=r(27),o=r(462),c={name:"SfAddToCart",components:{SfButton:n.a,SfQuantitySelector:o.a},model:{prop:"qty"},props:{disabled:{type:Boolean,default:!1},qty:{type:[Number,String],default:1}}},l=(r(496),r(8)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sf-add-to-cart"},[t._t("quantity-select-input",(function(){return[r("SfQuantitySelector",{staticClass:"sf-add-to-cart__select-quantity",attrs:{qty:t.qty,"aria-label":"Quantity",disabled:t.disabled},on:{input:function(e){return t.$emit("input",e)}}})]}),null,{qty:t.qty}),t._v(" "),t._t("add-to-cart-btn",(function(){return[r("SfButton",t._g({staticClass:"sf-add-to-cart__button",attrs:{disabled:t.disabled}},t.$listeners),[t._v("\n      Add to cart\n    ")])]}))],2)}),[],!1,null,null,null);e.a=component.exports},674:function(t,e,r){},881:function(t,e,r){"use strict";r(674)},913:function(t,e,r){"use strict";r.r(e);r(9);var n=r(5),o=r(143),c=r(557),l=r(27),d=r(513),f=r(946),v=r(144),m=r(432),_=r(428),h=r(429),y=r(511),O=r(947),S=r(0),w=r(80),j=r(60),C=r(16),T=r(61),k=r(59),R=r(417),I=r(459),P=r(35);var A=r(456),$=r(460),x=r(423),D=r(141);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function W(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L=Object(S.b)({name:"ConfigurableProduct",components:{HTMLContent:R.a,LazyHydrate:o.a,SfAddToCart:c.a,SfButton:l.a,SfColor:d.a,SfGallery:f.a,SfHeading:v.a,SfLoader:m.a,SfPrice:_.a,SfRating:h.a,SfSelect:y.a,SfAlert:O.a,AddToWishlist:I.a,SvgImage:k.a,ProductTabs:A.a},transition:"fade",props:{product:{type:[Object,null],default:null},isFetching:{type:Boolean,default:!0}},setup(t,e){var{emit:r}=e,n=Object(S.l)(1),o=Object(S.p)(t,"product"),c=Object(S.u)(),l=Object(S.v)(),{routeData:d}=Object(D.a)(),{addItem:f,error:v,loading:m,canAddToCart:_}=Object(C.b)(),{productGallery:h,imageSizes:y}=Object($.a)(o),{activeTab:O,setActiveTab:k,openNewReviewTab:R}=Object(x.b)(),{isAuthenticated:I}=Object(P.b)(),{addOrRemoveItem:A,isInWishlist:B}=Object(T.a)(),{app:L}=Object(S.s)(),z=Object(S.a)((()=>{var e,r;return(null===(r=null===(e=t.product)||void 0===e?void 0:e.short_description)||void 0===r?void 0:r.html)||""})),E=Object(S.a)((()=>{var e,r;return null!==(r=null===(e=t.product)||void 0===e?void 0:e.configurable_options)&&void 0!==r?r:[]})),N=Object(S.l)(c.value.query),F=Object(S.a)((()=>function(t){var e,r,n=null!==(r=null===(e=null==t?void 0:t.configurable_product_options_selection)||void 0===e?void 0:e.variant)&&void 0!==r?r:t,{regular:o}=Object(w.g)(n);return o}(t.product))),M=Object(S.a)((()=>function(t){var e,r,n=null!==(r=null===(e=null==t?void 0:t.configurable_product_options_selection)||void 0===e?void 0:e.variant)&&void 0!==r?r:t,{special:o}=Object(w.g)(n);return o}(t.product))),V=Object(S.a)((()=>Object(j.h)(t.product))),G=Object(S.a)((()=>Object(j.b)(t.product))),H=Object(S.a)((()=>{var t,e;return null===(e=null===(t=v.value)||void 0===t?void 0:t.addItem)||void 0===e?void 0:e.message}));return{addItem:f,addItemToWishlist:A,canAddToCart:_,configurableOptions:E,updateProductConfiguration:(label,t)=>{if(N.value[label]!==t){N.value[label]=t;var e=l.resolve({path:"".concat(L.localePath(window.location.pathname)),query:W({},N.value)});window.history.pushState({},null,e.href),r("fetchProduct",{query:{filter:{sku:{eq:d.sku}},configurations:Object.entries(N.value).map((t=>t[1]))}})}},isAuthenticated:I,isInWishlist:Object(S.a)((()=>B({product:t.product}))),isCartLoading:m,productConfiguration:N,productGallery:h,getProductName:w.f,getProductSwatchData:w.j,productPrice:F,productShortDescription:z,productSpecialPrice:M,qty:n,totalReviews:V,averageRating:G,imageSizes:y,setActiveTab:k,openNewReviewTab:R,activeTab:O,TabsConfig:x.a,addToCartError:H}}}),z=(r(881),r(8)),component=Object(z.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("SfLoader",{staticClass:"loading--product-gallery",attrs:{loading:t.isFetching}},[r("SfGallery",{staticClass:"product__gallery",attrs:{images:t.productGallery,"image-width":t.imageSizes.productGallery.imageWidth,"image-height":t.imageSizes.productGallery.imageHeight,"thumb-width":t.imageSizes.productGallery.thumbWidth,"thumb-height":t.imageSizes.productGallery.thumbHeight,"enable-zoom":!0,"image-tag":"nuxt-img","thumb-image-tag":"nuxt-img","nuxt-img-config":{fit:"cover"},"thumb-nuxt-img-config":{fit:"cover"}}})],1),t._v(" "),r("div",{staticClass:"product__info"},[r("div",{staticClass:"product__header"},[r("SfHeading",{staticClass:"sf-heading--no-underline sf-heading--left",attrs:{title:t.getProductName(t.product),level:3}}),t._v(" "),r("SvgImage",{staticClass:"product__drag-icon smartphone-only",attrs:{icon:"drag",width:"40",height:"40"}})],1),t._v(" "),r("div",{staticClass:"product__price-and-rating"},[r("SfPrice",{attrs:{regular:t.$fc(t.productPrice),special:t.productSpecialPrice&&t.$fc(t.productSpecialPrice)}}),t._v(" "),r("div",[r("div",{staticClass:"product__rating"},[r("SfRating",{attrs:{score:t.averageRating,max:5}}),t._v(" "),t.totalReviews?r("a",{staticClass:"product__count",attrs:{href:"#"}},[t._v("\n            ("+t._s(t.totalReviews)+")\n          ")]):t._e()],1),t._v(" "),r("SfButton",{staticClass:"sf-button--text",on:{click:function(e){return t.setActiveTab(t.TabsConfig.reviews.ID)}}},[t._v("\n          "+t._s(t.$t("Read all reviews"))+"\n        ")]),t._v("\n        |\n        "),r("SfButton",{staticClass:"sf-button--text",on:{click:t.openNewReviewTab}},[t._v("\n          "+t._s(t.$t("Add a review"))+"\n        ")])],1)],1),t._v(" "),null!==t.product?r("div",[t.productShortDescription?r("HTMLContent",{staticClass:"product__description desktop-only",attrs:{content:t.productShortDescription,tag:"p"}}):t._e(),t._v(" "),t._l(t.configurableOptions,(function(option){return["color"===option.attribute_code?r("div",{key:option.uid,staticClass:"product__colors"},[r("p",{staticClass:"product__color-label"},[t._v("\n            "+t._s(option.label)+":\n          ")]),t._v(" "),t._l(option.values,(function(e){return r("SfColor",{key:e.uid,staticClass:"product__color",attrs:{color:t.getProductSwatchData(e.swatch_data),"color-uid":e.uid,selected:t.productConfiguration[option.attribute_uid]===e.uid},on:{click:function(){return t.updateProductConfiguration(option.attribute_uid,e.uid)}}})}))],2):r("SfSelect",{key:option.uid,staticClass:"sf-select--underlined product__select-size",attrs:{value:t.productConfiguration[option.attribute_uid],label:option.label,required:!0},on:{input:function(e){return t.updateProductConfiguration(option.attribute_uid,e)}}},[r("SfSelectOption",{attrs:{value:""}}),t._v(" "),t._l(option.values,(function(e){return r("SfSelectOption",{key:e.uid,attrs:{value:e.uid}},[t._v("\n            "+t._s(e.label)+"\n          ")])}))],2)]})),t._v(" "),r("SfAddToCart",{directives:[{name:"e2e",rawName:"v-e2e",value:"product_add-to-cart",expression:"'product_add-to-cart'"}],staticClass:"product__add-to-cart",attrs:{disabled:t.isCartLoading||!t.canAddToCart(t.product,t.qty)||t.isFetching},scopedSlots:t._u([{key:"add-to-cart-btn",fn:function(){return[r("SfButton",{staticClass:"sf-add-to-cart__button",attrs:{disabled:t.isCartLoading||!t.canAddToCart(t.product,t.qty)||t.isFetching},on:{click:function(e){t.addItem({product:t.product,quantity:parseInt(t.qty),productConfiguration:t.productConfiguration})}}},[t._v("\n            "+t._s(t.$t("Add to cart"))+"\n          ")])]},proxy:!0}],null,!1,4235998122),model:{value:t.qty,callback:function(e){t.qty=e},expression:"qty"}}),t._v(" "),r("SfAlert",{staticClass:"product__add-to-cart-error",style:{visibility:t.addToCartError?"visible":"hidden"},attrs:{message:t.$t(t.addToCartError),type:"danger"}}),t._v(" "),r("div",{staticClass:"product__additional-actions"},[r("AddToWishlist",{attrs:{"is-in-wishlist":t.isInWishlist,"is-show":t.isAuthenticated},on:{addToWishlist:function(e){return t.addItemToWishlist({product:t.product})}}})],1)],2):t._e(),t._v(" "),r("LazyHydrate",{attrs:{"when-idle":""}},[r("ProductTabs",{attrs:{product:t.product,"open-tab":t.activeTab},on:{changeTab:function(e){return t.setActiveTab(e)}}})],1)],1)],1)}),[],!1,null,"52b23b8e",null);e.default=component.exports}}]);
//# sourceMappingURL=3f14435.modern.js.map