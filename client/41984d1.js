(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1045:function(e,t,l){"use strict";l.r(t);var r=l(0),n=l(533),c=l(199),o=Object(r.b)({components:{SfRadio:n.a,SfHeading:c.a},props:{filter:{type:Object,required:!0}},setup:function(){var e=Object(r.s)().app.i18n,t=Object(r.d)("UseFiltersProvider").isFilterSelected;return{selected:Object(r.a)((function(){return function(e,l){return t(e,l)}})),label:function(option){return"".concat("1"===option.value?e.t("Yes"):e.t("No"))}}}}),f=(l(970),l(9)),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("SfHeading",{key:"filter-title-"+e.filter.attribute_code,staticClass:"filters__title sf-heading--left",attrs:{level:4,title:e.filter.label}}),e._v(" "),e._l(e.filter.options,(function(option){return l("SfRadio",{key:e.filter.attribute_code+"-"+option.value,staticClass:"radio-filter",attrs:{label:e.label(option),selected:e.selected(e.filter.attribute_code,option.value),value:option.value,name:"filter__price","data-testid":"category-filter"},on:{change:function(t){return e.$emit("selectFilter",option)}}})}))],2)}),[],!1,null,null,null);t.default=component.exports},757:function(e,t,l){},970:function(e,t,l){"use strict";l(757)}}]);
//# sourceMappingURL=41984d1.js.map