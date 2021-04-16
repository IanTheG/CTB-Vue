<template>
<main class="scroll-box">
  <div class="box background-theme">
    <h1 class="title title--text title--closing-prayers">Closing Prayers</h1>
    <section class="prayer">
      <h2 class="title">Hail Holy Queen</h2>
      <div class="div-line"></div>
      <p>Hail Holy Queen, Mother of Mercy, our Life, our Sweetness, and our hope. To thee we cry, poor banished children of Eve. To thee we send up our sighs, mourning and weeping in this vale of tears.</p>
      <p>Turn then most gracious advocate, Thine eyes of mercy toward us, and after this, our exile, show unto us, the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.</p>
      <p>Pray for us O Holy Mother of God.</p>
      <p>That we may be made worthy of the promises of Christ.</p>
    </section>
    <div style="flex: 1;"></div>
  </div>
  <div class="box background-theme">
    <section class="prayer">
      <h2 class="title">Final Prayer</h2>
      <div class="div-line"></div>
      <p>Let us pray.</p>
      <p>O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord.</p>
      <p>Amen.</p>
    </section>
    <div style="flex: 1;"></div>
  </div>
  <div class="box background-theme">
    <section class="prayer">
      <h2 class="title">St. Michael Prayer</h2>
      <div class="div-line"></div>
      <p>Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil.</p>
      <p>May God rebuke him, we humbly pray; And do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all evil spirits who prowl about the world seeking the ruin of souls.</p>
      <p>Amen.</p>
    </section>
    <div style="flex: 1;"></div>
    <div class="btn-box">
      <button class="btn" @click="navToHome">Home</button>
    </div>
  </div>
</main>
</template>
<script>
export default {
  name: 'ClosingPrayers',
  mounted() {
    document.getElementById('top-box')?.scrollIntoView(true)
    this.fadeAnimation();
  },
  methods: {
    navToHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>