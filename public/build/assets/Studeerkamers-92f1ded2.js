import{o as r,f as l,b as o,s as t,c as b,w as y,t as s,a as n,d as S,i as I,k as M,F as h,x as g,y as C,X as A}from"./app-ba05baeb.js";import{_ as x}from"./Modal-48d1d19f.js";import{S as D,N as j}from"./NoStudyRoomOwner-43b6acf9.js";import{_ as O}from"./InputLabel-1ed0b798.js";import{_ as k}from"./TextInput-88a47543.js";import{_ as T}from"./PrimaryButton-c92b1233.js";import{E as L}from"./ErrorHandling-f39449d2.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{b as q,a as B,c as H,d as z,r as F,e as V,_ as Y}from"./UserLayout-6eef3dd9.js";import{_ as N,h as U}from"./NothingToShow-ede1ea59.js";function W(e,d){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M5.965 4.904l9.131 9.131a6.5 6.5 0 00-9.131-9.131zm8.07 10.192L4.904 5.965a6.5 6.5 0 009.131 9.131zM4.343 4.343a8 8 0 1111.314 11.314A8 8 0 014.343 4.343z","clip-rule":"evenodd"})])}const X={components:{TextInput:k,PrimaryButton:T,Modal:x,ErrorHandling:L},props:{close:{type:Function,required:!0},show:{type:Boolean,required:!0}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}),methods:{StudyRoomerror(){document.getElementById("descriptionError").classList.add("hidden"),document.getElementById("nameError").classList.add("hidden"),document.getElementById("name").value==""&&(document.getElementById("nameError").classList.remove("hidden"),event.preventDefault()),document.getElementById("description").value==""&&(document.getElementById("descriptionError").classList.remove("hidden"),event.preventDefault())}}},G={class:"bg-white rounded-lg flex flex-col items-center justify-center p-5 relative"},J={class:"mb-5"},K=["action"],Q=["value"],Z=o("input",{type:"file",name:"image",id:"image"},null,-1);function oo(e,d,a,$,v,i){const c=t("TextInput"),u=t("ErrorHandling"),p=t("PrimaryButton"),_=t("Modal");return r(),b(_,{show:a.show,onClose:a.close},{default:y(()=>[o("div",G,[o("h3",J,s(e.$t("Modals.StudyRoomModal.Title")),1),o("form",{method:"POST",action:e.route("addStudyRoom"),class:"flex flex-col gap-2",enctype:"multipart/form-data"},[o("input",{type:"hidden",name:"_token",value:e.csrf},null,8,Q),n(c,{id:"name",type:"text",name:"name",autocomplete:"Name",placeholder:e.$t("Modals.StudyRoomModal.Name")},null,8,["placeholder"]),n(u,{id:"nameError",class:"hidden"},{default:y(()=>[S(s(e.$t("Modals.StudyRoomModal.Errors.Name")),1)]),_:1}),n(c,{id:"description",type:"text",name:"description",autocomplete:"Description",placeholder:e.$t("Modals.StudyRoomModal.Description")},null,8,["placeholder"]),n(u,{id:"descriptionError",class:"hidden"},{default:y(()=>[S(s(e.$t("Modals.StudyRoomModal.Errors.Description")),1)]),_:1}),Z,n(p,{class:"mt-3",onClick:d[0]||(d[0]=m=>i.StudyRoomerror())},{default:y(()=>[S(s(e.$t("Modals.StudyRoomModal.Title")),1)]),_:1})],8,K)])]),_:1},8,["show","onClose"])}const P=f(X,[["render",oo]]),eo={components:{PlusIcon:q}},to={class:"lg:w-1/3 w-full lg:h-36 h-24 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer"};function no(e,d,a,$,v,i){const c=t("PlusIcon");return r(),l("div",to,[n(c,{class:"h-5 w-5"}),o("p",null,s(e.$t("Widgets.NoStudyRooms")),1)])}const so=f(eo,[["render",no]]);const w=I(!1),ro={components:{StudyRoom:D,InputLabel:O,TextInput:k,PrimaryButton:T,Modal:x,StudyRoomModal:P,NoStudyRooms:so},props:{sharedStudyRoom:{type:Array}},methods:{showModal(){w.value=!0},closeModal(){w.value=!1}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),addStudyRoom:w})},ao={class:"flex justify-between items-center py-3"},lo={class:""},co={class:"text-gray-500"},io={class:"flex flex-row flex-wrap gap-3 w-full"};function uo(e,d,a,$,v,i){const c=t("PrimaryButton"),u=t("NoStudyRooms"),p=t("StudyRoom"),_=t("StudyRoomModal");return r(),l(h,null,[o("div",ao,[o("div",lo,[o("h4",null,s(e.$t("StudyRooms.SharedStudyRooms.Title")),1),o("p",co,s(e.$t("StudyRooms.SharedStudyRooms.Description")),1)]),o("div",null,[n(c,{onClick:d[0]||(d[0]=m=>i.showModal()),id:"addProject"},{default:y(()=>[S(" + "+s(e.$t("StudyRooms.CTA.AddStudyRoom")),1)]),_:1})])]),o("div",io,[e.$page.props.sharedStudyRoom.length===0?(r(),l("div",{key:0,class:"flex justify-start w-full cursor-pointer",onClick:d[2]||(d[2]=m=>i.showModal())},[n(u,{onClick:d[1]||(d[1]=m=>i.showModal())})])):M("",!0),(r(!0),l(h,null,g(e.$page.props.sharedStudyRoom,m=>(r(),l("div",null,[n(p,{studyroom:m.studyroom,canEdit:!0},null,8,["studyroom"])]))),256))]),n(_,{show:e.addStudyRoom,close:i.closeModal},null,8,["show","close"])],64)}const mo=f(ro,[["render",uo]]),po={props:{room:{type:Object,required:!0}}},_o=["href"],yo={class:"relative bg-white shadow-orange-50 shadow-2xl p-7 rounded-xl flex"},ho=o("div",{class:"absolute top-0 left-0 w-2 h-full rounded-l-xl bg-indigo-500"},null,-1),fo={class:"flex-1"},$o={class:"text-gray-500"};function vo(e,d,a,$,v,i){return r(),l("a",{href:e.route("study",a.room.id)},[o("div",yo,[ho,o("div",fo,[o("h6",null,s(a.room.name),1),o("p",$o,s(a.room.description),1)])])],8,_o)}const So=f(po,[["render",vo]]),go={components:{PublicStudyRoom:So},props:{publicStudyrooms:{type:Array}}},wo={class:"text-gray-500"},Ro={class:"flex flex-col space-y-4 pt-5"};function bo(e,d,a,$,v,i){const c=t("PublicStudyRoom");return r(),l(h,null,[o("h4",null,s(e.$t("StudyRooms.PublicStudyRooms.Title")),1),o("p",wo,s(e.$t("StudyRooms.PublicStudyRooms.Description")),1),o("div",Ro,[(r(!0),l(h,null,g(e.$page.props.publicStudyrooms,u=>(r(),b(c,{room:u,class:"lg:w-full w-10/12"},null,8,["room"]))),256))])],64)}const Mo=f(go,[["render",bo]]),Io={components:{TertiaryButton:B,SecondaryAnchor:H,PencilIcon:z,TrashIcon:F},props:{room:{type:Object}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},xo={class:"w-3/4 p-2"},ko={class:"break-words hypens-auto"},To={class:"flex items-center gap-2"},Bo=["action"],No=["value"],Po=["value"];function Eo(e,d,a,$,v,i){const c=t("PencilIcon"),u=t("SecondaryAnchor"),p=t("TrashIcon"),_=t("TertiaryButton");return r(),l("div",{class:"bg rounded-xl text-white p-4 flex justify-between flex-row gap-7 bg-indigo-500",style:C({"background-image":"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(storage/"+a.room.studyroom.image+")"})},[o("div",xo,[o("div",null,[o("h3",ko,s(a.room.studyroom.name),1)]),o("p",null,s(a.room.studyroom.description),1)]),o("div",To,[n(u,{href:e.route("studyroomDetail",a.room.study_room_id)},{default:y(()=>[n(c,{class:"w-5 h-5"})]),_:1},8,["href"]),o("form",{action:e.route("deleteStudyRoom"),method:"post",class:"bg-gray-200 p-0.30 rounded-lg cursor-pointer"},[o("input",{type:"hidden",name:"_token",value:e.csrf},null,8,No),o("input",{type:"hidden",name:"id",value:a.room.study_room_id},null,8,Po),n(_,{type:"submit"},{default:y(()=>[n(p,{class:"w-5 h-5"})]),_:1})],8,Bo)])],4)}const Co=f(Io,[["render",Eo]]),R=I(!1),Ao={components:{MyStudyRoom:Co,NothingToShow:N,NoStudyRoomOwner:j,StudyRoomModal:P},props:{myStudyrooms:{type:Array}},methods:{showModal(){R.value=!0},closeModal(){R.value=!1}},data:()=>({addStudyRoom:R})},Do={class:"text-gray-500"},jo={class:"flex flex-col space-y-4 pt-5"},Oo={key:0,class:"flex justify-center"};function Lo(e,d,a,$,v,i){const c=t("NoStudyRoomOwner"),u=t("MyStudyRoom"),p=t("StudyRoomModal");return r(),l(h,null,[o("h4",null,s(e.$t("StudyRooms.MyStudyRooms.Title")),1),o("p",Do,s(e.$t("StudyRooms.MyStudyRooms.Description")),1),o("div",jo,[e.$page.props.myStudyrooms.length===0?(r(),l("div",Oo,[n(c,{onClick:d[0]||(d[0]=_=>i.showModal())})])):M("",!0),(r(!0),l(h,null,g(e.$page.props.myStudyrooms,_=>(r(),b(u,{room:_,class:"lg:w-full w-10/12"},null,8,["room"]))),256))]),n(p,{show:e.addStudyRoom,close:i.closeModal},null,8,["show","close"])],64)}const qo=f(Ao,[["render",Lo]]),Ho={components:{TertiaryButton:B,NothingToShow:N,NoSymbolIcon:W,CheckIcon:V},props:{invites:{type:Array,required:!0}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),moment:U})},zo={class:"text-gray-500"},Fo={key:0,class:"flex justify-center mt-2"},Vo={class:"mt-2 lg:w-full w-10/12"},Yo={class:"w-full bg-indigo-500 flex justify-between p-4 rounded-xl text-gray-50 items-center mb-3"},Uo={class:"",name:"INFO"},Wo={class:"flex gap-2",name:"CTA"},Xo=["action"],Go=["value"],Jo=["value"],Ko=["value"],Qo={class:""},Zo=["action"],oe=["value"],ee=["value"];function te(e,d,a,$,v,i){const c=t("NothingToShow"),u=t("CheckIcon"),p=t("TertiaryButton"),_=t("NoSymbolIcon");return r(),l(h,null,[o("h4",null,s(e.$t("StudyRooms.Invites.Title")),1),o("p",zo,s(e.$t("StudyRooms.Invites/Description")),1),e.$page.props.invites.length===0?(r(),l("div",Fo,[n(c,{class:"text-base py-5 px-10"},{default:y(()=>[S(s(e.$t("StudyRooms.Invites.NoInvites")),1)]),_:1})])):M("",!0),(r(!0),l(h,null,g(e.$page.props.invites,m=>(r(),l("div",Vo,[o("div",Yo,[o("div",Uo,[o("h3",null,s(m.studyroom.name),1),o("p",null,s(e.$t("StudyRoomDetail.Invite.SendBy")+" "+e.moment(m.created_at).format("DD/MM/YYYY")),1)]),o("div",Wo,[o("div",null,[o("form",{method:"post",action:e.route("acceptInvite")},[o("input",{type:"hidden",name:"_token",value:e.csrf},null,8,Go),o("input",{type:"hidden",name:"invite_id",value:m.id},null,8,Jo),o("input",{type:"hidden",name:"studyroom_id",value:m.studyroom.id},null,8,Ko),n(p,{type:"submit"},{default:y(()=>[n(u,{class:"w-6 h-6 text-green-500"})]),_:1})],8,Xo)]),o("div",Qo,[o("form",{action:e.route("declineInvite"),method:"post"},[o("input",{type:"hidden",name:"_token",value:e.csrf},null,8,oe),o("input",{type:"hidden",name:"invite_id",value:m.id},null,8,ee),n(p,{type:"submit"},{default:y(()=>[n(_,{class:"w-6 h-6 text-red-500"})]),_:1})],8,Zo)])])])]))),256))],64)}const ne=f(Ho,[["render",te]]),se={components:{Overview:mo,PublicStudyRooms:Mo,MyStudyRooms:qo,Invites:ne,Head:A,UserLayout:Y}},re={class:"flex flex-col gap-10 p-7"},de={class:"grid grid-cols-12 grid-rows-2 gap-10 h-full"},ae={class:"row-span-2 col-span-12 md:col-span-6"},le={class:"row-span-1 col-span-12 md:col-span-6"},ce={class:"row-span-1 col-span-12 md:col-span-6"};function ie(e,d,a,$,v,i){const c=t("Head"),u=t("Overview"),p=t("PublicStudyRooms"),_=t("MyStudyRooms"),m=t("Invites"),E=t("UserLayout");return r(),l(h,null,[n(c,{title:"Studeerkamers"}),n(E,null,{default:y(()=>[o("div",re,[o("div",null,[n(u)]),o("div",de,[o("div",ae,[n(p)]),o("div",le,[n(_)]),o("div",ce,[n(m)])])])]),_:1})],64)}const ge=f(se,[["render",ie]]);export{ge as default};
