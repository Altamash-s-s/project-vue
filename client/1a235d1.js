(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1e3:function(e,t,n){"use strict";n.r(t);var r=n(2),l=(n(5),n(208)),c=n(529),o=n(217),m=n(0),f=n(57),d=n(31),v=Object(m.b)({name:"MyAccount",components:{SfBar:l.a,SfList:c.a,SfMenuItem:o.a},middleware:"is-authenticated",setup:function(){var e=Object(m.u)(),t=Object(m.v)(),n=Object(m.s)(),l=n.i18n,c=n.localeRoute,o=Object(f.b)(),v=o.user,_=o.load;Object(m.t)(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==v.value){e.next=3;break}return e.next=3,_();case 3:case"end":return e.stop()}}),e)}))));var y=function(){var e=Object(m.s)().localeRoute,t=Object(f.b)().logout,n=Object(d.b)().clear,l=Object(m.v)(),c=function(){var c=Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t({});case 2:return r.next=4,n({});case 4:return r.next=6,l.push(e({name:"home"}));case 6:case"end":return r.stop()}}),r)})));return function(){return c.apply(this,arguments)}}();return{sidebarLinkGroups:[{title:"Personal details",items:[{id:"my-profile",label:"My profile",link:{name:"customer-my-profile"}},{id:"address-details",label:"Addresses details",link:{name:"customer-addresses-details"}},{id:"my-newsletter",label:"My newsletter",link:{name:"customer-my-newsletter"}},{id:"my-wishlist",label:"My wishlist",link:{name:"customer-my-wishlist"}}]},{title:"Order details",items:[{id:"order-history",label:"Order history",link:{name:"customer-order-history"}},{id:"my-reviews",label:"My reviews",link:{name:"customer-my-reviews"}},{id:"log-out",label:"Log out"}]}],logoutUser:c}}(),k=y.sidebarLinkGroups,h=y.logoutUser,w=Object(m.a)((function(){return e.value.matched.length>1})),title=Object(m.a)((function(){var t;return l.t(null===(t=e.value.matched.at(-1))||void 0===t?void 0:t.meta.titleLabel)})),O={"log-out":h};return{sidebarLinkGroups:k,title:title,isOnSubpage:w,goToTopLevelRoute:function(){return t.push(c({name:"customer"}))},logoutUser:h,getHandler:function(e){var t;return null!==(t=O[e])&&void 0!==t?t:{}}}}}),_=v,y=(n(776),n(9)),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"my-account"}},[n("div",{staticClass:"sf-content-pages my-account"},[n("SfBar",{staticClass:"smartphone-only",attrs:{title:e.title,back:e.isOnSubpage},on:{"click:back":e.goToTopLevelRoute}}),e._v(" "),n("section",{staticClass:"sf-content-pages__section",class:{"is-active":e.isOnSubpage}},[n("div",{staticClass:"sf-content-pages__sidebar"},[n("h1",{directives:[{name:"t",rawName:"v-t",value:"My Account",expression:"'My Account'"}],staticClass:"sf-content-pages__title desktop-only"}),e._v(" "),e._l(e.sidebarLinkGroups,(function(t){return n("div",{key:t.title},[n("h2",{directives:[{name:"t",rawName:"v-t",value:t.title,expression:"linkGroup.title"}],staticClass:"sf-content-pages__category-title"}),e._v(" "),n("SfList",{staticClass:"sf-content-pages__list"},e._l(t.items,(function(t){return n("li",{key:t.label,staticClass:"sf-content-pages__list-item sf-list__item"},[n("SfMenuItem",e._g({staticClass:"sf-content-pages__menu",attrs:{label:e.$t(t.label),link:e.localeRoute(t.link)}},{click:e.getHandler(t.id)}))],1)})),0)],1)}))],2),e._v(" "),n("div",{staticClass:"sf-content-pages__content"},[e.$fetchState.pending?e._e():n("router-view")],1)])],1)])}),[],!1,null,"0b6b211b",null);t.default=component.exports},473:function(e,t,n){},486:function(e,t,n){"use strict";n(473)},529:function(e,t,n){"use strict";var r={name:"SfListItem"},l=n(9),c=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{staticClass:"sf-list__item"},[e._t("default")],2)}),[],!1,null,null,null).exports;n(6).default.component("SfListItem",c);var o={name:"SfList"},m=(n(486),Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ul",{staticClass:"sf-list"},[e._t("default")],2)}),[],!1,null,null,null));t.a=m.exports},654:function(e,t,n){},776:function(e,t,n){"use strict";n(654)}}]);
//# sourceMappingURL=1a235d1.js.map