import { useEffect } from 'react'

export function useScrollAnimation(deps = []) {
  useEffect(() => {

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    if (prefersReducedMotion || isMobile) return

    const elements = document.querySelectorAll('[data-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const delay = el.dataset.delay || '0ms'

          if (entry.isIntersecting) {
            el.style.transitionDelay = delay
            el.classList.add('animate-in')
          } else {
            el.style.transitionDelay = '0ms'
            el.classList.remove('animate-in')
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -30% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, deps)
}
