<template>
  <div id="app">
    <div id="root">
      <!-- Render image container here -->
      <ImageContainer />
      <router-view :key="$route.path"/>
    </div>
    <RotateToPortraitView />
    <DesktopView />
  </div>
</template>

<script>
import DesktopView from './views/DesktopView.vue'
import ImageContainer from './components/ImageContainer'
import RotateToPortraitView from './views/RotateToPortraitView.vue'

function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
}
window.addEventListener('load', setDocHeight)
window.addEventListener('resize', setDocHeight)
window.addEventListener('orientationchange', setDocHeight)

export default {
  components: {
    ImageContainer,
    RotateToPortraitView,
    DesktopView
  },
  created() {
    document.getElementById('app').setAttribute('data-theme', false)
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

@function vh($quantity) {
  @return calc(var(--vh, 1vh) * #{$quantity});
}
:root {
  --theme-color: #967db4;
  --theme-color-transluscent: rgba(150, 125, 180, 0.85);
  --theme-color-invert: #6A5188;
  --theme-text-color: black;
}
html {
  font-size: 15px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--theme-text-color);
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, h3 {
  background-color: var(--theme-color);
  text-align: center;
  margin: 0;
  padding: 1rem;
  font-family: Satisfy, Avenir, Helvetica, Arial, sans-serif;
  border-bottom: 0.25rem solid var(--theme-color-invert);
}
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.8rem;
  padding: 1rem;
  text-align: left;
}
p, a {
  font-family: Karla, Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 1rem 1rem 1rem;
}
button {
  font-family: Karla, Avenir, Helvetica, Arial, sans-serif;
}
section {
  background-color: var(--theme-color-transluscent);
  padding-top: 1rem;
}
.img {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  object-fit: cover;
}
.prayer {
  padding-top: 0;
  background-color: transparent;
}
.div-line {
  margin: 0 1rem 1rem 1rem;
  height: 0.2rem;
  background-color: var(--theme-color-invert);
  border-radius: 0.5rem;
}

.scroll-box {
  height: vh(100);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.box {
  height: vh(100);
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > * {
    opacity: 0;
    transform: translate3d(0, 1rem, 0);
    transition: opacity 800ms var(--delay),
      transform 800ms cubic-bezier(0.13, 0.07, 0.26, 0.99) var(--delay);
  }
}
.is-visible > * {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.title {
  background-color: transparent;
  border-bottom: none;

  &--text {
    font-family: Karla, Avenir, Helvetica, Arial, sans-serif;
  }
  &--mystery {
    font-family: Karla, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
  }
  &--closing-prayers {
    background-color: var(--theme-color);
    font-size: 1.8rem;
  }
}
.background-theme {
  background-color: var(--theme-color-transluscent);
}

@media screen and (min-width: 370px) {
  html {
    font-size: 16px;
  }
}
@media screen and (min-width: 400px) {
  html {
    font-size: 18px;
  }
}
@media screen and (min-height: 768px) {
  html {
    font-size: 19px;
  }

}
@media screen and (min-width: 768px) {
  html {
    font-size: 20px;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  section {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}

@media screen and (min-height: 1025px) {
  html {
    font-size: 26px;
  }
}

// Normal display
@media (orientation: portrait) {
  #root { display: block; }
  #portrait { display: none; }
}
// iPhone
@media (orientation: landscape) and (max-width: 760px) {
  #root { display: none; }
  #portrait { display: flex; }
}
// Large iPhone
@media (orientation: landscape) and (max-width: 900px) and (max-height: 450px) {
  #root { display: none; }
  #portrait { display: flex; }
}
// Styling to always hide RotateToPortrait component on desktop and iPad
@media (orientation: portrait) and (min-width: 768px) {
  #root { display: block; }
  #portrait { display: none; }
  #desktop-view { display: none; }
}
@media (orientation: landscape) and (min-width: 1024px) {
  #root { display: none; }
  #portrait { display: none; }
  #desktop-view { display: flex; }
}
/*
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>
