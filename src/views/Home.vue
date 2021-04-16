<template>
<main class="scroll-box">
  <div id="top-box" class="box">
    <h1 style="text-align: center;">Connecting The Beads</h1>
    <section>
      <div>
        <Toggle v-model="checked" />
        <p>This mobile–friendly web app is a Rosary companion designed to help you pray and meditate with scripture and religious artwork depicting the lives of Jesus, Mary, Joseph, and the disciples.</p>
        <p>Add this app to your home screen to run it full-screen!</p>
      </div>
    </section>
  </div>

  <div class="box">
    <h2>Praying The Rosary</h2>
    <p>
    &#8223;The Rosary is a Scripture-based prayer. It begins with the Apostles' Creed, which summarizes the great mysteries of the Catholic faith.
      The Our Father, which introduces each mystery, is from the Gospels.
      The first part of the Hail Mary is the angel's words announcing Christ's birth and Elizabeth's greeting to Mary.
      St. Pius V officially added the second part of the Hail Mary. The Mysteries of the Rosary center on the events of Christ's life.
      There are four sets of Mysteries: Joyful, Sorrowful, Glorious and––added by Saint John Paul II in 2002––the Luminous.&#8221;
    </p>
    <!-- <div></div> -->
    <p>
      &#8223;The repetition in the Rosary is meant to lead one into restful and contemplative prayer related to each Mystery.
      The gentle repetition of the words helps us to enter into the silence of our hearts, where Christ's spirit dwells.
      The Rosary can be said privately or with a group.&#8221;
    </p>
    <!-- <p><b>This web app will guide you through every prayer in the Rosary.</b></p> -->
  </div>

  <OpeningPrayers />
  <MysteriesNav />

  <div class="box">
    <h2>Contact Info</h2>
    <div>
      <p>If you have any issues or encounter any bugs with <em>Connecting The Beads</em> or would like to contact me,
        <a style="padding: 0;" href="https://www.facebook.com/profile.php?id=100013351997843" target="_blank" rel="noreferrer">
          message me on Facebook.
        </a>
      </p>
      <p>This web app is created by Ian Goodwin, a web developer, jazz saxophonist, Catholic, and dreamer.</p>
      <p>Note, this web app requires a modern smartphone and updated web browser (at least iOS 12.2 or Chrome 51 on Android).</p>
    </div>
    <div>
      <h3>Copyright</h3>
      <p>Bible verses are quoted from the Catholic Public Domain Version.</p>
      <a href="https://thenounproject.com/term/rosary/329724/" target="_blank" rel="noreferrer">
        Rosary favicon by Tivi Lupercio Ordoñez
      </a>
      <br />
      <a href="https://www.usccb.org/how-to-pray-the-rosary" target="_blank" rel="noreferrer">
        How to Pray the Rosary from the USCCB
      </a>
      <br />
      <p>The 20 Mysteries of The Rosary - Bellazzi</p>
      <p>Copyright 2021 - Used with permission</p>
      <p>Fratelli Bonella - Milan, Italy</p>
      <br />
    </div>
    <p>Copyright Ian G 2021</p>
  </div>
</main>
</template>

<script>
// @ is an alias to /src
import MysteriesNav from '../components/MysteriesNav.vue'
import OpeningPrayers from '../components/OpeningPrayers.vue'
import Toggle from '../components/Toggle.vue'

export default {
  name: 'Home',
  components: {
    MysteriesNav,
    OpeningPrayers,
    Toggle
  },
  data() {
    return {
      checked: true,
    }
  },
  mounted() {
    document.getElementById('top-box')?.scrollIntoView(true)
    this.fadeAnimation();
  }
}
</script>

<style lang="scss">

</style>