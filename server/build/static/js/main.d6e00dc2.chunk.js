(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/Login.f2a47764.png"},36:function(e,t,a){e.exports=a.p+"static/media/NotFound.4c412ab4.png"},42:function(e,t,a){e.exports=a(83)},47:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(32),l=a.n(n),i=(a(47),a(8)),o=a(9),c=a(12),u=a(10),m=a(13),d=a(86),h=a(88),p=a(84),E=a(41),f=a(6),g=a(5),w=a(17),b=a.n(w),v=function(e){window.M.toast({html:e,classes:"green lighten-1"})},N=function(e){return{type:"SET_USER",user:e}},S=function(e){return{type:"SET_ERROR",error:e}},y=function(){return localStorage.removeItem("token"),{type:"SET_USER",user:null}},j=function(e){var t=e.users,a=t?t.map(function(e){return s.a.createElement("li",{className:"collection-item avatar",key:e._id},s.a.createElement("p",null,s.a.createElement("span",{className:"btn btn-floating red lighten-1"},e.firstName[0].toUpperCase(),e.lastName[0].toUpperCase())),s.a.createElement("p",{className:"title"},e.firstName," ",e.lastName),s.a.createElement("p",{className:"red-text"},e.email))}):s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"indeterminate"}));return s.a.createElement("div",{className:"container"},s.a.createElement("ul",{className:"collection"},a))},C=a(35),O=a.n(C),P={componentDidMount:function(e){e.user&&e.getAllUsers()}},k=Object(f.d)(Object(g.b)(function(e){return{users:e.users.users,user:e.users.user,error:e.users.error}},function(e){return{getAllUsers:function(){return e(function(e){b.a.get("".concat("","/api/users/"),{headers:{Authorization:localStorage.getItem("token")}}).then(function(t){e({type:"GET_ALL_USERS",users:t.data.users})}).catch(function(t){if(t.response&&t.response.data.errors){var a=t.response.data.errors.map(function(e){return e.msg}).join(", ");e(S(a))}else e(S(t.message))})})}}}),Object(E.a)(P))(function(e){var t=e.user,a=e.users,r=e.error,n=t?s.a.createElement(j,{users:a}):s.a.createElement("div",{className:"center"},s.a.createElement("h4",null,"Welcome, please sing up!"),s.a.createElement("img",{src:O.a,alt:"A man in front a door",height:400}));return s.a.createElement("div",null,n,s.a.createElement("p",{className:"center red-text"},r))}),U=a(11),x=a(18),A=a(87),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handlePasswordChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState({showPassword:t})},a.handleShowDelete=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState({showDelete:t})},a.handleUserChange=function(e){var t=Object(x.a)({},a.state.user,Object(U.a)({},e.target.id,e.target.value));a.setState({user:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.updateUser(a.state.user,a.props)},a.handleChangePassword=function(e){e.preventDefault(),a.props.changePassword(a.state.user,a.props)},a.handleDeleteAccount=function(e){e.preventDefault(),a.props.deleteAccount(a.state.user,a.props)},a.state={showPassword:!1,showDelete:!1,user:e.user},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.user,t=this.state.showDelete?s.a.createElement("button",{className:"btn black lighten-2",onClick:this.handleDeleteAccount},"Delete Account"):null,a=this.state.showPassword?s.a.createElement("form",{onSubmit:this.handleChangePassword,className:"white"},s.a.createElement("div",{className:"changePassword"},s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"currentPassword",className:"active"},"Current Password"),s.a.createElement("input",{type:"password",id:"currentPassword",required:!0,onChange:this.handleUserChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"newPassword",className:"active"},"New Password"),s.a.createElement("input",{type:"password",id:"newPassword",required:!0,onChange:this.handleUserChange}))),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn purple lighten-2"},"Change Password"))):null,r=e?s.a.createElement("div",{className:"forms"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},s.a.createElement("h5",{className:"grey-text text-darken-3"},"User Profile"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email",className:"active"},"Email"),s.a.createElement("input",{type:"email",id:"email",required:!0,onChange:this.handleUserChange,defaultValue:e.email})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"firstName",className:"active"},"First name"),s.a.createElement("input",{type:"text",id:"firstName",required:!0,onChange:this.handleUserChange,defaultValue:e.firstName})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"lastName",className:"active"},"Last name"),s.a.createElement("input",{type:"text",id:"lastName",required:!0,onChange:this.handleUserChange,defaultValue:e.lastName})),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn purple lighten-2"},"Update"),s.a.createElement("div",{className:"center red-text"},this.props.error)),s.a.createElement("div",{className:"switch"},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.showPassword,onChange:this.handlePasswordChange}),s.a.createElement("span",{className:"lever"}),"Change Password")),s.a.createElement("div",{className:"switch"},s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.showDelete,onChange:this.handleShowDelete}),s.a.createElement("span",{className:"lever"}),"Delete Account"))),a,t):s.a.createElement(A.a,{to:"/signin"});return s.a.createElement("div",{className:"container"},r)}}]),t}(r.Component),F=Object(g.b)(function(e){return{user:e.users.user,error:e.users.error}},function(e,t){return{updateUser:function(t){return e(function(e,t){return function(t){b.a.put("".concat("","/api/users/")+e._id,e,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t(N(e.data.user)),v(e.data.message.text)}).catch(function(e){if(e.response)if(401===e.response.status||403===e.response.status)t(S("Unauthorized, try again please"));else{var a=e.response.data.errors.map(function(e){return e.msg}).join(", ");t(S(a))}else t(S(e.message))})}}(t))},deleteAccount:function(a){return e(function(e,t){return function(a){b.a.delete("".concat("","/api/users/")+e._id,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){a(y()),v(e.data.message.text),t.history.push("/")}).catch(function(e){if(e.response)if(401===e.response.status||403===e.response.status)a(S("Unauthorized, try again please"));else{var t=e.response.data.errors.map(function(e){return e.msg}).join(", ");a(S(t))}else a(S(e.message))})}}(a,t))},changePassword:function(t){return e(function(e,t){if(e.currentPassword&&e.newPassword)return function(t){b.a.put("".concat("","/api/users/changepassword"),e,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){t(N(e.data.user)),v(e.data.message.text)}).catch(function(e){if(e.response)if(401===e.response.status||403===e.response.status)t(S("Unauthorized, try again please"));else{var a=e.response.data.errors.map(function(e){return e.msg}).join(", ");t(S(a))}else t(S(e.message))})}}(t))}}})(D),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={email:"",password:"",emailErrors:"",passwordErrors:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),a.checkValid(e.target.id,e.target.value)},a.isDisabled=function(){return a.state.emailErrors||a.state.passwordErrors},a.checkValid=function(e,t){"password"===e&&(t&&t.length?a.setState({passwordErrors:""}):a.setState({passwordErrors:"Password is a mandatory field"}));if("email"===e){var r=t&&/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/.test(t);t?r?a.setState({emailErrors:""}):a.setState({emailErrors:"Email must be a valid E-Mail Address"}):a.setState({emailErrors:"Email is a mandatory field"})}},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.user?s.a.createElement(A.a,{to:"/"}):s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},s.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",id:"email",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn purple lighten-2",disabled:this.isDisabled()},"Login"),s.a.createElement("div",{className:"center red-text"},this.props.error||this.state.passwordErrors||this.state.emailErrors))))}}]),t}(r.Component),z=Object(g.b)(function(e){return{error:e.users.error,user:e.users.user}},function(e,t){return{signIn:function(a){return e(function(e,t){return function(a){b.a.post("".concat("","/api/users/login"),e).then(function(e){localStorage.setItem("token",e.data.token),a(N(e.data.user)),t.history.push("/"),v(e.data.message.text)}).catch(function(e){if(e.response&&e.response.data.errors){var t=e.response.data.errors.map(function(e){return e.msg}).join(", ");a(S(t))}else a(S(e.message))})}}(a,t))}}})(_),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={email:"",password:"",confirmPassword:"",firstName:"",lastName:"",emailErrors:"",passwordErrors:"",firstNameErrors:"",lastNameErrors:"",confirmPasswordErrors:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value)),a.checkValid(e.target.id,e.target.value)},a.isDisabled=function(){return a.state.emailErrors||a.state.passwordErrors||a.state.confirmPasswordErrors||a.state.firstNameErrors||a.state.lastNameErrors},a.checkValid=function(e,t){("password"===e&&(t?t.length<6?a.setState({passwordErrors:"Password must have at least 6 characters"}):a.setState({passwordErrors:""}):a.setState({passwordErrors:"Password is a mandatory field"})),"firstName"===e)&&(t&&t.length?a.setState({firstNameErrors:""}):a.setState({firstNameErrors:"First name is a mandatory field"}));"lastName"===e&&(t&&t.length?a.setState({lastNameErrors:""}):a.setState({lastNameErrors:"Last name is a mandatory field"}));if("confirmPassword"===e){var r=t===a.state.password;t?r?a.setState({confirmPasswordErrors:""}):a.setState({confirmPasswordErrors:"Passwords don't match"}):a.setState({confirmPasswordErrors:"Confirm password name is a mandatory field"})}if("email"===e){var s=t&&/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/.test(t);t?s?a.setState({emailErrors:""}):a.setState({emailErrors:"Email must be a valid E-Mail Address"}):a.setState({emailErrors:"Email is a mandatory field"})}},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.user?s.a.createElement(A.a,{to:"/"}):s.a.createElement("div",{className:"container"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},s.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",id:"email",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Confirm Password"),s.a.createElement("input",{type:"password",id:"confirmPassword",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"firstName"},"First name"),s.a.createElement("input",{type:"text",id:"firstName",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"lastName"},"Last name"),s.a.createElement("input",{type:"text",id:"lastName",required:!0,onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn purple lighten-2",disabled:this.isDisabled()},"Sign Up"),s.a.createElement("div",{className:"center red-text"},this.props.error||this.state.emailErrors||this.state.passwordErrors||this.state.firstNameErrors||this.state.lastNameErrors||this.state.confirmPasswordErrors))))}}]),t}(r.Component),q=Object(g.b)(function(e){return{error:e.users.error,user:e.users.user}},function(e,t){return{signUp:function(a){return e(function(e,t){return function(a){b.a.post("".concat("","/api/users/register"),e).then(function(e){localStorage.setItem("token",e.data.token),a(N(e.data.user)),t.history.push("/"),v(e.data.message.text)}).catch(function(e){if(e.message)a(S(e.message));else if(e.response.data.errors){var t=e.response.data.errors.map(function(e){return e.msg}).join(", ");a(S(t))}})}}(a,t))}}})(R),I=a(73),L=a(85),T=function(){return s.a.createElement("div",null,s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement(L.a,{to:"/signup"},"SignUp")),s.a.createElement("li",null,s.a.createElement(L.a,{to:"/signin"},"Login"))))},V=Object(g.b)(null,function(e){return{logOut:function(){return e(y())}}})(function(e){var t=e.user,a=t.firstName,r=t.lastName,n=a[0].toUpperCase()+r[0].toUpperCase();return s.a.createElement("div",null,s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement(L.a,{to:"/profile",className:"btn btn-floating red lighten-1"},n)),s.a.createElement("li",null,s.a.createElement(L.a,{to:"/",onClick:e.logOut},"Logout"))))}),Z=Object(g.b)(function(e){return{user:e.users.user}})(function(e){var t=e.user,a=t&&t._id?s.a.createElement(V,{user:e.user}):s.a.createElement(T,null);return s.a.createElement("nav",{className:"nav-wrapper purple lighten-2"},s.a.createElement("div",{className:"container"},s.a.createElement(I.a,{to:"/",className:"brand-logo left"},"User Manager"),a))}),M=a(36),W=a.n(M),$=function(){return s.a.createElement("div",{className:"center"},s.a.createElement("h3",null,"404"),s.a.createElement("h5",null,s.a.createElement(I.a,{to:"/"},"Return to Home Page")),s.a.createElement("img",{src:W.a,alt:"Error 404",height:400}))},B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(Z,null),s.a.createElement(h.a,null,s.a.createElement(p.a,{exact:!0,path:"/",component:k}),s.a.createElement(p.a,{path:"/signin",component:z}),s.a.createElement(p.a,{path:"/signup",component:q}),s.a.createElement(p.a,{path:"/profile",component:F}),s.a.createElement(p.a,{path:"*",component:$})),s.a.createElement("div",{className:"center"},s.a.createElement("p",null," ","Created with"," ",s.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc93"," "),"by"," ",s.a.createElement("a",{href:"https://www.github.com/josewhitetower",target:"_blank",rel:"noopener noreferrer"},"@josewhitetower")))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(37),J=a(21),H=a(38),K=a(39),Q=a.n(K),X=a(40),Y={user:null,error:null,users:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(x.a)({},e,{user:t.user,error:null});case"SET_ERROR":return Object(x.a)({},e,{error:t.error});case"GET_ALL_USERS":return Object(x.a)({},e,{users:t.users,error:null});default:return e}},te=Object(f.c)({users:ee}),ae={key:"root",storage:Q.a,transforms:[Object(X.createWhitelistFilter)("users",["user"])]},re=Object(J.persistReducer)(ae,te),se=Object(f.e)(re,Object(f.a)(G.a)),ne=Object(J.persistStore)(se);l.a.render(s.a.createElement(g.a,{store:se},s.a.createElement(H.a,{loading:null,persistor:ne},s.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.d6e00dc2.chunk.js.map