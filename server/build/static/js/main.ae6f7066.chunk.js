(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/Login.f2a47764.png"},36:function(e,t,a){e.exports=a.p+"static/media/NotFound.4c412ab4.png"},42:function(e,t,a){e.exports=a(83)},47:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),l=a.n(s),c=(a(47),a(8)),o=a(9),i=a(12),u=a(10),m=a(13),d=a(86),h=a(88),p=a(84),f=a(41),g=a(6),E=a(5),b=a(17),v=a.n(b),w=function(e){window.M.toast({html:e,classes:"green lighten-1"})},N=function(e){return{type:"SET_USER",user:e}},j=function(e){return{type:"SET_ERROR",error:e}},C=function(){return localStorage.removeItem("token"),{type:"SET_USER",user:null}},O=function(e){var t=e.users,a=t?t.map(function(e){return r.a.createElement("li",{className:"collection-item avatar",key:e._id},r.a.createElement("p",null,r.a.createElement("span",{className:"btn btn-floating red lighten-1"},e.firstName[0].toUpperCase(),e.lastName[0].toUpperCase())),r.a.createElement("p",{className:"title"},e.firstName," ",e.lastName),r.a.createElement("p",{className:"red-text"},e.email))}):r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"}));return r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"collection"},a))},y=a(35),S=a.n(y),k={componentDidMount:function(e){e.getAllUsers()}},x=Object(g.d)(Object(E.b)(function(e){return{users:e.users.users,user:e.users.user,error:e.users.error}},function(e){return{getAllUsers:function(){return e(function(e){v.a.get("".concat("","/api/users/")).then(function(t){e({type:"GET_ALL_USERS",users:t.data.users})}).catch(function(t){if(t.message&&console.log(t.message),t.response&&t.response.data.errors){var a=t.response.data.errors.map(function(e){return e.msg}).join(", ");e(j(a))}})})}}}),Object(f.a)(k))(function(e){var t=e.user,a=e.users,n=e.error,s=t?r.a.createElement(O,{users:a}):r.a.createElement("div",{className:"center"},r.a.createElement("h4",null,"Welcome, please sing up!"),r.a.createElement("img",{src:S.a,alt:"A man in front a door",height:400}));return r.a.createElement("div",null,s,r.a.createElement("p",{className:"center red-text"},n))}),P=a(11),U=a(18),A=a(87),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handlePasswordChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState({showPassword:t})},a.handleShowDelete=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState({showDelete:t})},a.handleUserChange=function(e){var t=Object(U.a)({},a.state.user,Object(P.a)({},e.target.id,e.target.value));a.setState({user:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.updateUser(a.state.user)},a.handleChangePassword=function(e){e.preventDefault(),a.props.changePassword(a.state.user)},a.handleDeleteAccount=function(e){e.preventDefault(),a.props.deleteAccount(a.state.user,a.props)},a.state={showPassword:!1,showDelete:!1,user:e.user},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.user,t=this.state.showDelete?r.a.createElement("button",{className:"btn black lighten-2",onClick:this.handleDeleteAccount},"Delete Account"):null,a=this.state.showPassword?r.a.createElement("form",{onSubmit:this.handleChangePassword,className:"white"},r.a.createElement("div",{className:"changePassword"},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"currentPassword",className:"active"},"Current Password"),r.a.createElement("input",{type:"password",id:"currentPassword",required:!0,onChange:this.handleUserChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"newPassword",className:"active"},"New Password"),r.a.createElement("input",{type:"password",id:"newPassword",required:!0,onChange:this.handleUserChange}))),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn purple lighten-2"},"Change Password"))):null,n=e?r.a.createElement("div",{className:"forms"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"User Profile"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email",className:"active"},"Email"),r.a.createElement("input",{type:"email",id:"email",required:!0,onChange:this.handleUserChange,defaultValue:e.email})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName",className:"active"},"First name"),r.a.createElement("input",{type:"text",id:"firstName",required:!0,onChange:this.handleUserChange,defaultValue:e.firstName})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName",className:"active"},"Last name"),r.a.createElement("input",{type:"text",id:"lastName",required:!0,onChange:this.handleUserChange,defaultValue:e.lastName})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn purple lighten-2"},"Update"),r.a.createElement("div",{className:"center red-text"},this.props.error)),r.a.createElement("div",{className:"switch"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:this.state.showPassword,onChange:this.handlePasswordChange}),r.a.createElement("span",{className:"lever"}),"Change Password")),r.a.createElement("div",{className:"switch"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:this.state.showDelete,onChange:this.handleShowDelete}),r.a.createElement("span",{className:"lever"}),"Delete Account"))),a,t):r.a.createElement(A.a,{to:"/signin"});return r.a.createElement("div",{className:"container"},n)}}]),t}(n.Component),F=Object(E.b)(function(e){return{user:e.users.user,error:e.users.error}},function(e,t){return{updateUser:function(t){return e(function(e){return function(t){v.a.put("".concat("","/api/users/")+e._id,e,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t(N(e.data.user)),w(e.data.message.text)}).catch(function(e){if(e.message&&console.log(e.message),e.response&&e.response.data.errors){var a=e.response.data.errors.map(function(e){return e.msg}).join(", ");t(j(a))}})}}(t))},deleteAccount:function(a){return e(function(e,t){return function(a){v.a.delete("".concat("","/api/users/")+e._id,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){a(C()),w(e.data.message.text),t.history.push("/")}).catch(function(e){if(e.message&&console.log(e.message),e.response&&e.response.data.errors){var t=e.response.data.errors.map(function(e){return e.msg}).join(", ");a(j(t))}})}}(a,t))},changePassword:function(t){return e(function(e){if(e.currentPassword&&e.newPassword)return function(t){v.a.put("".concat("","/api/users/changepassword"),e,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t(N(e.data.user)),w(e.data.message.text)}).catch(function(e){if(e.message&&console.log(e.message),e.response&&e.response.data.errors){var a=e.response.data.errors.map(function(e){return e.msg}).join(", ");t(j(a))}})}}(t))}}})(D),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.user?r.a.createElement(A.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn purple lighten-2"},"Login"),r.a.createElement("div",{className:"center red-text"},this.props.error))))}}]),t}(n.Component),R=Object(E.b)(function(e){return{error:e.users.error,user:e.users.user}},function(e,t){return{signIn:function(a){return e(function(e,t){return function(a){v.a.post("".concat("","/api/users/login"),e).then(function(e){a(N(e.data.user)),localStorage.setItem("token",e.data.token),t.history.push("/"),w(e.data.message.text)}).catch(function(e){if(e.response.data.errors){var t=e.response.data.errors.map(function(e){return e.msg}).join(", ");a(j(t))}})}}(a,t))}}})(_),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",confirmPassword:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(P.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.user?r.a.createElement(A.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Confirm Password"),r.a.createElement("input",{type:"password",id:"confirmPassword",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First name"),r.a.createElement("input",{type:"text",id:"firstName",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last name"),r.a.createElement("input",{type:"text",id:"lastName",required:!0,onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn purple lighten-2"},"Sign Up"),r.a.createElement("div",{className:"center red-text"},this.props.error))))}}]),t}(n.Component),I=Object(E.b)(function(e){return{error:e.users.error,user:e.users.user}},function(e,t){return{signUp:function(a){return e(function(e,t){return function(a){v.a.post("".concat("","/api/users/register"),e).then(function(e){a(N(e.data.user)),localStorage.setItem("token",e.data.token),t.history.push("/"),w(e.data.message.text)}).catch(function(e){if(e.response.data.errors){var t=e.response.data.errors.map(function(e){return e.msg}).join(", ");a(j(t))}})}}(a,t))}}})(q),L=a(73),T=a(85),W=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(T.a,{to:"/signup"},"SignUp")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/signin"},"Login"))))},z=Object(E.b)(null,function(e){return{logOut:function(){return e(C())}}})(function(e){var t=e.user,a=t.firstName,n=t.lastName,s=a[0].toUpperCase()+n[0].toUpperCase();return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(T.a,{to:"/profile",className:"btn btn-floating red lighten-1"},s)),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/",onClick:e.logOut},"Logout"))))}),M=Object(E.b)(function(e){return{user:e.users.user}})(function(e){var t=e.user,a=t&&t._id?r.a.createElement(z,{user:e.user}):r.a.createElement(W,null);return r.a.createElement("nav",{className:"nav-wrapper purple lighten-2"},r.a.createElement("div",{className:"container"},r.a.createElement(L.a,{to:"/",className:"brand-logo left"},"User Manager"),a))}),V=a(36),B=a.n(V),G=function(){return r.a.createElement("div",{className:"center"},r.a.createElement("h3",null,"404"),r.a.createElement("h5",null,r.a.createElement(L.a,{to:"/"},"Return to Home Page")),r.a.createElement("img",{src:B.a,alt:"Error 404",height:400}))},J=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{path:"/signin",component:R}),r.a.createElement(p.a,{path:"/signup",component:I}),r.a.createElement(p.a,{path:"/profile",component:F}),r.a.createElement(p.a,{path:"*",component:G})),r.a.createElement("div",{className:"center"},r.a.createElement("p",null," Created with ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc93 "),"by ",r.a.createElement("a",{href:"https://www.github.com/josewhitetower",target:"_blank",rel:"noopener noreferrer"},"@josewhitetower")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(37),$=a(21),K=a(38),Q=a(39),X=a.n(Q),Y=a(40),Z={user:null,error:null,users:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(U.a)({},e,{user:t.user,error:null});case"SET_ERROR":return Object(U.a)({},e,{error:t.error});case"GET_ALL_USERS":return Object(U.a)({},e,{users:t.users,error:null});default:return e}},te=Object(g.c)({users:ee}),ae={key:"root",storage:X.a,transforms:[Object(Y.createWhitelistFilter)("users",["user"])]},ne=Object($.persistReducer)(ae,te),re=Object(g.e)(ne,Object(g.a)(H.a)),se=Object($.persistStore)(re);l.a.render(r.a.createElement(E.a,{store:re},r.a.createElement(K.a,{loading:null,persistor:se},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.ae6f7066.chunk.js.map