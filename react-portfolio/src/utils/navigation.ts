let navigationTransitionTimer: number | undefined

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const playNavigationTransition = () => {
  if (prefersReducedMotion()) {
    return
  }

  const root = document.documentElement
  root.classList.remove('is-navigating')
  window.clearTimeout(navigationTransitionTimer)

  window.requestAnimationFrame(() => {
    root.classList.add('is-navigating')
    navigationTransitionTimer = window.setTimeout(() => {
      root.classList.remove('is-navigating')
    }, 680)
  })
}
