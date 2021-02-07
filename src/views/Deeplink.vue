<template>
  <h1>yoooo</h1>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Deeplink',
  props: {
    msg: String
  },
  setup () {
    const route = useRoute()
    onMounted(() => {
      const { type } = route.query
      switch (type) {
        case 'youtube':
          // window.location.href = 'youtube://youtube.com/playlist?list=PLYd7ec6V3xTNCfQK7-ceEImpWUKUQ4RjC'
          window.location.href = 'vnd.youtube://www.youtube.com/playlist?list=PLYd7ec6V3xTNCfQK7-ceEImpWUKUQ4RjC'
          break
        case 'spotify':
          window.location.href = 'spotify://playlist/37i9dQZF1DXdzw50tzi795'
          break
        case 'applemusic':
          window.location.href = 'intent://music.apple.com/us/playlist/soul-brother-no-2/pl.7927da5af7904fd18d1cadc916461e15/#Intent;package=com.apple.android.music;scheme=https;end'
          break
        default:
      }

      setTimeout(() => {
        window.close()
      }, 500)
    })
  }
}
</script>
