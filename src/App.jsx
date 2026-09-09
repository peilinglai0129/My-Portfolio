import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About', emoji: '📌' },
  { href: '#projects', label: 'Projects', emoji: '🛠' },
  { href: '#others', label: 'Others', emoji: '📸' },
  { href: '#contact', label: 'Contact', emoji: '✉️' },
]

const SKILLS = [
  { name: 'Python', className: 'bg-amber-50 text-amber-800' },
  { name: 'R', className: 'bg-rose-50 text-rose-800' },
  { name: 'Data Analysis', className: 'bg-emerald-50 text-emerald-800' },
  { name: 'Statistics', className: 'bg-sky-50 text-sky-800' },
  { name: 'SQL', className: 'bg-violet-50 text-violet-800' },
  { name: 'Machine Learning', className: 'bg-orange-50 text-orange-800' },
  { name: 'Excel', className: 'bg-lime-50 text-lime-800' },
  { name: 'Tableau', className: 'bg-fuchsia-50 text-fuchsia-800' },
]

const MILESTONES = [
  {
    year: '2026',
    title: 'Research assistant era',
    detail: 'Helping tidy survey data, write reproducible notes, and keep the lab coffee warm.',
  },
  {
    year: '2025',
    title: 'Statistics, year two',
    detail: 'Probability, linear models, and late-night plotting sessions in the library corner.',
  },
  {
    year: '2024',
    title: 'First day on campus',
    detail: 'Packed a film camera, a notebook, and a little too much curiosity.',
  },
]

const PROJECTS = [
  {
    title: 'Campus Pulse',
    description: 'A soft little dashboard of student wellbeing trends — filters, charts, and cozy color stories.',
    tags: ['Python', 'Pandas', 'Plotly'],
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    title: 'Regression Notebook',
    description: 'Housing prices, residual plots, and an R Markdown report that actually looks readable.',
    tags: ['R', 'tidyverse', 'Stats'],
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Study Session Sorter',
    description: 'A tiny classifier that files lecture notes into topics before midterms arrive.',
    tags: ['sklearn', 'NLP', 'SQL'],
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
  },
]

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    alt: 'Latte on a wooden cafe table',
    caption: 'morning brew',
    rotate: '-rotate-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    alt: 'Cat looking toward the camera',
    caption: 'studio cat',
    rotate: 'rotate-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    alt: 'Warm campus architecture',
    caption: 'golden hour campus',
    rotate: '-rotate-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    alt: 'Vintage film camera',
    caption: 'weekend rolls',
    rotate: 'rotate-1',
  },
]

const TYPEWRITER_MESSAGE = 'Leaving a note for the next visitor... ☕'

function Typewriter({ text, speed = 42 }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let index = 0
    const id = window.setInterval(() => {
      index += 1
      setDisplayed(text.slice(0, index))
      if (index >= text.length) window.clearInterval(id)
    }, speed)

    return () => window.clearInterval(id)
  }, [text, speed])

  return (
    <p className="font-serif text-3xl leading-snug text-zinc-800 italic sm:text-4xl">
      {displayed}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[3px] animate-pulse bg-amber-700/80 align-middle" />
    </p>
  )
}

function Waveform({ active }) {
  const delays = ['0ms', '140ms', '80ms', '200ms', '40ms', '160ms', '90ms']

  return (
    <div className="flex h-8 items-end gap-[3px]" aria-hidden="true">
      {delays.map((delay, index) => (
        <span
          key={delay + index}
          className={`wave-bar w-[3px] rounded-full bg-amber-700/70 ${active ? '' : '[animation-play-state:paused]'}`}
          style={{ height: `${10 + ((index * 7) % 18)}px`, animationDelay: delay }}
        />
      ))}
    </div>
  )
}

