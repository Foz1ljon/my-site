<script setup lang="ts">
  import { profile } from "../data/resume";

  const icons = {
    email:
      '<path d="M3 7l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    phone:
      '<path d="M6.5 3h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    github:
      '<path fill="currentColor" d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5v-1.76c-2.92.64-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.82-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.88 1.08a10 10 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.46.21 2.53.1 2.8.67.73 1.08 1.67 1.08 2.82 0 4.04-2.46 4.92-4.8 5.18.38.33.71.97.71 1.96v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5z"/>',
    linkedin:
      '<path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.8 8.69 22 10.96 22 14.04V21h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9z"/>',
  };

  const socials = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: icons.email },
    { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: icons.phone },
    { label: "GitHub", value: "github.com", href: profile.github, icon: icons.github },
    { label: "LinkedIn", value: "linkedin.com", href: profile.linkedin, icon: icons.linkedin },
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
          <a href="https://t.me/Coderf" target="_blank" rel="noopener" class="cta__primary">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21.94 4.3 18.86 19.2c-.23 1.03-.85 1.28-1.72.8l-4.76-3.5-2.3 2.21c-.25.25-.47.47-.96.47l.34-4.85L18.62 6.3c.38-.34-.08-.53-.6-.19L7.12 13.2l-4.7-1.47c-1.02-.32-1.04-1.02.21-1.51L20.63 3.1c.85-.32 1.6.2 1.31 1.2Z"
              />
            </svg>
            Telegram
          </a>
          <a :href="profile.resumeFile" target="_blank" rel="noopener" class="cta__ghost"> Download CV ↗ </a>
        </div>

        <ul class="cta__grid">
          <li v-for="s in socials" :key="s.label">
            <a :href="s.href" target="_blank" rel="noopener">
              <span class="cta__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" v-html="s.icon"></svg>
              </span>
              <span class="cta__text">
                <span class="cta__k">{{ s.label }}</span>
                <span class="cta__v">{{ s.value }}</span>
              </span>
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
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
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
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: $radius-sm;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid $line;
      text-align: left;
      transition:
        transform 0.25s ease,
        border-color 0.25s ease;
      &:hover {
        transform: translateY(-3px);
        border-color: $line-strong;
        .cta__icon {
          color: $lime;
          border-color: rgba(138, 166, 204, 0.5);
        }
      }
    }
  }
  .cta__icon {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    color: $muted;
    border: 1px solid $line;
    background: rgba(255, 255, 255, 0.03);
    transition:
      color 0.25s ease,
      border-color 0.25s ease;
  }
  .cta__text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
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
