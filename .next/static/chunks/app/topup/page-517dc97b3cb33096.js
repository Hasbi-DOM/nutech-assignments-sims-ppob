(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{4254:(e,s,t)=>{Promise.resolve().then(t.bind(t,6476))},6775:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(2983),l=t(5155);let r=(0,a.A)([(0,l.jsx)("path",{d:"M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1z"},"0"),(0,l.jsx)("path",{d:"M2 4v16h20V4zm2 14V6h16v12z"},"1")],"Money")},6476:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var a=t(5155),l=t(2115),r=t(5029),i=t(6840),c=t(8256),n=t(9570),d=t(6775),o=t(615);let x=function(){let[e,s]=(0,l.useState)(""),[t,x]=(0,l.useState)(""),[h,m]=(0,l.useState)(""),p=async()=>{let e=await o.A.get("/profile");s(e.data.data.first_name),x(e.data.data.last_name)},j=async()=>{m((await o.A.get("/balance")).data.data.balance)};return(0,l.useEffect)(()=>{p(),j()},[]),(0,a.jsxs)("div",{className:"mx-40 space-y-16",children:[(0,a.jsxs)("div",{className:"w-full flex justify-between gap-44",children:[(0,a.jsx)("div",{className:"w-2/5",children:(0,a.jsx)(i.A,{firstname:e,lastname:t})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(c.A,{balance:h})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xl",children:"Silahkan masukan"}),(0,a.jsx)("p",{className:"text-2xl font-semibold",children:"Nominal Top Up"})]}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)("div",{className:"w-2/3 flex flex-col gap-3",children:[(0,a.jsx)(n.A,{type:"text",placeholder:"masukan nominal Top Up",size:"small",icon:(0,a.jsx)(d.A,{fontSize:"small",className:"text-gray-400"})}),(0,a.jsx)(r.A,{disabled:!0,className:"text-white",size:"medium",children:"Top Up"})]}),(0,a.jsx)("div",{className:"grid grid-cols-3 gap-2",children:["Rp10.000","Rp20.000","Rp50.000","Rp100.000","Rp250.000","Rp500.000"].map((e,s)=>(0,a.jsx)("button",{className:"h-10 px-4 border border-gray-200 hover:bg-gray-50 active:bg-gray-100",children:(0,a.jsx)("p",{className:"text-gray-500 font-medium text-sm",children:e})},s))})]})]})}},5029:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(5155),l=t(2282);let r=e=>{let{variant:s="contained",color:t="error",onClick:r,startIcon:i,endIcon:c,loading:n=!1,disabled:d=!1,children:o,type:x="submit",size:h,props:m,className:p}=e;return(0,a.jsx)(l.A,{variant:s,color:t,onClick:r,disabled:d||n,startIcon:i,endIcon:c,type:x,size:h,...m,sx:{width:"100%"},children:(0,a.jsx)("p",{className:"capitalize ".concat(p),children:o})})}},6840:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var a=t(5155);let l=e=>{let{firstname:s,lastname:t}=e;return(0,a.jsxs)("div",{className:"w-full space-y-8",children:[(0,a.jsx)("img",{src:"/Profile Photo.png",alt:"profile"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xl",children:"Selamat datang,"}),(0,a.jsxs)("p",{className:"font-semibold text-2xl capitalize",children:[s," ",t]})]})]})}},8256:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(5155),l=t(9313);let r=e=>{let{balance:s}=e;return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("img",{src:"/Background Saldo.png",className:"absolute"}),(0,a.jsxs)("div",{className:" relative px-5 py-6 flex flex-col justify-center gap-4",children:[(0,a.jsx)("p",{className:"text-white",children:"Saldo anda"}),(0,a.jsxs)("p",{className:"text-white font-semibold text-3xl",children:["Rp ",s]}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("p",{className:"text-white text-sm",children:"Lihat Saldo"}),(0,a.jsx)(l.A,{className:"text-white text-sm",fontSize:"small"})]})]})]})}},9570:(e,s,t)=>{"use strict";t.d(s,{A:()=>o});var a=t(5155),l=t(8998),r=t(1675),i=t(2937),c=t(894),n=t(9313),d=t(1798);let o=e=>{let{label:s,name:t,type:o="text",placeholder:x,size:h,showPassword:m,setShowPassword:p,onChange:j,error:u,helperText:v,value:f,icon:A}=e;return(0,a.jsx)(l.A,{children:"password"==o?(0,a.jsx)(r.A,{sx:{width:"100%"},label:s,name:t,type:m?"text":"password",onChange:j,error:u,helperText:v,value:f,placeholder:x,size:h,slotProps:{input:{startAdornment:(0,a.jsx)(i.A,{position:"start",children:A}),endAdornment:(0,a.jsx)(i.A,{position:"end",children:(0,a.jsx)(c.A,{onClick:()=>p(!m),children:m?(0,a.jsx)(n.A,{fontSize:"small"}):(0,a.jsx)(d.A,{fontSize:"small"})})})}}}):(0,a.jsx)(r.A,{sx:{width:"100%"},label:s,name:t,type:o,onChange:j,value:f,placeholder:x,error:u,helperText:v,size:h,slotProps:{input:{startAdornment:(0,a.jsx)(i.A,{position:"start",children:A})}}})})}},615:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});let a=t(2651).A.create({baseURL:"https://take-home-test-api.nutech-integrasi.com"});a.interceptors.request.use(e=>{let s=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(s),e},e=>Promise.reject(e)),a.interceptors.response.use(e=>e,e=>(console.log(e),Promise.reject(e)));let l=a}},e=>{var s=s=>e(e.s=s);e.O(0,[313,167,651,441,517,358],()=>s(4254)),_N_E=e.O()}]);