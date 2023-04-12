import{l as g,h as w,m as v,u as s,o as n,f as m,p as x,b as t,P as b,c as k,w as c,a,X as V,k as y,d as u,q as B,n as C,e as $}from"./app-4e6eeea5.js";import{_ as N}from"./GuestLayout-540b8b4d.js";import{_ as p}from"./InputError-5a0e7d97.js";import{_ as f}from"./InputLabel-797be21b.js";import{_ as j}from"./PrimaryButton-dccb692c.js";import{_ as h}from"./TextInput-ec835503.js";const q=["value"],L={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(i,{emit:e}){const d=i,l=g({get(){return d.checked},set(o){e("update:checked",o)}});return(o,r)=>w((n(),m("input",{type:"checkbox",value:i.value,"onUpdate:modelValue":r[0]||(r[0]=_=>x(l)?l.value=_:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,q)),[[v,s(l)]])}};function R(i,e){return n(),m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z","clip-rule":"evenodd"})])}const U=["onSubmit"],z={class:"space-y-2 rounded-md shadow-sm"},E={class:"flex items-center justify-between"},M={class:"flex items-center"},P=t("span",{class:"ml-2 text-sm text-black hover:text-indigo-500"},"Onthoud mij",-1),S={class:"text-sm"},W=["href"],A={class:"flex justify-between items-center gap-5"},D={class:""},F={class:"absolute inset-y-0 left-0 flex items-center pl-3"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const e=b({email:"",password:"",remember:!1}),d=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(l,o)=>(n(),k(N,{title:"Log in op je account"},{default:c(()=>[a(s(V),{title:"Log in"}),t("form",{onSubmit:$(d,["prevent"]),class:"mt-8 space-y-6"},[t("div",z,[t("div",null,[a(f,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",name:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username",placeholder:"Email adres"},null,8,["modelValue"])]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"]),t("div",null,[a(f,{for:"password",value:"Wachtwoord"}),a(h,{id:"password",type:"password",name:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password",placeholder:"Wachtwoord"},null,8,["modelValue"])]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",E,[t("label",M,[a(L,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),P]),t("div",S,[i.canResetPassword?(n(),m("a",{key:0,href:l.route("password.request"),class:"font-medium text-black hover:text-indigo-500"},"Wachtwoord vergeten?",8,W)):y("",!0)])]),t("div",A,[t("div",D,[a(s(B),{href:l.route("register"),class:"font-medium text-sm text-black hover:text-indigo-500"},{default:c(()=>[u("Nog geen account? Registreer hier")]),_:1},8,["href"])]),a(j,{class:C({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:c(()=>[t("span",F,[a(s(R),{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400","aria-hidden":"true"})]),u(" Log in ")]),_:1},8,["class","disabled"])])],40,U)]),_:1}))}};export{J as default};