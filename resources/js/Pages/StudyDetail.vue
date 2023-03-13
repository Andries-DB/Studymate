<script setup>
  import NavBar from '../Components/Navigation/NavBar.vue';

const props = defineProps({
  activeUsers: {
    type: Array,
  },

});

</script>

<template>
  <!-- https://www.youtube.com/watch?v=1cYKoSe3MN4 TUTORIAL NEEDED 1:01:52 -->
  <Head title="Studeer" />
    <div class="grid grid-cols-12 gap-2 h-screen">
        <div class="col-span-2 rounded-r-[37px] flex flex-col lg:flex-row md:divide-x-2 ">
            <div class="w-full overflow-hidden bg-stone-50 h-full">
                <NavBar />
            </div>
        </div>
        <div class="col-span-10 xl:block">
            <div class="flex-1 overflow-hidden w-full h-full">
              <button id="join-btn" v-on:click="joinBtn()"> Join de studeerkamer</button>

              <div id="user-streams">

              </div>

              <button id="camera-btn">Camera</button>
              <button id="leave-btn">Leave</button>
            </div>
        </div>
    </div>

</template>

<script>
  // Let's add the custom script
  let scriptTag = document.createElement('script')
  scriptTag.async = true
  scriptTag.setAttribute('src', `https://download.agora.io/sdk/release/AgoraRTC_N.js`)
  document.head.appendChild(scriptTag)

  // Let's create client object
  let client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

  // Let's create configuration object
  let config = {
    appid: 'a7b0b358dfbe4f40b99648a9d699d613',
    token: '007eJxTYBAXfWdobD3Pz9ypUitCMzJKff1J747rW66LTutzMzmjt0eBIdE8ySDJ2NQiJS0p1STNxCDJ0tLMxCLRMsXMEogNjUtE+VMaAhkZXiWxsDAyQCCIz8kQXFKaUumbWJLKwAAA6wwd6Q==',
    uid: null,
    channel: 'StudyMate'
  };

  // Videostream tracks
  let localTracks = {
    videoTrack: null,
  };
  let remoteTracks = {}

  export default {
    methods: {
      async joinBtn() {
        console.log('Joining the stream');
        await this.joinStream();
      },
      async joinStream()  {

        // When you are joined, listen for other users joining
        client.on('user-published', this.handleUserJoined);

        // Filling in the tracks & de uid
        [config.uid, localTracks.videoTrack] = await Promise.all([
          client.join(config.appid, config.channel, config.token || null, config.uid || null),
          AgoraRTC.createCameraVideoTrack(),
        ])

        let videoPlayer =
        `<div class='video-containers' id="video-wrapper-${config.uid}">
          <p class="user-uid">${config.uid}</p>
          <div class="video-player player" id="stream-${config.uid}"></div>
        </div>`

        document.getElementById('user-streams').insertAdjacentHTML('beforeend', videoPlayer);
        localTracks.videoTrack.play(`stream-${config.uid}`);

        await client.publish(Object.values(localTracks));
      },
      async handleUserJoined(user, mediaType) {
        console.log('User joined the stream')
        remoteTracks[user.uid] = user;
        await client.subscribe(user, mediaType);

        if(mediaType === 'video') {
          let videoPlayer =
          `<div class='video-containers' id="video-wrapper-${user.uid}">
            <p class="user-uid">${user.uid}</p>
            <div class="video-player player" id="stream-${user.uid}"></div>
          </div>`

          document.getElementById('user-streams').insertAdjacentHTML('beforeend', videoPlayer);
          user.videoTrack.play(`stream-${user.uid}`);
        }


      },
    }
    }
</script>

<style>
  .video-player {
    width: 300px;
    height: 100px;
  }
</style>
