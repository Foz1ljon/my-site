<script setup lang="ts">
  import { profile } from "../data/resume";

  const highlights = [
    {
      icon: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
      title: "Performance-first",
      text: "Lean, optimized UIs and APIs — from query tuning to bundle size.",
    },
    {
      icon: '<path d="M12 3 5 6v5c0 4.2 2.8 7.6 7 9 4.2-1.4 7-4.8 7-9V6l-7-3Z"/>',
      title: "Secure by design",
      text: "E-imzo digital signatures, NGINX hardening and safe payment flows.",
    },
    {
      icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
      title: "Design systems",
      text: "Reusable component libraries that keep products consistent at scale.",
    },
    {
      icon: '<rect x="2" y="4" width="14" height="10" rx="1.5"/><rect x="17" y="9" width="5" height="11" rx="1.5"/><path d="M2 18h10"/>',
      title: "Cross-platform",
      text: "Web, desktop (Electron) and  mobile (Capacitor) from one codebase.",
    },
  ];
</script>

<template>
  <section id="about" class="section">
    <div class="container about">
      <div class="about__intro">
        <p class="eyebrow" v-reveal>About me</p>
        <h2 class="section-title" v-reveal="60">Building reliable products<br />from front to back.</h2>
        <p class="about__lead" v-reveal="140">
          I’m a software developer based in {{ profile.location }} with a fullstack focus on the Vue &amp; Node ecosystems. Over the last couple of years I’ve shipped government portals, CRM panels, an e-commerce
          platform and an open-source UI library — caring as much about clean architecture as about the details users actually feel.
        </p>
        <ul class="about__meta" v-reveal="200">
          <li><span>Location</span>{{ profile.location }}</li>
          <li><span>Focus</span>Fullstack · Vue / Node</li>
          <li>
            <span>Email</span><a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </li>
        </ul>
      </div>

      <div class="about__cards">
        <article v-for="(h, i) in highlights" :key="h.title" class="hl" v-reveal="i * 90">
          <span class="hl__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" v-html="h.icon"></svg>
          </span>
          <h3 class="hl__title">{{ h.title }}</h3>
          <p class="hl__text">{{ h.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "../styles/theme" as *;

  .about {
    display: grid;
    gap: clamp(2.5rem, 6vw, 4.5rem);
    grid-template-columns: 1fr;

    @include from($bp-lg) {
      grid-template-columns: 1.05fr 1fr;
      align-items: start;
    }
  }

  .about__lead {
    margin-top: 1.5rem;
    color: $muted;
    font-size: clamp(1rem, 2.3vw, 1.12rem);
    max-width: 52ch;
  }

  .about__meta {
    margin-top: 2rem;
    display: grid;
    gap: 0.9rem;
    li {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      padding-bottom: 0.9rem;
      border-bottom: 1px solid $line;
      font-size: 0.98rem;
      span {
        font-family: $font-mono;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: $faint;
      }
      a:hover {
        color: $lime;
      }
    }
  }

  .about__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @include from($bp-sm) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .hl {
    @include glass;
    padding: 1.5rem 1.4rem;
    transition:
      transform 0.3s ease,
      border-color 0.3s ease,
      background 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      border-color: rgba(138, 166, 204, 0.35);
      background: linear-gradient(150deg, rgba(138, 166, 204, 0.06), rgba(255, 255, 255, 0.012));
    }
    &:hover .hl__icon {
      color: $lime;
      border-color: rgba(138, 166, 204, 0.4);
    }
  }
  .hl__icon {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    border-radius: 12px;
    color: $text;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid $line;
    transition:
      color 0.3s ease,
      border-color 0.3s ease;
    svg {
      width: 22px;
      height: 22px;
    }
  }
  .hl__title {
    margin-top: 1rem;
    font-family: $font-display;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .hl__text {
    margin-top: 0.45rem;
    font-size: 0.92rem;
    color: $muted;
  }
</style>
