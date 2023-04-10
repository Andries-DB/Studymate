import{o as f,f as y,b as n,X as k,a as i,w as d,F as x,s as l,t as u,d as h}from"./app-6524ffaa.js";import{_ as j}from"./PrimaryButton-3d93d652.js";import{_ as L}from"./UserLayout-eb210df4.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-3f0803df.js";import"./TextInput-98f2765e.js";import"./ErrorHandling-ad68409f.js";const $={},B={id:"cameraPlaceholder",class:"video-player bg-white text-black hover:bg-white transform transition hover:-translate-y-1 border-2 border-dashed rounded-xl p-4 flex justify-center text-center items-center gap-3 hover:cursor-pointer"},I=n("h2",{class:"flex items-center justify-center h-full text-center"},"Join de studeerkamer om samen te studeren!",-1),E=[I];function C(e,t){return f(),y("div",B,E)}const M=_($,[["render",C]]);const H="a7b0b358dfbe4f40b99648a9d699d613",v=window.location.pathname.split("/").pop();let a,o=[],p={};const T={props:{studyroomInformation:Object,owner:Object,client:Object},methods:{async joinstream(){try{axios.post("/agora/token",{channelName:v}).then(e=>{this.joinRoomInit(e.data,v),document.getElementById("cameraPlaceholder").classList.add("hidden"),document.getElementById("join-btn").classList.add("hidden"),document.getElementById("leave-btn").classList.remove("hidden"),document.getElementById("screen-btn").classList.remove("hidden")})}catch(e){console.log(e)}},async joinRoomInit(e,t){const s=this.client.username;a=AgoraRTC.createClient({mode:"rtc",codec:"vp8"}),await a.join(H,t,e,s),a.on("user-published",this.handleUserPublished),a.on("user-left",this.handleUserLeft),this.joinStream(s,this.client.username)},async joinStream(e,t){o=await AgoraRTC.createMicrophoneAndCameraTracks();let s=`
              <div id="user-container-${e}" class="video__container your-container">
                <div id="user-${e}" class="video-player bg-black"></div>
                <h4 class="user-name flex justify-center mt-2">Jij (${t})</h4>
              </div>
              `;document.getElementById("yourCamera").insertAdjacentHTML("beforeend",s),o[1].play(`user-${e}`),await a.publish([o[0],o[1]])},async handleUserPublished(e,t){p[e.uid]=e,await a.subscribe(e,t);let s=document.getElementById(`user-container-${e.uid}`);s===null&&(s=`
                  <div id="user-container-${e.uid}" class="video__container">
                    <div id="user-${e.uid}" class="video-player bg-black"></div>
                    <h4 class="user-name flex justify-center mt-2">${e.uid}</h4>
                  </div>
                  `,document.getElementById("videos").insertAdjacentHTML("beforeend",s)),t==="video"&&e.videoTrack.play(`user-${e.uid}`)},async handleUserLeft(e){document.getElementById(`user-container-${e.uid}`).remove(),delete p[e.uid]},async leaveStream(){o[0].close(),o[1].close(),await a.leave(),document.getElementById("cameraPlaceholder").classList.remove("hidden"),document.getElementById("join-btn").classList.remove("hidden"),document.getElementById("leave-btn").classList.add("hidden"),document.getElementById("screen-btn").classList.add("hidden"),document.getElementById("videos").innerHTML="",document.getElementById("yourCamera").innerHTML="",document.getElementById("nothingtoshow").classList.remove("hidden")},async toggleCamera(e){let t=document.getElementById("screen-btn");o[1].muted?(await o[1].setMuted(!1),t.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                    </svg>`,t.classList.add("active")):(await o[1].setMuted(!0),t.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>`,t.classList.remove("active"))}},components:{UserLayout:L,Head:k,PrimaryButton:j,JoinStudy:M}},P={class:"flex flex-col gap-10 p-7 lg:ml-8"},S={class:"flex justify-between"},U={class:""},A={class:"font-bold text-3xl"},J={class:"grid grid-cols-12 grid-rows-2 gap-10 h-full w-full"},V={class:"row-span-5 col-span-12 md:col-span-3"},D={class:"flex items-center justify-center lg:block"},N=n("div",{id:"yourCamera",class:"lg:fixed"},null,-1),R=n("div",{class:"row-span-5 col-span-12 md:col-span-9 flex justify-center lg:block mb-36"},[n("div",{id:"videos",class:"flex h-full flex-wrap justify-center gap-5"})],-1),O={class:"w-full h-20 fixed bg-stone-100 bottom-0 flex justify-center gap-5 items-center"},F={id:"screen-btn-div"},z=n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"})],-1);function X(e,t,s,q,G,r){const g=l("Head"),b=l("JoinStudy"),w=l("UserLayout"),c=l("PrimaryButton");return f(),y(x,null,[i(g,{title:e.$page.props.studyroomInformation.name},null,8,["title"]),i(w,null,{default:d(()=>[n("div",P,[n("div",S,[n("div",U,[n("h1",A,u(e.$page.props.studyroomInformation.name),1),n("h2",null,u(e.$page.props.studyroomInformation.private?`Een kamer van ${e.$page.props.owner.user.username}`:"Een openbare studeerkamer"),1)])]),n("div",J,[n("div",V,[n("div",D,[i(b,{onClick:t[0]||(t[0]=m=>r.joinstream())}),N])]),R])])]),_:1}),n("div",O,[n("div",null,[i(c,{id:"join-btn",onClick:t[1]||(t[1]=m=>r.joinstream())},{default:d(()=>[h(" Join de kamer ")]),_:1})]),n("div",null,[i(c,{id:"leave-btn",class:"hidden",onClick:t[2]||(t[2]=m=>r.leaveStream())},{default:d(()=>[h(" Verlaat de kamer ")]),_:1})]),n("div",F,[i(c,{id:"screen-btn",class:"hidden",onClick:t[3]||(t[3]=m=>r.toggleCamera(e.event))},{default:d(()=>[z]),_:1})])])],64)}const ne=_(T,[["render",X]]);export{ne as default};