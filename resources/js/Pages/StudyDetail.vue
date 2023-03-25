<script setup>
import { Head } from '@inertiajs/vue3';
import NavBar from '../Components/Navigation/Navbar.vue';
</script>

<template>
  <!-- https://www.youtube.com/watch?v=QsH8FL0952k&t=8226s -->
    <Head title="Studeerkamers" />
    <div class="grid grid-cols-12 gap-2 h-screen">
        <div class="col-span-2 rounded-r-full flex flex-col lg:flex-row md:divide-x-2 ">
            <div class="w-full overflow-hidden bg-stone-100 h-full">
                <NavBar />
            </div>
        </div>
        <div class="col-span-10 xl:block">
            <div class="flex-1 overflow-hidden w-full h-full">
              <div class="flex flex-col gap-10 p-7">
                <div>
                  <h1 class="font-bold text-3xl">{{$page.props.studyroomInformation.name}}</h1>
                  <h2>{{ $page.props.studyroomInformation.private ? `Een kamer van ${$page.props.owner.user.username}` : "Een openbare studeerkamer" }}</h2>
                </div>

                <div class="grid grid-cols-12 grid-rows-2 gap-10 h-full">
                  <div class="row-span-5 col-span-12 md:col-span-3">
                    <div id="yourCamera"></div>
                  </div>
                  <div class="row-span-5 col-span-12 md:col-span-9 bg-red-500" >
                    HIER KOMEN ANDERE CAMERA'S
                  </div>
                  <div class="row-span-1 col-span-12 md:col-span-12">
                    <div class="btn-group flex justify-center gap-10" role="group">
                      <button id="join-btn" class="join-btn text-indigo-500 border-solid border px-5 py-3 rounded-full hover:text-white hover:bg-indigo-500 border-indigo-500"  @click="joinstream()">Join de kamer</button>
                      <button id="leave-btn" class="leave-btn hidden">Leave de kamer</button>
                      <button id="screen-btn" class="screen-btn active text-indigo-500 border-solid border px-5 py-3 rounded-full hover:text-white hover:bg-indigo-500 border-indigo-500" @click="toggleCamera(event)">camera</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  <div  id="videos">

  </div>


</template>

<script>
// These are the Agora RTC variables
const APP_ID = import.meta.env.VITE_AGORA_APP_ID;
const channel = window.location.pathname.split("/").pop();
let uid;
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
            document.getElementById("join-btn").classList.add("hidden");
            document.getElementById("leave-btn").classList.remove("hidden");
            document.getElementById("screen-btn").classList.remove("hidden");
          });
      } catch (error) {
        console.log(error);
      }
    },

    // Creating the client & listening for events
    async joinRoomInit(token, channel) {
      client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      await client.join(APP_ID, channel, token, uid);

      client.on("user-published", this.handleUserPublished);
      client.on("user-left", this.handleUserLeft)

      this.joinStream(uid, this.client.username);
    },

    // You joining the room
    async joinStream(uid, user) {
      localTracks = await AgoraRTC.createMicrophoneAndCameraTracks({}, {encoderConfig: {
        width: 640,
        height: 480,
        bitrate: 500,
        frameRate: 15,
        minBitrate: 100,
        maxBitrate: 1000,
        degradationPrefer: "maintain-framerate",
      }});

      let player = `
        <div id="user-container-${uid}" class="video__container">
          <div id="user-${uid}" class="video-player"></div>
          <p class="user-name text-xl font-bold flex justify-center mt-2 mr-16">Jij (${ user })</p>
        </div>
      `;

      document.getElementById("yourCamera").insertAdjacentHTML("beforeend", player);
      localTracks[1].play(`user-${uid}`);
      await client.publish([localTracks[0], localTracks[1]])
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
            <p class="user-name">${user.uid}</p>
            <div id="user-${user.uid}" class="video-player"></div>
          </div>
        `;


        document.getElementById("videos").insertAdjacentHTML("beforeend", player);

      }

      if(mediaType === "video") {
        user.videoTrack.play(`user-${user.uid}`);
      }
    },

    // Other people leaving the room
    async handleUserLeft(user) {
      let player = document.getElementById(`user-container-${user.uid}`);
      player.remove();
      delete remoteUsers[user.uid];
    },

    // Turning your camera on/off
    async toggleCamera(e) {
      let button = document.getElementById("screen-btn");

      if(localTracks[1].muted) {
        await localTracks[1].setMuted(false);
        button.classList.add("active");
      } else {
        await localTracks[1].setMuted(true);
        button.classList.remove("active");
      }
    }
  }
};
</script>

<style>



.video-player {
  width: 300px;
  height: 300px;

}

.video-player video {
  border-radius: 5px;

}

.active {
  background-color: rgb(99,102,241); /* Green */
  color: white;
}
.active:hover {
  background-color: white; /* Green */
  color: rgb(99,102,241);
}

</style>
