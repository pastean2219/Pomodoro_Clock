(this.webpackJsonppomodoro_clock=this.webpackJsonppomodoro_clock||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),o=n(10),a=n.n(o),i=(n(19),n(9)),r=n(6),l=n(11),u=n(12),d=n(14),h=n(13),b=(n(20),n(4)),j=n(3),C=n(0),k=function(e){return Object(C.jsxs)("div",{className:"clock-container",children:[Object(C.jsx)("h1",{id:"timer-label",children:e.currentTimer}),Object(C.jsx)("span",{id:"time-left",children:e.changeToTime(e.clockCount)}),Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsxs)("button",{id:"start_stop",onClick:e.controlPlayPause,children:[Object(C.jsx)(b.a,{icon:j.d}),Object(C.jsx)(b.a,{icon:j.c})]}),Object(C.jsx)("button",{id:"reset",onClick:e.controlReset,children:Object(C.jsx)(b.a,{icon:j.f})})]})]})};n(5).b.add(j.a,j.b,j.e);var m=function(e){var t=e.title.toLowerCase();return Object(C.jsxs)("div",{className:"timer-container",children:[Object(C.jsxs)("h2",{id:"".concat(t,"-label"),children:[e.title," Length"]}),Object(C.jsxs)("div",{className:"flex buttonsSpan",children:[Object(C.jsx)("button",{id:"".concat(t,"-decrement"),onClick:e.handleIncrease,children:Object(C.jsx)(b.a,{icon:j.b})}),Object(C.jsxs)("span",{id:"".concat(t,"-length"),children:[" ",e.count," "]}),Object(C.jsx)("button",{id:"".concat(t,"-increment"),onClick:e.handleDecrease,children:Object(C.jsx)(b.a,{icon:j.e})})]})]})},O=document.getElementById("beep"),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1},s.controlPlayPause=function(){s.state.isPlaying?(clearInterval(s.loop),s.setState({isPlaying:!1})):(s.setState({isPlaying:!0}),s.loop=setInterval((function(){var e=s.state,t=e.clockCount,n=e.currentTimer,c=e.breakCount,o=e.sessionCount;0===t?(s.setState({currentTimer:"Session"===n?"Break":"Session",clockCount:"Session"===n?60*c:60*o}),O.play()):s.setState({clockCount:t-1})}),1e3))},s.controlReset=function(){s.setState({breakCount:5,sessionCount:25,clockCount:1500,currentTimer:"Session",isPlaying:!1}),clearInterval(s.loop)},s.changeToTime=function(e){var t=Math.floor(e/60),n=e%60;return n=n<10?"0"+n:n,"".concat(t=t<10?"0"+t:t," : ").concat(n)},s.handleLengthChange=function(e,t){var n,c=s.state,o=c.sessionCount,a=c.breakCount,i=c.isPlaying,l=c.currentTimer;(n="session"===t?o+e:a+e)>0&&n<61&&!i&&(s.setState(Object(r.a)({},"".concat(t,"Count"),n)),l.toLowerCase()===t&&s.setState({clockCount:60*n}))},s.handleBreakDecrease=function(){var e=s.state,t=e.breakCount,n=e.isPlaying,c=e.currentTimer;t>1&&(n||"Break"!==c?s.setState({breakCount:t-1}):s.setState({breakCount:t-1,clockCount:60*(t-1)}))},s.handleBreakIncrease=function(){var e=s.state,t=e.breakCount,n=e.isPlaying,c=e.currentTimer;t<60&&(n||"Break"!==c?s.setState({breakCount:t+1}):s.setState({breakCount:t+1,clockCount:60*(t+1)}))},s.handleSessionIncrease=function(){var e=s.state,t=e.sessionCount,n=e.isPlaying,c=e.currentTimer;t>1&&(n||"Session"!==c?s.setState({sessionCount:t-1}):s.setState({sessionCount:t-1,clockCount:60*(t-1)}))},s.handleSessionDecrease=function(){var e=s.state,t=e.sessionCount,n=e.isPlaying,c=e.currentTimer;t<60&&(n||"Session"!==c?s.setState({sessionCount:t+1}):s.setState({sessionCount:t+1,clockCount:60*(t+1)}))},s.loop=void 0,s}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.loop)}},{key:"render",value:function(){var e=this.state,t=e.breakCount,n=e.sessionCount,s=e.clockCount,c=e.currentTimer,o={title:"Break",count:t,handleDecrease:this.handleBreakIncrease,handleIncrease:this.handleBreakDecrease},a={title:"Session",count:n,handleDecrease:this.handleSessionDecrease,handleIncrease:this.handleSessionIncrease};return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"Pomodoro Clock"}),Object(C.jsxs)("div",{className:"flex",children:[Object(C.jsx)(m,Object(i.a)({},o)),Object(C.jsx)(m,Object(i.a)({},a))]}),Object(C.jsx)("div",{children:Object(C.jsx)(k,{controlPlayPause:this.controlPlayPause.bind(this),clockCount:s,currentTimer:c,changeToTime:this.changeToTime,controlReset:this.controlReset.bind(this)})})]})}}]),n}(c.a.Component);a.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a44f5543.chunk.js.map