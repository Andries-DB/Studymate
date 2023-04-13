import{o as s,f as l,b as e,s as g,x as t,c as M,w as y,t as r,a as n,d as S,i as x,k as I,F as h,y as w,z as A,X as D}from"./app-78d43c48.js";import{_ as k}from"./Modal-15e801b9.js";import{S as j,N as O}from"./NoStudyRoomOwner-66342f7f.js";import{_ as L}from"./InputLabel-7999ae73.js";import{_ as T}from"./TextInput-04bba603.js";import{_ as B}from"./PrimaryButton-8810a627.js";import{E as q}from"./ErrorHandling-3b1d91f4.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{b as H,a as N,c as z,d as V,r as F,e as Y,_ as U}from"./UserLayout-1bd2819a.js";import{_ as P,h as X}from"./NothingToShow-9dbbd62b.js";function G(o,d){return s(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5.965 4.904l9.131 9.131a6.5 6.5 0 00-9.131-9.131zm8.07 10.192L4.904 5.965a6.5 6.5 0 009.131 9.131zM4.343 4.343a8 8 0 1111.314 11.314A8 8 0 014.343 4.343z","clip-rule":"evenodd"})])}const J={components:{TextInput:T,PrimaryButton:B,Modal:k,ErrorHandling:q},props:{close:{type:Function,required:!0},show:{type:Boolean,required:!0}},setup(){const{t:o}=g({});return{t:o}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}),methods:{StudyRoomerror(){document.getElementById("descriptionError").classList.add("hidden"),document.getElementById("nameError").classList.add("hidden"),document.getElementById("name").value==""&&(document.getElementById("nameError").classList.remove("hidden"),event.preventDefault()),document.getElementById("description").value==""&&(document.getElementById("descriptionError").classList.remove("hidden"),event.preventDefault())}}},K={class:"bg-white rounded-lg flex flex-col items-center justify-center p-5 relative"},Q={class:"mb-5"},W=["action"],Z=["value"],oo=e("input",{type:"file",name:"image",id:"image"},null,-1);function eo(o,d,a,$,v,u){const c=t("TextInput"),i=t("ErrorHandling"),p=t("PrimaryButton"),_=t("Modal");return s(),M(_,{show:a.show,onClose:a.close},{default:y(()=>[e("div",K,[e("h3",Q,r(o.$t("Modals.StudyRoomModal.Title")),1),e("form",{method:"POST",action:o.route("addStudyRoom"),class:"flex flex-col gap-2",enctype:"multipart/form-data"},[e("input",{type:"hidden",name:"_token",value:o.csrf},null,8,Z),n(c,{id:"name",type:"text",name:"name",autocomplete:"Name",placeholder:o.$t("Modals.StudyRoomModal.Name")},null,8,["placeholder"]),n(i,{id:"nameError",class:"hidden"},{default:y(()=>[S(r(o.$t("Modals.StudyRoomModal.Errors.Name")),1)]),_:1}),n(c,{id:"description",type:"text",name:"description",autocomplete:"Description",placeholder:o.$t("Modals.StudyRoomModal.Description")},null,8,["placeholder"]),n(i,{id:"descriptionError",class:"hidden"},{default:y(()=>[S(r(o.$t("Modals.StudyRoomModal.Errors.Description")),1)]),_:1}),oo,n(p,{class:"mt-3",onClick:d[0]||(d[0]=m=>u.StudyRoomerror())},{default:y(()=>[S(r(o.$t("Modals.StudyRoomModal.Title")),1)]),_:1})],8,W)])]),_:1},8,["show","onClose"])}const E=f(J,[["render",eo]]),to={components:{PlusIcon:H}},no={class:"lg:w-1/3 w-full lg:h-36 h-24 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer"},so=e("p",null,"Voeg een studeerkamer toe",-1);function ro(o,d,a,$,v,u){const c=t("PlusIcon");return s(),l("div",no,[n(c,{class:"h-5 w-5"}),so])}const ao=f(to,[["render",ro]]);const R=x(!1),lo={components:{StudyRoom:j,InputLabel:L,TextInput:T,PrimaryButton:B,Modal:k,StudyRoomModal:E,NoStudyRooms:ao},props:{sharedStudyRoom:{type:Array}},setup(){const{t:o}=g({});return{t:o}},methods:{showModal(){R.value=!0},closeModal(){R.value=!1}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),addStudyRoom:R})},co={class:"flex justify-between items-center py-3"},uo={class:""},io={class:"text-gray-500"},mo={class:"flex flex-row flex-wrap gap-3 w-full"};function po(o,d,a,$,v,u){const c=t("PrimaryButton"),i=t("NoStudyRooms"),p=t("StudyRoom"),_=t("StudyRoomModal");return s(),l(h,null,[e("div",co,[e("div",uo,[e("h4",null,r(o.$t("StudyRooms.SharedStudyRooms.Title")),1),e("p",io,r(o.$t("StudyRooms.SharedStudyRooms.Description")),1)]),e("div",null,[n(c,{onClick:d[0]||(d[0]=m=>u.showModal()),id:"addProject"},{default:y(()=>[S(" + "+r(o.$t("StudyRooms.CTA.AddStudyRoom")),1)]),_:1})])]),e("div",mo,[o.$page.props.sharedStudyRoom.length===0?(s(),l("div",{key:0,class:"flex justify-start w-full cursor-pointer",onClick:d[2]||(d[2]=m=>u.showModal())},[n(i,{onClick:d[1]||(d[1]=m=>u.showModal())})])):I("",!0),(s(!0),l(h,null,w(o.$page.props.sharedStudyRoom,m=>(s(),l("div",null,[n(p,{studyroom:m.studyroom,canEdit:!0},null,8,["studyroom"])]))),256))]),n(_,{show:o.addStudyRoom,close:u.closeModal},null,8,["show","close"])],64)}const _o=f(lo,[["render",po]]),yo={props:{room:{type:Object,required:!0}}},ho=["href"],fo={class:"relative bg-white shadow-orange-50 shadow-2xl p-7 rounded-xl flex"},$o=e("div",{class:"absolute top-0 left-0 w-2 h-full rounded-l-xl bg-indigo-500"},null,-1),vo={class:"flex-1"},So={class:"text-gray-500"};function go(o,d,a,$,v,u){return s(),l("a",{href:o.route("study",a.room.id)},[e("div",fo,[$o,e("div",vo,[e("h6",null,r(a.room.name),1),e("p",So,r(a.room.description),1)])])],8,ho)}const wo=f(yo,[["render",go]]),Ro={components:{PublicStudyRoom:wo},setup(){const{t:o}=g({});return{t:o}},props:{publicStudyrooms:{type:Array}}},bo={class:"text-gray-500"},Mo={class:"flex flex-col space-y-4 pt-5"};function Io(o,d,a,$,v,u){const c=t("PublicStudyRoom");return s(),l(h,null,[e("h4",null,r(o.$t("StudyRooms.PublicStudyRooms.Title")),1),e("p",bo,r(o.$t("StudyRooms.PublicStudyRooms.Description")),1),e("div",Mo,[(s(!0),l(h,null,w(o.$page.props.publicStudyrooms,i=>(s(),M(c,{room:i,class:"lg:w-full w-10/12"},null,8,["room"]))),256))])],64)}const xo=f(Ro,[["render",Io]]),ko={components:{TertiaryButton:N,SecondaryAnchor:z,PencilIcon:V,TrashIcon:F},props:{room:{type:Object}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},To={class:"w-3/4 p-2"},Bo={class:"break-words hypens-auto"},No={class:"flex items-center gap-2"},Po=["action"],Eo=["value"],Co=["value"];function Ao(o,d,a,$,v,u){const c=t("PencilIcon"),i=t("SecondaryAnchor"),p=t("TrashIcon"),_=t("TertiaryButton");return s(),l("div",{class:"bg rounded-xl text-white p-4 flex justify-between flex-row gap-7 bg-indigo-500",style:A({"background-image":"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(storage/"+a.room.studyroom.image+")"})},[e("div",To,[e("div",null,[e("h3",Bo,r(a.room.studyroom.name),1)]),e("p",null,r(a.room.studyroom.description),1)]),e("div",No,[n(i,{href:o.route("studyroomDetail",a.room.study_room_id)},{default:y(()=>[n(c,{class:"w-5 h-5"})]),_:1},8,["href"]),e("form",{action:o.route("deleteStudyRoom"),method:"post",class:"bg-gray-200 p-0.30 rounded-lg cursor-pointer"},[e("input",{type:"hidden",name:"_token",value:o.csrf},null,8,Eo),e("input",{type:"hidden",name:"id",value:a.room.study_room_id},null,8,Co),n(_,{type:"submit"},{default:y(()=>[n(p,{class:"w-5 h-5"})]),_:1})],8,Po)])],4)}const Do=f(ko,[["render",Ao]]),b=x(!1),jo={components:{MyStudyRoom:Do,NothingToShow:P,NoStudyRoomOwner:O,StudyRoomModal:E},props:{myStudyrooms:{type:Array}},setup(){const{t:o}=g({});return{t:o}},methods:{showModal(){b.value=!0},closeModal(){b.value=!1}},data:()=>({addStudyRoom:b})},Oo={class:"text-gray-500"},Lo={class:"flex flex-col space-y-4 pt-5"},qo={key:0,class:"flex justify-center"};function Ho(o,d,a,$,v,u){const c=t("NoStudyRoomOwner"),i=t("MyStudyRoom"),p=t("StudyRoomModal");return s(),l(h,null,[e("h4",null,r(o.$t("StudyRooms.MyStudyRooms.Title")),1),e("p",Oo,r(o.$t("StudyRooms.MyStudyRooms.Description")),1),e("div",Lo,[o.$page.props.myStudyrooms.length===0?(s(),l("div",qo,[n(c,{onClick:d[0]||(d[0]=_=>u.showModal())})])):I("",!0),(s(!0),l(h,null,w(o.$page.props.myStudyrooms,_=>(s(),M(i,{room:_,class:"lg:w-full w-10/12"},null,8,["room"]))),256))]),n(p,{show:o.addStudyRoom,close:u.closeModal},null,8,["show","close"])],64)}const zo=f(jo,[["render",Ho]]),Vo={components:{TertiaryButton:N,NothingToShow:P,NoSymbolIcon:G,CheckIcon:Y},props:{invites:{type:Array,required:!0}},setup(){const{t:o}=g({});return{t:o}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),moment:X})},Fo={class:"text-gray-500"},Yo={key:0,class:"flex justify-center mt-2"},Uo={class:"mt-2 lg:w-full w-10/12"},Xo={class:"w-full bg-indigo-500 flex justify-between p-4 rounded-xl text-gray-50 items-center mb-3"},Go={class:"",name:"INFO"},Jo={class:"flex gap-2",name:"CTA"},Ko=["action"],Qo=["value"],Wo=["value"],Zo=["value"],oe={class:""},ee=["action"],te=["value"],ne=["value"];function se(o,d,a,$,v,u){const c=t("NothingToShow"),i=t("CheckIcon"),p=t("TertiaryButton"),_=t("NoSymbolIcon");return s(),l(h,null,[e("h4",null,r(o.$t("StudyRooms.Invites.Title")),1),e("p",Fo,r(o.$t("StudyRooms.Invites/Description")),1),o.$page.props.invites.length===0?(s(),l("div",Yo,[n(c,{class:"text-base py-5 px-10"},{default:y(()=>[S(r(o.$t("StudyRooms.Invites.NoInvites")),1)]),_:1})])):I("",!0),(s(!0),l(h,null,w(o.$page.props.invites,m=>(s(),l("div",Uo,[e("div",Xo,[e("div",Go,[e("h3",null,r(m.studyroom.name),1),e("p",null,r(o.$t("StudyRoomDetail.Invite.SendBy")+" "+o.moment(m.created_at).format("DD/MM/YYYY")),1)]),e("div",Jo,[e("div",null,[e("form",{method:"post",action:o.route("acceptInvite")},[e("input",{type:"hidden",name:"_token",value:o.csrf},null,8,Qo),e("input",{type:"hidden",name:"invite_id",value:m.id},null,8,Wo),e("input",{type:"hidden",name:"studyroom_id",value:m.studyroom.id},null,8,Zo),n(p,{type:"submit"},{default:y(()=>[n(i,{class:"w-6 h-6 text-green-500"})]),_:1})],8,Ko)]),e("div",oe,[e("form",{action:o.route("declineInvite"),method:"post"},[e("input",{type:"hidden",name:"_token",value:o.csrf},null,8,te),e("input",{type:"hidden",name:"invite_id",value:m.id},null,8,ne),n(p,{type:"submit"},{default:y(()=>[n(_,{class:"w-6 h-6 text-red-500"})]),_:1})],8,ee)])])])]))),256))],64)}const re=f(Vo,[["render",se]]),de={components:{Overview:_o,PublicStudyRooms:xo,MyStudyRooms:zo,Invites:re,Head:D,UserLayout:U}},ae={class:"flex flex-col gap-10 p-7"},le={class:"grid grid-cols-12 grid-rows-2 gap-10 h-full"},ce={class:"row-span-2 col-span-12 md:col-span-6"},ue={class:"row-span-1 col-span-12 md:col-span-6"},ie={class:"row-span-1 col-span-12 md:col-span-6"};function me(o,d,a,$,v,u){const c=t("Head"),i=t("Overview"),p=t("PublicStudyRooms"),_=t("MyStudyRooms"),m=t("Invites"),C=t("UserLayout");return s(),l(h,null,[n(c,{title:"Studeerkamers"}),n(C,null,{default:y(()=>[e("div",ae,[e("div",null,[n(i)]),e("div",le,[e("div",ce,[n(p)]),e("div",ue,[n(_)]),e("div",ie,[n(m)])])])]),_:1})],64)}const Re=f(de,[["render",me]]);export{Re as default};