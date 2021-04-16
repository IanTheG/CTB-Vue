<template>
<div id="portrait">
  <p>Please rotate your device to portrait mode!</p>
  <div>
    <i class="fas fa-mobile-alt fa-rotate-90"></i>
    <i class="fas fa-undo"></i>
    <i class="fas fa-mobile-alt"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'RotateToPortraitView'
}
</script>

<style lang="scss">
#portrait {
  display: none;
  background-color: var(--theme-color);
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & > div > i {
    padding: 0.5rem;
    font-size: 2rem;
  }
}
</style>