(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3f8"],{bb68:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:e.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}}}),a("van-address-edit",{attrs:{"area-list":e.areaList,"show-search-result":"","search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:e.onSave}})],1)},s=[],n=(a("053b"),a("d715")),o={data:function(){return{areaList:n["a"],searchResult:[]}},methods:{onSave:function(e){var t=e.name,a=e.tel,r=e.province,s=e.city,n=e.county,o=e.addressDetail,c=e.areaCode;this.$store.commit("address/add",{name:t,tel:a,province:r,city:s,county:n,addressDetail:o,address:r+s+n+o,areaCode:c}),this.$router.go(-1)}},created:function(){this.$store.state.vanTabbar=!1},destroyed:function(){this.$store.state.vanTabbar=!0}},c=o,i=a("4023"),d=Object(i["a"])(c,r,s,!1,null,"4596d688",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21a3f8.897f96df.js.map