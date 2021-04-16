<template>
<div style="display: flex; justify-content: center;">
  <img
    class="img"
    v-for="(image, idx) in [homeImage, ...$store.state.images]"
    :key="idx"
    :src="image.url"
    :alt="image.alt"
    :style="setStyle(idx)"
  >
</div>
</template>

<script>
export default {
  name: 'ImageContainer',
  data() {
    return {
      homeImage: {},
      imageIndex: this.$route.params.id || 0
    }
  },
  created() {
    const randomImageNumber = Math.floor(Math.random() * Math.floor(5)) + 1

    let dailyMystery = ""
    const currentDay = (new Date()).getDay()
    if (currentDay === 0 || currentDay === 3) dailyMystery = 'glorious'
    else if (currentDay === 1 || currentDay === 6) dailyMystery = 'joyful'
    else if (currentDay === 2 || currentDay === 5) dailyMystery = 'sorrowful'
    else if (currentDay === 4) dailyMystery = 'luminous'

    let size = 'S'
    if (window.innerHeight > 900) size = 'M'
    if (window.innerHeight > 1200) size = 'L'

    this.homeImage = {
      url: `https://connectingthebeads-images.s3.amazonaws.com/${dailyMystery}/${randomImageNumber}${size}.jpg`,
      alt: `${dailyMystery} ${randomImageNumber}`
    }
  },
  methods: {
    setStyle(idx) {
      return `
        opacity: ${idx === (parseInt(this.$route.params.id) || 0) ? '1' : '0'};
        animation: ${idx === 0 ? 'ease 1s' : 'none'};
        transition: opacity 1s ease 0s;
      `
    }
  }
}
</script>

<style>
</style>
