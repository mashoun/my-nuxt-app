<template>
  <h1>SSR data</h1>
  <p>{{ $firebaseName }}</p>
</template>
<script setup>
const nuxtApp = useNuxtApp()
console.log(nuxtApp.$firebaseName)
</script>