<template>
    <div id="calendly-widget"></div>
  </template>
  
  
  <script setup>
  import { onMounted } from 'vue';
  
  const props = defineProps({
    url: {
      type: String,
      required: true
    }
  });
  
  onMounted(() => {
    window.Calendly.initInlineWidget({
      url: props.url,
      parentElement: document.getElementById('calendly-widget'),
      prefill: {},
      utm: {}
    });
  });
  </script>

  
  <style scoped>
  #calendly-widget {
    height: 100%;
    min-height: 630px;
  }
  </style>
  