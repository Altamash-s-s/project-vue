(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{418:function(t,e,n){},434:function(t,e,n){},437:function(t,e,n){},445:function(t,e,n){"use strict";n(418)},465:function(t,e,n){"use strict";n(434)},469:function(t,e,n){"use strict";e.a=t=>{var e,n,r=null===(e=null==t?void 0:t.amount)||void 0===e?void 0:e.value,o=null===(n=null==t?void 0:t.price_incl_tax)||void 0===n?void 0:n.value;return o>0&&o>r?o:r}},470:function(t,e,n){"use strict";n(437)},500:function(t,e,n){"use strict";var r=n(2),o=n(27),c=n(152),l=n(0),d=n(46),f=n(16),v=Object(l.b)({name:"CouponCode",components:{SfButton:o.a,SfInput:c.a},setup(){var{cart:t,applyCoupon:e,removeCoupon:n,error:o}=Object(f.b)(),c=Object(l.l)(""),v=Object(l.a)((()=>{var e;return null===(e=d.a.getAppliedCoupon(t.value))||void 0===e?void 0:e.code})),h=Object(l.a)((()=>void 0!==v.value)),_=Object(l.a)((()=>Object.values(o.value).some((t=>null!==t)))),m=Object(l.a)((()=>o.value.applyCoupon||o.value.removeCoupon||{message:"",name:"apply-coupon"})),C=function(){var t=Object(r.a)((function*(){var t=h.value?n({}):e({couponCode:c.value});yield t,c.value=""}));return function(){return t.apply(this,arguments)}}();return{couponCodeUserInput:c,couponCodeAppliedToCart:v,isCouponCodeApplied:h,applyCouponMsg:m,applyOrRemoveCoupon:C,hasAnyError:_}}}),h=v,_=(n(465),n(8)),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isCouponCodeApplied?n("span",[t._v("\n    "+t._s(t.$t("Applied Coupon"))+":\n    "),n("span",{staticClass:"applied-coupon-code",domProps:{textContent:t._s(t.couponCodeAppliedToCart)}})]):t._e(),t._v(" "),n("div",{staticClass:"coupon-code"},[n("SfInput",{staticClass:"sf-input--filled coupon-code__input",attrs:{"data-testid":"promo-code",name:"couponCode",disabled:t.isCouponCodeApplied,label:t.$t("Enter promo code"),"error-message":t.$t(t.applyCouponMsg.message),valid:!t.hasAnyError},model:{value:t.couponCodeUserInput,callback:function(e){t.couponCodeUserInput=e},expression:"couponCodeUserInput"}}),t._v(" "),n("SfButton",{staticClass:"coupon-code__button",on:{click:t.applyOrRemoveCoupon}},[t._v("\n      "+t._s(t.$t(t.isCouponCodeApplied?"Remove":"Apply"))+"\n    ")])],1)])}),[],!1,null,"751c703c",null);e.a=component.exports},512:function(t,e,n){"use strict";var r={name:"SfProperty",props:{name:{type:String,default:""},value:{type:[String,Number],default:""}}},o=(n(445),n(8)),component=Object(o.a)(r,(function(t,e){var n=e._c;return n("div",e._g(e._b({class:[e.data.class,e.data.staticClass,"sf-property"],style:[e.data.style,e.data.staticStyle]},"div",e.data.attrs,!1),e.listeners),[e._t("name",(function(){return[n("span",{staticClass:"sf-property__name"},[e._v("\n      "+e._s(e.props.name)+"\n    ")])]}),null,{props:e.props}),e._v(" "),e._t("value",(function(){return[n("span",{staticClass:"sf-property__value"},[e._v("\n      "+e._s(e.props.value)+"\n    ")])]}),null,{props:e.props})],2)}),[],!0,null,null,null);e.a=component.exports},565:function(t,e,n){},566:function(t,e,n){},567:function(t,e,n){},682:function(t,e,n){"use strict";var r={name:"SfCharacteristic",components:{SfIcon:n(28).a},props:{colorIcon:{type:String,default:""},sizeIcon:{type:String,default:""},icon:{type:[String,Array],default:""},title:{type:String,default:""},description:{type:String,default:""}}},o=(n(470),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-characteristic"},[t._t("icon",(function(){return[n("div",{staticClass:"sf-characteristic__icon"},[n("SfIcon",{attrs:{"aria-hidden":"true",color:t.colorIcon,size:t.sizeIcon,icon:t.icon}})],1)]}),null,{colorIcon:t.colorIcon,sizeIcon:t.sizeIcon,icon:t.icon}),t._v(" "),t._t("text",(function(){return[n("div",{staticClass:"sf-characteristic__text"},[t._t("title",(function(){return[n("div",{staticClass:"sf-characteristic__title"},[t._v(t._s(t.title))])]}),null,{title:t.title}),t._v(" "),t._t("description",(function(){return[n("div",{staticClass:"sf-characteristic__description"},[t._v(t._s(t.description))])]}),null,{description:t.description})],2)]}),null,{title:t.title,description:t.description})],2)}),[],!1,null,null,null);e.a=component.exports},689:function(t,e,n){"use strict";n(565)},690:function(t,e,n){"use strict";n(566)},691:function(t,e,n){"use strict";n(567)},900:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(21),n(17),n(4)),c={name:"SfStep",inject:["stepsData"],props:{name:{type:String,default:""}},computed:{internalName(){return this.stepsData?this.stepsData.name:null},index(){return this.stepsData?this.stepsData.index:null},active(){return this.internalName===this.name}},created(){this.stepsData.updateSteps(this.name)}},l=n(8),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sf-step"},[t.active?t._t("default",null,{index:t.index}):t._e()],2)}),[],!1,null,null,null).exports,f=n(27);o.default.component("SfStep",d);var v={name:"SfSteps",components:{SfButton:f.a},model:{prop:"active",event:"change"},provide(){var t={};return Object.defineProperty(t,"index",{enumerable:!1,get:()=>this.active}),Object.defineProperty(t,"name",{enumerable:!1,get:()=>this.steps[this.active]}),Object.defineProperty(t,"updateSteps",{enumerable:!1,value:this.updateSteps}),{stepsData:t}},props:{active:{type:Number,default:0},canGoBack:{type:Boolean,default:!0}},data:()=>({steps:[]}),computed:{parsedSteps(){return this.steps?this.steps.map(((t,e)=>({index:e,step:t,done:e<this.active,disabled:!this.canGoBack&&e<this.active,current:e===this.active}))):[]},progress(){return{"--_steps-progress-width":"".concat(100/this.steps.length,"%"),"--_steps-progress-active-step":this.active+1}}},methods:{updateSteps(t){this.steps.includes(t)||this.steps.push(t)},stepClick(t){var{index:e,disabled:n}=t;n||this.$emit("change",e)}}},h=(n(690),Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-steps"},[n("div",{staticClass:"sf-steps__header"},[t._l(t.parsedSteps,(function(e){return t._t("steps",(function(){return[n("SfButton",{key:e.index,staticClass:"sf-button--pure",class:{"sf-steps__step":!0,"is-done":e.done,current:e.current,"is-disabled":e.disabled},attrs:{"data-testid":"steps-button"},on:{click:function(n){return t.stepClick(e)}}},[n("span",{staticClass:"sf-steps__title"},[t._v(t._s(e.step))])])]}),{stepClick:t.stepClick},{step:e})})),t._v(" "),n("div",{staticClass:"sf-steps__progress",style:t.progress,attrs:{"data-testid":"steps-progress"}})],2),t._v(" "),n("div",{staticClass:"sf-steps__content"},[t._t("default")],2)])}),[],!1,null,null,null).exports),_=n(0),m=n(46),C=n(16),y=n(144),S=n(512),O=n(682),j=n(469),k=n(500),I=[{title:"Safety",description:"It carefully packaged with a personal touch",icon:"safety"},{title:"Easy shipping",description:"You’ll receive dispatch confirmation and an arrival date",icon:"shipping"},{title:"Changed your mind?",description:"Rest assured, we offer free returns within 30 days",icon:"return"}],x=Object(_.b)({name:"CartPreview",components:{SfHeading:y.a,SfProperty:S.a,SfCharacteristic:O.a,CouponCode:k.a},setup(){var{cart:t,removeItem:e,updateItemQty:n}=Object(C.a)(),r=Object(_.l)(!1),o=Object(_.a)((()=>m.a.getItems(t.value))),c=Object(_.a)((()=>m.a.getTotalItems(t.value))),l=Object(_.a)((()=>m.a.getTotals(t.value))),d=Object(_.a)((()=>-m.a.getDiscountAmount(t.value))),f=Object(_.a)((()=>Math.abs(d.value)>0)),v=Object(_.a)((()=>m.a.getSelectedShippingMethod(t.value)));return{cart:t,discount:d,hasDiscounts:f,totalItems:c,listIsHidden:r,products:o,totals:l,removeItem:e,updateItemQty:n,cartGetters:m.a,getShippingMethodPrice:j.a,characteristics:I,selectedShippingMethod:v}}}),P=(n(689),Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"highlighted"},[n("SfHeading",{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{level:3,title:t.$t("Order summary")}})],1),t._v(" "),n("div",{staticClass:"highlighted"},[n("SfProperty",{staticClass:"sf-property--full-width sf-property--large property",attrs:{name:t.$t("Products"),value:t.totalItems}}),t._v(" "),n("SfProperty",{class:["sf-property--full-width","sf-property--large property"],attrs:{name:t.$t("Subtotal"),value:t.$fc(t.totals.subtotal)}}),t._v(" "),t.hasDiscounts?n("SfProperty",{staticClass:"sf-property--full-width sf-property--small property",attrs:{name:t.$t("Discount"),value:t.$fc(t.discount)}}):t._e(),t._v(" "),t.selectedShippingMethod?n("SfProperty",{staticClass:"sf-property--full-width sf-property--large property",attrs:{name:t.$t("Shipping"),value:t.$fc(t.getShippingMethodPrice(t.selectedShippingMethod))}}):t._e(),t._v(" "),n("SfProperty",{staticClass:"sf-property--full-width sf-property--large property-total",attrs:{name:t.$t("Total"),value:t.$fc(t.totals.total)}})],1),t._v(" "),n("CouponCode",{staticClass:"highlighted"}),t._v(" "),n("div",{staticClass:"highlighted"},t._l(t.characteristics,(function(t){return n("SfCharacteristic",{key:t.title,staticClass:"characteristic",attrs:{title:t.title,description:t.description,icon:t.icon}})})),1)],1)}),[],!1,null,"a1062bd4",null).exports),$=Object(_.b)({name:"CheckoutPage",components:{SfSteps:h,CartPreview:P},setup(){var t=Object(_.u)(),{app:e}=Object(_.s)(),{path:path}=t.value,n=Object(_.v)(),{cart:o,load:c}=Object(C.a)(),l=Object(_.a)((()=>m.a.getItems(o.value))),d=Object(_.a)((()=>path.split("/").pop())),f=Object(_.l)([{title:"User Account",url:"user-account"},{title:"Shipping",url:"shipping"},{title:"Billing",url:"billing"},{title:"Payment",url:"payment"}]),v=Object(_.a)((()=>f.value.findIndex((t=>t.url===d.value)))),h=Object(_.a)((()=>"thank-you"===d.value)),y=function(){var t=Object(r.a)((function*(t){if(t<=v.value){var{url:r}=f.value[t];yield n.push("".concat(e.localePath("/checkout/".concat(r))))}}));return function(e){return t.apply(this,arguments)}}();return Object(_.g)(Object(r.a)((function*(){yield c(),0===l.value.length&&"thank-you"!==d.value&&(yield n.push(e.localePath("/")))}))),{handleStepClick:y,STEPS:f,currentStepIndex:v,isThankYou:h,currentStep:d}}}),w=$,A=(n(691),Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"checkout"}},[n("div",{staticClass:"checkout"},[n("div",{staticClass:"checkout__main"},[t.isThankYou?n("nuxt-child"):n("SfSteps",{class:{checkout__steps:!0},attrs:{active:t.currentStepIndex},on:{change:t.handleStepClick}},t._l(t.STEPS,(function(e,r){return n("SfStep",{key:r,attrs:{name:t.$t(e.title),active:1,"can-go-back":""}},[n("nuxt-child")],1)})),1)],1),t._v(" "),t.isThankYou?t._e():n("div",{staticClass:"checkout__aside desktop-only"},[n("transition",{attrs:{name:"fade"}},[n("CartPreview",{key:"order-summary"})],1)],1)])])}),[],!1,null,"24d593f8",null));e.default=A.exports}}]);
//# sourceMappingURL=2495c39.modern.js.map