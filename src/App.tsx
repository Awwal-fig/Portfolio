import { useEffect, useRef, useState } from "react"

type ProjectData = {
  slug: string
  title: string
  year: string
  description: string
  intro?: string
  href?: string
  caseStudyHref?: string
  images: string[]
  widths: number[]
}

const projects: ProjectData[] = [
  {
    slug: "barready",
    title: "Barready",
    year: "2026",
    href: "https://barready.website",
    intro: "Founder and product designer",
    description:
      "Barready helps Nigerian Bar aspirants prepare for the Bar Finals with MCQ, essay and drafting practice and checklist-based feedback. I wrote the product spec, designed the app and built it with Claude Code. The waitlist is live and the full product is coming soon.",
    images: ["aec00.png", "9c76e.png", "25838.png"],
    widths: [172.797, 164.57, 164.57],
  },
  {
    slug: "koboback",
    title: "KoboBack",
    year: "2026",
    caseStudyHref:
      "https://www.figma.com/deck/2pPLuJQbpFiJk2xm7pi3ud/KoboBack-%E2%80%94-Case-Study?node-id=0-1&t=uBADNCCXMb16tzJ4-1",
    intro: "Product design and product management · Concept",
    description:
      "KoboBack is a web app that helps Nigerians get money back from failed transfers and wrong bank debits. I led the research, flows, 23 screens and UX copy, turning the Central Bank of Nigeria's own refund rules into a ready-to-send complaint, a deadline clock and a clear path to escalate.",
    images: ["f9cd4.png", "4de10.png"],
    widths: [154, 125.969],
  },
  {
    slug: "rlkids",
    title: "RLKids at Tobams Group",
    year: "2026",
    href: "https://rlkids.ai",
    caseStudyHref:
      "https://www.figma.com/deck/ah0k0icJYiaU65u60Mdcss/RLKids-FAQ-%E2%80%94-Case-Study?node-id=0-1&t=GY7sJJ8IsmqNtOKW-1",
    intro: "Product designer, with the Tobams Group team",
    description:
      "RLKids is an AI-powered EdTech platform where kids learn future skills like AI, finance and sustainability through gamified lessons. I redesigned its help centre, splitting one long FAQ into General, Parent and Child hubs so each audience finds its own answers, without breaking a single existing link. Live on rlkids.ai.",
    images: ["02859.png", "97d25.png"],
    widths: [149.469, 149.383],
  },
  {
    slug: "dead-and-wounded",
    title: "Dead and Wounded",
    year: "2025",
    href: "https://dead-and-wounded-omega.vercel.app/",
    caseStudyHref:
      "https://www.figma.com/deck/f1Bf1cIhkt9WSoi3bCNo3A/Dead---Wounded-%E2%80%94-Case-Study-v2?node-id=0-1&t=3WPkDaJHeLhewt48-1",
    intro: "Designed and built",
    description:
      "Dead & Wounded is a number deduction duel game where every guess brings you closer to cracking the code. I designed and built it: online duels with friends through room codes, three AI opponents, and a print-inspired look that teaches the rules at a glance.",
    images: ["549d5.png", "5791f.png", "dcfc3.png", "1a93e.png"],
    widths: [155.875, 155.875, 155.875, 155.875],
  },
  {
    slug: "keeb",
    title: "KEEB",
    year: "2023",
    intro: "UI/UX designer",
    description:
      "KEEB is a two-sided platform: a mobile app for customers to shop from storefront owners and book tradespeople like mechanics and plumbers, paired with a web app for storefront owners and service providers to manage their listings and operations. I designed both, from definition to prototype.",
    href: "https://www.figma.com/proto/W6VdjuosMllFyLu8pPUelN/Keeb-App--Copy-?node-id=60-29830&t=zSTuswbjajpuMr5Z-1",
    images: ["keeb-main.png"],
    widths: [144],
  },
  // { slug: "quillion", title: "Quillion", year: "Quillion", description: "A Frontend For a markdown application.", images: ["fb298.png", "0605e.png", "bcd25.png"], widths: [144, 144, 155.875] },
]

