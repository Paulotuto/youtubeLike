<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <h1 class="text-text">{{ msg }}</h1>
</template>