<script setup lang="ts"></script>

<template>
  <div class="aurora" aria-hidden="true">
    <div class="aurora__grid"></div>
    <div class="aurora__glow aurora__glow--1"></div>
    <div class="aurora__glow aurora__glow--2"></div>
    <div class="aurora__noise"></div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/theme' as *;

.aurora {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background:
    radial-gradient(130% 90% at 50% -20%, rgba(138, 166, 204, 0.05), transparent 55%),
    $ink;
}

.aurora__grid {
  position: absolute;
  inset: -2px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(120% 95% at 50% 0%, #000 30%, transparent 80%);
}

.aurora__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  will-change: transform;

  &--1 {
    width: 52vw;
    height: 52vw;
    top: -22%;
    left: -12%;
    background: radial-gradient(circle, rgba(138, 166, 204, 0.16), transparent 70%);
    animation: drift1 26s ease-in-out infinite;
  }
  &--2 {
    width: 44vw;
    height: 44vw;
    bottom: -26%;
    right: -14%;
    background: radial-gradient(circle, rgba(108, 135, 173, 0.10), transparent 70%);
    animation: drift2 32s ease-in-out infinite;
  }

  @include until($bp-md) { filter: blur(64px); }
}

.aurora__noise {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@keyframes drift1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(6vw, 5vh) scale(1.1); }
}
@keyframes drift2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(-5vw, -6vh) scale(1.08); }
}
</style>
