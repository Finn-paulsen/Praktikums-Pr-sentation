<template>
    <section :id="id">
      <div class="container">
        <h2>{{ title }}</h2>
        <slot></slot>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      title: String
    }
  };
  </script>
  
  <style>

  </style>