import portraitImage from "../portrait.jpg";

const RESUME_URL = "/resume.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/liancheng-guo/";

const experiences = [
  {
    role: "AI Software Engineering",
    company: "Correctional Service Canada",
    period: "Jan 2026 - May 2026",
    summary: [
      "Contributed to the development of a RAG-based AI chatbot web application using Azure services to deliver document-grounded responses, reducing frontline document lookup from minutes to seconds.",
      "Developed backend automation for document metadata tagging, storage updates, and indexing workflows, reducing manual update time from over 2 hours to under 5 minutes while enabling metadata-based retrieval filtering.",
      "Optimized RAG prompt and retrieval behavior by analyzing token usage, evaluating chunking strategies, and validating response quality through targeted test scenarios.",
      "Improved chatbot front-end functionality by updating HTML, CSS, and JavaScript components, integrating API calls, and refining the user interface for better usability.",
    ],
  },
  {
    role: "AI Software Engineering",
    company: "Sofp Design Inc",
    period: "Jan 2025 - Apr 2025",
    summary: [
      "Implemented Transformer model components in Python using TensorFlow and Keras, including positional encodings, encoder-decoder blocks, multi-head attention, and softmax-based sequence prediction.",
      "Developed a YOLOv2-based vehicle detection pipeline with filtering, non-max suppression, anchor boxes, and IoU evaluation to validate object detection performance on test images.",
      "Prepared large-scale datasets for training, fine-tuning, and evaluation workflows, improving data consistency for language model and computer vision experiments.",
      "Built an LLM knowledge base using Ollama, LangChain, and Chroma, enabling retrieval-based Q&A experimentation and improving training efficiency by 30%."
    ],
  },
  {
    role: "Technical Analyst",
    company: "Multimatic Inc",
    period: "May 2024 - Aug 2024",
    summary: [
      "Utilized PowerShell and Microsoft Intune to update software on 1000+ enterprise devices, using Lansweeper to verify software correctness.",
      "Built jump servers from scratch using VMware vSphere and maintained 200+ servers to support network, storage, memory, and CPU resource allocation.",
      "Collaborated with 19 corporate divisions across North America, Europe, and Asia to resolve IT issues and assist with server projects.",
      "Worked with IT leadership to collect, analyze, and document 25+ IT processes, driving workflow efficiency improvements and cross-departmental alignment."
    ],
  },
  {
    role: "Software QA",
    company: "Interaptix Augmented Reality",
    period: "Sep 2023 - Dec 2023",
    summary: [
      "Developed and maintained automated UI and regression tests using pytest and Selenium, validating 20+ test scenarios and reducing manual QA effort by over 50%.",
      "Validated full-stack functionality across web, iOS, and AR workflows, covering 100+ regression test cases and reducing release-blocking compatibility issues.",
      "Collaborated with developers and product designers to validate 3 major releases and 4 hotfixes, reducing post-release defects by 25% through structured test plans and issue tracking."
    ],
  },
  {
    role: "IT Support Assistant",
    company: "University of Waterloo",
    period: "Jan 2023 - Apr 2023",
    summary: [
      "Designed and built an office tracking device using Arduino and circuit components, integrating it into office infrastructure to monitor client visits and improve visitor tracking efficiency.",
      "Developed webpages for the faculty website using HTML, CSS, and JavaScript, featuring video tutorials and instructional guides that increased engagement among 150+ users.",
      "Troubleshot and resolved 50+ software and hardware issues for professors and students."
    ],
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
    description: "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-2",
    liveUrl: "https://project-2.example.com",
  },
  {
    name: "Project 3",
    description: "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-3",
    liveUrl: "https://project-3.example.com",
  },
  {
    name: "Project 4",
    description: "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-4",
    liveUrl: "https://project-4.example.com",
  },
  {
    name: "Project 5",
    description: "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-5",
    liveUrl: "https://project-5.example.com",
  },
  {
    name: "Project 6",
    description: "Description",
    tools: "TBD",
    githubUrl: "https://github.com/your-username/project-6",
    liveUrl: "https://project-6.example.com",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden px-4 pb-18 pt-4 text-[var(--foreground)] sm:px-6 sm:pb-20 sm:pt-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,_rgba(4,11,22,0.18)_0%,_rgba(4,11,22,0.78)_46%,_rgba(4,11,22,0.98)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.3),_transparent_58%)]" />
      <div className="absolute left-[-9rem] top-24 -z-20 h-[24rem] w-[24rem] rounded-full bg-[rgba(56,189,248,0.14)] blur-[110px]" />
      <div className="absolute right-[-7rem] top-12 -z-20 h-[22rem] w-[22rem] rounded-full bg-[rgba(59,130,246,0.22)] blur-[110px]" />
      <div className="absolute right-[16%] top-[38rem] -z-20 h-[18rem] w-[18rem] rounded-full bg-[rgba(20,184,166,0.12)] blur-[120px]" />

      <section className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,20,34,0.9),rgba(8,15,27,0.78))] shadow-[0_40px_120px_rgba(2,8,23,0.55)] backdrop-blur-xl">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.1),_transparent_28%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(148,197,255,0.55),transparent)]" />

            <div className="relative px-6 pb-12 pt-8 sm:px-10 sm:pb-14 lg:px-12 lg:pt-10">
              <header className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 sm:mb-12">
                <p className="text-xs font-medium uppercase tracking-[0.36em] text-[var(--muted)] sm:text-sm">
                  Portfolio
                </p>
                <nav className="flex gap-6 text-sm text-[var(--muted)]">
                  <a href="#experience" className="transition duration-200 hover:text-[var(--foreground)]">
                    Experience
                  </a>
                  <a href="#projects" className="transition duration-200 hover:text-[var(--foreground)]">
                    Projects
                  </a>
                </nav>
              </header>

              <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-14">
                <section id="intro" className="max-w-none">
                  <div className="inline-flex items-center rounded-full border border-[rgba(96,165,250,0.24)] bg-[rgba(96,165,250,0.1)] px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-[var(--accent)]">
                    About Me
                  </div>
                  <h1 className="mt-6 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-5xl lg:text-[4.35rem]">
                    Hi, My name is Lian Cheng.
                  </h1>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                    I'm a Computer Engineering student at the University of Waterloo with interests in
                    software engineering, AI, and full stack development. I enjoy building useful
                    applications with a focus on clean design, practical functionality, and continuous
                    improvement. Through academic, personal, and professional projects, I'm growing my
                    skills in building software that solves real problems.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={RESUME_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-[rgba(96,165,250,0.3)] bg-[linear-gradient(180deg,_rgba(96,165,250,0.9),_rgba(37,99,235,0.88))] px-6 py-3 text-sm font-medium text-[#f8fbff] shadow-[0_18px_40px_rgba(37,99,235,0.34)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(37,99,235,0.42)]"
                    >
                      Resume
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-[var(--foreground)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(96,165,250,0.34)] hover:bg-white/10"
                    >
                      LinkedIn
                    </a>
                  </div>
                </section>

                <aside className="flex lg:justify-end">
                  <div className="relative mx-auto flex w-full max-w-[22rem] items-center justify-center lg:mx-0">
                    <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,_rgba(96,165,250,0.26),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.09),_rgba(255,255,255,0.03))] blur-2xl" />
                    <div className="relative w-full rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,38,0.88),rgba(8,14,24,0.72))] p-3 shadow-[0_26px_70px_rgba(2,8,23,0.55)] backdrop-blur-xl">
                      <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(165,216,255,0.8),transparent)]" />
                      <img
                        src={portraitImage.src}
                        alt="Portrait"
                        className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
                      />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto mt-8 w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[rgba(8,14,24,0.72)] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,23,0.34)] backdrop-blur-xl sm:mt-10 sm:px-10 sm:py-12 lg:px-12"
      >
        <div className="mb-10 border-b border-white/10 pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[var(--accent)] sm:text-sm">
            Work Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Building through internships and engineering roles
          </h2>
        </div>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="group grid gap-5 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,28,46,0.82),rgba(10,18,31,0.78))] p-6 shadow-[0_18px_42px_rgba(2,8,23,0.28)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-[rgba(96,165,250,0.28)] hover:shadow-[0_26px_60px_rgba(15,23,42,0.38)] md:grid-cols-[0.9fr_2fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]/80">
                  {experience.period}
                </p>
                <h3 className="mt-3 text-2xl font-medium text-[var(--foreground)]">
                  {experience.role}
                </h3>
                <p className="mt-2 text-base text-[var(--muted)]">{experience.company}</p>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {experience.summary.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(180deg,_var(--accent),_var(--accent-strong))] shadow-[0_0_14px_rgba(56,189,248,0.45)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto mt-8 w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[rgba(8,14,24,0.72)] px-6 py-10 shadow-[0_28px_90px_rgba(2,8,23,0.34)] backdrop-blur-xl sm:mt-10 sm:px-10 sm:py-12 lg:px-12"
      >
        <div className="mb-10 border-b border-white/10 pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[var(--accent)] sm:text-sm">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Selected work and experiments
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex min-h-[22rem] flex-col rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,28,46,0.88),rgba(10,18,31,0.82))] p-7 shadow-[0_18px_42px_rgba(2,8,23,0.28)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(96,165,250,0.28)] hover:shadow-[0_26px_60px_rgba(15,23,42,0.38)]"
            >
              <div className="flex-1">
                <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[var(--accent)]">
                  Featured Project
                </div>
                <h3 className="mt-5 text-3xl leading-tight font-medium tracking-[-0.03em] text-[var(--foreground)]">
                  {project.name}
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-6 rounded-[1rem] border border-white/8 bg-black/10 p-4">
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
                  className="rounded-xl border border-[rgba(96,165,250,0.3)] bg-[linear-gradient(180deg,_rgba(96,165,250,0.9),_rgba(37,99,235,0.88))] px-4 py-2.5 text-sm font-medium text-[#f8fbff] shadow-[0_14px_34px_rgba(37,99,235,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(37,99,235,0.36)]"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/12 bg-white/6 px-4 py-2.5 text-sm font-medium text-[var(--foreground)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(96,165,250,0.34)] hover:bg-white/10"
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
