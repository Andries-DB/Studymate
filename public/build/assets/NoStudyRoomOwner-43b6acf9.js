import{a as h,r as y,b as p}from"./UserLayout-6eef3dd9.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{s,o as r,f as a,b as e,t as c,a as d,w as b,k as g,y as v}from"./app-ba05baeb.js";const w={components:{TertiaryButton:h,TrashIcon:y},props:{studyroom:{type:Object,required:!0},canEdit:{type:Boolean,default:!1}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},x=["href"],S={class:"flex flex-col justify-between p-2"},k={key:0,class:"items-center"},$=["action"],B=["value"],I=["value"];function N(o,u,t,l,m,_){const n=s("TrashIcon"),f=s("TertiaryButton");return r(),a("a",{href:o.route("study",t.studyroom.id)},[e("div",{class:"bg rounded-xl text-white p-4 flex justify-between items-center flex-row gap-7 bg-indigo-500",style:v({backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(storage/"+t.studyroom.image+")"})},[e("div",S,[e("h3",null,c(t.studyroom.name),1),e("p",null,c(t.studyroom.description),1)]),t.canEdit==!0?(r(),a("div",k,[e("form",{action:o.route("deleteSelfFromStudyRoom"),method:"post"},[e("input",{type:"hidden",name:"_token",value:o.csrf},null,8,B),e("input",{type:"hidden",name:"id",value:t.studyroom.id},null,8,I),d(f,{type:"submit"},{default:b(()=>[d(n,{class:"w-5 h-5"})]),_:1})],8,$)])):g("",!0)],4)],8,x)}const V=i(w,[["render",N]]),T={components:{PlusIcon:p}},j={class:"w-full h-16 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer"};function R(o,u,t,l,m,_){const n=s("PlusIcon");return r(),a("div",j,[d(n,{class:"h-5 w-5"}),e("p",null,c(o.$t("Widgets.NoStudyRooms")),1)])}const q=i(T,[["render",R]]);export{q as N,V as S};
