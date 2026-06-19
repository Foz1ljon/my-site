import type { Directive } from 'vue'

// v-reveal — fades/slides an element in when it scrolls into view.
// Optional value sets a stagger delay in ms:  v-reveal="120"
const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.setAttribute('data-reveal', '')
    if (binding.value) {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }

    if (typeof IntersectionObserver === 'undefined') {
      el.setAttribute('data-reveal', 'in')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute('data-reveal', 'in')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
  },
}

export default reveal
