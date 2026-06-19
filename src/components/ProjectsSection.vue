<script setup lang="ts">
import { projects } from '../data/resume'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow" v-reveal>Selected work</p>
        <h2 class="section-title" v-reveal="60">Projects I’m proud of</h2>
      </header>

      <div class="grid">
        <article
          v-for="(p, i) in projects"
          :key="p.name"
          class="card"
          v-reveal="i * 110"
        >
          <div class="card__glow"></div>
          <div class="card__body">
            <div class="card__head">
              <div>
                <h3 class="card__name">{{ p.name }}</h3>
                <p class="card__role">{{ p.role }}</p>
              </div>
              <a
                v-if="p.link"
                :href="p.link"
                target="_blank"
                rel="noopener"
                class="card__link"
                :aria-label="`${p.name} — ${p.linkLabel}`"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>

            <p class="card__period">{{ p.period }}</p>

            <ul class="card__points">
              <li v-for="pt in p.points" :key="pt">{{ pt }}</li>
            </ul>

            <ul class="card__tags">
              <li v-for="t in p.tags" :key="t">{{ t }}</li>
            </ul>
          </div>
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
  @include from($bp-lg) { grid-template-columns: 1fr 1fr; }
}

.card {
  position: relative;
  border-radius: $radius;
  isolation: isolate;
  transition: transform 0.35s ease;
  &:hover { transform: translateY(-6px); }
}

.card__glow {
  position: absolute;
  inset: 0;
  border-radius: $radius;
  background: radial-gradient(80% 60% at 50% 0%, rgba(138, 166, 204, 0.14), transparent 70%);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.4s ease;
}
.card:hover .card__glow { opacity: 1; }

.card__body {
  @include glass;
  height: 100%;
  padding: 1.7rem 1.6rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.35s ease;
}
.card:hover .card__body { border-color: rgba(138, 166, 204, 0.3); }

.card__head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}
.card__name {
  font-family: $font-display;
  font-size: 1.5rem;
  font-weight: 700;
  color: $paper;
}
.card__role {
  margin-top: 0.2rem;
  color: $muted;
  font-size: 0.9rem;
}
.card__link {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 11px;
  color: $text;
  border: 1px solid $line;
  transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  &:hover {
    color: $lime;
    border-color: rgba(138, 166, 204, 0.5);
    transform: rotate(8deg) scale(1.05);
  }
}

.card__period {
  margin-top: 0.6rem;
  font-family: $font-mono;
  font-size: 0.76rem;
  color: $faint;
}

.card__points {
  margin-top: 1.2rem;
  display: grid;
  gap: 0.6rem;
  flex: 1;
  li {
    position: relative;
    padding-left: 1.3rem;
    font-size: 0.92rem;
    color: $muted;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: $lime;
    }
  }
}

.card__tags {
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  li {
    font-family: $font-mono;
    font-size: 0.74rem;
    padding: 0.32rem 0.7rem;
    border-radius: 99px;
    color: $text;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid $line;
    transition: border-color 0.25s ease, color 0.25s ease;
    &:hover { color: $lime; border-color: rgba(138, 166, 204, 0.5); }
  }
}
</style>
