(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{305:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3Bm9B",active:"Dialogs_active__2VT2A",dialogsItems:"Dialogs_dialogsItems__3hiAE",dialogsItem:"Dialogs_dialogsItem__2i0jM",msgs:"Dialogs_msgs__1-qcK",msg:"Dialogs_msg__1CfjL",addDialogDiv:"Dialogs_addDialogDiv__2PCNQ"}},308:function(e,a,t){"use strict";t.r(a);var s=t(0),i=t.n(s),n=t(127),l=t(305),m=t.n(l),o=t(12),c=function(e){return i.a.createElement("div",{className:"true"===e.active?m.a.item+" "+m.a.active:m.a.item},i.a.createElement(o.c,{to:"/dialogs/"+e.id}," ",e.name))},d=function(e){return i.a.createElement("div",{className:m.a.msg},e.message)},g=t(70),r=t(71),u=t(19),_=t(17),v=function(e){var a=e.dialogs,t=e.messages,s=a.map(function(e){return i.a.createElement(c,{key:e.id,id:e.id,name:e.name})}),n=t.map(function(e,a){return i.a.createElement(d,{key:a,message:e.message})}),l=e.addMsg,o=Object(_.a)(50),v=Object(r.a)({form:"AddMessageForm"})(function(e){return i.a.createElement("form",{action:"",onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(g.a,{component:u.b,validate:[_.c,o],name:"message",placeholder:"live your feed in history and let computer machine works!"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))});return i.a.createElement("div",null,i.a.createElement("div",{className:m.a.dialogs},i.a.createElement("div",{className:m.a.dialogsItems},s),i.a.createElement("div",{className:m.a.msgs},n)),i.a.createElement("div",{className:m.a.addDialogDiv},i.a.createElement(v,{onSubmit:function(e){console.log(e),l(e.message)}})))},E=t(11),f=t(106),D=t(9),b=Object(D.d)(Object(E.b)(function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}},{addMsg:n.a}),f.a)(v);a.default=b}}]);
//# sourceMappingURL=2.b0f45100.chunk.js.map