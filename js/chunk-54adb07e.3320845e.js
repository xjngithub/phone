(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54adb07e"],{1074:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.lists,(function(e,i){return s("div",{key:i},[2==e.type?s("van-panel",{attrs:{title:"订单："+e.orderId,status:t.typeList[e.type]}},[t._l(e.goodsList,(function(t,e){return s("div",{key:e},[s("van-card",{attrs:{num:t.num,price:t.price,desc:"描述信息",title:t.name,thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}})],1)})),s("div",{staticClass:"van-panel-footer",attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{size:"small"}},[t._v("退款申请")]),s("van-button",{attrs:{size:"small"},on:{click:function(s){return t.onGoods(e.orderId)}}},[t._v("已收货")])],1)],2):t._e()],1)})),0)},n=[],r=(s("dbb3"),s("3466"),{data:function(){return{lists:[],typeList:[]}},methods:{onGoods:function(t){var e=this.lists.findIndex((function(e){return e.orderId==t}));this.lists[e].type=3}},created:function(){this.typeList=this.$store.state.orderlist.typeList;var t=this.$store.state.orderlist.lists;this.lists=t.filter((function(t){return 2==t.type}))},beforeDestroy:function(){this.lists.length&&this.$store.commit("orderlist/editId",this.lists)}}),o=r,a=(s("b864"),s("4023")),c=Object(a["a"])(o,i,n,!1,null,"6bccc4dc",null);e["default"]=c.exports},b864:function(t,e,s){"use strict";var i=s("f569"),n=s.n(i);n.a},dbb3:function(t,e,s){"use strict";var i=s("1c8b"),n=s("5dfd").filter,r=s("1ea7"),o=s("ff9c"),a=r("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},f569:function(t,e,s){}}]);
//# sourceMappingURL=chunk-54adb07e.3320845e.js.map