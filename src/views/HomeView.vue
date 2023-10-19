<template>
  <div>
    <div id="curtain" :class="{ 'open': isCurtainOpen }">
      <div class="left"></div>
      <div class="right"></div>
      <div class="ground"></div>
      <h1>{{ presentation.title }}</h1>
    </div>

    <header>
      <h1>{{ presentation.company }}</h1>
      <p>{{ presentation.date }}</p>
    </header>

    <main>
      <section v-for="(section, index) in presentation.sections" :key="index">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isCurtainOpen = ref(false);

const presentation = ref({
  title: 'Mein Praktikum',
  company: 'DMK IT Solutions',
  date: 'Oktober 2023',
  sections: [
    { title: 'Einführung', content: '...' },
    { title: 'Aufgaben', content: '...' },
    { title: 'Leistungen', content: '...' },
    { title: 'Feedback', content: '...' }
  ]
});

onMounted(() => {

  setTimeout(() => {
    isCurtainOpen.value = true;
  }, 1000); 
});
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
}

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
