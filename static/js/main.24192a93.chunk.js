(this["webpackJsonpreact-chat-bot"]=this["webpackJsonpreact-chat-bot"]||[]).push([[0],{84:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(8),a=n.n(o),r=n(18),i=n(15),c=n(55),p=n.n(c),d=(n(84),n(50)),u=n.n(d),l=n(56),h=n(25),g=n(26),f=n(29),b=n(28),j=n(129),x=n(63),v=n.n(x),y=n(64),m=n.n(y),O="SET_JSON",w="SEND_MESSAGE",F="UPDATE_ID";function C(e){return{type:O,payload:e}}function k(e){return{type:w,payload:e}}function D(e){return e<0&&(e=0),{type:F,payload:e}}var S=n.p+"static/media/logo.103b5fa1.svg",E=(n(86),n(57)),I=n.n(E),B=n(6),M={chatWindowCenter:{backgroundColor:"#FFFFFF",display:"flex",flexDirection:"column",flex:1,overflowY:"scroll",padding:"10px 20px"},loadingSpinner:{alignSelf:"center",paddingTop:"100px"},receipientName:{color:"#354058"},authorName:{color:"#5294FC"},chatMessage:{display:"flex",flexDirection:"column",padding:"5px 0px"},chatText:{color:"#B7BFC8"}},N=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(){var e=document.getElementById("chat-scroll");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props.messages;return Object(B.jsx)("div",{style:M.chatWindowCenter,id:"chat-scroll",children:t.length<1?Object(B.jsx)("div",{style:M.loadingSpinner,children:Object(B.jsx)(I.a,{size:15,color:"#C6EEF0"})}):t.map((function(t,n){return Object(B.jsxs)("div",{style:M.chatMessage,children:[Object(B.jsx)("div",{style:t.author===e.props.user?M.authorName:M.receipientName,children:t.author}),Object(B.jsx)("div",{style:M.chatText,children:"password"===t.style?t.message.split("").map((function(e){return"*"})):t.message})]},n)}))})}}]),n}(s.Component);var T=Object(r.b)((function(e){return{onboardingJSON:e.json,messages:e.messages,currentID:e.id}}))(N),J=n(128),W=n(62),q=n.n(W),R={chatWindowBottom:{backgroundColor:"#EBF5F6",height:"60px",display:"flex",flexDirection:"row",padding:"20px"},inputBox:{backgroundColor:"#FFFFFF",marginRight:"10px",borderRadius:"5%",marginBottom:"0",width:"100%",height:"93%"},sendButton:{color:"#FFFFFF",backgroundColor:"#5294FC",marginLeft:"10px",height:"93%"}},P=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={input:""},s}return Object(g.a)(n,[{key:"sendInput",value:function(e){var t=this.props,n=t.onboardingJSON,s=t.currentID,o={message:e,author:this.props.author};"password"===n[s].style&&(o.style="password"),this.props.sendMessage(o),this.setState({input:""})}},{key:"render",value:function(){var e=this,t=this.props,n=t.onboardingJSON,s=t.currentID,o=this.state.input,a=n.length&&!n[s].validation;return Object(B.jsxs)("div",{style:R.chatWindowBottom,children:[Object(B.jsx)(J.a,{disabled:a,variant:"outlined",onChange:function(t){return e.setState({input:t.target.value})},placeholder:"Type here...",style:R.inputBox,value:o,type:n.length>0&&"password"===n[s].style?"password":null,onKeyDown:function(t){"Enter"===t.key&&o.length>0&&(t.preventDefault(),e.sendInput(o))}}),Object(B.jsx)(j.a,{disabled:a,onClick:function(t){t.preventDefault(),o.length>0&&e.sendInput(o)},style:R.sendButton,children:Object(B.jsx)(q.a,{})})]})}}]),n}(s.Component);var _=Object(r.b)((function(e){return{onboardingJSON:e.json,messages:e.messages,currentID:e.id}}),(function(e){return Object(i.b)({setJSON:C,sendMessage:k,updateID:D},e)}))(P),L={root:{backgroundColor:"#B1E8EC",backgroundImage:"linear-gradient( -7deg, #B1E8EC 0%, #B1E8EC 50%, #BEEEF0 50%, #BEEEF0 50%)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},supportWindow:{backgroundColor:"#354058",width:"225px",height:"50px",display:"flex",justifyContent:"space-evenly",alignItems:"center",boxShadow:"0px -2px 40px -10px rgba(0,0,0,0.3)",borderRadius:"5px 5px 0px 0px"},supportIcon:{color:"#5294FC"},supportText:{color:"#CBD3DC",textTransform:"none",fontSize:"16px"},supportFakeButton:{color:"#5294FC"},chatWindow:{display:"flex",flexDirection:"column",width:"450px",height:"450px",boxShadow:"0px 12px 40px -10px rgba(0,0,0,0.3)"},chatWindowTop:{backgroundColor:"#EBF5F6",height:"70px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",paddingLeft:"10px"},receipientPic:{width:"70px"},receipientName:{color:"#354058"}},Y="React Bot",U=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={},console.log("last updated: September 14, 2021"),s}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.getOnboardingQuestions()}},{key:"componentDidUpdate",value:function(){var e=this.props.messages,t=e.length-1;t>0&&e[t].author!==Y&&this.checkResponse(e[t].message)}},{key:"getOnboardingQuestions",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json",fetch("https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json").then((function(e){return e.ok?e.json():[{id:-1,question:"Sorry, we can't help you at this time. Have a nice day!",validation:!1},{id:1,question:"Sorry, we encountered an error. Please try again later!",validation:!1,paths:-1}]})).then((function(e){t.props.setJSON(e),t.props.sendMessage({message:e[1].question,author:Y})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"checkResponse",value:function(e){var t=this.props,n=t.onboardingJSON,s=t.currentID;if(!1!==n[s].validation){var o=e;if(e=e.trim().toLowerCase(),"boolean"===typeof n[s].validation)return this.postMessage(o,s),this.props.sendMessage({message:n[n[s].paths].question,author:Y}),void this.props.updateID(n[s].paths);if("string"===typeof n[s].validation){if(new RegExp(n[s].validation).test(e)){this.postMessage(o,s);var a=n[s].paths;return this.props.sendMessage({message:n[a].question,author:Y}),void this.props.updateID(a)}return this.props.sendMessage({message:"Your response didn't meet the criteria, please try again",author:Y}),void this.props.sendMessage({message:n[s].question,author:Y})}if(n[s].validation.includes(e)){this.postMessage(o,s);var r=-1;return-1===(r=Object.keys(n[s].paths).length>1?n[s].paths[e]:n[s].paths)&&(r=0),this.props.sendMessage({message:n[r].question,author:Y}),void this.props.updateID(r)}return this.props.sendMessage({message:"I don't understand your response, please try again",author:Y}),void this.props.sendMessage({message:n[s].question,author:Y})}}},{key:"postMessage",value:function(e,t){var n="https://jsonplaceholder.typicode.com/posts/".concat(t);fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){}))}},{key:"render",value:function(){return Object(B.jsxs)("div",{style:L.root,children:[Object(B.jsxs)("div",{style:{display:"flex"},children:[Object(B.jsx)("div",{style:{width:"225px",height:"50px"}}),Object(B.jsxs)(j.a,{style:L.supportWindow,children:[Object(B.jsx)("div",{style:L.supportIcon,children:Object(B.jsx)(v.a,{})}),Object(B.jsx)("div",{style:L.supportText,children:" Live Support "}),Object(B.jsx)("div",{style:L.supportFakeButton,children:Object(B.jsx)(m.a,{})})]})]}),Object(B.jsxs)("div",{style:L.chatWindow,children:[Object(B.jsxs)("div",{style:L.chatWindowTop,children:[Object(B.jsx)("img",{src:S,style:L.receipientPic,alt:"Bot Icon"}),Object(B.jsx)("div",{style:L.receipientName,children:Y})]}),Object(B.jsx)(T,{user:"You"}),Object(B.jsx)(_,{author:"You"})]})]})}}]),n}(s.Component);var z=Object(r.b)((function(e){return{onboardingJSON:e.json,messages:e.messages,currentID:e.id}}),(function(e){return Object(i.b)({setJSON:C,sendMessage:k,updateID:D},e)}))(U),A=n(65),H=[],Q={},G=Object(i.c)({json:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return[].concat(Object(A.a)(e),[t.payload]);default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return t.payload;default:return e}}}),K=Object(i.a)(p.a)(i.d);a.a.render(Object(B.jsx)(r.a,{store:K(G),children:Object(B.jsx)(z,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.24192a93.chunk.js.map