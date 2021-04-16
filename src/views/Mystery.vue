<template>
<main class="scroll-box">
  <div id="top-box" class="box">
    <div>
      <h1 class="title title--mystery">The {{ currentMysteryNumber }} {{ $store.state.currentMystery.name }} Mystery</h1>
      <h2 class="title title--mystery">{{ currentMysteryName }}</h2>
      <p style="text-align: center;"><em>Fruits of the mystery: {{ currentMysteryFruits }}</em></p>
    </div>
    <section>
      <div>
        <p v-for="(line, idx) in ourFather" :key="idx">{{ line }}</p>
      </div>
    </section>
  </div>

  <Decade />

  <div class="box">
    <section class="prayer">
      <div>
        <h3>Glory Be</h3>
        <div class="div-line"></div>
        <p v-for="(line, idx) in gloryBe" :key="idx">{{ line }}</p>
      </div>
    </section>
    <section class="prayer">
      <div>
        <h3>Fatima Prayer</h3>
        <div class="div-line"></div>
        <p>{{ fatimaPrayer }}</p>
      </div>
    </section>
    <div class="btn-box">
      <button class="btn" @click="navToNextDecade">Continue</button>
    </div>
  </div>
</main>
</template>

<script>
import prayers from '../assets/data/prayers.json'
import Decade from '../components/Decade.vue'

export default {
  name: 'Mystery',
  components: {
    Decade
  },
  data() {
    return {
      index: 0
    }
  },
  created() {
    if (this.$route.params.id) {
      this.index = parseInt(this.$route.params.id)
    }
    // Only renders this component if the path is one of the four mysteries
    const mysteries = ["glorious", "joyful", "sorrowful", "luminous"]
    const userEnteredPath = this.$route.params.mystery.toLowerCase()
    if (mysteries.includes(userEnteredPath) &&
        userEnteredPath !== this.$store.state.currentMystery.id) {
          // If the user enters one of the four mysteries in the url, render it
          this.$store.commit('setCurrentMystery', userEnteredPath)
          this.$router.replace({ name: 'Mystery', params: { mystery: userEnteredPath, id: 0 } })
    } else if (userEnteredPath === this.$store.state.currentMystery.id) {
      return
    } else {
      this.$router.push({ name: 'Home' })
    }
  },
  mounted() {
    document.getElementById('top-box')?.scrollIntoView(true)
    this.fadeAnimation();
  },
  computed: {
    ourFather() {
      return prayers.OUR_FATHER
    },
    gloryBe() {
      return prayers.GLORY_BE
    },
    fatimaPrayer() {
      return prayers.FATIMA_PRAYER
    },
    currentMysteryNumber() {
      return this.$store.state.currentMystery.decades[this.index - 1].number
    },
    currentMysteryName() {
      return this.$store.state.currentMystery.decades[this.index - 1].name
    },
    currentMysteryFruits() {
      return this.$store.state.currentMystery.decades[this.index - 1].fruits
    }
  },
  methods: {
    navToNextDecade() {
      if (this.index < 5) {
        this.$router.push({
          name: 'Mystery',
          params: { mystery: this.$route.params.mystery, id: this.index + 1 }
        })
        document.getElementById('top-box')?.scrollIntoView(true)
      } else {
        this.$router.push({ name: 'ClosingPrayers' })
      }
    }
  }
}
</script>

<style lang="scss">
.title--mystery {
  font-size: 1.5rem;
}
.btn-box {
  display: flex;
  justify-content: center;
}
.btn {
  font-size: 1.5rem;
  color: white;
  background-color: #6A5188;
  cursor: pointer;

  &:hover, &:active {
    background-color: #967db4;
  }
  width: 50%;
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  border: 0.25rem solid white;
}
</style>