const roles = [
  {
    date: "2025 — Present",
    title: "Product Designer at First HighTower",
    location: "Lagos, Nigeria",
    bullets: [
      "Design intuitive, user-centred interfaces for the High Court's justice management system, focusing on clarity, accessibility, and workflow efficiency.",
      "Create clean layouts, scalable design systems, and seamless user journeys for modules like Legal Counsels, Post Judgment, Probate, and Appeals among other profiles.",
      "Translate complex legal processes into simple, visually structured screens that improve user experience for judges, registrars, administrative staff, legal counsel, and affidavit flow.",
      "Designed an incubation platform for affiliate universities (EIBIC) with the Federal Ministry of Education of Nigeria.",
    ],
  },
  {
    date: "Jan 2026 — Aug 2026",
    title: "Product Designer at Tobams Group",
    location: "Lagos, Nigeria",
    description:
      "I worked as a product designer at Tobams Group, reimagining existing interfaces and designing new products, including the RLKids help centre, in close collaboration with the design team lead.",
  },
  {
    date: "2023 — 2024",
    title: "UI/UX Designer at KEEB",
    location: "Lagos, Nigeria",
    description:
      "At KEEB, I worked hand in hand with a teammate and stakeholders to define and design the KEEB mobile app and the web app for storefront owners.",
  },
]

const contacts = [
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/awwal-muhammed-bello-081500179",
    href: "https://www.linkedin.com/in/awwal-muhammed-bello-081500179",
  },
  {
    label: "GitHub",
    value: "Awwal-fig",
    href: "https://github.com/Awwal-fig",
  },
  {
    label: "Twitter",
    value: "@iamAwwalll",
    href: "https://x.com/iamAwwalll",
  },
  {
    label: "Email",
    value: "awwalmuhammedbello@gmail.com",
    href: "mailto:awwalmuhammedbello@gmail.com",
  },
]

type Theme = "light" | "dark"

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3v12M7 10l5 5 5-5M5 20h14" />
    </svg>
  )
}

type SocialIconName = "resume" | "twitter" | "github" | "linkedin" | "email"

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "resume") {
    return (
      <svg
        aria-hidden="true"
        className="social-icon resume-icon"
        viewBox="0 0 24 24"
      >
        <rect height="22" rx="3" width="18" x="3" y="1" />
        <circle cx="12" cy="9" r="3" />
        <path d="M7.5 18c.7-2.7 2.1-4 4.5-4s3.8 1.3 4.5 4" />
      </svg>
    )
  }

  if (name === "twitter") {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <path d="M4 3l16 18M20 3 4 21" />
      </svg>
    )
  }

  if (name === "github") {
    return (
      <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
        <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9v-2.2c-2.4.5-2.9-1-2.9-1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.9-.2-3.9-1-3.9-4.1 0-.9.3-1.7 1-2.3-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.5.9a8.8 8.8 0 0 1 4.6 0c1.7-1.1 2.5-.9 2.5-.9.5 1.2.2 2.1.1 2.3.6.6 1 1.4 1 2.3 0 3.2-2 3.9-3.9 4.1.3.3.6.8.6 1.6v3a9.2 9.2 0 0 0-2.9-17.9Z" />
      </svg>
    )
  }

  if (name === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        className="social-icon linkedin-icon"
        viewBox="0 0 24 24"
      >
        <rect height="18" rx="2" width="18" x="3" y="3" />
        <path d="M8 10v7M8 7.3v.1M12 17v-7M12 13c.7-2 4-2.2 4 1v3" />
      </svg>
    )
  }

  return (
    <svg
      aria-hidden="true"
      className="social-icon email-icon"
      viewBox="0 0 24 24"
    >
      <path className="gmail-blue" d="M3 7v12" />
      <path className="gmail-red" d="M3 7 12 14 21 7" />
      <path className="gmail-green" d="M21 7v12" />
      <path className="gmail-yellow" d="m3 7 3-2 6 5 6-5 3 2" />
    </svg>
  )
}

