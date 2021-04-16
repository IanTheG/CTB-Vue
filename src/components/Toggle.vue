<template>
   <span
    :aria-checked="value.toString()"
    class="toggle-wrapper"
    @click="toggle"
    @keydown.space.prevent="toggle"
    role="checkbox"
    tabindex="0"
   >
    <span class="toggle-background" :style="backgroundStyles"></span>
    <span class="toggle-indicator" :style="indicatorStyles"></span>
  </span>
</template>

<script>
export default {
  name: 'Toggle',
  props: ['value'],
  methods: {
    toggle() {
      this.$emit('input', !this.value)
      this.$store.commit('setDarkMode', !this.value)

      const app = document.getElementById('app')
      app.setAttribute('data-theme', !this.value)

      if (!this.value) {
        app.style.setProperty('--theme-color', '#6A5188')
        app.style.setProperty('--theme-text-color', 'whitesmoke')
        app.style.setProperty('--theme-color-invert', '#967db4')
        app.style.setProperty('--theme-color-transluscent', 'rgba(106, 81, 136, 0.85)')
      } else  {
        app.style.setProperty('--theme-color', '#967db4')
        app.style.setProperty('--theme-text-color', 'black')
        app.style.setProperty('--theme-color-invert', '#6A5188')
        app.style.setProperty('--theme-color-transluscent', 'rgba(150, 125, 180, 0.85)')
      }
    }
  },
  computed: {
    backgroundStyles() {
      return {
        backgroundColor: this.value ? '#3490dc' : '#dae1e7'
      }
    },
    indicatorStyles() {
      return { transform: this.value ? 'translateX(2rem)' : 'translateX(0)' }
    }
  }
}
</script>

<style>
.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 2rem;
  width: 4rem;
  border-radius: 9999px;
  /* margin: 0 0 1rem 1rem; */
}
.toggle-wrapper:focus {
  outline: 0;
  box-shadow: 0 0 0 4px rgba(52,144,220,.5);
}

.toggle-background {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color .2s ease;
}

.toggle-indicator {
  position: absolute;
  top: .25rem;
  left: .25rem;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #fff;
  border-radius: 9999px;
  box-shadow:  0 2px 4px rgba(0,0,0,0.1);
  transition: transform .2s ease;
}
</style>