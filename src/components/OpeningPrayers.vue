<template>
<div>
  <div class="box">
    <h2 class="subtitle title--text" style="font-size: 1.4rem;">Opening Prayers</h2>
    <section class="no-grid">
      <div>
        <p>Begin by making the <b>Sign of The Cross.</b></p>
        <p style="font-size: 1.2rem;">In the name of The Father, The Son, and The Holy Spirit.</p>
        <p style="font-size: 1.2rem;">Amen.</p>
      </div>
    </section>
  </div>

  <div class="box">
    <h3>The Apostle's Creed</h3>
    <section class="no-grid">
      <div>
        <p>Say the <b>Apostle's Creed.</b></p>
        <p style="white-space: pre-wrap;">{{ creed }}</p>
      </div>
    </section>
  </div>

  <div class="box">
    <h3>Our Father</h3>
    <section>
      <div>
        <p>Say the <b>Our Father.</b></p>
        <p style="font-style: italic;">For our Holy Father, Pope Francis.</p>
        <p v-for="(line, idx) in ourFather" :key="idx">{{ line }}</p>
      </div>
    </section>
  </div>

  <div class="box">
    <h3>Hail Mary</h3>
    <section>
      <div>
        <p>Say three <b>Hail Mary's.</b></p>
        <p style="font-style: italic;">For the increase of the virtues of Faith, Hope, and Charity.</p>
        <p v-for="(line, idx) in hailMary" :key="idx">{{ line }}</p>
      </div>
    </section>
  </div>

  <div class="box">
    <h3>Glory Be</h3>
    <section>
      <div>
        <p>Say the <b>Glory Be.</b></p>
        <p v-for="(line, idx) in gloryBe" :key="idx">{{ line }}</p>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import prayers from '../assets/data/prayers.json'

export default {
  name: 'OpeningPrayers',
  computed: {
    creed() {
      return prayers.APOSTLES_CREED
    },
    ourFather() {
      return prayers.OUR_FATHER
    },
    hailMary() {
      return prayers.HAIL_MARY
    },
    gloryBe() {
      return prayers.GLORY_BE
    }
  }
}
</script>

<style>
.no-grid {
  display: block;
}
</style>