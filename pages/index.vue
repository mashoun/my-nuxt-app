<template>
  <NuxtLoadingIndicator></NuxtLoadingIndicator>
  <h1>SSR data</h1>
  <pre>{{ data }}</pre>
</template>
<script setup>
const {data} = await useFetch("/api/getMainDoc")
</script>