function SocialPill({
  children,
  href,
  icon,
  download = false,
}: {
  children: React.ReactNode
  href?: string
  icon: SocialIconName
  download?: boolean
}) {
  const content = (
    <>
      <SocialIcon name={icon} />
      <span>{children}</span>
    </>
  )

  return href ? (
    <a
      className="social-pill"
      download={download}
      href={href}
      rel={download ? undefined : "noreferrer"}
      target={download ? undefined : "_blank"}
    >
      {content}
    </a>
  ) : (
    <span className="social-pill">{content}</span>
  )
}

function SocialCallout() {
  return (
    <div className="social-callout">
      <p>
        You can grab my{" "}
        <SocialPill
          href="https://drive.google.com/file/d/16A0rXOA-pIDYOPFjtSWzQPByLFGhTAo-/view?usp=sharing"
          icon="resume"
        >
          Resume
        </SocialPill>{" "}
        &amp; find me on{" "}
        <SocialPill href="https://x.com/iamAwwalll" icon="twitter">
          Twitter
        </SocialPill>
        ,{" "}
        <SocialPill href="https://github.com/Awwal-fig" icon="github">
          GitHub
        </SocialPill>
        , and{" "}
        <SocialPill
          href="https://www.linkedin.com/in/awwal-muhammed-bello-081500179"
          icon="linkedin"
        >
          LinkedIn
        </SocialPill>
      </p>
      <p>
        Or reach me via{" "}
        <SocialPill href="mailto:awwalmuhammedbello@gmail.com" icon="email">
          Email
        </SocialPill>
      </p>
    </div>
  )
}

function AnimatedCursor() {
  const layerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!finePointer.matches || reducedMotion.matches) return

    const cursor = cursorRef.current
    const layer = layerRef.current
    if (!cursor || !layer) return

    let frame = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let previousX = targetX
    let previousY = targetY
    const trail = trailRefs.current.map(() => ({ x: targetX, y: targetY }))

    const moveCursor = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      layer.classList.add("visible")
      cursor.classList.add("visible")
    }

    const hideCursor = () => {
      layer.classList.remove("visible")
      cursor.classList.remove("visible")
    }
    const pressCursor = () => cursor.classList.add("pressed")
    const releaseCursor = () => cursor.classList.remove("pressed")

    const animate = () => {
      previousX = currentX
      previousY = currentY
      currentX += (targetX - currentX) * 0.24
      currentY += (targetY - currentY) * 0.24

      const velocityX = currentX - previousX
      const velocityY = currentY - previousY
      const tiltX = Math.max(-18, Math.min(18, velocityY * -1.8))
      const tiltY = Math.max(-18, Math.min(18, velocityX * 1.8))

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`

      trail.forEach((point, index) => {
        const leader =
          index === 0 ? { x: currentX, y: currentY } : trail[index - 1]
        const ease = Math.max(0.14, 0.34 - index * 0.025)
        point.x += (leader.x - point.x) * ease
        point.y += (leader.y - point.y) * ease
        const dot = trailRefs.current[index]
        if (dot) {
          dot.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${1 - index * 0.08})`
        }
      })

      frame = window.requestAnimationFrame(animate)
    }

    window.addEventListener("pointermove", moveCursor)
    document.documentElement.addEventListener("mouseleave", hideCursor)
    window.addEventListener("pointerdown", pressCursor)
    window.addEventListener("pointerup", releaseCursor)
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", moveCursor)
      document.documentElement.removeEventListener("mouseleave", hideCursor)
      window.removeEventListener("pointerdown", pressCursor)
      window.removeEventListener("pointerup", releaseCursor)
    }
  }, [])

  return (
    <div aria-hidden="true" className="cursor-layer" ref={layerRef}>
      {Array.from({ length: 9 }, (_, index) => (
        <span
          className="cursor-trail-dot"
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node
          }}
        />
      ))}
      <div className="cursor-orb" ref={cursorRef}>
        <span />
      </div>
    </div>
  )
}

