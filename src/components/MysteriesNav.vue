<template>
<div id="mysteries-nav" class="box">
  <h2>Mysteries</h2>
  <a class="link" @click="navTo('glorious')">
    <h3>Glorious</h3>
    <p :class="currentDay === 0 && 'current-day'">Sunday</p>
    <p :class="currentDay === 3 && 'current-day'">Wednesday</p>
  </a>
  <a class="link" @click="navTo('joyful')">
    <h3>Joyful</h3>
    <p :class="currentDay === 1 && 'current-day'">Monday</p>
    <p :class="currentDay === 6 && 'current-day'">Saturday</p>
  </a>
  <a class="link" @click="navTo('sorrowful')">
    <h3>Sorrowful</h3>
    <p :class="currentDay === 2 && 'current-day'">Tuesday</p>
    <p :class="currentDay === 5 && 'current-day'">Friday</p>
  </a>
  <a class="link" @click="navTo('luminous')">
    <h3>Luminous</h3>
    <p :class="currentDay === 4 && 'current-day'">Thursday</p>
  </a>
</div>
</template>

<script>
export default {
  name: 'MysteriesNav',
  data() {
    return {
      currentDay: 0
    }
  },
  mounted() {
    this.currentDay = (new Date()).getDay()
  },
  methods: {
    navTo(mystery) {
      this.$store.commit('setCurrentMystery', mystery)
      this.$store.commit('setCurrentDecade', 0)
      this.$router.push({ name: 'Mystery', params: { mystery } })
    }
  }
}
</script>

<style lang="scss">
.link {
  flex: 1;
  padding: 0;
  cursor: pointer;

  & > h3 {
    margin-left: 2rem;
    margin-bottom: 0;
  }
  & > p {
    padding: 0.5rem 3rem;
  }
}
.current-day {
  background-color: greenyellow;
}

@media screen and (min-width: 768px) {
  .link {
    & > p {
      padding: 1rem 2rem;
    }
  }
}
</style>