function App() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F4EFE6] text-[#2C241E] antialiased selection:bg-[#D9C3A5] selection:text-[#1A1410]">
  {/* Vintage paper warmth & soft vignette */}
  <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(68,50,34,0.06)_100%)]" />
  
  {/* Warm sepia atmospheric glows */}
  <div className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-[#EAD7C0]/60 blur-3xl" />
  <div className="pointer-events-none absolute right-4 top-[480px] h-96 w-96 rounded-full bg-[#DFCEB5]/50 blur-3xl" />
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="flex max-w-[calc(100%-0.5rem)] items-center gap-1 overflow-x-auto rounded-full border border-zinc-200/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:gap-2 sm:px-6 sm:py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full px-2.5 py-1.5 text-[13px] text-zinc-600 transition hover:bg-white/80 hover:text-zinc-800 sm:px-3"
            >
              <span className="mr-1.5">{link.emoji}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-5 pt-28 pb-20 sm:px-8">
        <section id="about" className="scroll-mt-28">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-amber-200/70 via-rose-100/80 to-emerald-100/70 blur-[2px]" />
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80"
                alt="Portrait placeholder"
                className="relative h-36 w-36 rounded-full object-cover ring-4 ring-[#FAF8F5] sm:h-44 sm:w-44"
              />
              <span className="absolute -right-2 bottom-2 rounded-full border border-zinc-200/80 bg-white/90 px-2 py-1 text-xs shadow-sm">
                🧋 student
              </span>
            </div>

            <p className="mt-7 text-sm text-zinc-500">hi, i’m Pei Ling · stats major, little notes collector</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-zinc-800 sm:text-5xl">
              a cozy corner of campus life, data, and film photos
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-zinc-500">
              I like turning messy datasets into something you can actually read — then celebrating with
              a latte, a cat video, and one more roll of film. This page is my little 小红书 scrapbook.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${skill.className}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <ol className="mx-auto mt-14 max-w-2xl">
            {MILESTONES.map((item, index) => (
              <li key={item.year} className="relative grid grid-cols-[72px_1fr] gap-5 pb-8 sm:grid-cols-[88px_1fr]">
                {index < MILESTONES.length - 1 && (
                  <span className="absolute top-7 left-[13px] h-[calc(100%-1.25rem)] w-px bg-zinc-200/80" />
                )}
                <div className="relative pt-0.5">
                  <span className="absolute top-1.5 left-[10px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="pl-6 text-sm text-zinc-500">{item.year}</span>
                </div>
                <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 text-left shadow-sm backdrop-blur-sm">
                  <h2 className="text-sm font-semibold text-zinc-800">{item.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="scroll-mt-28 mt-8 py-16">
          <div className="text-center">
            <p className="text-sm text-zinc-500">🛠 little builds</p>
            <h2 className="mt-2 font-serif text-3xl text-zinc-800 sm:text-4xl">projects on my desk</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:shadow-md ${
                  project.featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:items-stretch' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                      project.featured ? 'h-52 md:h-full' : 'h-44'
                    }`}
                  />
                </div>
                <div className="flex flex-col p-5">
                  <h3 className="text-lg font-semibold text-zinc-800">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-zinc-100/80 px-2.5 py-0.5 text-[11px] text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 px-3 py-2 text-xs font-medium text-zinc-700 transition-all hover:shadow-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-amber-100 px-3 py-2 text-xs font-medium text-amber-900 transition-all hover:bg-amber-200"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="others" className="scroll-mt-28 py-16">
          <div className="text-center">
            <p className="text-sm text-zinc-500">📸 off-duty frames</p>
            <h2 className="mt-2 font-serif text-3xl text-zinc-800 sm:text-4xl">life between lectures</h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className={`rounded-md border border-zinc-200/80 bg-white p-2 pb-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${photo.rotate}`}
              >
                <img src={photo.src} alt={photo.alt} className="aspect-[3/4] w-full object-cover" />
                <figcaption className="mt-3 text-center font-serif text-sm text-zinc-500 italic">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <aside className="mx-auto mt-12 flex max-w-xl items-center gap-4 rounded-2xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
            <div className="relative shrink-0">
              <div
                className={`h-20 w-20 rounded-full bg-[conic-gradient(from_120deg,_#1c1917,_#78716c,_#1c1917,_#44403c,_#1c1917)] shadow-inner ${
                  isPlaying ? 'animate-record' : ''
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80"
                  alt=""
                  className="absolute inset-[22%] rounded-full object-cover"
                />
                <span className="absolute inset-[46%] rounded-full bg-[#FAF8F5]" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-medium tracking-wide text-zinc-500">
                {isPlaying ? 'now playing' : 'paused'} · favorite mix
              </p>
              <h3 className="truncate text-base font-semibold text-zinc-800">late library hours</h3>
              <p className="text-sm text-zinc-500">rain, lo-fi, and one more problem set</p>
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying((playing) => !playing)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-900"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <span className="flex gap-0.5">
                      <span className="h-2.5 w-[2px] bg-amber-900" />
                      <span className="h-2.5 w-[2px] bg-amber-900" />
                    </span>
                  ) : (
                    <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-amber-900" />
                  )}
                </button>
                <Waveform active={isPlaying} />
              </div>
            </div>
          </aside>
        </section>

        <section id="contact" className="scroll-mt-28 py-16 text-center">
          <p className="text-sm text-zinc-500">✉️ guest book</p>
          <div className="mx-auto mt-5 max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/80 px-6 py-10 shadow-sm backdrop-blur-sm">
            <Typewriter text={TYPEWRITER_MESSAGE} />
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-rose-50 px-5 py-2.5 text-sm text-rose-800 transition-all hover:shadow-md"
              >
                📸 Instagram / 小红书
              </a>
              <a
                href="mailto:jordan.lee@university.edu"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-amber-50 px-5 py-2.5 text-sm text-amber-800 transition-all hover:shadow-md"
              >
                ✉️ Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-emerald-50 px-5 py-2.5 text-sm text-emerald-800 transition-all hover:shadow-md"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative pb-12 text-center text-xs text-zinc-500">
        saved to favorites · {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
