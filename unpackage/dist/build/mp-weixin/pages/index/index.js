(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1978:function(t,e,n){"use strict";n.r(e);var o=n("3bd1"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"35e1":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={wtePopup:function(){return n.e("components/wte-popup/wte-popup").then(n.bind(null,"3310"))},uCheckboxGroup:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(n.bind(null,"095e"))},uCheckbox:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-checkbox/u-checkbox")]).then(n.bind(null,"2719"))},uToast:function(){return n.e("uni_modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"9ce0"))}},i=function(){var t=this.$createElement;this._self._c},r=[]},3822:function(t,e,n){"use strict";n.r(e);var o=n("35e1"),i=n("1978");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b535");var u=n("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=s.exports},"3bd1":function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("448a")),r=n("6da6"),u={components:{},data:function(){return{menuText:"",currentCategoryIdList:["wucan","wancan","shuiguo"],currentMenuScopeList:[],timer:null,autoStopRandomTimeVal:3,autoStopRandomTimer:null,plugin:{}}},computed:{resolveGoMenuBtnBottom:function(){var e=t.getSystemInfoSync().safeAreaInsets.bottom;return e+50+"rpx"},currentMenuText:function(){var t=this;return this.$store.state.dataList.filter((function(e){return t.currentCategoryIdList.includes(e.id)})).map((function(t){return t.name})).join("、")},reaolveBgMenuList:function(){return function(t,e){var n=new Array(e),o=t.length,i=new Array(o);if(e>o)throw new RangeError("getRandomObjectsFromArray: more elements requested than available");while(e--){var r=Math.floor(Math.random()*o);n[e]=t[r in i?i[r]:r],i[r]=--o in i?i[o]:o}return n}(r.MENU_DATA_LIST,18)}},created:function(){},onShow:function(){var t=this;this.currentMenuScopeList=JSON.parse(JSON.stringify(this.$store.state.dataList)),this.currentCategoryIdList=this.currentCategoryIdList.filter((function(e){return t.currentMenuScopeList.findIndex((function(t){return t.id==e}))>-1})),this.currentMenuScopeList.forEach((function(e){t.$set(e,"isChecked",t.currentCategoryIdList.includes(e.id)?[1]:[])}))},onShareAppMessage:function(){},mounted:function(){},onLoad:function(){this.plugin=requirePlugin("wxacommentplugin")},methods:{dianZan:function(){var t=this;this.plugin.openComment({success:function(e){var n="";0==e.errCode?n="您已经评价过了呢~":e.errCode<0&&(n="评价出错了 o(╥﹏╥)o"),t.$refs.pageToast.show({message:n}),console.log("success",e)},fail:function(e){t.$refs.pageToast.show({message:"评价失败了 o(╥﹏╥)o"}),console.log("error",e)}})},goMyMenu:function(){this.stopRandom(),this.stopAutoStopRandomTime(),t.navigateTo({url:"/pages/my-menu/my-menu"})},randomFood:function(){var t=this;if(this.timer)return this.stopRandom(),void this.stopAutoStopRandomTime();var e=this.$store.state.dataList,n=[];e.forEach((function(e){t.currentCategoryIdList.includes(e.id)&&(n=[].concat((0,i.default)(n),(0,i.default)(e.foodList)))})),n=n.map((function(t){return t.name})),this.timer=setInterval((function(){console.log(2);var e=Math.floor(Math.random()*n.length);t.menuText!=n[e]&&(t.menuText=n[e])}),50),this.autoStopRandomTimer=setInterval((function(){console.log(1),t.autoStopRandomTimeVal--,0==t.autoStopRandomTimeVal&&(t.stopRandom(),t.stopAutoStopRandomTime())}),1e3)},stopRandom:function(){clearInterval(this.timer),this.timer=null},stopAutoStopRandomTime:function(){clearInterval(this.autoStopRandomTimer),this.autoStopRandomTimer=null,this.autoStopRandomTimeVal=3},modifyMenuScope:function(){var t=this;this.currentMenuScopeList=JSON.parse(JSON.stringify(this.$store.state.dataList)),this.currentMenuScopeList.forEach((function(e){t.$set(e,"isChecked",t.currentCategoryIdList.includes(e.id)?[1]:[])})),this.$refs.modifyScope.open()},clickMenu:function(t){void 0===t.isChecked&&this.$set(t,"isChecked",[]),this.$set(t,"isChecked",0==t.isChecked.length?[1]:[])},modifyMenu:function(){var t=this;0!=this.currentMenuScopeList.filter((function(t){var e;return(null===(e=t.isChecked)||void 0===e?void 0:e.length)>0})).length?(this.stopRandom(),this.stopAutoStopRandomTime(),this.currentCategoryIdList=this.currentMenuScopeList.filter((function(t){var e;return(null===(e=t.isChecked)||void 0===e?void 0:e.length)>0})).map((function(t){return t.id})),this.currentMenuScopeList.forEach((function(e){t.$set(e,"isChecked",t.currentCategoryIdList.includes(e.id)?[1]:[])})),this.$refs.modifyScope.close()):this.$refs.uToast.show({message:"至少要选择一个分类哦~"})}}};e.default=u}).call(this,n("543d")["default"])},b535:function(t,e,n){"use strict";var o=n("dfd3"),i=n.n(o);i.a},cfe3:function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("d1fe");o(n("66fd"));var i=o(n("3822"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},dfd3:function(t,e,n){}},[["cfe3","common/runtime","common/vendor"]]]);