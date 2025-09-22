<script setup lang="ts">
import { useVideosStore } from '@/stores/videos'
import VideoCard from './VideoCard.vue'

const videosStore = useVideosStore()
</script>

<template>
    <div class="">
        <VideoCard />
    </div>
</template>