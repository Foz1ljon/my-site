<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile, stats } from '../data/resume'

const roles = ['Frontend Developer', 'Fullstack Engineer', 'Vue.js Specialist', 'UI Library Author']
const typed = ref('')
let roleIdx = 0
let charIdx = 0
let deleting = false
let timer: number

function tick() {
  const word = roles[roleIdx]!
  if (!deleting) {
    typed.value = word.slice(0, ++charIdx)
    if (charIdx === word.length) {
      deleting = true
      timer = window.setTimeout(tick, 1600)
      return
    }
  } else {
    typed.value = word.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      roleIdx = (roleIdx + 1) % roles.length
    }
  }
  timer = window.setTimeout(tick, deleting ? 45 : 95)
}

onMounted(() => { timer = window.setTimeout(tick, 700) })
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__inner container">
      <p class="hero__status" v-reveal>
        <span class="hero__dot"></span> Available for new opportunities
      </p>

      <h1 class="hero__title" v-reveal="80">
        <span class="hero__hi">Hi, I’m</span>
        <span class="hero__name">{{ profile.name }}</span>
      </h1>

      <p class="hero__role" v-reveal="160">
        <span class="hero__typed">{{ typed }}</span>
        <span class="hero__caret"></span>
      </p>

      <p class="hero__tagline" v-reveal="240">{{ profile.tagline }}</p>

      <div class="hero__actions" v-reveal="320">
        <a href="#projects" class="btn btn--primary">
          View my work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="#contact" class="btn btn--ghost">Get in touch</a>
      </div>

      <dl class="hero__stats" v-reveal="420">
        <div v-for="s in stats" :key="s.label" class="hero__stat">
          <dt>{{ s.value }}</dt>
          <dd>{{ s.label }}</dd>
        </div>
      </dl>
    </div>

    <a href="#about" class="hero__scroll" aria-label="Scroll down">
      <span></span>
    </a>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/theme' as *;

.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 88px;
}

.hero__inner { width: 100%; }

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.9rem;
  font-family: $font-mono;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: $muted;
  border: 1px solid $line;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.02);
}
.hero__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: $accent;
}

.hero__title {
  margin-top: 1.4rem;
  font-family: $font-display;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
}
.hero__hi {
  display: block;
  font-size: clamp(1.1rem, 3.5vw, 1.6rem);
  font-weight: 500;
  color: $muted;
  margin-bottom: 0.4rem;
}
.hero__name {
  display: block;
  font-size: clamp(2.7rem, 11vw, 6.2rem);
  color: $paper;
}

.hero__role {
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: $font-mono;
  font-size: clamp(1rem, 3.4vw, 1.4rem);
  color: $accent;
  min-height: 1.8em;
  letter-spacing: 0.01em;
}
.hero__typed { color: $accent; font-weight: 500; }
.hero__caret {
  width: 2px;
  height: 1.05em;
  background: $muted;
  display: inline-block;
  animation: blink 1.1s step-end infinite;
}

.hero__tagline {
  margin-top: 1.3rem;
  max-width: 46ch;
  font-size: clamp(1rem, 2.4vw, 1.18rem);
  color: $muted;
}

.hero__actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: 99px;
  font-weight: 600;
  font-size: 0.97rem;
  transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.25s ease;
  @include focus-ring;

  &--primary {
    color: $ink;
    background: $accent;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
    svg { transition: transform 0.25s ease; }
    &:hover {
      transform: translateY(-2px);
      background: #9db9dd;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
    }
    &:hover svg { transform: translateX(4px); }
  }
  &--ghost {
    color: $text;
    border: 1px solid $line-strong;
    &:hover {
      transform: translateY(-3px);
      color: $paper;
      border-color: rgba(138, 166, 204, 0.5);
      background: rgba(138, 166, 204, 0.06);
    }
  }
}

.hero__stats {
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(1.6rem, 6vw, 3.4rem);
  div { min-width: 0; }
  dt {
    font-family: $font-display;
    font-weight: 700;
    font-size: clamp(1.7rem, 5vw, 2.5rem);
    color: $paper;
  }
  dd {
    margin-top: 0.2rem;
    font-size: 0.85rem;
    color: $faint;
    max-width: 16ch;
  }
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 1.6rem;
  translate: -50% 0;
  width: 26px;
  height: 42px;
  border: 2px solid $line-strong;
  border-radius: 99px;
  display: grid;
  place-items: start center;
  padding-top: 7px;
  span {
    width: 4px;
    height: 8px;
    border-radius: 4px;
    background: $lime;
    animation: scrollDot 1.8s ease-in-out infinite;
  }
  @include until($bp-md) { display: none; }
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(138, 166, 204, 0.55); }
  70%  { box-shadow: 0 0 0 9px rgba(138, 166, 204, 0); }
  100% { box-shadow: 0 0 0 0 rgba(138, 166, 204, 0); }
}
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
@keyframes scrollDot {
  0%   { transform: translateY(0); opacity: 1; }
  70%  { transform: translateY(14px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
}
</style>
