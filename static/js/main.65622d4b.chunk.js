(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),s=n(17),o=n(98),l=(n(119),o.a.initializeApp({apiKey:"AIzaSyANnLNgmvdFz6kAfhz4PsSZ5JSFdreoi8U",authDomain:"task-manager-88105.firebaseapp.com",projectId:"task-manager-88105",storageBucket:"task-manager-88105.appspot.com",messagingSenderId:"723819818391",appId:"1:723819818391:web:4f294ffe65c331b284e8d2"})),j=l.auth(),u=n(4),d=r.a.createContext();function b(){return Object(a.useContext)(d)}function O(e){var t=e.children,n=Object(a.useState)(),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!0),l=Object(s.a)(o,2),b=l[0],O=l[1];Object(a.useEffect)((function(){return j.onAuthStateChanged((function(e){i(e),O(!1)}))}),[]);var h={currentUser:c,login:function(e,t){return j.signInWithEmailAndPassword(e,t)},signup:function(e,t){return j.createUserWithEmailAndPassword(e,t)},logout:function(){return j.signOut()},resetPassword:function(e){return j.sendPasswordResetEmail(e)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(u.jsx)(d.Provider,{value:h,children:!b&&t})}var h=n(28),p=n(18),m=n(69),x=n(101),f=["component"];function g(e){var t=e.component,n=Object(x.a)(e,f),a=b().currentUser;return Object(u.jsx)(p.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return a?Object(u.jsx)(t,Object(m.a)({},e)):Object(u.jsx)(p.a,{to:"/task-manager/signin"})}}))}var v,k,w,y,S=n(166),E=n(175),C=n(169),P=n(176),D=n(168),R=n(38),A=n.n(R),W=n(103),F=n(165),I=n(24),N=n(25),U=n(177),z=n(161),q=N.a.form(v||(v=Object(I.a)(["\n  width: 100%;\n  margin-top: 2vh;\n"]))),T=Object(N.a)(z.a)(k||(k=Object(I.a)(["\n    &&& {\n    margin : 2vh 0;\n    }\n"]))),J=Object(N.a)(U.a)(w||(w=Object(I.a)(["\n&&& {\n    margin : 1vh;\n    background-color : #f50057;\n}\n"]))),L=N.a.div(y||(y=Object(I.a)(["\n  margin-top: 8vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])));function M(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=b(),c=r.currentUser,i=r.updatePassword,o=r.updateEmail,l=Object(a.useState)(""),j=Object(s.a)(l,2),d=j[0],O=j[1],m=Object(a.useState)(!1),x=Object(s.a)(m,2),f=x[0],g=x[1],v=Object(p.g)();return Object(u.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(u.jsx)(S.a,{}),Object(u.jsxs)(L,{children:[Object(u.jsx)(J,{children:Object(u.jsx)(A.a,{})}),Object(u.jsx)(W.a,{component:"h1",variant:"h5",children:"Update Profile"}),d&&Object(u.jsxs)(P.a,{severity:"error",children:[Object(u.jsx)(D.a,{children:"Error"}),d]}),Object(u.jsxs)(q,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==n.current.value)return O("Passwords do not match");var r=[];g(!0),O(""),e.current.value!==c.email&&r.push(o(e.current.value)),t.current.value&&r.push(i(t.current.value)),Promise.all(r).then((function(){v.push("/task-manager")})).catch((function(){O("Failed to update profile")})).finally((function(){g(!1)}))},children:[Object(u.jsxs)(C.a,{container:!0,spacing:2,children:[Object(u.jsx)(C.a,{item:!0,xs:12,children:Object(u.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:e,defaultValue:c.email})}),Object(u.jsx)(C.a,{item:!0,xs:12,children:Object(u.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t,placeholder:"leave blank to keep same"})}),Object(u.jsx)(C.a,{item:!0,xs:12,children:Object(u.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirm-password",autoComplete:"current-password",inputRef:n,placeholder:"leave blank to keep same"})})]}),Object(u.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:f,children:"Update"}),Object(u.jsx)(C.a,{container:!0,justifyContent:"flex-end",children:Object(u.jsx)(C.a,{item:!0,children:Object(u.jsx)(h.b,{to:"/task-manager",variant:"body2",children:"Cancel"})})})]})]})]})}var B=n(31),K=n.n(B),G=n(40),V=n(170),Y=n(167),Z=n(171),H=n(172);function Q(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=b().login,r=Object(a.useState)(""),c=Object(s.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(!1),j=Object(s.a)(l,2),d=j[0],O=j[1],m=Object(a.useState)(!1),x=Object(s.a)(m,2),f=x[0],g=x[1],v=Object(p.g)();function k(){return(k=Object(G.a)(K.a.mark((function a(r){return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,o(""),O(!0),a.next=6,n(e.current.value,t.current.value);case 6:v.push("/task-manager"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0),o("Failed to log in");case 13:O(!1);case 14:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(u.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(u.jsx)(S.a,{}),Object(u.jsxs)(L,{children:[Object(u.jsx)(J,{children:Object(u.jsx)(A.a,{})}),Object(u.jsx)(W.a,{component:"h1",variant:"h5",children:"Sign in"}),i&&Object(u.jsxs)(P.a,{severity:"error",children:[Object(u.jsx)(D.a,{children:"Error"}),i]}),Object(u.jsxs)(q,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(u.jsx)(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e}),Object(u.jsx)(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:f?"text":"password",id:"password",autoComplete:"current-password",inputRef:t,InputProps:{endAdornment:Object(u.jsx)(V.a,{position:"end",children:Object(u.jsx)(Y.a,{"aria-label":"toggle password visibility",onClick:function(){return g(!f)},onMouseDown:function(){return g(!f)},children:f?Object(u.jsx)(Z.a,{}):Object(u.jsx)(H.a,{})})})}}),Object(u.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:d,children:"Sign In"}),Object(u.jsxs)(C.a,{container:!0,children:[Object(u.jsx)(C.a,{item:!0,xs:!0,children:Object(u.jsx)(h.b,{to:"/task-manager/forgot-password",variant:"body2",children:"Forgot password?"})}),Object(u.jsx)(C.a,{item:!0,children:Object(u.jsx)(h.b,{to:"/task-manager/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}function X(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=b().signup,c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1],j=Object(a.useState)(!1),d=Object(s.a)(j,2),O=d[0],m=d[1],x=Object(p.g)();function f(){return(f=Object(G.a)(K.a.mark((function a(c){return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){a.next=3;break}return a.abrupt("return",l("Passwords do not match"));case 3:return a.prev=3,l(""),m(!0),a.next=8,r(e.current.value,t.current.value);case 8:x.push("/task-manager"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(3),console.log(a.t0),l("Failed to create an account");case 15:m(!1);case 16:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(u.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(u.jsx)(S.a,{}),Object(u.jsxs)(L,{children:[Object(u.jsx)(J,{children:Object(u.jsx)(A.a,{})}),Object(u.jsx)(W.a,{component:"h1",variant:"h5",children:"Sign up"}),o&&Object(u.jsxs)(P.a,{severity:"error",children:[Object(u.jsx)(D.a,{children:"Error"}),o]}),Object(u.jsxs)(q,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(u.jsxs)(C.a,{container:!0,spacing:2,children:[Object(u.jsx)(C.a,{item:!0,xs:12,children:Object(u.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:e})}),Object(u.jsx)(C.a,{item:!0,xs:12,children:Object(u.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:t})}),Object(u.jsx)(C.a,{item:!0,xs:12,children:Object(u.jsx)(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirm-password",autoComplete:"current-password",inputRef:n})})]}),Object(u.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:O,children:"Sign Up"}),Object(u.jsx)(C.a,{container:!0,justifyContent:"flex-end",children:Object(u.jsx)(C.a,{item:!0,children:Object(u.jsx)(h.b,{to:"/task-manager/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}function $(){var e=Object(a.useRef)(),t=b().resetPassword,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),j=l[0],d=l[1],O=Object(a.useState)(""),p=Object(s.a)(O,2),m=p[0],x=p[1];function f(){return(f=Object(G.a)(K.a.mark((function n(a){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,x(""),i(""),d(!0),n.next=7,t(e.current.value);case 7:x("check your inbox for further instructions"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),i("Failed to reset Password");case 14:d(!1);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(u.jsxs)(F.a,{component:"main",maxWidth:"xs",children:[Object(u.jsx)(S.a,{}),Object(u.jsxs)(L,{children:[Object(u.jsx)(J,{children:Object(u.jsx)(A.a,{})}),Object(u.jsx)(W.a,{component:"h1",variant:"h5",children:"Reset Password"}),c&&Object(u.jsxs)(P.a,{severity:"error",children:[Object(u.jsx)(D.a,{children:"Error"}),c]}),m&&Object(u.jsxs)(P.a,{severity:"success",children:[Object(u.jsx)(D.a,{children:"Success"}),m]}),Object(u.jsxs)(q,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(u.jsx)(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:e}),Object(u.jsx)(T,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:j,children:"Reset Password"}),Object(u.jsxs)(C.a,{container:!0,children:[Object(u.jsx)(C.a,{item:!0,xs:!0,children:Object(u.jsx)(h.b,{to:"/task-manager/signin",variant:"body2",children:"Sign In"})}),Object(u.jsx)(C.a,{item:!0,children:Object(u.jsx)(h.b,{to:"/task-manager/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}var _,ee,te,ne=n(174),ae=n(99),re=n(178),ce=n(97),ie=n.n(ce),se=n(173),oe=Object(N.a)(W.a)(_||(_=Object(I.a)(["\n  flex-grow : 1;\n"]))),le=N.a.p(ee||(ee=Object(I.a)(["\n    padding: 4%;\n"]))),je=Object(N.a)(se.a)(te||(te=Object(I.a)(["\n    background: #b80751;\n"])));function ue(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],l=i[1],j=b(),d=j.currentUser,O=j.logout,m=Object(p.g)();function x(){return(x=Object(G.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.prev=1,e.next=4,O();case 4:m.pushState("/task-manager/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{children:[Object(u.jsx)(S.a,{}),Object(u.jsx)(je,{position:"fixed",children:Object(u.jsxs)(ne.a,{children:[Object(u.jsx)(oe,{align:"center",variant:"h6",color:"inherit",children:"Task Manager"}),Object(u.jsx)(Y.a,{"area-haspopup":"true",color:"inherit",onClick:function(e){r(e.currentTarget)},children:Object(u.jsx)(ie.a,{})}),Object(u.jsxs)(ae.a,{id:"menu-appbar","aria-controls":"fade-menu",keepMounted:!0,anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:function(){r(null)},children:[Object(u.jsxs)(le,{children:["Email : ",d.email," "]}),Object(u.jsx)("hr",{}),Object(u.jsx)(re.a,{component:h.b,to:"task-manager/update-profile",children:"Update Profile"}),Object(u.jsx)(re.a,{onClick:function(){return x.apply(this,arguments)},children:"Log Out"})]})]})}),o&&Object(u.jsxs)(P.a,{severity:"error",children:[Object(u.jsx)(D.a,{children:"Error"}),o]})]})}var de,be,Oe,he,pe,me,xe=n(100),fe=n(68),ge=n.n(fe),ve=n.p+"static/media/reminder.32531d2d.mp3",ke=Object(N.a)(E.a)(de||(de=Object(I.a)(["\n    width: 60vw;\n"]))),we=N.a.div(be||(be=Object(I.a)(["\n     display: flex;\n    margin-top: 15vh;\n    justify-content: center;\n"]))),ye=Object(N.a)(z.a)(Oe||(Oe=Object(I.a)(["\n    margin-left : 2vw;\n"]))),Se=N.a.h2(he||(he=Object(I.a)(["\n     color: #3f51b5;\n    text-align: center;\n    margin-top: 10vh;\n"]))),Ee=N.a.table(pe||(pe=Object(I.a)(["\n    margin: 5vh auto;\n    color: #3f51b5;\n"]))),Ce=Object(N.a)(z.a)(me||(me=Object(I.a)(["\n      margin: 0 1vw;\n"])));function Pe(){var e;e=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks"));var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(s.a)(i,2),l=o[0],j=o[1],d=Object(a.useState)(e),b=Object(s.a)(d,2),O=b[0],h=b[1],p=Object(a.useState)(!1),m=Object(s.a)(p,2),x=m[0];m[1];return Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(O))}),[O]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)(we,{children:[Object(u.jsx)(ke,{label:"ADD TASK",variant:"filled",value:r,onChange:function(e){c(e.target.value)}}),Object(u.jsx)(ye,{variant:"contained",color:"primary",onClick:function(){var e={id:0===O.length?1:O[O.length-1].id+1,taskName:r,isEditing:!1,isDone:!1};h([].concat(Object(xe.a)(O),[e])),c("")},disabled:""===r,children:"ADD"})]}),O.length>0?Object(u.jsxs)(Ee,{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Task"}),Object(u.jsx)("th",{children:"Action"})]})}),O.map((function(e){return Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.isEditing?Object(u.jsx)(E.a,{id:"standard-basic",value:l,onChange:function(e){return function(e){j(e)}(e.target.value)}}):e.isDone?Object(u.jsx)("s",{children:e.taskName}):Object(u.jsx)("span",{children:e.taskName})}),Object(u.jsx)("td",{children:e.isEditing?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Ce,{variant:"outlined",color:"primary",size:"small",disabled:""===l,onClick:function(){return function(e){h(O.map((function(t){return t.id===e.id&&(t.taskName=l),t}))),h(O.map((function(t){return t.id===e.id&&(t.isEditing=!1),t}))),j("")}(e)},children:"Save"}),Object(u.jsx)(Ce,{variant:"outlined",color:"secondary",size:"small",onClick:function(){return function(e){h(O.map((function(t){return t.id===e.id&&(t.isEditing=!1),t})))}(e)},children:"Cancel"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Ce,{variant:"outlined",color:"primary",size:"small",onClick:function(t){return function(e){h(O.map((function(t){return t.id===e.id&&(t.isEditing=!0),t}))),j(e.taskName)}(e)},children:"EDIT"}),e.isDone?Object(u.jsx)(Ce,{variant:"outlined",color:"default",size:"small",onClick:function(){return function(e){h(O.map((function(t){return t.id===e.id&&(t.isDone=!1),t})))}(e)},children:"UNDONE"}):Object(u.jsx)(Ce,{variant:"outlined",color:"default",size:"small",onClick:function(){return function(e){h(O.map((function(t){return t.id===e.id&&(t.isDone=!0),t})))}(e)},children:"DONE"}),Object(u.jsx)(Ce,{variant:"outlined",color:"secondary",size:"small",onClick:function(){return function(e){h(O.filter((function(t){return t!==e})))}(e)},children:"DELETE"})]})})]})},e.id)}))]}):Object(u.jsx)(Se,{children:" NO TASKS TO DO "})]}),Object(u.jsx)(ge.a,{url:ve,playStatus:x?ge.a.status.PLAYING:ge.a.status.STOPPED})]})}function De(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ue,{}),Object(u.jsx)(Pe,{})]})}var Re=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(a.Fragment,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(O,{children:Object(u.jsxs)(p.d,{children:[Object(u.jsx)(g,{exact:!0,path:"/task-manager/",component:De}),Object(u.jsx)(g,{exact:!0,path:"/task-manager/update-profile",component:M}),Object(u.jsx)(p.b,{path:"/task-manager/signup",component:X}),Object(u.jsx)(p.b,{path:"/task-manager/signin",component:Q}),Object(u.jsx)(p.b,{path:"/task-manager/forgot-password",component:$})]})})})})})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(Re,{})}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.65622d4b.chunk.js.map