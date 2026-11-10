import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal() {
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>(
      '.elevate-section .display, .stat-card, .live-head, .live-panel, .outcomes-section .display, .outcome-card, .industries-section .display, .industry-panel, .testimonials-section .display, .testimonial-card, .platform-section .display, .acc-item, .trust-head, .trust-card, .cta-band .section-shell',
    )

    const ctx = gsap.context(() => {
      targets.forEach((el, i) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 24,
          duration: 0.65,
          ease: 'power2.out',
          delay: (i % 3) * 0.05,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })
    })

    const refresh = () => ScrollTrigger.refresh()
    const t = window.setTimeout(refresh, 200)
    window.addEventListener('load', refresh)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [])

  return null
}
