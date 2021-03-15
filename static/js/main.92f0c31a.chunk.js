(this["webpackJsonpreact-chat-bot"]=this["webpackJsonpreact-chat-bot"]||[]).push([[0],{84:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(8),a=n.n(o),r=n(18),i=n(15),c=n(56),p=n.n(c),d=(n(84),n(51)),u=n.n(d),l=n(57),h=n(26),g=n(27),f=n(30),b=n(29),j="SET_JSON",x="SEND_MESSAGE",v="UPDATE_ID";function y(e){return{type:j,payload:e}}function m(e){return{type:x,payload:e}}function O(e){return e<0&&(e=0),{type:v,payload:e}}var w=n(20),F=n.n(w),k=n.p+"static/media/logo.103b5fa1.svg",C=(n(86),n(58)),D=n.n(C),S=n(6),E={chatWindowCenter:{backgroundColor:"#FFFFFF",display:"flex",flexDirection:"column",flex:1,overflowY:"scroll",padding:"10px 20px"},loadingSpinner:{alignSelf:"center",paddingTop:"100px"},receipientName:{color:"#354058"},authorName:{color:"#5294FC"},chatMessage:{display:"flex",flexDirection:"column",padding:"5px 0px"},chatText:{color:"#B7BFC8"}},I=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(){var e=document.getElementById("chat-scroll");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props.messages;return Object(S.jsx)("div",{style:E.chatWindowCenter,id:"chat-scroll",children:t.length<1?Object(S.jsx)("div",{style:E.loadingSpinner,children:Object(S.jsx)(D.a,{size:15,color:"#C6EEF0"})}):F.a.map(t,(function(t,n){return Object(S.jsxs)("div",{style:E.chatMessage,children:[Object(S.jsx)("div",{style:t.author===e.props.user?E.authorName:E.receipientName,children:t.author}),Object(S.jsx)("div",{style:E.chatText,children:"password"===t.style?F.a.map(t.message.split(""),(function(e){return"*"})):t.message})]},n)}))})}}]),n}(s.Component);var B=Object(r.b)((function(e){return{onboardingJSON:e.json,messages:e.messages,currentID:e.id}}))(I),M=n(128),N=n(129),T=n(63),J=n.n(T),W={chatWindowBottom:{backgroundColor:"#EBF5F6",height:"60px",display:"flex",flexDirection:"row",padding:"20px"},inputBox:{backgroundColor:"#FFFFFF",marginRight:"10px",borderRadius:"5%",marginBottom:"0",width:"100%",height:"93%"},sendButton:{color:"#FFFFFF",backgroundColor:"#5294FC",marginLeft:"10px",height:"93%"}},q=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={input:""},s}return Object(g.a)(n,[{key:"sendInput",value:function(e){var t=this.props,n=t.onboardingJSON,s=t.currentID,o={message:e,author:this.props.author};"password"===n[s].style&&(o.style="password"),this.props.sendMessage(o),this.setState({input:""})}},{key:"render",value:function(){var e=this,t=this.props,n=t.onboardingJSON,s=t.currentID,o=this.state.input,a=n.length&&!n[s].validation;return Object(S.jsxs)("div",{style:W.chatWindowBottom,children:[Object(S.jsx)(M.a,{disabled:a,variant:"outlined",onChange:function(t){return e.setState({input:t.target.value})},placeholder:"Type here...",style:W.inputBox,value:o,type:n.length>0&&"password"===n[s].style?"password":null,onKeyDown:function(t){"Enter"===t.key&&o.length>0&&(t.preventDefault(),e.sendInput(o))}}),Object(S.jsx)(N.a,{disabled:a,onClick:function(t){t.preventDefault(),o.length>0&&e.sendInput(o)},style:W.sendButton,children:Object(S.jsx)(J.a,{})})]})}}]),n}(s.Component);var R=Object(r.b)((function(e){return{onboardingJSON:e.json,messages:e.messages,currentID:e.id}}),(function(e){return Object(i.b)({setJSON:y,sendMessage:m,updateID:O},e)}))(q),P=n(64),_=n.n(P),L=n(65),Y=n.n(L),U={root:{backgroundColor:"#B1E8EC",backgroundImage:"linear-gradient( -7deg, #B1E8EC 0%, #B1E8EC 50%, #BEEEF0 50%, #BEEEF0 50%)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"},supportWindow:{backgroundColor:"#354058",width:"225px",height:"50px",display:"flex",justifyContent:"space-evenly",alignItems:"center",boxShadow:"0px -2px 40px -10px rgba(0,0,0,0.3)",borderRadius:"5px 5px 0px 0px"},supportIcon:{color:"#5294FC"},supportText:{color:"#CBD3DC",textTransform:"none",fontSize:"16px"},supportFakeButton:{color:"#5294FC"},chatWindow:{display:"flex",flexDirection:"column",width:"450px",height:"450px",boxShadow:"0px 12px 40px -10px rgba(0,0,0,0.3)"},chatWindowTop:{backgroundColor:"#EBF5F6",height:"70px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",paddingLeft:"10px"},receipientPic:{width:"70px"},receipientName:{color:"#354058"}},z="React Bot",A=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={},s}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.getOnboardingQuestions()}},{key:"componentDidUpdate",value:function(){var e=this.props.messages,t=e.length-1;t>0&&e[t].author!==z&&this.checkResponse(e[t].message)}},{key:"getOnboardingQuestions",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json",fetch("https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json").then((function(e){return e.ok?e.json():[{id:-1,question:"Sorry, we can't help you at this time. Have a nice day!",validation:!1},{id:1,question:"Sorry, we encountered an error. Please try again later!",validation:!1,paths:-1}]})).then((function(e){t.props.setJSON(e),t.props.sendMessage({message:e[1].question,author:z})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"checkResponse",value:function(e){var t=this.props,n=t.onboardingJSON,s=t.currentID;if(!1!==n[s].validation){var o=e;if(e=F.a.toLower(F.a.trim(e)),"boolean"===typeof n[s].validation)return this.postMessage(o,s),this.props.sendMessage({message:n[n[s].paths].question,author:z}),void this.props.updateID(n[s].paths);if("string"===typeof n[s].validation){if(new RegExp(n[s].validation).test(e)){this.postMessage(o,s);var a=n[s].paths;return this.props.sendMessage({message:n[a].question,author:z}),void this.props.updateID(a)}return this.props.sendMessage({message:"Your response didn't meet the criteria, please try again",author:z}),void this.props.sendMessage({message:n[s].question,author:z})}if(F.a.includes(n[s].validation,e)){this.postMessage(o,s);var r=-1;return-1===(r=Object.keys(n[s].paths).length>1?n[s].paths[e]:n[s].paths)&&(r=0),this.props.sendMessage({message:n[r].question,author:z}),void this.props.updateID(r)}return this.props.sendMessage({message:"I don't understand your response, please try again",author:z}),void this.props.sendMessage({message:n[s].question,author:z})}}},{key:"postMessage",value:function(e,t){var n="https://jsonplaceholder.typicode.com/posts/".concat(t);fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){}))}},{key:"render",value:function(){return Object(S.jsxs)("div",{style:U.root,children:[Object(S.jsxs)("div",{style:{display:"flex"},children:[Object(S.jsx)("div",{style:{width:"225px",height:"50px"}}),Object(S.jsxs)(N.a,{style:U.supportWindow,children:[Object(S.jsx)("div",{style:U.supportIcon,children:Object(S.jsx)(_.a,{})}),Object(S.jsx)("div",{style:U.supportText,children:" Live Support "}),Object(S.jsx)("div",{style:U.supportFakeButton,children:Object(S.jsx)(Y.a,{})})]})]}),Object(S.jsxs)("div",{style:U.chatWindow,children:[Object(S.jsxs)("div",{style:U.chatWindowTop,children:[Object(S.jsx)("img",{src:k,style:U.receipientPic,alt:"Bot Icon"}),Object(S.jsx)("div",{style:U.receipientName,children:z})]}),Object(S.jsx)(B,{user:"You"}),Object(S.jsx)(R,{author:"You"})]})]})}}]),n}(s.Component);var H=Object(r.b)((function(e){return{onboardingJSON:e.json,messages:e.messages,currentID:e.id}}),(function(e){return Object(i.b)({setJSON:y,sendMessage:m,updateID:O},e)}))(A),Q=n(66),G=[],K={},V=Object(i.c)({json:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return[].concat(Object(Q.a)(e),[t.payload]);default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.payload;default:return e}}}),X=Object(i.a)(p.a)(i.d);a.a.render(Object(S.jsx)(r.a,{store:X(V),children:Object(S.jsx)(H,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.92f0c31a.chunk.js.map