function PortfolioControls() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme")
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio-controls">
      <div aria-label="Color theme" className="theme-switch" role="group">
        <button
          aria-label="Use light theme"
          aria-pressed={theme === "light"}
          className={theme === "light" ? "active" : ""}
          onClick={() => setTheme("light")}
          type="button"
        >
          <SunIcon />
        </button>
        <button
          aria-label="Use dark theme"
          aria-pressed={theme === "dark"}
          className={theme === "dark" ? "active" : ""}
          onClick={() => setTheme("dark")}
          type="button"
        >
          <MoonIcon />
        </button>
      </div>
      <button
        aria-controls="portfolio-menu"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <MenuIcon open={menuOpen} />
      </button>
      {menuOpen && (
        <>
          <button
            aria-label="Close menu"
            className="menu-scrim"
            onClick={closeMenu}
            type="button"
          />
          <nav
            aria-label="Portfolio navigation"
            className="menu-panel"
            id="portfolio-menu"
          >
            <div className="menu-links">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
            <a
              className="download-link"
              href="https://drive.google.com/file/d/16A0rXOA-pIDYOPFjtSWzQPByLFGhTAo-/view?usp=sharing"
              onClick={closeMenu}
              rel="noreferrer"
              target="_blank"
            >
              <span>Download CV</span>
              <DownloadIcon />
            </a>
          </nav>
        </>
      )}
    </div>
  )
}

function ArrowIcon({ contact = false }: { contact?: boolean }) {
  return (
    <picture className={contact ? "contact-arrow" : "external-arrow"}>
      <source
        media="(min-width: 700px)"
        srcSet={contact ? "/assets/04d90.svg" : "/assets/969bb.svg"}
      />
      <img alt="" src={contact ? "/assets/84ff0.svg" : "/assets/d1ae4.svg"} />
    </picture>
  )
}

function FocusIcon() {
  return (
    <svg aria-hidden="true" className="focus-icon" viewBox="0 0 16 16">
      <path d="M6 3H3v3M10 3h3v3M13 10v3h-3M6 13H3v-3" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "right" ? "chevron-right" : ""}
      viewBox="0 0 24 24"
    >
      <path d="m15 5-7 7 7 7" />
    </svg>
  )
}

