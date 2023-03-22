<template>
  <!-- https://www.youtube.com/watch?v=QsH8FL0952k&t=8226s -->
  <main>
    <div class="container my-5">
      <div class="row">
        <div class="col">
          <div class="btn-group" role="group">
            <button class="join-btn" v-on:click="joinstream()">Join de kamer</button>
            <button class="leave-btn">Leave</button>
            <button class="screen-btn"></button>
          </div>

        </div>
      </div>
    </div>
  </main>

  <div  id="videos">

  </div>
</template>

<script>
const APP_ID = "a7b0b358dfbe4f40b99648a9d699d613";

const channel = window.location.pathname.split("/").pop();
let uid;
let client;
let token;
let localTracks = [];
let remoteUsers = {};



export default {
  methods: {
    async joinstream() {
      try {
        axios.post("/agora/token", {
        channelName: channel,
          }).then((response) => {
            this.joinRoomInit(response.data, channel);
          });
      } catch (error) {
        console.log(error);
      }
    },

    async joinRoomInit(token, channel) {
      console.log(uid);
      client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      await client.join(APP_ID, channel, token, uid);

      client.on("user-published", this.handleUserPublished);
      client.on("user-left", this.handleUserLeft)

      this.joinStream(uid);
    },

    async joinStream(uid) {
      localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
      let player = `
        <div id="user-container-${uid}" class="video__container">
          <p class="user-name">You</p>
          <div id="user-${uid}" class="video-player"></div>
        </div>
      `;

      document.getElementById("videos").insertAdjacentHTML("beforeend", player);
      localTracks[1].play(`user-${uid}`);
      await client.publish([localTracks[0], localTracks[1]])
    },

    async handleUserPublished(user, mediaType) {
      remoteUsers[user.uid] = user;

      await client.subscribe(user, mediaType);

      let player = document.getElementById(`user-contianer-${user.uid}`);
      if (player === null) {
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

    async handleUserLeft(user) {
      let player = document.getElementById(`user-container-${user.uid}`);
      player.remove();
      delete remoteUsers[user.uid];
    }
  }
};
</script>

<style>
.video-player {
  width: 200px;
  height: 200px;

}

.vide-player video {
  border-radius: 5px;
}

</style>
