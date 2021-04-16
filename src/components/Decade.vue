<template>
<div>
  <h3 class="title title--mystery sticky sticky--top">{{ currentMysteryName }}</h3>
  <!-- Render 10 scenes -->
  <div class="box" v-for="(scene, idx) in scenes" :key="idx">
    <div style="flex: 1"></div>
    <section class="verse">
      <div class="hail-mary-number">
        <div class="hail-mary-number__text">
          <p style="padding: 0;">{{ idx + 1 }}</p>
        </div>
      </div>
      <p>{{ scene.verse }}</p>
      <p class="scene-ref">{{ scene.ref }}</p>
    </section>
  </div>
  <p id="hail-mary-prayer" class="title sticky sticky--bottom">Hail Mary...</p>
</div>
</template>

<script>
export default {
  name: 'Decade',
  mounted() {
    const verseBottomMargin = document.getElementById('hail-mary-prayer')?.offsetHeight
    document.querySelectorAll('.verse').forEach((el) => {
      el.style.marginBottom = `${verseBottomMargin}px`
    })
  },
  computed: {
    currentMysteryName() {
      return this.$store.state.currentMystery.decades[parseInt(this.$route.params.id) - 1].name
    },
    scenes() {
      return this.$store.state.currentMystery.decades[parseInt(this.$route.params.id) - 1].scenes
    }
  }
}
</script>

<style lang="scss">
.verse {
  z-index: 0;
  background-color: rgba(150, 125, 180, 0.85);
  -webkit-transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
	-webkit-perspective: 1000;

  display: grid;
  grid-template-columns: 3rem auto;
  margin-top: auto;
}
.hail-mary-number {
  grid-column-start: 1;
  margin: 0 0 1rem 1rem;

  &__text {
    margin: 0;
    border-radius: 50%;
    background-color: #6A5188;
    color: white;
    font-family: 'Avenir', sans-serif;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > p {
      margin: 0;
      font-weight: bold;
    }
  }
}
.scene-ref {
  grid-column-start: 2;
  font-style: italic;
}
.sticky {
  -webkit-transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
  position: -webkit-sticky;
  position: sticky;
  background-color: var(--theme-color);

  &--top {
    padding-top: 1rem;
    text-align: center;
    top: 0rem;
    z-index: 2;
    border-bottom: 0.25rem solid var(--theme-color-invert);
  }
  &--bottom {
    margin: 0;
    padding: 1rem;
    font-size: 1.4rem;
    bottom: 0rem;
  }
}
</style>