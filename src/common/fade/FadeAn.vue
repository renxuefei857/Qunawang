<template>
  <transition>
    <!-- 谁要做动画 就用transition包裹 -->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "FadeAn"
};
</script>

<style lang="stylus" scoped>

.v-enter,.v-leave-to
    opacity :0
.v-enter-active,.v-leave-active
    transition  opacity  3s
</style>