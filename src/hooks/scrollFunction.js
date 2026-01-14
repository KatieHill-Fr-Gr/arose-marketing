import { useEffect } from 'react'

export const useScrollAnimation = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('[data-animate]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return

                    const el = entry.target
                    const delay = el.dataset.delay || '0ms'

                    el.style.transitionDelay = delay

                    if (entry.isIntersecting) {
                        el.classList.add('animate-in')
                    } else {
                        el.classList.remove('animate-in')
                    }
                })
            },
            { threshold: 0.15 }
        )

        elements.forEach(el => observer.observe(el))

        return () => observer.disconnect()

    }, [])
}