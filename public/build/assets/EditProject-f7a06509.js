import{o as r,f as d,b as t,t as a,d as _,a as o,w as u,k as $,s,X as D,F as g,x as I,c as w}from"./app-ba05baeb.js";import{a as b,r as A,_ as N,N as x}from"./UserLayout-6eef3dd9.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./PrimaryButton-c92b1233.js";import{_ as T}from"./TextInput-88a47543.js";import{E}from"./ErrorHandling-f39449d2.js";import"./Modal-48d1d19f.js";function U(e,c){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm7.75 9.75a.75.75 0 000-1.5h-4.5a.75.75 0 000 1.5h4.5z","clip-rule":"evenodd"})])}const q={components:{TertiaryButton:b,DocumentMinusIcon:U,TrashIcon:A},props:{task:{type:Object,required:!0}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},C={class:"flex items-center justify-between gap-5 w-11/12 h-auto bg-gray-200 px-5 py-3 rounded-lg"},H={name:"INFO"},L={class:"mt-2"},S={key:0},O={key:1},F={class:"flex items-center mr-5 gap-2 text-white"},M={key:0,class:"bg-gray-200 p-0.30 rounded-lg",title:"Onvoltooi taak"},V=["action"],z=["value"],X=["value"],G=["action"],J=["value"],K=["value"];function Q(e,c,n,h,y,p){const i=s("DocumentMinusIcon"),l=s("TertiaryButton"),m=s("TrashIcon");return r(),d("div",C,[t("div",null,[t("div",H,[t("strong",null,a(n.task.name),1),_(" - "+a(n.task.description),1)]),t("div",L,[t("strong",null,[n.task.completed===1?(r(),d("span",S,a(e.$t("ProjectDetail.Task.Completed")),1)):(r(),d("span",O,a(e.$t("ProjectDetail.Task.MarkAsCompleted")),1))])])]),t("div",F,[n.task.completed===1?(r(),d("div",M,[t("form",{method:"post",action:e.route("updateTask"),class:"bg-gray-200 p-0.30 rounded-lg"},[t("input",{type:"hidden",name:"_token",value:e.csrf},null,8,z),t("input",{type:"hidden",name:"id",value:n.task.id},null,8,X),o(l,{type:"submit"},{default:u(()=>[o(i,{class:"w-5 h-5"})]),_:1})],8,V)])):$("",!0),t("form",{method:"post",action:e.route("deleteTask"),class:"bg-gray-200 p-0.30 rounded-lg"},[t("input",{type:"hidden",name:"_token",value:e.csrf},null,8,J),t("input",{type:"hidden",name:"id",value:n.task.id},null,8,K),o(l,{type:"submit"},{default:u(()=>[o(m,{class:"w-5 h-5"})]),_:1})],8,G)])])}const R=f(q,[["render",Q]]),W={components:{PrimaryButton:j,TextInput:T,ErrorHandling:E},props:{project:{type:Object}},methods:{UpdateError(){document.querySelectorAll(".error").forEach(e=>{e.classList.add("hidden")}),document.getElementById("name").value==""&&(document.getElementById("nameError").classList.remove("hidden"),event.preventDefault())}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},Y={class:"space-y-5"},Z={class:"w-full lg:w-1/2"},ee=["action"],te=["value"],oe=["value"];function ne(e,c,n,h,y,p){const i=s("TextInput"),l=s("ErrorHandling"),m=s("PrimaryButton");return r(),d("div",Y,[t("h4",null,a(e.$t("ProjectDetail.UpdateProject.Title")),1),t("div",Z,[t("form",{action:e.route("editProject"),method:"post",class:"flex flex-col"},[t("input",{type:"hidden",name:"_token",value:e.csrf},null,8,te),t("input",{type:"hidden",name:"id",value:n.project.id},null,8,oe),o(i,{id:"name",type:"text",name:"name",required:"",autocomplete:"Name",placeholder:e.$t("ProjectDetail.UpdateProject.Name"),value:n.project.name},null,8,["placeholder","value"]),o(l,{id:"nameError",class:"hidden"},{default:u(()=>[_(a(e.$t("ProjectDetail.UpdateProject.Errors.Name")),1)]),_:1}),o(m,{class:"mt-3",onClick:c[0]||(c[0]=v=>p.UpdateError())},{default:u(()=>[_(a(e.$t("ProjectDetail.UpdateProject.Button")),1)]),_:1})],8,ee)])])}const se=f(W,[["render",ne]]),ae={components:{PrimaryButton:j,TextInput:T,ErrorHandling:E},props:{project:{type:Object}},methods:{TaskError(){document.querySelectorAll(".error").forEach(e=>{e.classList.add("hidden")}),document.getElementById("input_name").value==""&&(document.getElementById("input_nameError").classList.remove("hidden"),event.preventDefault()),document.getElementById("description").value==""&&(document.getElementById("descriptionError").classList.remove("hidden"),event.preventDefault())}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},re={class:"space-y-5"},ce={class:"w-full lg:w-1/2 flex flex-col"},de=["action"],le=["value"],ie=["value"];function ue(e,c,n,h,y,p){const i=s("TextInput"),l=s("ErrorHandling"),m=s("PrimaryButton");return r(),d("div",re,[t("h4",null,a(e.$t("ProjectDetail.AddTask.Title")),1),t("div",ce,[t("form",{method:"post",action:e.route("addTasktoProject"),class:"flex flex-col gap-2"},[t("input",{type:"hidden",name:"_token",value:e.csrf},null,8,le),t("input",{type:"hidden",name:"id",value:n.project.id},null,8,ie),o(i,{id:"input_name",type:"text",name:"name",required:"",autocomplete:"Name",placeholder:e.$t("ProjectDetail.AddTask.Name")},null,8,["placeholder"]),o(l,{id:"input_nameError",class:"hidden"},{default:u(()=>[_(a(e.$t("ProjectDetail.AddTask.Errors.Name")),1)]),_:1}),o(i,{id:"description",type:"text",name:"description",required:"",autocomplete:"description",placeholder:e.$t("ProjectDetail.AddTask.Description")},null,8,["placeholder"]),o(l,{id:"descriptionError",class:"hidden"},{default:u(()=>[_(a(e.$t("ProjectDetail.AddTask.Errors.Description")),1)]),_:1}),o(m,{class:"mt-3",onClick:c[0]||(c[0]=v=>p.TaskError())},{default:u(()=>[_(a(e.$t("ProjectDetail.AddTask.Button")),1)]),_:1})],8,de)])])}const me=f(ae,[["render",ue]]),pe={components:{Head:D,Task:R,UpdateProject:se,addTask:me,UserLayout:N,NoTasks:x},props:{project:{type:Object},tasks:{type:Array}},methods:{setFocus(){document.getElementById("input_name").focus()}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},_e={class:"flex flex-col gap-10 p-7"},fe={class:"grid grid-cols-12 grid-rows-1 gap-10 h-full"},he={class:"row-span-1 col-span-12 md:col-span-6"},ye={class:"text-gray-500 mb-5"},ve={key:0,class:"flex justify-start"},ke={class:"flex flex-col items-start gap-5"};function ge(e,c,n,h,y,p){const i=s("Head"),l=s("UpdateProject"),m=s("addTask"),v=s("NoTasks"),P=s("Task"),B=s("UserLayout");return r(),d(g,null,[o(i,{title:e.$page.props.project.name},null,8,["title"]),o(B,null,{default:u(()=>[t("div",_e,[o(l,{project:n.project},null,8,["project"]),o(m,{project:n.project},null,8,["project"]),t("div",fe,[t("div",he,[t("div",null,[t("h4",null,a(e.$t("EditProject.Title")),1),t("p",ye,a(e.$t("EditProject.Description")),1),n.tasks.length===0?(r(),d("div",ve,[o(v,{onClick:c[0]||(c[0]=k=>p.setFocus())})])):$("",!0),t("div",ke,[(r(!0),d(g,null,I(n.tasks,k=>(r(),w(P,{key:k.id,task:k},null,8,["task"]))),128))])])])])])]),_:1})],64)}const Ie=f(pe,[["render",ge]]);export{Ie as default};
