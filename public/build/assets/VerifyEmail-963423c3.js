import{P as d,l as p,c as _,w as i,o as r,a,u as e,X as h,b as n,t as s,f as g,k as y,d as c,n as b,q as V,e as v}from"./app-e89abdc4.js";import{_ as k}from"./GuestLayout-48a51acc.js";import{_ as x}from"./PrimaryButton-634ac5b7.js";const E={class:"mb-4 text-sm text-gray-600"},$={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],S={class:"mt-4 flex items-center justify-between"},D={__name:"VerifyEmail",props:{status:String},setup(m){const u=m,o=d({}),f=()=>{o.post(route("verification.send"))},l=p(()=>u.status==="verification-link-sent");return(t,w)=>(r(),_(k,null,{default:i(()=>[a(e(h),{title:"Email Verification"}),n("div",E,s(t.$t("Auth.VerifyEmail.Title")),1),e(l)?(r(),g("div",$,s(t.$t("Auth.VerifyEmail.Description")),1)):y("",!0),n("form",{onSubmit:v(f,["prevent"])},[n("div",S,[a(x,{class:b({"opacity-25":e(o).processing}),disabled:e(o).processing},{default:i(()=>[c(s(t.$t("Auth.VerifyEmail.Button")),1)]),_:1},8,["class","disabled"]),a(e(V),{href:t.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:i(()=>[c(s(t.$t("Auth.VerifyEmail.LogOut")),1)]),_:1},8,["href"])])],40,B)]),_:1}))}};export{D as default};