import{_ as S}from"./Modal-266fdc64.js";import{_ as P}from"./TextInput-720c427d.js";import{_ as k}from"./PrimaryButton-7634a09f.js";import{o as r,f as c,b as e,s as b,x as d,c as x,w as h,t as l,a,d as v,i as $,F as w,r as I,z as V,k as C,y as j,A as N,B as z,n as O,u as F,q as R}from"./app-08b1b47a.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{E as K}from"./ErrorHandling-d5357455.js";function U(t,o){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function W(t,o){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"})])}function q(t,o){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"})])}function G(t,o){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z","clip-rule":"evenodd"})])}const J={components:{Modal:S,TextInput:P,PrimaryButton:k},setup(){const{t}=b({});return{t}},data(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}},props:{show:{type:Boolean,required:!0},close:{type:Function,required:!0}}},Q={class:"bg-white rounded-lg flex flex-col items-center justify-center p-5 relative"},X={class:"mb-5"},Y=["action"],Z=["value"];function ee(t,o,n,_,u,s){const i=d("TextInput"),p=d("PrimaryButton"),m=d("Modal");return r(),x(m,{onClose:n.close,show:n.show},{default:h(()=>[e("div",Q,[e("h3",X,l(t.$t("Modals.ProjectModal.Title")),1),e("form",{method:"POST",action:t.route("addProject")},[e("input",{type:"hidden",name:"_token",value:u.csrf},null,8,Z),a(i,{id:"name",type:"text",name:"name",required:"",autocomplete:"Name",placeholder:t.$t("Modals.ProjectModal.Name")},null,8,["placeholder"]),a(p,{class:"mt-3"},{default:h(()=>[v(l(t.$t("Modals.ProjectModal.Title")),1)]),_:1})],8,Y)])]),_:1},8,["onClose","show"])}const D=f(J,[["render",ee]]),T=$(!1),te={components:{ProjectModal:D,PrimaryButton:k},setup(){const{t}=b({});return{t}},methods:{currentDate(){const t=new Date,o={weekday:"long",year:"numeric",month:"long",day:"numeric"};return t.toLocaleDateString(localStorage.getItem("locale"),o)},closeModal(){T.value=!1},openModal(){T.value=!0}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),AddProject:T})},oe={class:"flex flex-col md:flex-row gap-10 justify-between items-center"},se={class:"space-y-2"},ne={class:"flex justify-between gap-2 items-center"};function re(t,o,n,_,u,s){const i=d("PrimaryButton"),p=d("ProjectModal");return r(),c(w,null,[e("div",oe,[e("div",se,[e("h1",null,l(t.$t("Dashboard.HelloBar.Hello"))+", "+l(t.$page.props.auth.user.username),1),e("p",null,l(t.$t("Dashboard.HelloBar.Today"))+" "+l(s.currentDate()),1)]),e("div",ne,[a(i,{id:"addProject",onClick:o[0]||(o[0]=m=>s.openModal())},{default:h(()=>[v(" + "+l(t.$t("Dashboard.CTA.AddProject")),1)]),_:1})])]),a(p,{show:t.AddProject,onClose:s.closeModal},null,8,["show","onClose"])],64)}const Rt=f(te,[["render",re]]),ae=["href"],le={__name:"SecondaryAnchor",props:{href:{type:String,required:!0}},setup(t){return(o,n)=>(r(),c("a",{href:t.href,class:"border border-indigo-500 bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white hover:border hover:border-white"},[I(o.$slots,"default")],8,ae))}},ce=["type"],E={__name:"TertiaryButton",props:{type:{type:String,default:"submit"}},setup(t){return(o,n)=>(r(),c("button",{type:t.type,class:"border border-indigo-500 bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white hover:border hover:border-white"},[I(o.$slots,"default")],8,ce))}},de={components:{SecondaryAnchor:le,TertiaryButton:E,TrashIcon:G,PencilIcon:W},props:{project:{type:Object},tasks:{type:Array}},computed:{taskperproject(){return this.$page.props.tasks.filter(t=>this.project.id===t.project_id)},completedTasksperproject(){return this.taskperproject.filter(t=>t.completed===1)},percentage(){return this.completedTasksperproject.length/this.taskperproject.length*100}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},ie={class:"rounded-xl text-white p-4 flex justify-between flex-col gap-7 bg-indigo-500"},ue={class:"flex justify-between items-center"},pe={class:"relative flex items-center gap-1.5"},_e=["action"],he=["value"],me=["value"],fe={class:"space-y-2"},ge={class:"text-white"},ve={class:"relative h-2 bg-black bg-opacity-20 rounded-xl"};function ye(t,o,n,_,u,s){const i=d("PencilIcon"),p=d("SecondaryAnchor"),m=d("TrashIcon"),g=d("TertiaryButton");return r(),c("div",ie,[e("div",ue,[e("h3",null,l(n.project.name),1),e("div",pe,[a(p,{href:t.route("projectDetail",n.project.id)},{default:h(()=>[a(i,{class:"w-5 h-5"})]),_:1},8,["href"]),e("form",{method:"post",action:t.route("deleteProject"),class:"bg-gray-200 p-0.30 rounded-lg"},[e("input",{type:"hidden",name:"_token",value:t.csrf},null,8,he),e("input",{type:"hidden",name:"id",value:n.project.id},null,8,me),a(g,{type:"submit"},{default:h(()=>[a(m,{class:"w-5 h-5"})]),_:1})],8,_e)])]),e("div",fe,[e("p",ge,l(s.taskperproject.length)+" "+l(s.taskperproject.length===1?"taak":"taken")+" | "+l(s.completedTasksperproject.length)+" voltooid ",1),e("div",ve,[e("span",{class:"absolute bg-gray-200 h-2 top-0 left-0 rounded-xl",style:V(`width: ${s.percentage}%`)},null,4)])])])}const we=f(de,[["render",ye]]),$e={components:{PlusIcon:q}},ke={class:"lg:w-1/3 w-full h-36 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer"},be=e("p",null,"Voeg een project toe",-1);function xe(t,o,n,_,u,s){const i=d("PlusIcon");return r(),c("div",ke,[a(i,{class:"h-5 w-5"}),be])}const je=f($e,[["render",xe]]),B=$(!1),Me={components:{Project:we,NoProjects:je,ProjectModal:D},data(){return{AddProject:B,csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}},props:{projects:{type:Array,required:!0}},methods:{closeModal(){B.value=!1},openModal(){B.value=!0}}},Te={class:"flex flex-col flex-wrap md:flex-row items-center md:items-stretch gap-6"},Be={key:0,class:"lg:w-full w-11/12"};function Ae(t,o,n,_,u,s){const i=d("NoProjects"),p=d("project"),m=d("ProjectModal");return r(),c(w,null,[e("div",Te,[t.$page.props.projects.length===0?(r(),c("div",Be,[a(i,{onClick:o[0]||(o[0]=g=>s.openModal())})])):C("",!0),(r(!0),c(w,null,j(t.$page.props.projects,g=>(r(),x(p,{key:g.id,class:"w-full md:w-1/4 rounded-xl p-4",project:g},null,8,["project"]))),128))]),a(m,{show:u.AddProject,onClose:s.closeModal},null,8,["show","onClose"])],64)}const Kt=f(Me,[["render",Ae]]),Pe={components:{TertiaryButton:E,CheckIcon:U},props:{task:{type:Object,required:!0}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},Ie={class:"relative bg-white shadow-orange-50 shadow-2xl p-7 rounded-xl flex"},Ce=e("div",{class:"absolute top-0 left-0 w-2 h-full rounded-l-xl bg-indigo-500"},null,-1),Ee={class:"flex-1"},Se={class:"text-gray-500"},Ne=["action"],ze=["value"],qe=["value"];function De(t,o,n,_,u,s){const i=d("CheckIcon"),p=d("TertiaryButton");return r(),c("div",Ie,[Ce,e("div",Ee,[e("h6",null,[v(l(n.task.name)+" - ",1),e("strong",null,l(n.task.project.name),1)]),e("p",Se,l(n.task.description),1)]),e("form",{method:"post",action:t.route("updateTask")},[e("input",{type:"hidden",name:"_token",value:t.csrf},null,8,ze),e("input",{type:"hidden",name:"id",value:n.task.id},null,8,qe),a(p,{type:"submit"},{default:h(()=>[a(i,{class:"h-5 w-5"})]),_:1})],8,Ne)])}const He=f(Pe,[["render",De]]),Le={components:{PlusIcon:q}},Ve={class:"w-full h-16 bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer"},Oe=e("p",null,"Voeg een taak toe",-1);function Fe(t,o,n,_,u,s){const i=d("PlusIcon");return r(),c("div",Ve,[a(i,{class:"h-5 w-5"}),Oe])}const Re=f(Le,[["render",Fe]]),Ke={components:{Modal:S,TextInput:P,PrimaryButton:k,ErrorHandling:K},setup(){const{t}=b({});return{t}},data(){return{csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")}},props:{show:{type:Boolean,required:!0},close:{type:Function,required:!0},projects:{type:Array,required:!0}},methods:{Taskerror(){document.getElementById("projectError").classList.add("hidden"),document.getElementById("nameError").classList.add("hidden"),document.getElementById("descriptionError").classList.add("hidden"),document.getElementById("project").value=="disabled"&&(document.getElementById("projectError").classList.remove("hidden"),event.preventDefault()),document.getElementById("name").value==""&&(document.getElementById("nameError").classList.remove("hidden"),event.preventDefault()),document.getElementById("description").value==""&&(document.getElementById("descriptionError").classList.remove("hidden"),event.preventDefault())}}},Ue={class:"bg-white rounded-lg flex flex-col items-center justify-center p-5 relative"},We={class:"mb-5"},Ge=["action"],Je=["value"],Qe={name:"project",id:"project",class:"relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"},Xe={value:"disabled",disabled:"",selected:""},Ye=["value"];function Ze(t,o,n,_,u,s){const i=d("ErrorHandling"),p=d("TextInput"),m=d("PrimaryButton"),g=d("Modal");return r(),x(g,{show:n.show,onClose:n.close},{default:h(()=>[e("div",Ue,[e("h3",We,l(t.$t("Modals.TaskModal.Title")),1),e("form",{method:"POST",action:t.route("addTask"),class:"flex flex-col gap-1"},[e("input",{type:"hidden",name:"_token",value:u.csrf},null,8,Je),e("select",Qe,[e("option",Xe,l(t.$t("Modals.TaskModal.SelectProject")),1),(r(!0),c(w,null,j(n.projects,y=>(r(),c("option",{value:y.id},l(y.name),9,Ye))),256))]),a(i,{id:"projectError",class:"hidden"},{default:h(()=>[v(l(t.$t("Modals.TaskModal.Errors.Project")),1)]),_:1}),a(p,{id:"name",type:"text",name:"name",autocomplete:"Name",placeholder:t.$t("Modals.TaskModal.Name")},null,8,["placeholder"]),a(i,{id:"nameError",class:"hidden"},{default:h(()=>[v(l(t.$t("Modals.TaskModal.Errors.Name")),1)]),_:1}),a(p,{id:"description",type:"text",name:"description",autocomplete:"Description",placeholder:t.$t("Modals.TaskModal.Description")},null,8,["placeholder"]),a(i,{id:"descriptionError",class:"hidden"},{default:h(()=>[v(l(t.$t("Modals.TaskModal.Errors.Description")),1)]),_:1}),a(m,{class:"mt-3",onClick:o[0]||(o[0]=y=>s.Taskerror())},{default:h(()=>[v(l(t.$t("Modals.TaskModal.Title")),1)]),_:1})],8,Ge)])]),_:1},8,["show","onClose"])}const et=f(Ke,[["render",Ze]]);const A=$(!1),tt={setup(){const{t}=b({});return{t}},components:{Task:He,TextInput:P,TertiaryButton:E,NoTasks:Re,TaskModal:et},props:{tasks:{type:Array,required:!0},projects:{type:Array,required:!0}},methods:{getTasks(){return this.$page.props.tasks.filter(t=>!t.completed)},showModal(){A.value=!0},closeModal(){A.value=!1}},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content"),AddTask:A})},ot=t=>(N("data-v-1d31bdd9"),t=t(),z(),t),st={class:"space-y-7"},nt={class:"flex justify-between items-center"},rt={class:"text-gray-500"},at=ot(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})],-1)),lt={class:"flex flex-col space-y-4"},ct={key:0,class:"flex justify-center"};function dt(t,o,n,_,u,s){const i=d("TertiaryButton"),p=d("NoTasks"),m=d("Task"),g=d("TaskModal");return r(),c(w,null,[e("div",st,[e("div",nt,[e("div",null,[e("h4",null,l(t.$t("Dashboard.Tasks.Title")),1),e("p",rt,l(t.$t("Dashboard.Tasks.Description")),1)]),a(i,{id:"addProject",onClick:o[0]||(o[0]=y=>s.showModal())},{default:h(()=>[at]),_:1})]),e("div",lt,[s.getTasks().length===0?(r(),c("div",ct,[a(p,{onClick:o[1]||(o[1]=y=>s.showModal())})])):C("",!0),(r(!0),c(w,null,j(s.getTasks(),(y,L)=>(r(),x(m,{key:L,task:y,class:"lg:w-full w-10/12"},null,8,["task"]))),128))])]),a(g,{show:t.AddTask,close:this.closeModal,projects:this.$page.props.projects},null,8,["show","close","projects"])],64)}const Ut=f(tt,[["render",dt],["__scopeId","data-v-1d31bdd9"]]);const it={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},ut=["d"],H={__name:"NavBarMenu",setup(t){b({});const o=[{text:"dashboard",icon:"M14 17h2.75A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H14v14zM12.5 3h-5v14h5V3zM3.25 3H6v14H3.25A2.25 2.25 0 011 14.75v-9.5A2.25 2.25 0 013.25 3z",href:"dashboard"},{text:"studeerkamers",icon:"M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z",href:"studeerkamers"},{text:"berichten",icon:"M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z",href:"berichten"},{text:"instellingen",icon:"M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z",href:"instellingen"}];function n(){return window.location.pathname.replace(/^\/([^\/]*).*$/,"$1")}function _(u){return u.charAt(0).toUpperCase()+u.substring(1)}return(u,s)=>(r(),c("ul",null,[(r(),c(w,null,j(o,({text:i,icon:p,href:m})=>a(F(R),{class:O(["p-3 flex justify-start items-center gap-3 cursor-pointer",{"font-bold bg-indigo-500 rounded-xl text-stone-50":n()===i}]),href:u.route(m)},{default:h(()=>[(r(),c("svg",it,[e("path",{"fill-rule":"evenodd",d:p,"clip-rule":"evenodd"},null,8,ut)])),e("span",null,l(_(i)),1)]),_:2},1032,["href","class"])),64))]))}};const M=t=>(N("data-v-f02f0d42"),t=t(),z(),t),pt={class:"lg:space-y-10 lg:block lg:fixed relative grid grid-cols-12 h-full bg-stone-100"},_t={class:"col-span-9 flex justify-center items-center gap-4"},ht=["href"],mt=M(()=>e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-8 h-8"},[e("path",{d:"M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z"})])],-1)),ft=M(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1)),gt=[ft],vt={class:"col-span-12 hidden lg:block pt-5"},yt={class:"relative w-full h-24 flex flex-col items-center gap-4"},wt=["src","alt"],$t={class:"text-center"},kt=["href"],bt={class:"font-bold text-black"},xt={class:"text-gray-500"},jt={key:0,class:"col-span-12 p-10 mb-20"},Mt={class:""},Tt=["action"],Bt=["value"],At=M(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H3"})],-1)),Pt=M(()=>e("span",null,"Logout",-1)),It={components:{NavBarMenu:H,PrimaryButton:k},data:()=>({csrf:document.querySelector('meta[name="csrf-token"]').getAttribute("content")})},Ct=Object.assign(It,{__name:"Navbar",setup(t){const n=$(document.body.offsetWidth),_=$(n.value>1024),u=()=>{_.value=!_.value};return window.addEventListener("resize",()=>{n.value=document.body.offsetWidth,_.value=n.value>1024}),(s,i)=>(r(),c("div",pt,[e("div",_t,[e("a",{href:s.route("dashboard"),class:"flex flex-row items-center justify-center text-indigo-500 xl:mt-12 py-10 xl:py-0 text-3xl"},[v(" Studym "),mt,v(" te ")],8,ht)]),e("div",{class:"lg:hidden col-span-3 flex justify-end items-center p-2 mr-16"},[e("button",{class:"bg-stone-300 rounded-lg p-2",onClick:u},gt)]),e("div",vt,[e("div",yt,[e("img",{src:`../../storage/${s.$page.props.auth.user.avatar}`,alt:s.$page.props.auth.user.username,class:"w-24 h-24 rounded-full"},null,8,wt)]),e("div",$t,[e("a",{href:s.route("instellingen")},[e("h5",bt,l(s.$page.props.auth.user.name),1),e("p",xt,l(s.$page.props.auth.user.email),1)],8,kt)])]),_.value?(r(),c("div",jt,[a(H),e("div",Mt,[e("form",{method:"POST",action:s.route("logout")},[e("input",{type:"hidden",name:"_token",value:s.csrf},null,8,Bt),a(k,{type:"submit",class:"flex lg:justify-center justify-items-start items-center gap-2 mt-5"},{default:h(()=>[At,Pt]),_:1})],8,Tt)])])):C("",!0)]))}}),Et=f(Ct,[["__scopeId","data-v-f02f0d42"]]),St={class:"grid grid-cols-12 gap-2 h-screen"},Nt={class:"col-span-12 xl:col-span- bg-stone-50 rounded-r-[37px] flex gap-2 md:divide-x-2 flex-col lg:flex-row"},zt={class:"w-full lg:w-[225px] lg:h-full overflow-hidden"},qt={class:"flex-1 overflow-hidden"},Wt={__name:"UserLayout",setup(t){return(o,n)=>(r(),c("div",St,[e("div",Nt,[e("div",zt,[a(Et)]),e("div",qt,[I(o.$slots,"default")])])]))}};export{Kt as C,Rt as H,Re as N,Ut as T,Wt as _,E as a,q as b,le as c,W as d,U as e,G as r};
