import{r as a,j as e,R as v}from"./index-BoqPuKA5.js";import{m as p}from"./mapbox-BQctAmbH.js";import{C as d,R as _,D as L,r as b}from"./chart-DnBhWB3K.js";import{C as y}from"./circular-progress-DhsLh1No.js";import{T as S,a as A,b as C,c as I,d as M,e as g}from"./table-components-DY_Vlltb.js";import{r as z}from"./constants-DQSfYX3g.js";const H=()=>{const s=a.useRef(null),t=a.useRef(null);return a.useEffect(()=>{p.accessToken="pk.eyJ1IjoiaGF5YW9md2FyIiwiYSI6ImNsY3owYnk5cTA2OG4zcXFvZTV4MDV2NTAifQ.D7XPou710-slNxaYEK1XfQ";const r=new p.LngLat(46.3253,24.4036),l=new p.LngLat(46.98,24.9836),n=new p.LngLatBounds(r,l);return t.current=new p.Map({container:s.current,style:"mapbox://styles/hayaofwar/cm2y9jb66006701qzbdxx1kp8?optimize=true",center:[46.6753,24.7136],zoom:10,attributionControl:!1,maxBounds:n}),()=>{t.current.remove()}},[]),e.jsx("div",{id:"map-container",className:"mt-6",ref:s,style:{height:"550px",width:"500px"}})},E=s=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:310,height:587,viewBox:"0 0 310 587",fill:"none",...s},a.createElement("path",{d:"M2.22314 25.2692L265.179 1.84863L298.961 23.0198C304.797 26.6771 308.34 33.0796 308.34 39.9667V584.395L87.0945 560.315H2.22314V25.2692Z",fill:"url(#paint0_linear_394_869)",fillOpacity:.4,stroke:"url(#paint1_linear_394_869)",strokeOpacity:.6,strokeWidth:3}),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear_394_869",x1:345.336,y1:-113.275,x2:-55.8925,y2:-63.9856,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#061214",stopOpacity:.53}),a.createElement("stop",{offset:.521816,stopColor:"#104249",stopOpacity:.29}),a.createElement("stop",{offset:1,stopColor:"#0AE0FF",stopOpacity:0})),a.createElement("linearGradient",{id:"paint1_linear_394_869",x1:330.828,y1:85.9649,x2:34.9275,y2:211.757,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#0AE0FF"}),a.createElement("stop",{offset:1,stopColor:"#0AE0FF",stopOpacity:0})))),T="label";function w(s,t){typeof s=="function"?s(t):s&&(s.current=t)}function B(s,t){const r=s.options;r&&t&&Object.assign(r,t)}function N(s,t){s.labels=t}function R(s,t){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:T;const l=[];s.datasets=t.map(n=>{const c=s.datasets.find(f=>f[r]===n[r]);return!c||!n.data||l.includes(c)?{...n}:(l.push(c),Object.assign(c,n),c)})}function K(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T;const r={labels:[],datasets:[]};return N(r,s.labels),R(r,s.datasets,t),r}function W(s,t){const{height:r=150,width:l=300,redraw:n=!1,datasetIdKey:c,type:f,data:i,options:u,plugins:O=[],fallbackContent:F,updateMode:j,...D}=s,m=a.useRef(null),o=a.useRef(),h=()=>{m.current&&(o.current=new d(m.current,{type:f,data:K(i,c),options:u&&{...u},plugins:O}),w(t,o.current))},x=()=>{w(t,null),o.current&&(o.current.destroy(),o.current=null)};return a.useEffect(()=>{!n&&o.current&&u&&B(o.current,u)},[n,u]),a.useEffect(()=>{!n&&o.current&&N(o.current.config.data,i.labels)},[n,i.labels]),a.useEffect(()=>{!n&&o.current&&i.datasets&&R(o.current.config.data,i.datasets,c)},[n,i.datasets]),a.useEffect(()=>{o.current&&(n?(x(),setTimeout(h)):o.current.update(j))},[n,u,i.labels,i.datasets,j]),a.useEffect(()=>{o.current&&(x(),setTimeout(h))},[f]),a.useEffect(()=>(h(),()=>x()),[]),v.createElement("canvas",Object.assign({ref:m,role:"img",height:r,width:l},D),F)}const Y=a.forwardRef(W);function k(s,t){return d.register(t),a.forwardRef((r,l)=>v.createElement(Y,Object.assign({},r,{ref:l,type:s})))}const G=k("radar",_),P=k("doughnut",L);d.register(...b);d.defaults.font.family="Saudia-sans";const U={labels:["لوحات اعلانية","كتابة على الجدران","تسرب مياه","مخاطر الصزف الصحي ","بناء","مستولين"],datasets:[{label:"معدل المخاطر في  دارة صفا",data:[40,30,50,20,40,30],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1},{label:"معدل المخاطر في  دارة الشاهقة",data:[20,40,20,30,20,40],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]},V={responsive:!0,elements:{line:{borderWidth:3}},plugins:{legend:{labels:{font:{size:10}}}},scales:{r:{angleLines:{display:!0},grid:{color:"gray"},suggestedMin:0,suggestedMax:50,ticks:{stepSize:10,mirror:!0,backdropColor:"transparent",backdropPadding:0}}}},X=()=>e.jsx("div",{className:"bg-dark  rounded-lg shadow ",children:e.jsx("div",{style:{height:"300px",width:"400px"},children:e.jsx(G,{data:U,options:V})})});d.register(...b);d.defaults.font.family="Saudia-sans";d.defaults.color="white";const Q=()=>e.jsxs("div",{className:"relative w-1/4 text-center ",children:[e.jsx("h6",{className:"mx-auto mt-8 font-bold text-cyanish",children:" المؤشرات"}),e.jsxs("div",{className:"flex flex-col justify-between  h-3/5",children:[e.jsx("div",{className:"bg-primary-400 rounded p-4 shadow",children:e.jsx(X,{})},"bar"),e.jsxs("div",{className:" flex flex-row justify-between gap-x-2",children:[e.jsxs("div",{children:[e.jsx("h6",{children:"تمت معالجتها"}),e.jsx("h3",{className:"mt-2 text-cyanish",children:"90"}),e.jsx(y,{progress:68,fill:"text-[#FFCF5F]"})]}),e.jsxs("div",{children:[e.jsx("h6",{children:" قيد التنفيذ"}),e.jsx("h3",{className:"mt-2 text-cyanish ",children:"19"}),e.jsx(y,{progress:87,fill:"text-[#99C27D]"})]})]})]}),e.jsx(E,{className:"absolute inset-0 scale-x-[-1]"})]}),Z=["الموقع","نوع البلاغ","الحالة"],$=[{location:"جادة صفا",reportType:"حفر",color:0},{location:"دارة صفا",reportType:"إضاءة منخفضة",color:1},{location:"جادة صفا",reportType:"حفر",color:0},{location:"جادة صفا",reportType:"حواجز",color:2},{location:" دارة صفا",reportType:"تسرب",color:1},{location:"شاهقة",reportType:"كتابة على الجدران",color:2},{location:"  الماجدية",reportType:"رمال",color:0}];d.register(...b);const q=()=>{const[s]=a.useState({labels:["حواجز","نفايات","تسرب مياه","عشوائية","حفر","أعمال طرق"],datasets:[{data:[20,28,10,27,5,12],backgroundColor:["#73BCA1","#99C27D","#E1C357","#DCA557","#57AFCE","#DA9167"],hoverOffset:4}]});return e.jsxs("div",{className:"relative w-1/4 text-center",children:[e.jsx("h6",{className:"mx-auto mt-8 font-bold text-cyanish",children:"البلاغات الأخيرة"}),e.jsxs(S,{children:[e.jsx(A,{children:e.jsx(C,{children:Z.map(t=>e.jsx(I,{children:t},t))})}),e.jsx(M,{children:$.map((t,r)=>e.jsxs(C,{className:"[&_td]:p-1 border-b-white/25 ",children:[e.jsxs(g,{children:[" ",t.location]}),e.jsxs(g,{children:[" ",t.reportType]}),e.jsx(g,{children:e.jsx("div",{className:`${z[t.color].className} h-4 w-4`})})]},r))})]}),e.jsx(P,{data:s}),e.jsx(E,{className:"absolute inset-0"})]})},ne=()=>e.jsxs("div",{className:"mx-auto mt-12 flex w-4/5 flex-col items-center",children:[e.jsx("h4",{className:"mx-auto",children:"مؤشر التلوث"}),e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx(q,{}),e.jsx(H,{}),e.jsx(Q,{})]})]});export{ne as default};