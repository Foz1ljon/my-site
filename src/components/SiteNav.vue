<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { profile } from '../data/resume'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}
function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <a href="#top" class="nav__brand" @click="closeMenu">
        <span class="nav__mark">FF</span>
        <span class="nav__name">Fozil<span>.dev</span></span>
      </a>

      <nav class="nav__links" :class="{ 'is-open': menuOpen }">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="nav__link"
          @click="closeMenu"
        >{{ l.label }}</a>
        <a
          :href="profile.resumeFile"
          target="_blank"
          rel="noopener"
          class="nav__cta"
          @click="closeMenu"
        >Resume ↗</a>
      </nav>

      <button
        class="nav__burger"
        :class="{ 'is-open': menuOpen }"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../styles/theme' as *;

.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
  border-bottom: 1px solid transparent;

  &--scrolled {
    background: rgba(11, 15, 21, 0.72);
    backdrop-filter: blur(16px);
    border-bottom-color: $line;
  }
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: $font-display;
  font-weight: 700;
}
.nav__mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  font-size: 0.95rem;
  color: $lime;
  background: rgba(138, 166, 204, 0.08);
  border: 1px solid rgba(138, 166, 204, 0.3);
}
.nav__name {
  font-size: 1.1rem;
  letter-spacing: -0.01em;
  span { color: $lime; }
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.nav__link {
  position: relative;
  padding: 0.5rem 0.85rem;
  font-size: 0.92rem;
  color: $muted;
  border-radius: 9px;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0.85rem;
    right: 0.85rem;
    bottom: 0.3rem;
    height: 2px;
    border-radius: 2px;
    background: $lime;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &:hover { color: $text; }
  &:hover::after { transform: scaleX(1); }
}

.nav__cta {
  margin-left: 0.5rem;
  padding: 0.55rem 1.05rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: $text;
  border: 1px solid $line-strong;
  border-radius: 99px;
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
  &:hover {
    color: $lime;
    border-color: rgba(138, 166, 204, 0.55);
    background: rgba(138, 166, 204, 0.07);
  }
}

.nav__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  border-radius: 11px;
  border: 1px solid $line;
  span {
    width: 20px;
    height: 2px;
    margin-inline: auto;
    background: $text;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.2s ease;
  }
  &.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  &.is-open span:nth-child(2) { opacity: 0; }
  &.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}

@include until($bp-md) {
  .nav__burger { display: flex; }

  .nav__links {
    position: fixed;
    inset: 72px 0 auto;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: 1rem clamp(1.15rem, 5vw, 2.5rem) 1.6rem;
    background: rgba(11, 15, 21, 0.96);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid $line;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.is-open {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
  }
  .nav__link {
    padding: 0.85rem 0.4rem;
    font-size: 1.05rem;
    border-bottom: 1px solid $line;
    border-radius: 0;
    &::after { display: none; }
  }
  .nav__cta {
    margin: 0.8rem 0 0;
    text-align: center;
  }
}
</style>
