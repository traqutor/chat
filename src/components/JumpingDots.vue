<template>
  <span class="jumping">
    <span></span>
    <span></span>
    <span></span>
  </span>
</template>

<script>
export default {
  name: 'JumpingDots',
};
</script>

<style scoped lang="scss">
  @import "src/assets/styles/variables";
  .jumping {
    margin: 0 4px;
  }
  .jumping span {
    width: 3px;
    height: 3px;
    background-color: $ign-color-opacity-middle;
    border-radius: 2px;
    display: inline-block;
    animation-name: jumpingDots;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes jumpingDots {
      20% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-4px);
      }
    }
  }
  .jumping span:nth-child(2){
    animation-delay: 0.3s;
  }
  .jumping span:nth-child(3){
    animation-delay: 0.6s;
  }
</style>
