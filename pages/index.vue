<template>
  <h1>SSR data</h1>
  <!-- <p>{{ $db }}</p> -->
</template>
<script setup>
const { $db } = useNuxtApp()
const  data  = useMainData($db)
console.log(data)
</script>