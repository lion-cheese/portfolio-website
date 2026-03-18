import portraitImage from "../portrait.jpg";

const RESUME_URL = "/resume.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/liancheng-guo/";

const experiences = [
  {
    role: "AI Software Engineering",
    company: "Correctional Service Canada",
    period: "Jan 2026 - May 2026",
    summary:
      "Description",
  },
  {
    role: "Software Engineering",
    company: "Sofp Design Inc",
    period: "Jan 2025 - Apr 2025",
    summary:
      "Description",
  },
  {
    role: "Technical Analyst",
    company: "Multimatic Inc",
    period: "May 2024 - Aug 2024",
    summary:
      "Description",
  },
  {
    role: "Software QC/QA",
    company: "Interaptix Augmented Reality",
    period: "Sep 2023 - Dec 2023",
    summary:
      "Description",
  },
  {
    role: "IT Support Assistant",
    company: "University of Waterloo",
    period: "Jan 2023 - Apr 2023",
    summary:
      "Description",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React, showcasing my professional experience and projects.",
    tools: "Next.js, TypeScript, Tailwind CSS",
    githubUrl: "https://github.com/lion-cheese/portfolio-website",
    liveUrl: "https://project-1.example.com",
  },
  {
    name: "Project 2",
    description:
      "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-2",
    liveUrl: "https://project-2.example.com",
  },
  {
    name: "Project 3",
    description:
      "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-3",
    liveUrl: "https://project-3.example.com",
  },
  {
    name: "Project 4",
    description:
      "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-4",
    liveUrl: "https://project-4.example.com",
  },
  {
    name: "Project 5",
    description:
      "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-5",
    liveUrl: "https://project-5.example.com",
  },
  {
    name: "Project 6",
    description:
      "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-6",
    liveUrl: "https://project-6.example.com",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-[var(--foreground)]">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(244,249,255,0.56)_0%,_rgba(207,228,255,0.22)_45%,_rgba(183,211,248,0.18)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.24),_transparent_54%),linear-gradient(180deg,_rgba(59,130,246,0.12),_transparent)]" />
      <div className="absolute right-[-8rem] top-20 -z-10 h-80 w-80 rounded-full bg-[rgba(147,197,253,0.28)] blur-3xl" />
      <div className="absolute left-[-5rem] top-[30rem] -z-10 h-72 w-72 rounded-full bg-[rgba(29,78,216,0.16)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[28rem] bg-[linear-gradient(180deg,_transparent,_rgba(96,165,250,0.16))]" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <header className="mb-20 flex items-center justify-between border-b border-[var(--border)] pb-5">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Portfolio</p>
          <nav className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="#experience" className="transition hover:text-[var(--accent)]">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-[var(--accent)]">
              Projects
            </a>
          </nav>
        </header>

        <div className="grid flex-1 gap-14 lg:grid-cols-[1.55fr_0.65fr] lg:items-end">
          <section id="intro" className="max-w-none">
            <p className="mb-5 text-base font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-lg">
              About Me
            </p>
            <h1 className="max-w-5xl text-4xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
              Hi, My name is Lian Cheng.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I’m a Computer Engineering student at the University of Waterloo with interests in 
              software engineering, AI, and full stack development. I enjoy building useful applications 
              with a focus on clean design, practical functionality, and continuous improvement. 
              Through academic, personal, and professional projects, I’m growing my skills in building 
              software that solves real problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--surface)] transition hover:bg-[#1e40af]"
              >
                Resume
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <aside className="flex lg:justify-end lg:pt-24">
            <div className="relative flex min-h-[26rem] w-full items-center justify-center lg:justify-end">
              <img
                src={portraitImage.src}
                alt="Portrait"
                className="aspect-[4/5] w-full max-w-[19rem] rounded-[1rem] object-cover object-top"
              />
            </div>
          </aside>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mb-12 border-b border-[var(--border)] pb-6">
          <p className="text-base font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-lg">
            Work Experience
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="group grid gap-5 rounded-[1rem] border border-[var(--border)] bg-[color:rgba(244,249,255,0.82)] p-6 shadow-[0_20px_55px_rgba(29,78,216,0.06)] backdrop-blur transition hover:-translate-y-1 hover:border-[var(--accent)] md:grid-cols-[0.9fr_2fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-2xl font-medium">{experience.role}</h3>
                <p className="mt-2 text-base text-[var(--muted)]">{experience.company}</p>
              </div>
              <p className="text-base leading-8 text-[var(--muted)]">{experience.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-12"
      >
        <div className="mb-12 border-b border-[var(--border)] pb-6">
          <p className="text-base font-semibold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-lg">
            Projects
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex min-h-[22rem] flex-col rounded-[1rem] border border-[var(--border)] p-7 transition hover:-translate-y-1 hover:border-[var(--accent)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244, 249, 255, 0.98), rgba(200, 222, 250, 0.92))",
              }}
            >
              <div className="flex-1">
                <h3 className="mt-4 text-3xl leading-tight font-medium tracking-[-0.03em]">
                  {project.name}
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    Tools
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {project.tools}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--surface)] transition hover:bg-[#1e40af]"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Open Link
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
