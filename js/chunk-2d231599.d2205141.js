(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231599"],{efbd:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("van-nav-bar",{attrs:{title:e.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(a){return e.$router.go(-1)}}}),t("van-form",{on:{submit:e.onSubmit}},[t("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),t("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),t("van-field",{attrs:{type:"password",name:"password2",label:"验证密码",placeholder:"验证密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password2,callback:function(a){e.password2=a},expression:"password2"}}),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1)],1)},r=[],n=t("5fa4"),o={data:function(){return{username:"",password:"",password2:""}},methods:{onSubmit:function(e){var a=this;this.$axios.get("register",{params:e}).then((function(e){"200"==e.data?Object(n["a"])({message:"注册成功",onOpened:function(){a.$router.push("/login")}}):Object(n["a"])("注册失败")}))}},created:function(){this.$store.state.vanTabbar=!1},destroyed:function(){this.$store.state.vanTabbar=!0}},l=o,u=t("4023"),i=Object(u["a"])(l,s,r,!1,null,"3aa4c9b7",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d231599.d2205141.js.map