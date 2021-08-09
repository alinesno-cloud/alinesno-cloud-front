<template>
  <!-- autoplay="false" -->
  <view name="videoPlayer" class="flex flex-direction">
    <video
      id="myVideo"
      class="response"
	  style="width: 100%;"
      :src="'rtsp://113.204.233.38:29744/live/2002024871_10000000001131000002_0_0'"
      :title="videoTitle"
      controls="true"
    page-gesture="true"
      object-fit="contain"
    show-mute-btn="true"
    autoplay="autoplay"
      :play-strategy="3"
      enable-play-gesture="true"
      vslide-gesture="true"
      @error="videoErrorCallback"
      @waiting="videoWaiting"
      @loadedmetadata="videoLoadOk"
    ></video>

  </view>
</template>

<script>
export default {
  name: "videoPlayer",
  props: {
    title: {
      type: String,
      default: "",
    },
    firstPic: {
      type: String,
      default: "",
    },
    videoType: {
      type: String,
      default: "",
    },
    videoSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      videoUrl: this.videoSrc,
      firstImg: '../'+this.firstPic,
      videoTitle: this.title,
    };
  },
  watch: {
    videoSrc() {
      this.setVideoUrl();
    },
  },
  mounted() {
    this.setVideoUrl();
  },

  onReady: function (res) {
   
    this.videoContext = uni.createVideoContext("myVideo");
    console.log(this.videoUrl);
	
  },
  methods: {
    setVideoUrl() {
      console.log(this.videoSrc);
      // uni.setNavigationBarTitle({
      // 	title: this.title
      // });
      this.videoUrl = this.videoSrc;
      this.firstImg = this.firstPic;
      this.videoTitle = this.title;

      console.log(this.firstImg + "___" + this.firstPic);

      console.log(this.title + "___" + this.videoTitle);
    },
    videoErrorCallback(e) {
      console.log(e);
      // uni.showModal({
      //     content: e.target.errMsg,
      //     showCancel: false
      // });
    },
    videoWaiting() {
      // uni.showLoading({
      //     title: '加载中'
      // });
    },
    videoLoadOk() {
      // uni.hideLoading();
    },
  },
};
</script>

<style lang="scss">
.videoPlayer {
  width: 100%;
}
#myVideo {
  width: 100%;
}
</style>