(this["webpackJsonpreact-sn"]=this["webpackJsonpreact-sn"]||[]).push([[0],{100:function(e,t,n){e.exports={Login:"Login_Login__39PGm",Login__content:"Login_Login__content__2RYIE"}},134:function(e,t,n){e.exports={ProfileInfo:"Profile_ProfileInfo__1LDap",ProfileInfo__background:"Profile_ProfileInfo__background__7RJJs",PostContainer:"Profile_PostContainer__1ShUp"}},136:function(e,t,n){e.exports={ProfileStatus:"ProfileStatus_ProfileStatus__1Gp97"}},138:function(e,t,n){e.exports={News:"News_News__3Czwo"}},139:function(e,t,n){e.exports={Music:"Music_Music__I-tzv"}},140:function(e,t,n){e.exports={Settings:"Settings_Settings__24Yfv"}},141:function(e,t,n){e.exports={ldsEllipsis:"Loader_ldsEllipsis__36TUh",ldsEllipsis1:"Loader_ldsEllipsis1__2OQis",ldsEllipsis2:"Loader_ldsEllipsis2__WjScC",ldsEllipsis3:"Loader_ldsEllipsis3__3abS4"}},16:function(e,t,n){e.exports={Navbar:"Navbar_Navbar__muYHO",Navbar__link:"Navbar_Navbar__link__wnKYZ",Navbar__linkActive:"Navbar_Navbar__linkActive__6NVmW"}},173:function(e,t,n){},174:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),i=n(66),o=n.n(i),c=(n(173),n(25)),u=n(26),l=n(28),d=n(27),_=(n(174),n(16)),f=n.n(_),p=n(12),j=n(10),b=Object(j.b)((function(e){return{userId:e.auth.userId}}),null)((function(e){return Object(a.jsxs)("nav",{className:f.a.Navbar,children:[Object(a.jsx)(p.b,{className:f.a.Navbar__link,to:"/profile/"+e.userId,activeClassName:f.a.Navbar__linkActive,children:"Profile"}),Object(a.jsx)(p.b,{className:f.a.Navbar__link,to:"/dialogs",activeClassName:f.a.Navbar__linkActive,children:"Messages"}),Object(a.jsx)(p.b,{className:f.a.Navbar__link,to:"/users",activeClassName:f.a.Navbar__linkActive,children:"Users"}),Object(a.jsx)(p.b,{className:f.a.Navbar__link,to:"/news",activeClassName:f.a.Navbar__linkActive,children:"News"}),Object(a.jsx)(p.b,{className:f.a.Navbar__link,to:"/music",activeClassName:f.a.Navbar__linkActive,children:"Music"}),Object(a.jsx)(p.b,{className:f.a.Navbar__link,to:"/settings",activeClassName:f.a.Navbar__linkActive,children:"Settings"})]})})),g=n(134),h=n.n(g),m=n(68),O=n.n(m),x=n(56),v=n.n(x),P=function(e){return Object(a.jsxs)("div",{className:v.a.Container,children:[Object(a.jsxs)("div",{className:v.a.Post,children:[Object(a.jsx)("img",{className:v.a.Post__img,src:"http://cdn.onlinewebfonts.com/svg/img_167183.png",alt:"post_img"}),Object(a.jsx)("span",{className:v.a.Post__text,children:e.text})]}),Object(a.jsx)("span",{children:"like"})]})},N=function(e){if(!e)return"Field is required"},C=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},w=n(130),I=n(131),S=n(5),U=n(94),y=n(33),D=n.n(y),M=function(e){var t=e.input,n=e.meta,s=Object(U.a)(e,["input","meta"]),r=n.error&&n.touched;return Object(a.jsxs)("div",{className:D.a.formControl+" "+(r?D.a.error:null),children:[Object(a.jsx)("textarea",Object(S.a)(Object(S.a)({},s),t)),r?Object(a.jsx)("span",{className:D.a.errorMessage,children:n.error}):null]})},A=function(e){var t=e.input,n=e.meta,s=Object(U.a)(e,["input","meta"]),r=n.error&&n.touched;return Object(a.jsxs)("div",{className:D.a.formControl+" "+(r?D.a.error:null),children:[Object(a.jsx)("input",Object(S.a)(Object(S.a)({className:D.a.formControl__input},s),t)),r?Object(a.jsx)("span",{className:D.a.errorMessage,children:n.error}):null]})},k=C(10),F=Object(I.a)({form:"ProfileNewPostForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(w.a,{placeholder:"Post message",className:O.a.MyPost__textarea,validate:[N,k],component:M,name:"newPostText"}),Object(a.jsx)("button",{children:"Add post"})]})})),E=function(e){return Object(a.jsxs)("div",{className:O.a.MyPost,children:[Object(a.jsx)("h1",{children:"My posts"}),Object(a.jsx)(F,{onSubmit:e.onChange}),e.posts.map((function(e,t){return Object(a.jsx)(P,{text:e.text},t)}))]})},L=n(97),T=n.n(L),H=n(55),z=n(136),G=n.n(z),R=function(e){var t=Object(s.useState)(!1),n=Object(H.a)(t,2),r=n[0],i=n[1],o=Object(s.useState)(e.desc||"desc"),c=Object(H.a)(o,2),u=c[0],l=c[1];Object(s.useEffect)((function(){l(e.desc)}),[e.desc]);return Object(a.jsx)("div",{className:G.a.ProfileStatus,children:r?Object(a.jsx)("input",{onBlur:function(){i(!1),e.updateProfileStatus(u)},autoFocus:!0,onChange:function(e){l(e.target.value)},value:u,type:"text"}):Object(a.jsx)("span",{onDoubleClick:function(){i(!0)},children:u})})},W=n.p+"static/media/avatar-profile.2d4393d1.png",J=function(e){return Object(a.jsxs)("div",{className:T.a.ProfileInfo,children:[Object(a.jsx)("img",{className:T.a.ProfileInfo__avatarImg,src:e.avatarImg.large||W,alt:"avatar-img"}),e.isOwner?Object(a.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}):null,Object(a.jsx)(R,{updateProfileStatus:e.updateProfileStatus,desc:e.desc})]})},B=n(13),Y=n.n(B),Z=n(22),q="profile/ADD_POST",V="profile/SET_PROFILE_INFO",X="profile/SET_PROFILE_STATUS",K="SAVE_PHOTO_SUCCESS",Q="message/ADD_MESSAGE",$="users/FOLLOW_TOGGLE",ee="users/SET_USERS",te="users/CHANGE_CURRENT_PAGE",ne="users/SET_USERS_TOTAL_COUNT",ae="users/IS_FETCH_TOGGLE",se="users/FOLLOW_FETCHING_TOGGLE",re="auth/SET_USER_DATA",ie="app/INITIALIZED_SUCCESS",oe=n(137),ce=n.n(oe).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"71a0323c-7ff9-4763-8740-70e9a845b5eb"}}),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return ce.get("users?page=".concat(e,"&count=").concat(t))},le=function(e){return ce.get("profile/".concat(e))},de=function(){return ce.get("auth/me")},_e=function(e){return ce.post("follow/".concat(e))},fe=function(e){return ce.delete("follow/".concat(e))},pe=function(e){return ce.get("profile/status/".concat(e))},je=function(e){return ce.put("profile/status",{status:e})},be=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ce.post("auth/login",{email:e,password:t,rememberMe:n})},ge=function(){return ce.delete("auth/login")},he=function(e){var t=new FormData;return t.append("image",e),ce.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},me=function(e){return{type:X,status:e}},Oe=n(11),xe=n(9),ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).updateProfile=function(){if(!e.props.isAuth)return Object(a.jsx)(Oe.a,{to:"/login"});var t=e.props.match.params.id;t||(t=e.props.userId)||e.props.history.push("/login "),e.props.getProfile(t),e.props.getProfileStatus(t)},e.onChangeHandler=function(t){e.props.addPost(t.newPostText)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.id!==e.match.params.id&&this.updateProfile()}},{key:"render",value:function(){return this.props.isAuth?Object(a.jsxs)("main",{className:h.a.ProfileInfo,children:[Object(a.jsx)(J,{isOwner:+this.props.match.params.id===+this.props.userId,updateProfileStatus:this.props.updateProfileStatus,avatarImg:this.props.profileInfo.img,desc:this.props.status,savePhoto:this.props.savePhoto}),Object(a.jsx)(E,{onClick:this.props.addPost,onChange:this.onChangeHandler,posts:this.props.posts})]}):Object(a.jsx)(Oe.a,{to:"/login"})}}]),n}(r.a.Component);var Pe=Object(xe.d)(Oe.f,Object(j.b)((function(e){return{posts:e.profilePage.posts,profileInfo:e.profilePage.profileInfo,status:e.profilePage.status,isAuth:e.auth.isAuth,userId:e.auth.userId}}),{newPostTextUpdate:function(e){return{type:"profile/NEW_POST_TEXT",text:e}},addPost:function(e){return{type:q,text:e}},getProfile:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(e);case 2:a=t.sent,n((s=a.data,{type:V,data:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileStatus:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je(e);case 2:0===t.sent.data.resultCode&&n(me(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfileStatus:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe(e);case 2:a=t.sent,n(me(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(Z.a)(Y.a.mark((function t(n){var a;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,he(e);case 2:0===(a=t.sent).data.resultCode&&n((s=a.data.data.photos,{type:K,photo:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(ve),Ne=n(38),Ce=n.n(Ne),we=n(57),Ie=n.n(we),Se=function(e){return Object(a.jsxs)("div",{className:Ie.a.Message,children:[Object(a.jsxs)("div",{className:Ie.a.Message__info,children:[Object(a.jsx)("img",{className:Ie.a.Message__img,src:"http://cdn.onlinewebfonts.com/svg/download_508630.png",alt:"avatar"}),Object(a.jsx)("span",{children:e.name})]}),Object(a.jsx)("p",{className:Ie.a.Message__text,children:e.text})]})},Ue=n(98),ye=n.n(Ue),De=function(e){return Object(a.jsx)(p.b,{className:ye.a.DialogItem,to:"/dialogs/".concat(e.id),activeClassName:ye.a.DialogsItemActive,children:e.name})},Me=function(e){var t=function(t){Object(l.a)(s,t);var n=Object(d.a)(s);function s(){return Object(c.a)(this,s),n.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(e,Object(S.a)({},this.props)):Object(a.jsx)(Oe.a,{to:"/login"})}}]),s}(r.a.Component);return Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),null)(t)},Ae=C(50),ke=Object(I.a)({form:"dialogAddMessageForm"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(w.a,{component:M,name:"newMsg",placeholder:"text",validate:[N,Ae],className:Ce.a.Dialogs__textarea}),Object(a.jsx)("button",{children:"Add message"})]})}));var Fe=Object(xe.d)(Object(j.b)((function(e){return{messages:e.messagesPage.messages,dialogs:e.messagesPage.dialogs}}),(function(e){return{addNewMessageActionCreator:function(t){return e(function(e){return{type:Q,message:e}}(t))}}})),Me)((function(e){return e.isAuth?Object(a.jsxs)("div",{className:Ce.a.Dialogs,children:[Object(a.jsx)("h1",{children:"Dialogs"}),Object(a.jsxs)("div",{className:Ce.a.Dialogs__container,children:[Object(a.jsx)("div",{className:Ce.a.Dialogs__lists,children:e.dialogs.map((function(e,t){return Object(a.jsx)(De,{name:e.name,id:e.id},t)}))}),Object(a.jsxs)("div",{className:Ce.a.Dialogs__messages,children:[e.messages.map((function(e,t){return Object(a.jsx)(Se,{name:e.name,text:e.text},t)})),Object(a.jsx)(ke,{onSubmit:function(t){e.addNewMessageActionCreator(t.newMsg)}})]})]})]}):Object(a.jsx)(Oe.a,{to:"/login"})})),Ee=n(138),Le=n.n(Ee),Te=function(){return Object(a.jsx)("div",{className:Le.a.News,children:Object(a.jsx)("h1",{children:"News"})})},He=n(139),ze=n.n(He),Ge=function(){return Object(a.jsx)("div",{className:ze.a.Music,children:Object(a.jsx)("h1",{children:"Music"})})},Re=n(140),We=n.n(Re),Je=function(){return Object(a.jsx)("div",{className:We.a.Settings,children:Object(a.jsx)("h1",{children:"Settings"})})},Be=n(99),Ye=n.n(Be),Ze=n(39),qe=n.n(Ze),Ve=function(e){return Object(a.jsxs)("div",{className:qe.a.UserCard,children:[Object(a.jsxs)("div",{className:qe.a.UserCard__left,children:[Object(a.jsx)(p.b,{to:"/profile/"+e.id,children:Object(a.jsx)("img",{className:qe.a.UserCard__avatar,src:null!==e.imgUrl?e.imgUrl:W,alt:""})}),e.isFollow?Object(a.jsx)("button",{disabled:!!e.btnDisabled.some((function(t){return t===e.id})),id:e.id,onClick:function(){e.unFollow(e.id)},className:qe.a.UserCard__button,children:"UNFOLLOW"}):Object(a.jsx)("button",{disabled:!!e.btnDisabled.some((function(t){return t===e.id})),id:e.id,onClick:function(){e.follow(e.id)},className:qe.a.UserCard__button,children:"FOLLOW"})]}),Object(a.jsxs)("div",{className:qe.a.UserCard__right,children:[Object(a.jsx)("span",{children:e.name}),Object(a.jsx)("span",{children:e.status})]})]})},Xe=n(72),Ke=n.n(Xe),Qe=function(e){var t=Object(s.useState)(1),n=Object(H.a)(t,2),r=n[0],i=n[1],o=10*(r-1),c=10*r;return Object(a.jsxs)("div",{className:Ke.a.Paginator,children:[Object(a.jsx)("button",{onClick:function(){1<r&&i((function(e){return e-1}))},children:"-"}),e.pages.filter((function(e){return e>=o&&e<=c})).map((function(t,n){return Object(a.jsx)("span",{id:t,onClick:e.changePage,className:e.currentPage===t?Ke.a.selectedPage:Ke.a.Paginator__item,children:t},n)})),Object(a.jsx)("button",{onClick:function(){Math.ceil(e.pages.length/10)>r&&i((function(e){return e+1}))},children:"+"})]})},$e=function(e){return{type:$,id:e}},et=function(e){return{type:ae,bool:e}},tt=function(e){return{type:se,id:e}},nt=function(e,t){return function(n){n(et(!0)),ue(e,t).then((function(e){var t,a;n((t=e.data.items,{type:ee,users:t})),n((a=e.data.totalCount,{type:ne,count:a})),n(et(!1))}))}},at=n(141),st=n.n(at),rt=function(){return Object(a.jsxs)("div",{className:st.a.ldsEllipsis,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})},it=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).changePage=function(t){e.props.changeCurrentPage(+t.target.id),e.props.requestUsers(+t.target.id,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalUsersCount/this.props.pageSize),n=[],s=1;s<=t;s++)n.push(s);return Object(a.jsxs)("div",{className:Ye.a.Users,children:[Object(a.jsx)("h1",{children:"users"}),Object(a.jsx)(Qe,{pages:n,changePage:this.changePage,currentPage:this.props.currentPage}),Object(a.jsxs)("div",{className:Ye.a.Users__container,children:[this.props.isFetch?Object(a.jsx)(rt,{}):null,this.props.isFetch?null:this.props.users.map((function(t,n){return Object(a.jsx)(Ve,{id:t.id,name:t.name,status:t.status,isFollow:t.followed,imgUrl:t.photos.small,btnDisabled:e.props.followFetchingId,follow:e.props.follow,unFollow:e.props.unFollow},n)}))]})]})}}]),n}(s.Component);var ot=Object(j.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetch:e.usersPage.isFetch,followFetchingId:e.usersPage.followFetchingId}}),(function(e){return{followToggle:function(t){return e($e(t))},changeCurrentPage:function(t){return e(function(e){return{type:te,id:e}}(t))},requestUsers:function(t,n){return e(nt(t,n))},followFetchingToggle:function(t){return e(tt(t))},follow:function(t){return e(function(e){return function(t){t(tt(e)),_e(e).then((function(n){0===n.data.resultCode&&(t($e(e)),t(tt(e)))}))}}(t))},unFollow:function(t){return e(function(e){return function(t){t(tt(e)),fe(e).then((function(n){0===n.data.resultCode&&(t($e(e)),t(tt(e)))}))}}(t))}}}))(Me(it)),ct=n(73),ut=n.n(ct),lt=function(e){return Object(a.jsxs)("header",{className:ut.a.Header,children:[Object(a.jsx)("span",{className:ut.a.Header__logo,children:"bitaev.SN"}),e.isAuth?Object(a.jsx)("button",{onClick:e.logoutUser,children:"logout"}):Object(a.jsx)("div",{children:Object(a.jsx)(p.b,{className:ut.a.Header__login,to:"/login",children:"login"})})]})},dt=n(41),_t=function(e,t,n,a){return{type:re,data:{userId:e,email:t,login:n,isAuth:a}}},ft=function(){return function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n,a,s,r,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,s=a.id,r=a.login,i=a.email,t(_t(s,i,r,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(lt,Object(S.a)({},this.props))}}]),n}(s.Component),jt=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),(function(e){return{setAuthUserData:function(t,n,a){return e(_t(t,n,a))},logoutUser:function(){return e(function(){var e=Object(Z.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge();case 2:0===e.sent.data.resultCode&&t(_t(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(pt),bt=C(30),gt=Object(I.a)({form:"login"})((function(e){return Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(a.jsx)(w.a,{component:A,validate:[bt,N],name:"email",placeholder:"login"}),Object(a.jsx)(w.a,{component:A,validate:[bt,N],name:"password",placeholder:"password"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(w.a,{component:"input",name:"rememberMe",type:"checkbox"}),Object(a.jsx)("span",{children:"remember me"})]}),Object(a.jsx)("button",{children:"login"}),e.error?Object(a.jsx)("div",{style:{color:"red",marginTop:"20px",fontSize:"24px"},children:e.error}):null]})})),ht=n(100),mt=n.n(ht);var Ot=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,userId:e.auth.userId}}),{LoginUser:function(e,t,n){return function(){var a=Object(Z.a)(Y.a.mark((function a(s){var r,i;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,be(e,t,n);case 2:0===(r=a.sent).data.resultCode?s(ft()):(i=r.data.messages.length>0?r.data.messages[0]:"Some error",s(Object(dt.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(a.jsx)(Oe.a,{to:"/profile/".concat(e.userId)}):Object(a.jsx)("div",{className:mt.a.Login,children:Object(a.jsxs)("div",{className:mt.a.Login__content,children:[Object(a.jsx)("h1",{children:"Login Page"}),Object(a.jsx)(gt,{onSubmit:function(t){e.LoginUser(t.email,t.password,t.rememberMe)}})]})})})),xt=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsxs)("div",{className:"App-wrapper",children:[Object(a.jsx)(jt,{}),Object(a.jsx)(b,{}),Object(a.jsx)(Oe.b,{path:"/profile/:id?",exact:!0,render:function(){return Object(a.jsx)(Pe,{})}}),Object(a.jsx)(Oe.b,{path:"/dialogs",render:function(){return Object(a.jsx)(Fe,{})}}),Object(a.jsx)(Oe.b,{path:"/users",render:function(){return Object(a.jsx)(ot,{})}}),Object(a.jsx)(Oe.b,{path:"/news",component:Te}),Object(a.jsx)(Oe.b,{path:"/music",component:Ge}),Object(a.jsx)(Oe.b,{path:"/settings",component:Je}),Object(a.jsx)(Oe.b,{path:"/login",component:Ot})]}):Object(a.jsx)(rt,{})}}]),n}(s.Component),vt=Object(xe.d)(Oe.f,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(Z.a)(Y.a.mark((function e(t){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(ft()),Promise.all([n]).then((function(){t({type:ie})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(xt),Pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))},Nt=n(37),Ct={posts:[{id:1,text:"id1 text"},{id:2,text:"id2 text"}],profileInfo:{img:""},status:""},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case q:var n=Object(Nt.a)(e.posts);return n.push({id:e.posts.length,text:t.text}),Object(S.a)(Object(S.a)({},e),{},{posts:n});case V:return Object(S.a)(Object(S.a)({},e),{},{profileInfo:Object(S.a)(Object(S.a)({},t.data),{},{img:t.photo})});case K:return Object(S.a)(Object(S.a)({},e),{},{profileInfo:{img:t.photo}});default:return e}},It={dialogs:[{name:"Dima",id:1},{name:"Lena",id:2},{name:"Dimasol",id:3}],messages:[{name:"Dima",text:"test steasd asd;ask asdkjl Asdj "},{name:"Dima",text:"test steasd asd;ask asdkjl Asdj "}]},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:var n={name:"Dima",text:t.message},a=Object(Nt.a)(e.messages);return a.push(n),Object(S.a)(Object(S.a)({},e),{},{messages:a,newMessageText:""});default:return e}},Ut={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetch:!1,followFetchingId:[]},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return+e.id===+t.id?Object(S.a)(Object(S.a)({},e),{},{followed:!e.followed}):e}))});case ee:return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case te:return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.id});case ne:return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.count});case ae:return Object(S.a)(Object(S.a)({},e),{},{isFetch:t.bool});case se:var n,a=e.followFetchingId;return n=-1===a.indexOf(+t.id)?[].concat(Object(Nt.a)(e.followFetchingId),[t.id]):Object(Nt.a)(e.followFetchingId.filter((function(e){return e!==t.id}))),Object(S.a)(Object(S.a)({},e),{},{followFetchingId:n});default:return e}},Dt={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(S.a)(Object(S.a)(Object(S.a)({},e),t.data),{},{isAuth:t.data.isAuth});default:return e}},At=n(142),kt=n(132),Ft={initialized:!1},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},Lt=Object(xe.c)({profilePage:wt,messagesPage:St,usersPage:yt,auth:Mt,app:Et,form:kt.a}),Tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.d,Ht=Object(xe.e)(Lt,Tt(Object(xe.a)(At.a)));o.a.render(Object(a.jsx)(p.a,{children:Object(a.jsx)(j.a,{store:Ht,children:Object(a.jsx)(vt,{})})}),document.getElementById("root")),Pt()},33:function(e,t,n){e.exports={formControl:"FormControls_formControl__S3CeG",formControl__input:"FormControls_formControl__input__2LcU4",errorMessage:"FormControls_errorMessage__GeeYf",error:"FormControls_error__2O2Zx"}},38:function(e,t,n){e.exports={Dialogs:"Dialogs_Dialogs__2Rk1L",Dialogs__container:"Dialogs_Dialogs__container__2rMCL",Dialogs__lists:"Dialogs_Dialogs__lists__FDg_W",Dialogs__textarea:"Dialogs_Dialogs__textarea__eABIB",Dialogs__messages:"Dialogs_Dialogs__messages__oekil"}},39:function(e,t,n){e.exports={UserCard:"UserCard_UserCard__2zkw9",UserCard__button:"UserCard_UserCard__button__YAMUO",UserCard__avatar:"UserCard_UserCard__avatar__2IDLJ",UserCard__left:"UserCard_UserCard__left__HB3Ce",UserCard__right:"UserCard_UserCard__right__2DrKZ"}},56:function(e,t,n){e.exports={Container:"Post_Container__2_R1p",Post:"Post_Post__1Z0CV",Post__img:"Post_Post__img__1vhlJ",Post__text:"Post_Post__text__3hiuU"}},57:function(e,t,n){e.exports={Message:"Message_Message__rAqoN",Message__text:"Message_Message__text__3N6rx",Message__info:"Message_Message__info__39lrt",Message__img:"Message_Message__img__cJN8n"}},68:function(e,t,n){e.exports={MyPost:"MyPosts_MyPost__Me6su",MyPost__textarea:"MyPosts_MyPost__textarea__i_8Mt"}},72:function(e,t,n){e.exports={Paginator:"Paginator_Paginator__3TWnt",Paginator__item:"Paginator_Paginator__item__1cyBC",selectedPage:"Paginator_selectedPage__3JmsX"}},73:function(e,t,n){e.exports={Header:"Header_Header__2ob_1",Header__logo:"Header_Header__logo__34yLv",Header__login:"Header_Header__login__rhhoE"}},97:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__2zfPe",ProfileInfo__description:"ProfileInfo_ProfileInfo__description__2LPQC",ProfileInfo__avatarImg:"ProfileInfo_ProfileInfo__avatarImg__8DZVv"}},98:function(e,t,n){e.exports={DialogItem:"DialogItem_DialogItem__3fwIe",DialogsItemActive:"DialogItem_DialogsItemActive__2wTFT"}},99:function(e,t,n){e.exports={Users:"Users_Users__hfonN",Users__button:"Users_Users__button__2DM9m",Users__container:"Users_Users__container__2Fj_6"}}},[[294,1,2]]]);
//# sourceMappingURL=main.d5a57f8f.chunk.js.map