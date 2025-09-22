import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVideosStore = defineStore('videos', () => {
  const videos = [
    {
      id: "v1",
      thumbnail: "https://placehold.co/480x270?text=Video+1",
      title: "Découvrir Vue 3 en 10 minutes",
      views: 12500,
      date: new Date("2025-09-18T10:00:00"), // il y a 3 jours
      channel: "Killian Dev",
    },
    {
      id: "v2",
      thumbnail: "https://placehold.co/480x270?text=Video+2",
      title: "Tailwind CSS : 12 patterns indispensables",
      views: 8450,
      date: new Date("2025-09-12T14:00:00"), // il y a 1 semaine
      channel: "CodeHub FR",
    },
    {
      id: "v3",
      thumbnail: "https://placehold.co/480x270?text=Video+3",
      title: "NestJS pour débutants (API REST complète)",
      views: 30210,
      date: new Date("2025-09-05T09:30:00"), // il y a 2 semaines
      channel: "DevStack",
    },
    {
      id: "v4",
      thumbnail: "https://placehold.co/480x270?text=Video+4",
      title: "Refaire la home de YouTube avec Vue",
      views: 9800,
      date: new Date("2025-09-19T18:00:00"), // il y a 1 jour
      channel: "FrontTips",
    },
    {
      id: "v5",
      thumbnail: "https://placehold.co/480x270?text=Video+5",
      title: "Pinia : état global simple et propre",
      views: 15600,
      date: new Date("2025-08-29T12:00:00"), // il y a 3 semaines
      channel: "JS Café",
    },
    {
      id: "v6",
      thumbnail: "https://placehold.co/480x270?text=Video+6",
      title: "Optimiser les perfs avec Vite",
      views: 22100,
      date: new Date("2025-08-22T11:00:00"), // il y a 1 mois
      channel: "PerfLab",
    },
    {
      id: "v7",
      thumbnail: "https://placehold.co/480x270?text=Video+7",
      title: "UI Tips: cartes, grilles et spacing",
      views: 7400,
      date: new Date("2025-09-17T09:00:00"), // il y a 5 jours
      channel: "UX & UI FR",
    },
    {
      id: "v8",
      thumbnail: "https://placehold.co/480x270?text=Video+8",
      title: "API sécurisée (JWT, Guards) sous Nest",
      views: 18750,
      date: new Date("2025-07-22T10:00:00"), // il y a 2 mois
      channel: "Secure Dev",
    },
    {
      id: "v9",
      thumbnail: "https://placehold.co/480x270?text=Video+9",
      title: "Composants réutilisables avec Vue",
      views: 9300,
      date: new Date("2025-09-20T14:00:00"), // il y a 1 jour
      channel: "Crafted Components",
    },
    {
      id: "v10",
      thumbnail: "https://placehold.co/480x270?text=Video+10",
      title: "Dark mode propre avec Tailwind v4",
      views: 14050,
      date: new Date("2025-09-16T16:00:00"), // il y a 6 jours
      channel: "Tailwind Tricks",
    },
  ]

  return { videos }
})
