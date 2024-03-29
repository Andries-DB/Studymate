<template>
  <Head :title="$page.props.studyroomInformation.name" />
  <UserLayout>
    <div class="flex flex-col gap-10 lg:p-7 lg:ml-8">
      <div class="flex justify-between">
        <div class="lg:p-0 p-7">
          <h1 class="font-bold text-3xl">{{$page.props.studyroomInformation.name}}</h1>
          <h2>{{ $page.props.studyroomInformation.private ? `Een kamer van ${$page.props.owner.user.username}` : "Een openbare studeerkamer" }}</h2>
        </div>
      </div>
      <div class="grid grid-cols-12 grid-rows-2 h-full w-full">
        <div class="row-span-5 col-span-12 md:col-span-3">
          <div class="flex items-center justify-center lg:block">
            <JoinStudy @click="joinstream()"/>
            <div id="yourCamera" class="lg:fixed">
              <!-- Here comes your camera when joining the studyroom -->
            </div>
          </div>
        </div>
        <div class="row-span-5 col-span-12 md:col-span-9 flex justify-center lg:block mb-36" >
          <div id="videos" class="flex h-full flex-wrap justify-center gap-5">
            <!-- Here comes the other users cameras -->
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
  <div class="w-full h-20 fixed bg-stone-100 bottom-0 flex justify-center gap-5 items-center">
    <div>
      <PrimaryButton id="join-btn" @click="joinstream()">
        {{ $t('Study.JoinStudyRoom') }}
      </PrimaryButton>
    </div>
    <div>
      <PrimaryButton id="leave-btn" class="hidden" @click="leaveStream()">
        {{ $t('Study.LeaveStudyRoom') }}
      </PrimaryButton>
    </div>
    <div id="screen-btn-div">
      <PrimaryButton id="screen-btn"  class="hidden" @click="toggleCamera(event)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
        </svg>
      </PrimaryButton>
    </div>
  </div>

</template>

<script>
import { Head } from '@inertiajs/vue3';
import PrimaryButton from '../Components/Buttons/PrimaryButton.vue';
import UserLayout from '@/Layouts/UserLayout.vue';
import JoinStudy from '@/Components/Widgets/JoinStudy.vue';

// These are the Agora RTC variables
const APP_ID = import.meta.env.VITE_AGORA_APP_ID;
const channel = window.location.pathname.split("/").pop();
let client;
let token;
let localTracks = [];
let remoteUsers = {};

export default {
    props: {
        studyroomInformation: Object,
        owner: Object,
        client: Object,
    },
    methods: {
        /** Agora RTC Functions */
        // Getting the token & joining the room.
        async joinstream() {
            try {
                axios.post("/agora/token", {
                    channelName: channel,
                }).then((response) => {
                    this.joinRoomInit(response.data, channel);
                    document.getElementById("cameraPlaceholder").classList.add("hidden");
                    document.getElementById("join-btn").classList.add("hidden");
                    document.getElementById("leave-btn").classList.remove("hidden");
                    document.getElementById("screen-btn").classList.remove("hidden");

                });
            }
            catch (error) {
                console.log(error);
            }
        },
        // Creating the client & listening for events
        async joinRoomInit(token, channel) {
            const uid = this.client.username;
            client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
            await client.join(APP_ID, channel, token, uid);
            client.on("user-published", this.handleUserPublished);
            client.on("user-left", this.handleUserLeft);
            this.joinStream(uid, this.client.username);
        },
        // You joining the room
        async joinStream(uid, user) {
            localTracks = await AgoraRTC.createMicrophoneAndCameraTracks({}, { encoderConfig : {
              width: {min:640, ideal:1920, max:1920},
              height: {min:480, ideal:1080, max:1080},
              frameRate: {min:15, ideal:30, max:30},
              bitrate: {min:500, ideal:1000, max:1000},
            }
            });
            let player = `
              <div id="user-container-${uid}" class="video__container your-container">
                <div id="user-${uid}" class="video-player bg-black"></div>
                <h4 class="user-name flex justify-center mt-2">Jij (${user})</h4>
              </div>
              `;
            document.getElementById("yourCamera").insertAdjacentHTML("beforeend", player);
            localTracks[1].play(`user-${uid}`);
            await client.publish([localTracks[0], localTracks[1]]);
        },
        // Other people joining the room
        async handleUserPublished(user, mediaType) {
            remoteUsers[user.uid] = user;
            await client.subscribe(user, mediaType);
            let player = document.getElementById(`user-container-${user.uid}`);
            if (player === null) {
                // Create a new div for playing the remote stream if it doesn't exist, also add the possibility to expand the videoframe
                player = `
                  <div id="user-container-${user.uid}" class="video__container">
                    <div id="user-${user.uid}" class="video-player bg-black"></div>
                    <h4 class="user-name flex justify-center mt-2">${user.uid}</h4>
                  </div>
                  `;
                document.getElementById("videos").insertAdjacentHTML("beforeend", player);
            }
            if (mediaType === "video") {
                user.videoTrack.play(`user-${user.uid}`);
            }
        },
        // Other people leaving the room
        async handleUserLeft(user) {
            let player = document.getElementById(`user-container-${user.uid}`);
            player.remove();
            delete remoteUsers[user.uid];
        },
        // Leaving the room
        async leaveStream() {
            localTracks[0].close();
            localTracks[1].close();
            await client.leave();
            document.getElementById("cameraPlaceholder").classList.remove("hidden");
            document.getElementById("join-btn").classList.remove("hidden");
            document.getElementById("leave-btn").classList.add("hidden");
            document.getElementById("screen-btn").classList.add("hidden");
            document.getElementById("videos").innerHTML = "";
            document.getElementById("yourCamera").innerHTML = "";
            document.getElementById("nothingtoshow").classList.remove("hidden");
        },
        // Turning your camera on/off
        async toggleCamera(e) {
            let button = document.getElementById("screen-btn");
            if (localTracks[1].muted) {
                await localTracks[1].setMuted(false);
                button.innerHTML =
                    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                    </svg>`;
                button.classList.add("active");
            }
            else {
                await localTracks[1].setMuted(true);
                button.innerHTML =
                    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>`;
                button.classList.remove("active");
            }
        }
    },
    components: {
    UserLayout,
    Head,
    PrimaryButton,
    JoinStudy
  }
};
</script>

<style>
  .video-player {
    width: 300px;
    height: 300px;
  }
</style>
