<template>
<div id="desktop-view" class="box">
  <div>
    <h1 class="desktop-title">Connecting The Beads</h1>
    <p class="tagline">Rediscover the Rosary with Scripture and Meditation</p>
  </div>
  
  <section class="section--desktop">
    <div>
      <p>
        This simple and elegant web app is designed to help newcomers and daily devotees pray the Rosary by
        allowing them to enter a deeper meditation on the lives of Jesus and Mary
        using relevant scripture verses and emotive images by the Italian artist, Bellazzi, for each Mystery.
      </p>
      <div class="div-line"></div>
      <p>
        You can view Connecting The Beads (in portrait orientation) on any smartphone or tablet running at least
        iOS 12.2 or Chrome 51, or shrink your desktop browser to view the app.
        Built using Vue.
      </p>
    </div>
    <img class="rosary-pictures" :src="rosaryPictures" alt="20 Mysteries of the Rosary by Italian Artist Bellazzi" />
  </section>
  <p>Copyright Ian G 2021</p>
</div>
</template>

<script>
export default {
  name: 'DesktopView',
  computed: {
    rosaryPictures() {
      if (window.innerWidth > 1024) {
        return 'https://connectingthebeads-images.s3.amazonaws.com/main/rosary-images-L.png'
      } else {
        return 'https://connectingthebeads-images.s3.amazonaws.com/main/rosary-images-M.png'
      }
    }
  }
}
</script>

<style lang="scss">
#desktop-view {
  display: none;
  background-color: whitesmoke;

  & > * {
    color: black;
  }

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    background-color: transparent;
  }

  .rosary-pictures {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
}
.desktop-title {
  color: inherit;
  background-color: #967db4;
  border-bottom: none;
  box-shadow: 0px 5px 20px black;
  font-size: 2.8rem;
}
.tagline {
  text-align: center;
  font-style: italic;
  padding: 1rem;
}
</style>