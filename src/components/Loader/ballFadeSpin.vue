<!--
 - @file 加载动画组件 [球形旋转]
 - @date 2016-12-01
 - @author TinySymphony (zjutiny@gmail.com)
 - @desc 会带来八个新的composite layer，移动端慎用
 - @name ballFadeSpin.vue
 -->

<template lang="html">
  <div class="ball-spin-fade-loader">
    <div :style="{background: color}" v-for="i in Array(8)"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#CCC'
    }
  }
}
</script>

<style lang="scss">
$ball-size: 10px !default;
$margin: 5px !default;
@function delay($interval, $count, $index) {
  @return ($index * $interval) - ($interval * $count);
}

@mixin global-animation() {
  animation-fill-mode: both;
}

@mixin balls() {
  width: $ball-size;
  height: $ball-size;
  border-radius: 100%;
  margin: $margin;
}

$radius: 20px;

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@mixin ball-spin-fade-loader($n:8, $start:1) {
  @for $i from $start through $n {
    > div:nth-child(#{$i}) {
      $iter: 360 / $n;
      $quarter: ($radius / 2) + ($radius / 5.5);

      @if $i == 1 {
        top: $radius;
        left: 0;
      } @else if $i == 2 {
        top: $quarter;
        left: $quarter;
      } @else if $i == 3 {
        top: 0;
        left: $radius;
      } @else if $i == 4 {
        top: -$quarter;
        left: $quarter;
      } @else if $i == 5 {
        top: -$radius;
        left: 0;
      } @else if $i == 6 {
        top: -$quarter;
        left: -$quarter;
      } @else if $i == 7 {
        top: 0;
        left: -$radius;
      } @else if $i == 8 {
        top: $quarter;
        left: -$quarter;
      }

      animation: ball-spin-fade-loader 1s delay(0.12s, $n, $i - 1) infinite linear;
    }
  }
}

.ball-spin-fade-loader {
  @include ball-spin-fade-loader();
  position: relative;
  display: inline-block;
  top: -10px;
  left: -10px;

  > div {
    @include balls();
    @include global-animation();

    position: absolute;
  }
}
</style>
