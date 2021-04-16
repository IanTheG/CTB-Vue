<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- Render image container here -->
    <router-view :key="$route.path"/>
    <!-- <router-view /> -->
  </div>
</template>

<script>
function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
}
window.addEventListener('load', setDocHeight)
window.addEventListener('resize', setDocHeight)
window.addEventListener('orientationchange', setDocHeight)
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

@function vh($quantity) {
  @return calc(var(--vh, 1vh) * #{$quantity});
}
html {
  font-size: 16px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1, h2, h3 {
  text-align: center;
  font-family: Satisfy, Avenir, Helvetica, Arial, sans-serif
}
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.8rem;
  margin: 1rem;
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
  background-color: beige;
  padding-top: 1rem;
}
.prayer {
  padding-top: 0;
  background-color: transparent;
}
.div-line {
  margin: 0 1rem 1rem 1rem;
  height: 0.2rem;
  background-color: #6A5188;//var(--theme-invert);
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
  font-family: Karla, Avenir, Helvetica, Arial, sans-serif;
  margin: 1rem;
}

@media screen and (min-width: 400px) {
  html {
    font-size: 18px;
  }
}

@media screen and (min-height: 768px) {
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
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
