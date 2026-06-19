<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { skills, languages } from '../data/resume'

const barsEl = ref<HTMLElement | null>(null)
const animate = ref(false)

onMounted(() => {
  if (!barsEl.value || typeof IntersectionObserver === 'undefined') {
    animate.value = true
    return
  }
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animate.value = true
        obs.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  obs.observe(barsEl.value)
})
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow" v-reveal>Toolkit</p>
        <h2 class="section-title" v-reveal="60">Skills &amp; technologies</h2>
      </header>

      <div class="layout">
        <div class="groups">
          <div
            v-for="(g, i) in skills"
            :key="g.label"
            class="group"
            v-reveal="i * 70"
          >
            <h3 class="group__label">{{ g.label }}</h3>
            <ul class="group__items">
              <li v-for="item in g.items" :key="item" class="chip">{{ item }}</li>
            </ul>
          </div>
        </div>

        <aside class="langs" ref="barsEl" v-reveal="120">
          <h3 class="langs__title">Languages</h3>
          <div v-for="l in languages" :key="l.name" class="lang">
            <div class="lang__row">
              <span class="lang__name">{{ l.name }}</span>
              <span class="lang__level">{{ l.level }}</span>
            </div>
            <div class="lang__track">
              <span
                class="lang__fill"
                :style="{ width: animate ? l.value + '%' : '0%' }"
              ></span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/theme' as *;

.head { margin-bottom: 3rem; }

.layout {
  display: grid;
  gap: clamp(2rem, 5vw, 3.5rem);
  grid-template-columns: 1fr;
  @include from($bp-lg) { grid-template-columns: 1.5fr 1fr; }
}

.groups {
  display: grid;
  gap: 1.6rem;
}
.group__label {
  font-family: $font-mono;
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $faint;
  margin-bottom: 0.85rem;
}
.group__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}
.chip {
  font-size: 0.88rem;
  padding: 0.5rem 0.95rem;
  border-radius: 11px;
  color: $text;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid $line;
  transition: transform 0.22s ease, border-color 0.22s ease, color 0.22s ease, background 0.22s ease;
  cursor: default;
  &:hover {
    transform: translateY(-3px);
    color: $lime;
    border-color: rgba(138, 166, 204, 0.45);
    background: rgba(138, 166, 204, 0.06);
  }
}

.langs {
  @include glass;
  padding: 1.7rem 1.6rem;
  align-self: start;
}
.langs__title {
  font-family: $font-display;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 1.4rem;
}
.lang { margin-bottom: 1.3rem; &:last-child { margin-bottom: 0; } }
.lang__row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.lang__name { font-weight: 600; font-size: 0.98rem; }
.lang__level { font-size: 0.78rem; color: $faint; text-align: right; }
.lang__track {
  height: 8px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}
.lang__fill {
  display: block;
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(90deg, $accent-deep, $accent);
  transition: width 1.3s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
