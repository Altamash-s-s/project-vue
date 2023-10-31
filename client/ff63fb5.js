(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{604:function(e,r,t){"use strict";t(22);var n={getDate:function(e){var r;return new Date(null===(r=null==e?void 0:e.order_date)||void 0===r?void 0:r.replace(/ /g,"T")).toLocaleDateString()},getBaseGrandTotal:function(e){var r,t,n;return null!==(n=null===(t=null===(r=null==e?void 0:e.total)||void 0===r?void 0:r.base_grand_total)||void 0===t?void 0:t.value)&&void 0!==n?n:0},getGrandTotal:function(e){var r,t;return null!==(t=null===(r=null==e?void 0:e.total)||void 0===r?void 0:r.grand_total.value)&&void 0!==t?t:0},getOrderCurrency:function(e){var r,t;return null!==(t=null===(r=null==e?void 0:e.total)||void 0===r?void 0:r.subtotal.currency)&&void 0!==t?t:"USD"},getItemPrice:function(e){var r,t;return null!==(t=null===(r=null==e?void 0:e.product_sale_price)||void 0===r?void 0:r.value)&&void 0!==t?t:0},getPagination:function(e){var r,t,n;return{currentPage:(null===(r=null==e?void 0:e.page_info)||void 0===r?void 0:r.current_page)||1,totalPages:(null===(t=null==e?void 0:e.page_info)||void 0===t?void 0:t.total_pages)||1,totalItems:(null==e?void 0:e.total_count)||0,itemsPerPage:(null===(n=null==e?void 0:e.page_info)||void 0===n?void 0:n.page_size)||10,pageOptions:[10,50,100]}}};r.a=n},670:function(e,r,t){},671:function(e,r,t){},796:function(e,r,t){"use strict";t(670)},797:function(e,r,t){"use strict";t(671)},991:function(e,r,t){"use strict";t.r(r);var n=t(27),o=t(2),d=(t(5),t(44),t(20),t(214),t(34),t(13),t(26),t(199)),l=t(49),c=t(971),_=t(530),v=t(507),f=t(0),y=t(211),m=t(604),S=t(30),h=Object(f.b)({props:{bold:{type:Boolean,default:!1}}}),O=(t(796),t(9)),D=Object(O.a)(h,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("SfTableRow",{class:["order-summary",{"order-summary--bold":e.bold}]},[t("SfTableData",{staticClass:"order-summary__spacer"}),e._v(" "),t("SfTableData",[e._t("label")],2),e._v(" "),t("SfTableData",[e._t("value")],2)],1)}),[],!1,null,"6fca96cb",null).exports,T=(t(58),Object(f.b)({props:{address:{type:Object,required:!0},countries:{type:Array,required:!0}},setup:function(e){return{countryName:Object(f.a)((function(){return e.countries.find((function(r){var t=r.id;return e.address.country_code===t})).full_name_locale}))}}})),$=Object(O.a)(T,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",[e._v("\n    "+e._s(e.address.firstname)+" "+e._s(e.address.lastname)+"\n  ")]),e._v(" "),t("div",[e._v("\n    "+e._s(e.address.street.join(" "))+"\n  ")]),e._v(" "),t("div",[e._v("\n    "+e._s(e.address.city)+",\n    "+e._s(e.address.region)+",\n    "+e._s(e.address.postcode)+",\n  ")]),e._v(" "),t("div",[e._v("\n    "+e._s(e.countryName)+",\n  ")]),e._v(" "),t("div",[e._v("\n    "+e._s(e.address.telephone)+"\n  ")])])}),[],!1,null,null,null).exports,C=Object(f.b)({name:"SingleOrder",components:{SfHeading:d.a,SfButton:l.a,SfTable:c.a,SfTabs:_.a,SfLoader:v.a,OrderSummaryRow:D,OrderInformationAddressColumn:$},props:{orderId:{type:String,required:!0}},setup:function(e){var r=Object(f.s)(),t=Object(f.v)(),d=Object(y.a)(),l=d.search,c=d.loading,_=Object(S.e)().search,v=Object(f.r)(Object(o.a)(regeneratorRuntime.mark((function o(){var d,c,v,f,y;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l({filter:{number:{eq:e.orderId}}});case 2:if(c=o.sent,v=null!==(d=c.items[0])&&void 0!==d?d:null){o.next=7;break}return t.push(r.localeRoute({name:"customer-order-history"})),o.abrupt("return",null);case 7:return f=Object(n.a)(new Set([v.shipping_address.country_code,v.billing_address.country_code])).map((function(e){return _({id:e})})),o.next=10,Promise.all(f);case 10:return y=o.sent,o.abrupt("return",{order:v,countries:y});case 12:case"end":return o.stop()}}),o)}))),"6UfHhA/dnTYIcX7O23nHyg==");return{loading:c,ordersRoute:r.localeRoute({name:"customer-order-history"}),asyncData:v,getDate:m.a.getDate,getGrandTotal:m.a.getGrandTotal,getOrderCurrency:m.a.getOrderCurrency}}}),w=(t(797),Object(O.a)(C,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("SfTabs",[t("SfTab",{attrs:{"data-cy":"order-history-tab_my-orders",title:e.$t("My orders")}},[null===e.asyncData?t("div",[t("SfLoader")],1):t("div",[t("SfButton",{staticClass:"sf-button--text all-orders",attrs:{"data-cy":"order-history-btn_orders"},on:{click:function(r){return e.$router.push(e.ordersRoute)}}},[e._v("\n        "+e._s(e.$t("All Orders"))+"\n      ")]),e._v(" "),t("SfTable",{staticClass:"products"},[t("SfTableHeading",[t("SfTableHeader",{staticClass:"products__name"},[e._v("\n            "+e._s(e.$t("Product"))+"\n          ")]),e._v(" "),t("SfTableHeader",[e._v(e._s(e.$t("Quantity")))]),e._v(" "),t("SfTableHeader",[e._v(e._s(e.$t("Price")))])],1),e._v(" "),e._l(e.asyncData.order.items,(function(r){return t("SfTableRow",{key:r.product_sku},[t("SfTableData",{staticClass:"products__name"},[t("span",{domProps:{innerHTML:e._s(e.$dompurify(r.product_name))}}),e._v(" "),e._l(r.selected_options,(function(option){return t("div",{key:option.label},[t("span",{staticClass:"configurable-option-label",domProps:{innerHTML:e._s(e.$dompurify(option.label))}}),e._v(" "),t("span",[e._v(e._s(option.value))])])}))],2),e._v(" "),t("SfTableData",[e._v(e._s(r.quantity_ordered))]),e._v(" "),t("SfTableData",[e._v(e._s(e.$fc(r.product_sale_price.value,"",{currency:r.product_sale_price.currency})))])],1)})),e._v(" "),t("OrderSummaryRow",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            "+e._s(e.$t("Order ID"))+"\n          ")]},proxy:!0},{key:"value",fn:function(){return[e._v("\n            "+e._s(e.asyncData.order.number)+"\n          ")]},proxy:!0}])}),e._v(" "),t("OrderSummaryRow",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            "+e._s(e.$t("Date"))+"\n          ")]},proxy:!0},{key:"value",fn:function(){return[e._v("\n            "+e._s(e.getDate(e.asyncData.order))+"\n          ")]},proxy:!0}])}),e._v(" "),t("OrderSummaryRow",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            "+e._s(e.$t("Status"))+"\n          ")]},proxy:!0},{key:"value",fn:function(){return[e._v("\n            "+e._s(e.asyncData.order.status)+"\n          ")]},proxy:!0}])}),e._v(" "),t("OrderSummaryRow",{attrs:{bold:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            "+e._s(e.$t("Price"))+"\n          ")]},proxy:!0},{key:"value",fn:function(){return[e._v("\n            "+e._s(e.$fc(e.getGrandTotal(e.asyncData.order),"",{currency:e.getOrderCurrency(e.asyncData.order)}))+"\n          ")]},proxy:!0}])})],2),e._v(" "),t("SfHeading",{staticClass:"order-information-heading",attrs:{level:3,title:e.$t("Order information")}}),e._v(" "),t("div",{staticClass:"order-information"},[t("div",[t("header",{staticClass:"order-information__column-heading"},[e._v("\n            "+e._s(e.$t("Shipping address"))+"\n          ")]),e._v(" "),t("OrderInformationAddressColumn",{attrs:{address:e.asyncData.order.shipping_address,countries:e.asyncData.countries}})],1),e._v(" "),t("div",[t("header",{staticClass:"order-information__column-heading"},[e._v("\n            "+e._s(e.$t("Shipping method"))+"\n          ")]),e._v(" "),t("div",[e._v("\n            "+e._s(e.asyncData.order.shipping_method)+"\n          ")])]),e._v(" "),t("div",[t("header",{staticClass:"order-information__column-heading"},[e._v("\n            "+e._s(e.$t("Billing address"))+"\n          ")]),e._v(" "),t("OrderInformationAddressColumn",{attrs:{address:e.asyncData.order.billing_address,countries:e.asyncData.countries}})],1),e._v(" "),t("div",[t("header",{staticClass:"order-information__column-heading"},[e._v("\n            "+e._s(e.$t("Payment Method"))+"\n          ")]),e._v(" "),t("div",[e._v("\n            "+e._s(e.asyncData.order.payment_methods[0].name)+"\n          ")])])])],1)])],1)}),[],!1,null,"6c44cf04",null));r.default=w.exports}}]);
//# sourceMappingURL=ff63fb5.js.map