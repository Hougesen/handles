(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35625efa"],{"1ac9":function(e,t,r){"use strict";r("5361")},5361:function(e,t,r){},"73cf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("h1",[e._v("Signup for free")]),r("RegisterForm")],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.createUser(t)}}},[r("label",{attrs:{for:"username"}},[e._v(" Username ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"username",placeholder:"lord@voldemort.com",name:"username",autocomplete:"current-username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("label",{attrs:{for:"email"}},[e._v(" Email ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"lord@voldemort.com",name:"email",autocomplete:"current-email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",autocomplete:"current-password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Signup")]),r("p",[e._v(" "+e._s(e.errMsg)+" ")])])])},o=[],u=r("1da1"),c=(r("96cf"),r("9912")),i={name:"RegisterForm",data:function(){return{username:"",email:"",password:"",errMsg:null}},methods:{createUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].createUser(e.email,e.password,e.username);case 2:r=t.sent,console.log(r),r.auth?(e.$store.commit("setUserId",r.userId),e.$store.commit("setUsername",r.username),e.$router.push("/admin")):e.errMsg=r.msg;case 5:case"end":return t.stop()}}),t)})))()}}},m=i,l=(r("a6a9"),r("2877")),p=Object(l["a"])(m,s,o,!1,null,"7169a0fc",null),d=p.exports,f={name:"Register",components:{RegisterForm:d}},v=f,g=(r("1ac9"),Object(l["a"])(v,a,n,!1,null,"0db035c2",null));t["default"]=g.exports},8024:function(e,t,r){},9912:function(e,t,r){"use strict";var a=r("d4ec"),n=r("bee2"),s=r("bc3a"),o=r.n(s),u=function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,null,[{key:"login",value:function(e,t){var r="api/account/login";return o.a.post(r,{email:e,password:t}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}},{key:"createUser",value:function(e,t,r){var a="api/account/newUser";return o.a.post(a,{email:e,password:t,username:r}).then((function(e){return e.data})).catch((function(e){return console.log(e.response.data),e.response.data}))}}]),e}();t["a"]=u},a6a9:function(e,t,r){"use strict";r("8024")}}]);
//# sourceMappingURL=chunk-35625efa.470490c4.js.map