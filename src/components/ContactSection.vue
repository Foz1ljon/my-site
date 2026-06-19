<script setup lang="ts">
  import { profile } from "../data/resume";

  const socials = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: profile.phoneHref },
    { label: "GitHub", value: "github.com", href: profile.github },
    { label: "LinkedIn", value: "linkedin.com", href: profile.linkedin },
  ];
  const year = new Date().getFullYear();
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="cta" v-reveal>
        <div class="cta__glow"></div>
        <p class="eyebrow">Let’s talk</p>
        <h2 class="cta__title">Have a project in mind?</h2>
        <p class="cta__text">I’m open to fullstack and frontend roles, freelance builds and collaborations. Drop me a line — I usually reply within a day.</p>
        <div class="cta__actions">
          <a :href="`mailto:${profile.email}`" class="cta__primary">
            {{ profile.email }}
          </a>
          <a :href="profile.resumeFile" target="_blank" rel="noopener" class="cta__ghost"> Download CV ↗ </a>
        </div>

        <ul class="cta__grid">
          <li v-for="s in socials" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener">
              <span class="cta__k">{{ s.label }}</span>
              <span class="cta__v">{{ s.value }}</span>
            </a>
          </li>
        </ul>
      </div>

      <footer class="foot">
        <span>© {{ year }} {{ profile.name }}</span>

        <a href="#top" class="foot__top">Back to top ↑</a>
      </footer>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use "../styles/theme" as *;

  .cta {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding: clamp(2.5rem, 7vw, 4.5rem) clamp(1.4rem, 5vw, 3rem);
    border-radius: clamp($radius, 4vw, 30px);
    border: 1px solid $line;
    background: radial-gradient(120% 140% at 50% 0%, rgba(138, 166, 204, 0.1), transparent 60%), $surface;
  }
  .cta__glow {
    position: absolute;
    top: -40%;
    left: 50%;
    width: 60%;
    height: 80%;
    translate: -50% 0;
    background: radial-gradient(circle, rgba(138, 166, 204, 0.16), transparent 70%);
    filter: blur(60px);
    pointer-events: none;
  }
  .cta .eyebrow {
    justify-content: center;
  }

  .cta__title {
    margin-top: 0.9rem;
    font-family: $font-display;
    font-weight: 700;
    letter-spacing: -0.025em;
    font-size: clamp(2rem, 6.2vw, 3.4rem);
    color: $paper;
  }
  .cta__text {
    margin: 1.1rem auto 0;
    max-width: 46ch;
    color: $muted;
    font-size: clamp(1rem, 2.3vw, 1.12rem);
  }

  .cta__actions {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.85rem;
  }
  .cta__primary {
    padding: 0.9rem 1.7rem;
    border-radius: 99px;
    font-weight: 600;
    color: $ink;
    background: $accent;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
    transition:
      transform 0.25s ease,
      box-shadow 0.3s ease,
      background 0.25s ease;
    word-break: break-all;
    &:hover {
      transform: translateY(-2px);
      background: #9db9dd;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
    }
  }
  .cta__ghost {
    padding: 0.9rem 1.7rem;
    border-radius: 99px;
    font-weight: 600;
    color: $text;
    border: 1px solid $line-strong;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background 0.25s ease,
      color 0.25s ease;
    &:hover {
      transform: translateY(-3px);
      color: $paper;
      border-color: rgba(138, 166, 204, 0.5);
      background: rgba(138, 166, 204, 0.06);
    }
  }

  .cta__grid {
    margin-top: 2.6rem;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: 1fr 1fr;
    @include from($bp-md) {
      grid-template-columns: repeat(4, 1fr);
    }
    a {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 1rem;
      border-radius: $radius-sm;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid $line;
      transition:
        transform 0.25s ease,
        border-color 0.25s ease;
      &:hover {
        transform: translateY(-3px);
        border-color: $line-strong;
      }
    }
  }
  .cta__k {
    font-family: $font-mono;
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: $faint;
  }
  .cta__v {
    font-size: 0.9rem;
    color: $text;
    word-break: break-all;
  }

  .foot {
    margin-top: 3rem;
    padding-top: 1.6rem;
    border-top: 1px solid $line;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem 1.2rem;
    font-size: 0.85rem;
    color: $faint;
  }
  .foot__made {
    font-family: $font-mono;
    font-size: 0.78rem;
  }
  .foot__top {
    color: $muted;
    transition: color 0.2s ease;
    &:hover {
      color: $lime;
    }
  }
</style>
