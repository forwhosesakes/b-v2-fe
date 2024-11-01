import{j as e,r as m}from"./index-B3p2Pbw7.js";import{u as j}from"./report.query-DR9V10Ib.js";import{b as A}from"./index-qOl2kQGc.js";/* empty css             */import d from"./house-rounded-s6Io_Y1Y.js";import{p}from"./constants-DQSfYX3g.js";import C from"./location-BxUv01hI.js";import g from"./calendar-CQsAWh7n.js";import f from"./alert-CdIe8ehT.js";import v from"./clock-CZYLKnGZ.js";import u from"./settings-error-Cy7xk4_y.js";import{h as x}from"./moment-G82_0lEo.js";import"./httpClient-Cejv5jVd.js";const b="/b-v2-fe/assets/reports-bg-CO3IQ320.webp",O="/b-v2-fe/assets/report-control-C2ZFcDg4.webp",N="/b-v2-fe/assets/report-circle-27BJ8MQr.png",H=s=>{var t,i,o,c,n;const r=((t=s.report)==null?void 0:t.id)===((i=s.selectedReport)==null?void 0:i.id),a=s.selectedReport!==void 0&&((o=s.report)==null?void 0:o.id)!==((c=s.selectedReport)==null?void 0:c.id),l={MODERATE:"blue",HIGH:"red",LOW:"green"};return e.jsx("div",{className:"absolute",style:{inset:(n=s.report)==null?void 0:n.villa_style_loc},children:e.jsxs("div",{className:"relative ",children:[s.report&&!a&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"popup-info absolute inset-0 flex flex-col gap-y-2  p-5 text-[8px]",children:[e.jsxs("p",{className:"text-nowrap  flex w-full items-center gap-x-2 text-xs",children:[e.jsx(d,{}),e.jsxs("span",{children:[" فيلا ",s.report.id%10+1," "]})," "]}),e.jsxs("p",{className:"text-nowrap",children:["البلاغ : ",s.report.title]}),e.jsxs("p",{className:"text-nowrap",children:["الموقع : C",Math.floor(s.report.id/10),"-",Math.floor(s.report.id%10)]}),e.jsxs("p",{className:"text-nowrap",children:["التاريخ : ",s.report.createdAt]}),e.jsxs("p",{className:"text-nowrap",children:["الحالة :"," ",s.report.id%3===0?"قيد المعالجة":s.report.id%3===1?"فشل ":"مؤكد"]}),e.jsxs("p",{className:"text-nowrap",children:["نوع البلاغ :"," ",s.report.categories.length?s.report.categories.map(h=>p.get(h.name).label).join(","):"غير متوفر"]})]})}),s.report&&!a&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"153",height:"172",viewBox:"0 0 153 172",fill:"none",children:[e.jsx("path",{d:"M112.117 171.366C110.67 171.366 109.365 170.671 108.626 169.506L103.78 161.871L103.583 161.561H103.198H18.2792C15.9026 161.561 13.5974 161.126 11.4277 160.266C9.33175 159.436 7.44923 158.248 5.83246 156.734C4.21572 155.22 2.94645 153.458 2.05996 151.495C1.1423 149.464 0.677002 147.306 0.677002 145.081V17.1143C0.677002 14.8892 1.1423 12.731 2.05996 10.6997C2.94645 8.73727 4.21572 6.97469 5.83246 5.46093C7.44923 3.94716 9.33175 2.75873 11.4277 1.92869C13.5974 1.06946 15.9026 0.633789 18.2792 0.633789H134.721C137.097 0.633789 139.402 1.06946 141.572 1.92869C143.668 2.75876 145.55 3.94716 147.167 5.46095C148.784 6.97471 150.053 8.73729 150.94 10.6997C151.858 12.7311 152.323 14.8893 152.323 17.1143V145.081C152.323 147.306 151.858 149.464 150.94 151.495C150.053 153.458 148.784 155.22 147.167 156.734C145.55 158.248 143.668 159.436 141.572 160.266C139.402 161.126 137.097 161.561 134.721 161.561H121.037H120.651L120.455 161.871L115.609 169.506C114.87 170.671 113.565 171.366 112.117 171.366Z",fill:`url(#${l[s.report.severity??"MODERATE"]})`}),e.jsx("path",{d:"M112.117 170.732C113.323 170.732 114.411 170.153 115.027 169.182L120.266 160.928H134.721C137.006 160.928 139.223 160.509 141.308 159.683C143.324 158.885 145.134 157.742 146.689 156.286C148.243 154.83 149.464 153.135 150.316 151.249C151.199 149.296 151.646 147.221 151.646 145.081V17.1144C151.646 14.9746 151.199 12.8995 150.316 10.9467C149.464 9.05985 148.243 7.365 146.689 5.90924C145.134 4.45345 143.324 3.31066 141.308 2.51255C139.223 1.68656 137.006 1.26773 134.721 1.26773H18.2792C15.9937 1.26773 13.7772 1.68656 11.6915 2.51255C9.67618 3.31066 7.86601 4.45345 6.31119 5.90921C4.75641 7.36496 3.53587 9.0598 2.68349 10.9467C1.80132 12.8995 1.35402 14.9746 1.35402 17.1144V145.081C1.35402 147.221 1.80132 149.296 2.68349 151.249C3.53587 153.135 4.75639 154.83 6.31119 156.286C7.86601 157.742 9.67618 158.885 11.6915 159.683C13.7772 160.509 15.9937 160.928 18.2792 160.928H103.968L109.208 169.182C109.824 170.153 110.911 170.732 112.117 170.732ZM112.117 172C110.54 172 108.962 171.276 108.043 169.829L103.198 162.195H18.2792C8.1836 162.195 0 154.533 0 145.081V17.1144C0 7.66269 8.1836 0 18.2792 0H134.721C144.816 0 153 7.66269 153 17.1144V145.081C153 154.533 144.816 162.195 134.721 162.195H121.037L116.191 169.829C115.273 171.276 113.695 172 112.117 172Z",fill:l[s.report.severity??"MODERATE"]}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"red",x1:"98.5001",y1:"0.87207",x2:"98.5001",y2:"437.725",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#C01010"}),e.jsx("stop",{offset:"1",stopColor:"#600808",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"blue",x1:"98.5001",y1:"0.87207",x2:"98.5001",y2:"437.725",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"blue"}),e.jsx("stop",{offset:"1",stopColor:"#038C9F00",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"green",x1:"98.5001",y1:"0.87207",x2:"98.5001",y2:"437.725",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#35C010"}),e.jsx("stop",{offset:"1",stopColor:"#1B600800",stopOpacity:"0"})]})]})]}),s.report&&e.jsxs("div",{className:"relative",children:[r&&e.jsx("img",{className:"absolute left-6",src:N}),!a&&e.jsx("svg",{onClick:()=>{s.onLocationClick(s.report.id)},xmlns:"http://www.w3.org/2000/svg",width:"32",height:"46",viewBox:"0 0 16 23",className:"absolute   hover:opacity-100 hover:fill-pink-300 right-8 cursor-pointer",children:e.jsx("path",{d:"M0 12.2523L1.52381 0L16 0.429907V23H0V15.2617V12.2523Z",fill:l[s.report.severity??"MODERATE"],fillOpacity:"0.5"})})]})]})})},D=({report:s,reports:r,setSelectedReport:a})=>{const l=r.slice(12,16);return e.jsxs("div",{className:"relative max-h-[90vh]  flex-1",children:[l.sort((t,i)=>t.id-i.id).map(t=>e.jsx(H,{selectedReport:s,report:t,onLocationClick:()=>{a(t)}},t.id)),e.jsx("img",{src:O,className:"absolute left-0 bottom-0"}),e.jsx(A.LazyLoadImage,{className:"h-full w-full object-fill rounded-md",src:b})]})},L="data:image/png;base64,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",M="/b-v2-fe/assets/sample-CnLk1gPC.webp",w=({report:s})=>e.jsxs("div",{className:"flex-1 mb-20",children:[e.jsxs("h3",{className:"my-8 font-bold",children:["بلاغ: ",s.title]}),e.jsxs("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(d,{})," ",e.jsxs("span",{children:["فـيـلا : ",s.id%10]})," "]}),e.jsxs("div",{className:"flex  items-center gap-x-2",children:[e.jsx(C,{})," ",e.jsxs("span",{children:["الموقع :  C",Math.floor(s.id/10),"-",Math.floor(s.id%10)]})," "]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(g,{})," ",e.jsxs("span",{children:["التاريخ : ",x(s.createdAt).format("DD/MM/YYYY")]})," "]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(f,{})," ",e.jsxs("span",{children:["نوع البلاغ : ",s.categories.map(r=>p.get(r.name).label).join(",")]})," "]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(u,{})," ",e.jsxs("span",{children:["الحالة : ",s.id%10]})," "]}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(v,{})," ",e.jsxs("span",{children:["الوقت : ",x(s.createdAt).format("LTS")]})," "]})]}),e.jsxs("div",{className:"img-report mt-8 text-center",children:[e.jsx("img",{className:"w-full",src:M}),e.jsx("img",{className:"mx-auto mt-2",src:L,width:"150px"})]})]}),P=()=>{const[s,r]=m.useState(void 0),{isLoading:a,data:l}=j("",1,49);return e.jsxs("div",{className:"flex gap-x-8",children:[s&&e.jsx(w,{report:s}),a?e.jsx("p",{children:"loading"}):e.jsx(D,{reports:l.data.reports,report:s,setSelectedReport:t=>{r(t)}})]})};export{P as default};