function ProjectFocusView({
  index,
  onClose,
  onNextProject,
  onPreviousProject,
  project,
}: {
  index: number
  onClose: () => void
  onNextProject: () => void
  onPreviousProject: () => void
  project: ProjectData
}) {
  const [activeImage, setActiveImage] = useState(0)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveImage(0)
    if (trackRef.current) trackRef.current.scrollLeft = 0
  }, [project.slug])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const goToImage = (nextIndex: number) => {
    const boundedIndex = Math.max(
      0,
      Math.min(project.images.length - 1, nextIndex),
    )
    setActiveImage(boundedIndex)
    const track = trackRef.current
    if (track) {
      track.scrollTo({
        behavior: "smooth",
        left: track.clientWidth * boundedIndex,
      })
    }
  }

  const handleTrackScroll = () => {
    const track = trackRef.current
    if (!track || !track.clientWidth) return
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth)
    if (nextIndex !== activeImage) setActiveImage(nextIndex)
  }

  const handleDialogKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key === "ArrowLeft" && event.target === dialogRef.current) {
      goToImage(activeImage - 1)
    }
    if (event.key === "ArrowRight" && event.target === dialogRef.current) {
      goToImage(activeImage + 1)
    }

    if (event.key !== "Tab") return
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    )
    if (!focusable?.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  const handleStagePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const stage = stageRef.current
    if (
      !stage ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }
    const bounds = stage.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    stage.style.setProperty("--focus-tilt-x", `${(0.5 - y) * 7}deg`)
    stage.style.setProperty("--focus-tilt-y", `${(x - 0.5) * 7}deg`)
    stage.style.setProperty("--focus-glow-x", `${x * 100}%`)
    stage.style.setProperty("--focus-glow-y", `${y * 100}%`)
  }

  const resetStageTilt = () => {
    const stage = stageRef.current
    if (!stage) return
    stage.style.setProperty("--focus-tilt-x", "0deg")
    stage.style.setProperty("--focus-tilt-y", "0deg")
    stage.style.setProperty("--focus-glow-x", "50%")
    stage.style.setProperty("--focus-glow-y", "50%")
  }

  const titleId = `focus-title-${project.slug}`
  const descriptionId = `focus-description-${project.slug}`

  return (
    <div
      className="project-focus-backdrop"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose()
      }}
    >
      <div
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="project-focus-panel"
        onKeyDown={handleDialogKeyDown}
        ref={dialogRef}
        role="dialog"
        tabIndex={-1}
      >
        <button
          aria-label={`Close ${project.title} project`}
          className="focus-close"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <CloseIcon />
        </button>

        <div className="focus-copy">
          <div className="focus-kicker">
            <p>{project.year}</p>
            <p>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </p>
          </div>
          <p className="focus-title" id={titleId}>
            {project.title}
          </p>
          <div className="focus-description" id={descriptionId}>
            {project.intro && <p>{project.intro}</p>}
            <p>{project.description}</p>
          </div>
          {(project.href || project.caseStudyHref) && (
            <div className="focus-actions">
              {project.href && (
                <a href={project.href} rel="noreferrer" target="_blank">
                  Visit project
                  <ArrowIcon />
                </a>
              )}
              {project.caseStudyHref && (
                <a
                  href={project.caseStudyHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  Read case study
                  <ArrowIcon />
                </a>
              )}
            </div>
          )}
          <div className="focus-project-navigation">
            <button onClick={onPreviousProject} type="button">
              <ChevronIcon direction="left" />
              <span>Previous project</span>
            </button>
            <button onClick={onNextProject} type="button">
              <span>Next project</span>
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="focus-media">
          <div
            className="focus-stage"
            onPointerLeave={resetStageTilt}
            onPointerMove={handleStagePointerMove}
            ref={stageRef}
          >
            <div
              className="focus-image-track"
              onScroll={handleTrackScroll}
              ref={trackRef}
            >
              {project.images.map((image, imageIndex) => (
                <div className="focus-slide" key={image}>
                  <div
                    className={`focus-image-card ${
                      imageIndex === activeImage ? "active" : ""
                    }`}
                  >
                    <img
                      alt={`${project.title} project screen ${imageIndex + 1} of ${project.images.length}`}
                      src={`/assets/${image}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            {project.images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  className="focus-image-control previous"
                  disabled={activeImage === 0}
                  onClick={() => goToImage(activeImage - 1)}
                  type="button"
                >
                  <ChevronIcon direction="left" />
                </button>
                <button
                  aria-label="Next image"
                  className="focus-image-control next"
                  disabled={activeImage === project.images.length - 1}
                  onClick={() => goToImage(activeImage + 1)}
                  type="button"
                >
                  <ChevronIcon direction="right" />
                </button>
              </>
            )}
          </div>

          <div className="focus-filmstrip">
            <p>
              {activeImage + 1} / {project.images.length}
            </p>
            <div className="focus-thumbnails">
              {project.images.map((image, imageIndex) => (
                <button
                  aria-label={`View image ${imageIndex + 1}`}
                  aria-pressed={imageIndex === activeImage}
                  key={image}
                  onClick={() => goToImage(imageIndex)}
                  type="button"
                >
                  <img alt="" src={`/assets/${image}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Project({
  index,
  onOpen,
  project,
}: {
  index: number
  onOpen: (index: number, trigger: HTMLElement) => void
  project: ProjectData
}) {
  const rowRef = useRef<HTMLElement>(null)
  const pointerStart = useRef({ x: 0, y: 0 })

  const openProject = () => {
    if (rowRef.current) onOpen(index, rowRef.current)
  }

  return (
    <article
      aria-haspopup="dialog"
      aria-label={`View ${project.title} project`}
      className="timeline-row project"
      onClick={(event) => {
        const distance = Math.hypot(
          event.clientX - pointerStart.current.x,
          event.clientY - pointerStart.current.y,
        )
        if (distance < 8) openProject()
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          openProject()
        }
      }}
      onPointerDown={(event) => {
        pointerStart.current = { x: event.clientX, y: event.clientY }
      }}
      ref={rowRef}
      role="button"
      tabIndex={0}
    >
      <p className="timeline-date">{project.year}</p>
      <div className="timeline-content">
        <div className="entry-heading">
          <div className="linked-title">
            <p>{project.title}</p>
            <FocusIcon />
          </div>
          <p className="mobile-date">{project.year}</p>
        </div>
        <div className="summary">
          {project.intro && <p>{project.intro}</p>}
          <p>{project.description}</p>
        </div>
        <div className="gallery">
          {project.images.map((image, index) => (
            <div
              className={`preview ${
                image === "aec00.png" ? "preview-cropped" : ""
              }`}
              key={image}
              style={
                {
                  "--desktop-width": `${project.widths[index]}px`,
                } as React.CSSProperties
              }
            >
              <img
                alt={`${project.title} screen ${index + 1} of ${project.images.length}`}
                src={`/assets/${image}`}
              />
            </div>
          ))}
        </div>
      </div>
      <span className="view-project-affordance">View project</span>
    </article>
  )
}

function Role({ role }: { role: typeof roles[number] }) {
  return (
    <article className="timeline-row role">
      <p className="timeline-date">{role.date}</p>
      <div className="timeline-content">
        <p className="mobile-role-date">{role.date}</p>
        <div className="linked-title">
          <p>{role.title}</p>
          <ArrowIcon />
        </div>
        <p className="muted">{role.location}</p>
        <div className="responsibilities">
          {role.bullets ? (
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : (
            <p>{role.description}</p>
          )}
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [selectedProjectIndex, setSelectedProjectIndex] =
    useState<number | null>(null)
  const projectTriggerRef = useRef<HTMLElement | null>(null)

  const openProject = (index: number, trigger: HTMLElement) => {
    projectTriggerRef.current = trigger
    setSelectedProjectIndex(index)
  }

  const closeProject = () => {
    setSelectedProjectIndex(null)
    window.requestAnimationFrame(() => projectTriggerRef.current?.focus())
  }

  const showPreviousProject = () => {
    setSelectedProjectIndex((current) => {
      if (current === null) return null
      return (current - 1 + projects.length) % projects.length
    })
  }

  const showNextProject = () => {
    setSelectedProjectIndex((current) => {
      if (current === null) return null
      return (current + 1) % projects.length
    })
  }

  return (
    <main className="page">
      <AnimatedCursor />
      <PortfolioControls />
      {selectedProjectIndex !== null && (
        <ProjectFocusView
          index={selectedProjectIndex}
          onClose={closeProject}
          onNextProject={showNextProject}
          onPreviousProject={showPreviousProject}
          project={projects[selectedProjectIndex]}
        />
      )}
      <div className="portfolio">
        <section className="introduction" id="about">
          <div className="profile">
            <img
              alt="A’wwal Muhammed Bello"
              className="portrait"
              src="/assets/1e513.png"
            />
            <div>
              <p className="name">A’wwal Muhammed Bello</p>
              <p className="muted">Product Designer</p>
              <p className="muted">/ba_wwal/. he/him</p>
            </div>
          </div>
          <div className="about">
            <p className="section-title">About</p>
            <p>
              I'm a product designer who turns complex, rule-heavy processes
              into simple products people trust. I've designed workflows for a
              High Court's case management system, an EdTech help centre for
              thousands of young learners, and a fintech tool built on the
              Central Bank of Nigeria's refund rules.
            </p>
            <p>
              I was called to the Nigerian Bar in 2026, so law and regulation
              are part of how I design. I also build: I prototype and ship with
              Claude Code to understand what happens after handoff and work
              better with developers.
            </p>
          </div>
          <SocialCallout />
        </section>

        <section id="projects">
          <p className="section-title">Projects</p>
          <div className="collection">
            {projects.map((project, index) => (
              <Project
                index={index}
                key={project.slug}
                onOpen={openProject}
                project={project}
              />
            ))}
          </div>
        </section>

        <section id="experience">
          <p className="section-title">Work Experience</p>
          <div className="collection roles">
            {roles.map((role) => (
              <Role key={role.title} role={role} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-title">Contact</p>
          <div className="contact-list">
            {contacts.map((contact) => (
              <div className="contact-row" key={contact.label}>
                <p className="contact-label">{contact.label}</p>
                <div className="contact-value">
                  {contact.href ? (
                    <a href={contact.href} rel="noreferrer" target="_blank">
                      {contact.value}
                    </a>
                  ) : (
                    <p>{contact.value}</p>
                  )}
                  <ArrowIcon contact />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
