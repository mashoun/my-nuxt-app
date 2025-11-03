<template>
  <br>
  <img :src="profile.avatar" alt="avatar" width="50">
  <h1>Welcome {{ profile.username }}</h1>
  <h2>{{ profile.tagline }}</h2>
  <p>{{ data }}</p>
  <hr>

</template>
<script setup>
const { data, loading, error, reload } = useMainDoc()
var profile = {
  username: 'Mahmoud Mashoun',
  avatar: 'https://placehold.co/100',
  bio: "Good developers write code, Great Developers share their code!",
  tagline: "Software Developer - Google Cloud Automation",
  email: "info@mashoun.com"
}
console.log(data)
</script>