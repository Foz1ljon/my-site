<script setup lang="ts">
import { education } from '../data/resume'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow" v-reveal>Background</p>
        <h2 class="section-title" v-reveal="60">Education</h2>
      </header>

      <div class="grid">
        <article
          v-for="(e, i) in education"
          :key="e.program"
          class="edu"
          v-reveal="i * 100"
        >
          <div class="edu__head">
            <span class="edu__cap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/><path d="M22 10v6"/></svg>
            </span>
            <div>
              <h3 class="edu__school">{{ e.school }}</h3>
              <p class="edu__program">{{ e.program }}</p>
            </div>
          </div>
          <p class="edu__period">{{ e.period }}</p>
          <ul class="edu__points">
            <li v-for="p in e.points" :key="p">{{ p }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../styles/theme' as *;

.head { margin-bottom: 3rem; }

.grid {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 1fr;
  @include from($bp-md) { grid-template-columns: 1fr 1fr; }
}

.edu {
  @include glass;
  padding: 1.7rem 1.6rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
  &:hover { transform: translateY(-5px); border-color: $line-strong; }
}
.edu__head {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}
.edu__cap {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 12px;
  color: $lime;
  background: rgba(138, 166, 204, 0.06);
  border: 1px solid rgba(138, 166, 204, 0.22);
  svg { width: 22px; height: 22px; }
}
.edu__school {
  font-family: $font-display;
  font-size: 1.25rem;
  font-weight: 600;
  color: $paper;
}
.edu__program {
  margin-top: 0.2rem;
  color: $lime;
  font-size: 0.9rem;
}
.edu__period {
  margin-top: 1rem;
  font-family: $font-mono;
  font-size: 0.76rem;
  color: $faint;
}
.edu__points {
  margin-top: 1rem;
  display: grid;
  gap: 0.6rem;
  li {
    position: relative;
    padding-left: 1.3rem;
    font-size: 0.92rem;
    color: $muted;
    &::before { content: '▹'; position: absolute; left: 0; color: $lime; }
  }
}
</style>
