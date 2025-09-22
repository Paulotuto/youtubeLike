<script setup lang="ts">
const changeTheme = () => {
  document.documentElement.classList.toggle("dark");
}
</script>

<template>
  <button @click="changeTheme"><img alt="Vue logo" src="@/assets/logo.svg" class="w-10 h-auto" /></button>
</template>