import { useEffect, useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Contact from './components/Contact'
import { navItems } from './data/content'

// Order also drives swipe-up/swipe-down and scroll-wheel navigation.
const SECTION_ORDER = navItems.map((item) => item.id)

const SECTION_COMPONENTS = {
  home: Home,
  education: Education,
  experience: Experience,
  achievements: Achievements,
  projects: Projects,
  skills: Skills,
  activities: Activities,
  contact: Contact,
}

const TRANSITION_MS = 200 // keep in sync with .section transition duration in index.css

export default function App() {
  const [activeId, setActiveId] = useState('home') // drives sidebar highlight
  const [displayId, setDisplayId] = useState('home') // what's actually rendered
  const [entered, setEntered] = useState(true) // toggles the fade/slide "enter" class

  const mainRef = useRef(null)
  const isAnimating = useRef(false)
  const touchStartY = useRef(null)
  const wheelCooldown = useRef(false)

  function goToId(targetId) {
    if (!targetId || targetId === displayId || isAnimating.current) return
    isAnimating.current = true
    setActiveId(targetId)
    setEntered(false) // start fade-out of current section

    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })

    setTimeout(() => {
      setDisplayId(targetId)
      // Wait a frame so the DOM paints the new section before animating in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEntered(true)
          isAnimating.current = false
        })
      })
    }, TRANSITION_MS)
  }

  function goToDirection(direction) {
    const idx = SECTION_ORDER.indexOf(displayId)
    const nextIdx = idx + direction
    if (nextIdx < 0 || nextIdx >= SECTION_ORDER.length) return
    goToId(SECTION_ORDER[nextIdx])
  }

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    function handleWheel(e) {
      if (wheelCooldown.current || isAnimating.current) return
      if (Math.abs(e.deltaY) < 25) return

      wheelCooldown.current = true
      goToDirection(e.deltaY > 0 ? 1 : -1)
      setTimeout(() => {
        wheelCooldown.current = false
      }, 350)
    }

    function handleTouchStart(e) {
      touchStartY.current = e.touches[0].clientY
    }

    function handleTouchEnd(e) {
      if (touchStartY.current === null || isAnimating.current) return
      const diff = touchStartY.current - e.changedTouches[0].clientY
      touchStartY.current = null

      if (Math.abs(diff) < 45) return // ignore small taps/drags
      goToDirection(diff > 0 ? 1 : -1) // swipe up -> next, swipe down -> previous
    }

    main.addEventListener('wheel', handleWheel, { passive: true })
    main.addEventListener('touchstart', handleTouchStart, { passive: true })
    main.addEventListener('touchend', handleTouchEnd)

    return () => {
      main.removeEventListener('wheel', handleWheel)
      main.removeEventListener('touchstart', handleTouchStart)
      main.removeEventListener('touchend', handleTouchEnd)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayId])

  const ActiveSection = SECTION_COMPONENTS[displayId]

  return (
    <div className="layout">
      <Sidebar activeId={activeId} onNavigate={goToId} />

      <main className="main" ref={mainRef}>
        <section className={`section active${entered ? ' enter' : ''}`}>
          <ActiveSection />
        </section>
      </main>
    </div>
  )
}
