(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1008:function(t,e,r){"use strict";r.r(e);var n=r(2),c=(r(5),r(20),r(13),r(26),r(199)),o=r(971),l=r(532),f=r(49),d=r(1018),m=r(503),_=r(589),v=r(68),y=r(205),h=r(0),S=r(73),O=r(30),w=r(221),k=r(31),j=r(544),C=r(499),P=r(547),x=Object(h.b)({name:"ReviewOrderAndPayment",components:{SfHeading:c.a,SfTable:o.a,SfCheckbox:l.a,SfButton:f.a,SfDivider:d.a,SfPrice:m.a,SfProperty:_.a,SfLink:v.a,SfImage:y.a,VsfPaymentProvider:function(){return r.e(118).then(r.bind(null,1026))}},setup:function(){var t=Object(h.l)(null),e=Object(k.a)(),r=e.cart,c=e.load,o=e.setCart,l=Object(w.a)(),f=l.make,d=l.loading,m=Object(h.s)().app,_=Object(h.v)(),v=Object(h.l)(!1),y=Object(h.l)(!1);Object(h.g)(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)("billing");case 2:if(t.sent){t.next=6;break}return t.next=6,_.push(m.localePath("/checkout/user-account"));case 6:return t.next=8,c();case 8:case"end":return t.stop()}}),t)}))));var x=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return t.value=e.sent,o(null),m.$vsf.$magento.config.state.removeCartId(),e.next=7,c();case 7:return e.next=9,Object(C.c)("checkout");case 9:return r=m.localeRoute({name:"thank-you",query:{order:t.value.order.order_number}}),e.next=12,_.push(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=Object(h.a)((function(){return S.a.getDiscounts(r.value)})),$=Object(h.a)((function(){return I.value.length>0})),D=Object(h.a)((function(){return-1*I.value.reduce((function(a,t){return t.value+a}),0)})),T=Object(O.k)(),R=T.getMagentoImage,M=T.imageSizes;return{cart:r,cartGetters:S.a,discounts:I,hasDiscounts:$,discountsAmount:D,getShippingMethodPrice:j.a,isPaymentReady:v,loading:d,processOrder:x,products:Object(h.a)((function(){return S.a.getItems(r.value)})),selectedShippingMethod:Object(h.a)((function(){return S.a.getSelectedShippingMethod(r.value)})),tableHeaders:["Description","Quantity","Amount"],terms:y,totals:Object(h.a)((function(){return S.a.getTotals(r.value)})),getAttributes:function(t){return t.configurable_options||[]},getBundles:function(t){var e;return(null===(e=t.bundle_options)||void 0===e?void 0:e.map((function(b){return b.values})).flat())||[]},getMagentoImage:R,imageSizes:M,getRowTotal:function(t){return S.a.getItemPrice(t).regular-S.a.getItemPrice(t).special}}}}),I=x,$=(r(772),r(9)),component=Object($.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SfHeading",{staticClass:"sf-heading--left sf-heading--no-underline title",attrs:{level:3,title:t.$t("Payment")}}),t._v(" "),r("SfTable",{staticClass:"sf-table--bordered table desktop-only"},[r("SfTableHeading",{staticClass:"table__row"},[r("SfTableHeader",{staticClass:"table__header table__image"},[t._v("\n        "+t._s(t.$t("Item"))+"\n      ")]),t._v(" "),t._l(t.tableHeaders,(function(e){return r("SfTableHeader",{key:e,staticClass:"table__header",class:{table__description:"Description"===e}},[t._v("\n        "+t._s(t.$t(e))+"\n      ")])}))],2),t._v(" "),t._l(t.products,(function(e,n){return r("SfTableRow",{key:n,staticClass:"table__row"},[r("SfTableData",{staticClass:"table__image"},[r("SfImage",{attrs:{"image-tag":"nuxt-img",src:t.getMagentoImage(t.cartGetters.getItemImage(e)),alt:t.cartGetters.getItemName(e),width:t.imageSizes.checkout.imageWidth,height:t.imageSizes.checkout.imageHeight,"nuxt-img-config":{fit:"cover"}}})],1),t._v(" "),r("SfTableData",{staticClass:"table__data table__description table__data"},[r("div",{staticClass:"product-title"},[t._v("\n          "+t._s(t.cartGetters.getItemName(e))+"\n        ")]),t._v(" "),r("div",{staticClass:"product-sku"},[t._v("\n          "+t._s(t.cartGetters.getItemSku(e))+"\n        ")]),t._v(" "),t.getAttributes(e).length>0?t._l(t.getAttributes(e),(function(e){return r("p",{key:e.option_label,staticClass:"detail-information"},[r("strong",[t._v(t._s(e.option_label+":"))]),t._v(t._s(""+e.value_label)+"\n          ")])})):t._e(),t._v(" "),t.getBundles(e).length>0?t._l(t.getBundles(e),(function(e){return r("p",{key:e.label,staticClass:"detail-information"},[t._v("\n            "+t._s(e.quantity+"x "+e.label)+"\n          ")])})):t._e()],2),t._v(" "),r("SfTableData",{staticClass:"table__data"},[t._v("\n        "+t._s(t.cartGetters.getItemQty(e))+"\n      ")]),t._v(" "),r("SfTableData",{staticClass:"table__data price"},[r("SfPrice",{staticClass:"product-price",attrs:{regular:t.$fc(t.cartGetters.getItemPrice(e).regular),special:t.cartGetters.getItemPrice(e).special&&t.$fc(t.getRowTotal(e))}})],1)],1)}))],2),t._v(" "),r("div",{staticClass:"summary"},[r("div",{staticClass:"summary__group"},[r("div",{staticClass:"summary__total"},[r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{name:t.$t("Subtotal"),value:t.$fc(t.totals.subtotal)}}),t._v(" "),t.hasDiscounts?r("SfProperty",{staticClass:"sf-property--full-width sf-property--small property",attrs:{name:t.$t("Discount"),value:t.$fc(t.discountsAmount)}}):t._e()],1),t._v(" "),t.selectedShippingMethod?r("div",{staticClass:"summary__total"},[r("SfProperty",{staticClass:"sf-property--full-width property",attrs:{value:t.$fc(t.getShippingMethodPrice(t.selectedShippingMethod))},scopedSlots:t._u([{key:"name",fn:function(){return[r("span",{staticClass:"sf-property__name"},[t._v("\n              "+t._s(t.selectedShippingMethod.carrier_title)+" ("),r("small",[t._v(t._s(t.selectedShippingMethod.method_title))]),t._v(")\n            ")])]},proxy:!0}],null,!1,323593557)})],1):t._e(),t._v(" "),r("SfDivider"),t._v(" "),r("SfProperty",{staticClass:"sf-property--full-width sf-property--large summary__property-total",attrs:{name:t.$t("Total price"),value:t.$fc(t.totals.total)}}),t._v(" "),r("VsfPaymentProvider",{on:{status:function(e){t.isPaymentReady=!0}}}),t._v(" "),r("SfCheckbox",{directives:[{name:"e2e",rawName:"v-e2e",value:"terms",expression:"'terms'"}],staticClass:"summary__terms",attrs:{name:"terms"},scopedSlots:t._u([{key:"label",fn:function(){return[r("div",{staticClass:"sf-checkbox__label"},[t._v("\n            "+t._s(t.$t("I agree to"))+"\n            "),r("SfLink",{attrs:{link:"#"}},[t._v("\n              "+t._s(t.$t("Terms and conditions"))+"\n            ")])],1)]},proxy:!0}]),model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}}),t._v(" "),r("div",{staticClass:"summary__action"},[r("SfButton",{staticClass:"sf-button color-secondary summary__back-button",attrs:{type:"button"},on:{click:function(e){t.$router.push(""+t.localePath("/checkout/billing"))}}},[t._v("\n          "+t._s(t.$t("Go back"))+"\n        ")]),t._v(" "),r("SfButton",{directives:[{name:"e2e",rawName:"v-e2e",value:"make-an-order",expression:"'make-an-order'"}],staticClass:"summary__action-button",attrs:{disabled:t.loading||!t.isPaymentReady||!t.terms},on:{click:t.processOrder}},[t._v("\n          "+t._s(t.$t("Make an order"))+"\n        ")])],1)],1)])],1)}),[],!1,null,"3526570a",null);e.default=component.exports},499:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"c",(function(){return m})),r.d(e,"b",(function(){return _}));r(14),r(12),r(15),r(16),r(17);var n=r(4);r(13);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(t){return"vsf-".concat(t)},f=function(t,e){return new Promise((function(r,n){try{var c=t();e&&e(null,c),r(c)}catch(t){e&&e(t),n(t)}}))},d=function(t,e){return f((function(){return JSON.parse(window.localStorage.getItem(l(t)))}),e)},m=function(t,e){return f((function(){window.localStorage.removeItem(l(t))}),e)},_=function(t,e,r){return f((function(){return function(t,e){var r=window.localStorage.getItem(t),n=JSON.parse(r),c=e,l=JSON.stringify(o(o({},JSON.parse(JSON.stringify(n))),JSON.parse(JSON.stringify(c))));window.localStorage.setItem(t,l)}(l(t),e)}),r)}},544:function(t,e,r){"use strict";e.a=function(t){var e,r,n=null===(e=null==t?void 0:t.amount)||void 0===e?void 0:e.value,c=null===(r=null==t?void 0:t.price_incl_tax)||void 0===r?void 0:r.value;return c>0&&c>n?c:n}},547:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(2),c=(r(5),r(499)),o=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)("checkout");case 2:return r=t.sent,t.abrupt("return",!(!r||!r[e]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},649:function(t,e,r){},772:function(t,e,r){"use strict";r(649)}}]);
//# sourceMappingURL=fd89394.js.map