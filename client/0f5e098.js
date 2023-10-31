(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1020:function(t,e,n){"use strict";n.r(e);var l=n(2),o=(n(5),n(20),n(305)),r=n(49),c=n(199),d=n(589),v=n(1017),m=n(68),f=n(507),h=n(205),_=n(0),S=n(30),y=n(86),w=n(57),k=n(133),I=n(632),O=n(84),C=Object(_.b)({name:"WishlistSidebar",components:{SfSidebar:o.a,SfButton:r.a,SfHeading:c.a,SfProperty:d.a,SfCollectedProduct:v.a,SfLink:m.a,SfLoader:f.a,SfImage:h.a,EmptyWishlist:I.a,SvgImage:O.a},setup:function(){var t=Object(_.s)().localeRoute,e=Object(_.v)(),n=Object(S.p)(),o=n.isWishlistSidebarOpen,r=n.toggleWishlistSidebar,c=Object(S.l)().getProductPath,d=Object(y.b)(),v=d.removeItem,m=d.load,f=d.loading,h=Object(w.b)().isAuthenticated,I=Object(k.a)(),O=Object(_.a)((function(){var t,e,n;return null!==(n=null===(e=null===(t=I.wishlist)||void 0===t?void 0:t.items_v2)||void 0===e?void 0:e.items)&&void 0!==n?n:[]})),C=function(t){var e,n,l,o=0,r=null;if(null===(e=null==t?void 0:t.product)||void 0===e?void 0:e.price_range){o=null===(n=null==t?void 0:t.product)||void 0===n?void 0:n.price_range.minimum_price.regular_price.value;var c=null===(l=null==t?void 0:t.product)||void 0===l?void 0:l.price_range.minimum_price.final_price.value;c<o&&(r=c)}return{regular:o,special:r}},j=Object(_.a)((function(){var t,e,n,l,o;return(null!==(n=null===(e=null===(t=I.wishlist)||void 0===t?void 0:t.items_v2)||void 0===e?void 0:e.items)&&void 0!==n?n:[]).length>0?null===(o=null===(l=I.wishlist)||void 0===l?void 0:l.items_v2)||void 0===o?void 0:o.items.reduce((function(t,e){return{total:t.total+C(e).special,subtotal:t.subtotal+C(e).regular}}),{total:0,subtotal:0}):{total:0,subtotal:0}})),W=Object(_.a)((function(){var t,e;return null!==(e=null===(t=I.wishlist)||void 0===t?void 0:t.items_count)&&void 0!==e?e:0})),x=Object(S.k)(),P=x.getMagentoImage,$=x.imageSizes,B=Object(_.a)((function(){var t,e;return I.wishlist.items_count>(null===(e=null===(t=I.wishlist)||void 0===t?void 0:t.items_v2)||void 0===e?void 0:e.items.length)}));return Object(_.g)(Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m({searchParams:{pageSize:100}});case 2:case"end":return t.stop()}}),t)})))),e.afterEach((function(){o.value&&r()})),{getAttributes:function(t){var e;return(null===(e=null==t?void 0:t.product)||void 0===e?void 0:e.configurable_options)||[]},getBundles:function(t){var e,n;return(null===(n=null===(e=null==t?void 0:t.product)||void 0===e?void 0:e.items)||void 0===n?void 0:n.map((function(b){return b.title})).flat())||[]},getItemLink:function(e){return t(c(e.product))},isAuthenticated:h,isWishlistSidebarOpen:o,wishlistItems:O,removeItem:v,toggleWishlistSidebar:r,totalItems:W,totals:j,wishlist:I.wishlist,getMagentoImage:P,imageSizes:$,loading:f,getItemPrice:C,isShowGoToWishlistButton:B}}}),j=(n(920),n(9)),component=Object(j.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wishlist"}},[n("SfSidebar",{staticClass:"sidebar sf-sidebar--right",attrs:{visible:t.isWishlistSidebarOpen,button:!1,position:"right",title:t.$t("My wishlist")},on:{close:t.toggleWishlistSidebar},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"heading__wrapper"},[n("SfHeading",{staticClass:"sf-heading--left",attrs:{level:3,title:t.$t("My wishlist")}}),t._v(" "),n("SfButton",{staticClass:"heading__close-button sf-button--pure",attrs:{"aria-label":"Wishlist sidebar close button"},on:{click:t.toggleWishlistSidebar}},[n("SvgImage",{staticClass:"heading__close",attrs:{icon:"cross",width:"14",height:"14"}})],1)],1)]},proxy:!0},{key:"content-bottom",fn:function(){return[t.isShowGoToWishlistButton?n("SfButton",{staticClass:"sf-button--full-width color-secondary",on:{click:function(e){t.$router.push(t.localeRoute({name:"customer-my-wishlist"}))}}},[t._v("\n        "+t._s(t.$t("Show all products"))+"\n      ")]):t._e()]},proxy:!0}])},[t._v(" "),n("SfLoader",{attrs:{loading:t.loading}},[t.totalItems?n("div",{key:"my-wishlist",staticClass:"my-wishlist"},[n("div",{staticClass:"my-wishlist__total-items"},[t._v("\n          "+t._s(t.$t("Total items"))+": "),n("strong",[t._v(t._s(t.totalItems))])]),t._v(" "),n("div",{staticClass:"collected-product-list"},t._l(t.wishlistItems,(function(e,l){return n("SfCollectedProduct",{key:l,staticClass:"collected-product",attrs:{image:e.product.thumbnail.url,title:e.product.name,"regular-price":t.$fc(t.getItemPrice(e).regular),link:t.getItemLink(e),"special-price":t.getItemPrice(e).special&&t.$fc(t.getItemPrice(e).special),stock:99999},on:{"click:remove":function(n){return t.removeItem({product:e.product})}},scopedSlots:t._u([{key:"input",fn:function(){return[n("div")]},proxy:!0},{key:"image",fn:function(){return[n("SfLink",{attrs:{link:t.getItemLink(e)}},[n("SfImage",{staticClass:"sf-collected-product__image",attrs:{"image-tag":"nuxt-img",src:t.getMagentoImage(e.product.thumbnail.url),alt:e.product.name,width:t.imageSizes.productCard.width,height:t.imageSizes.productCard.height,"nuxt-img-config":{fit:"cover"}}})],1)]},proxy:!0},{key:"configuration",fn:function(){return[t.getAttributes(e).length>0?n("div",t._l(t.getAttributes(e),(function(t,e){return n("SfProperty",{key:e,attrs:{name:t.option_label,value:t.value_label}})})),1):t._e(),t._v(" "),t.getBundles(e).length>0?n("div",t._l(t.getBundles(e),(function(e,i){return n("SfProperty",{key:i,attrs:{value:e},scopedSlots:t._u([{key:"name",fn:function(){return[n("div")]},proxy:!0}],null,!0)})})),1):n("div")]},proxy:!0},{key:"actions",fn:function(){return[n("div")]},proxy:!0}],null,!0)})})),1)]):n("EmptyWishlist")],1)],1)],1)}),[],!1,null,"03b488d2",null);e.default=component.exports},554:function(t,e,n){},602:function(t,e,n){"use strict";n(554)},632:function(t,e,n){"use strict";var l=n(0),o=n(199),r=n(84),c=Object(l.b)({name:"EmptyWishlist",components:{SfHeading:o.a,SvgImage:r.a}}),d=(n(602),n(9)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty-wishlist"},[t._t("default",(function(){return[n("div",{staticClass:"empty-wishlist__banner"},[n("SvgImage",{staticClass:"empty-wishlist__icon",attrs:{icon:"empty_cart_image",label:t.$t("Empty bag"),width:"211",height:"143","data-testid":"icon"}}),t._v(" "),n("SfHeading",{staticClass:"empty-wishlist__label",attrs:{title:t.$t("Your bag is empty"),description:t.$t("Looks like you haven’t added any items to the Wishlist."),"data-testid":"label"}})],1)]}))],2)}),[],!1,null,"55e61430",null);e.a=component.exports},713:function(t,e,n){},920:function(t,e,n){"use strict";n(713)}}]);
//# sourceMappingURL=0f5e098.js.map