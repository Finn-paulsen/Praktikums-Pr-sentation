<template>
  <div id="app">
    <div id="curtain" :class="{ open: isCurtainOpen }">
      <div class="left"></div>
      <h1>Mein Praktikum bei DMK IT Solutions</h1>
      <div class="right"></div>
      <div class="ground"></div>
    </div>

    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  data() {
    return {
      isCurtainOpen: false
    };
  },
  mounted() {
   
    setTimeout(() => {
      this.isCurtainOpen = true;
    }, 500);
  },
  components: {
    NavBar
  }
};
</script>

<style>
#curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

#curtain.open .left,
#curtain.open .right {
  width: 50%;
}

#curtain h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: #333;
}

#curtain .left,
#curtain .right {
  position: absolute;
  height: 100%;
  width: 0;
  background-color: #333;
  transition: width 5s ease-out;
}

#curtain .left {
  left: 0;
}

#curtain .right {
  right: 0;
}

#curtain .ground {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background-color: #333;
}
</style>