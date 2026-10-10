var r7={name:"Friend Plaza"},na=2,we=window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;if(!we)throw new Error("[@decky/api]: Failed to connect to the loader as the loader API was not initialized.");var D3;try{D3=we.connect(na,r7.name)}catch{D3=we.connect(1,r7.name)}var x2=D3.callable,T4=D3.routerHook,vh=D3.toaster,gh=D3.addEventListener,xh=D3.removeEventListener,c7=i=>(...t)=>i(...t);var w4=window.DFL,m0=w4.GamepadButton,v0=w4.ButtonItem,M2=w4.DialogButton,s7=w4.Field,r2=w4.Focusable,n2=w4.Navigation,g0=w4.PanelSection,Q4=w4.PanelSectionRow,K0=w4.Router,x0=w4.TextField,zh=w4.ToggleField,o7=w4.staticClasses;var k3=window.SP_REACT,F1=k3.useState,o2=k3.useEffect,V1=k3.useRef,l7=k3.useMemo,wh=k3.useCallback,_h=k3.Fragment,F4=k3;var J0={k:1},ut=1280,M0=800;function h7(i,t){return!(i>0)||!(t>0)?1:Math.max(.3,Math.min(2,Math.min(i/ut,t/M0)))}function d7(i){let t=V1(null),[e,n]=F1({w:ut,h:M0});o2(()=>{let c=t.current;if(!c)return;let s=()=>{let l=c.clientWidth||window.innerWidth||ut,h=c.clientHeight||window.innerHeight||M0;n(d=>d.w===l&&d.h===h?d:{w:l,h})};s();let o=null;return typeof ResizeObserver<"u"&&(o=new ResizeObserver(s),o.observe(c)),window.addEventListener("resize",s),()=>{o&&o.disconnect(),window.removeEventListener("resize",s)}},[]);let a=h7(e.w,e.h);J0.k=a;let r=Math.max(0,(e.w-ut*a)/2);return window.SP_REACT.createElement("div",{ref:t,style:{position:"fixed",left:0,top:0,right:0,bottom:0,overflow:"hidden",background:"#0b1017"}},window.SP_REACT.createElement("div",{style:{position:"absolute",left:r,top:0,width:ut,height:M0,transform:"scale("+a+")",transformOrigin:"0 0"}},i.children))}var _e=class extends F4.Component{constructor(){super(...arguments);this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){console.error("[Friend Plaza] "+this.props.name+" crashed:",e)}render(){if(!this.state.error)return this.props.children;let e=(n,a)=>window.SP_REACT.createElement(r2,{style:{padding:"10px 22px",borderRadius:3,background:"rgba(255,255,255,.12)",color:"#dfe6ec",fontWeight:700},focusClassName:"fp-focus",onActivate:a,onClick:a},n);return window.SP_REACT.createElement("div",{style:{marginTop:40,height:"calc(100% - 40px)",boxSizing:"border-box",padding:"40px 48px 90px",background:"#0b1017",color:"#c6d4df",fontFamily:"sans-serif"}},window.SP_REACT.createElement("div",{style:{fontSize:26,fontWeight:800,color:"#fff",marginBottom:10}},"This screen ran into a problem"),window.SP_REACT.createElement("div",{style:{lineHeight:1.5,marginBottom:6}},this.props.name," could not be shown. Nothing was lost."),window.SP_REACT.createElement("div",{style:{fontSize:12.5,color:"#8f98a0",marginBottom:22}},String(this.state.error.message||this.state.error).slice(0,240)),window.SP_REACT.createElement("div",{style:{display:"flex",gap:10}},e("Try again",()=>this.setState({error:null})),e("Back",()=>n2.NavigateBack())),window.SP_REACT.createElement("div",{style:{fontSize:12.5,color:"#8f98a0",marginTop:22}},"If it keeps happening: open Settings, then Help, then Save diagnostics, and send that file."))}};function pt(i,t){return function(){return window.SP_REACT.createElement(d7,null,window.SP_REACT.createElement(_e,{name:i},window.SP_REACT.createElement(t,null)))}}var be={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Se=F4.createContext&&F4.createContext(be);var ia=["attr","size","title"];function aa(i,t){if(i==null)return{};var e,n,a=ra(i,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)===-1&&{}.propertyIsEnumerable.call(i,e)&&(a[e]=i[e])}return a}function ra(i,t){if(i==null)return{};var e={};for(var n in i)if({}.hasOwnProperty.call(i,n)){if(t.indexOf(n)!==-1)continue;e[n]=i[n]}return e}function $0(){return $0=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)({}).hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},$0.apply(null,arguments)}function u7(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),e.push.apply(e,n)}return e}function j0(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?u7(Object(e),!0).forEach(function(n){ca(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):u7(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function ca(i,t,e){return(t=sa(t))in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function sa(i){var t=oa(i,"string");return typeof t=="symbol"?t:t+""}function oa(i,t){if(typeof i!="object"||!i)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function p7(i){return i&&i.map((t,e)=>F4.createElement(t.tag,j0({key:e},t.attr),p7(t.child)))}function _4(i){return t=>F4.createElement(la,$0({attr:j0({},i.attr)},t),p7(i.child))}function la(i){var t=e=>{var n=i.attr,a=i.size,r=i.title,c=aa(i,ia),s=a||e.size||"1em",o;return e.className&&(o=e.className),i.className&&(o=(o?o+" ":"")+i.className),F4.createElement("svg",$0({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,n,c,{className:o,style:j0(j0({color:i.color||e.color},e.style),i.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),r&&F4.createElement("title",null,r),i.children)};return Se!==void 0?F4.createElement(Se.Consumer,null,e=>t(e)):t(be)}function f7(i){return _4({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"},child:[]}]})(i)}function m7(i){return _4({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(i)}function v7(i){return _4({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(i)}function g7(i){return _4({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"},child:[]}]})(i)}function x7(i){return _4({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(i)}function M7(i){return _4({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"},child:[]}]})(i)}function Ce(i){return _4({tag:"svg",attr:{viewBox:"0 0 616 512"},child:[{tag:"path",attr:{d:"M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"},child:[]}]})(i)}function z7(i){return _4({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"},child:[]}]})(i)}function y7(i){return _4({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"},child:[]}]})(i)}function Q0(i){return _4({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(i)}function w7(i){return _4({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(i)}function y2(i,t){return new Promise((e,n)=>{let a=setTimeout(()=>n(new Error("The plugin's background part isn't answering.")),t);i.then(r=>{clearTimeout(a),e(r)},r=>{clearTimeout(a),n(r)})})}var ha=x2("get_state"),da=x2("set_steamid"),ua=x2("set_steamid_hint"),pa=x2("set_option"),fa=x2("refresh_friends"),ma=x2("test_setup"),va=x2("server_state"),ga=x2("set_server_url"),xa=x2("server_set_on"),Ma=x2("server_test"),za=x2("server_login_start"),ya=x2("server_login_poll"),wa=x2("server_logout"),_a=x2("server_delete_me"),ba=x2("server_save_figure"),Sa=x2("server_clear_figure"),Ca=x2("server_sync"),Aa=x2("server_send"),La=x2("server_game_invite"),Ea=x2("server_game_accept"),Ha=x2("server_game_cancel"),Ta=x2("server_game_move"),Fa=x2("server_block"),Va=x2("server_unblock"),Ra=x2("server_report"),Ba=x2("server_game_poll"),Pa=x2("export_diagnostics"),Ia=x2("server_shop_buy"),T1={serverBlock:i=>y2(Fa(i),25e3),serverUnblock:i=>y2(Va(i),25e3),serverReport:(i,t)=>y2(Ra(i,t),25e3),gamePoll:(i,t)=>y2(Ba(i,t),15e3),exportDiagnostics:()=>y2(Pa(),15e3),gameInvite:(i,t)=>y2(La(i,t),25e3),gameAccept:i=>y2(Ea(i),25e3),gameCancel:i=>y2(Ha(i),25e3),gameMove:(i,t)=>y2(Ta(i,t),25e3),shopBuy:i=>y2(Ia(i),25e3),serverState:()=>y2(va(),8e3),setServerUrl:i=>y2(ga(i),8e3),serverSetOn:i=>y2(xa(i),8e3),serverTest:()=>y2(Ma(),2e4),serverLoginStart:()=>y2(za(),8e3),serverLoginPoll:()=>y2(ya(),15e3),serverLogout:()=>y2(wa(),8e3),serverDeleteMe:()=>y2(_a(),2e4),serverSaveFigure:i=>y2(ba(i),8e3),serverClearFigure:()=>y2(Sa(),8e3),serverSync:i=>y2(Ca(i),25e3),serverSend:(i,t,e)=>y2(Aa(i,t,e),25e3),getState:()=>y2(ha(),8e3),setSteamid:i=>y2(da(i),8e3),setSteamidHint:i=>y2(ua(i),8e3),setOption:(i,t)=>y2(pa(i,t),8e3),refreshFriends:()=>y2(fa(),8e3),testSetup:()=>y2(ma(),6e4)};var mt=[{id:1,name:"Pac-Muncher",price:90,pal:{Y:"#ffd23f",K:"#222",W:"#fff"},rows:["..YYYY..",".YYYKYY.","YYYYYY..","YYYY.W.W","YYYYYY..",".YYYYYY.","..YYYY.."]},{id:2,name:"Space Intruders",price:80,pal:{G:"#6cdc5a"},rows:["..G..G..","...GG...","..GGGG..",".GG..GG.","GGGGGGGG","G.GGGG.G","G.G..G.G"]},{id:3,name:"Golden Triangles",price:120,pal:{Y:"#ffd23f"},rows:["...YY...","..YYYY..",".YYYYYY.","........",".YY..YY.","YYYYYYYY","........"]},{id:4,name:"Blocky Creep",price:100,pal:{G:"#5fbf4a",D:"#1d3b17"},rows:["GGGGGGGG","GDDGGDDG","GDDGGDDG","GGGDDGGG","GGDDDDGG","GGDDDDGG","GGDGGDGG"]},{id:5,name:"Mustache Plumber",price:110,pal:{R:"#e8403c",W:"#fff",B:"#3a2418",S:"#f2c9a0"},rows:["..RRRR..",".RRWWRR.","..SSSS..",".SBBBBS.","..SSSS..",".RRRRRR.","RR.RR.RR"]},{id:6,name:"Falling Blocks",price:90,pal:{C:"#35d0e6",Y:"#ffd23f",P:"#b25fe0",R:"#ef5b5b"},rows:["........","..YY....","..YY.PPP","...C..P.","RR.C....",".RRC.YY.","....C.YY"]},{id:7,name:"Speedy Hedgehog",price:120,pal:{B:"#2f6fe0",S:"#f2c9a0",W:"#fff",K:"#111",R:"#e8403c"},rows:["B.BBB.B.",".BBBBBB.","BBWKWKBB",".BSSSBB.","..SSS...",".BBBBB..","R.R.R..."]},{id:8,name:"Praise the Sun",price:130,pal:{Y:"#ffd23f",O:"#ff9a2f"},rows:["Y..Y..Y.",".Y.OO.Y.","..OOOO..","YOOOOOOY","..OOOO..",".Y.OO.Y.","Y..Y..Y."]},{id:9,name:"Health Heart",price:60,pal:{R:"#f0394a",W:"#ff9aa5"},rows:["........",".RR..RR.","RWRRRRRR","RRRRRRRR",".RRRRRR.","..RRRR..","...RR..."]},{id:10,name:"Power Mushroom",price:80,pal:{R:"#e8403c",W:"#fff",S:"#f2d9b0",K:"#222"},rows:["..RRRR..",".RWWRRR.","RWWRRWWR","RRRRRWWR","..SSSS..",".SKSSKS.","..SSSS.."]},{id:11,name:"Extra Life",price:100,pal:{G:"#5fd04a",W:"#fff",S:"#f2d9b0",K:"#222"},rows:["..GGGG..",".GWWGGG.","GWWGGWWG","GGGGGWWG","..SSSS..",".SKSSKS.","..SSSS.."]},{id:12,name:"The Cake Is a Lie",price:110,pal:{W:"#fff",P:"#ff8fb1",B:"#7a4a2a",R:"#e8403c"},rows:["...R....","...R....","..WWWW..",".PPPPPP.",".WWWWWW.",".BBBBBB.","........"]},{id:13,name:"Turtle Shell",price:90,pal:{G:"#4cbf4a",W:"#f4f0d0",D:"#277a2a"},rows:["..GGGG..",".GDGGDG.","GGGDDGGG","WGGDDGGW","WWGGGGWW",".WWWWWW.","........"]},{id:14,name:"Catch 'Em Ball",price:100,pal:{R:"#e8403c",W:"#fff",K:"#222"},rows:["..RRRR..",".RRRRRR.","RRRKKRRR","KKKWWKKK","WWWKKWWW",".WWWWWW.","..WWWW.."]},{id:15,name:"Sus Crewmate",price:140,pal:{R:"#e04040",B:"#9be4ff",D:"#a82a2a"},rows:["..RRRR..",".RRBBBR.",".RRBBBB.",".RRRRRR.","RRRRRRR.",".RRRRRR.",".RR..RR."]},{id:16,name:"Gold Ring Run",price:80,pal:{Y:"#ffd23f",O:"#d9a21f"},rows:["..YYYY..",".YOOOOY.","YO....OY","YO....OY","YO....OY",".YOOOOY.","..YYYY.."]},{id:17,name:"Hero's Sword",price:110,pal:{S:"#d6e2ec",B:"#7a4a2a",G:"#ffd23f"},rows:["......S.",".....SS.","....SS..","G..SS...",".GSS....","..GB....","..B.G..."]},{id:18,name:"Pea Shooter",price:90,pal:{G:"#5fbf3a",D:"#2f7a22",P:"#8fe05a"},rows:["..GGG...",".GGGGG..",".GGGGGGP",".GGGGG..","..DD....","..DD....",".DDDD..."]},{id:19,name:"Joystick",price:70,pal:{R:"#e8403c",K:"#333",G:"#888"},rows:["..RR....","..RR....","...K....","...K....","KKKKKKKK","KGKKKKGK","KKKKKKKK"]},{id:20,name:"Retro Pad",price:70,pal:{G:"#9aa3ad",K:"#333",R:"#e8403c"},rows:["........","GGGGGGGG","GK.GGRGR","KKKGGGRG","GK.GGGGG","GGGGGGGG","........"]},{id:21,name:"Insert Coin",price:60,pal:{Y:"#ffd23f",O:"#d9a21f"},rows:["..YYYY..",".YOOOOY.","YOOYYOOY","YOOYYOOY","YOOYYOOY",".YOOOOY.","..YYYY.."]},{id:22,name:"Jolly Pixel",price:120,pal:{W:"#f4f4f4",K:"#111"},rows:[".WWWWWW.","WWWWWWWW","WKKWWKKW","WKKWWKKW",".WWKKWW.",".WKWWKW.","..WWWW.."]},{id:23,name:"Spooky Ghost",price:90,pal:{C:"#ff6fb0",W:"#fff",B:"#2f6fe0"},rows:["..CCCC..",".CCCCCC.","CWWCCWWC","CWBCCWBC","CCCCCCCC","CCCCCCCC","C.CC.CC."]},{id:24,name:"Star Power",price:100,pal:{Y:"#ffd23f",K:"#222"},rows:["...YY...","...YY...","YYYYYYYY",".YYKKYY.","..YYYY..",".YY..YY.","YY....YY"]},{id:25,name:"Up Up Down Down",price:110,pal:{W:"#dfe6ec",B:"#66c0f4"},rows:["...W..W.","..WWWWWW","...W..W.","........","..W...W.","..WWWWWW","...W..W."].map(i=>i)},{id:26,name:"Handheld PC",price:150,pal:{K:"#2b3340",W:"#9fb3c8",B:"#66c0f4"},rows:["KKKKKKKK","KWWWWWWK","KWWBBWWK","KWWBBWWK","KWWWWWWK","KK.KK.KK","KKKKKKKK"]},{id:27,name:"Pixel Cat",price:80,pal:{O:"#ff9a2f",K:"#222",P:"#ffb3c1"},rows:["O.O..O.O","OOO..OOO","OOOOOOOO","OKOOOOKO","OOOPPOOO",".OOOOOO.","..OOOO.."]},{id:28,name:"Rubber Duck Debug",price:90,pal:{Y:"#ffd23f",O:"#ff9a2f",K:"#222"},rows:["..YY....",".YKY....",".OYYY...","..YYYYY.",".YYYYYYY","..YYYYY.","........"]},{id:29,name:"Level Up",price:70,pal:{G:"#5fd04a"},rows:["...GG...","..GGGG..",".GGGGGG.","GGGGGGGG","..GGGG..","..GGGG..","..GGGG.."]},{id:30,name:"Little Knight",price:130,pal:{W:"#eef2f6",K:"#14181f"},rows:["W.WWWW.W","WWWWWWWW","WKKWWKKW","WKKWWKKW","WWWWWWWW",".WWWWWW.","..WWWW.."]},{id:31,name:"Rainbow Road",price:100,pal:{R:"#ef5b5b",O:"#f59e42",Y:"#f2cf3b",G:"#6cc24a",B:"#3d9be9",P:"#b25fe0"},rows:["........","RRRRRRRR","OOOOOOOO","YYYYYYYY","GGGGGGGG","BBBBBBBB","PPPPPPPP"]},{id:32,name:"Battle Crown",price:150,pal:{Y:"#ffd23f",R:"#ef5b5b",B:"#4aa3ff"},rows:["Y..Y..Y.","YY.YY.YY","YYYYYYYY","YRYYBYYR","YYYYYYYY","YYYYYYYY","........"]}],_7=i=>mt.find(t=>t.id===i),U3=12,ft=8,N2="#ffffff",W2="#d92b2b",t6="#16181d",V4="#ffd23f",e6="#2a5bd7",n6="#2f9e44",vt=[{id:1,name:"Turkey flag",price:140,dir:"H",bands:[W2],over:[["disc",4.5,3.5,2.5,N2],["disc",5.3,3.5,2,W2],["disc",7.6,3.5,.9,N2]]},{id:2,name:"Japan flag",price:140,dir:"H",bands:[N2],over:[["disc",5.5,3.5,2.4,W2]]},{id:3,name:"Germany flag",price:140,dir:"H",bands:[t6,W2,V4]},{id:4,name:"France flag",price:140,dir:"V",bands:[e6,N2,W2]},{id:5,name:"Italy flag",price:140,dir:"V",bands:[n6,N2,W2]},{id:6,name:"Ireland flag",price:140,dir:"V",bands:[n6,N2,"#ff883e"]},{id:7,name:"Netherlands flag",price:140,dir:"H",bands:[W2,N2,e6]},{id:8,name:"Sweden flag",price:140,dir:"H",bands:["#1f6fc0"],over:[["rect",3,0,2,8,V4],["rect",0,3,12,2,V4]]},{id:9,name:"Poland flag",price:140,dir:"H",bands:[N2,W2]},{id:10,name:"Ukraine flag",price:140,dir:"H",bands:["#2a6fd8",V4]},{id:11,name:"Spain flag",price:140,dir:"H",bands:[W2,V4,V4,W2]},{id:12,name:"Brazil flag",price:150,dir:"H",bands:[n6],over:[["disc",5.5,3.5,3.3,V4],["disc",5.5,3.5,1.7,e6]]},{id:13,name:"Stars and stripes",price:160,dir:"H",bands:[W2,N2,W2,N2,W2,N2,W2,N2],over:[["rect",0,0,5,4,"#2a3f8f"],["bmp",1,1,["W.W",".W.","W.W"],{W:N2}]]},{id:14,name:"Maple flag",price:150,dir:"V",bands:[W2,N2,N2,W2],over:[["bmp",4,2,["..R..",".RRR.","RRRRR","..R.."],{R:W2}]]},{id:15,name:"Jolly Roger",price:200,dir:"H",bands:[t6],over:[["bmp",3,1,["WWWWW","WKWKW","WWWWW",".W.W."],{W:N2,K:t6}]]},{id:16,name:"Rainbow flag",price:180,dir:"H",bands:[W2,"#f59e42",V4,n6,e6,"#8a4fd8"]},{id:17,name:"Racing flag",price:170,dir:"H",bands:[t6],over:[["bmp",0,0,["W.W.W.W.W.W.",".W.W.W.W.W.W","W.W.W.W.W.W.",".W.W.W.W.W.W","W.W.W.W.W.W.",".W.W.W.W.W.W","W.W.W.W.W.W.",".W.W.W.W.W.W"],{W:N2}]]},{id:18,name:"White flag",price:60,dir:"H",bands:[N2]},{id:19,name:"Victory banner",price:220,dir:"H",bands:["#5b2a9e"],over:[["rect",0,0,12,1,V4],["rect",0,7,12,1,V4],["bmp",4,2,["..Y..","YYYYY",".YYY.","Y...Y"],{Y:V4}]]},{id:20,name:"Heart banner",price:160,dir:"H",bands:["#f06292"],over:[["bmp",3,1,[".WW.WW.","WWWWWWW","WWWWWWW",".WWWWW.","..WWW..","...W..."],{W:N2}]]}],b7=i=>vt.find(t=>t.id===i);function S7(i){let t=[];for(let e=0;e<ft;e++){let n=[];for(let a=0;a<U3;a++){let r=i.bands.length,c=i.dir==="H"?Math.min(r-1,Math.floor(e*r/ft)):Math.min(r-1,Math.floor(a*r/U3));n.push(i.bands[c])}t.push(n)}for(let e of i.over||[])if(e[0]==="disc")for(let n=0;n<ft;n++)for(let a=0;a<U3;a++)Math.hypot(a+.5-e[1],n+.5-e[2])<=e[3]&&(t[n][a]=e[4]);else if(e[0]==="rect")for(let n=e[2];n<Math.min(ft,e[2]+e[4]);n++)for(let a=e[1];a<Math.min(U3,e[1]+e[3]);a++)t[n][a]=e[5];else e[3].forEach((n,a)=>{for(let r=0;r<n.length;r++){let c=e[4][n[r]];c&&t[e[2]+a]&&t[e[2]+a][e[1]+r]!==void 0&&(t[e[2]+a][e[1]+r]=c)}});return t}var z0=[{id:1,name:"Cheek stripes",price:70},{id:2,name:"Cat whiskers",price:80},{id:3,name:"Star under the eye",price:80},{id:4,name:"Lightning bolt",price:100},{id:5,name:"Clown nose",price:90},{id:6,name:"Freckles",price:60},{id:7,name:"Tiny scar",price:90},{id:8,name:"Team paint",price:110}],y0=[{id:1,name:"High-tops",price:100},{id:2,name:"Boots",price:110},{id:3,name:"Bunny slippers",price:130},{id:4,name:"Clown shoes",price:120},{id:5,name:"Rocket boots",price:200},{id:6,name:"Roller skates",price:160}],O3=[{id:1,name:"Gold aura",price:150,hex:"#ffd23f"},{id:2,name:"Ice aura",price:150,hex:"#7fd8ff"},{id:3,name:"Ember aura",price:150,hex:"#ff6a2f"},{id:4,name:"Toxic aura",price:150,hex:"#9dff3a"},{id:5,name:"Royal aura",price:180,hex:"#9b5cff"},{id:6,name:"Rose aura",price:150,hex:"#ff6fb0"},{id:7,name:"Shadow aura",price:180,hex:"#3a3f55"},{id:8,name:"Rainbow aura",price:300,hex:"#ffffff"}],qh={tee:mt.length,flag:vt.length,face:z0.length,kicks:y0.length,aura:O3.length};var gt=[{id:1,name:"Beanie",how:"Send your first wave"},{id:2,name:"Cap",how:"Open the plaza 3 days in a row"},{id:3,name:"Crown",how:"Open the plaza 7 days in a row"},{id:4,name:"Top hat",how:"Open the plaza 30 days in a row"},{id:5,name:"Cat ears",how:"Send your first gift"},{id:6,name:"Headband",how:"Greet 5 different friends"},{id:7,name:"Party hat",how:"Dance with a friend"},{id:8,name:"Cowboy hat",how:"Point shop"},{id:9,name:"Chef hat",how:"Point shop"},{id:10,name:"Wizard hat",how:"Point shop"},{id:11,name:"Pirate hat",how:"Point shop"},{id:12,name:"Halo",how:"Point shop"},{id:13,name:"Bunny ears",how:"Point shop"},{id:14,name:"Santa hat",how:"Point shop"},{id:15,name:"Viking helmet",how:"Point shop"},{id:16,name:"Knight helm",how:"Point shop"},{id:17,name:"Space helmet",how:"Point shop"},{id:18,name:"Sailor cap",how:"Point shop"},{id:19,name:"Flower crown",how:"Point shop"},{id:20,name:"Beret",how:"Point shop"},{id:21,name:"Propeller cap",how:"Point shop"},{id:22,name:"Traffic cone",how:"Point shop"},{id:23,name:"Red mushroom cap",how:"Point shop"},{id:24,name:"Pumpkin",how:"Point shop"},{id:25,name:"Devil horns",how:"Point shop"},{id:26,name:"Rubber duck",how:"Point shop"},{id:27,name:"Ninja mask",how:"Point shop"}];var R4=i=>(gt.find(t=>t.id===i)||{name:"No hat"}).name,c6=["None","Bow tie","Scarf","Cape","Backpack","Headphones","Wings","Star badge","Gold chain","Necktie","Medal","Flower lei","Jetpack","Katana","Round shield","Guitar"],C7=i=>c6[i]||"None",w0=[{id:201,hex:"#00e5ff",name:"Neon cyan"},{id:202,hex:"#ff4fa3",name:"Hot pink"},{id:203,hex:"#9dff3a",name:"Lime"},{id:204,hex:"#9b5cff",name:"Violet"},{id:205,hex:"#d8dde6",name:"Silver"},{id:206,hex:"#ffcf40",name:"Gold"},{id:207,hex:"#ff7a2f",name:"Sunset"},{id:208,hex:"#7dffd0",name:"Mint"},{id:209,hex:"#6ec1ff",name:"Sky"},{id:210,hex:"#e8a598",name:"Rose gold"},{id:211,hex:"#d1103a",name:"Crimson"},{id:212,hex:"#1b1f5e",name:"Midnight"},{id:213,hex:"#f4f7ff",name:"Ghost white"},{id:214,hex:"#b6ff00",name:"Acid"}],i6={8:120,9:120,10:200,11:200,12:300,13:150,14:150,15:250,16:220,17:260,18:110,19:140,20:100,21:130,22:90,23:160,24:150,25:180,26:120,27:170},a6={1:80,2:100,3:250,4:120,5:180,6:400,7:60,8:160,9:90,10:110,11:100,12:300,13:280,14:200,15:240},r6={201:150,202:150,203:150,204:150,205:100,206:200,207:140,208:140,209:140,210:170,211:140,212:120,213:120,214:160},s6=[...Object.keys(a6).map(Number).sort((i,t)=>a6[i]-a6[t]||i-t).map(i=>({id:100+i,kind:"acc",name:c6[i],price:a6[i]})),...Object.keys(i6).map(Number).sort((i,t)=>i6[i]-i6[t]||i-t).map(i=>({id:i,kind:"hat",name:R4(i),price:i6[i]})),...Object.keys(r6).map(Number).sort((i,t)=>r6[i]-r6[t]||i-t).map(i=>({id:i,kind:"hair",name:(w0.find(t=>t.id===i)||{name:"?"}).name+" hair",price:r6[i]})),...mt.map(i=>({id:300+i.id,kind:"tee",name:i.name,price:i.price})),...vt.map(i=>({id:400+i.id,kind:"flag",name:i.name,price:i.price})),...z0.map(i=>({id:500+i.id,kind:"face",name:i.name,price:i.price})),...y0.map(i=>({id:600+i.id,kind:"kicks",name:i.name,price:i.price})),...O3.map(i=>({id:700+i.id,kind:"aura",name:i.name,price:i.price}))],Ae=[{kind:"ttt",name:"Tic-Tac-Toe",sub:"Three in a row"},{kind:"c4",name:"Connect Four",sub:"Four in a row, drop discs"},{kind:"rps",name:"Rock Paper Scissors",sub:"Best of three"},{kind:"bj",name:"Blackjack 21",sub:"Closest to 21 wins, best of three hands"}],B4=i=>(Ae.find(t=>t.kind===i)||{name:i}).name,xt=[{key:"first_wave",name:"First wave",hat:1},{key:"streak_3",name:"3 day streak",hat:2},{key:"streak_7",name:"7 day streak",hat:3},{key:"streak_30",name:"30 day streak",hat:4},{key:"gift_sent",name:"First gift",hat:5},{key:"friends_5",name:"Met 5 friends",hat:6},{key:"dance",name:"First dance",hat:7}],Le=["Nice to see you!","GG!","Play with me soon?","I miss you!","Check out this game!","Happy birthday!","Thanks for the game!","You're awesome!","Let's party!","Good night!","Welcome back!","I was here!"];function A7(i,t,e){return e?8e3:i?i.status==="done"?2e4:i.status==="invite"?3e3:(i.kind==="rps"?!!i.state.picks&&i.state.picks[i.p1===t?0:1]===null:i.kind==="bj"?!!i.state.stood&&!i.state.stood[i.p1===t?0:1]:i.turn===t)?4e3:1500:5e3}var Mt=["#fbd5b5","#f3c096","#e0a477","#c58459","#9a6341","#6f4a31"],x3=["#2b2118","#4a3222","#7a4a2a","#b5772f","#d9b45a","#c9c9c9","#a8321f","#3d4d8f"],zt=["#ef5b5b","#f59e42","#f2cf3b","#6cc24a","#2fb5a0","#3d9be9","#6c6ce0","#b25fe0","#ec6fa8","#f4f4f4","#4b5563","#8bd3dd"],yt=["#374151","#1f3a5f","#5b4636","#4b5563","#6b7280","#7c2d3a"];var wt=["#f4f4f4","#2b2f36","#c0392b","#3d6fb5","#8a6a45"];function L7(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t>>>0}function E7(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Z4(i){let t=E7(L7(i)),e=o=>o[Math.floor(t()*o.length)],n=e(Mt),a=e(x3),r=Math.floor(t()*9),c=e(zt),s=e(yt);return{skin:n,hair:a,hairStyle:r,shirt:c,pants:s,shoes:e(wt),eyes:Math.floor(t()*5),brows:Math.floor(t()*4),mouth:Math.floor(t()*5),glasses:t()<.16,stache:t()<.1,blush:t()<.5,head:.94+t()*.12,hat:0,acc:0}}function M3(i,t,e,n){let a=L7(i.steamid),r=E7(a^2654435769);return{id:i.steamid,look:Z4(i.steamid),x:e+(r()-.5)*200,y:n+(r()-.5)*120,tx:e,ty:n,ax:e,ay:n,radius:80,speed:14+r()*14,phase:r()*6.28,dir:r()<.5?-1:1,pause:r()*3,moving:!1,state:i.state,playing:i.playing,me:t,seed:a,name:i.name,home:null,act:"",actT:0,next:"",partner:null,emote:"",cool:2+r()*8,seek:null,seekT:0,rush:!1,pend:"",live:!1}}function b0(i,t,e){let n=t()*Math.PI*2,a=Math.sqrt(t())*i.radius;i.tx=Math.min(e.w-20,Math.max(20,i.ax+Math.cos(n)*a)),i.ty=Math.min(e.h-14,Math.max(60,i.ay+Math.sin(n)*a*.7))}function H7(i,t,e,n){if(i.act||i.state==="offline"||i.state==="snooze"){i.moving=!1;return}if(i.pause>0){i.pause-=t,i.moving=!1,i.pause<=0&&b0(i,e,n);return}let a=i.tx-i.x,r=i.ty-i.y,c=Math.hypot(a,r),s=i.speed*(i.state==="away"?.5:1)*((i.me||i.rush)&&i.seek?2.6:1);if(c<2){i.pause=1+e()*4,i.moving=!1;return}let o=Math.min(c,s*t);i.x+=a/c*o,i.y+=r/c*o,Math.abs(a)>1&&(i.dir=a<0?-1:1),i.phase+=t*9,i.moving=!0}function S0(i,t){return .85+.45*Math.min(1,Math.max(0,i/t))}function W4(i,t,e,n,a){i.beginPath(),i.ellipse(t,e,n,a,0,0,Math.PI*2)}function _0(i,t,e,n,a,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+a,r),i.arcTo(t+n,e+a,t,e+a,r),i.arcTo(t,e+a,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function T7(i,t,e){let n=S0(t.y,e.h),a=t.state==="offline"||t.state==="snooze",r=t.moving?Math.sin(t.phase):0,c=t.moving?Math.abs(Math.sin(t.phase))*2*n:0;i.save(),i.translate(Math.round(t.x),Math.round(t.y)),a&&(i.globalAlpha=.72),i.fillStyle="rgba(60,50,40,0.18)",W4(i,0,1*n,9*n,3*n),i.fill(),e.selected&&(i.strokeStyle="#1a9fff",i.lineWidth=2.5,W4(i,0,1*n,13*n,4.5*n),i.stroke()),i.translate(0,-c);let s={...t.look,hairStyle:t.look.hairStyle%6};switch(i.fillStyle=s.pants,_0(i,-6*n,-10*n+r*2*n,4.5*n,10*n,2*n),i.fill(),_0(i,1.5*n,-10*n-r*2*n,4.5*n,10*n,2*n),i.fill(),i.fillStyle=s.hair,s.hairStyle===1&&(_0(i,-10*n,-38*n,20*n,20*n,8*n),i.fill()),s.hairStyle===5&&(_0(i,-10.5*n,-36*n,21*n,14*n,6*n),i.fill()),i.fillStyle=s.skin,W4(i,-9*n,-15*n-r*2*n,2.4*n,3*n),i.fill(),W4(i,9*n,-15*n+r*2*n,2.4*n,3*n),i.fill(),i.fillStyle=s.shirt,_0(i,-7.5*n,-23*n,15*n,15*n,5*n),i.fill(),i.fillStyle=s.skin,W4(i,0,-31*n,9.5*n,9*n),i.fill(),i.fillStyle=s.hair,s.hairStyle){case 0:case 1:case 5:i.beginPath(),i.ellipse(0,-33.5*n,9.8*n,7.5*n,0,Math.PI,0),i.fill();break;case 2:i.beginPath(),i.ellipse(0,-33.5*n,9.8*n,7*n,0,Math.PI,0),i.fill(),W4(i,0,-42*n,4*n,4*n),i.fill();break;case 3:W4(i,0,-39.5*n,2.2*n,2.6*n),i.fill();break;case 4:i.beginPath(),i.moveTo(-9.5*n,-32*n),i.lineTo(-8*n,-42*n),i.lineTo(-4*n,-37*n),i.lineTo(0,-44*n),i.lineTo(4*n,-37*n),i.lineTo(8*n,-42*n),i.lineTo(9.5*n,-32*n),i.closePath(),i.fill();break;default:break}let o=t.dir*1.1*n;if(i.fillStyle="#2a2220",i.strokeStyle="#2a2220",i.lineWidth=1.2,a?(i.beginPath(),i.moveTo(-5*n+o,-30*n),i.lineTo(-2*n+o,-30*n),i.moveTo(2*n+o,-30*n),i.lineTo(5*n+o,-30*n),i.stroke()):(W4(i,-3.4*n+o,-30*n,1.15*n,1.5*n),i.fill(),W4(i,3.4*n+o,-30*n,1.15*n,1.5*n),i.fill()),i.beginPath(),i.arc(o,-28*n,2.2*n,.15*Math.PI,.85*Math.PI),i.stroke(),i.translate(0,c),a){i.fillStyle="#7a8aa8",i.font="bold "+Math.round(9*n)+"px sans-serif";let l=e.t*.8%1;i.globalAlpha=.9-l*.8,i.fillText("z",8*n,(-40-l*8)*n),i.globalAlpha=1}else if(t.playing){i.fillStyle="#43c463";let l=e.lowPower?0:Math.sin(e.t*4+t.seed)*.6;W4(i,0,(-49-c)*n,(3.2+l)*n,(3.2+l)*n),i.fill()}if(t.me&&(i.fillStyle="#1a9fff",i.beginPath(),i.moveTo(-4.5*n,-56*n),i.lineTo(4.5*n,-56*n),i.lineTo(0,-49.5*n),i.closePath(),i.fill()),e.selected){i.fillStyle="#ffd23f",i.strokeStyle="#b8860b",i.lineWidth=1;let l=-58*n-(e.lowPower?0:Math.abs(Math.sin(e.t*5))*4);i.beginPath(),i.moveTo(-5*n,l),i.lineTo(5*n,l),i.lineTo(0,l+7*n),i.closePath(),i.fill(),i.stroke()}i.restore()}function F7(i,t,e,n){let a=null,r=1e9;for(let c of i){let s=S0(c.y,n),o=t-c.x,l=e-(c.y-26*s),h=Math.hypot(o*.9,l*.6);Math.abs(o)<20*s&&l>-34*s&&l<30*s&&h<r&&(a=c,r=h)}return a}var He=()=>({streak:0,stamps:[],met:0,hats:[],items:[],points:0,earned:0,dayPoints:0,dailyCap:100,figure:null}),X={signedIn:!1,friends:new Map,players:[],blocked:[],me:He(),games:[],meId:"",strangerInteract:!1,names:new Map,openGame:Number(typeof location<"u"&&new URLSearchParams(location.search).get("fpgame")||0),inbox:[],error:"",version:0},Ee=new Set;function S2(){X.version++,Ee.forEach(i=>i())}function b4(){let[i,t]=F1(X.version);return o2(()=>{let e=()=>t(X.version);return Ee.add(e),()=>{Ee.delete(e)}},[]),i}function m4(i){return i.friends&&(X.friends=new Map(i.friends.map(t=>[t.steamid,t]))),i.players&&(X.players=i.players),i.blocked&&(X.blocked=i.blocked),typeof i.strangerInteract=="boolean"&&(X.strangerInteract=i.strangerInteract),i.me&&(X.me=i.me),i.games&&(X.games=i.games),S2(),i.events||[]}var _t=()=>X.games.filter(i=>i.status==="invite"&&i.p2===X.meId);var Na=0,V7=1,Da=2;var Dn=1,ka=2,r3=3,T3=0,d4=1,K2=2,L3=0,Gt=1,R7=2,B7=3,P7=4,Ua=5,J3=100,Oa=101,Ga=102,Wa=103,Za=104,Ya=200,Xa=201,qa=202,Ka=203,u8=204,p8=205,Ja=206,$a=207,ja=208,Qa=209,t9=210,e9=211,n9=212,i9=213,a9=214,f8=0,m8=1,v8=2,Xt=3,g8=4,x8=5,M8=6,z8=7,kn=0,r9=1,c9=2,E3=0,s9=1,o9=2,l9=3,h9=4,d9=5,u9=6,p9=7;var Un=300,qt=301,Kt=302,y8=303,w8=304,le=306,_8=1e3,j3=1001,b8=1002,k4=1003,f9=1004;var o6=1005;var M4=1006,Te=1007;var Q3=1008;var h3=1009,On=1010,Gn=1011,N0=1012,I5=1013,tt=1014,s3=1015,G0=1016,N5=1017,D5=1018,Jt=1020,Wn=35902,Zn=1021,Yn=1022,D4=1023,Xn=1024,qn=1025,Wt=1026,$t=1027,Kn=1028,k5=1029,Jn=1030,U5=1031;var O5=1033,R6=33776,B6=33777,P6=33778,I6=33779,S8=35840,C8=35841,A8=35842,L8=35843,E8=36196,H8=37492,T8=37496,F8=37808,V8=37809,R8=37810,B8=37811,P8=37812,I8=37813,N8=37814,D8=37815,k8=37816,U8=37817,O8=37818,G8=37819,W8=37820,Z8=37821,N6=36492,Y8=36494,X8=36495,$n=36283,q8=36284,K8=36285,J8=36286;var D6=2300,$8=2301,Fe=2302,I7=2400,N7=2401,D7=2402;var m9=3200,v9=3201;var jn=0,g9=1,C3="",D2="srgb",n0="srgb-linear",he="linear",w2="srgb";var bt=7680;var k7=519,x9=512,M9=513,z9=514,Qn=515,y9=516,w9=517,_9=518,b9=519,j8=35044;var U7="300 es",o3=2e3,k6=2001,F3=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let a=this._listeners[t];if(a!==void 0){let r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let a=n.slice(0);for(let r=0,c=a.length;r<c;r++)a[r].call(this,t);t.target=null}}},t4=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ve=Math.PI/180,Q8=180/Math.PI;function H3(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(t4[i&255]+t4[i>>8&255]+t4[i>>16&255]+t4[i>>24&255]+"-"+t4[t&255]+t4[t>>8&255]+"-"+t4[t>>16&15|64]+t4[t>>24&255]+"-"+t4[e&63|128]+t4[e>>8&255]+"-"+t4[e>>16&255]+t4[e>>24&255]+t4[n&255]+t4[n>>8&255]+t4[n>>16&255]+t4[n>>24&255]).toLowerCase()}function q2(i,t,e){return Math.max(t,Math.min(e,i))}function S9(i,t){return(i%t+t)%t}function Re(i,t,e){return(1-e)*i+e*t}function X4(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _2(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var w1=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(q2(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,c=this.y-t.y;return this.x=r*n-c*a+t.x,this.y=r*a+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},j1=class i{constructor(t,e,n,a,r,c,s,o,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,c,s,o,l)}set(t,e,n,a,r,c,s,o,l){let h=this.elements;return h[0]=t,h[1]=a,h[2]=s,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=c,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,a=e.elements,r=this.elements,c=n[0],s=n[3],o=n[6],l=n[1],h=n[4],d=n[7],p=n[2],u=n[5],v=n[8],g=a[0],m=a[3],f=a[6],_=a[1],b=a[4],y=a[7],P=a[2],A=a[5],E=a[8];return r[0]=c*g+s*_+o*P,r[3]=c*m+s*b+o*A,r[6]=c*f+s*y+o*E,r[1]=l*g+h*_+d*P,r[4]=l*m+h*b+d*A,r[7]=l*f+h*y+d*E,r[2]=p*g+u*_+v*P,r[5]=p*m+u*b+v*A,r[8]=p*f+u*y+v*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],c=t[4],s=t[5],o=t[6],l=t[7],h=t[8];return e*c*h-e*s*l-n*r*h+n*s*o+a*r*l-a*c*o}invert(){let t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],c=t[4],s=t[5],o=t[6],l=t[7],h=t[8],d=h*c-s*l,p=s*o-h*r,u=l*r-c*o,v=e*d+n*p+a*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/v;return t[0]=d*g,t[1]=(a*l-h*n)*g,t[2]=(s*n-a*c)*g,t[3]=p*g,t[4]=(h*e-a*o)*g,t[5]=(a*r-s*e)*g,t[6]=u*g,t[7]=(n*o-l*e)*g,t[8]=(c*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,c,s){let o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*c+l*s)+c+t,-a*l,a*o,-a*(-l*c+o*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Be.makeScale(t,e)),this}rotate(t){return this.premultiply(Be.makeRotation(-t)),this}translate(t,e){return this.premultiply(Be.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Be=new j1;function ti(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function U6(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function C9(){let i=U6("canvas");return i.style.display="block",i}var O7={};function V0(i){i in O7||(O7[i]=!0,console.warn(i))}function A9(i,t,e){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function L9(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function E9(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var d2={enabled:!0,workingColorSpace:n0,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===w2&&(i.r=l3(i.r),i.g=l3(i.g),i.b=l3(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===w2&&(i.r=Zt(i.r),i.g=Zt(i.g),i.b=Zt(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===C3?he:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function l3(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zt(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var G7=[.64,.33,.3,.6,.15,.06],W7=[.2126,.7152,.0722],Z7=[.3127,.329],Y7=new j1().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X7=new j1().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);d2.define({[n0]:{primaries:G7,whitePoint:Z7,transfer:he,toXYZ:Y7,fromXYZ:X7,luminanceCoefficients:W7,workingColorSpaceConfig:{unpackColorSpace:D2},outputColorSpaceConfig:{drawingBufferColorSpace:D2}},[D2]:{primaries:G7,whitePoint:Z7,transfer:w2,toXYZ:Y7,fromXYZ:X7,luminanceCoefficients:W7,outputColorSpaceConfig:{drawingBufferColorSpace:D2}}});var St,t5=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{St===void 0&&(St=U6("canvas")),St.width=t.width,St.height=t.height;let n=St.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=St}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=U6("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let c=0;c<r.length;c++)r[c]=l3(r[c]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(l3(e[n]/255)*255):e[n]=l3(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},H9=0,O6=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H9++}),this.uuid=H3(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let c=0,s=a.length;c<s;c++)a[c].isDataTexture?r.push(Pe(a[c].image)):r.push(Pe(a[c]))}else r=Pe(a);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pe(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?t5.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var T9=0,z4=class i extends F3{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=j3,a=j3,r=M4,c=Q3,s=D4,o=h3,l=i.DEFAULT_ANISOTROPY,h=C3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T9++}),this.uuid=H3(),this.name="",this.source=new O6(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=c,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=o,this.offset=new w1(0,0),this.repeat=new w1(1,1),this.center=new w1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j1,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Un)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _8:t.x=t.x-Math.floor(t.x);break;case j3:t.x=t.x<0?0:1;break;case b8:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _8:t.y=t.y-Math.floor(t.y);break;case j3:t.y=t.y<0?0:1;break;case b8:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};z4.DEFAULT_IMAGE=null;z4.DEFAULT_MAPPING=Un;z4.DEFAULT_ANISOTROPY=1;var H2=class i{constructor(t=0,e=0,n=0,a=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,a=this.z,r=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*a+c[12]*r,this.y=c[1]*e+c[5]*n+c[9]*a+c[13]*r,this.z=c[2]*e+c[6]*n+c[10]*a+c[14]*r,this.w=c[3]*e+c[7]*n+c[11]*a+c[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r,o=t.elements,l=o[0],h=o[4],d=o[8],p=o[1],u=o[5],v=o[9],g=o[2],m=o[6],f=o[10];if(Math.abs(h-p)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(l+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(u+1)/2,P=(f+1)/2,A=(h+p)/4,E=(d+g)/4,T=(v+m)/4;return b>y&&b>P?b<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(b),a=A/n,r=E/n):y>P?y<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),n=A/a,r=T/a):P<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(P),n=E/r,a=T/r),this.set(n,a,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-g)/_,this.z=(p-h)/_,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},e5=class extends F3{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new H2(0,0,t,e),this.scissorTest=!1,this.viewport=new H2(0,0,t,e);let a={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:M4,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new z4(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let c=n.count;for(let s=0;s<c;s++)this.textures[s]=r.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new O6(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},d3=class extends e5{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},G6=class extends z4{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=k4,this.minFilter=k4,this.wrapR=j3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var n5=class extends z4{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=k4,this.minFilter=k4,this.wrapR=j3,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var q4=class{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,c,s){let o=n[a+0],l=n[a+1],h=n[a+2],d=n[a+3],p=r[c+0],u=r[c+1],v=r[c+2],g=r[c+3];if(s===0){t[e+0]=o,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(s===1){t[e+0]=p,t[e+1]=u,t[e+2]=v,t[e+3]=g;return}if(d!==g||o!==p||l!==u||h!==v){let m=1-s,f=o*p+l*u+h*v+d*g,_=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),A=Math.atan2(P,f*_);m=Math.sin(m*A)/P,s=Math.sin(s*A)/P}let y=s*_;if(o=o*m+p*y,l=l*m+u*y,h=h*m+v*y,d=d*m+g*y,m===1-s){let P=1/Math.sqrt(o*o+l*l+h*h+d*d);o*=P,l*=P,h*=P,d*=P}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,a,r,c){let s=n[a],o=n[a+1],l=n[a+2],h=n[a+3],d=r[c],p=r[c+1],u=r[c+2],v=r[c+3];return t[e]=s*v+h*d+o*u-l*p,t[e+1]=o*v+h*p+l*d-s*u,t[e+2]=l*v+h*u+s*p-o*d,t[e+3]=h*v-s*d-o*p-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,a=t._y,r=t._z,c=t._order,s=Math.cos,o=Math.sin,l=s(n/2),h=s(a/2),d=s(r/2),p=o(n/2),u=o(a/2),v=o(r/2);switch(c){case"XYZ":this._x=p*h*d+l*u*v,this._y=l*u*d-p*h*v,this._z=l*h*v+p*u*d,this._w=l*h*d-p*u*v;break;case"YXZ":this._x=p*h*d+l*u*v,this._y=l*u*d-p*h*v,this._z=l*h*v-p*u*d,this._w=l*h*d+p*u*v;break;case"ZXY":this._x=p*h*d-l*u*v,this._y=l*u*d+p*h*v,this._z=l*h*v+p*u*d,this._w=l*h*d-p*u*v;break;case"ZYX":this._x=p*h*d-l*u*v,this._y=l*u*d+p*h*v,this._z=l*h*v-p*u*d,this._w=l*h*d+p*u*v;break;case"YZX":this._x=p*h*d+l*u*v,this._y=l*u*d+p*h*v,this._z=l*h*v-p*u*d,this._w=l*h*d-p*u*v;break;case"XZY":this._x=p*h*d-l*u*v,this._y=l*u*d-p*h*v,this._z=l*h*v+p*u*d,this._w=l*h*d+p*u*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],a=e[4],r=e[8],c=e[1],s=e[5],o=e[9],l=e[2],h=e[6],d=e[10],p=n+s+d;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(h-o)*u,this._y=(r-l)*u,this._z=(c-a)*u}else if(n>s&&n>d){let u=2*Math.sqrt(1+n-s-d);this._w=(h-o)/u,this._x=.25*u,this._y=(a+c)/u,this._z=(r+l)/u}else if(s>d){let u=2*Math.sqrt(1+s-n-d);this._w=(r-l)/u,this._x=(a+c)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+d-n-s);this._w=(c-a)/u,this._x=(r+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(q2(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,a=t._y,r=t._z,c=t._w,s=e._x,o=e._y,l=e._z,h=e._w;return this._x=n*h+c*s+a*l-r*o,this._y=a*h+c*o+r*s-n*l,this._z=r*h+c*l+n*o-a*s,this._w=c*h-n*s-a*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,a=this._y,r=this._z,c=this._w,s=c*t._w+n*t._x+a*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=c,this._x=n,this._y=a,this._z=r,this;let o=1-s*s;if(o<=Number.EPSILON){let u=1-e;return this._w=u*c+e*this._w,this._x=u*n+e*this._x,this._y=u*a+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,s),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=c*d+this._w*p,this._x=n*d+this._x*p,this._y=a*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(q7.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(q7.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,a=this.z,r=t.elements,c=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*c,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*c,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*c,this}applyQuaternion(t){let e=this.x,n=this.y,a=this.z,r=t.x,c=t.y,s=t.z,o=t.w,l=2*(c*a-s*n),h=2*(s*e-r*a),d=2*(r*n-c*e);return this.x=e+o*l+c*d-s*h,this.y=n+o*h+s*l-r*d,this.z=a+o*d+r*h-c*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,a=t.y,r=t.z,c=e.x,s=e.y,o=e.z;return this.x=a*o-r*s,this.y=r*c-n*o,this.z=n*s-a*c,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ie.copy(this).projectOnVector(t),this.sub(Ie)}reflect(t){return this.sub(Ie.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(q2(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ie=new R,q7=new q4,et=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(P4.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(P4.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=P4.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let c=0,s=r.count;c<s;c++)t.isMesh===!0?t.getVertexPosition(c,P4):P4.fromBufferAttribute(r,c),P4.applyMatrix4(t.matrixWorld),this.expandByPoint(P4);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),l6.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),l6.copy(n.boundingBox)),l6.applyMatrix4(t.matrixWorld),this.union(l6)}let a=t.children;for(let r=0,c=a.length;r<c;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,P4),P4.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(C0),h6.subVectors(this.max,C0),Ct.subVectors(t.a,C0),At.subVectors(t.b,C0),Lt.subVectors(t.c,C0),z3.subVectors(At,Ct),y3.subVectors(Lt,At),G3.subVectors(Ct,Lt);let e=[0,-z3.z,z3.y,0,-y3.z,y3.y,0,-G3.z,G3.y,z3.z,0,-z3.x,y3.z,0,-y3.x,G3.z,0,-G3.x,-z3.y,z3.x,0,-y3.y,y3.x,0,-G3.y,G3.x,0];return!Ne(e,Ct,At,Lt,h6)||(e=[1,0,0,0,1,0,0,0,1],!Ne(e,Ct,At,Lt,h6))?!1:(d6.crossVectors(z3,y3),e=[d6.x,d6.y,d6.z],Ne(e,Ct,At,Lt,h6))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,P4).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(P4).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(t3[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),t3[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),t3[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),t3[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),t3[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),t3[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),t3[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),t3[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(t3),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},t3=[new R,new R,new R,new R,new R,new R,new R,new R],P4=new R,l6=new et,Ct=new R,At=new R,Lt=new R,z3=new R,y3=new R,G3=new R,C0=new R,h6=new R,d6=new R,W3=new R;function Ne(i,t,e,n,a){for(let r=0,c=i.length-3;r<=c;r+=3){W3.fromArray(i,r);let s=a.x*Math.abs(W3.x)+a.y*Math.abs(W3.y)+a.z*Math.abs(W3.z),o=t.dot(W3),l=e.dot(W3),h=n.dot(W3);if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>s)return!1}return!0}var F9=new et,A0=new R,De=new R,D0=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):F9.setFromPoints(t).getCenter(n);let a=0;for(let r=0,c=t.length;r<c;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;A0.subVectors(t,this.center);let e=A0.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(A0,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(De.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(A0.copy(t.center).add(De)),this.expandByPoint(A0.copy(t.center).sub(De))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},e3=new R,ke=new R,u6=new R,w3=new R,Ue=new R,p6=new R,Oe=new R,i5=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,e3)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=e3.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(e3.copy(this.origin).addScaledVector(this.direction,e),e3.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){ke.copy(t).add(e).multiplyScalar(.5),u6.copy(e).sub(t).normalize(),w3.copy(this.origin).sub(ke);let r=t.distanceTo(e)*.5,c=-this.direction.dot(u6),s=w3.dot(this.direction),o=-w3.dot(u6),l=w3.lengthSq(),h=Math.abs(1-c*c),d,p,u,v;if(h>0)if(d=c*o-s,p=c*s-o,v=r*h,d>=0)if(p>=-v)if(p<=v){let g=1/h;d*=g,p*=g,u=d*(d+c*p+2*s)+p*(c*d+p+2*o)+l}else p=r,d=Math.max(0,-(c*p+s)),u=-d*d+p*(p+2*o)+l;else p=-r,d=Math.max(0,-(c*p+s)),u=-d*d+p*(p+2*o)+l;else p<=-v?(d=Math.max(0,-(-c*r+s)),p=d>0?-r:Math.min(Math.max(-r,-o),r),u=-d*d+p*(p+2*o)+l):p<=v?(d=0,p=Math.min(Math.max(-r,-o),r),u=p*(p+2*o)+l):(d=Math.max(0,-(c*r+s)),p=d>0?r:Math.min(Math.max(-r,-o),r),u=-d*d+p*(p+2*o)+l);else p=c>0?-r:r,d=Math.max(0,-(c*p+s)),u=-d*d+p*(p+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(ke).addScaledVector(u6,p),u}intersectSphere(t,e){e3.subVectors(t.center,this.origin);let n=e3.dot(this.direction),a=e3.dot(e3)-n*n,r=t.radius*t.radius;if(a>r)return null;let c=Math.sqrt(r-a),s=n-c,o=n+c;return o<0?null:s<0?this.at(o,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,c,s,o,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,a=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,a=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,c=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,c=(t.min.y-p.y)*h),n>c||r>a||((r>n||isNaN(n))&&(n=r),(c<a||isNaN(a))&&(a=c),d>=0?(s=(t.min.z-p.z)*d,o=(t.max.z-p.z)*d):(s=(t.max.z-p.z)*d,o=(t.min.z-p.z)*d),n>o||s>a)||((s>n||n!==n)&&(n=s),(o<a||a!==a)&&(a=o),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,e3)!==null}intersectTriangle(t,e,n,a,r){Ue.subVectors(e,t),p6.subVectors(n,t),Oe.crossVectors(Ue,p6);let c=this.direction.dot(Oe),s;if(c>0){if(a)return null;s=1}else if(c<0)s=-1,c=-c;else return null;w3.subVectors(this.origin,t);let o=s*this.direction.dot(p6.crossVectors(w3,p6));if(o<0)return null;let l=s*this.direction.dot(Ue.cross(w3));if(l<0||o+l>c)return null;let h=-s*w3.dot(Oe);return h<0?null:this.at(h/c,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},C2=class i{constructor(t,e,n,a,r,c,s,o,l,h,d,p,u,v,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,c,s,o,l,h,d,p,u,v,g,m)}set(t,e,n,a,r,c,s,o,l,h,d,p,u,v,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=a,f[1]=r,f[5]=c,f[9]=s,f[13]=o,f[2]=l,f[6]=h,f[10]=d,f[14]=p,f[3]=u,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,a=1/Et.setFromMatrixColumn(t,0).length(),r=1/Et.setFromMatrixColumn(t,1).length(),c=1/Et.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,a=t.y,r=t.z,c=Math.cos(n),s=Math.sin(n),o=Math.cos(a),l=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=c*h,u=c*d,v=s*h,g=s*d;e[0]=o*h,e[4]=-o*d,e[8]=l,e[1]=u+v*l,e[5]=p-g*l,e[9]=-s*o,e[2]=g-p*l,e[6]=v+u*l,e[10]=c*o}else if(t.order==="YXZ"){let p=o*h,u=o*d,v=l*h,g=l*d;e[0]=p+g*s,e[4]=v*s-u,e[8]=c*l,e[1]=c*d,e[5]=c*h,e[9]=-s,e[2]=u*s-v,e[6]=g+p*s,e[10]=c*o}else if(t.order==="ZXY"){let p=o*h,u=o*d,v=l*h,g=l*d;e[0]=p-g*s,e[4]=-c*d,e[8]=v+u*s,e[1]=u+v*s,e[5]=c*h,e[9]=g-p*s,e[2]=-c*l,e[6]=s,e[10]=c*o}else if(t.order==="ZYX"){let p=c*h,u=c*d,v=s*h,g=s*d;e[0]=o*h,e[4]=v*l-u,e[8]=p*l+g,e[1]=o*d,e[5]=g*l+p,e[9]=u*l-v,e[2]=-l,e[6]=s*o,e[10]=c*o}else if(t.order==="YZX"){let p=c*o,u=c*l,v=s*o,g=s*l;e[0]=o*h,e[4]=g-p*d,e[8]=v*d+u,e[1]=d,e[5]=c*h,e[9]=-s*h,e[2]=-l*h,e[6]=u*d+v,e[10]=p-g*d}else if(t.order==="XZY"){let p=c*o,u=c*l,v=s*o,g=s*l;e[0]=o*h,e[4]=-d,e[8]=l*h,e[1]=p*d+g,e[5]=c*h,e[9]=u*d-v,e[2]=v*d-u,e[6]=s*h,e[10]=g*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V9,t,R9)}lookAt(t,e,n){let a=this.elements;return v4.subVectors(t,e),v4.lengthSq()===0&&(v4.z=1),v4.normalize(),_3.crossVectors(n,v4),_3.lengthSq()===0&&(Math.abs(n.z)===1?v4.x+=1e-4:v4.z+=1e-4,v4.normalize(),_3.crossVectors(n,v4)),_3.normalize(),f6.crossVectors(v4,_3),a[0]=_3.x,a[4]=f6.x,a[8]=v4.x,a[1]=_3.y,a[5]=f6.y,a[9]=v4.y,a[2]=_3.z,a[6]=f6.z,a[10]=v4.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,a=e.elements,r=this.elements,c=n[0],s=n[4],o=n[8],l=n[12],h=n[1],d=n[5],p=n[9],u=n[13],v=n[2],g=n[6],m=n[10],f=n[14],_=n[3],b=n[7],y=n[11],P=n[15],A=a[0],E=a[4],T=a[8],w=a[12],M=a[1],L=a[5],D=a[9],H=a[13],I=a[2],K=a[6],Z=a[10],s1=a[14],C=a[3],J=a[7],e1=a[11],$=a[15];return r[0]=c*A+s*M+o*I+l*C,r[4]=c*E+s*L+o*K+l*J,r[8]=c*T+s*D+o*Z+l*e1,r[12]=c*w+s*H+o*s1+l*$,r[1]=h*A+d*M+p*I+u*C,r[5]=h*E+d*L+p*K+u*J,r[9]=h*T+d*D+p*Z+u*e1,r[13]=h*w+d*H+p*s1+u*$,r[2]=v*A+g*M+m*I+f*C,r[6]=v*E+g*L+m*K+f*J,r[10]=v*T+g*D+m*Z+f*e1,r[14]=v*w+g*H+m*s1+f*$,r[3]=_*A+b*M+y*I+P*C,r[7]=_*E+b*L+y*K+P*J,r[11]=_*T+b*D+y*Z+P*e1,r[15]=_*w+b*H+y*s1+P*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],c=t[1],s=t[5],o=t[9],l=t[13],h=t[2],d=t[6],p=t[10],u=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*o*d-a*l*d-r*s*p+n*l*p+a*s*u-n*o*u)+g*(+e*o*u-e*l*p+r*c*p-a*c*u+a*l*h-r*o*h)+m*(+e*l*d-e*s*u-r*c*d+n*c*u+r*s*h-n*l*h)+f*(-a*s*h-e*o*d+e*s*p+a*c*d-n*c*p+n*o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],c=t[4],s=t[5],o=t[6],l=t[7],h=t[8],d=t[9],p=t[10],u=t[11],v=t[12],g=t[13],m=t[14],f=t[15],_=d*m*l-g*p*l+g*o*u-s*m*u-d*o*f+s*p*f,b=v*p*l-h*m*l-v*o*u+c*m*u+h*o*f-c*p*f,y=h*g*l-v*d*l+v*s*u-c*g*u-h*s*f+c*d*f,P=v*d*o-h*g*o-v*s*p+c*g*p+h*s*m-c*d*m,A=e*_+n*b+a*y+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return t[0]=_*E,t[1]=(g*p*r-d*m*r-g*a*u+n*m*u+d*a*f-n*p*f)*E,t[2]=(s*m*r-g*o*r+g*a*l-n*m*l-s*a*f+n*o*f)*E,t[3]=(d*o*r-s*p*r-d*a*l+n*p*l+s*a*u-n*o*u)*E,t[4]=b*E,t[5]=(h*m*r-v*p*r+v*a*u-e*m*u-h*a*f+e*p*f)*E,t[6]=(v*o*r-c*m*r-v*a*l+e*m*l+c*a*f-e*o*f)*E,t[7]=(c*p*r-h*o*r+h*a*l-e*p*l-c*a*u+e*o*u)*E,t[8]=y*E,t[9]=(v*d*r-h*g*r-v*n*u+e*g*u+h*n*f-e*d*f)*E,t[10]=(c*g*r-v*s*r+v*n*l-e*g*l-c*n*f+e*s*f)*E,t[11]=(h*s*r-c*d*r-h*n*l+e*d*l+c*n*u-e*s*u)*E,t[12]=P*E,t[13]=(h*g*a-v*d*a+v*n*p-e*g*p-h*n*m+e*d*m)*E,t[14]=(v*s*a-c*g*a-v*n*o+e*g*o+c*n*m-e*s*m)*E,t[15]=(c*d*a-h*s*a+h*n*o-e*d*o-c*n*p+e*s*p)*E,this}scale(t){let e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),a=Math.sin(e),r=1-n,c=t.x,s=t.y,o=t.z,l=r*c,h=r*s;return this.set(l*c+n,l*s-a*o,l*o+a*s,0,l*s+a*o,h*s+n,h*o-a*c,0,l*o-a*s,h*o+a*c,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,c){return this.set(1,n,r,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){let a=this.elements,r=e._x,c=e._y,s=e._z,o=e._w,l=r+r,h=c+c,d=s+s,p=r*l,u=r*h,v=r*d,g=c*h,m=c*d,f=s*d,_=o*l,b=o*h,y=o*d,P=n.x,A=n.y,E=n.z;return a[0]=(1-(g+f))*P,a[1]=(u+y)*P,a[2]=(v-b)*P,a[3]=0,a[4]=(u-y)*A,a[5]=(1-(p+f))*A,a[6]=(m+_)*A,a[7]=0,a[8]=(v+b)*E,a[9]=(m-_)*E,a[10]=(1-(p+g))*E,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){let a=this.elements,r=Et.set(a[0],a[1],a[2]).length(),c=Et.set(a[4],a[5],a[6]).length(),s=Et.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],I4.copy(this);let l=1/r,h=1/c,d=1/s;return I4.elements[0]*=l,I4.elements[1]*=l,I4.elements[2]*=l,I4.elements[4]*=h,I4.elements[5]*=h,I4.elements[6]*=h,I4.elements[8]*=d,I4.elements[9]*=d,I4.elements[10]*=d,e.setFromRotationMatrix(I4),n.x=r,n.y=c,n.z=s,this}makePerspective(t,e,n,a,r,c,s=o3){let o=this.elements,l=2*r/(e-t),h=2*r/(n-a),d=(e+t)/(e-t),p=(n+a)/(n-a),u,v;if(s===o3)u=-(c+r)/(c-r),v=-2*c*r/(c-r);else if(s===k6)u=-c/(c-r),v=-c*r/(c-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=l,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=h,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,a,r,c,s=o3){let o=this.elements,l=1/(e-t),h=1/(n-a),d=1/(c-r),p=(e+t)*l,u=(n+a)*h,v,g;if(s===o3)v=(c+r)*d,g=-2*d;else if(s===k6)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=g,o[14]=-v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Et=new R,I4=new C2,V9=new R(0,0,0),R9=new R(1,1,1),_3=new R,f6=new R,v4=new R,K7=new C2,J7=new q4,C4=class i{constructor(t=0,e=0,n=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let a=t.elements,r=a[0],c=a[4],s=a[8],o=a[1],l=a[5],h=a[9],d=a[2],p=a[6],u=a[10];switch(e){case"XYZ":this._y=Math.asin(q2(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-c,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-q2(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(q2(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-c,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-q2(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-c,l));break;case"YZX":this._z=Math.asin(q2(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(s,u));break;case"XZY":this._z=Math.asin(-q2(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return K7.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K7,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return J7.setFromEuler(this),this.setFromQuaternion(J7,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};C4.DEFAULT_ORDER="XYZ";var W6=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},B9=0,$7=new R,Ht=new q4,n3=new C2,m6=new R,L0=new R,P9=new R,I9=new q4,j7=new R(1,0,0),Q7=new R(0,1,0),tn=new R(0,0,1),en={type:"added"},N9={type:"removed"},Tt={type:"childadded",child:null},Ge={type:"childremoved",child:null},n4=class i extends F3{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B9++}),this.uuid=H3(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new C4,n=new q4,a=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new C2},normalMatrix:{value:new j1}}),this.matrix=new C2,this.matrixWorld=new C2,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ht.setFromAxisAngle(t,e),this.quaternion.multiply(Ht),this}rotateOnWorldAxis(t,e){return Ht.setFromAxisAngle(t,e),this.quaternion.premultiply(Ht),this}rotateX(t){return this.rotateOnAxis(j7,t)}rotateY(t){return this.rotateOnAxis(Q7,t)}rotateZ(t){return this.rotateOnAxis(tn,t)}translateOnAxis(t,e){return $7.copy(t).applyQuaternion(this.quaternion),this.position.add($7.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(j7,t)}translateY(t){return this.translateOnAxis(Q7,t)}translateZ(t){return this.translateOnAxis(tn,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(n3.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?m6.copy(t):m6.set(t,e,n);let a=this.parent;this.updateWorldMatrix(!0,!1),L0.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?n3.lookAt(L0,m6,this.up):n3.lookAt(m6,L0,this.up),this.quaternion.setFromRotationMatrix(n3),a&&(n3.extractRotation(a.matrixWorld),Ht.setFromRotationMatrix(n3),this.quaternion.premultiply(Ht.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(en),Tt.child=t,this.dispatchEvent(Tt),Tt.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N9),Ge.child=t,this.dispatchEvent(Ge),Ge.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),n3.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),n3.multiply(t.parent.matrixWorld)),t.applyMatrix4(n3),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(en),Tt.child=t,this.dispatchEvent(Tt),Tt.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){let c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(L0,t,P9),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(L0,I9,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(s,o){return s[o.uuid]===void 0&&(s[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let o=s.shapes;if(Array.isArray(o))for(let l=0,h=o.length;l<h;l++){let d=o[l];r(t.shapes,d)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let o=0,l=this.material.length;o<l;o++)s.push(r(t.materials,this.material[o]));a.material=s}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){let o=this.animations[s];a.animations.push(r(t.animations,o))}}if(e){let s=c(t.geometries),o=c(t.materials),l=c(t.textures),h=c(t.images),d=c(t.shapes),p=c(t.skeletons),u=c(t.animations),v=c(t.nodes);s.length>0&&(n.geometries=s),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),v.length>0&&(n.nodes=v)}return n.object=a,n;function c(s){let o=[];for(let l in s){let h=s[l];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let a=t.children[n];this.add(a.clone())}return this}};n4.DEFAULT_UP=new R(0,1,0);n4.DEFAULT_MATRIX_AUTO_UPDATE=!0;n4.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var N4=new R,i3=new R,We=new R,a3=new R,Ft=new R,Vt=new R,nn=new R,Ze=new R,Ye=new R,Xe=new R,qe=new H2,Ke=new H2,Je=new H2,A3=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),N4.subVectors(t,e),a.cross(N4);let r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){N4.subVectors(a,e),i3.subVectors(n,e),We.subVectors(t,e);let c=N4.dot(N4),s=N4.dot(i3),o=N4.dot(We),l=i3.dot(i3),h=i3.dot(We),d=c*l-s*s;if(d===0)return r.set(0,0,0),null;let p=1/d,u=(l*o-s*h)*p,v=(c*h-s*o)*p;return r.set(1-u-v,v,u)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,a3)===null?!1:a3.x>=0&&a3.y>=0&&a3.x+a3.y<=1}static getInterpolation(t,e,n,a,r,c,s,o){return this.getBarycoord(t,e,n,a,a3)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,a3.x),o.addScaledVector(c,a3.y),o.addScaledVector(s,a3.z),o)}static getInterpolatedAttribute(t,e,n,a,r,c){return qe.setScalar(0),Ke.setScalar(0),Je.setScalar(0),qe.fromBufferAttribute(t,e),Ke.fromBufferAttribute(t,n),Je.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(qe,r.x),c.addScaledVector(Ke,r.y),c.addScaledVector(Je,r.z),c}static isFrontFacing(t,e,n,a){return N4.subVectors(n,e),i3.subVectors(t,e),N4.cross(i3).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return N4.subVectors(this.c,this.b),i3.subVectors(this.a,this.b),N4.cross(i3).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,a=this.b,r=this.c,c,s;Ft.subVectors(a,n),Vt.subVectors(r,n),Ze.subVectors(t,n);let o=Ft.dot(Ze),l=Vt.dot(Ze);if(o<=0&&l<=0)return e.copy(n);Ye.subVectors(t,a);let h=Ft.dot(Ye),d=Vt.dot(Ye);if(h>=0&&d<=h)return e.copy(a);let p=o*d-h*l;if(p<=0&&o>=0&&h<=0)return c=o/(o-h),e.copy(n).addScaledVector(Ft,c);Xe.subVectors(t,r);let u=Ft.dot(Xe),v=Vt.dot(Xe);if(v>=0&&u<=v)return e.copy(r);let g=u*l-o*v;if(g<=0&&l>=0&&v<=0)return s=l/(l-v),e.copy(n).addScaledVector(Vt,s);let m=h*v-u*d;if(m<=0&&d-h>=0&&u-v>=0)return nn.subVectors(r,a),s=(d-h)/(d-h+(u-v)),e.copy(a).addScaledVector(nn,s);let f=1/(m+g+p);return c=g*f,s=p*f,e.copy(n).addScaledVector(Ft,c).addScaledVector(Vt,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ei={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},b3={h:0,s:0,l:0},v6={h:0,s:0,l:0};function $e(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var t2=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=D2){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,d2.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=d2.workingColorSpace){return this.r=t,this.g=e,this.b=n,d2.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=d2.workingColorSpace){if(t=S9(t,1),e=q2(e,0,1),n=q2(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,c=2*n-r;this.r=$e(c,r,t+1/3),this.g=$e(c,r,t),this.b=$e(c,r,t-1/3)}return d2.toWorkingColorSpace(this,a),this}setStyle(t,e=D2){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,c=a[1],s=a[2];switch(c){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=a[1],c=r.length;if(c===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=D2){let n=ei[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=l3(t.r),this.g=l3(t.g),this.b=l3(t.b),this}copyLinearToSRGB(t){return this.r=Zt(t.r),this.g=Zt(t.g),this.b=Zt(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=D2){return d2.fromWorkingColorSpace(e4.copy(this),t),Math.round(q2(e4.r*255,0,255))*65536+Math.round(q2(e4.g*255,0,255))*256+Math.round(q2(e4.b*255,0,255))}getHexString(t=D2){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=d2.workingColorSpace){d2.fromWorkingColorSpace(e4.copy(this),e);let n=e4.r,a=e4.g,r=e4.b,c=Math.max(n,a,r),s=Math.min(n,a,r),o,l,h=(s+c)/2;if(s===c)o=0,l=0;else{let d=c-s;switch(l=h<=.5?d/(c+s):d/(2-c-s),c){case n:o=(a-r)/d+(a<r?6:0);break;case a:o=(r-n)/d+2;break;case r:o=(n-a)/d+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=d2.workingColorSpace){return d2.fromWorkingColorSpace(e4.copy(this),e),t.r=e4.r,t.g=e4.g,t.b=e4.b,t}getStyle(t=D2){d2.fromWorkingColorSpace(e4.copy(this),t);let e=e4.r,n=e4.g,a=e4.b;return t!==D2?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(b3),this.setHSL(b3.h+t,b3.s+e,b3.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(b3),t.getHSL(v6);let n=Re(b3.h,v6.h,e),a=Re(b3.s,v6.s,e),r=Re(b3.l,v6.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},e4=new t2;t2.NAMES=ei;var D9=0,V3=class extends F3{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D9++}),this.uuid=H3(),this.name="",this.blending=Gt,this.side=T3,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=u8,this.blendDst=p8,this.blendEquation=J3,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new t2(0,0,0),this.blendAlpha=0,this.depthFunc=Xt,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k7,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bt,this.stencilZFail=bt,this.stencilZPass=bt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gt&&(n.blending=this.blending),this.side!==T3&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==u8&&(n.blendSrc=this.blendSrc),this.blendDst!==p8&&(n.blendDst=this.blendDst),this.blendEquation!==J3&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xt&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k7&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bt&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bt&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bt&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){let c=[];for(let s in r){let o=r[s];delete o.metadata,c.push(o)}return c}if(e){let r=a(t.textures),c=a(t.images);r.length>0&&(n.textures=r),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Y2=class extends V3{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new t2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C4,this.combine=kn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var R2=new R,g6=new w1,J2=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=j8,this.updateRanges=[],this.gpuType=s3,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)g6.fromBufferAttribute(this,e),g6.applyMatrix3(t),this.setXY(e,g6.x,g6.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)R2.fromBufferAttribute(this,e),R2.applyMatrix3(t),this.setXYZ(e,R2.x,R2.y,R2.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)R2.fromBufferAttribute(this,e),R2.applyMatrix4(t),this.setXYZ(e,R2.x,R2.y,R2.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)R2.fromBufferAttribute(this,e),R2.applyNormalMatrix(t),this.setXYZ(e,R2.x,R2.y,R2.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)R2.fromBufferAttribute(this,e),R2.transformDirection(t),this.setXYZ(e,R2.x,R2.y,R2.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=X4(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_2(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=X4(e,this.array)),e}setX(t,e){return this.normalized&&(e=_2(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=X4(e,this.array)),e}setY(t,e){return this.normalized&&(e=_2(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=X4(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_2(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=X4(e,this.array)),e}setW(t,e){return this.normalized&&(e=_2(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_2(e,this.array),n=_2(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=_2(e,this.array),n=_2(n,this.array),a=_2(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=_2(e,this.array),n=_2(n,this.array),a=_2(a,this.array),r=_2(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==j8&&(t.usage=this.usage),t}};var Z6=class extends J2{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Y6=class extends J2{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var A2=class extends J2{constructor(t,e,n){super(new Float32Array(t),e,n)}},k9=0,S4=new C2,je=new n4,Rt=new R,g4=new et,E0=new et,Z2=new R,$2=class i extends F3{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k9++}),this.uuid=H3(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ti(t)?Y6:Z6)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new j1().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return S4.makeRotationFromQuaternion(t),this.applyMatrix4(S4),this}rotateX(t){return S4.makeRotationX(t),this.applyMatrix4(S4),this}rotateY(t){return S4.makeRotationY(t),this.applyMatrix4(S4),this}rotateZ(t){return S4.makeRotationZ(t),this.applyMatrix4(S4),this}translate(t,e,n){return S4.makeTranslation(t,e,n),this.applyMatrix4(S4),this}scale(t,e,n){return S4.makeScale(t,e,n),this.applyMatrix4(S4),this}lookAt(t){return je.lookAt(t),je.updateMatrix(),this.applyMatrix4(je.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rt).negate(),this.translate(Rt.x,Rt.y,Rt.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let a=0,r=t.length;a<r;a++){let c=t[a];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new A2(n,3))}else{for(let n=0,a=e.count;n<a;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new et);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){let r=e[n];g4.setFromBufferAttribute(r),this.morphTargetsRelative?(Z2.addVectors(this.boundingBox.min,g4.min),this.boundingBox.expandByPoint(Z2),Z2.addVectors(this.boundingBox.max,g4.max),this.boundingBox.expandByPoint(Z2)):(this.boundingBox.expandByPoint(g4.min),this.boundingBox.expandByPoint(g4.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new D0);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(g4.setFromBufferAttribute(t),e)for(let r=0,c=e.length;r<c;r++){let s=e[r];E0.setFromBufferAttribute(s),this.morphTargetsRelative?(Z2.addVectors(g4.min,E0.min),g4.expandByPoint(Z2),Z2.addVectors(g4.max,E0.max),g4.expandByPoint(Z2)):(g4.expandByPoint(E0.min),g4.expandByPoint(E0.max))}g4.getCenter(n);let a=0;for(let r=0,c=t.count;r<c;r++)Z2.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Z2));if(e)for(let r=0,c=e.length;r<c;r++){let s=e[r],o=this.morphTargetsRelative;for(let l=0,h=s.count;l<h;l++)Z2.fromBufferAttribute(s,l),o&&(Rt.fromBufferAttribute(t,l),Z2.add(Rt)),a=Math.max(a,n.distanceToSquared(Z2))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,a=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new J2(new Float32Array(4*n.count),4));let c=this.getAttribute("tangent"),s=[],o=[];for(let T=0;T<n.count;T++)s[T]=new R,o[T]=new R;let l=new R,h=new R,d=new R,p=new w1,u=new w1,v=new w1,g=new R,m=new R;function f(T,w,M){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),p.fromBufferAttribute(r,T),u.fromBufferAttribute(r,w),v.fromBufferAttribute(r,M),h.sub(l),d.sub(l),u.sub(p),v.sub(p);let L=1/(u.x*v.y-v.x*u.y);isFinite(L)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-v.x).multiplyScalar(L),s[T].add(g),s[w].add(g),s[M].add(g),o[T].add(m),o[w].add(m),o[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,w=_.length;T<w;++T){let M=_[T],L=M.start,D=M.count;for(let H=L,I=L+D;H<I;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let b=new R,y=new R,P=new R,A=new R;function E(T){P.fromBufferAttribute(a,T),A.copy(P);let w=s[T];b.copy(w),b.sub(P.multiplyScalar(P.dot(w))).normalize(),y.crossVectors(A,w);let L=y.dot(o[T])<0?-1:1;c.setXYZW(T,b.x,b.y,b.z,L)}for(let T=0,w=_.length;T<w;++T){let M=_[T],L=M.start,D=M.count;for(let H=L,I=L+D;H<I;H+=3)E(t.getX(H+0)),E(t.getX(H+1)),E(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new J2(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);let a=new R,r=new R,c=new R,s=new R,o=new R,l=new R,h=new R,d=new R;if(t)for(let p=0,u=t.count;p<u;p+=3){let v=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),c.fromBufferAttribute(e,m),h.subVectors(c,r),d.subVectors(a,r),h.cross(d),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),s.add(h),o.add(h),l.add(h),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,u=e.count;p<u;p+=3)a.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),c.fromBufferAttribute(e,p+2),h.subVectors(c,r),d.subVectors(a,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Z2.fromBufferAttribute(t,e),Z2.normalize(),t.setXYZ(e,Z2.x,Z2.y,Z2.z)}toNonIndexed(){function t(s,o){let l=s.array,h=s.itemSize,d=s.normalized,p=new l.constructor(o.length*h),u=0,v=0;for(let g=0,m=o.length;g<m;g++){s.isInterleavedBufferAttribute?u=o[g]*s.data.stride+s.offset:u=o[g]*h;for(let f=0;f<h;f++)p[v++]=l[u++]}return new J2(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,a=this.attributes;for(let s in a){let o=a[s],l=t(o,n);e.setAttribute(s,l)}let r=this.morphAttributes;for(let s in r){let o=[],l=r[s];for(let h=0,d=l.length;h<d;h++){let p=l[h],u=t(p,n);o.push(u)}e.morphAttributes[s]=o}e.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let s=0,o=c.length;s<o;s++){let l=c[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let a={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],h=[];for(let d=0,p=l.length;d<p;d++){let u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(a[o]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let a=t.attributes;for(let l in a){let h=a[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let p=0,u=d.length;p<u;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let c=t.groups;for(let l=0,h=c.length;l<h;l++){let d=c[l];this.addGroup(d.start,d.count,d.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=new C2,Z3=new i5,x6=new D0,rn=new R,M6=new R,z6=new R,y6=new R,Qe=new R,w6=new R,cn=new R,_6=new R,u2=class extends n4{constructor(t=new $2,e=new Y2){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,c=a.length;r<c;r++){let s=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){let n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(a,t);let s=this.morphTargetInfluences;if(r&&s){w6.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let h=s[o],d=r[o];h!==0&&(Qe.fromBufferAttribute(d,t),c?w6.addScaledVector(Qe,h):w6.addScaledVector(Qe.sub(e),h))}e.add(w6)}return e}raycast(t,e){let n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),x6.copy(n.boundingSphere),x6.applyMatrix4(r),Z3.copy(t.ray).recast(t.near),!(x6.containsPoint(Z3.origin)===!1&&(Z3.intersectSphere(x6,rn)===null||Z3.origin.distanceToSquared(rn)>(t.far-t.near)**2))&&(an.copy(r).invert(),Z3.copy(t.ray).applyMatrix4(an),!(n.boundingBox!==null&&Z3.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Z3)))}_computeIntersections(t,e,n){let a,r=this.geometry,c=this.material,s=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,u=r.drawRange;if(s!==null)if(Array.isArray(c))for(let v=0,g=p.length;v<g;v++){let m=p[v],f=c[m.materialIndex],_=Math.max(m.start,u.start),b=Math.min(s.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,P=b;y<P;y+=3){let A=s.getX(y),E=s.getX(y+1),T=s.getX(y+2);a=b6(this,f,t,n,l,h,d,A,E,T),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{let v=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let m=v,f=g;m<f;m+=3){let _=s.getX(m),b=s.getX(m+1),y=s.getX(m+2);a=b6(this,c,t,n,l,h,d,_,b,y),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(o!==void 0)if(Array.isArray(c))for(let v=0,g=p.length;v<g;v++){let m=p[v],f=c[m.materialIndex],_=Math.max(m.start,u.start),b=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=_,P=b;y<P;y+=3){let A=y,E=y+1,T=y+2;a=b6(this,f,t,n,l,h,d,A,E,T),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{let v=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let m=v,f=g;m<f;m+=3){let _=m,b=m+1,y=m+2;a=b6(this,c,t,n,l,h,d,_,b,y),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}};function U9(i,t,e,n,a,r,c,s){let o;if(t.side===d4?o=n.intersectTriangle(c,r,a,!0,s):o=n.intersectTriangle(a,r,c,t.side===T3,s),o===null)return null;_6.copy(s),_6.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_6);return l<e.near||l>e.far?null:{distance:l,point:_6.clone(),object:i}}function b6(i,t,e,n,a,r,c,s,o,l){i.getVertexPosition(s,M6),i.getVertexPosition(o,z6),i.getVertexPosition(l,y6);let h=U9(i,t,e,n,M6,z6,y6,cn);if(h){let d=new R;A3.getBarycoord(cn,M6,z6,y6,d),a&&(h.uv=A3.getInterpolatedAttribute(a,s,o,l,d,new w1)),r&&(h.uv1=A3.getInterpolatedAttribute(r,s,o,l,d,new w1)),c&&(h.normal=A3.getInterpolatedAttribute(c,s,o,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:s,b:o,c:l,normal:new R,materialIndex:0};A3.getNormal(M6,z6,y6,p.normal),h.face=p,h.barycoord=d}return h}var i4=class i extends $2{constructor(t=1,e=1,n=1,a=1,r=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:c};let s=this;a=Math.floor(a),r=Math.floor(r),c=Math.floor(c);let o=[],l=[],h=[],d=[],p=0,u=0;v("z","y","x",-1,-1,n,e,t,c,r,0),v("z","y","x",1,-1,n,e,-t,c,r,1),v("x","z","y",1,1,t,n,e,a,c,2),v("x","z","y",1,-1,t,n,-e,a,c,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(o),this.setAttribute("position",new A2(l,3)),this.setAttribute("normal",new A2(h,3)),this.setAttribute("uv",new A2(d,2));function v(g,m,f,_,b,y,P,A,E,T,w){let M=y/E,L=P/T,D=y/2,H=P/2,I=A/2,K=E+1,Z=T+1,s1=0,C=0,J=new R;for(let e1=0;e1<Z;e1++){let $=e1*L-H;for(let i1=0;i1<K;i1++){let C1=i1*M-D;J[g]=C1*_,J[m]=$*b,J[f]=I,l.push(J.x,J.y,J.z),J[g]=0,J[m]=0,J[f]=A>0?1:-1,h.push(J.x,J.y,J.z),d.push(i1/E),d.push(1-e1/T),s1+=1}}for(let e1=0;e1<T;e1++)for(let $=0;$<E;$++){let i1=p+$+K*e1,C1=p+$+K*(e1+1),j=p+($+1)+K*(e1+1),a1=p+($+1)+K*e1;o.push(i1,C1,a1),o.push(C1,j,a1),C+=6}s.addGroup(u,C,w),u+=C,p+=s1}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function jt(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function l4(i){let t={};for(let e=0;e<i.length;e++){let n=jt(i[e]);for(let a in n)t[a]=n[a]}return t}function O9(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ni(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:d2.workingColorSpace}var G9={clone:jt,merge:l4},W9=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z9=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,K4=class extends V3{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W9,this.fragmentShader=Z9,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jt(t.uniforms),this.uniformsGroups=O9(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let a in this.uniforms){let c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},X6=class extends n4{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new C2,this.projectionMatrix=new C2,this.projectionMatrixInverse=new C2,this.coordinateSystem=o3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},S3=new R,sn=new w1,on=new w1,x4=class extends X6{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Q8*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ve*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Q8*2*Math.atan(Math.tan(Ve*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){S3.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(S3.x,S3.y).multiplyScalar(-t/S3.z),S3.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(S3.x,S3.y).multiplyScalar(-t/S3.z)}getViewSize(t,e){return this.getViewBounds(t,sn,on),e.subVectors(on,sn)}setViewOffset(t,e,n,a,r,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ve*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a,c=this.view;if(this.view!==null&&this.view.enabled){let o=c.fullWidth,l=c.fullHeight;r+=c.offsetX*a/o,e-=c.offsetY*n/l,a*=c.width/o,n*=c.height/l}let s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bt=-90,Pt=1,a5=class extends n4{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new x4(Bt,Pt,t,e);a.layers=this.layers,this.add(a);let r=new x4(Bt,Pt,t,e);r.layers=this.layers,this.add(r);let c=new x4(Bt,Pt,t,e);c.layers=this.layers,this.add(c);let s=new x4(Bt,Pt,t,e);s.layers=this.layers,this.add(s);let o=new x4(Bt,Pt,t,e);o.layers=this.layers,this.add(o);let l=new x4(Bt,Pt,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,a,r,c,s,o]=e;for(let l of e)this.remove(l);if(t===o3)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===k6)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,c,s,o,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,c),t.setRenderTarget(n,2,a),t.render(e,s),t.setRenderTarget(n,3,a),t.render(e,o),t.setRenderTarget(n,4,a),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(d,p,u),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},q6=class extends z4{constructor(t,e,n,a,r,c,s,o,l,h){t=t!==void 0?t:[],e=e!==void 0?e:qt,super(t,e,n,a,r,c,s,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},r5=class extends d3{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new q6(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:M4}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new i4(5,5,5),r=new K4({name:"CubemapFromEquirect",uniforms:jt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:d4,blending:L3});r.uniforms.tEquirect.value=e;let c=new u2(a,r),s=e.minFilter;return e.minFilter===Q3&&(e.minFilter=M4),new a5(1,10,this).update(t,c),e.minFilter=s,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,n,a){let r=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,a);t.setRenderTarget(r)}},t8=new R,Y9=new R,X9=new j1,c3=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let a=t8.subVectors(n,e).cross(Y9.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(t8),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||X9.getNormalMatrix(t),a=this.coplanarPoint(t8).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Y3=new D0,S6=new R,k0=class{constructor(t=new c3,e=new c3,n=new c3,a=new c3,r=new c3,c=new c3){this.planes=[t,e,n,a,r,c]}set(t,e,n,a,r,c){let s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(a),s[4].copy(r),s[5].copy(c),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=o3){let n=this.planes,a=t.elements,r=a[0],c=a[1],s=a[2],o=a[3],l=a[4],h=a[5],d=a[6],p=a[7],u=a[8],v=a[9],g=a[10],m=a[11],f=a[12],_=a[13],b=a[14],y=a[15];if(n[0].setComponents(o-r,p-l,m-u,y-f).normalize(),n[1].setComponents(o+r,p+l,m+u,y+f).normalize(),n[2].setComponents(o+c,p+h,m+v,y+_).normalize(),n[3].setComponents(o-c,p-h,m-v,y-_).normalize(),n[4].setComponents(o-s,p-d,m-g,y-b).normalize(),e===o3)n[5].setComponents(o+s,p+d,m+g,y+b).normalize();else if(e===k6)n[5].setComponents(s,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Y3.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Y3.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Y3)}intersectsSprite(t){return Y3.center.set(0,0,0),Y3.radius=.7071067811865476,Y3.applyMatrix4(t.matrixWorld),this.intersectsSphere(Y3)}intersectsSphere(t){let e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let a=e[n];if(S6.x=a.normal.x>0?t.max.x:t.min.x,S6.y=a.normal.y>0?t.max.y:t.min.y,S6.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(S6)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ii(){let i=null,t=!1,e=null,n=null;function a(r,c){e(r,c),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function q9(i){let t=new WeakMap;function e(s,o){let l=s.array,h=s.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(o,p),i.bufferData(o,l,h),s.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)s.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:s.version,size:d}}function n(s,o,l){let h=o.array,d=o.updateRanges;if(i.bindBuffer(l,s),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,v)=>u.start-v.start);let p=0;for(let u=1;u<d.length;u++){let v=d[p],g=d[u];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++p,d[p]=g)}d.length=p+1;for(let u=0,v=d.length;u<v;u++){let g=d[u];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}o.clearUpdateRanges()}o.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),t.get(s)}function r(s){s.isInterleavedBufferAttribute&&(s=s.data);let o=t.get(s);o&&(i.deleteBuffer(o.buffer),t.delete(s))}function c(s,o){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){let h=t.get(s);(!h||h.version<s.version)&&t.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}let l=t.get(s);if(l===void 0)t.set(s,e(s,o));else if(l.version<s.version){if(l.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,s,o),l.version=s.version}}return{get:a,remove:r,update:c}}var R3=class i extends $2{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};let r=t/2,c=e/2,s=Math.floor(n),o=Math.floor(a),l=s+1,h=o+1,d=t/s,p=e/o,u=[],v=[],g=[],m=[];for(let f=0;f<h;f++){let _=f*p-c;for(let b=0;b<l;b++){let y=b*d-r;v.push(y,-_,0),g.push(0,0,1),m.push(b/s),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let _=0;_<s;_++){let b=_+l*f,y=_+l*(f+1),P=_+1+l*(f+1),A=_+1+l*f;u.push(b,y,A),u.push(y,P,A)}this.setIndex(u),this.setAttribute("position",new A2(v,3)),this.setAttribute("normal",new A2(g,3)),this.setAttribute("uv",new A2(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},K9=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J9=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$9=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j9=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q9=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tr=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,er=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ir=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ar=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sr=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,or=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lr=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hr=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ur=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xr=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mr=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zr=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_r=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,br=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sr="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cr=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ar=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lr=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Er=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tr=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rr=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Br=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pr=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ir=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dr=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kr=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ur=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Or=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gr=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zr=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yr=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xr=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qr=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kr=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$r=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jr=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qr=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ec=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ic=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ac=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_c=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ac=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ec=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ic=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$c=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ts=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,es=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ns=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,is=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,as=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rs=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cs=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ss=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,os=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ls=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hs=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ds=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,us=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ps=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fs=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ms=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vs=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gs=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xs=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ms=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zs=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ys=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ws=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_s=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bs=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ss=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cs=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,As=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q1={alphahash_fragment:K9,alphahash_pars_fragment:J9,alphamap_fragment:$9,alphamap_pars_fragment:j9,alphatest_fragment:Q9,alphatest_pars_fragment:tr,aomap_fragment:er,aomap_pars_fragment:nr,batching_pars_vertex:ir,batching_vertex:ar,begin_vertex:rr,beginnormal_vertex:cr,bsdfs:sr,iridescence_fragment:or,bumpmap_pars_fragment:lr,clipping_planes_fragment:hr,clipping_planes_pars_fragment:dr,clipping_planes_pars_vertex:ur,clipping_planes_vertex:pr,color_fragment:fr,color_pars_fragment:mr,color_pars_vertex:vr,color_vertex:gr,common:xr,cube_uv_reflection_fragment:Mr,defaultnormal_vertex:zr,displacementmap_pars_vertex:yr,displacementmap_vertex:wr,emissivemap_fragment:_r,emissivemap_pars_fragment:br,colorspace_fragment:Sr,colorspace_pars_fragment:Cr,envmap_fragment:Ar,envmap_common_pars_fragment:Lr,envmap_pars_fragment:Er,envmap_pars_vertex:Hr,envmap_physical_pars_fragment:Ur,envmap_vertex:Tr,fog_vertex:Fr,fog_pars_vertex:Vr,fog_fragment:Rr,fog_pars_fragment:Br,gradientmap_pars_fragment:Pr,lightmap_pars_fragment:Ir,lights_lambert_fragment:Nr,lights_lambert_pars_fragment:Dr,lights_pars_begin:kr,lights_toon_fragment:Or,lights_toon_pars_fragment:Gr,lights_phong_fragment:Wr,lights_phong_pars_fragment:Zr,lights_physical_fragment:Yr,lights_physical_pars_fragment:Xr,lights_fragment_begin:qr,lights_fragment_maps:Kr,lights_fragment_end:Jr,logdepthbuf_fragment:$r,logdepthbuf_pars_fragment:jr,logdepthbuf_pars_vertex:Qr,logdepthbuf_vertex:tc,map_fragment:ec,map_pars_fragment:nc,map_particle_fragment:ic,map_particle_pars_fragment:ac,metalnessmap_fragment:rc,metalnessmap_pars_fragment:cc,morphinstance_vertex:sc,morphcolor_vertex:oc,morphnormal_vertex:lc,morphtarget_pars_vertex:hc,morphtarget_vertex:dc,normal_fragment_begin:uc,normal_fragment_maps:pc,normal_pars_fragment:fc,normal_pars_vertex:mc,normal_vertex:vc,normalmap_pars_fragment:gc,clearcoat_normal_fragment_begin:xc,clearcoat_normal_fragment_maps:Mc,clearcoat_pars_fragment:zc,iridescence_pars_fragment:yc,opaque_fragment:wc,packing:_c,premultiplied_alpha_fragment:bc,project_vertex:Sc,dithering_fragment:Cc,dithering_pars_fragment:Ac,roughnessmap_fragment:Lc,roughnessmap_pars_fragment:Ec,shadowmap_pars_fragment:Hc,shadowmap_pars_vertex:Tc,shadowmap_vertex:Fc,shadowmask_pars_fragment:Vc,skinbase_vertex:Rc,skinning_pars_vertex:Bc,skinning_vertex:Pc,skinnormal_vertex:Ic,specularmap_fragment:Nc,specularmap_pars_fragment:Dc,tonemapping_fragment:kc,tonemapping_pars_fragment:Uc,transmission_fragment:Oc,transmission_pars_fragment:Gc,uv_pars_fragment:Wc,uv_pars_vertex:Zc,uv_vertex:Yc,worldpos_vertex:Xc,background_vert:qc,background_frag:Kc,backgroundCube_vert:Jc,backgroundCube_frag:$c,cube_vert:jc,cube_frag:Qc,depth_vert:ts,depth_frag:es,distanceRGBA_vert:ns,distanceRGBA_frag:is,equirect_vert:as,equirect_frag:rs,linedashed_vert:cs,linedashed_frag:ss,meshbasic_vert:os,meshbasic_frag:ls,meshlambert_vert:hs,meshlambert_frag:ds,meshmatcap_vert:us,meshmatcap_frag:ps,meshnormal_vert:fs,meshnormal_frag:ms,meshphong_vert:vs,meshphong_frag:gs,meshphysical_vert:xs,meshphysical_frag:Ms,meshtoon_vert:zs,meshtoon_frag:ys,points_vert:ws,points_frag:_s,shadow_vert:bs,shadow_frag:Ss,sprite_vert:Cs,sprite_frag:As},p1={common:{diffuse:{value:new t2(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j1},alphaMap:{value:null},alphaMapTransform:{value:new j1},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j1}},envmap:{envMap:{value:null},envMapRotation:{value:new j1},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j1}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j1},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j1},normalScale:{value:new w1(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j1},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j1}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j1}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j1}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new t2(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new t2(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j1},alphaTest:{value:0},uvTransform:{value:new j1}},sprite:{diffuse:{value:new t2(16777215)},opacity:{value:1},center:{value:new w1(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j1},alphaMap:{value:null},alphaMapTransform:{value:new j1},alphaTest:{value:0}}},Y4={basic:{uniforms:l4([p1.common,p1.specularmap,p1.envmap,p1.aomap,p1.lightmap,p1.fog]),vertexShader:Q1.meshbasic_vert,fragmentShader:Q1.meshbasic_frag},lambert:{uniforms:l4([p1.common,p1.specularmap,p1.envmap,p1.aomap,p1.lightmap,p1.emissivemap,p1.bumpmap,p1.normalmap,p1.displacementmap,p1.fog,p1.lights,{emissive:{value:new t2(0)}}]),vertexShader:Q1.meshlambert_vert,fragmentShader:Q1.meshlambert_frag},phong:{uniforms:l4([p1.common,p1.specularmap,p1.envmap,p1.aomap,p1.lightmap,p1.emissivemap,p1.bumpmap,p1.normalmap,p1.displacementmap,p1.fog,p1.lights,{emissive:{value:new t2(0)},specular:{value:new t2(1118481)},shininess:{value:30}}]),vertexShader:Q1.meshphong_vert,fragmentShader:Q1.meshphong_frag},standard:{uniforms:l4([p1.common,p1.envmap,p1.aomap,p1.lightmap,p1.emissivemap,p1.bumpmap,p1.normalmap,p1.displacementmap,p1.roughnessmap,p1.metalnessmap,p1.fog,p1.lights,{emissive:{value:new t2(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q1.meshphysical_vert,fragmentShader:Q1.meshphysical_frag},toon:{uniforms:l4([p1.common,p1.aomap,p1.lightmap,p1.emissivemap,p1.bumpmap,p1.normalmap,p1.displacementmap,p1.gradientmap,p1.fog,p1.lights,{emissive:{value:new t2(0)}}]),vertexShader:Q1.meshtoon_vert,fragmentShader:Q1.meshtoon_frag},matcap:{uniforms:l4([p1.common,p1.bumpmap,p1.normalmap,p1.displacementmap,p1.fog,{matcap:{value:null}}]),vertexShader:Q1.meshmatcap_vert,fragmentShader:Q1.meshmatcap_frag},points:{uniforms:l4([p1.points,p1.fog]),vertexShader:Q1.points_vert,fragmentShader:Q1.points_frag},dashed:{uniforms:l4([p1.common,p1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q1.linedashed_vert,fragmentShader:Q1.linedashed_frag},depth:{uniforms:l4([p1.common,p1.displacementmap]),vertexShader:Q1.depth_vert,fragmentShader:Q1.depth_frag},normal:{uniforms:l4([p1.common,p1.bumpmap,p1.normalmap,p1.displacementmap,{opacity:{value:1}}]),vertexShader:Q1.meshnormal_vert,fragmentShader:Q1.meshnormal_frag},sprite:{uniforms:l4([p1.sprite,p1.fog]),vertexShader:Q1.sprite_vert,fragmentShader:Q1.sprite_frag},background:{uniforms:{uvTransform:{value:new j1},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q1.background_vert,fragmentShader:Q1.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j1}},vertexShader:Q1.backgroundCube_vert,fragmentShader:Q1.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q1.cube_vert,fragmentShader:Q1.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q1.equirect_vert,fragmentShader:Q1.equirect_frag},distanceRGBA:{uniforms:l4([p1.common,p1.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q1.distanceRGBA_vert,fragmentShader:Q1.distanceRGBA_frag},shadow:{uniforms:l4([p1.lights,p1.fog,{color:{value:new t2(0)},opacity:{value:1}}]),vertexShader:Q1.shadow_vert,fragmentShader:Q1.shadow_frag}};Y4.physical={uniforms:l4([Y4.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j1},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j1},clearcoatNormalScale:{value:new w1(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j1},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j1},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j1},sheen:{value:0},sheenColor:{value:new t2(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j1},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j1},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j1},transmissionSamplerSize:{value:new w1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j1},attenuationDistance:{value:0},attenuationColor:{value:new t2(0)},specularColor:{value:new t2(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j1},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j1},anisotropyVector:{value:new w1},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j1}}]),vertexShader:Q1.meshphysical_vert,fragmentShader:Q1.meshphysical_frag};var C6={r:0,b:0,g:0},X3=new C4,Ls=new C2;function Es(i,t,e,n,a,r,c){let s=new t2(0),o=r===!0?0:1,l,h,d=null,p=0,u=null;function v(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?e:t).get(b)),b}function g(_){let b=!1,y=v(_);y===null?f(s,o):y&&y.isColor&&(f(y,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,b){let y=v(b);y&&(y.isCubeTexture||y.mapping===le)?(h===void 0&&(h=new u2(new i4(1,1,1),new K4({name:"BackgroundCubeMaterial",uniforms:jt(Y4.backgroundCube.uniforms),vertexShader:Y4.backgroundCube.vertexShader,fragmentShader:Y4.backgroundCube.fragmentShader,side:d4,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),X3.copy(b.backgroundRotation),X3.x*=-1,X3.y*=-1,X3.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(X3.y*=-1,X3.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ls.makeRotationFromEuler(X3)),h.material.toneMapped=d2.getTransfer(y.colorSpace)!==w2,(d!==y||p!==y.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,u=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new u2(new R3(2,2),new K4({name:"BackgroundMaterial",uniforms:jt(Y4.background.uniforms),vertexShader:Y4.background.vertexShader,fragmentShader:Y4.background.fragmentShader,side:T3,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=d2.getTransfer(y.colorSpace)!==w2,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,b){_.getRGB(C6,ni(i)),n.buffers.color.setClear(C6.r,C6.g,C6.b,b,c)}return{getClearColor:function(){return s},setClearColor:function(_,b=1){s.set(_),o=b,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,f(s,o)},render:g,addToRenderList:m}}function Hs(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=p(null),r=a,c=!1;function s(M,L,D,H,I){let K=!1,Z=d(H,D,L);r!==Z&&(r=Z,l(r.object)),K=u(M,H,D,I),K&&v(M,H,D,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,y(M,L,D,H),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function o(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,L,D){let H=D.wireframe===!0,I=n[M.id];I===void 0&&(I={},n[M.id]=I);let K=I[L.id];K===void 0&&(K={},I[L.id]=K);let Z=K[H];return Z===void 0&&(Z=p(o()),K[H]=Z),Z}function p(M){let L=[],D=[],H=[];for(let I=0;I<e;I++)L[I]=0,D[I]=0,H[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:H,object:M,attributes:{},index:null}}function u(M,L,D,H){let I=r.attributes,K=L.attributes,Z=0,s1=D.getAttributes();for(let C in s1)if(s1[C].location>=0){let e1=I[C],$=K[C];if($===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),e1===void 0||e1.attribute!==$||$&&e1.data!==$.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function v(M,L,D,H){let I={},K=L.attributes,Z=0,s1=D.getAttributes();for(let C in s1)if(s1[C].location>=0){let e1=K[C];e1===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(e1=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(e1=M.instanceColor));let $={};$.attribute=e1,e1&&e1.data&&($.data=e1.data),I[C]=$,Z++}r.attributes=I,r.attributesNum=Z,r.index=H}function g(){let M=r.newAttributes;for(let L=0,D=M.length;L<D;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){let D=r.newAttributes,H=r.enabledAttributes,I=r.attributeDivisors;D[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),I[M]!==L&&(i.vertexAttribDivisor(M,L),I[M]=L)}function _(){let M=r.newAttributes,L=r.enabledAttributes;for(let D=0,H=L.length;D<H;D++)L[D]!==M[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function b(M,L,D,H,I,K,Z){Z===!0?i.vertexAttribIPointer(M,L,D,I,K):i.vertexAttribPointer(M,L,D,H,I,K)}function y(M,L,D,H){g();let I=H.attributes,K=D.getAttributes(),Z=L.defaultAttributeValues;for(let s1 in K){let C=K[s1];if(C.location>=0){let J=I[s1];if(J===void 0&&(s1==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),s1==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){let e1=J.normalized,$=J.itemSize,i1=t.get(J);if(i1===void 0)continue;let C1=i1.buffer,j=i1.type,a1=i1.bytesPerElement,d1=j===i.INT||j===i.UNSIGNED_INT||J.gpuType===I5;if(J.isInterleavedBufferAttribute){let h1=J.data,B1=h1.stride,Z1=J.offset;if(h1.isInstancedInterleavedBuffer){for(let U1=0;U1<C.locationSize;U1++)f(C.location+U1,h1.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=h1.meshPerAttribute*h1.count)}else for(let U1=0;U1<C.locationSize;U1++)m(C.location+U1);i.bindBuffer(i.ARRAY_BUFFER,C1);for(let U1=0;U1<C.locationSize;U1++)b(C.location+U1,$/C.locationSize,j,e1,B1*a1,(Z1+$/C.locationSize*U1)*a1,d1)}else{if(J.isInstancedBufferAttribute){for(let h1=0;h1<C.locationSize;h1++)f(C.location+h1,J.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let h1=0;h1<C.locationSize;h1++)m(C.location+h1);i.bindBuffer(i.ARRAY_BUFFER,C1);for(let h1=0;h1<C.locationSize;h1++)b(C.location+h1,$/C.locationSize,j,e1,$*a1,$/C.locationSize*h1*a1,d1)}}else if(Z!==void 0){let e1=Z[s1];if(e1!==void 0)switch(e1.length){case 2:i.vertexAttrib2fv(C.location,e1);break;case 3:i.vertexAttrib3fv(C.location,e1);break;case 4:i.vertexAttrib4fv(C.location,e1);break;default:i.vertexAttrib1fv(C.location,e1)}}}}_()}function P(){T();for(let M in n){let L=n[M];for(let D in L){let H=L[D];for(let I in H)h(H[I].object),delete H[I];delete L[D]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let D in L){let H=L[D];for(let I in H)h(H[I].object),delete H[I];delete L[D]}delete n[M.id]}function E(M){for(let L in n){let D=n[L];if(D[M.id]===void 0)continue;let H=D[M.id];for(let I in H)h(H[I].object),delete H[I];delete D[M.id]}}function T(){w(),c=!0,r!==a&&(r=a,l(r.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:T,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Ts(i,t,e){let n;function a(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function c(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function s(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let u=0;for(let v=0;v<d;v++)u+=h[v];e.update(u,n,1)}function o(l,h,d,p){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let v=0;v<l.length;v++)c(l[v],h[v],p[v]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g]*p[g];e.update(v,n,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=s,this.renderMultiDrawInstances=o}function Fs(i,t,e,n){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(E){return!(E!==D4&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(E){let T=E===G0&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==h3&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==s3&&!T)}function o(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=o(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:c,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:u,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function Vs(i){let t=this,e=null,n=0,a=!1,r=!1,c=new c3,s=new j1,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let u=d.length!==0||p||n!==0||a;return a=p,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,u){let v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!a||v===null||v.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,b=_*4,y=f.clippingState||null;o.value=y,y=h(v,p,b,u);for(let P=0;P!==b;++P)y[P]=e[P];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,u,v){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=o.value,v!==!0||m===null){let f=u+g*4,_=p.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=u;b!==g;++b,y+=4)c.copy(d[b]).applyMatrix4(_,s),c.normal.toArray(m,y),m[y+3]=c.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Rs(i){let t=new WeakMap;function e(c,s){return s===y8?c.mapping=qt:s===w8&&(c.mapping=Kt),c}function n(c){if(c&&c.isTexture){let s=c.mapping;if(s===y8||s===w8)if(t.has(c)){let o=t.get(c).texture;return e(o,c.mapping)}else{let o=c.image;if(o&&o.height>0){let l=new r5(o.height);return l.fromEquirectangularTexture(i,c),t.set(c,l),c.addEventListener("dispose",a),e(l.texture,c.mapping)}else return null}}return c}function a(c){let s=c.target;s.removeEventListener("dispose",a);let o=t.get(s);o!==void 0&&(t.delete(s),o.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qt=class extends X6{constructor(t=-1,e=1,n=1,a=-1,r=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2,r=n-t,c=n+t,s=a+e,o=a-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,c=r+l*this.view.width,s-=h*this.view.offsetY,o=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,c,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ot=4,ln=[.125,.215,.35,.446,.526,.582],$3=20,e8=new Qt,hn=new t2,n8=null,i8=0,a8=0,r8=!1,K3=(1+Math.sqrt(5))/2,It=1/K3,dn=[new R(-K3,It,0),new R(K3,It,0),new R(-It,0,K3),new R(It,0,K3),new R(0,K3,-It),new R(0,K3,It),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],K6=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){n8=this._renderer.getRenderTarget(),i8=this._renderer.getActiveCubeFace(),a8=this._renderer.getActiveMipmapLevel(),r8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(n8,i8,a8),this._renderer.xr.enabled=r8,t.scissorTest=!1,A6(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qt||t.mapping===Kt?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),n8=this._renderer.getRenderTarget(),i8=this._renderer.getActiveCubeFace(),a8=this._renderer.getActiveMipmapLevel(),r8=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:M4,minFilter:M4,generateMipmaps:!1,type:G0,format:D4,colorSpace:n0,depthBuffer:!1},a=un(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=un(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bs(r)),this._blurMaterial=Ps(r,t,e)}return a}_compileMaterial(t){let e=new u2(this._lodPlanes[0],t);this._renderer.compile(e,e8)}_sceneToCubeUV(t,e,n,a){let s=new x4(90,1,e,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(hn),h.toneMapping=E3,h.autoClear=!1;let u=new Y2({name:"PMREM.Background",side:d4,depthWrite:!1,depthTest:!1}),v=new u2(new i4,u),g=!1,m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,g=!0):(u.color.copy(hn),g=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(s.up.set(0,o[f],0),s.lookAt(l[f],0,0)):_===1?(s.up.set(0,0,o[f]),s.lookAt(0,l[f],0)):(s.up.set(0,o[f],0),s.lookAt(0,0,l[f]));let b=this._cubeSize;A6(a,_*b,f>2?b:0,b,b),h.setRenderTarget(a),g&&h.render(v,s),h.render(t,s)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,a=t.mapping===qt||t.mapping===Kt;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=fn()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pn());let r=a?this._cubemapMaterial:this._equirectMaterial,c=new u2(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;let o=this._cubeSize;A6(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(c,e8)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let a=this._lodPlanes.length;for(let r=1;r<a;r++){let c=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=dn[(a-r-1)%dn.length];this._blur(t,r-1,r,c,s)}e.autoClear=n}_blur(t,e,n,a,r){let c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,a,"latitudinal",r),this._halfBlur(c,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,c,s){let o=this._renderer,l=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new u2(this._lodPlanes[a],l),p=l.uniforms,u=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*$3-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):$3;m>$3&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$3}`);let f=[],_=0;for(let E=0;E<$3;++E){let T=E/g,w=Math.exp(-T*T/2);f.push(w),E===0?_+=w:E<m&&(_+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/_;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=c==="latitudinal",s&&(p.poleAxis.value=s);let{_lodMax:b}=this;p.dTheta.value=v,p.mipInt.value=b-n;let y=this._sizeLods[a],P=3*y*(a>b-Ot?a-b+Ot:0),A=4*(this._cubeSize-y);A6(e,P,A,3*y,2*y),o.setRenderTarget(e),o.render(d,e8)}};function Bs(i){let t=[],e=[],n=[],a=i,r=i-Ot+1+ln.length;for(let c=0;c<r;c++){let s=Math.pow(2,a);e.push(s);let o=1/s;c>i-Ot?o=ln[c-i+Ot-1]:c===0&&(o=0),n.push(o);let l=1/(s-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*u),b=new Float32Array(m*v*u),y=new Float32Array(f*v*u);for(let A=0;A<u;A++){let E=A%3*2/3-1,T=A>2?0:-1,w=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(w,g*v*A),b.set(p,m*v*A);let M=[A,A,A,A,A,A];y.set(M,f*v*A)}let P=new $2;P.setAttribute("position",new J2(_,g)),P.setAttribute("uv",new J2(b,m)),P.setAttribute("faceIndex",new J2(y,f)),t.push(P),a>Ot&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function un(i,t,e){let n=new d3(i,t,e);return n.texture.mapping=le,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function A6(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Ps(i,t,e){let n=new Float32Array($3),a=new R(0,1,0);return new K4({name:"SphericalGaussianBlur",defines:{n:$3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:G5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:L3,depthTest:!1,depthWrite:!1})}function pn(){return new K4({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:G5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:L3,depthTest:!1,depthWrite:!1})}function fn(){return new K4({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:G5(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:L3,depthTest:!1,depthWrite:!1})}function G5(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Is(i){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){let o=s.mapping,l=o===y8||o===w8,h=o===qt||o===Kt;if(l||h){let d=t.get(s),p=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==p)return e===null&&(e=new K6(i)),d=l?e.fromEquirectangular(s,d):e.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,t.set(s,d),d.texture;if(d!==void 0)return d.texture;{let u=s.image;return l&&u&&u.height>0||h&&u&&a(u)?(e===null&&(e=new K6(i)),d=l?e.fromEquirectangular(s):e.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,t.set(s,d),s.addEventListener("dispose",r),d.texture):null}}}return s}function a(s){let o=0,l=6;for(let h=0;h<l;h++)s[h]!==void 0&&o++;return o===l}function r(s){let o=s.target;o.removeEventListener("dispose",r);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function Ns(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let a=e(n);return a===null&&V0("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Ds(i,t,e,n){let a={},r=new WeakMap;function c(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let v in p.attributes)t.remove(p.attributes[v]);for(let v in p.morphAttributes){let g=p.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}p.removeEventListener("dispose",c),delete a[p.id];let u=r.get(p);u&&(t.remove(u),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function s(d,p){return a[p.id]===!0||(p.addEventListener("dispose",c),a[p.id]=!0,e.memory.geometries++),p}function o(d){let p=d.attributes;for(let v in p)t.update(p[v],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let v in u){let g=u[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function l(d){let p=[],u=d.index,v=d.attributes.position,g=0;if(u!==null){let _=u.array;g=u.version;for(let b=0,y=_.length;b<y;b+=3){let P=_[b+0],A=_[b+1],E=_[b+2];p.push(P,A,A,E,E,P)}}else if(v!==void 0){let _=v.array;g=v.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let P=b+0,A=b+1,E=b+2;p.push(P,A,A,E,E,P)}}else return;let m=new(ti(p)?Y6:Z6)(p,1);m.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let p=r.get(d);if(p){let u=d.index;u!==null&&p.version<u.version&&l(d)}else l(d);return r.get(d)}return{get:s,update:o,getWireframeAttribute:h}}function ks(i,t,e){let n;function a(p){n=p}let r,c;function s(p){r=p.type,c=p.bytesPerElement}function o(p,u){i.drawElements(n,u,r,p*c),e.update(u,n,1)}function l(p,u,v){v!==0&&(i.drawElementsInstanced(n,u,r,p*c,v),e.update(u,n,v))}function h(p,u,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,v);let m=0;for(let f=0;f<v;f++)m+=u[f];e.update(m,n,1)}function d(p,u,v,g){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/c,u[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,p,0,g,0,v);let f=0;for(let _=0;_<v;_++)f+=u[_]*g[_];e.update(f,n,1)}}this.setMode=a,this.setIndex=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Us(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,c,s){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=s*(r/3);break;case i.LINES:e.lines+=s*(r/2);break;case i.LINE_STRIP:e.lines+=s*(r-1);break;case i.LINE_LOOP:e.lines+=s*r;break;case i.POINTS:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function Os(i,t,e){let n=new WeakMap,a=new H2;function r(c,s,o){let l=c.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(s);if(p===void 0||p.count!==d){let w=function(){E.dispose(),n.delete(s),s.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();let u=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,g=s.morphAttributes.color!==void 0,m=s.morphAttributes.position||[],f=s.morphAttributes.normal||[],_=s.morphAttributes.color||[],b=0;u===!0&&(b=1),v===!0&&(b=2),g===!0&&(b=3);let y=s.attributes.position.count*b,P=1;y>t.maxTextureSize&&(P=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*P*4*d),E=new G6(A,y,P,d);E.type=s3,E.needsUpdate=!0;let T=b*4;for(let M=0;M<d;M++){let L=m[M],D=f[M],H=_[M],I=y*P*4*M;for(let K=0;K<L.count;K++){let Z=K*T;u===!0&&(a.fromBufferAttribute(L,K),A[I+Z+0]=a.x,A[I+Z+1]=a.y,A[I+Z+2]=a.z,A[I+Z+3]=0),v===!0&&(a.fromBufferAttribute(D,K),A[I+Z+4]=a.x,A[I+Z+5]=a.y,A[I+Z+6]=a.z,A[I+Z+7]=0),g===!0&&(a.fromBufferAttribute(H,K),A[I+Z+8]=a.x,A[I+Z+9]=a.y,A[I+Z+10]=a.z,A[I+Z+11]=H.itemSize===4?a.w:1)}}p={count:d,texture:E,size:new w1(y,P)},n.set(s,p),s.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let u=0;for(let g=0;g<l.length;g++)u+=l[g];let v=s.morphTargetsRelative?1:1-u;o.getUniforms().setValue(i,"morphTargetBaseInfluence",v),o.getUniforms().setValue(i,"morphTargetInfluences",l)}o.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Gs(i,t,e,n){let a=new WeakMap;function r(o){let l=n.render.frame,h=o.geometry,d=t.get(o,h);if(a.get(d)!==l&&(t.update(d),a.set(d,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),a.get(o)!==l&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),a.set(o,l))),o.isSkinnedMesh){let p=o.skeleton;a.get(p)!==l&&(p.update(),a.set(p,l))}return d}function c(){a=new WeakMap}function s(o){let l=o.target;l.removeEventListener("dispose",s),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:c}}var J6=class extends z4{constructor(t,e,n,a,r,c,s,o,l,h=Wt){if(h!==Wt&&h!==$t)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wt&&(n=tt),n===void 0&&h===$t&&(n=Jt),super(null,a,r,c,s,o,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:k4,this.minFilter=o!==void 0?o:k4,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ai=new z4,mn=new J6(1,1),ri=new G6,ci=new n5,si=new q6,vn=[],gn=[],xn=new Float32Array(16),Mn=new Float32Array(9),zn=new Float32Array(4);function i0(i,t,e){let n=i[0];if(n<=0||n>0)return i;let a=t*e,r=vn[a];if(r===void 0&&(r=new Float32Array(a),vn[a]=r),t!==0){n.toArray(r,0);for(let c=1,s=0;c!==t;++c)s+=e,i[c].toArray(r,s)}return r}function k2(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function U2(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function de(i,t){let e=gn[t];e===void 0&&(e=new Int32Array(t),gn[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ws(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zs(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(k2(e,t))return;i.uniform2fv(this.addr,t),U2(e,t)}}function Ys(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(k2(e,t))return;i.uniform3fv(this.addr,t),U2(e,t)}}function Xs(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(k2(e,t))return;i.uniform4fv(this.addr,t),U2(e,t)}}function qs(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(k2(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),U2(e,t)}else{if(k2(e,n))return;zn.set(n),i.uniformMatrix2fv(this.addr,!1,zn),U2(e,n)}}function Ks(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(k2(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),U2(e,t)}else{if(k2(e,n))return;Mn.set(n),i.uniformMatrix3fv(this.addr,!1,Mn),U2(e,n)}}function Js(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(k2(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),U2(e,t)}else{if(k2(e,n))return;xn.set(n),i.uniformMatrix4fv(this.addr,!1,xn),U2(e,n)}}function $s(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function js(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(k2(e,t))return;i.uniform2iv(this.addr,t),U2(e,t)}}function Qs(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(k2(e,t))return;i.uniform3iv(this.addr,t),U2(e,t)}}function to(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(k2(e,t))return;i.uniform4iv(this.addr,t),U2(e,t)}}function eo(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function no(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(k2(e,t))return;i.uniform2uiv(this.addr,t),U2(e,t)}}function io(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(k2(e,t))return;i.uniform3uiv(this.addr,t),U2(e,t)}}function ao(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(k2(e,t))return;i.uniform4uiv(this.addr,t),U2(e,t)}}function ro(i,t,e){let n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(mn.compareFunction=Qn,r=mn):r=ai,e.setTexture2D(t||r,a)}function co(i,t,e){let n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||ci,a)}function so(i,t,e){let n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||si,a)}function oo(i,t,e){let n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||ri,a)}function lo(i){switch(i){case 5126:return Ws;case 35664:return Zs;case 35665:return Ys;case 35666:return Xs;case 35674:return qs;case 35675:return Ks;case 35676:return Js;case 5124:case 35670:return $s;case 35667:case 35671:return js;case 35668:case 35672:return Qs;case 35669:case 35673:return to;case 5125:return eo;case 36294:return no;case 36295:return io;case 36296:return ao;case 35678:case 36198:case 36298:case 36306:case 35682:return ro;case 35679:case 36299:case 36307:return co;case 35680:case 36300:case 36308:case 36293:return so;case 36289:case 36303:case 36311:case 36292:return oo}}function ho(i,t){i.uniform1fv(this.addr,t)}function uo(i,t){let e=i0(t,this.size,2);i.uniform2fv(this.addr,e)}function po(i,t){let e=i0(t,this.size,3);i.uniform3fv(this.addr,e)}function fo(i,t){let e=i0(t,this.size,4);i.uniform4fv(this.addr,e)}function mo(i,t){let e=i0(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vo(i,t){let e=i0(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function go(i,t){let e=i0(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xo(i,t){i.uniform1iv(this.addr,t)}function Mo(i,t){i.uniform2iv(this.addr,t)}function zo(i,t){i.uniform3iv(this.addr,t)}function yo(i,t){i.uniform4iv(this.addr,t)}function wo(i,t){i.uniform1uiv(this.addr,t)}function _o(i,t){i.uniform2uiv(this.addr,t)}function bo(i,t){i.uniform3uiv(this.addr,t)}function So(i,t){i.uniform4uiv(this.addr,t)}function Co(i,t,e){let n=this.cache,a=t.length,r=de(e,a);k2(n,r)||(i.uniform1iv(this.addr,r),U2(n,r));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||ai,r[c])}function Ao(i,t,e){let n=this.cache,a=t.length,r=de(e,a);k2(n,r)||(i.uniform1iv(this.addr,r),U2(n,r));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||ci,r[c])}function Lo(i,t,e){let n=this.cache,a=t.length,r=de(e,a);k2(n,r)||(i.uniform1iv(this.addr,r),U2(n,r));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||si,r[c])}function Eo(i,t,e){let n=this.cache,a=t.length,r=de(e,a);k2(n,r)||(i.uniform1iv(this.addr,r),U2(n,r));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||ri,r[c])}function Ho(i){switch(i){case 5126:return ho;case 35664:return uo;case 35665:return po;case 35666:return fo;case 35674:return mo;case 35675:return vo;case 35676:return go;case 5124:case 35670:return xo;case 35667:case 35671:return Mo;case 35668:case 35672:return zo;case 35669:case 35673:return yo;case 5125:return wo;case 36294:return _o;case 36295:return bo;case 36296:return So;case 35678:case 36198:case 36298:case 36306:case 35682:return Co;case 35679:case 36299:case 36307:return Ao;case 35680:case 36300:case 36308:case 36293:return Lo;case 36289:case 36303:case 36311:case 36292:return Eo}}var c5=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lo(e.type)}},s5=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ho(e.type)}},o5=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let a=this.seq;for(let r=0,c=a.length;r!==c;++r){let s=a[r];s.setValue(t,e[s.id],n)}}},c8=/(\w+)(\])?(\[|\.)?/g;function yn(i,t){i.seq.push(t),i.map[t.id]=t}function To(i,t,e){let n=i.name,a=n.length;for(c8.lastIndex=0;;){let r=c8.exec(n),c=c8.lastIndex,s=r[1],o=r[2]==="]",l=r[3];if(o&&(s=s|0),l===void 0||l==="["&&c+2===a){yn(e,l===void 0?new c5(s,i,t):new s5(s,i,t));break}else{let d=e.map[s];d===void 0&&(d=new o5(s),yn(e,d)),e=d}}}var Yt=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let r=t.getActiveUniform(e,a),c=t.getUniformLocation(e,r.name);To(r,c,this)}}setValue(t,e,n,a){let r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){let a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,c=e.length;r!==c;++r){let s=e[r],o=n[s.id];o.needsUpdate!==!1&&s.setValue(t,o.value,a)}}static seqWithValue(t,e){let n=[];for(let a=0,r=t.length;a!==r;++a){let c=t[a];c.id in e&&n.push(c)}return n}};function wn(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fo=37297,Vo=0;function Ro(i,t){let e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let c=a;c<r;c++){let s=c+1;n.push(`${s===t?">":" "} ${s}: ${e[c]}`)}return n.join(`
`)}var _n=new j1;function Bo(i){d2._getMatrix(_n,d2.workingColorSpace,i);let t=`mat3( ${_n.elements.map(e=>e.toFixed(4))} )`;switch(d2.getTransfer(i)){case he:return[t,"LinearTransferOETF"];case w2:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bn(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let c=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Ro(i.getShaderSource(t),c)}else return a}function Po(i,t){let e=Bo(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Io(i,t){let e;switch(t){case s9:e="Linear";break;case o9:e="Reinhard";break;case l9:e="Cineon";break;case h9:e="ACESFilmic";break;case u9:e="AgX";break;case p9:e="Neutral";break;case d9:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var L6=new R;function No(){d2.getLuminanceCoefficients(L6);let i=L6.x.toFixed(4),t=L6.y.toFixed(4),e=L6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Do(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(R0).join(`
`)}function ko(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Uo(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){let r=i.getActiveAttrib(t,a),c=r.name,s=1;r.type===i.FLOAT_MAT2&&(s=2),r.type===i.FLOAT_MAT3&&(s=3),r.type===i.FLOAT_MAT4&&(s=4),e[c]={type:r.type,location:i.getAttribLocation(t,c),locationSize:s}}return e}function R0(i){return i!==""}function Sn(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cn(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oo=/^[ \t]*#include +<([\w\d./]+)>/gm;function l5(i){return i.replace(Oo,Wo)}var Go=new Map;function Wo(i,t){let e=Q1[t];if(e===void 0){let n=Go.get(t);if(n!==void 0)e=Q1[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return l5(e)}var Zo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function An(i){return i.replace(Zo,Yo)}function Yo(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ln(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xo(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dn?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ka?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===r3&&(t="SHADOWMAP_TYPE_VSM"),t}function qo(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qt:case Kt:t="ENVMAP_TYPE_CUBE";break;case le:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ko(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Kt&&(t="ENVMAP_MODE_REFRACTION"),t}function Jo(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kn:t="ENVMAP_BLENDING_MULTIPLY";break;case r9:t="ENVMAP_BLENDING_MIX";break;case c9:t="ENVMAP_BLENDING_ADD";break}return t}function $o(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function jo(i,t,e,n){let a=i.getContext(),r=e.defines,c=e.vertexShader,s=e.fragmentShader,o=Xo(e),l=qo(e),h=Ko(e),d=Jo(e),p=$o(e),u=Do(e),v=ko(r),g=a.createProgram(),m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(R0).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(R0).join(`
`),f.length>0&&(f+=`
`)):(m=[Ln(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(R0).join(`
`),f=[Ln(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==E3?"#define TONE_MAPPING":"",e.toneMapping!==E3?Q1.tonemapping_pars_fragment:"",e.toneMapping!==E3?Io("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Q1.colorspace_pars_fragment,Po("linearToOutputTexel",e.outputColorSpace),No(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(R0).join(`
`)),c=l5(c),c=Sn(c,e),c=Cn(c,e),s=l5(s),s=Sn(s,e),s=Cn(s,e),c=An(c),s=An(s),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===U7?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===U7?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=_+m+c,y=_+f+s,P=wn(a,a.VERTEX_SHADER,b),A=wn(a,a.FRAGMENT_SHADER,y);a.attachShader(g,P),a.attachShader(g,A),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function E(L){if(i.debug.checkShaderErrors){let D=a.getProgramInfoLog(g).trim(),H=a.getShaderInfoLog(P).trim(),I=a.getShaderInfoLog(A).trim(),K=!0,Z=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,P,A);else{let s1=bn(a,P,"vertex"),C=bn(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+s1+`
`+C)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(H===""||I==="")&&(Z=!1);Z&&(L.diagnostics={runnable:K,programLog:D,vertexShader:{log:H,prefix:m},fragmentShader:{log:I,prefix:f}})}a.deleteShader(P),a.deleteShader(A),T=new Yt(a,g),w=Uo(a,g)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(g,Fo)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vo++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=A,this}var Qo=0,h5=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new d5(t),e.set(t,n)),n}},d5=class{constructor(t){this.id=Qo++,this.code=t,this.usedTimes=0}};function tl(i,t,e,n,a,r,c){let s=new W6,o=new h5,l=new Set,h=[],d=a.logarithmicDepthBuffer,p=a.vertexTextures,u=a.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,D,H){let I=D.fog,K=H.geometry,Z=w.isMeshStandardMaterial?D.environment:null,s1=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),C=s1&&s1.mapping===le?s1.image.height:null,J=v[w.type];w.precision!==null&&(u=a.getMaxPrecision(w.precision),u!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",u,"instead."));let e1=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$=e1!==void 0?e1.length:0,i1=0;K.morphAttributes.position!==void 0&&(i1=1),K.morphAttributes.normal!==void 0&&(i1=2),K.morphAttributes.color!==void 0&&(i1=3);let C1,j,a1,d1;if(J){let v1=Y4[J];C1=v1.vertexShader,j=v1.fragmentShader}else C1=w.vertexShader,j=w.fragmentShader,o.update(w),a1=o.getVertexShaderID(w),d1=o.getFragmentShaderID(w);let h1=i.getRenderTarget(),B1=i.state.buffers.depth.getReversed(),Z1=H.isInstancedMesh===!0,U1=H.isBatchedMesh===!0,p2=!!w.map,J1=!!w.matcap,O1=!!s1,V=!!w.aoMap,V2=!!w.lightMap,I1=!!w.bumpMap,G1=!!w.normalMap,P1=!!w.displacementMap,m2=!!w.emissiveMap,R1=!!w.metalnessMap,S=!!w.roughnessMap,x=w.anisotropy>0,O=w.clearcoat>0,Q=w.dispersion>0,r1=w.iridescence>0,t1=w.sheen>0,H1=w.transmission>0,u1=x&&!!w.anisotropyMap,b1=O&&!!w.clearcoatMap,a2=O&&!!w.clearcoatNormalMap,o1=O&&!!w.clearcoatRoughnessMap,y1=r1&&!!w.iridescenceMap,N1=r1&&!!w.iridescenceThicknessMap,W1=t1&&!!w.sheenColorMap,S1=t1&&!!w.sheenRoughnessMap,e2=!!w.specularMap,q1=!!w.specularColorMap,z2=!!w.specularIntensityMap,B=H1&&!!w.transmissionMap,f1=H1&&!!w.thicknessMap,q=!!w.gradientMap,n1=!!w.alphaMap,z1=w.alphaTest>0,m1=!!w.alphaHash,D1=!!w.extensions,Y=E3;w.toneMapped&&(h1===null||h1.isXRRenderTarget===!0)&&(Y=i.toneMapping);let c1={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:C1,fragmentShader:j,defines:w.defines,customVertexShaderID:a1,customFragmentShaderID:d1,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:u,batching:U1,batchingColor:U1&&H._colorsTexture!==null,instancing:Z1,instancingColor:Z1&&H.instanceColor!==null,instancingMorph:Z1&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:h1===null?i.outputColorSpace:h1.isXRRenderTarget===!0?h1.texture.colorSpace:n0,alphaToCoverage:!!w.alphaToCoverage,map:p2,matcap:J1,envMap:O1,envMapMode:O1&&s1.mapping,envMapCubeUVHeight:C,aoMap:V,lightMap:V2,bumpMap:I1,normalMap:G1,displacementMap:p&&P1,emissiveMap:m2,normalMapObjectSpace:G1&&w.normalMapType===g9,normalMapTangentSpace:G1&&w.normalMapType===jn,metalnessMap:R1,roughnessMap:S,anisotropy:x,anisotropyMap:u1,clearcoat:O,clearcoatMap:b1,clearcoatNormalMap:a2,clearcoatRoughnessMap:o1,dispersion:Q,iridescence:r1,iridescenceMap:y1,iridescenceThicknessMap:N1,sheen:t1,sheenColorMap:W1,sheenRoughnessMap:S1,specularMap:e2,specularColorMap:q1,specularIntensityMap:z2,transmission:H1,transmissionMap:B,thicknessMap:f1,gradientMap:q,opaque:w.transparent===!1&&w.blending===Gt&&w.alphaToCoverage===!1,alphaMap:n1,alphaTest:z1,alphaHash:m1,combine:w.combine,mapUv:p2&&g(w.map.channel),aoMapUv:V&&g(w.aoMap.channel),lightMapUv:V2&&g(w.lightMap.channel),bumpMapUv:I1&&g(w.bumpMap.channel),normalMapUv:G1&&g(w.normalMap.channel),displacementMapUv:P1&&g(w.displacementMap.channel),emissiveMapUv:m2&&g(w.emissiveMap.channel),metalnessMapUv:R1&&g(w.metalnessMap.channel),roughnessMapUv:S&&g(w.roughnessMap.channel),anisotropyMapUv:u1&&g(w.anisotropyMap.channel),clearcoatMapUv:b1&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:a2&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:o1&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:y1&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:N1&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:W1&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:S1&&g(w.sheenRoughnessMap.channel),specularMapUv:e2&&g(w.specularMap.channel),specularColorMapUv:q1&&g(w.specularColorMap.channel),specularIntensityMapUv:z2&&g(w.specularIntensityMap.channel),transmissionMapUv:B&&g(w.transmissionMap.channel),thicknessMapUv:f1&&g(w.thicknessMap.channel),alphaMapUv:n1&&g(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(G1||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(p2||n1),fog:!!I,useFog:w.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:B1,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:i1,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Y,decodeVideoTexture:p2&&w.map.isVideoTexture===!0&&d2.getTransfer(w.map.colorSpace)===w2,decodeVideoTextureEmissive:m2&&w.emissiveMap.isVideoTexture===!0&&d2.getTransfer(w.emissiveMap.colorSpace)===w2,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===K2,flipSided:w.side===d4,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:D1&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(D1&&w.extensions.multiDraw===!0||U1)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return c1.vertexUv1s=l.has(1),c1.vertexUv2s=l.has(2),c1.vertexUv3s=l.has(3),l.clear(),c1}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(_(M,w),b(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),w.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reverseDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),w.push(s.mask)}function y(w){let M=v[w.type],L;if(M){let D=Y4[M];L=G9.clone(D.uniforms)}else L=w.uniforms;return L}function P(w,M){let L;for(let D=0,H=h.length;D<H;D++){let I=h[D];if(I.cacheKey===M){L=I,++L.usedTimes;break}}return L===void 0&&(L=new jo(i,M,w,r),h.push(L)),L}function A(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function E(w){o.remove(w)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:T}}function el(){let i=new WeakMap;function t(c){return i.has(c)}function e(c){let s=i.get(c);return s===void 0&&(s={},i.set(c,s)),s}function n(c){i.delete(c)}function a(c,s,o){i.get(c)[s]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:a,dispose:r}}function nl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function En(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hn(){let i=[],t=0,e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function c(d,p,u,v,g,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:u,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=u,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function s(d,p,u,v,g,m){let f=c(d,p,u,v,g,m);u.transmission>0?n.push(f):u.transparent===!0?a.push(f):e.push(f)}function o(d,p,u,v,g,m){let f=c(d,p,u,v,g,m);u.transmission>0?n.unshift(f):u.transparent===!0?a.unshift(f):e.unshift(f)}function l(d,p){e.length>1&&e.sort(d||nl),n.length>1&&n.sort(p||En),a.length>1&&a.sort(p||En)}function h(){for(let d=t,p=i.length;d<p;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:s,unshift:o,finish:h,sort:l}}function il(){let i=new WeakMap;function t(n,a){let r=i.get(n),c;return r===void 0?(c=new Hn,i.set(n,[c])):a>=r.length?(c=new Hn,r.push(c)):c=r[a],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function al(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new t2};break;case"SpotLight":e={position:new R,direction:new R,color:new t2,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new t2,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new t2,groundColor:new t2};break;case"RectAreaLight":e={color:new t2,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function rl(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w1};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w1};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w1,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var cl=0;function sl(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ol(i){let t=new al,e=rl(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let a=new R,r=new C2,c=new C2;function s(l){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let u=0,v=0,g=0,m=0,f=0,_=0,b=0,y=0,P=0,A=0,E=0;l.sort(sl);for(let w=0,M=l.length;w<M;w++){let L=l[w],D=L.color,H=L.intensity,I=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*H,d+=D.g*H,p+=D.b*H;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],H);E++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let s1=L.shadow,C=e.get(L);C.shadowIntensity=s1.intensity,C.shadowBias=s1.bias,C.shadowNormalBias=s1.normalBias,C.shadowRadius=s1.radius,C.shadowMapSize=s1.mapSize,n.directionalShadow[u]=C,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=L.shadow.matrix,_++}n.directional[u]=Z,u++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(D).multiplyScalar(H),Z.distance=I,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[g]=Z;let s1=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,s1.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[g]=s1.matrix,L.castShadow){let C=e.get(L);C.shadowIntensity=s1.intensity,C.shadowBias=s1.bias,C.shadowNormalBias=s1.normalBias,C.shadowRadius=s1.radius,C.shadowMapSize=s1.mapSize,n.spotShadow[g]=C,n.spotShadowMap[g]=K,y++}g++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(D).multiplyScalar(H),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let s1=L.shadow,C=e.get(L);C.shadowIntensity=s1.intensity,C.shadowBias=s1.bias,C.shadowNormalBias=s1.normalBias,C.shadowRadius=s1.radius,C.shadowMapSize=s1.mapSize,C.shadowCameraNear=s1.camera.near,C.shadowCameraFar=s1.camera.far,n.pointShadow[v]=C,n.pointShadowMap[v]=K,n.pointShadowMatrix[v]=L.shadow.matrix,b++}n.point[v]=Z,v++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(H),Z.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[f]=Z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=p1.LTC_FLOAT_1,n.rectAreaLTC2=p1.LTC_FLOAT_2):(n.rectAreaLTC1=p1.LTC_HALF_1,n.rectAreaLTC2=p1.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let T=n.hash;(T.directionalLength!==u||T.pointLength!==v||T.spotLength!==g||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==_||T.numPointShadows!==b||T.numSpotShadows!==y||T.numSpotMaps!==P||T.numLightProbes!==E)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,T.directionalLength=u,T.pointLength=v,T.spotLength=g,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=_,T.numPointShadows=b,T.numSpotShadows=y,T.numSpotMaps=P,T.numLightProbes=E,n.version=cl++)}function o(l,h){let d=0,p=0,u=0,v=0,g=0,m=h.matrixWorldInverse;for(let f=0,_=l.length;f<_;f++){let b=l[f];if(b.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),d++}else if(b.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),u++}else if(b.isRectAreaLight){let y=n.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),c.identity(),r.copy(b.matrixWorld),r.premultiply(m),c.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(c),y.halfHeight.applyMatrix4(c),v++}else if(b.isPointLight){let y=n.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:s,setupView:o,state:n}}function Tn(i){let t=new ol(i),e=[],n=[];function a(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function c(h){n.push(h)}function s(){t.setup(e)}function o(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:s,setupLightsView:o,pushLight:r,pushShadow:c}}function ll(i){let t=new WeakMap;function e(a,r=0){let c=t.get(a),s;return c===void 0?(s=new Tn(i),t.set(a,[s])):r>=c.length?(s=new Tn(i),c.push(s)):s=c[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}var u5=class extends V3{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=m9,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},p5=class extends V3{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},hl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ul(i,t,e){let n=new k0,a=new w1,r=new w1,c=new H2,s=new u5({depthPacking:v9}),o=new p5,l={},h=e.maxTextureSize,d={[T3]:d4,[d4]:T3,[K2]:K2},p=new K4({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new w1},radius:{value:4}},vertexShader:hl,fragmentShader:dl}),u=p.clone();u.defines.HORIZONTAL_PASS=1;let v=new $2;v.setAttribute("position",new J2(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new u2(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dn;let f=this.type;this.render=function(A,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(L3),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=f!==r3&&this.type===r3,I=f===r3&&this.type!==r3;for(let K=0,Z=A.length;K<Z;K++){let s1=A[K],C=s1.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",s1,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;a.copy(C.mapSize);let J=C.getFrameExtents();if(a.multiply(J),r.copy(C.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/J.x),a.x=r.x*J.x,C.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/J.y),a.y=r.y*J.y,C.mapSize.y=r.y)),C.map===null||H===!0||I===!0){let $=this.type!==r3?{minFilter:k4,magFilter:k4}:{};C.map!==null&&C.map.dispose(),C.map=new d3(a.x,a.y,$),C.map.texture.name=s1.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let e1=C.getViewportCount();for(let $=0;$<e1;$++){let i1=C.getViewport($);c.set(r.x*i1.x,r.y*i1.y,r.x*i1.z,r.y*i1.w),D.viewport(c),C.updateMatrices(s1,$),n=C.getFrustum(),y(E,T,C.camera,s1,this.type)}C.isPointLightShadow!==!0&&this.type===r3&&_(C,T),C.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,L)};function _(A,E){let T=t.update(g);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new d3(a.x,a.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,T,p,g,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,T,u,g,null)}function b(A,E,T,w){let M=null,L=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=T.isPointLight===!0?o:s,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let D=M.uuid,H=E.uuid,I=l[D];I===void 0&&(I={},l[D]=I);let K=I[H];K===void 0&&(K=M.clone(),I[H]=K,E.addEventListener("dispose",P)),M=K}if(M.visible=E.visible,M.wireframe=E.wireframe,w===r3?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=i.properties.get(M);D.light=T}return M}function y(A,E,T,w,M){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===r3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let H=t.update(A),I=A.material;if(Array.isArray(I)){let K=H.groups;for(let Z=0,s1=K.length;Z<s1;Z++){let C=K[Z],J=I[C.materialIndex];if(J&&J.visible){let e1=b(A,J,w,M);A.onBeforeShadow(i,A,E,T,H,e1,C),i.renderBufferDirect(T,null,H,e1,A,C),A.onAfterShadow(i,A,E,T,H,e1,C)}}}else if(I.visible){let K=b(A,I,w,M);A.onBeforeShadow(i,A,E,T,H,K,null),i.renderBufferDirect(T,null,H,K,A,null),A.onAfterShadow(i,A,E,T,H,K,null)}}let D=A.children;for(let H=0,I=D.length;H<I;H++)y(D[H],E,T,w,M)}function P(A){A.target.removeEventListener("dispose",P);for(let T in l){let w=l[T],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var pl={[f8]:m8,[v8]:M8,[g8]:z8,[Xt]:x8,[m8]:f8,[M8]:v8,[z8]:g8,[x8]:Xt};function fl(i,t){function e(){let B=!1,f1=new H2,q=null,n1=new H2(0,0,0,0);return{setMask:function(z1){q!==z1&&!B&&(i.colorMask(z1,z1,z1,z1),q=z1)},setLocked:function(z1){B=z1},setClear:function(z1,m1,D1,Y,c1){c1===!0&&(z1*=Y,m1*=Y,D1*=Y),f1.set(z1,m1,D1,Y),n1.equals(f1)===!1&&(i.clearColor(z1,m1,D1,Y),n1.copy(f1))},reset:function(){B=!1,q=null,n1.set(-1,0,0,0)}}}function n(){let B=!1,f1=!1,q=null,n1=null,z1=null;return{setReversed:function(m1){if(f1!==m1){let D1=t.get("EXT_clip_control");f1?D1.clipControlEXT(D1.LOWER_LEFT_EXT,D1.ZERO_TO_ONE_EXT):D1.clipControlEXT(D1.LOWER_LEFT_EXT,D1.NEGATIVE_ONE_TO_ONE_EXT);let Y=z1;z1=null,this.setClear(Y)}f1=m1},getReversed:function(){return f1},setTest:function(m1){m1?h1(i.DEPTH_TEST):B1(i.DEPTH_TEST)},setMask:function(m1){q!==m1&&!B&&(i.depthMask(m1),q=m1)},setFunc:function(m1){if(f1&&(m1=pl[m1]),n1!==m1){switch(m1){case f8:i.depthFunc(i.NEVER);break;case m8:i.depthFunc(i.ALWAYS);break;case v8:i.depthFunc(i.LESS);break;case Xt:i.depthFunc(i.LEQUAL);break;case g8:i.depthFunc(i.EQUAL);break;case x8:i.depthFunc(i.GEQUAL);break;case M8:i.depthFunc(i.GREATER);break;case z8:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}n1=m1}},setLocked:function(m1){B=m1},setClear:function(m1){z1!==m1&&(f1&&(m1=1-m1),i.clearDepth(m1),z1=m1)},reset:function(){B=!1,q=null,n1=null,z1=null,f1=!1}}}function a(){let B=!1,f1=null,q=null,n1=null,z1=null,m1=null,D1=null,Y=null,c1=null;return{setTest:function(v1){B||(v1?h1(i.STENCIL_TEST):B1(i.STENCIL_TEST))},setMask:function(v1){f1!==v1&&!B&&(i.stencilMask(v1),f1=v1)},setFunc:function(v1,Y1,l2){(q!==v1||n1!==Y1||z1!==l2)&&(i.stencilFunc(v1,Y1,l2),q=v1,n1=Y1,z1=l2)},setOp:function(v1,Y1,l2){(m1!==v1||D1!==Y1||Y!==l2)&&(i.stencilOp(v1,Y1,l2),m1=v1,D1=Y1,Y=l2)},setLocked:function(v1){B=v1},setClear:function(v1){c1!==v1&&(i.clearStencil(v1),c1=v1)},reset:function(){B=!1,f1=null,q=null,n1=null,z1=null,m1=null,D1=null,Y=null,c1=null}}}let r=new e,c=new n,s=new a,o=new WeakMap,l=new WeakMap,h={},d={},p=new WeakMap,u=[],v=null,g=!1,m=null,f=null,_=null,b=null,y=null,P=null,A=null,E=new t2(0,0,0),T=0,w=!1,M=null,L=null,D=null,H=null,I=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,s1=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(s1=parseFloat(/^WebGL (\d)/.exec(C)[1]),Z=s1>=1):C.indexOf("OpenGL ES")!==-1&&(s1=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),Z=s1>=2);let J=null,e1={},$=i.getParameter(i.SCISSOR_BOX),i1=i.getParameter(i.VIEWPORT),C1=new H2().fromArray($),j=new H2().fromArray(i1);function a1(B,f1,q,n1){let z1=new Uint8Array(4),m1=i.createTexture();i.bindTexture(B,m1),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let D1=0;D1<q;D1++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(f1,0,i.RGBA,1,1,n1,0,i.RGBA,i.UNSIGNED_BYTE,z1):i.texImage2D(f1+D1,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,z1);return m1}let d1={};d1[i.TEXTURE_2D]=a1(i.TEXTURE_2D,i.TEXTURE_2D,1),d1[i.TEXTURE_CUBE_MAP]=a1(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),d1[i.TEXTURE_2D_ARRAY]=a1(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),d1[i.TEXTURE_3D]=a1(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),c.setClear(1),s.setClear(0),h1(i.DEPTH_TEST),c.setFunc(Xt),I1(!1),G1(V7),h1(i.CULL_FACE),V(L3);function h1(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function B1(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Z1(B,f1){return d[B]!==f1?(i.bindFramebuffer(B,f1),d[B]=f1,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=f1),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=f1),!0):!1}function U1(B,f1){let q=u,n1=!1;if(B){q=p.get(f1),q===void 0&&(q=[],p.set(f1,q));let z1=B.textures;if(q.length!==z1.length||q[0]!==i.COLOR_ATTACHMENT0){for(let m1=0,D1=z1.length;m1<D1;m1++)q[m1]=i.COLOR_ATTACHMENT0+m1;q.length=z1.length,n1=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,n1=!0);n1&&i.drawBuffers(q)}function p2(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let J1={[J3]:i.FUNC_ADD,[Oa]:i.FUNC_SUBTRACT,[Ga]:i.FUNC_REVERSE_SUBTRACT};J1[Wa]=i.MIN,J1[Za]=i.MAX;let O1={[Ya]:i.ZERO,[Xa]:i.ONE,[qa]:i.SRC_COLOR,[u8]:i.SRC_ALPHA,[t9]:i.SRC_ALPHA_SATURATE,[ja]:i.DST_COLOR,[Ja]:i.DST_ALPHA,[Ka]:i.ONE_MINUS_SRC_COLOR,[p8]:i.ONE_MINUS_SRC_ALPHA,[Qa]:i.ONE_MINUS_DST_COLOR,[$a]:i.ONE_MINUS_DST_ALPHA,[e9]:i.CONSTANT_COLOR,[n9]:i.ONE_MINUS_CONSTANT_COLOR,[i9]:i.CONSTANT_ALPHA,[a9]:i.ONE_MINUS_CONSTANT_ALPHA};function V(B,f1,q,n1,z1,m1,D1,Y,c1,v1){if(B===L3){g===!0&&(B1(i.BLEND),g=!1);return}if(g===!1&&(h1(i.BLEND),g=!0),B!==Ua){if(B!==m||v1!==w){if((f!==J3||y!==J3)&&(i.blendEquation(i.FUNC_ADD),f=J3,y=J3),v1)switch(B){case Gt:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case R7:i.blendFunc(i.ONE,i.ONE);break;case B7:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case P7:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Gt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case R7:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case B7:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case P7:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,b=null,P=null,A=null,E.set(0,0,0),T=0,m=B,w=v1}return}z1=z1||f1,m1=m1||q,D1=D1||n1,(f1!==f||z1!==y)&&(i.blendEquationSeparate(J1[f1],J1[z1]),f=f1,y=z1),(q!==_||n1!==b||m1!==P||D1!==A)&&(i.blendFuncSeparate(O1[q],O1[n1],O1[m1],O1[D1]),_=q,b=n1,P=m1,A=D1),(Y.equals(E)===!1||c1!==T)&&(i.blendColor(Y.r,Y.g,Y.b,c1),E.copy(Y),T=c1),m=B,w=!1}function V2(B,f1){B.side===K2?B1(i.CULL_FACE):h1(i.CULL_FACE);let q=B.side===d4;f1&&(q=!q),I1(q),B.blending===Gt&&B.transparent===!1?V(L3):V(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),r.setMask(B.colorWrite);let n1=B.stencilWrite;s.setTest(n1),n1&&(s.setMask(B.stencilWriteMask),s.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),s.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),m2(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?h1(i.SAMPLE_ALPHA_TO_COVERAGE):B1(i.SAMPLE_ALPHA_TO_COVERAGE)}function I1(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function G1(B){B!==Na?(h1(i.CULL_FACE),B!==L&&(B===V7?i.cullFace(i.BACK):B===Da?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):B1(i.CULL_FACE),L=B}function P1(B){B!==D&&(Z&&i.lineWidth(B),D=B)}function m2(B,f1,q){B?(h1(i.POLYGON_OFFSET_FILL),(H!==f1||I!==q)&&(i.polygonOffset(f1,q),H=f1,I=q)):B1(i.POLYGON_OFFSET_FILL)}function R1(B){B?h1(i.SCISSOR_TEST):B1(i.SCISSOR_TEST)}function S(B){B===void 0&&(B=i.TEXTURE0+K-1),J!==B&&(i.activeTexture(B),J=B)}function x(B,f1,q){q===void 0&&(J===null?q=i.TEXTURE0+K-1:q=J);let n1=e1[q];n1===void 0&&(n1={type:void 0,texture:void 0},e1[q]=n1),(n1.type!==B||n1.texture!==f1)&&(J!==q&&(i.activeTexture(q),J=q),i.bindTexture(B,f1||d1[B]),n1.type=B,n1.texture=f1)}function O(){let B=e1[J];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function r1(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function t1(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H1(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function u1(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function b1(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function a2(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function o1(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function y1(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N1(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W1(B){C1.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),C1.copy(B))}function S1(B){j.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),j.copy(B))}function e2(B,f1){let q=l.get(f1);q===void 0&&(q=new WeakMap,l.set(f1,q));let n1=q.get(B);n1===void 0&&(n1=i.getUniformBlockIndex(f1,B.name),q.set(B,n1))}function q1(B,f1){let n1=l.get(f1).get(B);o.get(f1)!==n1&&(i.uniformBlockBinding(f1,n1,B.__bindingPointIndex),o.set(f1,n1))}function z2(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,e1={},d={},p=new WeakMap,u=[],v=null,g=!1,m=null,f=null,_=null,b=null,y=null,P=null,A=null,E=new t2(0,0,0),T=0,w=!1,M=null,L=null,D=null,H=null,I=null,C1.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),c.reset(),s.reset()}return{buffers:{color:r,depth:c,stencil:s},enable:h1,disable:B1,bindFramebuffer:Z1,drawBuffers:U1,useProgram:p2,setBlending:V,setMaterial:V2,setFlipSided:I1,setCullFace:G1,setLineWidth:P1,setPolygonOffset:m2,setScissorTest:R1,activeTexture:S,bindTexture:x,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:r1,texImage2D:y1,texImage3D:N1,updateUBOMapping:e2,uniformBlockBinding:q1,texStorage2D:a2,texStorage3D:o1,texSubImage2D:t1,texSubImage3D:H1,compressedTexSubImage2D:u1,compressedTexSubImage3D:b1,scissor:W1,viewport:S1,reset:z2}}function Fn(i,t,e,n){let a=ml(n);switch(e){case Zn:return i*t;case Xn:return i*t;case qn:return i*t*2;case Kn:return i*t/a.components*a.byteLength;case k5:return i*t/a.components*a.byteLength;case Jn:return i*t*2/a.components*a.byteLength;case U5:return i*t*2/a.components*a.byteLength;case Yn:return i*t*3/a.components*a.byteLength;case D4:return i*t*4/a.components*a.byteLength;case O5:return i*t*4/a.components*a.byteLength;case R6:case B6:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case P6:case I6:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case C8:case L8:return Math.max(i,16)*Math.max(t,8)/4;case S8:case A8:return Math.max(i,8)*Math.max(t,8)/2;case E8:case H8:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case T8:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case F8:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case V8:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case R8:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case B8:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case P8:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case I8:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case N8:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case D8:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case k8:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case U8:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case O8:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case G8:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case W8:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Z8:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case N6:case Y8:case X8:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $n:case q8:return Math.ceil(i/4)*Math.ceil(t/4)*8;case K8:case J8:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ml(i){switch(i){case h3:case On:return{byteLength:1,components:1};case N0:case Gn:case G0:return{byteLength:2,components:1};case N5:case D5:return{byteLength:2,components:4};case tt:case I5:case s3:return{byteLength:4,components:1};case Wn:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vl(i,t,e,n,a,r,c){let s=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new w1,h=new WeakMap,d,p=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return u?new OffscreenCanvas(S,x):U6("canvas")}function g(S,x,O){let Q=1,r1=R1(S);if((r1.width>O||r1.height>O)&&(Q=O/Math.max(r1.width,r1.height)),Q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let t1=Math.floor(Q*r1.width),H1=Math.floor(Q*r1.height);d===void 0&&(d=v(t1,H1));let u1=x?v(t1,H1):d;return u1.width=t1,u1.height=H1,u1.getContext("2d").drawImage(S,0,0,t1,H1),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+r1.width+"x"+r1.height+") to ("+t1+"x"+H1+")."),u1}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+r1.width+"x"+r1.height+")."),S;return S}function m(S){return S.generateMipmaps}function f(S){i.generateMipmap(S)}function _(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(S,x,O,Q,r1=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let t1=x;if(x===i.RED&&(O===i.FLOAT&&(t1=i.R32F),O===i.HALF_FLOAT&&(t1=i.R16F),O===i.UNSIGNED_BYTE&&(t1=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(t1=i.R8UI),O===i.UNSIGNED_SHORT&&(t1=i.R16UI),O===i.UNSIGNED_INT&&(t1=i.R32UI),O===i.BYTE&&(t1=i.R8I),O===i.SHORT&&(t1=i.R16I),O===i.INT&&(t1=i.R32I)),x===i.RG&&(O===i.FLOAT&&(t1=i.RG32F),O===i.HALF_FLOAT&&(t1=i.RG16F),O===i.UNSIGNED_BYTE&&(t1=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(t1=i.RG8UI),O===i.UNSIGNED_SHORT&&(t1=i.RG16UI),O===i.UNSIGNED_INT&&(t1=i.RG32UI),O===i.BYTE&&(t1=i.RG8I),O===i.SHORT&&(t1=i.RG16I),O===i.INT&&(t1=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(t1=i.RGB8UI),O===i.UNSIGNED_SHORT&&(t1=i.RGB16UI),O===i.UNSIGNED_INT&&(t1=i.RGB32UI),O===i.BYTE&&(t1=i.RGB8I),O===i.SHORT&&(t1=i.RGB16I),O===i.INT&&(t1=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(t1=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(t1=i.RGBA16UI),O===i.UNSIGNED_INT&&(t1=i.RGBA32UI),O===i.BYTE&&(t1=i.RGBA8I),O===i.SHORT&&(t1=i.RGBA16I),O===i.INT&&(t1=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(t1=i.RGB9_E5),x===i.RGBA){let H1=r1?he:d2.getTransfer(Q);O===i.FLOAT&&(t1=i.RGBA32F),O===i.HALF_FLOAT&&(t1=i.RGBA16F),O===i.UNSIGNED_BYTE&&(t1=H1===w2?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(t1=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(t1=i.RGB5_A1)}return(t1===i.R16F||t1===i.R32F||t1===i.RG16F||t1===i.RG32F||t1===i.RGBA16F||t1===i.RGBA32F)&&t.get("EXT_color_buffer_float"),t1}function y(S,x){let O;return S?x===null||x===tt||x===Jt?O=i.DEPTH24_STENCIL8:x===s3?O=i.DEPTH32F_STENCIL8:x===N0&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===tt||x===Jt?O=i.DEPTH_COMPONENT24:x===s3?O=i.DEPTH_COMPONENT32F:x===N0&&(O=i.DEPTH_COMPONENT16),O}function P(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==k4&&S.minFilter!==M4?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function A(S){let x=S.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&h.delete(x)}function E(S){let x=S.target;x.removeEventListener("dispose",E),M(x)}function T(S){let x=n.get(S);if(x.__webglInit===void 0)return;let O=S.source,Q=p.get(O);if(Q){let r1=Q[x.__cacheKey];r1.usedTimes--,r1.usedTimes===0&&w(S),Object.keys(Q).length===0&&p.delete(O)}n.remove(S)}function w(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let O=S.source,Q=p.get(O);delete Q[x.__cacheKey],c.memory.textures--}function M(S){let x=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let r1=0;r1<x.__webglFramebuffer[Q].length;r1++)i.deleteFramebuffer(x.__webglFramebuffer[Q][r1]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=S.textures;for(let Q=0,r1=O.length;Q<r1;Q++){let t1=n.get(O[Q]);t1.__webglTexture&&(i.deleteTexture(t1.__webglTexture),c.memory.textures--),n.remove(O[Q])}n.remove(S)}let L=0;function D(){L=0}function H(){let S=L;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),L+=1,S}function I(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function K(S,x){let O=n.get(S);if(S.isVideoTexture&&P1(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,S,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Z(S,x){let O=n.get(S);if(S.version>0&&O.__version!==S.version){j(O,S,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function s1(S,x){let O=n.get(S);if(S.version>0&&O.__version!==S.version){j(O,S,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function C(S,x){let O=n.get(S);if(S.version>0&&O.__version!==S.version){a1(O,S,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let J={[_8]:i.REPEAT,[j3]:i.CLAMP_TO_EDGE,[b8]:i.MIRRORED_REPEAT},e1={[k4]:i.NEAREST,[f9]:i.NEAREST_MIPMAP_NEAREST,[o6]:i.NEAREST_MIPMAP_LINEAR,[M4]:i.LINEAR,[Te]:i.LINEAR_MIPMAP_NEAREST,[Q3]:i.LINEAR_MIPMAP_LINEAR},$={[x9]:i.NEVER,[b9]:i.ALWAYS,[M9]:i.LESS,[Qn]:i.LEQUAL,[z9]:i.EQUAL,[_9]:i.GEQUAL,[y9]:i.GREATER,[w9]:i.NOTEQUAL};function i1(S,x){if(x.type===s3&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===M4||x.magFilter===Te||x.magFilter===o6||x.magFilter===Q3||x.minFilter===M4||x.minFilter===Te||x.minFilter===o6||x.minFilter===Q3)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,J[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,e1[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,e1[x.minFilter]),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,$[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===k4||x.minFilter!==o6&&x.minFilter!==Q3||x.type===s3&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function C1(S,x){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",A));let Q=x.source,r1=p.get(Q);r1===void 0&&(r1={},p.set(Q,r1));let t1=I(x);if(t1!==S.__cacheKey){r1[t1]===void 0&&(r1[t1]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,O=!0),r1[t1].usedTimes++;let H1=r1[S.__cacheKey];H1!==void 0&&(r1[S.__cacheKey].usedTimes--,H1.usedTimes===0&&w(x)),S.__cacheKey=t1,S.__webglTexture=r1[t1].texture}return O}function j(S,x,O){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let r1=C1(S,x),t1=x.source;e.bindTexture(Q,S.__webglTexture,i.TEXTURE0+O);let H1=n.get(t1);if(t1.version!==H1.__version||r1===!0){e.activeTexture(i.TEXTURE0+O);let u1=d2.getPrimaries(d2.workingColorSpace),b1=x.colorSpace===C3?null:d2.getPrimaries(x.colorSpace),a2=x.colorSpace===C3||u1===b1?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,a2);let o1=g(x.image,!1,a.maxTextureSize);o1=m2(x,o1);let y1=r.convert(x.format,x.colorSpace),N1=r.convert(x.type),W1=b(x.internalFormat,y1,N1,x.colorSpace,x.isVideoTexture);i1(Q,x);let S1,e2=x.mipmaps,q1=x.isVideoTexture!==!0,z2=H1.__version===void 0||r1===!0,B=t1.dataReady,f1=P(x,o1);if(x.isDepthTexture)W1=y(x.format===$t,x.type),z2&&(q1?e.texStorage2D(i.TEXTURE_2D,1,W1,o1.width,o1.height):e.texImage2D(i.TEXTURE_2D,0,W1,o1.width,o1.height,0,y1,N1,null));else if(x.isDataTexture)if(e2.length>0){q1&&z2&&e.texStorage2D(i.TEXTURE_2D,f1,W1,e2[0].width,e2[0].height);for(let q=0,n1=e2.length;q<n1;q++)S1=e2[q],q1?B&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,S1.width,S1.height,y1,N1,S1.data):e.texImage2D(i.TEXTURE_2D,q,W1,S1.width,S1.height,0,y1,N1,S1.data);x.generateMipmaps=!1}else q1?(z2&&e.texStorage2D(i.TEXTURE_2D,f1,W1,o1.width,o1.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,o1.width,o1.height,y1,N1,o1.data)):e.texImage2D(i.TEXTURE_2D,0,W1,o1.width,o1.height,0,y1,N1,o1.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){q1&&z2&&e.texStorage3D(i.TEXTURE_2D_ARRAY,f1,W1,e2[0].width,e2[0].height,o1.depth);for(let q=0,n1=e2.length;q<n1;q++)if(S1=e2[q],x.format!==D4)if(y1!==null)if(q1){if(B)if(x.layerUpdates.size>0){let z1=Fn(S1.width,S1.height,x.format,x.type);for(let m1 of x.layerUpdates){let D1=S1.data.subarray(m1*z1/S1.data.BYTES_PER_ELEMENT,(m1+1)*z1/S1.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,m1,S1.width,S1.height,1,y1,D1)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,S1.width,S1.height,o1.depth,y1,S1.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,W1,S1.width,S1.height,o1.depth,0,S1.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q1?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,S1.width,S1.height,o1.depth,y1,N1,S1.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,W1,S1.width,S1.height,o1.depth,0,y1,N1,S1.data)}else{q1&&z2&&e.texStorage2D(i.TEXTURE_2D,f1,W1,e2[0].width,e2[0].height);for(let q=0,n1=e2.length;q<n1;q++)S1=e2[q],x.format!==D4?y1!==null?q1?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,S1.width,S1.height,y1,S1.data):e.compressedTexImage2D(i.TEXTURE_2D,q,W1,S1.width,S1.height,0,S1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q1?B&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,S1.width,S1.height,y1,N1,S1.data):e.texImage2D(i.TEXTURE_2D,q,W1,S1.width,S1.height,0,y1,N1,S1.data)}else if(x.isDataArrayTexture)if(q1){if(z2&&e.texStorage3D(i.TEXTURE_2D_ARRAY,f1,W1,o1.width,o1.height,o1.depth),B)if(x.layerUpdates.size>0){let q=Fn(o1.width,o1.height,x.format,x.type);for(let n1 of x.layerUpdates){let z1=o1.data.subarray(n1*q/o1.data.BYTES_PER_ELEMENT,(n1+1)*q/o1.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,n1,o1.width,o1.height,1,y1,N1,z1)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,o1.width,o1.height,o1.depth,y1,N1,o1.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,W1,o1.width,o1.height,o1.depth,0,y1,N1,o1.data);else if(x.isData3DTexture)q1?(z2&&e.texStorage3D(i.TEXTURE_3D,f1,W1,o1.width,o1.height,o1.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,o1.width,o1.height,o1.depth,y1,N1,o1.data)):e.texImage3D(i.TEXTURE_3D,0,W1,o1.width,o1.height,o1.depth,0,y1,N1,o1.data);else if(x.isFramebufferTexture){if(z2)if(q1)e.texStorage2D(i.TEXTURE_2D,f1,W1,o1.width,o1.height);else{let q=o1.width,n1=o1.height;for(let z1=0;z1<f1;z1++)e.texImage2D(i.TEXTURE_2D,z1,W1,q,n1,0,y1,N1,null),q>>=1,n1>>=1}}else if(e2.length>0){if(q1&&z2){let q=R1(e2[0]);e.texStorage2D(i.TEXTURE_2D,f1,W1,q.width,q.height)}for(let q=0,n1=e2.length;q<n1;q++)S1=e2[q],q1?B&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,y1,N1,S1):e.texImage2D(i.TEXTURE_2D,q,W1,y1,N1,S1);x.generateMipmaps=!1}else if(q1){if(z2){let q=R1(o1);e.texStorage2D(i.TEXTURE_2D,f1,W1,q.width,q.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,y1,N1,o1)}else e.texImage2D(i.TEXTURE_2D,0,W1,y1,N1,o1);m(x)&&f(Q),H1.__version=t1.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function a1(S,x,O){if(x.image.length!==6)return;let Q=C1(S,x),r1=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);let t1=n.get(r1);if(r1.version!==t1.__version||Q===!0){e.activeTexture(i.TEXTURE0+O);let H1=d2.getPrimaries(d2.workingColorSpace),u1=x.colorSpace===C3?null:d2.getPrimaries(x.colorSpace),b1=x.colorSpace===C3||H1===u1?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,b1);let a2=x.isCompressedTexture||x.image[0].isCompressedTexture,o1=x.image[0]&&x.image[0].isDataTexture,y1=[];for(let n1=0;n1<6;n1++)!a2&&!o1?y1[n1]=g(x.image[n1],!0,a.maxCubemapSize):y1[n1]=o1?x.image[n1].image:x.image[n1],y1[n1]=m2(x,y1[n1]);let N1=y1[0],W1=r.convert(x.format,x.colorSpace),S1=r.convert(x.type),e2=b(x.internalFormat,W1,S1,x.colorSpace),q1=x.isVideoTexture!==!0,z2=t1.__version===void 0||Q===!0,B=r1.dataReady,f1=P(x,N1);i1(i.TEXTURE_CUBE_MAP,x);let q;if(a2){q1&&z2&&e.texStorage2D(i.TEXTURE_CUBE_MAP,f1,e2,N1.width,N1.height);for(let n1=0;n1<6;n1++){q=y1[n1].mipmaps;for(let z1=0;z1<q.length;z1++){let m1=q[z1];x.format!==D4?W1!==null?q1?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1,0,0,m1.width,m1.height,W1,m1.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1,e2,m1.width,m1.height,0,m1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q1?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1,0,0,m1.width,m1.height,W1,S1,m1.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1,e2,m1.width,m1.height,0,W1,S1,m1.data)}}}else{if(q=x.mipmaps,q1&&z2){q.length>0&&f1++;let n1=R1(y1[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,f1,e2,n1.width,n1.height)}for(let n1=0;n1<6;n1++)if(o1){q1?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,0,0,0,y1[n1].width,y1[n1].height,W1,S1,y1[n1].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,0,e2,y1[n1].width,y1[n1].height,0,W1,S1,y1[n1].data);for(let z1=0;z1<q.length;z1++){let D1=q[z1].image[n1].image;q1?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1+1,0,0,D1.width,D1.height,W1,S1,D1.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1+1,e2,D1.width,D1.height,0,W1,S1,D1.data)}}else{q1?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,0,0,0,W1,S1,y1[n1]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,0,e2,W1,S1,y1[n1]);for(let z1=0;z1<q.length;z1++){let m1=q[z1];q1?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1+1,0,0,W1,S1,m1.image[n1]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+n1,z1+1,e2,W1,S1,m1.image[n1])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),t1.__version=r1.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function d1(S,x,O,Q,r1,t1){let H1=r.convert(O.format,O.colorSpace),u1=r.convert(O.type),b1=b(O.internalFormat,H1,u1,O.colorSpace),a2=n.get(x),o1=n.get(O);if(o1.__renderTarget=x,!a2.__hasExternalTextures){let y1=Math.max(1,x.width>>t1),N1=Math.max(1,x.height>>t1);r1===i.TEXTURE_3D||r1===i.TEXTURE_2D_ARRAY?e.texImage3D(r1,t1,b1,y1,N1,x.depth,0,H1,u1,null):e.texImage2D(r1,t1,b1,y1,N1,0,H1,u1,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),G1(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,r1,o1.__webglTexture,0,I1(x)):(r1===i.TEXTURE_2D||r1>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&r1<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,r1,o1.__webglTexture,t1),e.bindFramebuffer(i.FRAMEBUFFER,null)}function h1(S,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer){let Q=x.depthTexture,r1=Q&&Q.isDepthTexture?Q.type:null,t1=y(x.stencilBuffer,r1),H1=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,u1=I1(x);G1(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,u1,t1,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,u1,t1,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,t1,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,H1,i.RENDERBUFFER,S)}else{let Q=x.textures;for(let r1=0;r1<Q.length;r1++){let t1=Q[r1],H1=r.convert(t1.format,t1.colorSpace),u1=r.convert(t1.type),b1=b(t1.internalFormat,H1,u1,t1.colorSpace),a2=I1(x);O&&G1(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,a2,b1,x.width,x.height):G1(x)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,a2,b1,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,b1,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B1(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let r1=Q.__webglTexture,t1=I1(x);if(x.depthTexture.format===Wt)G1(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,r1,0,t1):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,r1,0);else if(x.depthTexture.format===$t)G1(x)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,r1,0,t1):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,r1,0);else throw new Error("Unknown depthTexture format")}function Z1(S){let x=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){let Q=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let r1=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",r1)};Q.addEventListener("dispose",r1),x.__depthDisposeCallback=r1}x.__boundDepthTexture=Q}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");B1(x.__webglFramebuffer,S)}else if(O){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),h1(x.__webglDepthbuffer[Q],S,!1);else{let r1=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,t1=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,t1),i.framebufferRenderbuffer(i.FRAMEBUFFER,r1,i.RENDERBUFFER,t1)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),h1(x.__webglDepthbuffer,S,!1);else{let Q=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,r1=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,r1),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,r1)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function U1(S,x,O){let Q=n.get(S);x!==void 0&&d1(Q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Z1(S)}function p2(S){let x=S.texture,O=n.get(S),Q=n.get(x);S.addEventListener("dispose",E);let r1=S.textures,t1=S.isWebGLCubeRenderTarget===!0,H1=r1.length>1;if(H1||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,c.memory.textures++),t1){O.__webglFramebuffer=[];for(let u1=0;u1<6;u1++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[u1]=[];for(let b1=0;b1<x.mipmaps.length;b1++)O.__webglFramebuffer[u1][b1]=i.createFramebuffer()}else O.__webglFramebuffer[u1]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let u1=0;u1<x.mipmaps.length;u1++)O.__webglFramebuffer[u1]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(H1)for(let u1=0,b1=r1.length;u1<b1;u1++){let a2=n.get(r1[u1]);a2.__webglTexture===void 0&&(a2.__webglTexture=i.createTexture(),c.memory.textures++)}if(S.samples>0&&G1(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let u1=0;u1<r1.length;u1++){let b1=r1[u1];O.__webglColorRenderbuffer[u1]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[u1]);let a2=r.convert(b1.format,b1.colorSpace),o1=r.convert(b1.type),y1=b(b1.internalFormat,a2,o1,b1.colorSpace,S.isXRRenderTarget===!0),N1=I1(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,N1,y1,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+u1,i.RENDERBUFFER,O.__webglColorRenderbuffer[u1])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),h1(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(t1){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),i1(i.TEXTURE_CUBE_MAP,x);for(let u1=0;u1<6;u1++)if(x.mipmaps&&x.mipmaps.length>0)for(let b1=0;b1<x.mipmaps.length;b1++)d1(O.__webglFramebuffer[u1][b1],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+u1,b1);else d1(O.__webglFramebuffer[u1],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+u1,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(H1){for(let u1=0,b1=r1.length;u1<b1;u1++){let a2=r1[u1],o1=n.get(a2);e.bindTexture(i.TEXTURE_2D,o1.__webglTexture),i1(i.TEXTURE_2D,a2),d1(O.__webglFramebuffer,S,a2,i.COLOR_ATTACHMENT0+u1,i.TEXTURE_2D,0),m(a2)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let u1=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(u1=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(u1,Q.__webglTexture),i1(u1,x),x.mipmaps&&x.mipmaps.length>0)for(let b1=0;b1<x.mipmaps.length;b1++)d1(O.__webglFramebuffer[b1],S,x,i.COLOR_ATTACHMENT0,u1,b1);else d1(O.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,u1,0);m(x)&&f(u1),e.unbindTexture()}S.depthBuffer&&Z1(S)}function J1(S){let x=S.textures;for(let O=0,Q=x.length;O<Q;O++){let r1=x[O];if(m(r1)){let t1=_(S),H1=n.get(r1).__webglTexture;e.bindTexture(t1,H1),f(t1),e.unbindTexture()}}}let O1=[],V=[];function V2(S){if(S.samples>0){if(G1(S)===!1){let x=S.textures,O=S.width,Q=S.height,r1=i.COLOR_BUFFER_BIT,t1=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H1=n.get(S),u1=x.length>1;if(u1)for(let b1=0;b1<x.length;b1++)e.bindFramebuffer(i.FRAMEBUFFER,H1.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b1,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,H1.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+b1,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,H1.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,H1.__webglFramebuffer);for(let b1=0;b1<x.length;b1++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(r1|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(r1|=i.STENCIL_BUFFER_BIT)),u1){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,H1.__webglColorRenderbuffer[b1]);let a2=n.get(x[b1]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,a2,0)}i.blitFramebuffer(0,0,O,Q,0,0,O,Q,r1,i.NEAREST),o===!0&&(O1.length=0,V.length=0,O1.push(i.COLOR_ATTACHMENT0+b1),S.depthBuffer&&S.resolveDepthBuffer===!1&&(O1.push(t1),V.push(t1),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O1))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),u1)for(let b1=0;b1<x.length;b1++){e.bindFramebuffer(i.FRAMEBUFFER,H1.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+b1,i.RENDERBUFFER,H1.__webglColorRenderbuffer[b1]);let a2=n.get(x[b1]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,H1.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+b1,i.TEXTURE_2D,a2,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,H1.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&o){let x=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function I1(S){return Math.min(a.maxSamples,S.samples)}function G1(S){let x=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P1(S){let x=c.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function m2(S,x){let O=S.colorSpace,Q=S.format,r1=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==n0&&O!==C3&&(d2.getTransfer(O)===w2?(Q!==D4||r1!==h3)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function R1(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=s1,this.setTextureCube=C,this.rebindTextures=U1,this.setupRenderTarget=p2,this.updateRenderTargetMipmap=J1,this.updateMultisampleRenderTarget=V2,this.setupDepthRenderbuffer=Z1,this.setupFrameBufferTexture=d1,this.useMultisampledRTT=G1}function gl(i,t){function e(n,a=C3){let r,c=d2.getTransfer(a);if(n===h3)return i.UNSIGNED_BYTE;if(n===N5)return i.UNSIGNED_SHORT_4_4_4_4;if(n===D5)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wn)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===On)return i.BYTE;if(n===Gn)return i.SHORT;if(n===N0)return i.UNSIGNED_SHORT;if(n===I5)return i.INT;if(n===tt)return i.UNSIGNED_INT;if(n===s3)return i.FLOAT;if(n===G0)return i.HALF_FLOAT;if(n===Zn)return i.ALPHA;if(n===Yn)return i.RGB;if(n===D4)return i.RGBA;if(n===Xn)return i.LUMINANCE;if(n===qn)return i.LUMINANCE_ALPHA;if(n===Wt)return i.DEPTH_COMPONENT;if(n===$t)return i.DEPTH_STENCIL;if(n===Kn)return i.RED;if(n===k5)return i.RED_INTEGER;if(n===Jn)return i.RG;if(n===U5)return i.RG_INTEGER;if(n===O5)return i.RGBA_INTEGER;if(n===R6||n===B6||n===P6||n===I6)if(c===w2)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===R6)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===B6)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===P6)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===I6)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===R6)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===B6)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===P6)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===I6)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===S8||n===C8||n===A8||n===L8)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===S8)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===C8)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===A8)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===L8)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===E8||n===H8||n===T8)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===E8||n===H8)return c===w2?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===T8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===F8||n===V8||n===R8||n===B8||n===P8||n===I8||n===N8||n===D8||n===k8||n===U8||n===O8||n===G8||n===W8||n===Z8)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===F8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===V8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===R8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===B8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===P8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===I8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===N8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===D8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===k8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===U8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===O8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===G8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===W8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Z8)return c===w2?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===N6||n===Y8||n===X8)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===N6)return c===w2?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Y8)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===X8)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$n||n===q8||n===K8||n===J8)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===N6)return r.COMPRESSED_RED_RGTC1_EXT;if(n===q8)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===K8)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===J8)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jt?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f5=class extends x4{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},h4=class extends n4{constructor(){super(),this.isGroup=!0,this.type="Group"}},xl={type:"move"},B0=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new h4,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new h4,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new h4,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,c=null,s=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){c=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),u=.02,v=.005;l.inputState.pinching&&p>u+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=u-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(xl)))}return s!==null&&(s.visible=a!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new h4;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ml=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,m5=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let a=new z4,r=t.properties.get(a);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new K4({vertexShader:Ml,fragmentShader:zl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new u2(new R3(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},v5=class extends F3{constructor(t,e){super();let n=this,a=null,r=1,c=null,s="local-floor",o=1,l=null,h=null,d=null,p=null,u=null,v=null,g=new m5,m=e.getContextAttributes(),f=null,_=null,b=[],y=[],P=new w1,A=null,E=new x4;E.viewport=new H2;let T=new x4;T.viewport=new H2;let w=[E,T],M=new f5,L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let a1=b[j];return a1===void 0&&(a1=new B0,b[j]=a1),a1.getTargetRaySpace()},this.getControllerGrip=function(j){let a1=b[j];return a1===void 0&&(a1=new B0,b[j]=a1),a1.getGripSpace()},this.getHand=function(j){let a1=b[j];return a1===void 0&&(a1=new B0,b[j]=a1),a1.getHandSpace()};function H(j){let a1=y.indexOf(j.inputSource);if(a1===-1)return;let d1=b[a1];d1!==void 0&&(d1.update(j.inputSource,j.frame,l||c),d1.dispatchEvent({type:j.type,data:j.inputSource}))}function I(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",I),a.removeEventListener("inputsourceschange",K);for(let j=0;j<b.length;j++){let a1=y[j];a1!==null&&(y[j]=null,b[j].disconnect(a1))}L=null,D=null,g.reset(),t.setRenderTarget(f),u=null,p=null,d=null,a=null,_=null,C1.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||c},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(f=t.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",I),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),a.renderState.layers===void 0){let a1={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(a,e,a1),a.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new d3(u.framebufferWidth,u.framebufferHeight,{format:D4,type:h3,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let a1=null,d1=null,h1=null;m.depth&&(h1=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,a1=m.stencil?$t:Wt,d1=m.stencil?Jt:tt);let B1={colorFormat:e.RGBA8,depthFormat:h1,scaleFactor:r};d=new XRWebGLBinding(a,e),p=d.createProjectionLayer(B1),a.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new d3(p.textureWidth,p.textureHeight,{format:D4,type:h3,depthTexture:new J6(p.textureWidth,p.textureHeight,d1,void 0,void 0,void 0,void 0,void 0,void 0,a1),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),l=null,c=await a.requestReferenceSpace(s),C1.setContext(a),C1.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(j){for(let a1=0;a1<j.removed.length;a1++){let d1=j.removed[a1],h1=y.indexOf(d1);h1>=0&&(y[h1]=null,b[h1].disconnect(d1))}for(let a1=0;a1<j.added.length;a1++){let d1=j.added[a1],h1=y.indexOf(d1);if(h1===-1){for(let Z1=0;Z1<b.length;Z1++)if(Z1>=y.length){y.push(d1),h1=Z1;break}else if(y[Z1]===null){y[Z1]=d1,h1=Z1;break}if(h1===-1)break}let B1=b[h1];B1&&B1.connect(d1)}}let Z=new R,s1=new R;function C(j,a1,d1){Z.setFromMatrixPosition(a1.matrixWorld),s1.setFromMatrixPosition(d1.matrixWorld);let h1=Z.distanceTo(s1),B1=a1.projectionMatrix.elements,Z1=d1.projectionMatrix.elements,U1=B1[14]/(B1[10]-1),p2=B1[14]/(B1[10]+1),J1=(B1[9]+1)/B1[5],O1=(B1[9]-1)/B1[5],V=(B1[8]-1)/B1[0],V2=(Z1[8]+1)/Z1[0],I1=U1*V,G1=U1*V2,P1=h1/(-V+V2),m2=P1*-V;if(a1.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(m2),j.translateZ(P1),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),B1[10]===-1)j.projectionMatrix.copy(a1.projectionMatrix),j.projectionMatrixInverse.copy(a1.projectionMatrixInverse);else{let R1=U1+P1,S=p2+P1,x=I1-m2,O=G1+(h1-m2),Q=J1*p2/S*R1,r1=O1*p2/S*R1;j.projectionMatrix.makePerspective(x,O,Q,r1,R1,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,a1){a1===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(a1.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let a1=j.near,d1=j.far;g.texture!==null&&(g.depthNear>0&&(a1=g.depthNear),g.depthFar>0&&(d1=g.depthFar)),M.near=T.near=E.near=a1,M.far=T.far=E.far=d1,(L!==M.near||D!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,D=M.far),E.layers.mask=j.layers.mask|2,T.layers.mask=j.layers.mask|4,M.layers.mask=E.layers.mask|T.layers.mask;let h1=j.parent,B1=M.cameras;J(M,h1);for(let Z1=0;Z1<B1.length;Z1++)J(B1[Z1],h1);B1.length===2?C(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),e1(j,M,h1)};function e1(j,a1,d1){d1===null?j.matrix.copy(a1.matrixWorld):(j.matrix.copy(d1.matrixWorld),j.matrix.invert(),j.matrix.multiply(a1.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(a1.projectionMatrix),j.projectionMatrixInverse.copy(a1.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Q8*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&u===null))return o},this.setFoveation=function(j){o=j,p!==null&&(p.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let $=null;function i1(j,a1){if(h=a1.getViewerPose(l||c),v=a1,h!==null){let d1=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let h1=!1;d1.length!==M.cameras.length&&(M.cameras.length=0,h1=!0);for(let Z1=0;Z1<d1.length;Z1++){let U1=d1[Z1],p2=null;if(u!==null)p2=u.getViewport(U1);else{let O1=d.getViewSubImage(p,U1);p2=O1.viewport,Z1===0&&(t.setRenderTargetTextures(_,O1.colorTexture,p.ignoreDepthValues?void 0:O1.depthStencilTexture),t.setRenderTarget(_))}let J1=w[Z1];J1===void 0&&(J1=new x4,J1.layers.enable(Z1),J1.viewport=new H2,w[Z1]=J1),J1.matrix.fromArray(U1.transform.matrix),J1.matrix.decompose(J1.position,J1.quaternion,J1.scale),J1.projectionMatrix.fromArray(U1.projectionMatrix),J1.projectionMatrixInverse.copy(J1.projectionMatrix).invert(),J1.viewport.set(p2.x,p2.y,p2.width,p2.height),Z1===0&&(M.matrix.copy(J1.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),h1===!0&&M.cameras.push(J1)}let B1=a.enabledFeatures;if(B1&&B1.includes("depth-sensing")){let Z1=d.getDepthInformation(d1[0]);Z1&&Z1.isValid&&Z1.texture&&g.init(t,Z1,a.renderState)}}for(let d1=0;d1<b.length;d1++){let h1=y[d1],B1=b[d1];h1!==null&&B1!==void 0&&B1.update(h1,a1,l||c)}$&&$(j,a1),a1.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:a1}),v=null}let C1=new ii;C1.setAnimationLoop(i1),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}},q3=new C4,yl=new C2;function wl(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ni(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,_,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&u(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(c(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?o(m,f,_,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===d4&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===d4&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=t.get(f),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,q3.copy(y),q3.x*=-1,q3.y*=-1,q3.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(q3.y*=-1,q3.z*=-1),m.envMapRotation.value.setFromMatrix4(yl.makeRotationFromEuler(q3)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,_,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===d4&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function _l(i,t,e,n){let a={},r={},c=[],s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,b){let y=b.program;n.uniformBlockBinding(_,y)}function l(_,b){let y=a[_.id];y===void 0&&(v(_),y=h(_),a[_.id]=y,_.addEventListener("dispose",m));let P=b.program;n.updateUBOMapping(_,P);let A=t.render.frame;r[_.id]!==A&&(p(_),r[_.id]=A)}function h(_){let b=d();_.__bindingPointIndex=b;let y=i.createBuffer(),P=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function d(){for(let _=0;_<s;_++)if(c.indexOf(_)===-1)return c.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let b=a[_.id],y=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,E=y.length;A<E;A++){let T=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,M=T.length;w<M;w++){let L=T[w];if(u(L,A,w,P)===!0){let D=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],I=0;for(let K=0;K<H.length;K++){let Z=H[K],s1=g(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,D+I,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,I),I+=s1.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(_,b,y,P){let A=_.value,E=b+"_"+y;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{let T=P[E];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return P[E]=A,!0}else if(T.equals(A)===!1)return T.copy(A),!0}return!1}function v(_){let b=_.uniforms,y=0,P=16;for(let E=0,T=b.length;E<T;E++){let w=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,L=w.length;M<L;M++){let D=w[M],H=Array.isArray(D.value)?D.value:[D.value];for(let I=0,K=H.length;I<K;I++){let Z=H[I],s1=g(Z),C=y%P,J=C%s1.boundary,e1=C+J;y+=J,e1!==0&&P-e1<s1.storage&&(y+=P-e1),D.__data=new Float32Array(s1.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=s1.storage}}}let A=y%P;return A>0&&(y+=P-A),_.__size=y,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let y=c.indexOf(b.__bindingPointIndex);c.splice(y,1),i.deleteBuffer(a[b.id]),delete a[b.id],delete r[b.id]}function f(){for(let _ in a)i.deleteBuffer(a[_]);c=[],a={},r={}}return{bind:o,update:l,dispose:f}}var $6=class{constructor(t={}){let{canvas:e=C9(),context:n=null,depth:a=!0,stencil:r=!1,alpha:c=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=c;let v=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,_=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=D2,this.toneMapping=E3,this.toneMappingExposure=1;let y=this,P=!1,A=0,E=0,T=null,w=-1,M=null,L=new H2,D=new H2,H=null,I=new t2(0),K=0,Z=e.width,s1=e.height,C=1,J=null,e1=null,$=new H2(0,0,Z,s1),i1=new H2(0,0,Z,s1),C1=!1,j=new k0,a1=!1,d1=!1,h1=new C2,B1=new C2,Z1=new R,U1=new H2,p2={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J1=!1;function O1(){return T===null?C:1}let V=n;function V2(z,F){return e.getContext(z,F)}try{let z={alpha:!0,depth:a,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",n1,!1),e.addEventListener("webglcontextrestored",z1,!1),e.addEventListener("webglcontextcreationerror",m1,!1),V===null){let F="webgl2";if(V=V2(F,z),V===null)throw V2(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let I1,G1,P1,m2,R1,S,x,O,Q,r1,t1,H1,u1,b1,a2,o1,y1,N1,W1,S1,e2,q1,z2,B;function f1(){I1=new Ns(V),I1.init(),q1=new gl(V,I1),G1=new Fs(V,I1,t,q1),P1=new fl(V,I1),G1.reverseDepthBuffer&&p&&P1.buffers.depth.setReversed(!0),m2=new Us(V),R1=new el,S=new vl(V,I1,P1,R1,G1,q1,m2),x=new Rs(y),O=new Is(y),Q=new q9(V),z2=new Hs(V,Q),r1=new Ds(V,Q,m2,z2),t1=new Gs(V,r1,Q,m2),W1=new Os(V,G1,S),o1=new Vs(R1),H1=new tl(y,x,O,I1,G1,z2,o1),u1=new wl(y,R1),b1=new il,a2=new ll(I1),N1=new Es(y,x,O,P1,t1,u,o),y1=new ul(y,t1,G1),B=new _l(V,m2,G1,P1),S1=new Ts(V,I1,m2),e2=new ks(V,I1,m2),m2.programs=H1.programs,y.capabilities=G1,y.extensions=I1,y.properties=R1,y.renderLists=b1,y.shadowMap=y1,y.state=P1,y.info=m2}f1();let q=new v5(y,V);this.xr=q,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let z=I1.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){let z=I1.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(z){z!==void 0&&(C=z,this.setSize(Z,s1,!1))},this.getSize=function(z){return z.set(Z,s1)},this.setSize=function(z,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=z,s1=F,e.width=Math.floor(z*C),e.height=Math.floor(F*C),G===!0&&(e.style.width=z+"px",e.style.height=F+"px"),this.setViewport(0,0,z,F)},this.getDrawingBufferSize=function(z){return z.set(Z*C,s1*C).floor()},this.setDrawingBufferSize=function(z,F,G){Z=z,s1=F,C=G,e.width=Math.floor(z*G),e.height=Math.floor(F*G),this.setViewport(0,0,z,F)},this.getCurrentViewport=function(z){return z.copy(L)},this.getViewport=function(z){return z.copy($)},this.setViewport=function(z,F,G,W){z.isVector4?$.set(z.x,z.y,z.z,z.w):$.set(z,F,G,W),P1.viewport(L.copy($).multiplyScalar(C).round())},this.getScissor=function(z){return z.copy(i1)},this.setScissor=function(z,F,G,W){z.isVector4?i1.set(z.x,z.y,z.z,z.w):i1.set(z,F,G,W),P1.scissor(D.copy(i1).multiplyScalar(C).round())},this.getScissorTest=function(){return C1},this.setScissorTest=function(z){P1.setScissorTest(C1=z)},this.setOpaqueSort=function(z){J=z},this.setTransparentSort=function(z){e1=z},this.getClearColor=function(z){return z.copy(N1.getClearColor())},this.setClearColor=function(){N1.setClearColor.apply(N1,arguments)},this.getClearAlpha=function(){return N1.getClearAlpha()},this.setClearAlpha=function(){N1.setClearAlpha.apply(N1,arguments)},this.clear=function(z=!0,F=!0,G=!0){let W=0;if(z){let N=!1;if(T!==null){let l1=T.texture.format;N=l1===O5||l1===U5||l1===k5}if(N){let l1=T.texture.type,x1=l1===h3||l1===tt||l1===N0||l1===Jt||l1===N5||l1===D5,L1=N1.getClearColor(),A1=N1.getClearAlpha(),g1=L1.r,k1=L1.g,M1=L1.b;x1?(v[0]=g1,v[1]=k1,v[2]=M1,v[3]=A1,V.clearBufferuiv(V.COLOR,0,v)):(g[0]=g1,g[1]=k1,g[2]=M1,g[3]=A1,V.clearBufferiv(V.COLOR,0,g))}else W|=V.COLOR_BUFFER_BIT}F&&(W|=V.DEPTH_BUFFER_BIT),G&&(W|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",n1,!1),e.removeEventListener("webglcontextrestored",z1,!1),e.removeEventListener("webglcontextcreationerror",m1,!1),b1.dispose(),a2.dispose(),R1.dispose(),x.dispose(),O.dispose(),t1.dispose(),z2.dispose(),B.dispose(),H1.dispose(),q.dispose(),q.removeEventListener("sessionstart",F2),q.removeEventListener("sessionend",E4),p4.stop()};function n1(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function z1(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let z=m2.autoReset,F=y1.enabled,G=y1.autoUpdate,W=y1.needsUpdate,N=y1.type;f1(),m2.autoReset=z,y1.enabled=F,y1.autoUpdate=G,y1.needsUpdate=W,y1.type=N}function m1(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function D1(z){let F=z.target;F.removeEventListener("dispose",D1),Y(F)}function Y(z){c1(z),R1.remove(z)}function c1(z){let F=R1.get(z).programs;F!==void 0&&(F.forEach(function(G){H1.releaseProgram(G)}),z.isShaderMaterial&&H1.releaseShaderCache(z))}this.renderBufferDirect=function(z,F,G,W,N,l1){F===null&&(F=p2);let x1=N.isMesh&&N.matrixWorld.determinant()<0,L1=s4(z,F,G,W,N);P1.setMaterial(W,x1);let A1=G.index,g1=1;if(W.wireframe===!0){if(A1=r1.getWireframeAttribute(G),A1===void 0)return;g1=2}let k1=G.drawRange,M1=G.attributes.position,$1=k1.start*g1,f2=(k1.start+k1.count)*g1;l1!==null&&($1=Math.max($1,l1.start*g1),f2=Math.min(f2,(l1.start+l1.count)*g1)),A1!==null?($1=Math.max($1,0),f2=Math.min(f2,A1.count)):M1!=null&&($1=Math.max($1,0),f2=Math.min(f2,M1.count));let v2=f2-$1;if(v2<0||v2===1/0)return;z2.setup(N,W,L1,G,A1);let G2,i2=S1;if(A1!==null&&(G2=Q.get(A1),i2=e2,i2.setIndex(G2)),N.isMesh)W.wireframe===!0?(P1.setLineWidth(W.wireframeLinewidth*O1()),i2.setMode(V.LINES)):i2.setMode(V.TRIANGLES);else if(N.isLine){let E1=W.linewidth;E1===void 0&&(E1=1),P1.setLineWidth(E1*O1()),N.isLineSegments?i2.setMode(V.LINES):N.isLineLoop?i2.setMode(V.LINE_LOOP):i2.setMode(V.LINE_STRIP)}else N.isPoints?i2.setMode(V.POINTS):N.isSprite&&i2.setMode(V.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)i2.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(I1.get("WEBGL_multi_draw"))i2.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let E1=N._multiDrawStarts,j4=N._multiDrawCounts,g2=N._multiDrawCount,H4=A1?Q.get(A1).bytesPerElement:1,dt=R1.get(W).currentProgram.getUniforms();for(let f4=0;f4<g2;f4++)dt.setValue(V,"_gl_DrawID",f4),i2.render(E1[f4]/H4,j4[f4])}else if(N.isInstancedMesh)i2.renderInstances($1,v2,N.count);else if(G.isInstancedBufferGeometry){let E1=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,j4=Math.min(G.instanceCount,E1);i2.renderInstances($1,v2,j4)}else i2.render($1,v2)};function v1(z,F,G){z.transparent===!0&&z.side===K2&&z.forceSinglePass===!1?(z.side=d4,z.needsUpdate=!0,h2(z,F,G),z.side=T3,z.needsUpdate=!0,h2(z,F,G),z.side=K2):h2(z,F,G)}this.compile=function(z,F,G=null){G===null&&(G=z),f=a2.get(G),f.init(F),b.push(f),G.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),z!==G&&z.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();let W=new Set;return z.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let l1=N.material;if(l1)if(Array.isArray(l1))for(let x1=0;x1<l1.length;x1++){let L1=l1[x1];v1(L1,G,N),W.add(L1)}else v1(l1,G,N),W.add(l1)}),b.pop(),f=null,W},this.compileAsync=function(z,F,G=null){let W=this.compile(z,F,G);return new Promise(N=>{function l1(){if(W.forEach(function(x1){R1.get(x1).currentProgram.isReady()&&W.delete(x1)}),W.size===0){N(z);return}setTimeout(l1,10)}I1.get("KHR_parallel_shader_compile")!==null?l1():setTimeout(l1,10)})};let Y1=null;function l2(z){Y1&&Y1(z)}function F2(){p4.stop()}function E4(){p4.start()}let p4=new ii;p4.setAnimationLoop(l2),typeof self<"u"&&p4.setContext(self),this.setAnimationLoop=function(z){Y1=z,q.setAnimationLoop(z),z===null?p4.stop():p4.start()},q.addEventListener("sessionstart",F2),q.addEventListener("sessionend",E4),this.render=function(z,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),z.isScene===!0&&z.onBeforeRender(y,z,F,T),f=a2.get(z,b.length),f.init(F),b.push(f),B1.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(B1),d1=this.localClippingEnabled,a1=o1.init(this.clippingPlanes,d1),m=b1.get(z,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let l1=y.xr.getDepthSensingMesh();l1!==null&&K1(l1,F,-1/0,y.sortObjects)}K1(z,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,e1),J1=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,J1&&N1.addToRenderList(m,z),this.info.render.frame++,a1===!0&&o1.beginShadows();let G=f.state.shadowsArray;y1.render(G,z,F),a1===!0&&o1.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(f.setupLights(),F.isArrayCamera){let l1=F.cameras;if(N.length>0)for(let x1=0,L1=l1.length;x1<L1;x1++){let A1=l1[x1];s2(W,N,z,A1)}J1&&N1.render(z);for(let x1=0,L1=l1.length;x1<L1;x1++){let A1=l1[x1];r4(m,z,A1,A1.viewport)}}else N.length>0&&s2(W,N,z,F),J1&&N1.render(z),r4(m,z,F);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),z.isScene===!0&&z.onAfterRender(y,z,F),z2.resetDefaultState(),w=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],a1===!0&&o1.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function K1(z,F,G,W){if(z.visible===!1)return;if(z.layers.test(F.layers)){if(z.isGroup)G=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(F);else if(z.isLight)f.pushLight(z),z.castShadow&&f.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||j.intersectsSprite(z)){W&&U1.setFromMatrixPosition(z.matrixWorld).applyMatrix4(B1);let x1=t1.update(z),L1=z.material;L1.visible&&m.push(z,x1,L1,G,U1.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||j.intersectsObject(z))){let x1=t1.update(z),L1=z.material;if(W&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),U1.copy(z.boundingSphere.center)):(x1.boundingSphere===null&&x1.computeBoundingSphere(),U1.copy(x1.boundingSphere.center)),U1.applyMatrix4(z.matrixWorld).applyMatrix4(B1)),Array.isArray(L1)){let A1=x1.groups;for(let g1=0,k1=A1.length;g1<k1;g1++){let M1=A1[g1],$1=L1[M1.materialIndex];$1&&$1.visible&&m.push(z,x1,$1,G,U1.z,M1)}}else L1.visible&&m.push(z,x1,L1,G,U1.z,null)}}let l1=z.children;for(let x1=0,L1=l1.length;x1<L1;x1++)K1(l1[x1],F,G,W)}function r4(z,F,G,W){let N=z.opaque,l1=z.transmissive,x1=z.transparent;f.setupLightsView(G),a1===!0&&o1.setGlobalState(y.clippingPlanes,G),W&&P1.viewport(L.copy(W)),N.length>0&&c4(N,F,G),l1.length>0&&c4(l1,F,G),x1.length>0&&c4(x1,F,G),P1.buffers.depth.setTest(!0),P1.buffers.depth.setMask(!0),P1.buffers.color.setMask(!0),P1.setPolygonOffset(!1)}function s2(z,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new d3(1,1,{generateMipmaps:!0,type:I1.has("EXT_color_buffer_half_float")||I1.has("EXT_color_buffer_float")?G0:h3,minFilter:Q3,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:d2.workingColorSpace}));let l1=f.state.transmissionRenderTarget[W.id],x1=W.viewport||L;l1.setSize(x1.z,x1.w);let L1=y.getRenderTarget();y.setRenderTarget(l1),y.getClearColor(I),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),J1&&N1.render(G);let A1=y.toneMapping;y.toneMapping=E3;let g1=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),a1===!0&&o1.setGlobalState(y.clippingPlanes,W),c4(z,G,W),S.updateMultisampleRenderTarget(l1),S.updateRenderTargetMipmap(l1),I1.has("WEBGL_multisampled_render_to_texture")===!1){let k1=!1;for(let M1=0,$1=F.length;M1<$1;M1++){let f2=F[M1],v2=f2.object,G2=f2.geometry,i2=f2.material,E1=f2.group;if(i2.side===K2&&v2.layers.test(W.layers)){let j4=i2.side;i2.side=d4,i2.needsUpdate=!0,O4(v2,G,W,G2,i2,E1),i2.side=j4,i2.needsUpdate=!0,k1=!0}}k1===!0&&(S.updateMultisampleRenderTarget(l1),S.updateRenderTargetMipmap(l1))}y.setRenderTarget(L1),y.setClearColor(I,K),g1!==void 0&&(W.viewport=g1),y.toneMapping=A1}function c4(z,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let N=0,l1=z.length;N<l1;N++){let x1=z[N],L1=x1.object,A1=x1.geometry,g1=W===null?x1.material:W,k1=x1.group;L1.layers.test(G.layers)&&O4(L1,F,G,A1,g1,k1)}}function O4(z,F,G,W,N,l1){z.onBeforeRender(y,F,G,W,N,l1),z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),N.onBeforeRender(y,F,G,W,z,l1),N.transparent===!0&&N.side===K2&&N.forceSinglePass===!1?(N.side=d4,N.needsUpdate=!0,y.renderBufferDirect(G,F,W,N,z,l1),N.side=T3,N.needsUpdate=!0,y.renderBufferDirect(G,F,W,N,z,l1),N.side=K2):y.renderBufferDirect(G,F,W,N,z,l1),z.onAfterRender(y,F,G,W,N,l1)}function h2(z,F,G){F.isScene!==!0&&(F=p2);let W=R1.get(z),N=f.state.lights,l1=f.state.shadowsArray,x1=N.state.version,L1=H1.getParameters(z,N.state,l1,F,G),A1=H1.getProgramCacheKey(L1),g1=W.programs;W.environment=z.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(z.isMeshStandardMaterial?O:x).get(z.envMap||W.environment),W.envMapRotation=W.environment!==null&&z.envMap===null?F.environmentRotation:z.envMapRotation,g1===void 0&&(z.addEventListener("dispose",D1),g1=new Map,W.programs=g1);let k1=g1.get(A1);if(k1!==void 0){if(W.currentProgram===k1&&W.lightsStateVersion===x1)return I2(z,L1),k1}else L1.uniforms=H1.getUniforms(z),z.onBeforeCompile(L1,y),k1=H1.acquireProgram(L1,A1),g1.set(A1,k1),W.uniforms=L1.uniforms;let M1=W.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(M1.clippingPlanes=o1.uniform),I2(z,L1),W.needsLights=ht(z),W.lightsStateVersion=x1,W.needsLights&&(M1.ambientLightColor.value=N.state.ambient,M1.lightProbe.value=N.state.probe,M1.directionalLights.value=N.state.directional,M1.directionalLightShadows.value=N.state.directionalShadow,M1.spotLights.value=N.state.spot,M1.spotLightShadows.value=N.state.spotShadow,M1.rectAreaLights.value=N.state.rectArea,M1.ltc_1.value=N.state.rectAreaLTC1,M1.ltc_2.value=N.state.rectAreaLTC2,M1.pointLights.value=N.state.point,M1.pointLightShadows.value=N.state.pointShadow,M1.hemisphereLights.value=N.state.hemi,M1.directionalShadowMap.value=N.state.directionalShadowMap,M1.directionalShadowMatrix.value=N.state.directionalShadowMatrix,M1.spotShadowMap.value=N.state.spotShadowMap,M1.spotLightMatrix.value=N.state.spotLightMatrix,M1.spotLightMap.value=N.state.spotLightMap,M1.pointShadowMap.value=N.state.pointShadowMap,M1.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=k1,W.uniformsList=null,k1}function Q2(z){if(z.uniformsList===null){let F=z.currentProgram.getUniforms();z.uniformsList=Yt.seqWithValue(F.seq,z.uniforms)}return z.uniformsList}function I2(z,F){let G=R1.get(z);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function s4(z,F,G,W,N){F.isScene!==!0&&(F=p2),S.resetTextureUnits();let l1=F.fog,x1=W.isMeshStandardMaterial?F.environment:null,L1=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:n0,A1=(W.isMeshStandardMaterial?O:x).get(W.envMap||x1),g1=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,k1=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),M1=!!G.morphAttributes.position,$1=!!G.morphAttributes.normal,f2=!!G.morphAttributes.color,v2=E3;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(v2=y.toneMapping);let G2=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,i2=G2!==void 0?G2.length:0,E1=R1.get(W),j4=f.state.lights;if(a1===!0&&(d1===!0||z!==M)){let y4=z===M&&W.id===w;o1.setState(W,z,y4)}let g2=!1;W.version===E1.__version?(E1.needsLights&&E1.lightsStateVersion!==j4.state.version||E1.outputColorSpace!==L1||N.isBatchedMesh&&E1.batching===!1||!N.isBatchedMesh&&E1.batching===!0||N.isBatchedMesh&&E1.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&E1.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&E1.instancing===!1||!N.isInstancedMesh&&E1.instancing===!0||N.isSkinnedMesh&&E1.skinning===!1||!N.isSkinnedMesh&&E1.skinning===!0||N.isInstancedMesh&&E1.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&E1.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&E1.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&E1.instancingMorph===!1&&N.morphTexture!==null||E1.envMap!==A1||W.fog===!0&&E1.fog!==l1||E1.numClippingPlanes!==void 0&&(E1.numClippingPlanes!==o1.numPlanes||E1.numIntersection!==o1.numIntersection)||E1.vertexAlphas!==g1||E1.vertexTangents!==k1||E1.morphTargets!==M1||E1.morphNormals!==$1||E1.morphColors!==f2||E1.toneMapping!==v2||E1.morphTargetsCount!==i2)&&(g2=!0):(g2=!0,E1.__version=W.version);let H4=E1.currentProgram;g2===!0&&(H4=h2(W,F,N));let dt=!1,f4=!1,p0=!1,b2=H4.getUniforms(),G4=E1.uniforms;if(P1.useProgram(H4.program)&&(dt=!0,f4=!0,p0=!0),W.id!==w&&(w=W.id,f4=!0),dt||M!==z){P1.buffers.depth.getReversed()?(h1.copy(z.projectionMatrix),L9(h1),E9(h1),b2.setValue(V,"projectionMatrix",h1)):b2.setValue(V,"projectionMatrix",z.projectionMatrix),b2.setValue(V,"viewMatrix",z.matrixWorldInverse);let v3=b2.map.cameraPosition;v3!==void 0&&v3.setValue(V,Z1.setFromMatrixPosition(z.matrixWorld)),G1.logarithmicDepthBuffer&&b2.setValue(V,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&b2.setValue(V,"isOrthographic",z.isOrthographicCamera===!0),M!==z&&(M=z,f4=!0,p0=!0)}if(N.isSkinnedMesh){b2.setOptional(V,N,"bindMatrix"),b2.setOptional(V,N,"bindMatrixInverse");let y4=N.skeleton;y4&&(y4.boneTexture===null&&y4.computeBoneTexture(),b2.setValue(V,"boneTexture",y4.boneTexture,S))}N.isBatchedMesh&&(b2.setOptional(V,N,"batchingTexture"),b2.setValue(V,"batchingTexture",N._matricesTexture,S),b2.setOptional(V,N,"batchingIdTexture"),b2.setValue(V,"batchingIdTexture",N._indirectTexture,S),b2.setOptional(V,N,"batchingColorTexture"),N._colorsTexture!==null&&b2.setValue(V,"batchingColorTexture",N._colorsTexture,S));let f0=G.morphAttributes;if((f0.position!==void 0||f0.normal!==void 0||f0.color!==void 0)&&W1.update(N,G,H4),(f4||E1.receiveShadow!==N.receiveShadow)&&(E1.receiveShadow=N.receiveShadow,b2.setValue(V,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(G4.envMap.value=A1,G4.flipEnvMap.value=A1.isCubeTexture&&A1.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(G4.envMapIntensity.value=F.environmentIntensity),f4&&(b2.setValue(V,"toneMappingExposure",y.toneMappingExposure),E1.needsLights&&u0(G4,p0),l1&&W.fog===!0&&u1.refreshFogUniforms(G4,l1),u1.refreshMaterialUniforms(G4,W,C,s1,f.state.transmissionRenderTarget[z.id]),Yt.upload(V,Q2(E1),G4,S)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Yt.upload(V,Q2(E1),G4,S),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&b2.setValue(V,"center",N.center),b2.setValue(V,"modelViewMatrix",N.modelViewMatrix),b2.setValue(V,"normalMatrix",N.normalMatrix),b2.setValue(V,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let y4=W.uniformsGroups;for(let v3=0,g3=y4.length;v3<g3;v3++){let a7=y4[v3];B.update(a7,H4),B.bind(a7,H4)}}return H4}function u0(z,F){z.ambientLightColor.needsUpdate=F,z.lightProbe.needsUpdate=F,z.directionalLights.needsUpdate=F,z.directionalLightShadows.needsUpdate=F,z.pointLights.needsUpdate=F,z.pointLightShadows.needsUpdate=F,z.spotLights.needsUpdate=F,z.spotLightShadows.needsUpdate=F,z.rectAreaLights.needsUpdate=F,z.hemisphereLights.needsUpdate=F}function ht(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(z,F,G){R1.get(z.texture).__webglTexture=F,R1.get(z.depthTexture).__webglTexture=G;let W=R1.get(z);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||I1.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,F){let G=R1.get(z);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(z,F=0,G=0){T=z,A=F,E=G;let W=!0,N=null,l1=!1,x1=!1;if(z){let A1=R1.get(z);if(A1.__useDefaultFramebuffer!==void 0)P1.bindFramebuffer(V.FRAMEBUFFER,null),W=!1;else if(A1.__webglFramebuffer===void 0)S.setupRenderTarget(z);else if(A1.__hasExternalTextures)S.rebindTextures(z,R1.get(z.texture).__webglTexture,R1.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let M1=z.depthTexture;if(A1.__boundDepthTexture!==M1){if(M1!==null&&R1.has(M1)&&(z.width!==M1.image.width||z.height!==M1.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(z)}}let g1=z.texture;(g1.isData3DTexture||g1.isDataArrayTexture||g1.isCompressedArrayTexture)&&(x1=!0);let k1=R1.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(k1[F])?N=k1[F][G]:N=k1[F],l1=!0):z.samples>0&&S.useMultisampledRTT(z)===!1?N=R1.get(z).__webglMultisampledFramebuffer:Array.isArray(k1)?N=k1[G]:N=k1,L.copy(z.viewport),D.copy(z.scissor),H=z.scissorTest}else L.copy($).multiplyScalar(C).floor(),D.copy(i1).multiplyScalar(C).floor(),H=C1;if(P1.bindFramebuffer(V.FRAMEBUFFER,N)&&W&&P1.drawBuffers(z,N),P1.viewport(L),P1.scissor(D),P1.setScissorTest(H),l1){let A1=R1.get(z.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,A1.__webglTexture,G)}else if(x1){let A1=R1.get(z.texture),g1=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,A1.__webglTexture,G||0,g1)}w=-1},this.readRenderTargetPixels=function(z,F,G,W,N,l1,x1){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L1=R1.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&x1!==void 0&&(L1=L1[x1]),L1){P1.bindFramebuffer(V.FRAMEBUFFER,L1);try{let A1=z.texture,g1=A1.format,k1=A1.type;if(!G1.textureFormatReadable(g1)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G1.textureTypeReadable(k1)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=z.width-W&&G>=0&&G<=z.height-N&&V.readPixels(F,G,W,N,q1.convert(g1),q1.convert(k1),l1)}finally{let A1=T!==null?R1.get(T).__webglFramebuffer:null;P1.bindFramebuffer(V.FRAMEBUFFER,A1)}}},this.readRenderTargetPixelsAsync=async function(z,F,G,W,N,l1,x1){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L1=R1.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&x1!==void 0&&(L1=L1[x1]),L1){let A1=z.texture,g1=A1.format,k1=A1.type;if(!G1.textureFormatReadable(g1))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G1.textureTypeReadable(k1))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=z.width-W&&G>=0&&G<=z.height-N){P1.bindFramebuffer(V.FRAMEBUFFER,L1);let M1=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,M1),V.bufferData(V.PIXEL_PACK_BUFFER,l1.byteLength,V.STREAM_READ),V.readPixels(F,G,W,N,q1.convert(g1),q1.convert(k1),0);let $1=T!==null?R1.get(T).__webglFramebuffer:null;P1.bindFramebuffer(V.FRAMEBUFFER,$1);let f2=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await A9(V,f2,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,M1),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,l1),V.deleteBuffer(M1),V.deleteSync(f2),l1}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,F=null,G=0){z.isTexture!==!0&&(V0("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,z=arguments[1]);let W=Math.pow(2,-G),N=Math.floor(z.image.width*W),l1=Math.floor(z.image.height*W),x1=F!==null?F.x:0,L1=F!==null?F.y:0;S.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,G,0,0,x1,L1,N,l1),P1.unbindTexture()},this.copyTextureToTexture=function(z,F,G=null,W=null,N=0){z.isTexture!==!0&&(V0("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,z=arguments[1],F=arguments[2],N=arguments[3]||0,G=null);let l1,x1,L1,A1,g1,k1,M1,$1,f2,v2=z.isCompressedTexture?z.mipmaps[N]:z.image;G!==null?(l1=G.max.x-G.min.x,x1=G.max.y-G.min.y,L1=G.isBox3?G.max.z-G.min.z:1,A1=G.min.x,g1=G.min.y,k1=G.isBox3?G.min.z:0):(l1=v2.width,x1=v2.height,L1=v2.depth||1,A1=0,g1=0,k1=0),W!==null?(M1=W.x,$1=W.y,f2=W.z):(M1=0,$1=0,f2=0);let G2=q1.convert(F.format),i2=q1.convert(F.type),E1;F.isData3DTexture?(S.setTexture3D(F,0),E1=V.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),E1=V.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),E1=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,F.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,F.unpackAlignment);let j4=V.getParameter(V.UNPACK_ROW_LENGTH),g2=V.getParameter(V.UNPACK_IMAGE_HEIGHT),H4=V.getParameter(V.UNPACK_SKIP_PIXELS),dt=V.getParameter(V.UNPACK_SKIP_ROWS),f4=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,v2.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,v2.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,A1),V.pixelStorei(V.UNPACK_SKIP_ROWS,g1),V.pixelStorei(V.UNPACK_SKIP_IMAGES,k1);let p0=z.isDataArrayTexture||z.isData3DTexture,b2=F.isDataArrayTexture||F.isData3DTexture;if(z.isRenderTargetTexture||z.isDepthTexture){let G4=R1.get(z),f0=R1.get(F),y4=R1.get(G4.__renderTarget),v3=R1.get(f0.__renderTarget);P1.bindFramebuffer(V.READ_FRAMEBUFFER,y4.__webglFramebuffer),P1.bindFramebuffer(V.DRAW_FRAMEBUFFER,v3.__webglFramebuffer);for(let g3=0;g3<L1;g3++)p0&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,R1.get(z).__webglTexture,N,k1+g3),z.isDepthTexture?(b2&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,R1.get(F).__webglTexture,N,f2+g3),V.blitFramebuffer(A1,g1,l1,x1,M1,$1,l1,x1,V.DEPTH_BUFFER_BIT,V.NEAREST)):b2?V.copyTexSubImage3D(E1,N,M1,$1,f2+g3,A1,g1,l1,x1):V.copyTexSubImage2D(E1,N,M1,$1,f2+g3,A1,g1,l1,x1);P1.bindFramebuffer(V.READ_FRAMEBUFFER,null),P1.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else b2?z.isDataTexture||z.isData3DTexture?V.texSubImage3D(E1,N,M1,$1,f2,l1,x1,L1,G2,i2,v2.data):F.isCompressedArrayTexture?V.compressedTexSubImage3D(E1,N,M1,$1,f2,l1,x1,L1,G2,v2.data):V.texSubImage3D(E1,N,M1,$1,f2,l1,x1,L1,G2,i2,v2):z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,N,M1,$1,l1,x1,G2,i2,v2.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,N,M1,$1,v2.width,v2.height,G2,v2.data):V.texSubImage2D(V.TEXTURE_2D,N,M1,$1,l1,x1,G2,i2,v2);V.pixelStorei(V.UNPACK_ROW_LENGTH,j4),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,g2),V.pixelStorei(V.UNPACK_SKIP_PIXELS,H4),V.pixelStorei(V.UNPACK_SKIP_ROWS,dt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,f4),N===0&&F.generateMipmaps&&V.generateMipmap(E1),P1.unbindTexture()},this.copyTextureToTexture3D=function(z,F,G=null,W=null,N=0){return z.isTexture!==!0&&(V0("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,z=arguments[2],F=arguments[3],N=arguments[4]||0),V0('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,F,G,W,N)},this.initRenderTarget=function(z){R1.get(z).__webglFramebuffer===void 0&&S.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?S.setTextureCube(z,0):z.isData3DTexture?S.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?S.setTexture2DArray(z,0):S.setTexture2D(z,0),P1.unbindTexture()},this.resetState=function(){A=0,E=0,T=null,P1.reset(),z2.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return o3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=d2._getDrawingBufferColorSpace(t),e.unpackColorSpace=d2._getUnpackColorSpace()}};var j6=class extends n4{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new C4,this.environmentIntensity=1,this.environmentRotation=new C4,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Q6=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=j8,this.updateRanges=[],this.version=0,this.uuid=H3()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let a=0,r=this.stride;a<r;a++)this.array[t+a]=e.array[n+a];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H3()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H3()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},o4=new R,U0=class i{constructor(t,e,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)o4.fromBufferAttribute(this,e),o4.applyMatrix4(t),this.setXYZ(e,o4.x,o4.y,o4.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)o4.fromBufferAttribute(this,e),o4.applyNormalMatrix(t),this.setXYZ(e,o4.x,o4.y,o4.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)o4.fromBufferAttribute(this,e),o4.transformDirection(t),this.setXYZ(e,o4.x,o4.y,o4.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=X4(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_2(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_2(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_2(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_2(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_2(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=X4(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=X4(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=X4(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=X4(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_2(e,this.array),n=_2(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=_2(e,this.array),n=_2(n,this.array),a=_2(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_2(e,this.array),n=_2(n,this.array),a=_2(a,this.array),r=_2(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=a,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[a+r])}return new J2(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nt=class extends V3{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new t2(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nt,H0=new R,Dt=new R,kt=new R,Ut=new w1,T0=new w1,oi=new C2,E6=new R,F0=new R,H6=new R,Vn=new w1,s8=new w1,Rn=new w1,t0=class extends n4{constructor(t=new nt){if(super(),this.isSprite=!0,this.type="Sprite",Nt===void 0){Nt=new $2;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Q6(e,5);Nt.setIndex([0,1,2,0,2,3]),Nt.setAttribute("position",new U0(n,3,0,!1)),Nt.setAttribute("uv",new U0(n,2,3,!1))}this.geometry=Nt,this.material=t,this.center=new w1(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dt.setFromMatrixScale(this.matrixWorld),oi.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),kt.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dt.multiplyScalar(-kt.z);let n=this.material.rotation,a,r;n!==0&&(r=Math.cos(n),a=Math.sin(n));let c=this.center;T6(E6.set(-.5,-.5,0),kt,c,Dt,a,r),T6(F0.set(.5,-.5,0),kt,c,Dt,a,r),T6(H6.set(.5,.5,0),kt,c,Dt,a,r),Vn.set(0,0),s8.set(1,0),Rn.set(1,1);let s=t.ray.intersectTriangle(E6,F0,H6,!1,H0);if(s===null&&(T6(F0.set(-.5,.5,0),kt,c,Dt,a,r),s8.set(0,1),s=t.ray.intersectTriangle(E6,H6,F0,!1,H0),s===null))return;let o=t.ray.origin.distanceTo(H0);o<t.near||o>t.far||e.push({distance:o,point:H0.clone(),uv:A3.getInterpolation(H0,E6,F0,H6,Vn,s8,Rn,new w1),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function T6(i,t,e,n,a,r){Ut.subVectors(i,e).addScalar(.5).multiply(n),a!==void 0?(T0.x=r*Ut.x-a*Ut.y,T0.y=a*Ut.x+r*Ut.y):T0.copy(Ut),i.copy(t),i.x+=T0.x,i.y+=T0.y,i.applyMatrix4(oi)}var u3=class extends z4{constructor(t,e,n,a,r,c,s,o,l){super(t,e,n,a,r,c,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},A4=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,a=this.getPoint(0),r=0;e.push(0);for(let c=1;c<=t;c++)n=this.getPoint(c/t),r+=n.distanceTo(a),e.push(r),a=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),a=0,r=n.length,c;e?c=e:c=t*n[r-1];let s=0,o=r-1,l;for(;s<=o;)if(a=Math.floor(s+(o-s)/2),l=n[a]-c,l<0)s=a+1;else if(l>0)o=a-1;else{o=a;break}if(a=o,n[a]===c)return a/(r-1);let h=n[a],p=n[a+1]-h,u=(c-h)/p;return(a+u)/(r-1)}getTangent(t,e){let a=t-1e-4,r=t+1e-4;a<0&&(a=0),r>1&&(r=1);let c=this.getPoint(a),s=this.getPoint(r),o=e||(c.isVector2?new w1:new R);return o.copy(s).sub(c).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,a=[],r=[],c=[],s=new R,o=new C2;for(let u=0;u<=t;u++){let v=u/t;a[u]=this.getTangentAt(v,new R)}r[0]=new R,c[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(a[0].x),d=Math.abs(a[0].y),p=Math.abs(a[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),s.crossVectors(a[0],n).normalize(),r[0].crossVectors(a[0],s),c[0].crossVectors(a[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),c[u]=c[u-1].clone(),s.crossVectors(a[u-1],a[u]),s.length()>Number.EPSILON){s.normalize();let v=Math.acos(q2(a[u-1].dot(a[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(s,v))}c[u].crossVectors(a[u],r[u])}if(e===!0){let u=Math.acos(q2(r[0].dot(r[t]),-1,1));u/=t,a[0].dot(s.crossVectors(r[0],r[t]))>0&&(u=-u);for(let v=1;v<=t;v++)r[v].applyMatrix4(o.makeRotationAxis(a[v],u*v)),c[v].crossVectors(a[v],r[v])}return{tangents:a,normals:r,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},O0=class extends A4{constructor(t=0,e=0,n=1,a=1,r=0,c=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=a,this.aStartAngle=r,this.aEndAngle=c,this.aClockwise=s,this.aRotation=o}getPoint(t,e=new w1){let n=e,a=Math.PI*2,r=this.aEndAngle-this.aStartAngle,c=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=a;for(;r>a;)r-=a;r<Number.EPSILON&&(c?r=0:r=a),this.aClockwise===!0&&!c&&(r===a?r=-a:r=r-a);let s=this.aStartAngle+t*r,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=o-this.aX,u=l-this.aY;o=p*h-u*d+this.aX,l=p*d+u*h+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},g5=class extends O0{constructor(t,e,n,a,r,c){super(t,e,n,n,a,r,c),this.isArcCurve=!0,this.type="ArcCurve"}};function W5(){let i=0,t=0,e=0,n=0;function a(r,c,s,o){i=r,t=s,e=-3*r+3*c-2*s-o,n=2*r-2*c+s+o}return{initCatmullRom:function(r,c,s,o,l){a(c,s,l*(s-r),l*(o-c))},initNonuniformCatmullRom:function(r,c,s,o,l,h,d){let p=(c-r)/l-(s-r)/(l+h)+(s-c)/h,u=(s-c)/h-(o-c)/(h+d)+(o-s)/d;p*=h,u*=h,a(c,s,p,u)},calc:function(r){let c=r*r,s=c*r;return i+t*r+e*c+n*s}}}var F6=new R,o8=new W5,l8=new W5,h8=new W5,x5=class extends A4{constructor(t=[],e=!1,n="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=a}getPoint(t,e=new R){let n=e,a=this.points,r=a.length,c=(r-(this.closed?0:1))*t,s=Math.floor(c),o=c-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/r)+1)*r:o===0&&s===r-1&&(s=r-2,o=1);let l,h;this.closed||s>0?l=a[(s-1)%r]:(F6.subVectors(a[0],a[1]).add(a[0]),l=F6);let d=a[s%r],p=a[(s+1)%r];if(this.closed||s+2<r?h=a[(s+2)%r]:(F6.subVectors(a[r-1],a[r-2]).add(a[r-1]),h=F6),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,v=Math.pow(l.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(p),u),m=Math.pow(p.distanceToSquared(h),u);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),o8.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,v,g,m),l8.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,v,g,m),h8.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(o8.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),l8.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),h8.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(o8.calc(o),l8.calc(o),h8.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let a=t.points[e];this.points.push(a.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let a=this.points[e];t.points.push(a.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let a=t.points[e];this.points.push(new R().fromArray(a))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bn(i,t,e,n,a){let r=(n-t)*.5,c=(a-e)*.5,s=i*i,o=i*s;return(2*e-2*n+r+c)*o+(-3*e+3*n-2*r-c)*s+r*i+e}function bl(i,t){let e=1-i;return e*e*t}function Sl(i,t){return 2*(1-i)*i*t}function Cl(i,t){return i*i*t}function P0(i,t,e,n){return bl(i,t)+Sl(i,e)+Cl(i,n)}function Al(i,t){let e=1-i;return e*e*e*t}function Ll(i,t){let e=1-i;return 3*e*e*i*t}function El(i,t){return 3*(1-i)*i*i*t}function Hl(i,t){return i*i*i*t}function I0(i,t,e,n,a){return Al(i,t)+Ll(i,e)+El(i,n)+Hl(i,a)}var te=class extends A4{constructor(t=new w1,e=new w1,n=new w1,a=new w1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=a}getPoint(t,e=new w1){let n=e,a=this.v0,r=this.v1,c=this.v2,s=this.v3;return n.set(I0(t,a.x,r.x,c.x,s.x),I0(t,a.y,r.y,c.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},M5=class extends A4{constructor(t=new R,e=new R,n=new R,a=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=a}getPoint(t,e=new R){let n=e,a=this.v0,r=this.v1,c=this.v2,s=this.v3;return n.set(I0(t,a.x,r.x,c.x,s.x),I0(t,a.y,r.y,c.y,s.y),I0(t,a.z,r.z,c.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ee=class extends A4{constructor(t=new w1,e=new w1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new w1){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w1){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},z5=class extends A4{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ne=class extends A4{constructor(t=new w1,e=new w1,n=new w1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w1){let n=e,a=this.v0,r=this.v1,c=this.v2;return n.set(P0(t,a.x,r.x,c.x),P0(t,a.y,r.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},y5=class extends A4{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,a=this.v0,r=this.v1,c=this.v2;return n.set(P0(t,a.x,r.x,c.x),P0(t,a.y,r.y,c.y),P0(t,a.z,r.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ie=class extends A4{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new w1){let n=e,a=this.points,r=(a.length-1)*t,c=Math.floor(r),s=r-c,o=a[c===0?c:c-1],l=a[c],h=a[c>a.length-2?a.length-1:c+1],d=a[c>a.length-3?a.length-1:c+2];return n.set(Bn(s,o.x,l.x,h.x,d.x),Bn(s,o.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let a=t.points[e];this.points.push(a.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let a=this.points[e];t.points.push(a.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let a=t.points[e];this.points.push(new w1().fromArray(a))}return this}},Pn=Object.freeze({__proto__:null,ArcCurve:g5,CatmullRomCurve3:x5,CubicBezierCurve:te,CubicBezierCurve3:M5,EllipseCurve:O0,LineCurve:ee,LineCurve3:z5,QuadraticBezierCurve:ne,QuadraticBezierCurve3:y5,SplineCurve:ie}),w5=class extends A4{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pn[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),a=this.getCurveLengths(),r=0;for(;r<a.length;){if(a[r]>=n){let c=a[r]-n,s=this.curves[r],o=s.getLength(),l=o===0?0:1-c/o;return s.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,a=this.curves.length;n<a;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let a=0,r=this.curves;a<r.length;a++){let c=r[a],s=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,o=c.getPoints(s);for(let l=0;l<o.length;l++){let h=o[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let a=t.curves[e];this.curves.push(a.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let a=this.curves[e];t.curves.push(a.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let a=t.curves[e];this.curves.push(new Pn[a.type]().fromJSON(a))}return this}},_5=class extends w5{constructor(t){super(),this.type="Path",this.currentPoint=new w1,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ee(this.currentPoint.clone(),new w1(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,a){let r=new ne(this.currentPoint.clone(),new w1(t,e),new w1(n,a));return this.curves.push(r),this.currentPoint.set(n,a),this}bezierCurveTo(t,e,n,a,r,c){let s=new te(this.currentPoint.clone(),new w1(t,e),new w1(n,a),new w1(r,c));return this.curves.push(s),this.currentPoint.set(r,c),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ie(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,a,r,c){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+s,e+o,n,a,r,c),this}absarc(t,e,n,a,r,c){return this.absellipse(t,e,n,n,a,r,c),this}ellipse(t,e,n,a,r,c,s,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,a,r,c,s,o),this}absellipse(t,e,n,a,r,c,s,o){let l=new O0(t,e,n,a,r,c,s,o);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},b5=class i extends $2{constructor(t=[new w1(0,-.5),new w1(.5,0),new w1(0,.5)],e=12,n=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:a},e=Math.floor(e),a=q2(a,0,Math.PI*2);let r=[],c=[],s=[],o=[],l=[],h=1/e,d=new R,p=new w1,u=new R,v=new R,g=new R,m=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,u.x=f*1,u.y=-m,u.z=f*0,g.copy(u),u.normalize(),o.push(u.x,u.y,u.z);break;case t.length-1:o.push(g.x,g.y,g.z);break;default:m=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,u.x=f*1,u.y=-m,u.z=f*0,v.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),o.push(u.x,u.y,u.z),g.copy(v)}for(let _=0;_<=e;_++){let b=n+_*h*a,y=Math.sin(b),P=Math.cos(b);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*y,d.y=t[A].y,d.z=t[A].x*P,c.push(d.x,d.y,d.z),p.x=_/e,p.y=A/(t.length-1),s.push(p.x,p.y);let E=o[3*A+0]*y,T=o[3*A+1],w=o[3*A+0]*P;l.push(E,T,w)}}for(let _=0;_<e;_++)for(let b=0;b<t.length-1;b++){let y=b+_*t.length,P=y,A=y+t.length,E=y+t.length+1,T=y+1;r.push(P,A,T),r.push(E,T,A)}this.setIndex(r),this.setAttribute("position",new A2(c,3)),this.setAttribute("uv",new A2(s,2)),this.setAttribute("normal",new A2(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ae=class i extends b5{constructor(t=1,e=1,n=4,a=8){let r=new _5;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),a),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:a}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var c2=class i extends $2{constructor(t=1,e=1,n=1,a=32,r=1,c=!1,s=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:a,heightSegments:r,openEnded:c,thetaStart:s,thetaLength:o};let l=this;a=Math.floor(a),r=Math.floor(r);let h=[],d=[],p=[],u=[],v=0,g=[],m=n/2,f=0;_(),c===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new A2(d,3)),this.setAttribute("normal",new A2(p,3)),this.setAttribute("uv",new A2(u,2));function _(){let y=new R,P=new R,A=0,E=(e-t)/n;for(let T=0;T<=r;T++){let w=[],M=T/r,L=M*(e-t)+t;for(let D=0;D<=a;D++){let H=D/a,I=H*o+s,K=Math.sin(I),Z=Math.cos(I);P.x=L*K,P.y=-M*n+m,P.z=L*Z,d.push(P.x,P.y,P.z),y.set(K,E,Z).normalize(),p.push(y.x,y.y,y.z),u.push(H,1-M),w.push(v++)}g.push(w)}for(let T=0;T<a;T++)for(let w=0;w<r;w++){let M=g[w][T],L=g[w+1][T],D=g[w+1][T+1],H=g[w][T+1];(t>0||w!==0)&&(h.push(M,L,H),A+=3),(e>0||w!==r-1)&&(h.push(L,D,H),A+=3)}l.addGroup(f,A,0),f+=A}function b(y){let P=v,A=new w1,E=new R,T=0,w=y===!0?t:e,M=y===!0?1:-1;for(let D=1;D<=a;D++)d.push(0,m*M,0),p.push(0,M,0),u.push(.5,.5),v++;let L=v;for(let D=0;D<=a;D++){let I=D/a*o+s,K=Math.cos(I),Z=Math.sin(I);E.x=w*Z,E.y=m*M,E.z=w*K,d.push(E.x,E.y,E.z),p.push(0,M,0),A.x=K*.5+.5,A.y=Z*.5*M+.5,u.push(A.x,A.y),v++}for(let D=0;D<a;D++){let H=P+D,I=L+D;y===!0?h.push(I,I+1,H):h.push(I+1,I,H),T+=3}l.addGroup(f,T,y===!0?1:2),f+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},X2=class i extends c2{constructor(t=1,e=1,n=32,a=1,r=!1,c=0,s=Math.PI*2){super(0,t,e,n,a,r,c,s),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:a,openEnded:r,thetaStart:c,thetaLength:s}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var B3=class i extends $2{constructor(t=.5,e=1,n=32,a=1,r=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:a,thetaStart:r,thetaLength:c},n=Math.max(3,n),a=Math.max(1,a);let s=[],o=[],l=[],h=[],d=t,p=(e-t)/a,u=new R,v=new w1;for(let g=0;g<=a;g++){for(let m=0;m<=n;m++){let f=r+m/n*c;u.x=d*Math.cos(f),u.y=d*Math.sin(f),o.push(u.x,u.y,u.z),l.push(0,0,1),v.x=(u.x/e+1)/2,v.y=(u.y/e+1)/2,h.push(v.x,v.y)}d+=p}for(let g=0;g<a;g++){let m=g*(n+1);for(let f=0;f<n;f++){let _=f+m,b=_,y=_+n+1,P=_+n+2,A=_+1;s.push(b,y,A),s.push(y,P,A)}}this.setIndex(s),this.setAttribute("position",new A2(o,3)),this.setAttribute("normal",new A2(l,3)),this.setAttribute("uv",new A2(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var u4=class i extends $2{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,c=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:c,thetaLength:s},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(c+s,Math.PI),l=0,h=[],d=new R,p=new R,u=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){let _=[],b=f/n,y=0;f===0&&c===0?y=.5/e:f===n&&o===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){let A=P/e;d.x=-t*Math.cos(a+A*r)*Math.sin(c+b*s),d.y=t*Math.cos(c+b*s),d.z=t*Math.sin(a+A*r)*Math.sin(c+b*s),v.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),m.push(A+y,1-b),_.push(l++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){let b=h[f][_+1],y=h[f][_],P=h[f+1][_],A=h[f+1][_+1];(f!==0||c>0)&&u.push(b,y,A),(f!==n-1||o<Math.PI)&&u.push(y,P,A)}this.setIndex(u),this.setAttribute("position",new A2(v,3)),this.setAttribute("normal",new A2(g,3)),this.setAttribute("uv",new A2(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var B2=class i extends $2{constructor(t=1,e=.4,n=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:a,arc:r},n=Math.floor(n),a=Math.floor(a);let c=[],s=[],o=[],l=[],h=new R,d=new R,p=new R;for(let u=0;u<=n;u++)for(let v=0;v<=a;v++){let g=v/a*r,m=u/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),s.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),p.subVectors(d,h).normalize(),o.push(p.x,p.y,p.z),l.push(v/a),l.push(u/n)}for(let u=1;u<=n;u++)for(let v=1;v<=a;v++){let g=(a+1)*u+v-1,m=(a+1)*(u-1)+v-1,f=(a+1)*(u-1)+v,_=(a+1)*u+v;c.push(g,m,_),c.push(m,f,_)}this.setIndex(c),this.setAttribute("position",new A2(s,3)),this.setAttribute("normal",new A2(o,3)),this.setAttribute("uv",new A2(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var p3=class extends V3{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new t2(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new t2(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new w1(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new C4,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function V6(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tl(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var e0=class{constructor(t,e,n,a){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,a=e[n],r=e[n-1];n:{t:{let c;e:{i:if(!(t<a)){for(let s=n+2;;){if(a===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(r=a,a=e[++n],t<a)break t}c=e.length;break e}if(!(t>=r)){let s=e[1];t<s&&(n=2,r=s);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(a=r,r=e[--n-1],t>=r)break t}c=n,n=0;break e}break n}for(;n<c;){let s=n+c>>>1;t<e[s]?c=s:n=s+1}if(a=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,a)}return this.interpolate_(n,r,t,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,a=this.valueSize,r=t*a;for(let c=0;c!==a;++c)e[c]=n[r+c];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},S5=class extends e0{constructor(t,e,n,a){super(t,e,n,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:I7,endingEnd:I7}}intervalChanged_(t,e,n){let a=this.parameterPositions,r=t-2,c=t+1,s=a[r],o=a[c];if(s===void 0)switch(this.getSettings_().endingStart){case N7:r=t,s=2*e-n;break;case D7:r=a.length-2,s=e+a[r]-a[r+1];break;default:r=t,s=n}if(o===void 0)switch(this.getSettings_().endingEnd){case N7:c=t,o=2*n-e;break;case D7:c=1,o=n+a[1]-a[0];break;default:c=t-1,o=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-s),this._weightNext=l/(o-n),this._offsetPrev=r*h,this._offsetNext=c*h}interpolate_(t,e,n,a){let r=this.resultBuffer,c=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,u=this._weightNext,v=(n-e)/(a-e),g=v*v,m=g*v,f=-p*m+2*p*g-p*v,_=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*v+1,b=(-1-u)*m+(1.5+u)*g+.5*v,y=u*m-u*g;for(let P=0;P!==s;++P)r[P]=f*c[h+P]+_*c[l+P]+b*c[o+P]+y*c[d+P];return r}},C5=class extends e0{constructor(t,e,n,a){super(t,e,n,a)}interpolate_(t,e,n,a){let r=this.resultBuffer,c=this.sampleValues,s=this.valueSize,o=t*s,l=o-s,h=(n-e)/(a-e),d=1-h;for(let p=0;p!==s;++p)r[p]=c[l+p]*d+c[o+p]*h;return r}},A5=class extends e0{constructor(t,e,n,a){super(t,e,n,a)}interpolate_(t){return this.copySampleValue_(t-1)}},U4=class{constructor(t,e,n,a){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=V6(e,this.TimeBufferType),this.values=V6(n,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:V6(t.times,Array),values:V6(t.values,Array)};let a=t.getInterpolation();a!==t.DefaultInterpolation&&(n.interpolation=a)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new A5(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new C5(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new S5(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case D6:e=this.InterpolantFactoryMethodDiscrete;break;case $8:e=this.InterpolantFactoryMethodLinear;break;case Fe:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return D6;case this.InterpolantFactoryMethodLinear:return $8;case this.InterpolantFactoryMethodSmooth:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,a=e.length;n!==a;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,a=e.length;n!==a;++n)e[n]*=t}return this}trim(t,e){let n=this.times,a=n.length,r=0,c=a-1;for(;r!==a&&n[r]<t;)++r;for(;c!==-1&&n[c]>e;)--c;if(++c,r!==0||c!==a){r>=c&&(c=Math.max(c,1),r=c-1);let s=this.getValueSize();this.times=n.slice(r,c),this.values=this.values.slice(r*s,c*s)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,a=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let c=null;for(let s=0;s!==r;s++){let o=n[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),t=!1;break}if(c!==null&&c>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,c),t=!1;break}c=o}if(a!==void 0&&Tl(a))for(let s=0,o=a.length;s!==o;++s){let l=a[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),a=this.getInterpolation()===Fe,r=t.length-1,c=1;for(let s=1;s<r;++s){let o=!1,l=t[s],h=t[s+1];if(l!==h&&(s!==1||l!==t[0]))if(a)o=!0;else{let d=s*n,p=d-n,u=d+n;for(let v=0;v!==n;++v){let g=e[d+v];if(g!==e[p+v]||g!==e[u+v]){o=!0;break}}}if(o){if(s!==c){t[c]=t[s];let d=s*n,p=c*n;for(let u=0;u!==n;++u)e[p+u]=e[d+u]}++c}}if(r>0){t[c]=t[r];for(let s=r*n,o=c*n,l=0;l!==n;++l)e[o+l]=e[s+l];++c}return c!==t.length?(this.times=t.slice(0,c),this.values=e.slice(0,c*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,a=new n(this.name,t,e);return a.createInterpolant=this.createInterpolant,a}};U4.prototype.TimeBufferType=Float32Array;U4.prototype.ValueBufferType=Float32Array;U4.prototype.DefaultInterpolation=$8;var it=class extends U4{constructor(t,e,n){super(t,e,n)}};it.prototype.ValueTypeName="bool";it.prototype.ValueBufferType=Array;it.prototype.DefaultInterpolation=D6;it.prototype.InterpolantFactoryMethodLinear=void 0;it.prototype.InterpolantFactoryMethodSmooth=void 0;var L5=class extends U4{};L5.prototype.ValueTypeName="color";var E5=class extends U4{};E5.prototype.ValueTypeName="number";var H5=class extends e0{constructor(t,e,n,a){super(t,e,n,a)}interpolate_(t,e,n,a){let r=this.resultBuffer,c=this.sampleValues,s=this.valueSize,o=(n-e)/(a-e),l=t*s;for(let h=l+s;l!==h;l+=4)q4.slerpFlat(r,0,c,l-s,c,l,o);return r}},re=class extends U4{InterpolantFactoryMethodLinear(t){return new H5(this.times,this.values,this.getValueSize(),t)}};re.prototype.ValueTypeName="quaternion";re.prototype.InterpolantFactoryMethodSmooth=void 0;var at=class extends U4{constructor(t,e,n){super(t,e,n)}};at.prototype.ValueTypeName="string";at.prototype.ValueBufferType=Array;at.prototype.DefaultInterpolation=D6;at.prototype.InterpolantFactoryMethodLinear=void 0;at.prototype.InterpolantFactoryMethodSmooth=void 0;var T5=class extends U4{};T5.prototype.ValueTypeName="vector";var F5=class{constructor(t,e,n){let a=this,r=!1,c=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){s++,r===!1&&a.onStart!==void 0&&a.onStart(h,c,s),r=!0},this.itemEnd=function(h){c++,a.onProgress!==void 0&&a.onProgress(h,c,s),c===s&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=l.length;d<p;d+=2){let u=l[d],v=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return v}return null}}},Fl=new F5,V5=class{constructor(t){this.manager=t!==void 0?t:Fl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};V5.DEFAULT_MATERIAL_NAME="__DEFAULT";var ce=class extends n4{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new t2(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},se=class extends ce{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(n4.DEFAULT_UP),this.updateMatrix(),this.groundColor=new t2(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},d8=new C2,In=new R,Nn=new R,R5=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new w1(512,512),this.map=null,this.mapPass=null,this.matrix=new C2,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new k0,this._frameExtents=new w1(1,1),this._viewportCount=1,this._viewports=[new H2(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;In.setFromMatrixPosition(t.matrixWorld),e.position.copy(In),Nn.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nn),e.updateMatrixWorld(),d8.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d8),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(d8)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var B5=class extends R5{constructor(){super(new Qt(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oe=class extends ce{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(n4.DEFAULT_UP),this.updateMatrix(),this.target=new n4,this.shadow=new B5}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Z5="\\[\\]\\.:\\/",Vl=new RegExp("["+Z5+"]","g"),Y5="[^"+Z5+"]",Rl="[^"+Z5.replace("\\.","")+"]",Bl=/((?:WC+[\/:])*)/.source.replace("WC",Y5),Pl=/(WCOD+)?/.source.replace("WCOD",Rl),Il=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Y5),Nl=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Y5),Dl=new RegExp("^"+Bl+Pl+Il+Nl+"$"),kl=["material","materials","bones","map"],P5=class{constructor(t,e,n){let a=n||L2.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,a)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,a=this._bindings[n];a!==void 0&&a.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let a=this._targetGroup.nCachedObjects_,r=n.length;a!==r;++a)n[a].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},L2=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vl,"")}static parseTrackName(t){let e=Dl.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},a=n.nodeName&&n.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=n.nodeName.substring(a+1);kl.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,a),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let c=0;c<r.length;c++){let s=r[c];if(s.name===e||s.uuid===e)return s;let o=n(s.children);if(o)return o}return null},a=n(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)t[e++]=n[a]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)n[a]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)n[a]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let a=0,r=n.length;a!==r;++a)n[a]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,a=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let c=t[a];if(c===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+a+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=r}else c.fromArray!==void 0&&c.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(o=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};L2.Composite=P5;L2.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};L2.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};L2.prototype.GetterByBindingType=[L2.prototype._getValue_direct,L2.prototype._getValue_array,L2.prototype._getValue_arrayElement,L2.prototype._getValue_toArray];L2.prototype.SetterByBindingTypeAndVersioning=[[L2.prototype._setValue_direct,L2.prototype._setValue_direct_setNeedsUpdate,L2.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[L2.prototype._setValue_array,L2.prototype._setValue_array_setNeedsUpdate,L2.prototype._setValue_array_setMatrixWorldNeedsUpdate],[L2.prototype._setValue_arrayElement,L2.prototype._setValue_arrayElement_setNeedsUpdate,L2.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[L2.prototype._setValue_fromArray,L2.prototype._setValue_fromArray_setNeedsUpdate,L2.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nd=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function hi(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),a=new Set(Object.keys(i[0].morphAttributes)),r={},c={},s=i[0].morphTargetsRelative,o=new $2,l=0;for(let h=0;h<i.length;++h){let d=i[h],p=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(d.attributes[u]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(s!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!a.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;c[u]===void 0&&(c[u]=[]),c[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;o.addGroup(l,u,h),l+=u}}if(e){let h=0,d=[];for(let p=0;p<i.length;++p){let u=i[p].index;for(let v=0;v<u.count;++v)d.push(u.getX(v)+h);h+=i[p].attributes.position.count}o.setIndex(d)}for(let h in r){let d=li(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;o.setAttribute(h,d)}for(let h in c){let d=c[h][0].length;if(d===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[h]=[];for(let p=0;p<d;++p){let u=[];for(let g=0;g<c[h].length;++g)u.push(c[h][g][p]);let v=li(u);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;o.morphAttributes[h].push(v)}}return o}function li(i){let t,e,n,a=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=h.gpuType),a!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let c=new t(r),s=new J2(c,e,n),o=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=o/e;for(let p=0,u=h.count;p<u;p++)for(let v=0;v<e;v++){let g=h.getComponent(p,v);s.setComponent(p+d,v,g)}}else c.set(h.array,o);o+=h.count*e}return a!==void 0&&(s.gpuType=a),s}var mi=38*Math.PI/180,ct=Math.sin(mi),ui=Math.cos(mi),pi=1.15;function U(i=0,t=0,e=0,n=1,a=1,r=1,c=0,s=0,o=0){return new C2().compose(new R(i,t,e),new q4().setFromEuler(new C4(c,s,o)),new R(n,a,r))}function k(i,t,e){let n=i.clone();e&&n.applyMatrix4(e),n.deleteAttribute("uv");let a=new t2(t),r=n.attributes.position.count,c=new Float32Array(r*3);for(let s=0;s<r;s++)c[s*3]=a.r,c[s*3+1]=a.g,c[s*3+2]=a.b;return n.setAttribute("color",new J2(c,3)),n}function a0(i){let t=hi(i,!1);return i.forEach(e=>e.dispose()),t||new $2}function st(i,t){let e=new t2(i);return e.multiplyScalar(t),"#"+e.getHexString()}var _1=(i,t=18,e=14)=>new u4(i,t,e),j2=(i,t)=>new ae(i,t,4,12),X1=11,vi=Math.PI/2-.95,X5=1.9,gi=.9,xi=1.5,q5=256,Mi=200,Gl=q5/(X5*X1);function W0(i,t){let e=Math.max(-X1+.01,Math.min(X1-.01,t)),n=Math.sqrt(Math.max(.01,X1*X1-i*i-e*e)),a=Math.acos(e/X1);return[(Math.atan2(n,-i)-vi)/X5*q5,(a-gi)/xi*Mi]}function O2(i,t,e,n,a,r){let[c,s]=W0(t,e),[o]=W0(t+n,e),[,l]=W0(t,e+a);i.beginPath(),i.ellipse(c,s,Math.abs(o-c),Math.abs(l-s),0,0,Math.PI*2),i.fillStyle=r,i.fill()}function P2(i,t,e,n,a=!1){i.beginPath(),t.forEach(([r,c],s)=>{let[o,l]=W0(r,c);s?i.lineTo(o,l):i.moveTo(o,l)}),a&&i.closePath(),i.lineWidth=e*Gl,i.lineCap="round",i.lineJoin="round",i.strokeStyle=n,i.stroke()}function ue(i,t,e){i.beginPath(),t.forEach(([n,a],r)=>{let[c,s]=W0(n,a);r?i.lineTo(c,s):i.moveTo(c,s)}),i.closePath(),i.fillStyle=e,i.fill()}function P3(i,t,e,n,a,r,c=14){let s=[];for(let o=0;o<=c;o++){let l=a+(r-a)*o/c;s.push([i+e*Math.cos(l),t+n*Math.sin(l)])}return s}var I3="#2a2220",rt="#6b2f2f";function Wl(i,t){let e="rgba(224,52,60,0.85)",n="rgba(30,30,40,0.8)";if(t===1)for(let a of[-1,1])P2(i,[[a*6,-2.6],[a*8.3,-2.2]],.5,e),P2(i,[[a*6.1,-3.7],[a*8.2,-4]],.5,e);else if(t===2){O2(i,0,-2.9,.9,.65,"#ff8fa8");for(let a of[-1,1])for(let[r,c]of[[-3.2,-2.2],[-3.8,-3.8],[-4.4,-5.4]])P2(i,[[a*5.6,r],[a*9.6,c]],.28,n)}else if(t===3){let a=[];for(let r=0;r<10;r++){let c=-Math.PI/2+r*Math.PI/5,s=r%2?.7:1.7;a.push([5+Math.cos(c)*s,-3.8+Math.sin(c)*s])}ue(i,a,"#5ad2ff")}else if(t===4)ue(i,[[5.8,3.8],[7.6,.6],[6.3,.6],[8,-3.2],[5,.9],[6.3,.9]],"#ffd23f");else if(t===5)O2(i,0,-2.7,1.4,1.1,"#e8303c"),O2(i,-.4,-2.3,.35,.3,"rgba(255,255,255,0.7)");else if(t===6)for(let[a,r]of[[-3.2,-2.4],[-4.6,-3],[-2.4,-3.4],[3.2,-2.4],[4.6,-3],[2.4,-3.4],[-5.4,-2.2],[5.4,-2.2],[-1,-2.2],[1,-2.4]])O2(i,a,r,.28,.28,"rgba(120,70,40,0.75)");else if(t===7)P2(i,[[-6.4,3.9],[-3.4,1.2]],.4,"rgba(214,120,116,0.9)"),P2(i,[[-5.4,3.2],[-4.6,1.9]],.3,"rgba(214,120,116,0.9)"),P2(i,[[-4.6,3.4],[-5.6,2.2]],.3,"rgba(214,120,116,0.9)");else if(t===8){for(let a of[-1,1])O2(i,a*4.3,-2.6,2.5,.65,"rgba(20,20,26,0.6)");P2(i,[[-6.5,5.6],[6.5,5.6]],.9,"rgba(61,155,233,0.85)")}}function Zl(i,t){let e=document.createElement("canvas");e.width=q5,e.height=Mi;let n=e.getContext("2d");if(!n)return e;let a=4.3,r=-.8,c=st(i.hair,.75);i.blush&&(O2(n,-6.9,-3.6,1.9,1.15,"rgba(255,110,125,0.34)"),O2(n,6.9,-3.6,1.9,1.15,"rgba(255,110,125,0.34)"));for(let l of[-1,1]){let h=l*a;if(t){P2(n,P3(h,r+.3,1.5,.75,Math.PI*1.05,Math.PI*1.95),.5,I3);continue}switch(i.eyes){case 1:O2(n,h,r,1.45,1.45,I3),O2(n,h+.45,r+.55,.42,.42,"#fff");break;case 2:P2(n,P3(h,r-.5,1.7,1.4,.12*Math.PI,.88*Math.PI),.55,I3);break;case 3:O2(n,h,r,1.55,2.2,I3),O2(n,h+.5,r+.8,.55,.6,"#fff"),O2(n,h-.5,r-.75,.28,.3,"rgba(255,255,255,0.8)");break;case 4:O2(n,h,r,1.1,1.7,I3),O2(n,h+.4,r+.6,.36,.4,"#fff"),P2(n,[[h+l*1,r+1.2],[h+l*2.1,r+1.9]],.38,I3),P2(n,[[h+l*.9,r+.4],[h+l*2.3,r+.7]],.34,I3);break;default:O2(n,h,r,1.3,2,I3),O2(n,h+.45,r+.75,.42,.5,"#fff");break}}let s=r+3.5;for(let l of[-1,1]){let h=l*a;i.brows===0?P2(n,[[h-1.7,s],[h+1.7,s]],.6,c):i.brows===1?P2(n,P3(h,s-1.4,1.9,1.5,.2*Math.PI,.8*Math.PI,10),.6,c):i.brows===2&&P2(n,[[h-l*1.7,s-.5],[h+l*1.7,s+.45]],.62,c)}let o=-5.5;if(t)O2(n,0,o,.85,.65,rt);else switch(i.mouth){case 1:ue(n,[[-2.9,o+.9],[2.9,o+.9],...P3(0,o+.9,2.9,2.4,0,-Math.PI,14).map(([l,h])=>[l,h])],"#6b1f2a"),ue(n,[[-2.5,o+.9],[2.5,o+.9],[2.3,o+.1],[-2.3,o+.1]],"#fff"),P2(n,[[-2.9,o+.9],[2.9,o+.9]],.25,rt);break;case 2:P2(n,P3(0,o+.8,1.4,.9,1.2*Math.PI,1.8*Math.PI,8),.5,rt);break;case 3:P2(n,P3(-1.1,o+.5,1.1,.9,Math.PI,2*Math.PI,8),.45,rt),P2(n,P3(1.1,o+.5,1.1,.9,Math.PI,2*Math.PI,8),.45,rt);break;case 4:P2(n,[[-2.1,o+.1],[-.6,o-.35],[1,o-.2],[2.5,o+.9]],.5,rt);break;default:P2(n,P3(0,o+1.6,2.7,1.8,1.22*Math.PI,1.78*Math.PI,12),.55,rt);break}return Wl(n,i.face||0),i.stache&&(O2(n,-1.6,-3.35,1.9,.85,st(i.hair,.8)),O2(n,1.6,-3.35,1.9,.85,st(i.hair,.8))),e}function fi(i,t){let e=new u3(Zl(i,t));return e.colorSpace=D2,e.generateMipmaps=!1,e.minFilter=M4,e.magFilter=M4,e}function Yl(i){let t=[],e=i.skin,n=i.hair;t.push(k(_1(X1,28,20),e)),t.push(k(_1(2.2,10,8),e,U(-10.6,-1.2,0,.7,1,.9))),t.push(k(_1(2.2,10,8),e,U(10.6,-1.2,0,.7,1,.9))),t.push(k(_1(1.55,12,10),st(e,.97),U(0,-2.5,X1-.1,1,.9,.95)));let a=(c,s,o=X1*1.07,l=0)=>{let h=new u4(o,26,16,0,Math.PI*2,0,c);return k(h,n,U(0,l,0,1,1,1,s))};switch(i.hairStyle){case 0:t.push(a(.54*Math.PI,-.45));break;case 1:t.push(a(.56*Math.PI,-.5)),t.push(k(_1(X1*1.08,22,16),n,U(0,-2.5,-3.2,1,.92,.82)));break;case 2:t.push(a(.54*Math.PI,-.45)),t.push(k(_1(4.3,14,12),n,U(0,11.6,-2.4)));break;case 3:t.push(k(_1(1.7,10,8),n,U(0,X1*.95,1.2,.8,1.5,.8))),t.push(k(_1(2.1,10,8),n,U(-X1*.93,1,-2))),t.push(k(_1(2.1,10,8),n,U(X1*.93,1,-2)));break;case 4:{t.push(a(.5*Math.PI,-.4));for(let c=0;c<7;c++){let s=c/7*Math.PI*2,o=c===0?0:6.4,l=Math.cos(s)*o,h=Math.sin(s)*o-1.5;t.push(k(new X2(2.6,7,8),n,U(l,X1*.95+1.5,h,1,1,1,Math.sin(s)*.45,0,-Math.cos(s)*.45)))}break}case 5:t.push(a(.54*Math.PI,-.45)),t.push(k(_1(2.2,10,8),st(n,.8),U(0,4.5,-X1*.98))),t.push(k(j2(2.7,8),n,U(0,-1.2,-X1-2.5,1,1,1,-.25)));break;case 6:t.push(k(_1(14.2,24,18),n,U(0,3.2,-4.4,1,.97,.95))),t.push(a(.44*Math.PI,-.3));break;case 7:for(let c=0;c<7;c++){let s=.3+c/6*2.4,o=X1+1.2;t.push(k(j2(1.8,3.4),n,U(0,Math.sin(s)*o,Math.cos(s)*o,1,1,1,Math.PI/2-s)))}break;default:t.push(a(.56*Math.PI,-.5)),t.push(k(_1(X1*1.02,20,16),n,U(0,-9.5,-5.2,1,1.9,.56)));break}let r=i.hat;if(r===1)t.push(k(new u4(X1*1.1,24,14,0,Math.PI*2,0,.46*Math.PI),"#e8504b",U(0,.4,0))),t.push(k(new B2(X1*1.1*Math.sin(.46*Math.PI)-.3,1.3,8,32),"#c93d39",U(0,.4+X1*1.1*Math.cos(.46*Math.PI),0,1,1,1,Math.PI/2))),t.push(k(_1(2.6,12,10),"#ffffff",U(0,X1*1.1+1.2,0)));else if(r===2)t.push(k(new u4(X1*1.1,24,14,0,Math.PI*2,0,.5*Math.PI),"#3d6fb5",U(0,.6,0,1,1,1,-.3))),t.push(k(_1(1,16,8),"#2d5490",U(0,3.6,10.6,6.8,.8,7.2,.18)));else if(r===3){t.push(k(new c2(7.2,7.8,3.6,18),"#ffcf40",U(0,10.6,0)));for(let c=0;c<5;c++){let s=c/5*Math.PI*2;t.push(k(new X2(1.5,4,6),"#ffcf40",U(Math.cos(s)*6.9,14.3,Math.sin(s)*6.9))),t.push(k(_1(.9,8,6),"#ff5c7a",U(Math.cos(s)*6.9,16.5,Math.sin(s)*6.9)))}t.push(k(_1(1.1,8,6),"#4aa3ff",U(0,10.6,7.7)))}else if(r===4)t.push(k(new c2(5.8,5.8,9,22),"#2a2a35",U(0,15.4,0))),t.push(k(new c2(9.4,9.4,.9,26),"#2a2a35",U(0,10.8,0))),t.push(k(new c2(5.9,5.9,1.7,22),"#d94a4a",U(0,12.2,0)));else if(r===5)for(let c of[-1,1])t.push(k(new X2(3.5,6.5,4),n,U(c*6.6,10.2,.5,1,1,.6,0,0,-c*.35))),t.push(k(new X2(2,4.2,4),"#ffb3c1",U(c*6.4,9.6,1.4,1,1,.5,0,0,-c*.35)));else if(r===6)t.push(k(new B2(X1*1+.2,1,8,36),"#ff5c7a",U(0,5.2,0,1,1,1,Math.PI/2+.2))),t.push(k(_1(2.2,10,8),"#ff5c7a",U(8.2,5.8,6.2,1,.8,.7)));else if(r===7)t.push(k(new X2(5.2,13,18),"#a259ff",U(0,16.8,0,1,1,1,0,0,.1))),t.push(k(new B2(3.6,.55,6,18),"#ffd23f",U(.4,15.6,0,1,1,1,Math.PI/2))),t.push(k(_1(1.7,10,8),"#ffd23f",U(1.4,23.6,0)));else if(r===8)t.push(k(new c2(12.2,12.2,.9,28),"#8a5a2b",U(0,10.6,0,1,1,.9))),t.push(k(new c2(5.6,6.4,5.2,20),"#a06a35",U(0,13.4,0))),t.push(k(new c2(6.5,6.5,1.2,20),"#4a2f14",U(0,11.6,0)));else if(r===9)t.push(k(new c2(6.2,6.4,5,20),"#ffffff",U(0,12.6,0))),t.push(k(_1(7.4,16,12),"#ffffff",U(0,18.6,0,1,.85,1))),t.push(k(new c2(6.5,6.5,1.4,20),"#e9edf2",U(0,10.8,0)));else if(r===10){t.push(k(new c2(11.4,11.4,.7,28),"#3b3a9e",U(0,10.4,0))),t.push(k(new X2(7.4,19,20),"#4a49c4",U(0,20.4,0,1,1,1,0,0,.12)));for(let[c,s,o]of[[3.4,17,5.6],[-3.6,21,3.4],[1.2,13.4,7]])t.push(k(_1(1.1,8,6),"#ffd23f",U(c,s,o)))}else if(r===11)t.push(k(_1(1,20,12),"#23252e",U(0,11.8,0,12.6,4.2,7.4))),t.push(k(_1(1.7,10,8),"#f2f2f2",U(0,12.2,7.2,1,1,.5))),t.push(k(_1(1,12,8),"#d94a4a",U(0,9.4,6.2,8,.8,1.4)));else if(r===12)t.push(k(new B2(5.6,.95,8,32),"#ffe27a",U(0,19.6,-1,1,1,1,Math.PI/2+.15)));else if(r===13)for(let c of[-1,1])t.push(k(j2(2.4,9),"#ffffff",U(c*3.6,18.4,-.6,1,1,.6,0,0,-c*.12))),t.push(k(j2(1.2,7),"#ffb3c1",U(c*3.6,18.2,.4,1,1,.4,0,0,-c*.12)));else if(r===14)t.push(k(new X2(8.2,15,20),"#d93a3a",U(0,16.8,-1.8,1,1,1,-.45))),t.push(k(new B2(9.4,1.7,10,32),"#ffffff",U(0,10.6,0,1,1,1,Math.PI/2-.12))),t.push(k(_1(2.4,10,8),"#ffffff",U(0,22.6,-9.4)));else if(r===15){t.push(k(new u4(X1*1.1,24,14,0,Math.PI*2,0,.48*Math.PI),"#7c8794",U(0,.6,0))),t.push(k(new B2(X1*1.1*Math.sin(.48*Math.PI)-.2,1.1,8,32),"#5d6670",U(0,.6+X1*1.1*Math.cos(.48*Math.PI),0,1,1,1,Math.PI/2)));for(let c of[-1,1])t.push(k(new X2(2,8,10),"#f1e6c8",U(c*11.6,8.2,0,1,1,1,0,0,-c*.9)))}else if(r===16)t.push(k(new u4(X1*1.12,24,14,0,Math.PI*2,0,.45*Math.PI),"#aab4c0",U(0,.6,0))),t.push(k(_1(1,12,8),"#20242c",U(0,5,10.4,8.2,.7,1.2))),t.push(k(new X2(1.6,8,8),"#d94a4a",U(0,15.4,-2,1,1,1,-.5)));else if(r===17)t.push(k(new u4(X1*1.15,24,14,0,Math.PI*2,0,.4*Math.PI),"#f1f4f8",U(0,.2,0))),t.push(k(new B2(X1*1.15*Math.sin(.4*Math.PI)-.2,.9,8,32),"#46b8ff",U(0,.2+X1*1.15*Math.cos(.4*Math.PI),0,1,1,1,Math.PI/2))),t.push(k(new c2(.4,.4,5,6),"#c7ced6",U(6.4,16,0))),t.push(k(_1(1.1,8,6),"#ff5c5c",U(6.4,18.8,0)));else if(r===18)t.push(k(new c2(7.6,8.6,4.6,22),"#f4f6f8",U(0,12.2,0))),t.push(k(new c2(8.7,8.7,1,22),"#2d4f9c",U(0,10.6,0))),t.push(k(new c2(7.8,7.8,.6,22),"#f4f6f8",U(0,14.6,0)));else if(r===19){t.push(k(new B2(X1*.98,.8,8,36),"#3f9a46",U(0,6.2,0,1,1,1,Math.PI/2+.12)));let c=["#ff6fb0","#ffd23f","#ffffff","#b58cff","#ff8a4a","#ff6fb0","#ffd23f","#ffffff"];c.forEach((s,o)=>{let l=o/c.length*Math.PI*2;t.push(k(_1(1.6,8,6),s,U(Math.cos(l)*(X1+.4),6.8+Math.sin(l)*0,Math.sin(l)*(X1+.4))))})}else if(r===20)t.push(k(_1(1,20,12),"#2f3a8f",U(1.4,11.6,0,11.6,3.6,11.6,0,0,-.18))),t.push(k(_1(.8,8,6),"#2f3a8f",U(1.6,15.6,0)));else if(r===21)t.push(k(new u4(X1*1.1,24,14,0,Math.PI*2,0,.5*Math.PI),"#3aa0e8",U(0,.4,0))),t.push(k(new c2(.5,.5,2.4,6),"#555",U(0,12.8,0))),t.push(k(_1(1,8,6),"#ef5b5b",U(3.2,14.2,0,3.4,.35,1))),t.push(k(_1(1,8,6),"#ffd23f",U(-3.2,14.2,0,3.4,.35,1)));else if(r===22)t.push(k(new X2(6.4,15,20),"#ff7a1a",U(0,17.6,0))),t.push(k(new c2(3.4,4.2,1.8,20),"#ffffff",U(0,16.6,0))),t.push(k(new c2(7.6,7.6,1,20),"#ff7a1a",U(0,10.6,0)));else if(r===23){t.push(k(new u4(X1*1.32,26,14,0,Math.PI*2,0,.42*Math.PI),"#e03c3c",U(0,3.4,0)));for(let[c,s,o,l]of[[0,14.8,1,2.2],[-6,12,3,1.8],[6.2,12.2,2,1.9],[0,12.4,8,1.7],[-3,13.6,-6,1.6]])t.push(k(_1(l,8,6),"#ffffff",U(c,s,o,1,.5,1)))}else if(r===24)t.push(k(_1(1,18,12),"#ff8a1f",U(0,15,0,8.4,6.2,8.4))),t.push(k(new c2(.9,1.2,3,8),"#3f7a2c",U(0,21.2,0))),t.push(k(_1(1,8,6),"#e87a14",U(0,15,0,8.7,5.6,2.6)));else if(r===25){for(let c of[-1,1])t.push(k(new X2(1.9,7.4,10),"#d9302f",U(c*6,13.2,1,1,1,1,0,0,-c*.3)));t.push(k(new B2(X1*1+.1,.7,8,36),"#3a1010",U(0,5.4,0,1,1,1,Math.PI/2+.15)))}else if(r===26){t.push(k(_1(1,16,12),"#ffd93d",U(0,12.4,-1,5.6,4,6))),t.push(k(_1(3.4,12,10),"#ffd93d",U(0,16.2,2.4))),t.push(k(_1(1,8,6),"#ff8a1f",U(0,15.6,6.4,2.2,.9,1.9)));for(let c of[-1,1])t.push(k(_1(.55,6,5),"#1a1a1a",U(c*1.6,17.2,5)))}else if(r===27){t.push(k(new B2(X1*1.03,2,8,36),"#1c1f27",U(0,3.6,0,1,1,1,Math.PI/2+.05))),t.push(k(_1(1,10,8),"#9aa6b4",U(0,3.8,X1+1.6,3.4,1.6,.5)));for(let c of[-1,1])t.push(k(j2(.9,5),"#1c1f27",U(c*2+2,2.6,-X1-2.8,1,1,1,.3,0,c*.6)))}if(i.acc===5){t.push(k(new B2(X1*1.05+.4,.95,8,32,Math.PI),"#2a2f3a",U(0,.4,0,1,1,1,0,0,0)));for(let c of[-1,1])t.push(k(new c2(3.5,3.5,2.8,16),"#66c0f4",U(c*(X1*1.05+.9),.2,0,1,1,1,0,0,Math.PI/2)))}if(i.glasses){let c="#23262d";for(let s of[-1,1])t.push(k(new B2(3.3,.42,8,24),c,U(s*4.4,-.3,X1-.9)));t.push(k(new c2(.35,.35,2.2,6),c,U(0,.6,X1-.7,1,1,1,0,0,Math.PI/2)))}return a0(t)}function Xl(i,t){let e=[];e.push(k(j2(5.6,3.6),i.shirt,U(0,21.2,0,1,1,.82))),e.push(k(_1(5.65,18,12),i.pants,U(0,15,0,1,.62,.84))),e.push(k(_1(2.3,10,8),i.skin,U(0,28.6,.4)));let n=i.acc;if(n===1){for(let c of[-1,1])e.push(k(_1(2.5,10,8),"#d94a4a",U(c*2.6,27.4,4.2,1,.75,.6,0,0,c*.25)));e.push(k(_1(1.2,8,6),"#a83030",U(0,27.4,4.7)))}else if(n===2)e.push(k(new B2(5.1,1.7,8,24),"#e8504b",U(0,27.4,0,1,1,.9,Math.PI/2))),e.push(k(j2(1.6,6),"#e8504b",U(3,22.6,5.3,1,1,.5,0,0,.1))),e.push(k(j2(.5,5),"#ffffff",U(3.3,21.6,5.9)));else if(n===3)e.push(k(_1(1,16,12),"#c0392b",U(0,19.4,-5.4,7.8,10.4,1.5,.08))),e.push(k(_1(1.3,8,6),"#ffcf40",U(0,27.6,4.2)));else if(n===4){e.push(k(j2(3.8,5),"#8a6a45",U(0,20.5,-6.8,1.15,1,.8))),e.push(k(_1(1.4,8,6),"#5d4630",U(0,22.5,-9.8)));for(let c of[-1,1])e.push(k(j2(.9,8),"#5d4630",U(c*4,22.4,3.6,1,1,.5,.25)))}else if(n===6)for(let c of[-1,1])e.push(k(_1(1,14,10),"#ffffff",U(c*7.4,25.6,-6.4,1.6,8,4.4,0,c*.5,-c*.5))),e.push(k(_1(1,14,10),"#e6f0ff",U(c*9.4,21.4,-6.6,1.3,5.4,3.4,0,c*.5,-c*.7)));else if(n===7)e.push(k(_1(1.9,10,8),"#ffd23f",U(3.6,24.2,5.3,1,1,.35))),e.push(k(_1(1,8,6),"#fff3b0",U(3.6,24.2,5.7,1,1,.4)));else if(n===8)e.push(k(new B2(3.9,.45,6,24),"#ffd23f",U(0,26.2,1.4,1,1,1,Math.PI/2-.5))),e.push(k(_1(1.1,8,6),"#ffd23f",U(0,23.4,4.8,1,1,.5)));else if(n===9)e.push(k(_1(1,8,6),"#1f3a8f",U(0,27,4.5,1.7,1.3,1))),e.push(k(_1(1,8,6),"#1f3a8f",U(0,22.4,5,1.4,4.4,.5)));else if(n===10)e.push(k(_1(1,6,5),"#d94a4a",U(-3.4,25.4,4.6,.9,2.6,.3))),e.push(k(new c2(1.7,1.7,.5,14),"#ffd23f",U(-3.4,23.2,4.9,1,1,1,Math.PI/2))),e.push(k(_1(.8,8,6),"#fff3b0",U(-3.4,23.2,5.2,1,1,.4)));else if(n===11){let c=["#ff6fb0","#ffd23f","#ff5c5c","#ffffff","#ff8a4a"];for(let s=0;s<12;s++){let o=s/12*Math.PI*2;e.push(k(_1(1.15,8,6),c[s%c.length],U(Math.cos(o)*5.2,26.8-Math.max(0,Math.sin(o))*2.6,Math.sin(o)*4.4+.3)))}}else if(n===12)for(let c of[-1,1])e.push(k(j2(1.7,6),"#9aa3ad",U(c*2.8,22,-7.6))),e.push(k(_1(1.5,8,6),"#d94a4a",U(c*2.8,27.2,-7.6))),e.push(k(new X2(1.5,4.4,8),"#ff9a2f",U(c*2.8,15.8,-7.6,1,1,1,Math.PI)));else n===13?(e.push(k(j2(.85,15),"#262a33",U(0,21,-5.9,1,1,1,0,0,.75))),e.push(k(j2(.7,3),"#ffd23f",U(-5.4,27.4,-5.9,1,1,1,0,0,.75))),e.push(k(_1(1,8,6),"#ffd23f",U(-4.4,26.4,-5.9,2,.4,1,0,0,.75)))):n===14?(e.push(k(new c2(6.8,6.8,.9,26),"#3d6fb5",U(0,21.4,-6.2,1,1,1,Math.PI/2))),e.push(k(new c2(5.6,5.6,1,26),"#e8d9a8",U(0,21.4,-6.3,1,1,1,Math.PI/2))),e.push(k(_1(1.7,10,8),"#ffd23f",U(0,21.4,-7.2)))):n===15&&(e.push(k(_1(1,14,10),"#e07a2a",U(2.6,18.4,-6.2,4.6,5.6,1.3,0,0,-.5))),e.push(k(_1(1,12,8),"#e07a2a",U(4.6,22.6,-6.2,3.4,3.6,1.2,0,0,-.5))),e.push(k(j2(.7,9),"#6b4a2e",U(-.4,29,-6.2,1,1,1,0,0,.62))),e.push(k(_1(1.4,8,6),"#3a2a1c",U(-3.8,33.2,-6.2,1,1.6,.8,0,0,.62))));let a=_7(i.tee||0);if(a){let s=new R3(.8528,.8528);for(let o=0;o<7;o++)for(let l=0;l<8;l++){let h=a.rows[o]?a.rows[o][l]:".",d=a.pal[h];if(!d)continue;let p=(l-7/2)*.82,u=24.4-o*.82,v=Math.abs(u-21.2),g=v<=1.8?5.6:Math.sqrt(Math.max(0,5.6*5.6-(v-1.8)*(v-1.8))),m=.82*Math.sqrt(Math.max(0,g*g-p*p))+.1;e.push(k(s,d,U(p,u,m)))}s.dispose()}let r=b7(i.flag||0);if(r){e.push(k(new c2(.5,.5,48,6),"#8a6a45",U(7.4,36,-9))),e.push(k(_1(1.1,8,6),"#ffd23f",U(7.4,60.4,-9)));let c=S7(r),s=.95;for(let o=0;o<ft;o++){let l=0;for(;l<U3;){let h=l+1;for(;h<U3&&c[o][h]===c[o][l];)h++;let d=(h-l)*s;e.push(k(new i4(d,s*1.02,.3),c[o][l],U(7.4+.5+l*s+d/2,58.4-o*s-s/2,-9))),l=h}}}return a||(t&1?e.push(k(new B2(5.62,.75,8,28),st(i.shirt,1.28),U(0,21.6,0,1,.82,1,Math.PI/2))):t&2&&e.push(k(_1(1.5,10,8),st(i.shirt,.72),U(-2.2,22.4,4.5,1.2,1,.35)))),a0(e)}function ql(i){return a0([k(j2(1.95,3.6),i.shirt,U(0,-3.3,0)),k(_1(2.35,12,10),i.skin,U(0,-7.7,0))])}function Kl(i){let t=i.kicks||0,e=t===2?"#6b4a2e":t===3?"#ffb3c1":t===4?"#ffd23f":t===5?"#aeb6c0":t===6?"#ff7fb0":i.shoes,n=[k(j2(2.7,4.2),i.pants,U(0,-4.6,0)),k(_1(3.2,14,10),e,t===4?U(0,-11.5,2.2,1.15,.8,2.3):U(0,-11.7,1.3,1,.72,1.5))];if(t===1)n.push(k(new c2(2.9,3,3.6,14),i.shoes,U(0,-9.3,0))),n.push(k(new c2(3,3,.7,14),"#e8403c",U(0,-7.6,0)));else if(t===2)n.push(k(new c2(3,3.2,6.2,14),"#6b4a2e",U(0,-8.4,0)));else if(t===3)for(let a of[-1,1])n.push(k(j2(.8,3),"#ffb3c1",U(a*1.3,-9.4,3,1,1,.6,-.2)));else if(t===4)n.push(k(_1(1.3,8,6),"#e8403c",U(0,-10.8,6.4)));else if(t===5)n.push(k(new c2(2.9,3.1,3.2,12),"#8a929c",U(0,-9.4,0))),n.push(k(new X2(2.2,4.6,10),"#ff9a2f",U(0,-15.4,-.4,1,1,1,Math.PI))),n.push(k(new X2(1.2,3,8),"#ffe27a",U(0,-14.8,-.4,1,1,1,Math.PI)));else if(t===6)for(let[a,r]of[[-1.6,-13.4],[3.2,-13.4]])n.push(k(new c2(1.2,1.2,4.6,10),"#2a2f3a",U(0,r,a,1,1,1,0,0,Math.PI/2)));return a0(n)}var Jl=(()=>{let i=document.createElement("canvas");i.width=64,i.height=64;let t=i.getContext("2d");if(t){let n=t.createRadialGradient(32,32,2,32,32,31);n.addColorStop(0,"rgba(40,30,20,0.42)"),n.addColorStop(.6,"rgba(40,30,20,0.18)"),n.addColorStop(1,"rgba(40,30,20,0)"),t.fillStyle=n,t.fillRect(0,0,64,64)}let e=new u3(i);return e.colorSpace=D2,e})();function $l(){let i=document.createElement("canvas");i.width=64,i.height=64;let t=i.getContext("2d");t&&(t.font="bold 46px sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=7,t.strokeStyle="rgba(60,80,130,0.9)",t.strokeText("Z",32,34),t.fillStyle="#e8f0ff",t.fillText("Z",32,34));let e=new u3(i);return e.colorSpace=D2,e}function jl(i){let t=document.createElement("canvas");t.width=96,t.height=96;let e=t.getContext("2d");if(e){e.lineJoin="round",e.lineCap="round";let a=(r,c,s)=>{e.beginPath(),s(),e.lineWidth=9,e.strokeStyle=c,e.stroke(),e.fillStyle=r,e.fill()};if(i==="heart")a("#ff5c7a","#fff",()=>{e.moveTo(48,80),e.bezierCurveTo(8,52,14,18,36,18),e.bezierCurveTo(44,18,48,24,48,30),e.bezierCurveTo(48,24,52,18,60,18),e.bezierCurveTo(82,18,88,52,48,80)});else if(i==="star")a("#ffd23f","#fff",()=>{for(let r=0;r<10;r++){let c=-Math.PI/2+r*Math.PI/5,s=r%2?17:38,o=48+Math.cos(c)*s,l=50+Math.sin(c)*s;r?e.lineTo(o,l):e.moveTo(o,l)}e.closePath()});else if(i==="exclaim")a("#ff8a3d","#fff",()=>{e.moveTo(42,14),e.lineTo(54,14),e.lineTo(51,58),e.lineTo(45,58),e.closePath()}),a("#ff8a3d","#fff",()=>{e.arc(48,74,7,0,Math.PI*2)});else if(i==="note")a("#6c8cff","#fff",()=>{e.arc(34,70,13,0,Math.PI*2)}),a("#6c8cff","#fff",()=>{e.moveTo(44,70),e.lineTo(44,18),e.lineTo(72,28),e.lineTo(72,44),e.lineTo(44,34)});else{a("#ffffff","#8a94a8",()=>{e.moveTo(16,22),e.lineTo(80,22),e.quadraticCurveTo(88,22,88,30),e.lineTo(88,54),e.quadraticCurveTo(88,62,80,62),e.lineTo(46,62),e.lineTo(30,78),e.lineTo(32,62),e.lineTo(16,62),e.quadraticCurveTo(8,62,8,54),e.lineTo(8,30),e.quadraticCurveTo(8,22,16,22)}),e.fillStyle="#8a94a8";for(let r of[28,48,68])e.beginPath(),e.arc(r,42,5,0,Math.PI*2),e.fill()}}let n=new u3(t);return n.colorSpace=D2,n}var J4=class{constructor(t,e=!1){this.canvas=t;this.scene=new j6;this.camera=new Qt(0,1280,0,-760,100,5e3);this.hemi=new se(16777215,15787734,1.5);this.sun=new oe(16774112,1.4);this.charMat=new p3({vertexColors:!0,roughness:.5,metalness:0});this.shadowMat=new Y2({map:Jl,transparent:!0,depthWrite:!1});this.shadowGeo=new R3(1,1);this.zTex=$l();this.iconMats=["heart","star","exclaim","note","dots"].reduce((t,e)=>(t[e]=new nt({map:jl(e),transparent:!0,depthTest:!1,depthWrite:!1}),t),{});this.zoneGroup=new h4;this.storeGroup=new h4;this.basePixel=1.5;this.lastZoom=1;this.storeCoin=null;this.zoneLive=[];this.zMat=new nt({map:this.zTex,transparent:!0,depthWrite:!1});this.orbGeo=new u4(3.1,14,10);this.orbMat=new p3({color:4441187,emissive:3126351,emissiveIntensity:.9,roughness:.3});this.haloGeo=new B2(5.2,.55,8,24);this.statusGeo=new B3(10.5,13,36);this.statusMats={game:new Y2({color:9484860,transparent:!0,opacity:.95,side:K2,depthWrite:!1}),on:new Y2({color:5753822,transparent:!0,opacity:.8,side:K2,depthWrite:!1}),away:new Y2({color:14726223,transparent:!0,opacity:.7,side:K2,depthWrite:!1})};this.tagMat=new nt({map:(()=>{let t=document.createElement("canvas");t.width=128,t.height=36;let e=t.getContext("2d");e&&(e.fillStyle="#90ba3c",e.beginPath(),e.moveTo(6,2),e.lineTo(122,2),e.quadraticCurveTo(126,2,126,6),e.lineTo(126,30),e.quadraticCurveTo(126,34,122,34),e.lineTo(6,34),e.quadraticCurveTo(2,34,2,30),e.lineTo(2,6),e.quadraticCurveTo(2,2,6,2),e.fill(),e.fillStyle="#0c1a05",e.font="800 21px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("IN-GAME",64,19));let n=new u3(t);return n.colorSpace=D2,n})(),transparent:!0,depthTest:!1,depthWrite:!1});this.arrowGeo=new X2(3.4,7,4);this.arrowMat=new p3({color:6734068,emissive:1732520,roughness:.4});this.pickMat=new p3({color:16765503,emissive:12092928,roughness:.4});this.auraGeo=new B3(17.5,21.5,44);this.auraMats=new Map;this.rainbowMat=new Y2({color:16711680,transparent:!0,opacity:.8,side:K2,depthWrite:!1});this.ringGeo=new B3(14,17,40);this.ringMat=new Y2({color:16777215,transparent:!0,opacity:.9,side:K2,depthWrite:!1});this.rigs=new Map;this.floor=null;this.props=[];this.size={w:0,h:0};this.renderer=new $6({canvas:t,antialias:!0,alpha:!1,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(typeof window<"u"&&window.devicePixelRatio||1,1.5)),this.renderer.setClearColor(15986403,1),this.sun.position.set(-220,380,300),this.scene.add(this.hemi,this.sun,this.zoneGroup,this.storeGroup),this.camera.position.set(0,2e3*ct,2e3*ui),this.camera.lookAt(0,0,0),this.floorTex=this.makeFloorTexture(),this.updateDaylight(!0)}auraMat(t){let e=this.auraMats.get(t);return e||(e=new Y2({color:t,transparent:!0,opacity:.8,side:K2,depthWrite:!1}),this.auraMats.set(t,e)),e}makeFloorTexture(t=1280,e=760){let a=Math.max(256,Math.round(1024*e/t)),r=document.createElement("canvas");r.width=1024,r.height=a;let c=r.getContext("2d");if(c){let o=c.createRadialGradient(512,a*.46,0,512,a*.46,880.64);o.addColorStop(0,"#22394f"),o.addColorStop(.58,"#141d28"),o.addColorStop(1,"#0b1017"),c.fillStyle=o,c.fillRect(0,0,1024,a);let l=(h,d,p,u)=>{if(c.beginPath(),c.ellipse(1024/2,a*.5,h,d,0,0,Math.PI*2),u){let v=c.createRadialGradient(512,a*.5,0,512,a*.5,h);v.addColorStop(0,"rgba(102,192,244,0.13)"),v.addColorStop(.68,"rgba(102,192,244,0)"),c.fillStyle=v,c.fill()}c.lineWidth=2,c.strokeStyle="rgba(102,192,244,"+p+")",c.stroke()};l(1024*.39,a*.38,.12,!0),l(1024*.265,a*.26,.08,!1)}let s=new u3(r);return s.colorSpace=D2,s.anisotropy=4,s}setView(t,e,n,a){let r=this.camera;r.left===t&&r.right===t+n&&r.top===-e&&r.bottom===-(e+a)||(r.left=t,r.right=t+n,r.top=-e,r.bottom=-(e+a),r.updateProjectionMatrix())}setQuality(t){this.basePixel=t,this.setDetail(this.lastZoom)}setDetail(t){this.lastZoom=t;let e=Math.min(2.2,Math.max(.6,this.basePixel*(1+.25*(t-1)))),n=J0.k*(typeof window<"u"&&window.devicePixelRatio||1);e=Math.max(.6,Math.min(e,n*Math.max(1,t)*1.15)),!(Math.abs(e-this.renderer.getPixelRatio())<.05||this.size.w===0)&&(this.renderer.setPixelRatio(e),this.renderer.setSize(this.size.w,this.size.h,!1))}setZoom(t){this.camera.zoom=t,this.camera.updateProjectionMatrix()}resize(t,e){t===this.size.w&&e===this.size.h||(this.size={w:t,h:e},this.renderer.setSize(t,e,!1),this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.camera.left=0,this.camera.right=t,this.camera.top=0,this.camera.bottom=-e,this.camera.updateProjectionMatrix(),this.buildWorld())}buildWorld(){let{w:t,h:e}=this.size;this.floor&&(this.scene.remove(this.floor),this.floor.geometry.dispose(),this.floor.material.dispose()),this.floorTex.dispose(),this.floorTex=this.makeFloorTexture(t,e);let n=e/ct,a=new u2(new R3(t,n),new Y2({map:this.floorTex}));a.rotation.x=-Math.PI/2,a.position.set(t/2,0,n/2),this.scene.add(a),this.floor=a}updateDaylight(t=!1){t&&(this.hemi.color.set(14084351),this.hemi.groundColor.set(6256272),this.hemi.intensity=1.45,this.sun.color.set(16777215),this.sun.intensity=1.25,this.renderer.setClearColor(725015,1))}makeRig(t){let e=t.look,n=t.seed>>>0,a=[],r=new h4,c=new h4;r.add(c);let s=new u2(this.shadowGeo,this.shadowMat);s.rotation.x=-Math.PI/2,s.position.y=.3,s.scale.set(34,22,1),r.add(s);let o=Xl(e,n>>4);a.push(o),c.add(new u2(o,this.charMat));let l=new h4;l.position.set(0,38.6,0),l.scale.set(e.head,.95,.97);let h=Yl(e);a.push(h),l.add(new u2(h,this.charMat));let d=fi(e,!1),p=fi(e,!0),u=new p3({map:d,transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),v=new u4(X1+.06,28,20,vi,X5,gi,xi);a.push(v);let g=new u2(v,u);l.add(g),c.add(l);let m=ql(e);a.push(m);let f=e1=>{let $=new h4;return $.position.set(e1*6.9,25.6,0),$.add(new u2(m,this.charMat)),c.add($),$},_=f(-1),b=f(1),y=Kl(e);a.push(y);let P=e1=>{let $=new h4;return $.position.set(e1*2.9,14,0),$.add(new u2(y,this.charMat)),c.add($),$},A=P(-1),E=P(1),T=new h4;T.add(new u2(this.orbGeo,this.orbMat));let w=new u2(this.haloGeo,this.orbMat);w.rotation.x=Math.PI/2,T.add(w),T.position.set(0,60,0),T.visible=!1,r.add(T);let M=new u2(this.arrowGeo,this.arrowMat);M.rotation.x=Math.PI,M.visible=!1,r.add(M);let L=new u2(this.arrowGeo,this.pickMat);L.rotation.x=Math.PI,L.visible=!1,r.add(L);let D=new u2(this.ringGeo,this.ringMat);D.rotation.x=-Math.PI/2,D.position.y=.5,D.visible=!1,r.add(D);let H=null,I=O3.find(e1=>e1.id===(e.aura||0));I&&(H=new u2(this.auraGeo,I.id===8?this.rainbowMat:this.auraMat(I.hex)),H.rotation.x=-Math.PI/2,H.position.y=.45,r.add(H));let K=[];for(let e1=0;e1<3;e1++){let $=new t0(this.zMat);$.visible=!1,$.scale.set(7,7,1),r.add($),K.push($)}let Z=new u2(this.statusGeo,this.statusMats.on);Z.rotation.x=-Math.PI/2,Z.position.y=.55,Z.scale.set(1.15,1.15,1),r.add(Z);let s1=new t0(this.tagMat);s1.scale.set(25,7,1),s1.visible=!1,s1.renderOrder=9,r.add(s1);let C=new t0(this.iconMats.heart);C.visible=!1,C.renderOrder=10,r.add(C),this.scene.add(r);let J=Math.abs(Math.sin(n))*6;return{emoteSprite:C,emoteKind:"",status:Z,tag:s1,root:r,body:c,head:l,armL:_,armR:b,legL:A,legR:E,face:g,faceMat:u,texOpen:d,texShut:p,shut:!1,blink:0,nextBlink:1+J,yaw:t.dir*.3,sit:0,hop:0,orb:T,arrow:M,pick:L,ring:D,aura:H,zs:K,geos:a,unitsH:54,look:e}}disposeRig(t){this.scene.remove(t.root),t.geos.forEach(e=>e.dispose()),t.texOpen.dispose(),t.texShut.dispose(),t.faceMat.dispose()}animate(t,e,n){let a=n.dt,r=n.t,c=t.state==="snooze",s=t.id===n.selected,o=S0(t.y,this.size.h)*pi;e.root.position.set(t.x,1.5,t.y/ct),e.root.scale.setScalar(o),e.sit+=((c?1:0)-e.sit)*Math.min(1,a*6);let l=e.sit,h=Math.min(1,a*9),d=t.act==="greet"||t.act==="chat",p=c?0:t.act==="dance"?Math.sin(r*3+t.seed)*.55:d?t.dir*.8:t.moving?t.dir*.95:s?0:t.dir*.3;e.yaw+=(p-e.yaw)*h,e.root.rotation.y=n.spin!==void 0?n.spin:e.yaw;let u=t.moving?Math.sin(t.phase):0,v=t.moving?1:0,g=Math.sin(r*2+t.seed)*.5;e.hop+=((s?1:0)-e.hop)*Math.min(1,a*8);let m=t.act==="dance",f=s?Math.abs(Math.sin(r*6))*2.6*e.hop:0,_=Math.sin(r*9+t.seed%3),b=(t.moving?Math.abs(Math.sin(t.phase))*1.5:0)+f+(m?Math.abs(_)*4.5:0)+(t.act==="greet"?Math.abs(Math.sin(r*8))*1.2:0);e.body.position.y=b-9.6*l,e.body.rotation.z=u*.045*v+(m?_*.13:0),e.body.scale.y=1+g*.012*(1-l),e.legL.rotation.x=u*.75*v*(1-l)-1.52*l,e.legR.rotation.x=-u*.75*v*(1-l)-1.52*l,e.legL.rotation.z=-.07*l,e.legR.rotation.z=.07*l;let y=.1;e.armL.rotation.x=-u*.7*v*(1-l)-.55*l,e.armR.rotation.x=u*.7*v*(1-l)-.55*l,e.armL.rotation.z=-y-g*.02,e.armR.rotation.z=y+g*.02;let P=t.act==="chat"&&(Math.floor(r*.7)+(t.seed&1)&1)===0;m?(e.armL.rotation.x=0,e.armR.rotation.x=0,e.armL.rotation.z=-(2.3+_*.45),e.armR.rotation.z=2.3-_*.45,e.legL.rotation.x=_*.5,e.legR.rotation.x=-_*.5):t.act==="chat"&&P&&(e.armR.rotation.x=-.9,e.armR.rotation.z=.7+Math.sin(r*6+t.seed)*.35),(s||t.act==="greet")&&!c&&!m&&(e.armR.rotation.x=0,e.armR.rotation.z=2.55+Math.sin(r*10)*.32);let A=c?.5:t.moving?0:t.act==="chat"?t.dir*.2:Math.sin(r*.7+t.seed)*.12,E=t.act==="chat"?Math.sin(r*(P?7:3.2)+t.seed)*(P?.1:.14):0;e.head.rotation.x+=((c?.5:u*.03*v+E)-e.head.rotation.x)*h,e.head.rotation.y+=(A-e.head.rotation.y)*Math.min(1,a*4),e.head.rotation.z=c?Math.sin(r*1.3+t.seed)*.06+.1:u*.03*v,e.nextBlink-=a,e.nextBlink<=0&&e.blink<=0&&(e.blink=.13,e.nextBlink=2.2+(t.seed>>>3)%40/10+Math.random()*2),e.blink>0&&(e.blink-=a);let T=c||e.blink>0;T!==e.shut&&(e.shut=T,e.faceMat.map=T?e.texShut:e.texOpen,e.faceMat.needsUpdate=!0);let w=l>.5?46:56;e.orb.visible=!1,e.tag.visible=t.playing&&!c,e.tag.visible&&e.tag.position.set(0,w+9+Math.sin(r*2+t.seed)*1.2,0);let M=t.state==="offline"?"away":t.playing?"game":t.state==="away"||t.state==="snooze"?"away":"on";if(e.status.material!==this.statusMats[M]&&(e.status.material=this.statusMats[M]),e.status.visible=!s,e.arrow.visible=t.me,t.me&&(e.arrow.position.set(0,w+(t.playing?20:11)+Math.sin(r*3)*1.6,0),e.arrow.rotation.y=r*2),e.pick.visible=s,s&&(e.pick.position.set(0,w+(t.me?28:t.playing?24:12)+Math.abs(Math.sin(r*5))*4,0),e.pick.rotation.y=r*3),e.aura){let D=1+Math.sin(r*2.4+t.seed)*.04;e.aura.scale.set(D,D,1)}e.ring.visible=s,s&&e.ring.scale.setScalar(1+Math.sin(r*4)*.05);let L=t.act==="chat"?P?"dots":"":c?"":t.emote;if(e.emoteSprite.visible=L!=="",L){L!==e.emoteKind&&(e.emoteKind=L,e.emoteSprite.material=this.iconMats[L]);let D=13+Math.sin(r*7+t.seed)*.8;e.emoteSprite.scale.set(D,D,1),e.emoteSprite.position.set(L==="dots"?7:0,w+15+(t.me?8:0)+(t.playing?6:0)+Math.sin(r*3+t.seed)*1.5,0)}e.zs.forEach((D,H)=>{if(D.visible=c,!c)return;let I=(r*.55+H/3+t.seed%7/7)%1;D.position.set(8+I*6+H*1.2,40+I*20,4),D.material.opacity=1;let K=4+I*4.5;D.scale.set(K,K,1)})}setStore(t){if(this.storeGroup.children.slice().forEach(o=>{this.storeGroup.remove(o);let l=o;l.geometry.dispose(),l.material.dispose()}),this.storeCoin=null,!t)return;let e=t.x,n=t.y/ct,a=[k(new i4(170,66,50),"#4a7ea6",U(e,33,n)),k(new i4(174,7,54),"#9fd8ff",U(e,3.5,n)),k(new i4(180,9,60),"#2f5878",U(e,70.5,n)),k(new i4(46,1.2,18),"#8fa6bb",U(e,.6,n+38)),k(new i4(30,44,2),"#16222e",U(e,22,n+25.5)),k(new i4(34,48,1.5),"#9fd8ff",U(e,24,n+25))];for(let o=0;o<6;o++)a.push(k(new i4(30,2.8,26),o%2?"#ffffff":"#e5484d",U(e-75+o*30,56,n+38,1,1,1,.42)));let r=new u2(a0(a),this.charMat),c=new u2(a0([k(new i4(34,24,1.5),"#ffe9a8",U(e-54,36,n+25.8)),k(new i4(34,24,1.5),"#ffe9a8",U(e+54,36,n+25.8))]),new Y2({vertexColors:!0})),s=new u2(new c2(12,12,3.4,28),new p3({color:16764736,emissive:8018432,roughness:.3,metalness:.4}));s.rotation.x=Math.PI/2,s.position.set(e,88,n+6),this.storeCoin=s,this.storeGroup.add(r,c,s)}setZones(t){this.zoneGroup.children.slice().forEach(e=>{this.zoneGroup.remove(e);let n=e;n.geometry.dispose(),n.material.dispose()}),this.zoneLive=[];for(let e of t){let n=e.x,a=e.y/ct,r=(d,p=55)=>new t2("hsl("+e.hue+","+p+"%,"+d+"%)"),c=new u2(new c2(e.r,e.r*1.03,1.5,56),new Y2({color:r(20,40)}));c.position.set(n,.75,a);let s=new u2(new B3(e.r*.5,e.r*.54,56),new Y2({color:r(46,60),transparent:!0,opacity:.45}));s.rotation.x=-Math.PI/2,s.position.set(n,1.6,a);let o=new u2(new B2(e.r,1.3,8,64),new Y2({color:r(e.live?55:38,70)}));o.rotation.x=Math.PI/2,o.position.set(n,1.5,a);let l=new Y2({color:r(60,95),transparent:!0,opacity:e.live?.5:0,depthWrite:!1,side:K2}),h=new u2(new B3(e.r*1.05,e.r*1.16,64),l);h.rotation.x=-Math.PI/2,h.position.set(n,.4,a),this.zoneGroup.add(c,s,o,h),this.zoneLive.push({mat:l,phase:e.x,live:e.live})}}bubbleY(t){return t.y-82*ui*S0(t.y,this.size.h)*pi}frame(t,e){this.rainbowMat.color.setHSL(e.t*.25%1,1,.6),this.updateDaylight(),this.storeCoin&&(this.storeCoin.rotation.z+=e.dt*1.6);for(let l of this.zoneLive)l.live&&(l.mat.opacity=.35+Math.sin(e.t*3+l.phase)*.2);let n=new Set,a=this.camera,r=a.left-70,c=a.right+70,s=-a.top-150,o=-a.bottom+60;for(let l of t){n.add(l.id);let h=this.rigs.get(l.id);h&&h.look!==l.look&&(this.disposeRig(h),h=void 0);let d=l.x>=r&&l.x<=c&&l.y>=s&&l.y<=o;if(!h){if(!d)continue;h=this.makeRig(l),this.rigs.set(l.id,h)}h.root.visible=d,d&&this.animate(l,h,e)}for(let[l,h]of Array.from(this.rigs.entries()))n.has(l)||(this.disposeRig(h),this.rigs.delete(l));this.renderer.render(this.scene,this.camera)}dispose(){this.rigs.forEach(t=>this.disposeRig(t)),this.rigs.clear(),this.props.forEach(t=>t.geometry.dispose()),this.floor&&this.floor.geometry.dispose(),this.floorTex.dispose(),this.renderer.dispose()}};var f3="/friend-plaza-game",zi=`
.gm-root{position:relative;margin-top:40px;height:calc(100% - 40px);box-sizing:border-box;padding:18px 32px 78px;background:radial-gradient(1100px 680px at 50% 40%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;font-size:14px;display:flex;flex-direction:column;overflow:hidden}
.gm-top{display:flex;align-items:center;gap:16px}
.gm-title{font-size:26px;font-weight:800;color:#fff}
.gm-vs{padding:5px 12px;border-radius:3px;background:rgba(102,192,244,.16);color:#66c0f4;font-weight:700;font-size:13px}
.gm-pts{margin-left:auto;padding:5px 12px;border-radius:3px;background:rgba(144,186,60,.18);color:#90ba3c;font-weight:800;font-size:13px}
.gm-status{margin:10px 0 8px;font-size:18px;font-weight:800;color:#dfe6ec}
.gm-status.you{color:#90ba3c}.gm-status.lose{color:#e0b44f}
.gm-main{flex:1 1 0;display:flex;align-items:center;justify-content:center;gap:40px;min-height:0;padding:0 190px;overflow:hidden}
.gm-board{display:grid;gap:8px;padding:12px;background:rgba(255,255,255,.05);border-radius:4px;box-shadow:0 0 0 1px rgba(102,192,244,.25)}
.gm-cell{margin:0;width:104px;height:104px;border-radius:3px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:64px;font-weight:800;box-sizing:border-box}
.gm-cell.fp-focus{background:#fff;box-shadow:0 0 18px rgba(102,192,244,.7)}
.gm-x{color:#66c0f4}.gm-o{color:#90ba3c}
.gm-cell.fp-focus .gm-x,.gm-cell.fp-focus .gm-o{filter:brightness(.7)}
.gm-c4{display:grid;grid-template-columns:repeat(7,64px);gap:6px;padding:12px;background:#1f4e86;border-radius:6px;box-shadow:0 0 0 2px #2f6db5,0 14px 30px rgba(0,0,0,.5)}
.gm-col{margin:0;display:flex;flex-direction:column;gap:6px;padding:3px;border-radius:6px;box-sizing:border-box}
.gm-col.fp-focus{background:rgba(255,255,255,.9)}
.gm-disc{width:58px;height:58px;border-radius:50%;background:#0b1017;box-shadow:inset 0 3px 8px rgba(0,0,0,.6)}
.gm-disc.R{background:radial-gradient(circle at 35% 30%,#ff8a8a,#d63838)}
.gm-disc.Y{background:radial-gradient(circle at 35% 30%,#ffe58a,#e0a82f)}
.gm-rps{display:flex;gap:18px}
.gm-pick{margin:0;width:170px;height:190px;border-radius:4px;background:rgba(255,255,255,.08);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font-size:18px;font-weight:800;color:#fff;box-sizing:border-box}
.gm-pick.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 22px rgba(102,192,244,.7)}
.gm-pick.mine{box-shadow:0 0 0 3px #66c0f4}
.gm-score{font-size:46px;font-weight:800;color:#fff;letter-spacing:2px;margin-bottom:6px}
.gm-hist{display:flex;flex-direction:column;gap:4px;font-size:13px;color:#8f98a0;min-width:200px}
.gm-hist b{color:#dfe6ec}
.gm-foot{flex:none;display:flex;gap:10px;justify-content:center;padding:8px 0 4px;position:relative;z-index:3}
.gm-btn{margin:0;padding:10px 24px;border-radius:3px;background:rgba(255,255,255,.1);color:#dfe6ec;font-weight:700}
.gm-btn.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 16px rgba(102,192,244,.6)}
.gm-inner{display:flex;flex-direction:column;flex:1;min-height:0;position:relative;z-index:1}
.gm-canvas{position:absolute;left:0;top:0;width:100%;height:100%;z-index:0;pointer-events:none}
.gm-root > .gm-inner{position:relative;z-index:1}
.gm-who{position:absolute !important;bottom:6px;z-index:2;width:240px;text-align:center;pointer-events:none}
.gm-who b{display:block;font-size:17px;font-weight:800;color:#fff}
.gm-who span{display:inline-block;margin-top:3px;padding:2px 10px;border-radius:3px;background:rgba(102,192,244,.18);color:#66c0f4;font-size:12px;font-weight:800}
.gm-who span.turn{background:#66c0f4;color:#06121c}
.gm-who span.win{background:#90ba3c;color:#0c1a05}
.gm-hand{display:flex;gap:8px;align-items:center;min-height:96px}
.gm-card21{width:64px;height:92px;border-radius:4px;background:#f4f6f8;color:#14202c;box-shadow:0 4px 10px rgba(0,0,0,.5);display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:6px;box-sizing:border-box;font-weight:800;font-size:20px}
.gm-card21.red{color:#d03a3a}
.gm-bj{display:flex;flex-direction:column;gap:10px;align-items:center}
.gm-total{font-size:15px;font-weight:800;color:#dfe6ec;min-width:120px;text-align:center}
.gm-total.bust{color:#e0b44f}
.gm-act{display:flex;gap:14px}
.gm-big{margin:0;width:150px;height:56px;border-radius:3px;background:rgba(255,255,255,.1);color:#fff;font-size:20px;font-weight:800;display:flex;align-items:center;justify-content:center;box-sizing:border-box}
.gm-big.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 22px rgba(102,192,244,.7)}
.gm-card{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:420px;padding:22px 26px;text-align:center;background:linear-gradient(#2d4a62,#1b2838);border-radius:4px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);z-index:5}
.gm-card h2{margin:0 0 6px;font-size:26px;color:#fff}
`,K5={r:"Rock",p:"Paper",s:"Scissors","?":"Picked"};function Ql({k:i}){let t="currentColor";return i==="r"?window.SP_REACT.createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64"},window.SP_REACT.createElement("path",{d:"M14 40 L20 20 L36 12 L52 22 L54 42 L40 54 L22 52 Z",fill:t})):i==="p"?window.SP_REACT.createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64"},window.SP_REACT.createElement("path",{d:"M14 10 H44 L52 18 V54 H14 Z",fill:t}),window.SP_REACT.createElement("path",{d:"M22 26 H44 M22 34 H44 M22 42 H38",stroke:"#14202c",strokeWidth:"3",fill:"none"})):window.SP_REACT.createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64"},window.SP_REACT.createElement("path",{d:"M16 12 L36 36 M48 12 L28 36",stroke:t,strokeWidth:"7",strokeLinecap:"round"}),window.SP_REACT.createElement("circle",{cx:"22",cy:"48",r:"9",fill:"none",stroke:t,strokeWidth:"6"}),window.SP_REACT.createElement("circle",{cx:"42",cy:"48",r:"9",fill:"none",stroke:t,strokeWidth:"6"}))}var th=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];function eh({n:i}){let e=i===1||i===2?"#d03a3a":"#14202c";return i===1?window.SP_REACT.createElement("svg",{width:"26",height:"26",viewBox:"0 0 24 24"},window.SP_REACT.createElement("path",{d:"M12 21 C-3 10 4 -1 12 7 C20 -1 27 10 12 21Z",fill:e})):i===2?window.SP_REACT.createElement("svg",{width:"26",height:"26",viewBox:"0 0 24 24"},window.SP_REACT.createElement("path",{d:"M12 1 L22 12 L12 23 L2 12Z",fill:e})):i===0?window.SP_REACT.createElement("svg",{width:"26",height:"26",viewBox:"0 0 24 24"},window.SP_REACT.createElement("path",{d:"M12 1 C-4 12 3 21 11 15.5 L9 23 H15 L13 15.5 C21 21 28 12 12 1Z",fill:e})):window.SP_REACT.createElement("svg",{width:"26",height:"26",viewBox:"0 0 24 24"},window.SP_REACT.createElement("circle",{cx:"12",cy:"7",r:"5.5",fill:e}),window.SP_REACT.createElement("circle",{cx:"6.5",cy:"14",r:"5.5",fill:e}),window.SP_REACT.createElement("circle",{cx:"17.5",cy:"14",r:"5.5",fill:e}),window.SP_REACT.createElement("path",{d:"M10 15 H14 L15 23 H9Z",fill:e}))}function yi({c:i}){let t=Math.floor(i/13);return window.SP_REACT.createElement("div",{className:"gm-card21"+(t===1||t===2?" red":"")},window.SP_REACT.createElement("span",null,th[i%13]),window.SP_REACT.createElement(eh,{n:t}))}function r0(i){let t=0,e=0;for(let n of i){let a=n%13;a===0?(e++,t+=11):t+=a>=9?10:a+1}for(;t>21&&e;)t-=10,e--;return t}function wi(){b4();let[i,t]=F1(""),[e,n]=F1(!1),a=V1(!0),r=V1(null),c=V1(null),s=V1({a:null,b:null}),o=V1({meNeeds:!1,oppNeeds:!1,winner:"",done:!1,me:"",other:""}),l=V1({a:"",b:""}),h=X.openGame,d=X.games.find($=>$.id===h),p=!!d;o2(()=>{a.current=!0;let $=null,i1=0,C1=async()=>{let a1=await T1.serverSync([]);a.current&&a1.ok&&m4(a1),i1=Date.now()},j=async()=>{try{if(!X.meId){let d1=await T1.serverState();X.meId=d1.steamid}let a1=X.games.find(d1=>d1.id===X.openGame);if(!a1||Date.now()-i1>3e4)await C1();else{let d1=await T1.gamePoll(a1.id,a1.sig||"");if(!a.current)return;d1.ok&&d1.gone?await C1():d1.ok&&d1.changed&&d1.match&&(X.games=X.games.map(h1=>h1.id===a1.id?d1.match:h1),S2(),d1.match.status==="done"&&await C1())}}catch{}a.current&&($=setTimeout(j,A7(X.games.find(a1=>a1.id===X.openGame),X.meId,typeof document<"u"&&document.hidden)))};return j(),()=>{a.current=!1,$&&clearTimeout($)}},[]),o2(()=>{let $=c.current,i1=r.current;if(!$||!i1)return;let C1=null;try{C1=new J4($,!0)}catch{C1=null}if(!C1)return;let j=C1,a1=(U1,p2)=>M3({steamid:U1,name:p2,state:"online",playing:!1},!1,0,0),d1=0,h1=performance.now(),B1=0,Z1=U1=>{d1=requestAnimationFrame(Z1);let p2=Math.min(.1,(U1-h1)/1e3);h1=U1,B1+=p2;let J1=i1.clientWidth||1280,O1=i1.clientHeight||720,V=o.current;if(!V.me)return;let V2=(x,O)=>{let Q=O?X.me.figure:X.friends.get(x)?.figure||null;return Q?{...Q}:Z4(x)},I1=s.current;(!I1.a||l.current.a!==V.me)&&(I1.a=a1(V.me,"You"),I1.a.look=V2(V.me,!0),l.current.a=V.me),(!I1.b||l.current.b!==V.other)&&(I1.b=a1(V.other,"Friend"),I1.b.look=V2(V.other,!1),l.current.b=V.other);let G1=3.6,P1=J1/G1,m2=O1/G1,R1=(J1-P1)/2,S=O1*.4;j.resize(J1,O1),$.style.width="100%",$.style.height="100%",j.setDetail(2),j.setView(R1,S,P1,m2),I1.a.x=R1+J1*.115/G1,I1.b.x=R1+J1*.885/G1,I1.a.y=I1.b.y=S+O1*.8/G1,I1.a.dir=1,I1.b.dir=-1;for(let[x,O]of[[I1.a,!0],[I1.b,!1]]){x.me=!V.done&&(O?V.meNeeds:V.oppNeeds);let Q=V.done&&V.winner===(O?V.me:V.other),r1=V.done&&V.winner==="draw";x.act=Q?"dance":r1?"greet":"",x.actT=99,x.emote=Q?"note":r1?"heart":"",x.partner=null,x.state="online"}j.frame([I1.a,I1.b],{selected:null,t:B1,dt:p2,low:!1})};return d1=requestAnimationFrame(Z1),()=>{cancelAnimationFrame(d1),j.dispose()}},[p]);let u=()=>n2.NavigateBack(),v=X.meId,g=d?d.p1===v?0:1:0,m=d?g===0?d.p2:d.p1:"",f=X.names.get(m)||"Friend",_=async $=>{if(!(!d||e)){n(!0),t("");try{let i1=await T1.gameMove(d.id,$);i1.ok?i1.match&&(X.games=X.games.map(C1=>C1.id===d.id?i1.match:C1),S2()):t(i1.message||"That didn't work.")}catch(i1){t(i1 instanceof Error?i1.message:String(i1))}n(!1)}},b=async()=>{if(!d)return u();try{await T1.gameCancel(d.id)}catch{}u()};if(!d)return window.SP_REACT.createElement("div",{className:"gm-root"},window.SP_REACT.createElement("style",null,zi),window.SP_REACT.createElement("div",{className:"gm-top"},window.SP_REACT.createElement("div",{className:"gm-title"},"Game")),window.SP_REACT.createElement("div",{className:"gm-status"},"That game is gone."),window.SP_REACT.createElement("div",{className:"gm-foot"},window.SP_REACT.createElement(r2,{className:"gm-btn",focusClassName:"fp-focus",onActivate:u,onClick:u},"Back")));let y=d.state.result,P=d.status==="done",A=d.kind==="rps"||d.kind==="bj",E=d.state.hands||[[],[]],T=d.state.stood||[!1,!1],w=d.kind==="rps"?d.state.picks?d.state.picks[g]===null:!1:d.kind==="bj"?!T[g]:d.turn===v,M=d.kind==="rps"?d.state.picks?d.state.picks[1-g]===null:!1:d.kind==="bj"?!T[1-g]:d.turn===m,L="",D="";if(P&&y){y.winner==="draw"?L="It's a draw":y.winner===v?(L="You won!",D="you"):(L=f+" won",D="lose");let $=y.points[v]||0;y.capped?L+=" (no points: you have played each other a lot today)":$&&(L+=" - +"+$+" points")}else d.status==="invite"?L="Waiting for "+f+" to accept...":d.kind==="rps"?L=w?"Pick one!":"Waiting for "+f+"...":d.kind==="bj"?L=w?"Hit or stand?":T[1-g]?"Settling the hand...":"You stand. Waiting for "+f+"...":L=w?"Your turn":f+" is thinking...";o.current={meNeeds:d.status==="active"&&w,oppNeeds:d.status==="active"&&M,winner:P&&y?y.winner:"",done:P,me:v,other:m};let H=d.state.board||"",I=d.state.history||[],K=d.state.history||[],Z=d.state.score||[0,0],s1=$=>P&&y?y.winner==="draw"?{text:"Draw",cls:""}:y.winner===($?v:m)?{text:"Winner",cls:"win"}:{text:"",cls:""}:($?w:M)?{text:A?$?"Your move":"Deciding":$?"Your turn":"Their turn",cls:"turn"}:{text:A?"Ready":"",cls:""},C=s1(!0),J=s1(!1),e1=d.state.last;return window.SP_REACT.createElement("div",{ref:r,className:"gm-root"},window.SP_REACT.createElement("style",null,zi),window.SP_REACT.createElement("canvas",{ref:c,className:"gm-canvas"}),window.SP_REACT.createElement(r2,{className:"gm-inner",onCancel:u},window.SP_REACT.createElement("div",{className:"gm-top"},window.SP_REACT.createElement("div",{className:"gm-title"},B4(d.kind)),window.SP_REACT.createElement("span",{className:"gm-vs"},"vs ",f),window.SP_REACT.createElement("span",{className:"gm-pts"},X.me.points," points")),window.SP_REACT.createElement("div",{className:"gm-status "+D},L,i?" - "+i:""),window.SP_REACT.createElement("div",{className:"gm-who",style:{left:"1.5%"}},window.SP_REACT.createElement("b",null,"You"),C.text?window.SP_REACT.createElement("span",{className:C.cls},C.text):null),window.SP_REACT.createElement("div",{className:"gm-who",style:{right:"1.5%"}},window.SP_REACT.createElement("b",null,f),J.text?window.SP_REACT.createElement("span",{className:J.cls},J.text):null),window.SP_REACT.createElement("div",{className:"gm-main"},d.kind==="ttt"&&window.SP_REACT.createElement("div",{className:"gm-board",style:{gridTemplateColumns:"repeat(3, 104px)"}},H.split("").map(($,i1)=>{let C1=()=>{d.status==="active"&&w&&$==="."&&_({cell:i1})};return window.SP_REACT.createElement(r2,{key:i1,className:"gm-cell",focusClassName:"fp-focus",onActivate:C1,onClick:C1,autoFocus:i1===4},$==="X"?window.SP_REACT.createElement("span",{className:"gm-x"},"X"):$==="O"?window.SP_REACT.createElement("span",{className:"gm-o"},"O"):null)})),d.kind==="c4"&&window.SP_REACT.createElement("div",{className:"gm-c4"},[0,1,2,3,4,5,6].map($=>{let i1=()=>{d.status==="active"&&w&&_({col:$})};return window.SP_REACT.createElement(r2,{key:$,className:"gm-col",focusClassName:"fp-focus",onActivate:i1,onClick:i1,autoFocus:$===3},[0,1,2,3,4,5].map(C1=>window.SP_REACT.createElement("div",{key:C1,className:"gm-disc "+(H[C1*7+$]||".")})))})),d.kind==="rps"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("div",null,window.SP_REACT.createElement("div",{className:"gm-score"},Z[g]," - ",Z[1-g]),window.SP_REACT.createElement("div",{className:"gm-rps"},["r","p","s"].map(($,i1)=>{let C1=d.state.picks?d.state.picks[g]===$:!1,j=()=>{d.status==="active"&&w&&_({pick:$})};return window.SP_REACT.createElement(r2,{key:$,className:"gm-pick"+(C1?" mine":""),focusClassName:"fp-focus",onActivate:j,onClick:j,autoFocus:i1===0},window.SP_REACT.createElement(Ql,{k:$}),K5[$])}))),window.SP_REACT.createElement("div",{className:"gm-hist"},window.SP_REACT.createElement("b",null,"Rounds (you - ",f,")"),I.length===0?window.SP_REACT.createElement("span",null,"None yet. First to 2 wins."):I.map(($,i1)=>window.SP_REACT.createElement("span",{key:i1},i1+1,". ",K5[$[g]]," - ",K5[$[1-g]])),d.state.picks&&d.state.picks[1-g]==="?"?window.SP_REACT.createElement("span",null,f," has picked."):null)),d.kind==="bj"&&window.SP_REACT.createElement("div",{className:"gm-bj"},window.SP_REACT.createElement("div",{className:"gm-score"},Z[g]," - ",Z[1-g]),window.SP_REACT.createElement("div",{className:"gm-hand"},E[1-g].map(($,i1)=>window.SP_REACT.createElement(yi,{key:i1,c:$})),window.SP_REACT.createElement("div",{className:"gm-total"+(r0(E[1-g])>21?" bust":"")},f,": ",r0(E[1-g]),r0(E[1-g])>21?" (bust)":T[1-g]?" (stands)":"")),window.SP_REACT.createElement("div",{className:"gm-hand"},E[g].map(($,i1)=>window.SP_REACT.createElement(yi,{key:i1,c:$})),window.SP_REACT.createElement("div",{className:"gm-total"+(r0(E[g])>21?" bust":"")},"You: ",r0(E[g]),r0(E[g])>21?" (bust)":T[g]?" (stand)":"")),window.SP_REACT.createElement("div",{className:"gm-act"},window.SP_REACT.createElement(r2,{className:"gm-big",focusClassName:"fp-focus",autoFocus:!0,onActivate:()=>{d.status==="active"&&w&&_({act:"hit"})},onClick:()=>{d.status==="active"&&w&&_({act:"hit"})}},"Hit"),window.SP_REACT.createElement(r2,{className:"gm-big",focusClassName:"fp-focus",onActivate:()=>{d.status==="active"&&w&&_({act:"stand"})},onClick:()=>{d.status==="active"&&w&&_({act:"stand"})}},"Stand")),window.SP_REACT.createElement("div",{className:"gm-hist",style:{textAlign:"center"}},e1?window.SP_REACT.createElement("span",null,"Last hand: you ",e1.totals[g],", ",f," ",e1.totals[1-g]," - ",e1.winner==="draw"?"push":e1.winner===g?"you won it":f+" won it"):window.SP_REACT.createElement("span",null,"First to win 2 hands. 21 with two cards beats any other 21."),K.length>0?window.SP_REACT.createElement("span",null,"Hands played: ",K.length):null))),window.SP_REACT.createElement("div",{className:"gm-foot"},!P&&d.status==="active"&&window.SP_REACT.createElement(r2,{className:"gm-btn",focusClassName:"fp-focus",onActivate:b,onClick:b},"Give up"),window.SP_REACT.createElement(r2,{className:"gm-btn",focusClassName:"fp-focus",onActivate:u,onClick:u},"Back to the plaza"))))}var pe="/friend-plaza-store",fe=pe,nh=[{key:"hairStyle",label:"Hair style",kind:"num",n:9},{key:"hair",label:"Hair color",kind:"pal",pal:x3},{key:"skin",label:"Skin",kind:"pal",pal:Mt},{key:"eyes",label:"Eyes",kind:"num",n:5},{key:"brows",label:"Eyebrows",kind:"num",n:4},{key:"mouth",label:"Mouth",kind:"num",n:5},{key:"head",label:"Head size",kind:"head"},{key:"glasses",label:"Glasses",kind:"bool"},{key:"stache",label:"Moustache",kind:"bool"},{key:"blush",label:"Blush",kind:"bool"},{key:"shirt",label:"Shirt",kind:"pal",pal:zt},{key:"pants",label:"Pants",kind:"pal",pal:yt},{key:"shoes",label:"Shoes",kind:"pal",pal:wt},{key:"hat",label:"Hat",kind:"hat"},{key:"acc",label:"Accessory",kind:"acc"},{key:"tee",label:"Graphic tee",kind:"own",base:300,names:mt},{key:"flag",label:"Flag",kind:"own",base:400,names:vt},{key:"face",label:"Face paint",kind:"own",base:500,names:z0},{key:"kicks",label:"Shoe style",kind:"own",base:600,names:y0},{key:"aura",label:"Aura",kind:"own",base:700,names:O3}],J5=[{kind:"tee",label:"Tees",key:"tee",base:300},{kind:"flag",label:"Flags",key:"flag",base:400},{kind:"hat",label:"Hats",key:"hat",base:0},{kind:"acc",label:"Gear",key:"acc",base:100},{kind:"hair",label:"Hair",key:"hair",base:0},{kind:"face",label:"Face",key:"face",base:500},{kind:"kicks",label:"Shoes",key:"kicks",base:600},{kind:"aura",label:"Auras",key:"aura",base:700}],c0=[.94,.97,1,1.03,1.06],_i=`
.me-root{position:relative;margin-top:40px;height:calc(100% - 40px);display:flex;gap:26px;padding:18px 32px 78px;box-sizing:border-box;background:radial-gradient(1100px 680px at 50% 46%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-size:14px;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;overflow:hidden}
.me-prev{flex:none;width:420px;display:flex;flex-direction:column;gap:10px}
.me-prev canvas{width:420px;height:470px;border-radius:4px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.35);background:#0b1017}
.me-note{font-size:12.5px;color:#8f98a0;line-height:1.4}
.me-side{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.me-h{font-size:26px;font-weight:800;color:#fff;display:flex;align-items:center;gap:14px}
.me-pts{padding:4px 12px;border-radius:3px;background:rgba(144,186,60,.18);color:#90ba3c;font-size:13px;font-weight:800}
.me-tabs{display:flex;gap:8px}
.me-tab{margin:0 !important;flex:1;height:40px !important;min-width:0 !important;padding:0 !important;display:flex !important;align-items:center;justify-content:center;border-radius:3px !important;background:rgba(255,255,255,.08) !important;color:#c6d4df !important;font-weight:800 !important;font-size:15px !important}
.me-tab.on{background:rgba(102,192,244,.25) !important;color:#fff !important;box-shadow:inset 0 -3px 0 #66c0f4}
.me-sec{font-weight:800;color:#8f98a0;font-size:12px;padding:8px 4px 0;text-transform:uppercase;letter-spacing:.5px}
.me-item{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.05);border-radius:3px;padding:9px 12px;box-sizing:border-box;margin:0}
.me-item.fp-focus{background:#fff;box-shadow:0 0 16px rgba(102,192,244,.5)}
.me-item .nm{flex:1;font-weight:700;color:#dfe6ec}
.me-item .pr{font-weight:800;color:#90ba3c}
.me-item.fp-focus .nm{color:#0e141b}.me-item.fp-focus .pr{color:#2c4a05}
.me-item .own{font-weight:800;color:#66c0f4}
.me-list{flex:1;overflow-y:auto;padding:4px 6px 4px 2px;display:flex;flex-direction:column;gap:6px}
.me-row{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.05);border-radius:3px;padding:7px 12px}
.me-lab{flex:1;font-weight:700;color:#dfe6ec}
.me-val{width:130px;text-align:center;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;color:#fff}
.me-sw{width:26px;height:26px;border-radius:3px;box-shadow:0 0 0 2px rgba(255,255,255,.35);display:inline-block}
.me-btn{margin:0 !important;min-width:0 !important;width:52px !important;height:38px !important;padding:0 !important;display:flex !important;align-items:center;justify-content:center;font-size:20px !important;font-weight:800;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important}
.me-cats{display:flex;flex-wrap:wrap;gap:6px}
.me-cat{margin:0 !important;min-width:0 !important;width:auto !important;flex:1 1 22% !important;height:36px !important;padding:0 6px !important;display:flex !important;align-items:center;justify-content:center;gap:6px;border-radius:3px !important;background:rgba(255,255,255,.08) !important;color:#c6d4df !important;font-weight:800 !important;font-size:13px !important}
.me-cat.on{background:rgba(102,192,244,.28) !important;color:#fff !important;box-shadow:inset 0 -3px 0 #66c0f4}
.me-cat .ct{font-size:11px;color:#8f98a0;font-weight:700}
.me-foot{display:flex;gap:10px}
.me-foot > *{margin:0 !important;flex:1;height:44px !important;min-width:0 !important;padding:0 6px !important;font-size:14px !important;font-weight:700;display:flex !important;align-items:center;justify-content:center;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important}
.me-foot .go{background:#66c0f4 !important;color:#06121c !important}
`;function s0(i){return i[Math.floor(Math.random()*i.length)]}function bi(){let i=V1(null),[t,e]=F1(null),[n,a]=F1(null),[r,c]=F1(""),[s,o]=F1("char"),[l,h]=F1("tee"),[d,p]=F1(null);b4();let u=V1(null);u.current=t;let v=V1(null),g=l7(()=>t&&d?{...t,...d}:null,[t,d]);v.current=g;let m=X.me.items,f=t!==null;if(o2(()=>{let C=!0;return(async()=>{let J="";try{J=(await T1.getState()).steamid}catch{}try{let i1=await T1.serverSync([]);i1.ok&&m4(i1)}catch{}let e1=X.me.figure;try{e1=(await T1.serverState()).figure||e1}catch{}let $=Z4(J||"76561197960265728");C&&(a($),e(e1||$))})(),()=>{C=!1}},[]),o2(()=>{let C=i.current;if(!C)return;let J=null;try{J=new J4(C,!0)}catch{J=null}if(!J){c("3D could not start here, so there is no preview. You can still pick the options.");return}J.resize(420,470),J.setZoom(5.5);let e1=M3({steamid:"76561197960265728",name:"me",state:"online",playing:!1},!1,210,290);e1.x=210,e1.y=268,e1.dir=1;let $=0,i1=performance.now(),C1=0,j=a1=>{$=requestAnimationFrame(j);let d1=Math.min(.1,(a1-i1)/1e3);i1=a1,C1+=d1,u.current&&(e1.look=v.current||u.current),J.frame([e1],{selected:null,t:C1,dt:d1,low:!1,spin:Math.sin(C1*.8)*.8})};return $=requestAnimationFrame(j),()=>{cancelAnimationFrame($),J.dispose()}},[f]),!t)return window.SP_REACT.createElement("div",{className:"me-root"},window.SP_REACT.createElement("style",null,_i),window.SP_REACT.createElement("div",{className:"me-h"},"Loading..."));let _=[0,...gt.filter(C=>m.includes(C.id)).map(C=>C.id)],b=[0,...c6.map((C,J)=>J).filter(C=>C>0&&m.includes(100+C))],y=C=>[0,...(C.names||[]).map(J=>J.id).filter(J=>m.includes((C.base||0)+J))],P=[...x3,...w0.filter(C=>m.includes(C.id)).map(C=>C.hex)],A=(C,J)=>{let e1={...t},$=(i1,C1)=>(i1%C1+C1)%C1;if(C.kind==="pal"&&C.pal){let i1=C.key==="hair"?P:C.pal,C1=Math.max(0,i1.indexOf(String(t[C.key])));e1[C.key]=i1[$(C1+J,i1.length)]}else if(C.kind==="num"&&C.n)e1[C.key]=$(Number(t[C.key])+J,C.n);else if(C.kind==="bool")e1[C.key]=!t[C.key];else if(C.kind==="head"){let i1=0;c0.forEach((C1,j)=>{Math.abs(C1-t.head)<Math.abs(c0[i1]-t.head)&&(i1=j)}),e1.head=c0[$(i1+J,c0.length)]}else if(C.kind==="hat"){let i1=Math.max(0,_.indexOf(t.hat));e1.hat=_[$(i1+J,_.length)]}else if(C.kind==="acc"){let i1=Math.max(0,b.indexOf(t.acc));e1.acc=b[$(i1+J,b.length)]}else if(C.kind==="own"&&C.base!==void 0){let i1=y(C),C1=Math.max(0,i1.indexOf(Number(t[C.key])||0));e1[C.key]=i1[$(C1+J,i1.length)]}e(e1)},E=C=>{if(C.kind==="pal")return window.SP_REACT.createElement("span",{className:"me-sw",style:{background:String(t[C.key])}});if(C.kind==="num")return window.SP_REACT.createElement("span",null,Number(t[C.key])+1," / ",C.n);if(C.kind==="bool")return window.SP_REACT.createElement("span",null,t[C.key]?"On":"Off");if(C.kind==="head")return window.SP_REACT.createElement("span",null,c0.findIndex(J=>Math.abs(J-t.head)<.015)+1||3," / 5");if(C.kind==="acc")return window.SP_REACT.createElement("span",null,C7(t.acc));if(C.kind==="own"){let J=Number(t[C.key])||0;return window.SP_REACT.createElement("span",null,J?(C.names||[]).find(e1=>e1.id===J)?.name||"?":"None")}return window.SP_REACT.createElement("span",null,R4(t.hat))},T=()=>e({skin:s0(Mt),hair:s0(x3),hairStyle:Math.floor(Math.random()*9),shirt:s0(zt),pants:s0(yt),shoes:s0(wt),eyes:Math.floor(Math.random()*5),brows:Math.floor(Math.random()*4),mouth:Math.floor(Math.random()*5),glasses:Math.random()<.2,stache:Math.random()<.12,blush:Math.random()<.5,head:s0(c0),hat:t.hat,acc:t.acc,tee:t.tee,flag:t.flag,face:t.face,kicks:t.kicks,aura:t.aura}),w=async()=>{c("Saving...");try{let C=await T1.serverSaveFigure(t);if(!C.ok){c(C.message||"Could not save.");return}X.me.figure=t,S2(),n2.NavigateBack()}catch(C){c(C instanceof Error?C.message:String(C))}},M=()=>n2.NavigateBack(),L=C=>J5.find(J=>J.kind===C.kind)||J5[0],D=C=>C.kind==="hair"?{hair:(w0.find(J=>J.id===C.id)||w0[0]).hex}:{[L(C).key]:C.id-L(C).base},H=C=>{let J=D(C),e1=Object.keys(J)[0];return t[e1]===J[e1]},I=C=>C.kind==="hair"?{hair:n?n.hair:x3[0]}:{[L(C).key]:0},K=async C=>{if(m.includes(C.id)){H(C)?e({...t,...I(C)}):e({...t,...D(C)});return}if(!X.signedIn){c("Sign in with Steam in the Friend Plaza panel to buy things.");return}if(X.me.points<C.price){c("You need "+(C.price-X.me.points)+" more points. Win games against friends to earn them.");return}c("Buying...");try{let J=await T1.shopBuy(C.id);if(!J.ok){c(J.message||"Could not buy that.");return}typeof J.points=="number"&&(X.me.points=J.points),J.items&&(X.me.items=J.items),S2(),e({...t,...D(C)}),c("Bought "+C.name+" and put it on. Press Save to keep it.")}catch(J){c(J instanceof Error?J.message:String(J))}},Z=s6.filter(C=>C.kind===l),s1=C=>s6.filter(J=>J.kind===C&&m.includes(J.id)).length;return window.SP_REACT.createElement(r2,{className:"me-root",onCancel:M},window.SP_REACT.createElement("style",null,_i),window.SP_REACT.createElement("div",{className:"me-prev"},window.SP_REACT.createElement("canvas",{ref:i,width:420,height:470}),window.SP_REACT.createElement("div",{className:"me-note"},r||(s==="shop"?"Focus an item to try it on. Press A to buy it, then Save.":X.signedIn?"Your friends who use Friend Plaza will see this character.":"Sign in with Steam in the Friend Plaza panel so others can see this character."))),window.SP_REACT.createElement("div",{className:"me-side"},window.SP_REACT.createElement("div",{className:"me-h"},"Friend Store ",window.SP_REACT.createElement("span",{className:"me-pts"},X.me.points," points")),window.SP_REACT.createElement("div",{className:"me-tabs"},window.SP_REACT.createElement(M2,{className:"me-tab"+(s==="char"?" on":""),onClick:()=>{o("char"),p(null)}},"Character"),window.SP_REACT.createElement(M2,{className:"me-tab"+(s==="shop"?" on":""),onClick:()=>o("shop")},"Shop")),window.SP_REACT.createElement("div",{className:"me-list"},s==="char"&&nh.map(C=>window.SP_REACT.createElement("div",{key:C.key,className:"me-row"},window.SP_REACT.createElement("div",{className:"me-lab"},C.label,C.kind==="hat"&&_.length===1?" (earn or buy hats)":C.kind==="acc"&&b.length===1?" (buy in the Shop tab)":""),window.SP_REACT.createElement(M2,{className:"me-btn",onClick:()=>A(C,-1)},"<"),window.SP_REACT.createElement("div",{className:"me-val"},E(C)),window.SP_REACT.createElement(M2,{className:"me-btn",onClick:()=>A(C,1)},">"))),s==="shop"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement(r2,{className:"me-cats","flow-children":"row"},J5.map(C=>window.SP_REACT.createElement(M2,{key:C.kind,className:"me-cat"+(l===C.kind?" on":""),onClick:()=>h(C.kind),onFocus:()=>h(C.kind)},C.label,window.SP_REACT.createElement("span",{className:"ct"},s1(C.kind),"/",s6.filter(J=>J.kind===C.kind).length)))),Z.map(C=>{let J=m.includes(C.id),e1=()=>{K(C)};return window.SP_REACT.createElement(r2,{key:C.id,className:"me-item",focusClassName:"fp-focus",onActivate:e1,onClick:e1,onFocus:()=>p(D(C)),onGamepadFocus:()=>p(D(C)),onBlur:()=>p(null)},window.SP_REACT.createElement("span",{className:"nm"},C.name),J?window.SP_REACT.createElement("span",{className:"own"},H(C)?"Wearing - press A to take off":"Owned - press A to wear"):window.SP_REACT.createElement("span",{className:"pr"},C.price," points"))}))),window.SP_REACT.createElement("div",{className:"me-foot"},s==="char"&&window.SP_REACT.createElement(M2,{onClick:T},"Random"),s==="char"&&window.SP_REACT.createElement(M2,{onClick:()=>n&&e({...n,hat:t.hat,acc:t.acc,tee:t.tee,flag:t.flag,face:t.face,kicks:t.kicks,aura:t.aura})},"Steam look"),window.SP_REACT.createElement(M2,{className:"go",onClick:w},"Save"),window.SP_REACT.createElement(M2,{onClick:M},"Cancel"))))}var Si=[[.49,.31],[.52,.53],[.65,.29],[.37,.51],[.33,.32],[.67,.55],[.46,.75],[.62,.73],[.81,.31],[.22,.54],[.82,.53],[.3,.74],[.78,.75]];function ih(i){return i*47%360}function Ci(i,t,e){let n=Math.min(Si.length,e.length),a=n<=7?1:n<=10?.86:.74,r=Math.min(i*.085,74)*a,c=[];for(let s=0;s<n;s++){let[o,l]=Si[s],h=e[s].appid,d=h*7919%29-14,p=h*104729%19-9;c.push({x:i*o+d,y:t*l+p,r,entry:e[s],index:s,hue:ih(h),k:a})}return c.sort((s,o)=>Math.abs(s.y-o.y)>40?s.y-o.y:s.x-o.x)}function Z0(i,t){let e=i*.075,n=t*.6;return{x:e,y:n,doorX:e,doorY:n+36}}function Ai(i,t,e=12){let n=Z0(i,t);return{x0:n.x-88-e,x1:n.x+88+e,y0:n.y-17-e*.6,y1:n.y+17+e*.6}}function Li(i,t){if(i.x<=t.x0||i.x>=t.x1||i.y<=t.y0||i.y>=t.y1)return!1;let e=i.x-t.x0,n=t.x1-i.x,a=i.y-t.y0,r=t.y1-i.y,c=Math.min(e,n,a,r);return c===e?i.x=t.x0:c===n?i.x=t.x1:c===a?i.y=t.y0:i.y=t.y1,!0}function L4(i){return window.SP_REACT.createElement(r2,{className:"fp-act"+(i.off?" fp-off":""),focusClassName:"fp-focus",onActivate:i.onAct,onClick:i.onAct,autoFocus:i.autoFocus},i.label)}function Ei(i){let{friend:t,hasApp:e,isStranger:n,a}=i,[r,c]=F1(!1);o2(()=>{c(!1)},[t.steamid]);let s=e||n;return window.SP_REACT.createElement("div",{className:"fp-actions"},window.SP_REACT.createElement("div",{className:"fp-who"},t.name),e&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement(L4,{label:"Wave",onAct:a.wave,autoFocus:!0,off:t.state==="snooze"}),window.SP_REACT.createElement(L4,{label:"Heart",onAct:a.heart}),window.SP_REACT.createElement(L4,{label:"High five",onAct:a.five}),window.SP_REACT.createElement(L4,{label:"Dance",onAct:a.dance}),window.SP_REACT.createElement(L4,{label:"Play",onAct:a.play}),window.SP_REACT.createElement(L4,{label:"Gift",onAct:a.gift}),window.SP_REACT.createElement(L4,{label:"Note",onAct:a.note})),!e&&window.SP_REACT.createElement("div",{className:"fp-bs",style:{color:"#b8c2d6",maxWidth:230}},n?"Plugin user (not a friend). Interacting with non-friends is not available yet.":"Not using Friend Plaza, so there is nobody to interact with yet."),window.SP_REACT.createElement(L4,{label:"Profile",onAct:a.profile,autoFocus:!e}),window.SP_REACT.createElement(L4,{label:"Game",onAct:a.game}),s&&window.SP_REACT.createElement(L4,{label:r?"Press again to block":"Block",onAct:()=>{r?(c(!1),a.block()):c(!0)}}),s&&window.SP_REACT.createElement(L4,{label:"Report",onAct:a.report}),window.SP_REACT.createElement(L4,{label:"Close",onAct:a.close}))}var me=[.75,1,1.4,1.8,2.6],$5=1,o0=(i,t,e)=>Math.max(t,Math.min(e,i));function Hi(i,t,e,n,a){i.z+=(n.z-i.z)*Math.min(1,t*6);let r=Math.min(1,t*(a?9:5));i.cx+=(n.x-i.cx)*r,i.cy+=(n.y-i.cy)*r;let c=e.w/i.z,s=e.h/i.z;i.x0=c>=e.w?(e.w-c)/2:o0(i.cx-c/2,0,e.w-c),i.y0=s>=e.h?(e.h-s)/2:o0(i.cy-s/2,0,e.h-s)}function ve(i){return i.playing?"game":i.state==="offline"?"off":i.state==="away"||i.state==="snooze"?"away":"on"}var ah=i=>X.friends.has(i);function Fi(i){let t=ah(i.steamid)?"Steam friend, uses Friend Plaza":"Uses Friend Plaza (not on your friends list)";return i.playing&&i.game?{head:"In-Game: "+i.game.name,sub:t}:{head:i.state==="busy"?"Busy":i.state==="away"||i.state==="snooze"?"Away":i.state==="offline"?"Offline":"Online",sub:t}}function j5(i){return i.playing&&i.game?{line:"Playing "+i.game.name}:i.state==="away"||i.state==="snooze"?{line:"Away"}:i.state==="busy"?{line:"Busy"}:{line:"Online"}}function Q5({f:i}){let[t,e]=F1(!1);return window.SP_REACT.createElement("div",{className:"fp-av "+ve(i),style:{position:"relative",overflow:"hidden"}},i.name.slice(0,1).toUpperCase(),i.avatar&&!t&&window.SP_REACT.createElement("img",{src:i.avatar,alt:"",draggable:!1,onError:()=>e(!0),style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",objectFit:"cover"}}))}function Ti({appid:i,name:t}){let e=["https://shared.steamstatic.com/store_item_assets/steam/apps/"+i+"/library_600x900.jpg","https://cdn.cloudflare.steamstatic.com/steam/apps/"+i+"/library_600x900.jpg","https://cdn.cloudflare.steamstatic.com/steam/apps/"+i+"/header.jpg"],[n,a]=F1(0);if(n>=e.length){let r=i*47%360;return window.SP_REACT.createElement("div",{className:"fp-fallback",style:{background:"linear-gradient(135deg,hsl("+r+",60%,58%),hsl("+(r+40)%360+",55%,42%))"}},t.replace(/[^A-Za-z0-9 ]/g,"").split(" ").filter(Boolean).slice(0,2).map(c=>c[0]).join("").toUpperCase()||"?")}return window.SP_REACT.createElement("img",{src:e[n],alt:"",draggable:!1,onError:()=>a(n+1)})}function Vi(i){let{zone:t,onOpen:e}=i,n=t.k||1,a={left:t.x-48*n,top:t.y-t.r*ct-122*n,width:96*n,height:140*n},r=()=>e(t);return i.plain?window.SP_REACT.createElement("div",{className:"fp-card-z plain",style:a},window.SP_REACT.createElement(Ti,{key:t.entry.appid,appid:t.entry.appid,name:t.entry.name}),window.SP_REACT.createElement("div",{className:"fp-nm"},t.entry.name)):window.SP_REACT.createElement(r2,{className:"fp-card-z",focusClassName:"fp-focus",style:a,onActivate:r,onClick:r,onFocus:()=>i.onFocusZone(t),onGamepadFocus:()=>i.onFocusZone(t),autoFocus:i.autoFocus},window.SP_REACT.createElement(Ti,{key:t.entry.appid,appid:t.entry.appid,name:t.entry.name}),window.SP_REACT.createElement("div",{className:"fp-nm"},t.entry.name),i.online>0&&window.SP_REACT.createElement("div",{className:"fp-badge"+(t.entry.playing>0?" live":"")},i.online))}function N3(i){return window.SP_REACT.createElement(r2,{className:"fp-tb",focusClassName:"fp-focus",onActivate:i.onAct,onClick:i.onAct},i.icon,i.iconOnly?null:window.SP_REACT.createElement("span",null,i.tip),i.badge?window.SP_REACT.createElement("div",{className:"fp-badge"},i.badge):null)}function E2(i){let t=()=>{i.onPick&&i.onPick()};return window.SP_REACT.createElement(r2,{className:"fp-it",focusClassName:"fp-focus",onActivate:t,onClick:t,autoFocus:i.autoFocus},window.SP_REACT.createElement("b",null,i.title),i.sub?window.SP_REACT.createElement("span",null,i.sub):null)}function t7(i){let{f:t}=i,e=ve(t),n=()=>i.onPick(t.steamid);return window.SP_REACT.createElement(r2,{className:"fp-row",focusClassName:"fp-focus",onActivate:n,onClick:n,autoFocus:i.autoFocus},window.SP_REACT.createElement(Q5,{f:t}),window.SP_REACT.createElement("div",{style:{minWidth:0}},window.SP_REACT.createElement("div",{className:"fp-bn "+e},t.name),window.SP_REACT.createElement("div",{className:"fp-bs",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},i.line)))}function Ri(i,t){let e="",n="";return i.kind==="friends"?(e="Friends online",n="Select a friend to find them in the plaza."):i.kind==="game"?(e=t?t.name:"Game",n=t?t.playing+" playing now":""):i.kind==="me"?(e="Me",n="Your character, stamps and notes"):i.kind==="stamps"?(e="Stamps and hats",n="Stamps unlock hats you can wear and give away."):i.kind==="inbox"?(e="Notes",n="Notes your friends left for you"):i.kind==="games"?(e="Games",n="Invites and matches with your friends"):i.kind==="play"?(e="Play a game",n="Win points for the point shop."):i.kind==="gift"?(e="Give a hat",n="Pick one of your hats."):i.kind==="report"?(e="Report a player",n="Pick a reason. The person who runs the server will see it."):(e="Leave a note",n="Preset notes only."),window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("h3",null,e),window.SP_REACT.createElement("div",{className:"fp-sub"},n))}var rh=[["spam","Spam"],["harassment","Harassment"],["cheating","Cheating in games"],["inappropriate","Inappropriate character or name"],["other","Something else"]];async function ge(){let i=await T1.serverSync([]);i.ok&&m4(i)}function Bi(i){let{drawer:t,prefs:e,people:n,entry:a,a:r}=i;return window.SP_REACT.createElement("div",{className:"fp-drawer"},Ri(t,a),window.SP_REACT.createElement("div",{className:"fp-list"},t.kind==="friends"&&(n.list.length===0?window.SP_REACT.createElement(E2,{autoFocus:!0,title:"Nobody is here",sub:"Friends who use Friend Plaza show up while they are online."}):n.list.map((c,s)=>window.SP_REACT.createElement(t7,{key:c.steamid,f:c,line:j5(c).line,onPick:r.pickFriend,autoFocus:s===0}))),t.kind==="game"&&a&&a.friends.map(c=>n.list.find(s=>s.steamid===c)||(n.me&&n.me.steamid===c?n.me:void 0)).filter(c=>!!c).map((c,s)=>window.SP_REACT.createElement(t7,{key:c.steamid,f:c,line:j5(c).line,onPick:r.pickFriend,autoFocus:s===0})),t.kind==="me"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement(E2,{autoFocus:!0,title:"Points: "+X.me.points,sub:"Spend them at the Friend Store, the building on the left of the plaza. Today: "+X.me.dayPoints+" of "+X.me.dailyCap+" earned from games"}),window.SP_REACT.createElement(E2,{title:"Games ("+X.games.filter(c=>c.status!=="done").length+")",sub:_t().length?_t().length+" invite"+(_t().length>1?"s":"")+" waiting":"Tic-Tac-Toe, Connect Four, Rock Paper Scissors, Blackjack 21",onPick:()=>r.open({kind:"games"})}),window.SP_REACT.createElement(E2,{title:"Stamps and hats",sub:X.me.stamps.length+" stamps, "+X.me.hats.length+" of "+gt.length+" hats",onPick:()=>r.open({kind:"stamps"})}),window.SP_REACT.createElement(E2,{title:"Notes from friends ("+X.inbox.length+")",sub:"Read and clear them",onPick:()=>r.open({kind:"inbox"})}),window.SP_REACT.createElement(E2,{title:"Other plugin users: "+(e.show_others?"shown":"hidden"),sub:"People who use Friend Plaza but are not your Steam friends. Press A to switch.",onPick:()=>r.toggleOption("show_others",e.show_others)}),window.SP_REACT.createElement(E2,{title:"Visible to other plugin users: "+(e.visible_public?"yes":"no"),sub:"Lets non-friends who use the plugin see your character. Press A to switch.",onPick:()=>r.toggleOption("visible_public",e.visible_public)}),window.SP_REACT.createElement(E2,{title:X.signedIn?"Online features are on":"Online features are off",sub:X.signedIn?"Streak: "+X.me.streak+" day"+(X.me.streak===1?"":"s")+" - friends met: "+X.me.met+(X.error?" - "+X.error:""):X.error||"Open Settings and sign in with Steam."}),window.SP_REACT.createElement(E2,{title:"All settings",sub:"Server, privacy, quality, blocked players, help",onPick:r.openSettings})),t.kind==="games"&&(X.games.length===0?window.SP_REACT.createElement(E2,{autoFocus:!0,title:"No games yet",sub:"Pick a friend who uses the server and press Play."}):X.games.map((c,s)=>{let o=c.p1===X.meId?c.p2:c.p1,l=r.nameOf(o),h=c.status==="done",d=c.state.result,p=B4(c.kind)+" with "+l,u="";return c.status==="invite"?u=c.p2===X.meId?"Invite - press A to accept":"Waiting for "+l+" to accept - press A to cancel":c.status==="active"?u=c.kind==="rps"||c.kind==="bj"?"Press A to play":c.turn===X.meId?"Your turn - press A":"Their turn - press A to watch":u=(d?(d.winner==="draw"?"Draw":d.winner===X.meId?"You won":l+" won")+(d.points[X.meId]?" - +"+d.points[X.meId]+" points":""):"Finished")+" - press A to look",window.SP_REACT.createElement(E2,{key:c.id,autoFocus:s===0,title:p,sub:u,onPick:async()=>{if(c.status==="invite"){let v=c.p2===X.meId?await T1.gameAccept(c.id):await T1.gameCancel(c.id);v.ok||r.say(v.message||"That didn't work."),await ge(),c.p2===X.meId&&v.ok&&(X.openGame=c.id,r.close(),n2.Navigate(f3))}else(!h||d)&&(X.openGame=c.id,r.close(),n2.Navigate(f3))}})})),t.kind==="play"&&(()=>{let c=t.to,s=X.games.find(o=>o.status!=="done"&&(o.p1===X.meId&&o.p2===c||o.p2===X.meId&&o.p1===c));if(s){let o=r.nameOf(c),l=()=>{X.openGame=s.id,r.close(),n2.Navigate(f3)};return s.status==="active"?window.SP_REACT.createElement(E2,{autoFocus:!0,title:"Continue your "+B4(s.kind)+" with "+o,sub:"You already have a game going. Press A to open it.",onPick:l}):s.p2===X.meId?window.SP_REACT.createElement(E2,{autoFocus:!0,title:"Accept "+o+"'s "+B4(s.kind)+" invite",sub:"They invited you. Press A to accept and play.",onPick:async()=>{let h=await T1.gameAccept(s.id);h.ok||r.say(h.message||"That didn't work."),await ge(),h.ok&&l()}}):window.SP_REACT.createElement(E2,{autoFocus:!0,title:"Cancel the waiting "+B4(s.kind)+" invite to "+o,sub:o+" has not accepted yet. Press A to cancel it, then invite again.",onPick:async()=>{let h=await T1.gameCancel(s.id);r.say(h.ok?"Invite cancelled. You can invite again.":h.message||"Could not cancel."),await ge(),r.close()}})}return Ae.map((o,l)=>window.SP_REACT.createElement(E2,{key:o.kind,autoFocus:l===0,title:o.name,sub:o.sub+" - invite "+r.nameOf(c),onPick:async()=>{r.close();let h=await T1.gameInvite(c,o.kind);r.say(h.ok?"Invited "+r.nameOf(c)+" to "+o.name:h.message||"Could not send the invite."),h.ok&&await ge()}}))})(),t.kind==="stamps"&&xt.map((c,s)=>{let o=X.me.stamps.includes(c.key);return window.SP_REACT.createElement(E2,{key:c.key,autoFocus:s===0,title:c.name+(o?" - earned":""),sub:(o?"Hat: ":"Unlocks the hat: ")+R4(c.hat)})}),t.kind==="inbox"&&(X.inbox.length===0?window.SP_REACT.createElement(E2,{autoFocus:!0,title:"No notes",sub:"Friends can leave you a note from their action bar."}):X.inbox.map((c,s)=>window.SP_REACT.createElement(E2,{key:c.id,autoFocus:s===0,title:r.nameOf(c.from)+": "+(Le[c.data&&c.data.text||0]||""),sub:"Press A to clear",onPick:()=>{X.inbox=X.inbox.filter(o=>o.id!==c.id),r.ackNote(c.id),S2()}}))),t.kind==="gift"&&(X.me.hats.length===0?window.SP_REACT.createElement(E2,{autoFocus:!0,title:"No hats to give yet",sub:"Earn hats from stamps first (Me > Stamps and hats)."}):gt.filter(c=>X.me.hats.includes(c.id)).map((c,s)=>window.SP_REACT.createElement(E2,{key:c.id,autoFocus:s===0,title:c.name,sub:"Give a copy to "+r.nameOf(t.to),onPick:()=>{r.close(),r.sendGift(t.to,c.id)}}))),t.kind==="note"&&Le.map((c,s)=>window.SP_REACT.createElement(E2,{key:s,autoFocus:s===0,title:c,sub:"Leave this note for "+r.nameOf(t.to),onPick:()=>{r.close(),r.sendNote(t.to,s)}})),t.kind==="report"&&rh.map(([c,s],o)=>window.SP_REACT.createElement(E2,{key:c,autoFocus:o===0,title:s,sub:"Report "+r.nameOf(t.to)+" to whoever runs the server",onPick:()=>{r.close(),r.report(t.to,c)}})),window.SP_REACT.createElement(M2,{style:{marginTop:10},onClick:r.close,onOKActionDescription:"Close"},"Close")))}var e7=(i,t)=>({steamid:i,name:t,avatar:"",state:"online",playing:!1,game:null,home:null});function ch(i){let t=e7(i.steamid,i.name||"Friend");return t.avatar=i.avatar||"",t.state=i.online?i.state||"online":"offline",t.playing=i.online&&!!i.game,t.game=i.online&&i.game?{appid:i.game.appid,name:i.game.name}:null,t}function sh(i){let t=e7(i.steamid,i.name||"Player");return t.avatar=i.avatar,t.state=i.state||"online",t.playing=!!i.game,t.game=i.game?{appid:i.game.appid,name:i.game.name}:null,t}function oh(i){if(!i.meId)return null;let t=e7(i.meId,i.me.name||"You");return t.avatar=i.me.avatar||"",i.me.game&&(t.game={...i.me.game},t.playing=!0),t}function lh(i){let t=new Map;for(let e of i){if(!e.game||e.game.appid==null)continue;let n=t.get(e.game.appid);n||(n={appid:e.game.appid,name:e.game.name,friends:[],playing:0,score:0},t.set(e.game.appid,n)),n.playing++,n.score+=5,n.friends.includes(e.steamid)||n.friends.push(e.steamid)}return Array.from(t.values()).sort((e,n)=>n.score-e.score||e.name.localeCompare(n.name)).slice(0,13)}function hh(i,t){let e=new Set(t.map(n=>n.appid));for(let n of i)n.home=n.game&&n.game.appid!=null&&e.has(n.game.appid)?n.game.appid:null}function Pi(i){let t=[];if(i.signedIn){for(let c of i.friends.values())t.push(ch(c));if(i.showOthers)for(let c of i.players)t.push(sh(c))}let e=t.filter(c=>c.state!=="offline").sort((c,s)=>(c.playing===s.playing?0:c.playing?-1:1)||c.name.localeCompare(s.name)).slice(0,Math.max(0,i.max)),n=oh(i),a=n?[...e,n]:e,r=lh(a);return hh(a,r),{me:n,list:e,ring:r,counts:{online:e.length,playing:e.filter(c=>c.playing).length}}}var l0=[{pixel:1.5,frameMs:24,maxCrowd:90,name:"High"},{pixel:1.1,frameMs:28,maxCrowd:60,name:"Medium"},{pixel:.9,frameMs:33,maxCrowd:40,name:"Low"},{pixel:.7,frameMs:50,maxCrowd:24,name:"Very low"}],Y0={level:0},xe=class{constructor(t="auto",e=!1){this.mode=t;this.batterySaver=e;this.level=0;this.acc=0;this.n=0;this.calm=0;this.cooldown=0;this.apply()}setMode(t,e){this.mode=t,this.batterySaver=e,this.apply()}fixed(){let t=this.mode==="high"?0:this.mode==="medium"?1:this.mode==="low"?2:-1;return t<0?-1:this.batterySaver?Math.max(t,2):t}apply(){let t=this.fixed();t>=0?this.level=t:this.batterySaver&&(this.level=Math.max(this.level,2)),Y0.level=this.level}get current(){return l0[this.level]}sample(t){if(this.fixed()>=0||(this.acc+=t,this.n++,this.acc<3e3))return!1;let e=this.acc/this.n;this.acc=0,this.n=0,this.cooldown>0&&this.cooldown--;let n=this.current.frameMs;if(e>n*1.35&&this.level<l0.length-1&&this.cooldown===0)return this.level++,this.calm=0,this.cooldown=2,Y0.level=this.level,!0;if(e<n*1.08&&this.level>(this.batterySaver?2:0)){if(this.calm++,this.calm>=10&&this.cooldown===0)return this.level--,this.calm=0,this.cooldown=4,Y0.level=this.level,!0}else this.calm=0;return!1}};var Ii=`
.fp-root{position:relative;margin-top:40px;height:calc(100% - 40px);overflow:hidden;overflow:clip;background:#0b1017;color:#c6d4df;font-size:14px;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif}
.fp-canvas{position:absolute;left:0;top:0}
.fp-world{position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:0 0;pointer-events:none}
.fp-world > *{pointer-events:auto}
.fp-card-z.plain{pointer-events:none}
.fp-walk{position:absolute;left:0;top:0;right:0;bottom:0;z-index:350;background:transparent}
.fp-store{position:absolute;margin:0;width:124px;height:40px;border-radius:3px;background:linear-gradient(#2d4a62,#1b2838);color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:800;font-size:14px;box-shadow:0 6px 16px rgba(0,0,0,.5),0 0 0 1px rgba(102,192,244,.5);z-index:3;box-sizing:border-box}
.fp-store.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 0 3px #fff,0 0 26px rgba(102,192,244,.8)}
.fp-store.plain{pointer-events:none}
.fp-prompt{position:absolute;padding:6px 12px;border-radius:3px;background:#66c0f4;color:#06121c;font-weight:800;font-size:13px;white-space:nowrap;z-index:6;pointer-events:none}
.fp-notice{position:absolute;left:50%;top:128px;transform:translateX(-50%);max-width:620px;padding:12px 18px;border-radius:3px;background:rgba(27,40,56,.94);color:#dfe6ec;font-size:14px;line-height:1.45;text-align:center;box-shadow:0 0 0 1px rgba(102,192,244,.35);z-index:260;pointer-events:none}
.fp-head{position:absolute;left:32px;top:20px;z-index:300;display:flex;align-items:center;gap:14px}
.fp-title{font-size:26px;font-weight:800;color:#fff;letter-spacing:.2px}
.fp-chip{padding:5px 12px;border-radius:3px;font-size:13px;font-weight:700;background:rgba(87,203,222,.16);color:#57cbde}
.fp-chip.game{background:rgba(144,186,60,.18);color:#90ba3c}
.fp-chip.live{background:rgba(102,192,244,.16);color:#66c0f4}
.fp-meta{position:absolute;left:34px;top:58px;z-index:300;font-size:12px;color:#8f98a0}
.fp-card-z{position:absolute;margin:0;width:96px;height:140px;border-radius:4px;background:#1b2838;box-shadow:0 6px 16px rgba(0,0,0,.5),0 0 0 1px rgba(255,255,255,.08);box-sizing:border-box;z-index:3;transition:transform .12s,box-shadow .12s;transform-origin:50% 100%}
.fp-card-z.fp-focus{transform:scale(1.07);box-shadow:0 0 0 3px #fff,0 0 28px rgba(102,192,244,.8),0 10px 24px rgba(0,0,0,.6);z-index:7}
.fp-card-z img,.fp-card-z .fp-fallback{width:100%;height:100%;object-fit:cover;border-radius:4px;display:block}
.fp-fallback{color:#fff;font-weight:800;font-size:28px;display:flex;align-items:center;justify-content:center;text-shadow:0 2px 4px rgba(0,0,0,.4)}
.fp-card-z .fp-nm{position:absolute;left:0;right:0;bottom:0;padding:26px 8px 8px;border-radius:0 0 4px 4px;background:linear-gradient(0deg,rgba(0,0,0,.82),rgba(0,0,0,0));color:#fff;font-size:12px;font-weight:800;line-height:1.15;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.fp-badge{position:absolute;right:-8px;top:-8px;min-width:24px;height:24px;padding:0 6px;box-sizing:border-box;border-radius:12px;background:#66c0f4;color:#06121c;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid #121a24;z-index:3}
.fp-badge.live{background:#90ba3c}
.fp-tools{position:absolute;right:32px;top:20px;z-index:300;display:flex;gap:10px}
.fp-tb{position:relative;margin:0;height:36px;padding:0 16px;border-radius:3px;background:rgba(255,255,255,.08);color:#dfe6ec;display:flex;align-items:center;gap:8px;box-sizing:border-box;font-size:14px;font-weight:700;border:0;transition:background .1s}
.fp-tb.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 18px rgba(102,192,244,.6)}
.fp-tb .fp-badge{right:-7px;top:-7px;min-width:20px;height:20px;font-size:11px}
.fp-hints{position:absolute;right:32px;bottom:76px;display:flex;justify-content:flex-end;align-items:center;gap:22px;padding:8px 14px;border-radius:3px;background:rgba(6,9,13,.82);font-size:15px;font-weight:700;color:#c6d4df;z-index:250;pointer-events:none}
.fp-hints > div{display:flex;align-items:center;gap:8px}
.fp-g{width:24px;height:24px;border-radius:50%;border:2px solid #c6d4df;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;box-sizing:border-box}
.fp-feed{position:absolute;left:32px;bottom:76px;z-index:260;display:flex;flex-direction:column;gap:5px;pointer-events:none}
.fp-feed div{background:rgba(27,40,56,.92);color:#dfe6ec;border-radius:3px;padding:6px 12px;font-size:13px;font-weight:600;max-width:360px;box-shadow:0 0 0 1px rgba(102,192,244,.25);animation:fpIn .35s ease-out}
@keyframes fpIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.fp-bubble{position:absolute;left:0;top:0;z-index:400;width:312px;box-sizing:border-box;background:linear-gradient(#2d4a62,#1b2838);border-radius:4px;padding:12px 14px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);display:flex;gap:12px;align-items:center;pointer-events:none}
.fp-bubble::after{content:"";position:absolute;left:50%;bottom:-9px;margin-left:-9px;border:9px solid transparent;border-bottom:0;border-top-color:#1b2838}
.fp-av{width:50px;height:50px;flex:none;border-radius:3px;background:linear-gradient(145deg,#7ec8ff,#2a6fb5);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;color:#fff;box-shadow:0 0 0 2px #57cbde}
.fp-av.game{box-shadow:0 0 0 2px #90ba3c}.fp-av.away{box-shadow:0 0 0 2px #e0b44f;opacity:.9}.fp-av.off{box-shadow:0 0 0 2px #59616a;opacity:.6}
.fp-bn{font-weight:800;font-size:17px;line-height:1.2;color:#57cbde}
.fp-bn.game{color:#90ba3c}.fp-bn.away{color:#e0b44f}.fp-bn.off{color:#8f98a0}
.fp-bl{font-size:13px;font-weight:600;line-height:1.3;margin-top:2px;color:#c6d4df}
.fp-bs{font-size:12px;color:#8f98a0;margin-top:2px}
.fp-live{display:inline-block;margin-left:8px;padding:1px 7px;border-radius:3px;background:rgba(102,192,244,.2);color:#66c0f4;font-size:10.5px;font-weight:800;vertical-align:middle}
.fp-actions{position:absolute;left:50%;bottom:80px;transform:translateX(-50%);z-index:420;display:flex;gap:8px;background:linear-gradient(#2d4a62,#1b2838);padding:10px 12px;border-radius:4px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);align-items:center;max-width:96%;flex-wrap:wrap;justify-content:center}
.fp-actions .fp-who{color:#fff;font-weight:800;padding:0 10px 0 4px;font-size:15px;max-width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fp-act{margin:0;padding:9px 14px;border-radius:3px;background:rgba(255,255,255,.1);color:#dfe6ec;font-weight:700;border:0;box-sizing:border-box}
.fp-act.fp-focus{background:#fff;color:#0e141b;box-shadow:0 0 16px rgba(102,192,244,.6)}
.fp-act.fp-off{opacity:.45}
.fp-card{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:440px;max-width:80%;background:linear-gradient(#2d4a62,#1b2838);border-radius:4px;padding:22px 26px;box-shadow:0 14px 32px rgba(0,0,0,.6),0 0 0 1px rgba(102,192,244,.4);z-index:412;text-align:center;color:#c6d4df}
.fp-card h2{margin:0 0 8px;font-size:20px;color:#fff}
.fp-card p{margin:6px 0;line-height:1.4;color:#c6d4df}
.fp-btn{display:inline-block;margin-top:12px;padding:10px 22px;border-radius:3px;background:rgba(255,255,255,.1);color:#dfe6ec;font-weight:700;cursor:pointer}
.fp-btn.fp-focus{background:#fff;color:#0e141b}
.fp-drawer{position:absolute;right:0;top:0;bottom:74px;width:440px;background:linear-gradient(#1b2838,#121a24);box-shadow:-10px 0 34px rgba(0,0,0,.6),-1px 0 0 rgba(102,192,244,.3);z-index:430;display:flex;flex-direction:column}
.fp-drawer h3{margin:0;padding:22px 20px 4px;font-size:22px;font-weight:800;color:#fff}
.fp-drawer .fp-sub{padding:0 20px 10px;color:#8f98a0;font-size:13px}
.fp-list{overflow-y:auto;flex:1;padding:6px 14px 24px}
.fp-row,.fp-it{display:flex;gap:12px;align-items:center;padding:8px 10px;margin:3px 0;border-radius:3px;background:rgba(255,255,255,.05);box-sizing:border-box}
.fp-row.fp-focus,.fp-it.fp-focus{background:#fff;box-shadow:0 0 16px rgba(102,192,244,.5)}
.fp-row.fp-focus .fp-bn,.fp-row.fp-focus .fp-bs,.fp-it.fp-focus b,.fp-it.fp-focus span{color:#0e141b}
.fp-row .fp-av{width:38px;height:38px;font-size:17px}
.fp-row .fp-bn{font-size:15px}
.fp-it{display:block}
.fp-it b{display:block;font-size:14px;color:#dfe6ec}
.fp-it span{display:block;font-size:12px;color:#8f98a0;margin-top:2px}
.fp-dot{display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:6px;background:#59616a}
.fp-dot.on{background:#57cbde}.fp-dot.game{background:#90ba3c}.fp-dot.busy{background:#d9534f}.fp-dot.away{background:#e0b44f}
`;function Ni(i,t,e,n){return n?2e4:t?3e4:e?Math.max(i,15e3):i}function Di(){let[i,t]=F1([]),e=V1(0),n=V1(!0);return o2(()=>(n.current=!0,()=>{n.current=!1}),[]),{feed:i,say:r=>{let c={id:++e.current,text:r};t(s=>s.concat(c).slice(-3)),window.setTimeout(()=>{n.current&&t(s=>s.filter(o=>o.id!==c.id))},9e3)}}}function ki(i){let t=V1([]),e=V1(new Set),n=V1(new Set),a=V1(!0),r=V1(new Map),c=V1(i);c.current=i;let s=o=>{let{walkers:l,social:h,say:d,nameOf:p}=c.current,u=Array.from(l.current.values()),v=X.meId,g=p(o.from);o.kind==="wave"?(h.current.visit(u,o.from,v,""),d(g+" waved at you")):o.kind==="heart"?(h.current.visit(u,o.from,v,"heart"),d(g+" sent you a heart")):o.kind==="highfive"?(h.current.visit(u,o.from,v,"star"),d(g+" high-fived you")):o.kind==="dance"?(h.current.danceTogether(u,[o.from,v]),d(g+" wants to dance with you!")):o.kind==="gift"?(h.current.visit(u,o.from,v,"star"),d(g+" gave you a hat: "+R4(o.data&&o.data.hat||0))):o.kind==="invite"?d(g+" invited you to play "+B4(o.data?.game||"")):o.kind==="note"&&(X.inbox.some(m=>m.id===o.id)||X.inbox.push(o),d(g+" left you a note"))};return o2(()=>{if(!i.ready)return;let o=!1,l=null,h=async()=>{let d=!1;try{let p=await T1.serverState();if(o)return;if(X.signedIn=p.signed_in&&p.on&&!!p.url,X.meId=p.steamid,p.figure&&!X.me.figure&&(X.me.figure=p.figure,S2()),X.signedIn){let u=t.current.splice(0,100),v=await T1.serverSync(u);if(o)return;let g=c.current.say;if(v.signed_out)X.signedIn=!1,X.error=v.message||"",S2();else if(v.ok&&v.friends&&v.me){X.error="";for(let f of m4(v))e.current.has(f.id)||(e.current.add(f.id),e.current.size>400&&(e.current=new Set(Array.from(e.current).slice(-200))),s(f),f.kind!=="note"&&t.current.push(f.id));let m=X.games.filter(f=>f.status==="done"&&f.state.result&&!n.current.has(f.id));for(let f of m){if(n.current.add(f.id),n.current.size>200&&(n.current=new Set(Array.from(n.current).slice(-100))),a.current)continue;let _=f.state.result.points[X.meId]||0;g("Game finished: "+B4(f.kind)+(_?" (+"+_+" points)":""))}for(let f of X.games){let _=r.current.get(f.id);!a.current&&_==="invite"&&f.status==="active"&&f.p1===X.meId&&(g(c.current.nameOf(f.p2)+" accepted your "+B4(f.kind)+" invite"),X.openGame=f.id,n2.Navigate(f3)),r.current.set(f.id,f.status)}a.current=!1;for(let f of v.me.newStamps||[]){let _=xt.find(b=>b.key===f);_&&g("New stamp: "+_.name+" - hat unlocked: "+R4(_.hat))}S2()}else!v.ok&&!v.off&&(X.error=v.message||"The server did not answer.",d=!0,S2())}}catch(p){X.error=p instanceof Error?p.message:String(p),d=!0}o||(l=setTimeout(h,Ni(8e3,typeof document<"u"&&document.hidden,c.current.lowPower,d)))};return h(),()=>{o=!0,l&&clearTimeout(l)}},[i.ready,i.meId]),{ackRef:t}}var dh=300,uh=460,i7=()=>({up:0,down:0,left:0,right:0});function X0(i,t,e){let n=i[t]>e-250;i[t]=e+(n?uh:dh)}var $4={x:0,y:0,live:!1},n7=.2;function Me(i){let t=Math.abs(i);return t>n7?Math.sign(i)*Math.min(1,(t-n7)/(.9-n7)):0}function Ui(){$4.x=0,$4.y=0;let i=[];try{let t=window.SteamClient,e=t&&t.Input;e&&typeof e.RegisterForControllerStateChanges=="function"&&i.push(e.RegisterForControllerStateChanges(n=>{let a=0,r=0;for(let c of n){if(!c)continue;let s=Number(c.sLeftStickX),o=Number(c.sLeftStickY);if(Number.isFinite(s)&&Number.isFinite(o)){let l=s/32767,h=-o/32767;Math.abs(l)>Math.abs(a)&&(a=l),Math.abs(h)>Math.abs(r)&&(r=h),$4.live=!0}}$4.x=a,$4.y=r}))}catch{}return()=>{$4.x=0,$4.y=0;for(let t of i)try{t&&t.unregister&&t.unregister()}catch{}}}function Oi(i,t,e){let n=Math.hypot(t.ix,t.iy)>.05,a=Math.min(1,e*(n?14:9));return i.ix+=(t.ix-i.ix)*a,i.iy+=(t.iy-i.iy)*a,!n&&Math.hypot(i.ix,i.iy)<.12&&(i.ix=0,i.iy=0),{ix:i.ix,iy:i.iy}}function Gi(i,t,e,n=[]){let a=0,r=0;a+=Me($4.x),r+=Me($4.y),(i.has("arrowleft")||i.has("a"))&&(a-=1),(i.has("arrowright")||i.has("d"))&&(a+=1),(i.has("arrowup")||i.has("w"))&&(r-=1),(i.has("arrowdown")||i.has("s"))&&(r+=1),t.left>e&&(a-=1),t.right>e&&(a+=1),t.up>e&&(r-=1),t.down>e&&(r+=1);for(let s of n)s&&($4.live||(a+=Me(s.axes[0]||0),r+=Me(s.axes[1]||0)),s.buttons[14]&&s.buttons[14].pressed&&(a-=1),s.buttons[15]&&s.buttons[15].pressed&&(a+=1),s.buttons[12]&&s.buttons[12].pressed&&(r-=1),s.buttons[13]&&s.buttons[13].pressed&&(r+=1));let c=Math.hypot(a,r);return c>1&&(a/=c,r/=c),{ix:a,iy:r}}function Wi(i,t,e,n){if(i.act){i.moving=!1;return}if(Math.hypot(n.ix,n.iy)<.05){i.moving=!1;return}i.x=o0(i.x+n.ix*125*t,24,e.w-24),i.y=o0(i.y+n.iy*95*t,70,e.h-16),Math.abs(n.ix)>.1&&(i.dir=n.ix<0?-1:1),i.moving=!0,i.phase+=t*9}function Zi(i,t,e,n){return Math.hypot(i.x-t,(i.y-e)*1.4)<n}var ot="/friend-plaza-setup",m3="/friend-plaza-settings";var Yi=["heart","star","exclaim","heart"],h0=i=>i.state!=="offline"&&i.state!=="snooze";function ph(i,t){return 4+((i.seed^t.seed)>>>0)%60/10}var ze=class{update(t,e,n,a){let r=[],c=new Map;for(let s of t)c.set(s.id,s);for(let s of t)if(s.cool>0&&(s.cool-=e),s.act){s.actT-=e;let o=s.partner?c.get(s.partner):void 0;s.partner&&!o&&(s.actT=0),o&&(s.dir=o.x<s.x?-1:1),s.actT<=0&&this.finish(s,o,n,a,r)}else if(s.seek){let o=c.get(s.seek);if(s.seekT-=e,!o||!h0(o)||s.seekT<=0){s.seek=null;continue}s.tx=o.x+(s.x<o.x?-24:24),s.ty=o.y,s.pause=0,Math.hypot(o.x-s.x,(o.y-s.y)*1.4)<34&&(o.act="",this.startGreet(s,o,r,!0))}return r}startGreet(t,e,n,a){for(let[c,s]of[[t,e],[e,t]]){c.act="greet",c.actT=2.4,c.partner=s.id,c.next="",c.seek=null,c.moving=!1;let o=t.pend||e.pend;c.emote=o||Yi[Math.floor(Math.random()*Yi.length)],c.rush=!1,c.pend="",c.dir=s.x<c.x?-1:1}n.push({kind:a&&(t.me||e.me)?"wave":"greet",a:t.id,b:e.id,text:""})}finish(t,e,n,a,r){if(t.act==="greet"&&t.next==="chat"&&e&&e.act){t.act="chat",t.actT=ph(t,e),t.next="",t.emote="",t.id<e.id&&r.push({kind:"chat",a:t.id,b:e.id,text:""});return}t.act="",t.partner=null,t.emote="",t.next="",t.cool=20+n()*30,t.pause=.2+n()*.8,b0(t,n,a)}greetNearby(t,e,n=()=>!0,a=70){let r=t.find(o=>o.id===e);if(!r||r.act)return null;let c=null,s=a;for(let o of t){if(o===r||!h0(o)||o.act||!n(o.id))continue;let l=Math.hypot(o.x-r.x,(o.y-r.y)*1.4);l<s&&(s=l,c=o)}return c?(this.startGreet(r,c,[],!1),c.id):(r.act="greet",r.actT=1.6,r.partner=null,r.emote="star",r.moving=!1,null)}visit(t,e,n,a){let r=t.find(s=>s.id===e),c=t.find(s=>s.id===n);return!r||!c||r===c||!h0(r)||!h0(c)?!1:(r.act&&(r.act="",r.partner=null,r.emote=""),r.seek=c.id,r.seekT=14,r.cool=0,r.rush=!0,r.pend=a,c.cool=0,c.act||(c.pend=a,c.pause=8,c.moving=!1),!0)}danceTogether(t,e,n=6){let a=0;for(let r of t)!e.includes(r.id)||!h0(r)||(r.act="dance",r.actT=n,r.emote="note",r.seek=null,r.partner=null,r.moving=!1,a++);return a}sendWave(t,e,n=""){let a=t.find(c=>c.id===e);if(!a||!h0(a))return!1;let r=t.find(c=>c.me);return a.cool=0,!r||r===a?(a.act="greet",a.actT=2.2,a.partner=null,a.emote=n||"heart",a.moving=!1,!0):(r.act&&(r.act="",r.partner=null,r.emote=""),r.seek=a.id,r.seekT=16,r.cool=0,r.pend=n,a.act||(a.pause=8,a.moving=!1),!0)}};var lt="/friend-plaza";function Xi(){let i=V1(null),t=V1(null),e=V1(null),n=V1(null),[a,r]=F1({w:1280,h:760}),[c,s]=F1("loading"),[o,l]=F1(""),[h,d]=F1(null),[p,u]=F1(null),[v,g]=F1(null),[m,f]=F1(0),[_,b]=F1(!1),[y,P]=F1(me.indexOf($5)),[A,E]=F1(!1),[T,w]=F1(0),M=b4(),{feed:L,say:D}=Di(),H=V1(new Map),I=V1([]),K=V1(new ze),Z=V1(new xe("auto",!1)),s1=V1(null),C=V1([]),J=V1({z:1,cx:640,cy:380,x0:0,y0:0}),e1=V1(null),$=V1(new Set),i1=V1(i7()),C1=V1({ix:0,iy:0}),j=V1(!1),a1=V1(new Map),d1=V1(null),h1=V1(a),B1=V1(!0),Z1=V1("loading"),U1=V1(!1),p2=V1(1),J1=V1(0);Z1.current=c,U1.current=_,p2.current=me[y],J1.current=T;let O1=Pi({friends:X.friends,players:X.players,me:X.me,meId:X.meId,signedIn:X.signedIn,showOthers:h?h.show_others:!0,max:l0[T].maxCrowd}),V=V1(O1);V.current=O1;let V2=Ci(a.w,a.h,O1.ring),I1=O1.ring.map(Y=>Y.appid+":"+Y.playing).join(",");C.current=V2,d1.current=p,h1.current=a;let G1=Y=>{let c1=V.current;if(c1.me&&c1.me.steamid===Y)return"You";let v1=c1.list.find(Y1=>Y1.steamid===Y);return v1?v1.name:"A friend"},P1=Y=>Y?O1.me&&O1.me.steamid===Y?O1.me:O1.list.find(c1=>c1.steamid===Y)||null:null,m2=Y=>X.friends.has(Y)||X.strangerInteract&&X.players.some(c1=>c1.steamid===Y),{ackRef:R1}=ki({ready:c==="ready",meId:X.meId,lowPower:!!(h&&h.low_power),walkers:H,social:K,say:D,nameOf:G1});o2(()=>{let Y=i.current;if(!Y)return;let c1=()=>{let Y1=Y.clientWidth||window.innerWidth,l2=Y.clientHeight||window.innerHeight-40;Y1>100&&l2>100&&r(F2=>F2.w===Y1&&F2.h===l2?F2:{w:Y1,h:l2})};c1();let v1=null;return typeof ResizeObserver<"u"&&(v1=new ResizeObserver(c1),v1.observe(Y)),window.addEventListener("resize",c1),()=>{v1&&v1.disconnect(),window.removeEventListener("resize",c1)}},[]);let S=async()=>{s("loading"),l("");try{let Y=await T1.getState();if(!B1.current)return;Y.steamid&&(X.meId=X.meId||Y.steamid),d(Y),s("ready")}catch(Y){if(!B1.current)return;l(Y instanceof Error?Y.message:String(Y)),s("error")}};o2(()=>(B1.current=!0,S(),()=>{B1.current=!1}),[]),o2(()=>{h&&(Z.current.setMode(h.quality||"auto",!!h.low_power),Z.current.level!==J1.current&&w(Z.current.level))},[h&&h.quality,h&&h.low_power]),o2(()=>{let Y=new Map;O1.list.forEach(c1=>Y.set(c1.steamid,c1.name)),O1.me&&Y.set(O1.me.steamid,"You"),X.names=Y},[M]),o2(()=>{if(!h)return;let Y=H.current,c1=a.w/2,v1=a.h/2,Y1=new Map;V2.forEach(K1=>Y1.set(K1.entry.appid,K1));let l2=new Map(X.players.map(K1=>[K1.steamid,K1.figure])),F2=O1.list.map(K1=>({f:K1,me:!1}));O1.me&&F2.push({f:O1.me,me:!0});let E4=new Map;for(let{f:K1}of F2)K1.home!=null&&Y1.has(K1.home)&&E4.set(K1.home,(E4.get(K1.home)||0)+1);let p4=new Set;for(let{f:K1,me:r4}of F2){p4.add(K1.steamid);let s2=Y.get(K1.steamid),c4=!s2;s2||(s2=M3(K1,r4,c1,v1),Y.set(K1.steamid,s2)),s2.state=K1.state,s2.playing=K1.playing,s2.me=r4,s2.name=K1.name;let O4=X.friends.get(K1.steamid),h2=r4?X.me.figure:O4?O4.figure:l2.get(K1.steamid)||null,Q2=h2?JSON.stringify(h2):"steam",I2=a1.current.get(K1.steamid);(!I2||I2.key!==Q2)&&(I2={key:Q2,look:h2?{...h2}:Z4(K1.steamid)},a1.current.set(K1.steamid,I2)),s2.look=I2.look,s2.live=!!(O4&&O4.online)||l2.has(K1.steamid),s2.home=K1.home!=null&&Y1.has(K1.home)?K1.home:null;let s4=K1.home!=null?Y1.get(K1.home):void 0,u0=s2.ax,ht=s2.ay,z=s2.seed%1e3/1e3,F=(s2.seed>>>10)%1e3/1e3;if(s4){let G=E4.get(s4.entry.appid)||1;s2.ax=s4.x,s2.ay=s4.y+24,s2.radius=Math.min(s4.r*1.25,s4.r*.55+7*Math.sqrt(G))}else s2.ax=a.w*(.26+.5*z),s2.ay=a.h*(.46+.14*F),s2.radius=90;(c4||Math.hypot(s2.ax-u0,s2.ay-ht)>5)&&(b0(s2,Math.random,a),c4&&(s2.x=s2.tx,s2.y=s2.ty))}for(let K1 of Array.from(Y.keys()))p4.has(K1)||(Y.delete(K1),a1.current.delete(K1));I.current=Array.from(Y.values())},[h,a.w,a.h,M,T]);let x=Y=>{for(let c1 of Y){let v1=H.current.get(c1.a),Y1=c1.b?H.current.get(c1.b):void 0;c1.kind==="wave"&&v1&&v1.me&&Y1&&D("You waved at "+Y1.name)}},O=async(Y,c1)=>{try{await T1.setOption(Y,!c1),d(await T1.getState())}catch(v1){D(v1 instanceof Error?v1.message:String(v1))}},Q=()=>{b(!1),$.current.clear(),u(null),g(null),n2.Navigate(fe)},r1=Y=>{let c1=Y&&Y.detail?Y.detail.button:void 0,v1=performance.now();c1===m0.DIR_LEFT?X0(i1.current,"left",v1):c1===m0.DIR_RIGHT?X0(i1.current,"right",v1):c1===m0.DIR_UP?X0(i1.current,"up",v1):c1===m0.DIR_DOWN&&X0(i1.current,"down",v1)},t1=()=>{if(!V.current.me){D("Your own character is not loaded yet. Try Refresh.");return}u(null),g(null),$.current.clear(),b(!0)},H1=()=>{j.current=!1,E(!1),$.current.clear(),i1.current=i7(),b(!1)},u1=()=>{let Y=V.current.me?V.current.me.steamid:"";if(j.current){Q();return}let c1=K.current.greetNearby(Array.from(H.current.values()),Y,m2);c1&&(u(c1),D("You greeted "+G1(c1)))};o2(()=>{if(!_)return;let Y=Ui(),c1=Y1=>{let l2=Y1.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s"].includes(l2)?($.current.add(l2),Y1.preventDefault()):l2===" "||l2==="enter"?u1():l2==="escape"&&H1()},v1=Y1=>{$.current.delete(Y1.key.toLowerCase())};return window.addEventListener("keydown",c1),window.addEventListener("keyup",v1),()=>{Y(),C1.current={ix:0,iy:0},window.removeEventListener("keydown",c1),window.removeEventListener("keyup",v1)}},[_]),o2(()=>{let Y=t.current;if(!Y)return;let c1=null;try{c1=new J4(Y)}catch{c1=null}s1.current=c1;let v1=c1?null:Y.getContext("2d");if(!c1&&!v1)return;let Y1=0,l2=performance.now(),F2=0,E4=-1,p4=K1=>{Y1=requestAnimationFrame(p4);let r4=Z.current;if(K1-l2<r4.current.frameMs)return;let s2=K1-l2,c4=Math.min(.1,s2/1e3);l2=K1,F2+=c4,r4.sample(s2)&&r4.level!==J1.current&&w(r4.level),c1&&E4!==r4.level&&(E4=r4.level,c1.setQuality(r4.current.pixel));let O4=r4.level>=2,h2=h1.current,Q2=I.current,I2=Q2.find(g1=>g1.me),s4=U1.current&&!!I2;for(let g1 of Q2)s4&&g1===I2||H7(g1,c4,Math.random,h2);if(s4&&I2){let g1=[];try{g1=navigator.getGamepads?Array.from(navigator.getGamepads()):[]}catch{g1=[]}Wi(I2,c4,h2,Oi(C1.current,Gi($.current,i1.current,performance.now(),g1),c4));let k1=Z0(h2.w,h2.h),M1=Zi(I2,k1.doorX,k1.doorY,62);M1!==j.current&&(j.current=M1,E(M1))}let u0=Ai(h2.w,h2.h);for(let g1 of Q2)Li(g1,u0);let ht=K.current.update(Q2,c4,Math.random,h2);ht.length&&x(ht);for(let g1=0;g1<Q2.length;g1++)for(let k1=g1+1;k1<Q2.length;k1++){let M1=Q2[g1],$1=Q2[k1];if(s4&&(M1===I2||$1===I2))continue;let f2=$1.x-M1.x,v2=($1.y-M1.y)*1.6,G2=f2*f2+v2*v2;if(G2<484&&G2>.01){let i2=Math.sqrt(G2),E1=(22-i2)*.08;M1.x-=f2/i2*E1,$1.x+=f2/i2*E1,M1.y-=v2/i2*E1*.6,$1.y+=v2/i2*E1*.6}}let z=d1.current,F=J.current,G=s4?Math.max(1.7,p2.current):p2.current,W=h2.w/2,N=h2.h/2;if(s4&&I2)W=I2.x,N=I2.y-20;else if(G>$5){let g1=z?H.current.get(z):void 0;g1?(W=g1.x,N=g1.y-20):e1.current&&(W=e1.current.x,N=e1.current.y)}Hi(F,c4,h2,{z:G,x:W,y:N},s4);let l1=h2.w/F.z,x1=h2.h/F.z,L1=n.current;if(L1&&(L1.style.transform="translate("+(-F.x0*F.z).toFixed(1)+"px,"+(-F.y0*F.z).toFixed(1)+"px) scale("+F.z.toFixed(3)+")"),c1)c1.resize(h2.w,h2.h),c1.setDetail(G),c1.setView(F.x0,F.y0,l1,x1),c1.frame(Q2,{selected:z,t:F2,dt:c4,low:O4});else if(v1){Y.width!==h2.w&&(Y.width=h2.w),Y.height!==h2.h&&(Y.height=h2.h),v1.setTransform(1,0,0,1,0,0),v1.clearRect(0,0,h2.w,h2.h),v1.setTransform(F.z,0,0,F.z,-F.x0*F.z,-F.y0*F.z);for(let g1 of[...Q2].sort((k1,M1)=>k1.y-M1.y))T7(v1,g1,{selected:g1.id===z,t:F2,lowPower:O4,h:h2.h});v1.setTransform(1,0,0,1,0,0)}let A1=e.current;if(A1){let g1=z?H.current.get(z):void 0;if(g1){let k1=Math.min(h2.w-160,Math.max(160,(g1.x-F.x0)*F.z)),M1=((c1?c1.bubbleY(g1):g1.y-64*(.85+.45*(g1.y/h2.h)))-F.y0)*F.z,$1=Math.max(96,M1);A1.style.transform="translate("+Math.round(k1-150)+"px,"+Math.round($1-A1.offsetHeight-8)+"px)",A1.style.visibility="visible"}else A1.style.visibility="hidden"}};return Y1=requestAnimationFrame(p4),()=>{cancelAnimationFrame(Y1),s1.current=null,c1&&c1.dispose()}},[]),o2(()=>{let Y=s1.current;Y&&(Y.resize(a.w,a.h),Y.setStore(Z0(a.w,a.h)),Y.setZones(V2.map(c1=>({x:c1.x,y:c1.y+8,r:c1.r,hue:c1.hue,live:c1.entry.playing>0}))))},[I1,a.w,a.h]);let b1=Y=>{let c1=i.current;if(!c1)return;let v1=c1.getBoundingClientRect(),Y1=v1.width?a.w/v1.width:1,l2=J.current,F2=F7(Array.from(H.current.values()),l2.x0+(Y.clientX-v1.left)*Y1/l2.z,l2.y0+(Y.clientY-v1.top)*Y1/l2.z,a.h);U1.current||u(F2?F2.id:null)},a2=Y=>{f(Y.entry.appid),u(null),g({kind:"game",appid:Y.entry.appid})},o1=async()=>{try{let Y=await T1.serverSync([]);Y.ok&&m4(Y)}catch{}},y1=async()=>{try{let Y=await T1.refreshFriends();D(Y.count?"Read "+Y.count+" Steam friends from Steam's files.":"Steam's files list no friends yet.")}catch{}await S(),await o1()},N1=async(Y,c1,v1)=>{try{let Y1=await T1.serverSend(Y,c1,v1);if(!Y1.ok){D(Y1.message||"That didn't go through.");return}Y1.hats&&(X.me.hats=Y1.hats);for(let l2 of Y1.awarded||[]){let F2=xt.find(E4=>E4.key===l2);F2&&D("New stamp: "+F2.name+" - hat unlocked: "+R4(F2.hat))}S2()}catch(Y1){D(Y1 instanceof Error?Y1.message:String(Y1))}},W1=!!(p&&m2(p)),S1=!!(p&&X.players.some(Y=>Y.steamid===p)),e2=(Y,c1)=>{if(!p)return;K.current.sendWave(Array.from(H.current.values()),p,Y)?W1&&N1(p,c1,null):D(G1(p)+" is asleep right now.")},q1=O1.me?O1.me.steamid:"",z2={wave:()=>e2("","wave"),heart:()=>e2("heart","heart"),five:()=>e2("star","highfive"),dance:()=>{p&&(K.current.danceTogether(Array.from(H.current.values()),[q1,p]),N1(p,"dance",null))},play:()=>p&&g({kind:"play",to:p}),gift:()=>p&&g({kind:"gift",to:p}),note:()=>p&&g({kind:"note",to:p}),profile:()=>{p&&n2.NavigateToExternalWeb("https://steamcommunity.com/profiles/"+p)},game:()=>{let Y=P1(p),c1=Y&&Y.game&&Y.game.appid?Y.game.appid:0;c1&&n2.Navigate("/library/app/"+c1)},block:async()=>{if(!p)return;let Y=G1(p),c1=await T1.serverBlock(p);D(c1.ok?"Blocked "+Y+". You can unblock in Settings.":c1.message||"Could not block."),u(null),c1.ok&&await o1()},report:()=>p&&g({kind:"report",to:p}),close:()=>u(null)},B={close:()=>g(null),open:Y=>g(Y),pickFriend:Y=>{u(Y),g(null)},say:D,nameOf:G1,toggleOption:O,ackNote:Y=>{R1.current.push(Y)},sendGift:(Y,c1)=>{N1(Y,"gift",{hat:c1}),K.current.visit(Array.from(H.current.values()),q1,Y,"star"),D("You gave "+G1(Y)+" a "+R4(c1).toLowerCase())},sendNote:(Y,c1)=>{N1(Y,"note",{text:c1}),D("You left "+G1(Y)+" a note")},report:async(Y,c1)=>{let v1=await T1.serverReport(Y,c1);D(v1.ok?"Thanks. Your report was sent.":v1.message||"Could not send the report.")},openSettings:()=>n2.Navigate(m3)},f1=()=>{U1.current?H1():v?g(null):p?u(null):n2.NavigateBack()},q=P1(p),n1=q?Fi(q):null,z1=v&&v.kind==="game"?O1.ring.find(Y=>Y.appid===v.appid):void 0,m1=O1.counts,D1=Z0(a.w,a.h);return window.SP_REACT.createElement("div",{ref:i,className:"fp-root"},window.SP_REACT.createElement("style",null,Ii),window.SP_REACT.createElement(r2,{onCancel:f1,style:{position:"absolute",left:0,top:0,right:0,bottom:0}},window.SP_REACT.createElement("div",{onClick:b1,style:{position:"absolute",left:0,top:0,right:0,bottom:0}},window.SP_REACT.createElement("canvas",{ref:t,className:"fp-canvas"})),c==="ready"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("div",{className:"fp-head"},window.SP_REACT.createElement("div",{className:"fp-title"},"Friend Plaza"),window.SP_REACT.createElement("span",{className:"fp-chip"},m1.online," online"),window.SP_REACT.createElement("span",{className:"fp-chip game"},m1.playing," in-game")),window.SP_REACT.createElement("div",{className:"fp-meta"},"People who use Friend Plaza")),window.SP_REACT.createElement("div",{ref:n,className:"fp-world"},c==="ready"&&!v&&(_?window.SP_REACT.createElement("div",{className:"fp-store plain",style:{left:D1.x-62,top:D1.y-138}},window.SP_REACT.createElement(Ce,null),"Friend Store"):window.SP_REACT.createElement(r2,{className:"fp-store",focusClassName:"fp-focus",style:{left:D1.x-62,top:D1.y-138},onActivate:Q,onClick:Q,onFocus:()=>{e1.current={x:D1.x,y:D1.y}},onGamepadFocus:()=>{e1.current={x:D1.x,y:D1.y}}},window.SP_REACT.createElement(Ce,null),"Friend Store")),_&&A&&window.SP_REACT.createElement("div",{className:"fp-prompt",style:{left:D1.x-60,top:D1.y-168}},"A: Enter the store"),c==="ready"&&!v&&V2.map(Y=>window.SP_REACT.createElement(Vi,{key:Y.entry.appid,zone:Y,plain:_,autoFocus:m?Y.entry.appid===m:Y.index===0,onOpen:a2,onFocusZone:c1=>{e1.current={x:c1.x,y:c1.y}},online:O1.list.filter(c1=>c1.home===Y.entry.appid).length}))),c==="ready"&&!v&&!_&&window.SP_REACT.createElement("div",{className:"fp-tools"},window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(f7,null),tip:"Walk",onAct:t1}),window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(y7,null),tip:"Zoom out",iconOnly:!0,onAct:()=>P(Y=>Math.max(0,Y-1))}),window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(z7,null),tip:"Zoom in",iconOnly:!0,onAct:()=>P(Y=>Math.min(me.length-1,Y+1))}),window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(v7,null),tip:"Me",badge:X.inbox.length+_t().length,onAct:()=>{u(null),g({kind:"me"})}}),window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(g7,null),tip:"All friends",onAct:()=>{u(null),g({kind:"friends"})}}),window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(M7,null),tip:"Refresh",onAct:()=>{u(null),y1()}}),window.SP_REACT.createElement(N3,{icon:window.SP_REACT.createElement(w7,null),tip:"Back",onAct:()=>n2.NavigateBack()})),_&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement(r2,{className:"fp-walk",onActivate:u1,onClick:u1,onGamepadDirection:r1,autoFocus:!0}),window.SP_REACT.createElement("div",{className:"fp-hints"},window.SP_REACT.createElement("div",null,window.SP_REACT.createElement("span",{className:"fp-g"},"D"),"Move"),window.SP_REACT.createElement("div",null,window.SP_REACT.createElement("span",{className:"fp-g"},"A"),A?"Enter store":"Greet"),window.SP_REACT.createElement("div",null,window.SP_REACT.createElement("span",{className:"fp-g"},"B"),"Stop walking"))),L.length>0&&!v&&window.SP_REACT.createElement("div",{className:"fp-feed"},L.map(Y=>window.SP_REACT.createElement("div",{key:Y.id},Y.text))),c==="ready"&&!v&&!_&&q&&p!==q1&&window.SP_REACT.createElement(Ei,{friend:q,hasApp:W1,isStranger:S1,a:z2}),n1&&q&&window.SP_REACT.createElement("div",{ref:e,className:"fp-bubble",style:{visibility:"hidden"}},window.SP_REACT.createElement(Q5,{f:q}),window.SP_REACT.createElement("div",{style:{minWidth:0}},window.SP_REACT.createElement("div",{className:"fp-bn "+ve(q)},q.name,X.friends.get(q.steamid)?.online?window.SP_REACT.createElement("span",{className:"fp-live"},"here now"):null),window.SP_REACT.createElement("div",{className:"fp-bl"},n1.head),window.SP_REACT.createElement("div",{className:"fp-bs"},n1.sub))),c==="loading"&&window.SP_REACT.createElement("div",{className:"fp-card"},window.SP_REACT.createElement("h2",null,"Opening the plaza..."),window.SP_REACT.createElement("p",null,"Just a moment.")),c==="error"&&window.SP_REACT.createElement("div",{className:"fp-card"},window.SP_REACT.createElement("h2",null,"The plaza couldn't load"),window.SP_REACT.createElement("p",null,o),window.SP_REACT.createElement(r2,{className:"fp-btn",focusClassName:"fp-focus",onActivate:()=>y1(),onClick:()=>y1()},"Try again")," ",window.SP_REACT.createElement(r2,{className:"fp-btn",focusClassName:"fp-focus",onActivate:()=>n2.Navigate(m3),onClick:()=>n2.Navigate(m3)},"Settings")," ",window.SP_REACT.createElement(r2,{className:"fp-btn",focusClassName:"fp-focus",onActivate:()=>n2.NavigateBack(),onClick:()=>n2.NavigateBack()},"Back")),c==="ready"&&O1.list.length===0&&!v&&window.SP_REACT.createElement("div",{className:"fp-notice"},X.signedIn?"Nobody who uses Friend Plaza is online right now. Ask a friend to open it, or walk to the Friend Store.":"You are not connected to a server, so there is nobody to show yet. Open Me > All settings (or the Quick Access panel > Settings) and connect to your group's server."),v&&h&&window.SP_REACT.createElement(Bi,{drawer:v,prefs:h,people:O1,entry:z1,a:B})))}var qi=`
.fpq-box{padding:10px 12px;border-radius:8px;background:rgba(255,255,255,.07);font-size:12.5px;line-height:1.45;margin:4px 0}
.fpq-err{background:rgba(229,72,77,.22)}
`;function Ki(){b4();let[i,t]=F1(null),[e,n]=F1(""),a=V1(!0),r=async()=>{try{let s=await T1.getState();if(!a.current)return;t(s),n("")}catch(s){a.current&&n(s instanceof Error?s.message:String(s))}};o2(()=>(a.current=!0,r().then(()=>{try{let s=window.App?.m_CurrentUser?.strSteamID;typeof s=="string"&&T1.setSteamidHint(s).then(()=>r()).catch(()=>{})}catch{}}),()=>{a.current=!1}),[]);let c=s=>{K0.CloseSideMenus(),n2.Navigate(s)};return e?window.SP_REACT.createElement(g0,{title:"Friend Plaza"},window.SP_REACT.createElement("style",null,qi),window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement("div",{className:"fpq-box fpq-err"},"Friend Plaza couldn't start. ",e," If this keeps happening, send the last lines of the log in ~/homebrew/logs/Friend Plaza/.")),window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement(v0,{layout:"below",onClick:()=>{n(""),r()}},"Retry"))):i?window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("style",null,qi),!i.setup_done&&window.SP_REACT.createElement(g0,{title:"Welcome"},window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement("div",{className:"fpq-box"},"First time here? A short guide helps you sign in and make your character.")),window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement(v0,{layout:"below",onClick:()=>c(ot)},"Start setup"))),window.SP_REACT.createElement(g0,{title:"Friend Plaza"},window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement(v0,{layout:"below",onClick:()=>c(lt)},"Open the plaza")),window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement(v0,{layout:"below",onClick:()=>c(m3)},"Settings")),X.error&&window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement("div",{className:"fpq-box fpq-err"},X.error)))):window.SP_REACT.createElement(g0,{title:"Friend Plaza"},window.SP_REACT.createElement(Q4,null,window.SP_REACT.createElement(s7,{label:"Loading..."})))}var T2={running:!1,msg:""};async function ye(){if(!T2.running){T2.running=!0,T2.msg="Opening Steam's sign-in page...",S2();try{let i=await T1.serverLoginStart();if(!i.ok||!i.url){T2.msg=i.message||"Could not start signing in.";return}try{K0.CloseSideMenus()}catch{}n2.NavigateToExternalWeb(i.url),T2.msg="Waiting for you to sign in with Steam...",S2();for(let t=0;t<90;t++)if(await new Promise(n=>setTimeout(n,2e3)),(await T1.serverLoginPoll()).done){T2.msg="Signed in.",X.signedIn=!0;try{n2.NavigateBack()}catch{}return}T2.msg="Sign in timed out. Try again."}catch(i){T2.msg=i instanceof Error?i.message:String(i)}finally{T2.running=!1,S2()}}}var Ji=`
.st-root{position:relative;margin-top:40px;height:calc(100% - 40px);display:flex;flex-direction:column;gap:10px;padding:18px 32px 78px;box-sizing:border-box;background:radial-gradient(1100px 680px at 50% 46%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;font-size:14px;overflow:hidden;overflow:clip}
.st-top{display:flex;align-items:center;gap:14px}
.st-title{font-size:28px;font-weight:800;color:#fff}
.st-sub{color:#8f98a0;font-size:12.5px}
.st-list{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:6px;padding-right:8px}
.st-sec{font-weight:800;color:#66c0f4;font-size:12px;padding:14px 4px 2px;text-transform:uppercase;letter-spacing:.6px}
.st-row{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:3px;background:rgba(255,255,255,.05);box-sizing:border-box;margin:0}
.st-row.fp-focus{background:#fff;box-shadow:0 0 16px rgba(102,192,244,.5)}
.st-row .lab{flex:1;min-width:0}
.st-row .lab b{display:block;font-size:14px;color:#dfe6ec}
.st-row .lab span{display:block;font-size:12px;color:#8f98a0;margin-top:2px;line-height:1.35}
.st-row.fp-focus .lab b{color:#0e141b}.st-row.fp-focus .lab span{color:#4a5560}
.st-val{font-weight:800;color:#90ba3c;white-space:nowrap}
.st-val.off{color:#8f98a0}
.st-row.fp-focus .st-val{color:#2c4a05}
.st-box{padding:10px 14px;border-radius:3px;background:rgba(255,255,255,.05);line-height:1.5;font-size:13px}
.st-box.bad{background:rgba(229,72,77,.2);color:#ffb4b6}
.st-box.ok{background:rgba(144,186,60,.16);color:#c9e48a}
.st-seg{display:flex;gap:6px;flex-wrap:wrap}
.st-seg > *{margin:0 !important;min-width:96px !important;height:38px !important;padding:0 14px !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;font-weight:700 !important;display:flex !important;align-items:center;justify-content:center;width:auto !important;flex:none !important}
.st-seg .on{background:#66c0f4 !important;color:#06121c !important}
.st-diag{display:flex;gap:8px;align-items:flex-start;font-size:13px;line-height:1.35;padding:2px 0}
.st-foot{display:flex;gap:10px}
.st-foot > *{margin:0 !important;height:44px !important;min-width:140px !important;padding:0 20px !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;font-weight:800 !important;display:flex !important;align-items:center;justify-content:center;width:auto !important;flex:none !important}
`;function a4(i){let t=()=>{i.onAct&&i.onAct()};return window.SP_REACT.createElement(r2,{className:"st-row",focusClassName:"fp-focus",onActivate:t,onClick:t,autoFocus:i.autoFocus},window.SP_REACT.createElement("div",{className:"lab"},window.SP_REACT.createElement("b",null,i.title),i.sub?window.SP_REACT.createElement("span",null,i.sub):null),i.value?window.SP_REACT.createElement("div",{className:"st-val"+(i.off?" off":"")},i.value):null)}function fh(i){return window.SP_REACT.createElement("div",{className:"st-seg"},i.options.map(([t,e])=>window.SP_REACT.createElement(M2,{key:t,className:i.value===t?"on":"",onClick:()=>i.onPick(t)},e)))}function d0(i){return window.SP_REACT.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},i.children)}function $i(){b4();let[i,t]=F1(null),[e,n]=F1(null),[a,r]=F1(""),[c,s]=F1(!1),[o,l]=F1(""),[h,d]=F1(""),[p,u]=F1(null),[v,g]=F1(""),[m,f]=F1(!1),[_,b]=F1(!1),[y,P]=F1(!1),A=V1(!0),E=async()=>{try{let H=await T1.getState(),I=null;try{I=await T1.serverState()}catch{I=null}if(!A.current)return;t(H),n(I)}catch(H){A.current&&r(H instanceof Error?H.message:String(H))}};o2(()=>(A.current=!0,E(),(async()=>{try{let H=await T1.serverSync([]);H.ok&&m4(H)}catch{}})(),()=>{A.current=!1}),[]),o2(()=>{!T2.running&&T2.msg==="Signed in."&&E()},[T2.running]);let T=async H=>{s(!0);try{await H()}catch(I){r(I instanceof Error?I.message:String(I))}A.current&&(s(!1),E())},w=(H,I)=>T(async()=>{await T1.setOption(H,I)});if(!i)return window.SP_REACT.createElement("div",{className:"st-root"},window.SP_REACT.createElement("style",null,Ji),window.SP_REACT.createElement("div",{className:"st-title"},"Settings"),window.SP_REACT.createElement("div",{className:"st-sub"},a||"Loading..."));let M=!!(e&&e.url),L=!!(e&&e.signed_in),D=H=>H?"On":"Off";return window.SP_REACT.createElement(r2,{className:"st-root",onCancel:()=>n2.NavigateBack()},window.SP_REACT.createElement("style",null,Ji),window.SP_REACT.createElement("div",{className:"st-top"},window.SP_REACT.createElement("div",{className:"st-title"},"Settings")),window.SP_REACT.createElement("div",{className:"st-list"},a&&window.SP_REACT.createElement("div",{className:"st-box"},a),window.SP_REACT.createElement("div",{className:"st-sec"},"Steam"),window.SP_REACT.createElement(d0,null,window.SP_REACT.createElement(a4,{title:"Steam ID",sub:(i.steamid||"not found")+(i.steamid_source?" (from "+i.steamid_source+")":"")+(i.friend_count?" - "+i.friend_count+" Steam friends in Steam's own files (used only to tell the server who your friends are)":"")+". Press A to change the ID only if it is wrong.",onAct:()=>P(!y)}),y&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement(x0,{label:"Steam ID (17 digits, starts with 7656119)",value:h,onChange:H=>d(H.target.value)}),window.SP_REACT.createElement("div",{className:"st-seg"},window.SP_REACT.createElement(M2,{onClick:()=>T(async()=>{let H=await T1.setSteamid(h);r(H.message||(H.ok?"Steam ID saved.":""))})},"Save Steam ID")))),window.SP_REACT.createElement("div",{className:"st-sec"},"Online features"),window.SP_REACT.createElement(d0,null,!M||_?window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("div",{className:"st-box"},"Enter the address of your group's Friend Plaza server (like https://friend-plaza.name.workers.dev). Leave it out to use the plugin without a server."),window.SP_REACT.createElement(x0,{label:"Server address",value:o,onChange:H=>l(H.target.value)}),window.SP_REACT.createElement("div",{className:"st-seg"},window.SP_REACT.createElement(M2,{disabled:c||!o.trim(),onClick:()=>T(async()=>{let H=await T1.setServerUrl(o);r(H.message||(H.ok?"Saved.":"")),H.ok&&b(!1)})},"Save address"))):window.SP_REACT.createElement(a4,{title:"Server address",sub:"Press A to change it.",value:e?e.url.replace("https://",""):"",onAct:()=>b(!0)}),M&&!L&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,(T2.msg||e&&e.error)&&window.SP_REACT.createElement("div",{className:"st-box"+(e&&e.error?" bad":"")},T2.msg||e&&e.error),window.SP_REACT.createElement(a4,{title:T2.running?"Waiting for Steam...":"Sign in with Steam",sub:"Opens Steam's own login page. Your password is never shared.",onAct:()=>{T2.running||ye()}})),M&&L&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("div",{className:"st-box ok"},"Signed in with Steam (",e?e.steamid:"",").",e&&e.error?" Last problem: "+e.error:""),window.SP_REACT.createElement(a4,{title:"Use online features",sub:"Switch off to stop sending anything to the server.",value:D(e?e.on:!0),off:!(e&&e.on),onAct:()=>T(async()=>{await T1.serverSetOn(!(e&&e.on))})}),window.SP_REACT.createElement(a4,{title:"Sign out",onAct:()=>T(async()=>{await T1.serverLogout(),X.signedIn=!1,S2()})}),window.SP_REACT.createElement(a4,{title:m?"Press again to delete":"Delete my server data",sub:"Removes your character, stamps, hats, points and games from the server.",onAct:()=>{if(!m){f(!0),r("Press again to delete everything the server holds about you.");return}f(!1),T(async()=>{let H=await T1.serverDeleteMe();r(H.message||""),X.signedIn=!1,X.me=He(),X.games=[],X.friends=new Map,S2()})}})),M&&window.SP_REACT.createElement(a4,{title:"Test the server",onAct:()=>T(async()=>{let H=await T1.serverTest();r(H.message||"")})}),M&&!_&&window.SP_REACT.createElement(a4,{title:"Change the server address",onAct:()=>b(!0)})),window.SP_REACT.createElement("div",{className:"st-sec"},"Who you see (only people who use Friend Plaza)"),window.SP_REACT.createElement(d0,null,window.SP_REACT.createElement(a4,{title:"Other plugin users",sub:"People who use Friend Plaza but are not your Steam friends.",value:D(i.show_others),off:!i.show_others,onAct:()=>w("show_others",!i.show_others)}),window.SP_REACT.createElement(a4,{title:"Let other plugin users see me",sub:"Non-friends who use the plugin can see your character. Friends always can.",value:D(i.visible_public),off:!i.visible_public,onAct:()=>w("visible_public",!i.visible_public)})),window.SP_REACT.createElement("div",{className:"st-sec"},"Graphics"),window.SP_REACT.createElement(d0,null,window.SP_REACT.createElement(a4,{title:"Graphics quality",sub:i.quality==="auto"?"Auto lowers the detail by itself if the plaza stutters. Right now: "+l0[Y0.level].name+".":"Fixed at "+i.quality+"."}),window.SP_REACT.createElement(fh,{value:i.quality,options:[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]],onPick:H=>w("quality",H)}),window.SP_REACT.createElement(a4,{title:"Battery saver",sub:"Draws at a lower frame rate and with fewer characters.",value:D(i.low_power),off:!i.low_power,onAct:()=>w("low_power",!i.low_power)})),window.SP_REACT.createElement("div",{className:"st-sec"},"Blocked players"),window.SP_REACT.createElement(d0,null,X.blocked.length===0?window.SP_REACT.createElement("div",{className:"st-box"},"Nobody. You can block a player from their action bar in the plaza."):X.blocked.map(H=>window.SP_REACT.createElement(a4,{key:H.steamid,title:H.name||H.steamid,sub:"Press A to unblock",onAct:()=>T(async()=>{let I=await T1.serverUnblock(H.steamid);r(I.ok?"Unblocked.":I.message||"Could not unblock.");let K=await T1.serverSync([]);K.ok&&m4(K)})}))),window.SP_REACT.createElement("div",{className:"st-sec"},"Help"),window.SP_REACT.createElement(d0,null,window.SP_REACT.createElement(a4,{title:"Run the setup guide",sub:"The short first-run guide again.",onAct:()=>n2.Navigate(ot)}),window.SP_REACT.createElement(a4,{title:c?"Checking...":"Check setup",sub:"Tests your key, Steam ID and friend list.",onAct:()=>T(async()=>{u(null);let H=await T1.testSetup();u(H.lines)})}),p&&p.map((H,I)=>window.SP_REACT.createElement("div",{key:I,className:"st-diag"},H.ok?window.SP_REACT.createElement(Q0,{color:"#90ba3c",style:{flex:"none",marginTop:2}}):window.SP_REACT.createElement(x7,{color:"#e5484d",style:{flex:"none",marginTop:2}}),window.SP_REACT.createElement("span",null,H.text))),window.SP_REACT.createElement(a4,{title:"Save diagnostics",sub:"Writes a short text file (no keys or passwords) you can send to whoever helps you.",onAct:()=>T(async()=>{let H=await T1.exportDiagnostics();g(H.ok?"Saved to "+H.path:H.message||"Could not save.")})}),v&&window.SP_REACT.createElement("div",{className:"st-box ok"},v))),window.SP_REACT.createElement("div",{className:"st-foot"},window.SP_REACT.createElement(M2,{onClick:()=>n2.NavigateBack()},"Back")))}function ji(i){let t=V1(null),e=V1(i.look);return e.current=i.look,o2(()=>{let n=t.current;if(!n)return;let a=null;try{a=new J4(n,!0)}catch{a=null}if(!a)return;let r=a,{width:c,height:s}=i;r.resize(c,s),r.setZoom(i.zoom||5.5);let o=M3({steamid:"76561197960265728",name:"me",state:"online",playing:!1},!1,c/2,s/2);o.x=c/2,o.y=s*.57,o.dir=1;let l=0,h=performance.now(),d=0,p=u=>{l=requestAnimationFrame(p);let v=Math.min(.1,(u-h)/1e3);h=u,d+=v,o.look=e.current,r.frame([o],{selected:null,t:d,dt:v,low:!1,spin:Math.sin(d*.8)*.8})};return l=requestAnimationFrame(p),()=>{cancelAnimationFrame(l),r.dispose()}},[]),window.SP_REACT.createElement("canvas",{ref:t,width:i.width,height:i.height,style:{width:i.width,height:i.height,borderRadius:4,display:"block"}})}var Qi={welcome:"Welcome",server:"Your group's server",login:"Sign in",char:"Your character",done:"All set"},ta=`
.su-root{position:relative;margin-top:40px;height:calc(100% - 40px);display:flex;gap:28px;padding:22px 32px 78px;box-sizing:border-box;background:radial-gradient(1100px 680px at 50% 46%,#22394f 0%,#141d28 58%,#0b1017 100%);color:#c6d4df;font-family:"Motiva Sans","Nunito Sans","Noto Sans",sans-serif;font-size:14px;overflow:hidden;overflow:clip}
.su-rail{flex:none;width:210px;display:flex;flex-direction:column;gap:6px;padding-top:6px}
.su-logo{font-size:24px;font-weight:800;color:#fff;margin-bottom:10px}
.su-step{padding:8px 12px;border-radius:3px;font-weight:700;color:#8f98a0;display:flex;gap:8px;align-items:center}
.su-step.on{background:rgba(102,192,244,.2);color:#fff}
.su-step.done{color:#90ba3c}
.su-main{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}
.su-h{font-size:28px;font-weight:800;color:#fff}
.su-body{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:12px;padding-right:6px}
.su-box{padding:12px 14px;border-radius:3px;background:rgba(255,255,255,.06);line-height:1.5;font-size:14px}
.su-box.ok{background:rgba(144,186,60,.16);color:#c9e48a}
.su-box.bad{background:rgba(229,72,77,.2);color:#ffb4b6}
.su-row{display:flex;gap:10px;flex-wrap:wrap}
.su-row > *{margin:0 !important;min-width:150px !important;height:44px !important;padding:0 16px !important;font-weight:700 !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;display:flex !important;align-items:center;justify-content:center;flex:none !important;width:auto !important}
.su-row .go{background:#66c0f4 !important;color:#06121c !important}
.su-foot{display:flex;gap:10px;justify-content:space-between}
.su-foot > *{margin:0 !important;height:46px !important;min-width:140px !important;padding:0 20px !important;font-weight:800 !important;border-radius:3px !important;background:rgba(255,255,255,.1) !important;color:#dfe6ec !important;display:flex !important;align-items:center;justify-content:center;flex:none !important;width:auto !important}
.su-foot .go{background:#66c0f4 !important;color:#06121c !important}
.su-foot .off{opacity:.4}
.su-char{display:flex;gap:22px;align-items:flex-start}
.su-diag{display:flex;gap:8px;align-items:flex-start;font-size:13px;line-height:1.35;padding:2px 0}
`;function q0(i){return i[Math.floor(Math.random()*i.length)]}function mh(i){return{skin:q0(Mt),hair:q0(x3),hairStyle:Math.floor(Math.random()*9),shirt:q0(zt),pants:q0(yt),shoes:q0(wt),eyes:Math.floor(Math.random()*5),brows:Math.floor(Math.random()*4),mouth:Math.floor(Math.random()*5),glasses:Math.random()<.2,stache:Math.random()<.12,blush:Math.random()<.5,head:.94+Math.random()*.12,hat:i.hat,acc:i.acc}}function ea(){b4();let[i,t]=F1(null),[e,n]=F1(null),[a,r]=F1("welcome"),[c,s]=F1(""),[o,l]=F1(!1),[h,d]=F1(""),[p,u]=F1(!1),[v,g]=F1(null),[m,f]=F1(!1),_=V1(!0),b=async()=>{try{let I=await T1.getState(),K=null;try{K=await T1.serverState()}catch{K=null}if(!_.current)return;t(I),n(K),g(Z=>Z||K&&K.figure||Z4(I.steamid||"76561197960265728"))}catch(I){_.current&&s(I instanceof Error?I.message:String(I))}};o2(()=>(_.current=!0,b(),()=>{_.current=!1}),[]),o2(()=>{if(a!=="login")return;let I=setInterval(()=>{b()},2500);return()=>clearInterval(I)},[a]);let y=async I=>{l(!0);try{await I()}catch(K){s(K instanceof Error?K.message:String(K))}_.current&&(l(!1),b())};if(!i||!v)return window.SP_REACT.createElement("div",{className:"su-root"},window.SP_REACT.createElement("style",null,ta),window.SP_REACT.createElement("div",{className:"su-h"},"Loading..."));let P=!!(e&&e.url)&&!p,A=!!(e&&e.signed_in),E=["welcome","server",...P?["login"]:[],"char","done"],T=Math.max(0,E.indexOf(a)),w=I=>{s(""),r(E[Math.max(0,Math.min(E.length-1,T+I))])},M=()=>{T>0?w(-1):n2.NavigateBack()},L=a==="login"?A:!0,D=async()=>{try{await T1.setOption("setup_done",!0)}catch{}n2.Navigate(lt)},H=async()=>{let I=await T1.serverSaveFigure(v);I.ok?(X.me.figure=v,S2(),f(!0),s(A?"Saved. Your friends will see this character.":"Saved on this Deck. It is shared once you sign in.")):s(I.message||"Could not save.")};return window.SP_REACT.createElement(r2,{className:"su-root",onCancel:M},window.SP_REACT.createElement("style",null,ta),window.SP_REACT.createElement("div",{className:"su-rail"},window.SP_REACT.createElement("div",{className:"su-logo"},"Friend Plaza"),E.map((I,K)=>window.SP_REACT.createElement("div",{key:I,className:"su-step"+(I===a?" on":K<T?" done":"")},K<T?window.SP_REACT.createElement(Q0,null):window.SP_REACT.createElement("span",null,K+1,"."),Qi[I]))),window.SP_REACT.createElement("div",{className:"su-main"},window.SP_REACT.createElement("div",{className:"su-h"},Qi[a]),window.SP_REACT.createElement("div",{className:"su-body"},a==="welcome"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("div",{className:"su-box"},"Friend Plaza shows you and your friends as little 3D characters, gathered around the games they play. Only people who use the plugin appear. This short guide takes about two minutes."),window.SP_REACT.createElement("div",{className:"su-box"},"1. Connect to your group's Friend Plaza server (this is how you see each other).",window.SP_REACT.createElement("br",null),"2. Sign in with Steam.",window.SP_REACT.createElement("br",null),"3. Make your first character.")),a==="server"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,e&&e.url?window.SP_REACT.createElement("div",{className:"su-box ok"},"Server address: ",e.url):window.SP_REACT.createElement("div",{className:"su-box"},"Enter the address of your group's Friend Plaza server (like https://friend-plaza.name.workers.dev). If the plugin folder came with a server.txt, it is already filled in. Without a server you will only see yourself, because the plaza shows people who use the plugin."),!(e&&e.url)&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement(x0,{label:"Server address",value:h,onChange:I=>d(I.target.value)}),window.SP_REACT.createElement("div",{className:"su-row"},window.SP_REACT.createElement(M2,{className:"go",disabled:o||!h.trim(),onClick:()=>y(async()=>{let I=await T1.setServerUrl(h);s(I.message||(I.ok?"Saved.":"")),u(!1)})},"Save address"))),window.SP_REACT.createElement("div",{className:"su-row"},e&&e.url&&window.SP_REACT.createElement(M2,{disabled:o,onClick:()=>y(async()=>{let I=await T1.serverTest();s(I.message||"")})},"Test the server"),window.SP_REACT.createElement(M2,{onClick:()=>{u(!0),r("char")}},"Skip (I will only see myself)"))),a==="login"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,A?window.SP_REACT.createElement("div",{className:"su-box ok"},"Signed in with Steam (",e?e.steamid:"",")."):window.SP_REACT.createElement("div",{className:"su-box"},"Press the button. Steam's own login page opens; sign in there. Your Steam password is never shared with the plugin or the server. When you are done this screen comes back by itself."),T2.msg&&!A&&window.SP_REACT.createElement("div",{className:"su-box"},T2.msg),!A&&window.SP_REACT.createElement("div",{className:"su-row"},window.SP_REACT.createElement(M2,{className:"go",disabled:T2.running,onClick:()=>{ye()}},T2.running?"Waiting for Steam...":"Sign in with Steam"))),a==="char"&&window.SP_REACT.createElement("div",{className:"su-char"},window.SP_REACT.createElement(ji,{look:v,width:300,height:340}),window.SP_REACT.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,flex:1}},window.SP_REACT.createElement("div",{className:"su-box"},"This is how you look to others. Roll for a new look, keep the one made from your Steam ID, or open the Friend Store for every detail (hats and more unlock as you play)."),window.SP_REACT.createElement("div",{className:"su-row"},window.SP_REACT.createElement(M2,{onClick:()=>{g(mh(v)),f(!1)}},"Roll a new look"),window.SP_REACT.createElement(M2,{onClick:()=>{g(Z4(i&&i.steamid||"76561197960265728")),f(!1)}},"Use my Steam look")),window.SP_REACT.createElement("div",{className:"su-row"},window.SP_REACT.createElement(M2,{className:"go",disabled:o,onClick:()=>y(H)},m?"Saved":"Save this look"),window.SP_REACT.createElement(M2,{onClick:()=>n2.Navigate(fe)},"Open the Friend Store")))),a==="done"&&window.SP_REACT.createElement(window.SP_REACT.Fragment,null,window.SP_REACT.createElement("div",{className:"su-box ok"},"You are ready."),window.SP_REACT.createElement("div",{className:"su-box"},"Server: ",P?A?"signed in":"set, not signed in":"not set (you will only see yourself)",window.SP_REACT.createElement("br",null),"You can change all of this later in Settings, and walk to the Friend Store in the plaza to change your character.")),c&&window.SP_REACT.createElement("div",{className:"su-box"},c)),window.SP_REACT.createElement("div",{className:"su-foot"},window.SP_REACT.createElement(M2,{onClick:M},T===0?"Close":"Back"),a==="done"?window.SP_REACT.createElement(M2,{className:"go",onClick:D},"Open the plaza"):window.SP_REACT.createElement(M2,{className:"go"+(L?"":" off"),disabled:!L,onClick:()=>w(1)},a==="login"&&!A?"Sign in first":"Next"))))}var sf=c7(()=>(T4.addRoute(lt,pt("The plaza",Xi)),T4.addRoute(pe,pt("The Friend Store",bi)),T4.addRoute(f3,pt("The game",wi)),T4.addRoute(ot,pt("The setup guide",ea)),T4.addRoute(m3,pt("Settings",$i)),{name:"Friend Plaza",titleView:window.SP_REACT.createElement("div",{className:o7.Title},"Friend Plaza"),content:window.SP_REACT.createElement(Ki,null),icon:window.SP_REACT.createElement(m7,null),onDismount(){T4.removeRoute(lt),T4.removeRoute(pe),T4.removeRoute(f3),T4.removeRoute(ot),T4.removeRoute(m3)}}));export{sf as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
