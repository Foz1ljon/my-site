<script setup lang="ts">
  import { experience } from "../data/resume";
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <header class="head">
        <p class="eyebrow" v-reveal>Career</p>
        <h2 class="section-title" v-reveal="60">Work experience</h2>
      </header>

      <ol class="timeline">
        <li v-for="(job, i) in experience" :key="job.company" class="tl" v-reveal="i * 100">
          <span class="tl__node" :class="{ 'tl__node--live': job.current }"></span>
          <div class="tl__card">
            <div class="tl__top">
              <div>
                <h3 class="tl__company">{{ job.company }}</h3>
                <p class="tl__role">{{ job.role }}</p>
              </div>
              <span class="tl__period" :class="{ 'tl__period--live': job.current }">
                {{ job.period }}
              </span>
            </div>
            <ul class="tl__points">
              <li v-for="p in job.points" :key="p">{{ p }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "../styles/theme" as *;

  .head {
    margin-bottom: 3rem;
  }

  .timeline {
    position: relative;
    display: grid;
    gap: 1.4rem;
    padding-left: 1.7rem;
    list-style: none;

    &::before {
      content: "";
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 5px;
      width: 2px;
      background: linear-gradient(180deg, $lime, rgba(138, 166, 204, 0.15), transparent);
    }
  }

  .tl {
    position: relative;
  }

  .tl__node {
    position: absolute;
    left: -1.7rem;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $surface-2;
    border: 2px solid $faint;
    translate: -1px 0;

    &--live {
      border-color: $lime;
      background: $lime;
      box-shadow: 0 0 0 0 rgba(138, 166, 204, 0.5);
      animation: nodePulse 2.2s infinite;
    }
  }

  .tl__card {
    @include glass;
    padding: 1.5rem 1.6rem;
    transition:
      transform 0.3s ease,
      border-color 0.3s ease;
    &:hover {
      transform: translateX(5px);
      border-color: $line-strong;
    }
  }

  .tl__top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 1rem;
    align-items: baseline;
  }
  .tl__company {
    font-family: $font-display;
    font-size: 1.3rem;
    font-weight: 600;
    color: $paper;
  }
  .tl__role {
    color: $lime;
    font-size: 0.92rem;
    margin-top: 0.15rem;
  }
  .tl__period {
    font-family: $font-mono;
    font-size: 0.78rem;
    color: $faint;
    white-space: nowrap;

    &--live {
      color: $ink;
      background: $lime;
      padding: 0.2rem 0.6rem;
      border-radius: 99px;
      font-weight: 600;
    }
  }

  .tl__points {
    margin-top: 1.1rem;
    display: grid;
    gap: 0.65rem;
    li {
      position: relative;
      padding-left: 1.3rem;
      color: $muted;
      font-size: 0.94rem;
      &::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: $lime;
      }
    }
  }

  @keyframes nodePulse {
    0% {
      box-shadow: 0 0 0 0 rgba(138, 166, 204, 0.5);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(138, 166, 204, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(138, 166, 204, 0);
    }
  }
</style>
