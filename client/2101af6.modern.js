(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{424:function(t,e,r){"use strict";r.d(e,"a",(function(){return _})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return m}));r(9);var n=r(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c=t=>"vsf-".concat(t),d=(t,e)=>new Promise(((r,n)=>{try{var l=t();e&&e(null,l),r(l)}catch(t){e&&e(t),n(t)}})),_=(t,e)=>d((()=>JSON.parse(window.localStorage.getItem(c(t)))),e),f=(t,e)=>d((()=>{window.localStorage.removeItem(c(t))}),e),m=(t,e,r)=>d((()=>((t,e)=>{var r=window.localStorage.getItem(t),n=JSON.parse(r),l=e,c=JSON.stringify(o(o({},JSON.parse(JSON.stringify(n))),JSON.parse(JSON.stringify(l))));window.localStorage.setItem(t,c)})(c(t),e)),r)},469:function(t,e,r){"use strict";e.a=t=>{var e,r,n=null===(e=null==t?void 0:t.amount)||void 0===e?void 0:e.value,l=null===(r=null==t?void 0:t.price_incl_tax)||void 0===r?void 0:r.value;return l>0&&l>n?l:n}},472:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(2),l=r(424),o=function(){var t=Object(n.a)((function*(t){var e=yield Object(l.a)("checkout");return!(!e||!e[t])}));return function(e){return t.apply(this,arguments)}}()},571:function(t,e,r){},694:function(t,e,r){"use strict";r(571)},922:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(10),r(11),r(144)),o=r(887),c=r(457),d=r(27),_=r(932),f=r(428),m=r(512),v=r(44),y=r(148),h=r(0),S=r(46),O=r(15),j=r(160),k=r(16),w=r(469),C=r(424),P=r(472),I=Object(h.b)({name:"ReviewOrderAndPayment",components:{SfHeading:l.a,SfTable:o.a,SfCheckbox:c.a,SfButton:d.a,SfDivider:_.a,SfPrice:f.a,SfProperty:m.a,SfLink:v.a,SfImage:y.a,VsfPaymentProvider:()=>r.e(117).then(r.bind(null,940))},setup(){var t=Object(h.l)(null),{cart:e,load:r,setCart:l}=Object(k.a)(),{make:o,loading:c}=Object(j.a)(),{app:d}=Object(h.s)(),_=Object(h.v)(),f=Object(h.l)(!1),m=Object(h.l)(!1);Object(h.g)(Object(n.a)((function*(){(yield Object(P.a)("billing"))||(yield _.push(d.localePath("/checkout/user-account"))),yield r()})));var v=function(){var e=Object(n.a)((function*(){t.value=yield o(),l(null),d.$vsf.$magento.config.state.removeCartId(),yield r(),yield Object(C.c)("checkout");var e=d.localeRoute({name:"thank-you",query:{order:t.value.order.order_number}});yield _.push(e)}));return function(){return e.apply(this,arguments)}}(),y=Object(h.a)((()=>S.a.getDiscounts(e.value))),I=Object(h.a)((()=>y.value.length>0)),$=Object(h.a)((()=>-1*y.value.reduce(((a,t)=>t.value+a),0))),{getMagentoImage:D,imageSizes:T}=Object(O.k)();return{cart:e,cartGetters:S.a,discounts:y,hasDiscounts:I,discountsAmount:$,getShippingMethodPrice:w.a,isPaymentReady:f,loading:c,processOrder:v,products:Object(h.a)((()=>S.a.getItems(e.value))),selectedShippingMethod:Object(h.a)((()=>S.a.getSelectedShippingMethod(e.value))),tableHeaders:["Description","Quantity","Amount"],terms:m,totals:Object(h.a)((()=>S.a.getTotals(e.value))),getAttributes:t=>t.configurable_options||[],getBundles:t=>{var e;return(null===(e=t.bundle_options)||void 0===e?void 0:e.map((b=>b.values)).flat())||[]},getMagentoImage:D,imageSizes:T,getRowTotal:t=>S.a.getItemPrice(t).regular-S.a.getItemPrice(t).special}}}),$=I,D=(r(694),r(8)),component=Object(D.a)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SfHeading",{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{level:3,title:t.$t("Payment")}}),t._v(" "),r("SfTable",{staticClass:"sf-table--bordered table desktop-only"},[r("SfTableHeading",{staticClass:"table__row"},[r("SfTableHeader",{staticClass:"table__header table__image"},[t._v("\n        "+t._s(t.$t("Item"))+"\n      ")]),t._v(" "),t._l(t.tableHeaders,(function(e){return r("SfTableHeader",{key:e,staticClass:"table__header",class:{table__description:"Description"===e}},[t._v("\n        "+t._s(t.$t(e))+"\n      ")])}))],2),t._v(" "),t._l(t.products,(function(e,n){return r("SfTableRow",{key:n,staticClass:"table__row"},[r("SfTableData",{staticClass:"table__image"},[r("SfImage",{attrs:{"image-tag":"nuxt-img",src:t.getMagentoImage(t.cartGetters.getItemImage(e)),alt:t.cartGetters.getItemName(e),width:t.imageSizes.checkout.imageWidth,height:t.imageSizes.checkout.imageHeight,"nuxt-img-config":{fit:"cover"}}})],1),t._v(" "),r("SfTableData",{staticClass:"table__data table__description table__data"},[r("div",{staticClass:"product-title"},[t._v("\n          "+t._s(t.cartGetters.getItemName(e))+"\n        ")]),t._v(" "),r("div",{staticClass:"product-sku"},[t._v("\n          "+t._s(t.cartGetters.getItemSku(e))+"\n        ")]),t._v(" "),t.getAttributes(e).length>0?t._l(t.getAttributes(e),(function(e){return r("p",{key:e.option_label,staticClass:"detail-information"},[r("strong",[t._v(t._s(e.option_label+":"))]),t._v(t._s(""+e.value_label)+"\n          ")])})):t._e(),t._v(" "),t.getBundles(e).length>0?t._l(t.getBundles(e),(function(e){return r("p",{key:e.label,staticClass:"detail-information"},[t._v("\n            "+t._s(e.quantity+"x "+e.label)+"\n          ")])})):t._e()],2),t._v(" "),r("SfTableData",{staticClass:"table__data"},[t._v("\n        "+t._s(t.cartGetters.getItemQty(e))+"\n      ")]),t._v(" "),r("SfTableData",{staticClass:"table__data price"},[r("SfPrice",{staticClass:"product-price",attrs:{regular:t.$fc(t.cartGetters.getItemPrice(e).regular),special:t.cartGetters.getItemPrice(e).special&&t.$fc(t.getRowTotal(e))}})],1)],1)}))],2),t._v(" "),r("div",{staticClass:"summary"},[r("div",{staticClass:"summary__group"},[r("div",{staticClass:"summary__total"},[r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:t.$t("Subtotal"),value:t.$fc(t.totals.subtotal)}}),t._v(" "),t.hasDiscounts?r("SfProperty",{staticClass:"sf-property--full-width sf-property--small property",attrs:{name:t.$t("Discount"),value:t.$fc(t.discountsAmount)}}):t._e()],1),t._v(" "),t.selectedShippingMethod?r("div",{staticClass:"summary__total"},[r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{value:t.$fc(t.getShippingMethodPrice(t.selectedShippingMethod))},scopedSlots:t._u([{key:"name",fn:function(){return[r("span",{staticClass:"sf-property__name"},[t._v("\n              "+t._s(t.selectedShippingMethod.carrier_title)+" ("),r("small",[t._v(t._s(t.selectedShippingMethod.method_title))]),t._v(")\n            ")])]},proxy:!0}],null,!1,323593557)})],1):t._e(),t._v(" "),r("SfDivider"),t._v(" "),r("SfProperty",{staticClass:"sf-property--full-width sf-property--large summary__property-total",attrs:{name:t.$t("Total price"),value:t.$fc(t.totals.total)}}),t._v(" "),r("VsfPaymentProvider",{on:{status:function(e){t.isPaymentReady=!0}}}),t._v(" "),r("SfCheckbox",{directives:[{name:"e2e",rawName:"v-e2e",value:"terms",expression:"'terms'"}],staticClass:"summary__terms",attrs:{name:"terms"},scopedSlots:t._u([{key:"label",fn:function(){return[r("div",{staticClass:"sf-checkbox__label"},[t._v("\n            "+t._s(t.$t("I agree to"))+"\n            "),r("SfLink",{attrs:{link:"#"}},[t._v("\n              "+t._s(t.$t("Terms and conditions"))+"\n            ")])],1)]},proxy:!0}]),model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}}),t._v(" "),r("div",{staticClass:"summary__action"},[r("SfButton",{staticClass:"sf-button color-secondary summary__back-button",attrs:{type:"button"},on:{click:function(e){t.$router.push(""+t.localePath("/checkout/billing"))}}},[t._v("\n          "+t._s(t.$t("Go back"))+"\n        ")]),t._v(" "),r("SfButton",{directives:[{name:"e2e",rawName:"v-e2e",value:"make-an-order",expression:"'make-an-order'"}],staticClass:"summary__action-button",attrs:{disabled:t.loading||!t.isPaymentReady||!t.terms},on:{click:t.processOrder}},[t._v("\n          "+t._s(t.$t("Make an order"))+"\n        ")])],1)],1)])],1)}),[],!1,null,"3526570a",null);e.default=component.exports}}]);
//# sourceMappingURL=2101af6.modern.js.map