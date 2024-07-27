<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Carousel');
</script>

<template>
  <div class="carousel" @click="msg = 'hi'">
    {{ msg }}

    <span class="hello">hello</span>
  </div>
</template>

<style scoped>
div {
  color: red;
}
</style>
