(this["webpackJsonptimers-day"]=this["webpackJsonptimers-day"]||[]).push([[0],{252:function(e,t,r){},253:function(e,t,r){},490:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(19),c=r.n(i),s=(r(252),r(253),r(69)),u=r(497),o=r(101),l=r(47),d=r(494),f=r(243),p=r(244),j=r(242),b=r(495),m=r(499),h=r(95),O=r(245),x=r(500),v=r(102),g=r.n(v),w=r(136),C=r.n(w),k=r(493),y=r(10);function S(e){var t=Object(n.useState)(new Date(Date.now())),r=Object(s.a)(t,2),a=r[0],i=r[1];return Object(k.a)((function(){var t=new Date(Date.now()-e.startTimeMs);i(t)}),1e3,{immediate:!0}),Object(y.jsx)(b.a,{title:e.title,actions:[Object(y.jsx)(O.a,{style:{color:h.blue.primary},onClick:e.onEditClick},"edit"),Object(y.jsx)(x.a,{style:{color:h.red.primary},onClick:e.onDeleteClick},"delete")],style:{textAlign:"left"},children:Object(y.jsx)(C.a,{style:{textAlign:"center"},level:2,children:Object(y.jsxs)(m.b,{size:"small",children:[Object(y.jsx)(g.a,{children:a.getUTCHours().toString().padStart(2,"0")}),Object(y.jsx)(g.a,{children:":"}),Object(y.jsx)(g.a,{children:a.getUTCMinutes().toString().padStart(2,"0")}),Object(y.jsx)(g.a,{children:":"}),Object(y.jsx)(g.a,{children:a.getUTCSeconds().toString().padStart(2,"0")})]})})})}var T=r(65),D=r(496),F=r(498),E=r(238);function A(e){var t=e.defaultName,r=e.onSaveClick,n=e.onDiscardClick,a=e.isLoading,i=(e.error,Object(E.useForm)()),c=Object(s.a)(i,1)[0];return Object(y.jsx)(b.a,{title:"Edit Timer",actions:[Object(y.jsx)(f.a,{type:"link",loading:a,onClick:function(e){c.submit()},children:"Save"}),Object(y.jsx)(f.a,{danger:!0,type:"link",disabled:a,onClick:n,children:"Discard"})],style:{textAlign:"left"},children:Object(y.jsx)(C.a,{style:{textAlign:"center",fontSize:"12pt"},level:2,children:Object(y.jsx)(D.a,Object(T.a)(Object(T.a)({},{labelCol:{span:12},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{name:t},onFinish:function(){r(c.getFieldValue("name"))},onFinishFailed:function(){},form:c,children:Object(y.jsx)(D.a.Item,{label:"Timer Name",name:"name",rules:[{required:!0,message:"Please input timer name!"}],children:Object(y.jsx)(F.a,{autoFocus:!0,placeholder:"Timer Name"})})}))})})}var N=r(114),z=N.c,L=r(32),M=r.n(L),P=r(53),B=r(46),I=r(115),U=r.n(I),J="/api",R={};R.get=function(){var e=Object(P.a)(M.a.mark((function e(t){var r,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(J+t);case 3:if(r=e.sent,200===(n=r.data).statusCode){e.next=7;break}throw new Error(n.error||"Something went wrong");case 7:return e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),R.post=function(){var e=Object(P.a)(M.a.mark((function e(t,r){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.post(J+t,r);case 3:if(n=e.sent,200===(a=n.data).statusCode){e.next=7;break}throw new Error(a.error||"Something went wrong");case 7:return e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}(),R.put=function(){var e=Object(P.a)(M.a.mark((function e(t,r){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.put(J+t,r);case 3:if(n=e.sent,200===(a=n.data).statusCode){e.next=7;break}throw new Error(a.error||"Something went wrong");case 7:return e.abrupt("return",a.data);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}(),R.delete=function(){var e=Object(P.a)(M.a.mark((function e(t){var r,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.delete(J+t);case 3:if(r=e.sent,200===(n=r.data).statusCode){e.next=7;break}throw new Error(n.error||"Something went wrong");case 7:return e.abrupt("return",n.data);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();var V=R,q=Object(B.b)("timers/fetchTimers",Object(P.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.get("/timers");case 2:return t=e.sent.list,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),H=Object(B.b)("timers/updateTimer",function(){var e=Object(P.a)(M.a.mark((function e(t){var r,n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.title,e.next=3,V.post("/timers/"+r,{title:n});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),W=Object(B.b)("timers/createTimer",function(){var e=Object(P.a)(M.a.mark((function e(t){var r,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.title,e.next=3,V.put("/timers",{title:r});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(B.b)("timers/deleteTimer",function(){var e=Object(P.a)(M.a.mark((function e(t){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.delete("/timers/"+t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),K=Object(B.c)({name:"timers",initialState:{timers:[],status:"idle",error:""},reducers:{},extraReducers:function(e){e.addCase(q.pending,(function(e,t){e.status="loading"})).addCase(q.fulfilled,(function(e,t){e.timers=t.payload.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{status:"idle",error:""})})),e.status="completed"})).addCase(q.rejected,(function(e,t){e.status="failed",t.error&&(e.error=t.error.message)})).addCase(H.fulfilled,(function(e,t){var r=t.payload,n=r.id,a=r.title,i=e.timers.find((function(e){return e.id===n}));i&&(i.title=a,i.status="completed")})).addCase(H.pending,(function(e,t){var r=t.meta.arg.id,n=e.timers.find((function(e){return e.id===r}));n&&(n.status="loading")})).addCase(H.rejected,(function(e,t){var r=t.meta.arg.id,n=e.timers.find((function(e){return e.id===r}));n&&(n.error=t.error.message,n.status="failed")})).addCase(G.fulfilled,(function(e,t){})).addCase(G.pending,(function(e,t){var r=t.meta.arg;e.timers=e.timers.filter((function(e){return e.id!==r}))})).addCase(W.fulfilled,(function(e,t){e.timers.push(Object(T.a)(Object(T.a)({},t.payload),{},{status:"idle",error:""}))}))}}),Q=function(e){return e.timers.timers},X=K.reducer,Y=u.a.Title;function Z(e){var t=Object(N.b)(),r=z(Q),a=z((function(e){return e.timers.status})),i=Object(n.useState)(-1),c=Object(s.a)(i,2),u=c[0],b=c[1],m=Object(n.useState)(!1),h=Object(s.a)(m,2),O=h[0],x=h[1];Object(n.useEffect)((function(){"idle"===a&&t(q())}),[t,a]);var v=Object(n.useCallback)((function(e){b(e)}),[]),g=Object(n.useCallback)((function(e,r){t(H({id:e,title:r})).then(B.d).then((function(e){})).finally((function(){return b(-1)}))}),[t]),w=Object(n.useCallback)((function(e){b(-1)}),[b]),C=Object(n.useCallback)((function(e){t(G(e))}),[t]),k=Object(n.useCallback)((function(){x(!0),t(W({title:"Timer"})).then(B.d).then((function(e){b(r.length)})).finally((function(){return x(!1)}))}),[r,t]);return Object(y.jsx)(o.a,{style:{marginTop:"10px",paddingBottom:"50px",justifyContent:"center"},align:"middle",children:Object(y.jsxs)(l.a,{span:22,children:[Object(y.jsx)(Y,{level:1,style:{fontSize:"20pt"},children:"Timers"}),"loading"===a?Object(y.jsx)(d.a,{}):Object(y.jsxs)(j.a,{type:"top",leaveReverse:!0,component:o.a,componentProps:{gutter:[16,23],align:"middle",style:{justifyContent:"center"}},children:[r.map((function(e,t){return Object(y.jsx)(l.a,{span:24,children:Object(y.jsx)("div",{style:{maxWidth:"300px",margin:"0 auto"},children:u===t?Object(y.jsx)(A,{onSaveClick:function(t){return g(e.id,t)},onDiscardClick:function(){return w(t)},defaultName:e.title,isLoading:"loading"===e.status,error:e.error}):Object(y.jsx)(S,{onDeleteClick:function(){return C(e.id)},onEditClick:function(){return v(t)},startTimeMs:e.startTime,title:e.title})})},e.id)})),Object(y.jsx)(l.a,{children:Object(y.jsx)(f.a,{size:"large",type:"primary",shape:"circle",loading:O,onClick:function(e){return k()},icon:Object(y.jsx)(p.a,{})})},"0")]})]})})}var $=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(Z,{})})},_=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,501)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),i(e),c(e)}))},ee=Object(B.a)({reducer:{timers:X}});c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(N.a,{store:ee,children:Object(y.jsx)($,{})})}),document.getElementById("root")),_()}},[[490,1,2]]]);
//# sourceMappingURL=main.cb56f226.chunk.js.map