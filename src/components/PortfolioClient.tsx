"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import {
  RiArrowRightUpLine,
  RiArrowUpLine,
  RiAwardLine,
  RiBookOpenLine,
  RiBriefcase4Line,
  RiCheckLine,
  RiCloseLine,
  RiCodeSSlashLine,
  RiCompass3Line,
  RiFileCopyLine,
  RiFolderOpenLine,
  RiGithubFill,
  RiGlobalLine,
  RiGooglePlayFill,
  RiHardDrive2Line,
  RiLayoutGridLine,
  RiLinkedinBoxFill,
  RiMailSendLine,
  RiMapPin2Line,
  RiMoonClearLine,
  RiMusic2Line,
  RiPhoneLine,
  RiSearchLine,
  RiShieldStarLine,
  RiSmartphoneLine,
  RiSunLine,
  RiTerminalBoxLine,
  RiVolumeUpLine,
} from "react-icons/ri";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  type ProjectItem,
  type ProjectLink,
} from "@/data/portfolio";
import ProjectBlueprint from "./ProjectBlueprint";

const VERIFIED_DIRECTORY = [
  {
    code: "DIR-01",
    name: "Koyo Official Platform (2026 Overhaul)",
    surface: "Production Web",
    target: "koyoapp.com",
    url: "https://koyoapp.com/",
    kind: "web" as const,
  },
  {
    code: "DIR-02",
    name: "Koyo — Learn African Languages",
    surface: "Google Play Store",
    target: "com.koyo.koyoapp",
    url: "https://play.google.com/store/apps/details?id=com.koyo.koyoapp",
    kind: "playstore" as const,
  },
  {
    code: "DIR-03",
    name: "Jaraaf Client Web Application",
    surface: "Vercel Deployment",
    target: "jaraaf-frontend.vercel.app",
    url: "https://jaraaf-frontend.vercel.app/",
    kind: "web" as const,
  },
  {
    code: "DIR-04",
    name: "Jaraaf Operations & Admin Dashboard",
    surface: "Vercel Admin Suite",
    target: "jaraaf-admin-dashboard.vercel.app",
    url: "https://jaraaf-admin-dashboard.vercel.app/",
    kind: "admin" as const,
  },
  {
    code: "DIR-05",
    name: "Ceproam Mobile Application",
    surface: "Google Play Store",
    target: "com.ceproam.com",
    url: "https://play.google.com/store/apps/details?id=com.ceproam.com",
    kind: "playstore" as const,
  },
  {
    code: "DIR-06",
    name: "DuvicDrop & Duvic Rider (Software Solutions Dev)",
    surface: "Android Play Store / APK",
    target: "Software Solutions Dev · Cephas ICT Hub",
    url: "https://play.google.com/store/apps/details?id=com.ceproam.com",
    kind: "playstore" as const,
  },
  {
    code: "DIR-07",
    name: "LearnVault Knowledge Platform",
    surface: "Render Production",
    target: "learnvault-ia4s.onrender.com",
    url: "https://learnvault-ia4s.onrender.com/",
    kind: "web" as const,
  },
  {
    code: "DIR-08",
    name: "G&G Restaurant Digital Storefront",
    surface: "Render Production",
    target: "gandg-restaurant.onrender.com",
    url: "https://gandg-restaurant.onrender.com/",
    kind: "web" as const,
  },
  {
    code: "DIR-09",
    name: "Android Mobile Build / Project Release I",
    surface: "Google Drive APK / Archive",
    target: "drive.google.com · 1qHm72jA",
    url: "https://drive.google.com/file/d/1qHm72jAf9r3GVYGlENblxnex8w6x3rXM/view?usp=drive_link",
    kind: "drive" as const,
  },
  {
    code: "DIR-10",
    name: "Android Mobile Build / Project Release II",
    surface: "Google Drive APK / Archive",
    target: "drive.google.com · 1Ptlk6Lt",
    url: "https://drive.google.com/file/d/1Ptlk6LtjiUPbcPZa6EGOFJ1rgMO26KSv/view?usp=drivesdk",
    kind: "drive" as const,
  },
  {
    code: "DIR-11",
    name: "GitHub Engineering Profile & Source Code",
    surface: "GitHub Profile",
    target: "github.com/Ayanyiola-Enoch",
    url: "https://github.com/Ayanyiola-Enoch",
    kind: "github" as const,
  },
  {
    code: "DIR-12",
    name: "LinkedIn Professional Network",
    surface: "LinkedIn Profile",
    target: "linkedin.com/in/ayanyiolaenoch",
    url: "https://www.linkedin.com/in/ayanyiolaenoch/",
    kind: "web" as const,
  },
];

function LinkKindIcon({ kind }: { kind: ProjectLink["kind"] }) {
  switch (kind) {
    case "playstore":
      return <RiGooglePlayFill className="size-3.5 shrink-0" aria-hidden="true" />;
    case "admin":
      return <RiLayoutGridLine className="size-3.5 shrink-0" aria-hidden="true" />;
    case "drive":
      return <RiHardDrive2Line className="size-3.5 shrink-0" aria-hidden="true" />;
    case "github":
      return <RiGithubFill className="size-3.5 shrink-0" aria-hidden="true" />;
    default:
      return <RiGlobalLine className="size-3.5 shrink-0" aria-hidden="true" />;
  }
}

export default function PortfolioClient() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [projectFilter, setProjectFilter] = useState<"all" | "mobile" | "web" | "systems">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expFilter, setExpFilter] = useState<"all" | "engineering" | "leadership">("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [lagosTime, setLagosTime] = useState<string>("WAT · UTC+1");
  const [activeNote, setActiveNote] = useState<string | null>(null);

  // Inquiry form state
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryScope, setInquiryScope] = useState("Mobile Application (React Native / Expo)");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const dialogTitleId = useId();
  const searchInputId = useId();
  const nameInputId = useId();
  const scopeInputId = useId();
  const messageInputId = useId();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setLagosTime(`${formatted} WAT`);
      } catch {
        setLagosTime("WAT · UTC+1");
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const openProjectModal = (project: ProjectItem) => {
    setActiveProject(project);
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  const closeProjectModal = () => {
    if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
    setActiveProject(null);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2600);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phone);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2600);
    } catch {
      window.location.href = PROFILE.phoneHref;
    }
  };

  // Subtle Web Audio API synthesizer for the Acoustic Discipline card (honoring Enoch's music interest)
  const playHarmonicTone = (label: string, freq: number) => {
    setActiveNote(label);
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.65);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.68);
    } catch {
      // AudioContext blocked or unsupported
    }
    window.setTimeout(() => setActiveNote(null), 600);
  };

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesGroup = projectFilter === "all" || project.filterGroup === projectFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.summary.toLowerCase().includes(q) ||
      project.techStack.some((t) => t.toLowerCase().includes(q)) ||
      project.packageOrDomain.toLowerCase().includes(q);
    return matchesGroup && matchesSearch;
  });

  const filteredExperiences = EXPERIENCES.filter(
    (item) => expFilter === "all" || item.track === expFilter
  );

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Engineering Inquiry: ${inquiryScope} — from ${inquiryName || "Prospective Collaborator"}`
    );
    const body = encodeURIComponent(
      `Hello Enoch,\n\nName / Organization: ${inquiryName || "N/A"}\nProject Scope: ${inquiryScope}\n\nDetails:\n${
        inquiryMessage || "I would love to discuss a frontend web or mobile engineering role/project with you."
      }\n`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-dvh bg-[var(--surface-paper)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-white">
      {/* Skip link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Centralized polite live region for clipboard announcements */}
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {copiedEmail ? `Copied ${PROFILE.email} to clipboard.` : ""}
        {copiedPhone ? `Copied ${PROFILE.phone} to clipboard.` : ""}
      </div>

      {/* Top Architectural Specification Header */}
      <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--surface-paper)]/92 backdrop-blur-md">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Brand Monogram & Identity */}
            <div className="flex items-center gap-4">
              <a
                href="#top"
                className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                <span className="flex size-9 items-center justify-center border border-[var(--border-strong)] bg-[var(--surface-elevated)] font-mono text-xs font-bold tracking-widest text-[var(--text-primary)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                  {PROFILE.monogram}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                    {PROFILE.name}
                  </span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-[var(--text-muted)]">
                    Frontend &amp; Mobile Engineer
                  </span>
                </div>
              </a>

              <div className="hidden xl:flex items-center gap-2 border-l border-[var(--border-hairline)] pl-4 font-mono text-[0.6875rem] text-[var(--text-muted)]">
                <RiMapPin2Line className="size-3.5 text-[var(--accent)]" aria-hidden="true" />
                <span>NG // {lagosTime}</span>
              </div>
            </div>

            {/* Primary Navigation */}
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-1 lg:gap-2 font-mono text-xs" role="list">
                {[
                  { num: "01", label: "Works", href: "#works" },
                  { num: "02", label: "Index", href: "#directory" },
                  { num: "03", label: "Experience", href: "#experience" },
                  { num: "04", label: "Credentials", href: "#credentials" },
                  { num: "05", label: "Contact", href: "#contact" },
                ].map((nav) => (
                  <li key={nav.href}>
                    <a
                      href={nav.href}
                      className="inline-flex min-h-9 items-center gap-1.5 px-3 py-1.5 text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)]"
                    >
                      <span className="text-[var(--accent)]">{nav.num}.</span>
                      <span>{nav.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Actions: Theme Switcher & Direct Contact */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex min-h-9 min-w-9 items-center justify-center gap-2 border border-[var(--border-hairline)] bg-[var(--surface-elevated)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                aria-label={
                  theme === "dark"
                    ? "Switch to warm paper light theme"
                    : "Switch to carbon ink dark theme"
                }
              >
                {theme === "dark" ? (
                  <>
                    <RiSunLine className="size-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span className="hidden sm:inline">PAPER</span>
                  </>
                ) : (
                  <>
                    <RiMoonClearLine className="size-3.5 text-[var(--accent)]" aria-hidden="true" />
                    <span className="hidden sm:inline">CARBON</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex min-h-9 items-center gap-1.5 border border-[var(--accent)] bg-[var(--accent)] px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-opacity hover:opacity-90"
              >
                <RiMailSendLine className="size-3.5" aria-hidden="true" />
                <span>Hire / Inquire</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[1360px] px-4 sm:px-8">
        {/* =========================================================
            HERO SECTION — ARCHITECTURAL MONOGRAPH
        ========================================================= */}
        <section
          id="top"
          className="border-x border-b border-[var(--border-hairline)] pt-10 pb-14 sm:pt-16 sm:pb-20"
        >
          {/* Top Index Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-hairline)] px-6 pb-6 sm:px-10">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              <span className="inline-block size-2 rounded-full bg-[var(--accent)]" />
              <span>{PROFILE.availability}</span>
            </div>
            <div className="font-mono text-xs text-[var(--text-muted)] tabular-nums">
              PORTFOLIO EDITION // 2026 · LAUTECH B.TECH CS (2:1)
            </div>
          </div>

          {/* Main 12-Column Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left 8 Columns: Editorial Statement */}
            <div className="lg:col-span-8 p-6 sm:p-10 lg:border-r border-[var(--border-hairline)] flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
                  AYANYIOLA ENOCH — SOFTWARE ENGINEER (WEB &amp; MOBILE)
                </p>
                <h1 className="hero-heading text-[clamp(2.25rem,4.6vw,4.35rem)] font-semibold tracking-tight leading-[1.03] text-[var(--text-primary)]">
                  Building tactile{" "}
                  <span className="font-editorial italic font-normal text-[var(--accent)]">
                    mobile applications
                  </span>{" "}
                  and resilient web systems for real-world scale.
                </h1>
                <p className="mt-6 max-w-[66ch] text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] pretty-copy">
                  {PROFILE.summary}
                </p>
              </div>

              {/* Action Buttons & Social Proof */}
              <div className="mt-10 pt-8 border-t border-[var(--border-hairline)] flex flex-wrap items-center gap-3">
                <a
                  href="#works"
                  className="inline-flex min-h-11 items-center gap-2 bg-[var(--text-primary)] px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--surface-paper)] transition-transform hover:-translate-y-0.5"
                >
                  <span>Explore Selected Works (08)</span>
                  <RiArrowRightUpLine className="size-4" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-4 py-2.5 font-mono text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
                >
                  <RiGithubFill className="size-4 text-[var(--accent)]" aria-hidden="true" />
                  <span>GitHub</span>
                  <RiArrowRightUpLine className="size-3.5 opacity-60" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-4 py-2.5 font-mono text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
                >
                  <RiLinkedinBoxFill className="size-4 text-[var(--accent)]" aria-hidden="true" />
                  <span>LinkedIn</span>
                  <RiArrowRightUpLine className="size-3.5 opacity-60" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-11 items-center gap-2 border border-[var(--border-hairline)] bg-transparent px-4 py-2.5 font-mono text-xs text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                >
                  {copiedEmail ? (
                    <>
                      <RiCheckLine className="size-4 text-[var(--accent)]" aria-hidden="true" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <RiFileCopyLine className="size-4 text-[var(--accent)]" aria-hidden="true" />
                      <span>{PROFILE.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right 4 Columns: Architectural Specification Dossier + Acoustic Note */}
            <aside
              aria-label="Engineer Specification Dossier"
              className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[var(--surface-elevated)]/45"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3 mb-5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)]">
                    SPECIFICATION // DOSSIER
                  </span>
                  <RiTerminalBoxLine className="size-4 text-[var(--accent)]" aria-hidden="true" />
                </div>

                <dl className="space-y-3.5 text-xs">
                  <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)] pb-2.5">
                    <dt className="font-mono uppercase text-[var(--text-muted)]">Core Focus</dt>
                    <dd className="font-medium text-right text-[var(--text-primary)]">
                      Frontend Web &amp; Mobile Apps
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)] pb-2.5">
                    <dt className="font-mono uppercase text-[var(--text-muted)]">Primary Stack</dt>
                    <dd className="font-mono text-right text-[var(--text-primary)]">
                      React Native · Expo · Next.js
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)] pb-2.5">
                    <dt className="font-mono uppercase text-[var(--text-muted)]">Current Role</dt>
                    <dd className="font-medium text-right text-[var(--text-primary)]">
                      Mobile &amp; Web Dev @ KOYO
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)] pb-2.5">
                    <dt className="font-mono uppercase text-[var(--text-muted)]">Mobile Lab</dt>
                    <dd className="font-medium text-right text-[var(--text-primary)]">
                      Cephas ICT Hub (Since 2024)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)] pb-2.5">
                    <dt className="font-mono uppercase text-[var(--text-muted)]">Degree</dt>
                    <dd className="font-medium text-right text-[var(--text-primary)]">
                      B.Tech Computer Science (2:1)
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[var(--border-hairline)] pb-2.5">
                    <dt className="font-mono uppercase text-[var(--text-muted)]">Languages</dt>
                    <dd className="font-mono text-right text-[var(--text-primary)]">
                      English · Yoruba · French
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Tactile Acoustic Frequency Box (Honoring Music Interest in CV) */}
              <div className="mt-6 rounded border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-4">
                <div className="flex items-center justify-between text-[0.6875rem] font-mono text-[var(--text-muted)] mb-2">
                  <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-semibold">
                    <RiMusic2Line className="size-3.5 text-[var(--accent)]" aria-hidden="true" />
                    ACOUSTIC DISCIPLINE
                  </span>
                  <span>{activeNote ? `PLAYING ${activeNote}` : "TAP INTERVAL"}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                  Alongside software engineering, music shapes my sense of rhythm, pacing, and interface harmony.
                </p>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: "A4 · 440Hz", short: "A4", freq: 440 },
                    { label: "C#5 · 554Hz", short: "C#5", freq: 554.37 },
                    { label: "E5 · 659Hz", short: "E5", freq: 659.25 },
                    { label: "A5 · 880Hz", short: "A5", freq: 880 },
                  ].map((tone) => (
                    <button
                      key={tone.short}
                      type="button"
                      onClick={() => playHarmonicTone(tone.label, tone.freq)}
                      className={`min-h-8 border px-2 py-1 font-mono text-[0.6875rem] transition-colors flex items-center justify-center gap-1 ${
                        activeNote === tone.label
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                          : "border-[var(--border-hairline)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                      }`}
                      aria-label={`Play harmonic note ${tone.label}`}
                    >
                      <RiVolumeUpLine className="size-3" aria-hidden="true" />
                      <span>{tone.short}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* 4-Column Architectural Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[var(--border-hairline)]">
            {PROFILE.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-6 sm:px-10 sm:py-7 ${
                  idx < 3 ? " lg:border-r border-[var(--border-hairline)]" : ""
                } ${idx % 2 === 0 ? "border-r lg:border-r border-[var(--border-hairline)]" : ""} ${
                  idx < 2 ? "border-b lg:border-b-0 border-[var(--border-hairline)]" : ""
                }`}
              >
                <div className="font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)] tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  {stat.label}
                </div>
                <div className="mt-0.5 font-mono text-[0.7rem] text-[var(--text-muted)]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 01 // SELECTED WORKS & PRODUCTION ARTIFACTS
        ========================================================= */}
        <section
          id="works"
          className="border-x border-b border-[var(--border-hairline)] py-16 sm:py-24"
        >
          <div className="px-6 sm:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--border-hairline)]">
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  01 // SELECTED WORKS &amp; PRODUCTION RELEASES
                </div>
                <h2 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                  Shipped Mobile Applications &amp; Web Platforms
                </h2>
                <p className="mt-2 max-w-[62ch] text-sm sm:text-base text-[var(--text-secondary)]">
                  Production software spanning Google Play Store mobile applications, dual-surface Vercel web platforms, Render deployments, and standalone Android APK releases.
                </p>
              </div>

              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div
                  className="inline-flex flex-wrap border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-1"
                  role="group"
                  aria-label="Filter projects by category"
                >
                  {[
                    { id: "all", label: `All (${PROJECTS.length})` },
                    {
                      id: "mobile",
                      label: `Mobile & APK (${PROJECTS.filter((p) => p.filterGroup === "mobile").length})`,
                    },
                    {
                      id: "web",
                      label: `Web (${PROJECTS.filter((p) => p.filterGroup === "web").length})`,
                    },
                    {
                      id: "systems",
                      label: `Systems & Admin (${
                        PROJECTS.filter((p) => p.filterGroup === "systems").length
                      })`,
                    },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setProjectFilter(tab.id as "all" | "mobile" | "web" | "systems")
                      }
                      aria-pressed={projectFilter === tab.id}
                      className={`min-h-8 px-3 py-1 font-mono text-xs transition-colors ${
                        projectFilter === tab.id
                          ? "bg-[var(--text-primary)] text-[var(--surface-paper)] font-semibold"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <label htmlFor={searchInputId} className="visually-hidden">
                    Search projects by name or technology
                  </label>
                  <RiSearchLine
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[var(--text-muted)]"
                    aria-hidden="true"
                  />
                  <input
                    id={searchInputId}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter stack or title..."
                    className="min-h-10 w-full sm:w-52 border border-[var(--border-hairline)] bg-[var(--surface-elevated)] pl-8 pr-3 py-1.5 font-mono text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Projects Architectural Grid */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col justify-between border border-[var(--border-hairline)] bg-[var(--surface-elevated)]/35 transition-colors hover:border-[var(--border-strong)]"
                >
                  <div>
                    {/* Top Metadata Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-hairline)] px-5 py-3.5 font-mono text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-[var(--accent)]">{project.index}</span>
                        <span className="text-[var(--text-muted)]">//</span>
                        <span className="uppercase tracking-wider text-[var(--text-secondary)]">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-2 py-0.5 text-[0.6875rem] text-[var(--text-secondary)]">
                          {project.status}
                        </span>
                        <span className="text-[var(--text-muted)] tabular-nums">{project.year}</span>
                      </div>
                    </div>

                    {/* Interactive Schematic Blueprint */}
                    <div
                      onClick={() => openProjectModal(project)}
                      className="cursor-pointer border-b border-[var(--border-hairline)] transition-opacity group-hover:opacity-95"
                    >
                      <ProjectBlueprint type={project.blueprintType} compact />
                    </div>

                    {/* Core Project Copy */}
                    <div className="p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                          {project.title}
                        </h3>
                        <span className="font-mono text-[0.7rem] text-[var(--text-muted)] shrink-0">
                          {project.organization}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-[var(--accent)]">
                        {project.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] pretty-copy">
                        {project.summary}
                      </p>

                      {/* Key Deliverables */}
                      <ul className="mt-4 space-y-1.5 border-t border-[var(--border-hairline)] pt-4 text-xs text-[var(--text-secondary)]">
                        {project.deliverables.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <RiCheckLine
                              className="size-3.5 shrink-0 text-[var(--accent)] mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-2.5 py-1 font-mono text-[0.6875rem] text-[var(--text-secondary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Direct Live Links + Case Study Trigger */}
                  <div className="border-t border-[var(--border-hairline)] bg-[var(--surface-paper)]/60 px-6 py-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.url + link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-9 items-center gap-1.5 border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          <LinkKindIcon kind={link.kind} />
                          <span>{link.label}</span>
                          <RiArrowRightUpLine className="size-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => openProjectModal(project)}
                      className="inline-flex min-h-9 items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs text-[var(--text-secondary)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
                    >
                      <RiFolderOpenLine className="size-3.5" aria-hidden="true" />
                      <span>Technical Dossier</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 02 // COMPLETE VERIFIED DEPLOYMENT & APK DIRECTORY
        ========================================================= */}
        <section
          id="directory"
          className="border-x border-b border-[var(--border-hairline)] py-16 sm:py-20 bg-[var(--surface-elevated)]/25"
        >
          <div className="px-6 sm:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-hairline)]">
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  02 // COMPLETE VERIFICATION LEDGER
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                  All Live Deployments, Play Store Apps &amp; APK Links
                </h2>
              </div>
              <p className="font-mono text-xs text-[var(--text-muted)]">
                12 VERIFIED ENDPOINTS · DIRECT EXTERNAL LAUNCH
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <caption className="visually-hidden">
                  Complete directory of Ayanyiola Enoch live web projects, Google Play Store apps, and APK builds
                </caption>
                <thead>
                  <tr className="border-b border-[var(--border-strong)] font-mono text-[0.7rem] uppercase tracking-wider text-[var(--text-muted)]">
                    <th scope="col" className="py-3 pr-4">
                      Ref
                    </th>
                    <th scope="col" className="py-3 px-4">
                      Artifact / System Name
                    </th>
                    <th scope="col" className="py-3 px-4 hidden sm:table-cell">
                      Distribution Surface
                    </th>
                    <th scope="col" className="py-3 px-4 hidden md:table-cell">
                      Identifier / Host
                    </th>
                    <th scope="col" className="py-3 pl-4 text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-hairline)] text-xs sm:text-sm">
                  {VERIFIED_DIRECTORY.map((row) => (
                    <tr
                      key={row.code}
                      className="group transition-colors hover:bg-[var(--surface-elevated)]"
                    >
                      <td className="py-3.5 pr-4 font-mono text-xs text-[var(--accent)] tabular-nums">
                        {row.code}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-[var(--text-primary)]">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-4 hidden sm:table-cell font-mono text-xs text-[var(--text-secondary)]">
                        <span className="inline-flex items-center gap-1.5">
                          <LinkKindIcon kind={row.kind} />
                          {row.surface}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 hidden md:table-cell font-mono text-xs text-[var(--text-muted)]">
                        {row.target}
                      </td>
                      <td className="py-3.5 pl-4 text-right">
                        <a
                          href={row.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-8 items-center gap-1 border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-3 py-1 font-mono text-xs text-[var(--text-primary)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                        >
                          <span>Open</span>
                          <RiArrowRightUpLine className="size-3.5" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 03 // EXPERIENCE & LEADERSHIP CHRONOLOGY
        ========================================================= */}
        <section
          id="experience"
          className="border-x border-b border-[var(--border-hairline)] py-16 sm:py-24"
        >
          <div className="px-6 sm:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-hairline)]">
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                  03 // CAREER &amp; COMMUNITY LEADERSHIP
                </div>
                <h2 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                  Engineering Tenure &amp; Campus Impact
                </h2>
              </div>

              <div
                className="inline-flex flex-wrap border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-1"
                role="group"
                aria-label="Filter experience timeline"
              >
                {[
                  { id: "all", label: "All Roles (07)" },
                  { id: "engineering", label: "Engineering (04)" },
                  { id: "leadership", label: "Leadership & Community (03)" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setExpFilter(tab.id as "all" | "engineering" | "leadership")}
                    aria-pressed={expFilter === tab.id}
                    className={`min-h-8 px-3 py-1 font-mono text-xs transition-colors ${
                      expFilter === tab.id
                        ? "bg-[var(--text-primary)] text-[var(--surface-paper)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-[var(--border-hairline)]">
              {filteredExperiences.map((exp) => (
                <article
                  key={exp.id}
                  className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                >
                  {/* Left 4 Columns: Period, Index & Organization */}
                  <div className="lg:col-span-4 space-y-1">
                    <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
                      <span>{exp.index}</span>
                      <span>//</span>
                      <span className="uppercase">{exp.period}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-[var(--text-secondary)]">
                      {exp.company}
                    </div>
                    <div className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5 pt-1">
                      <RiMapPin2Line className="size-3.5 text-[var(--accent)]" aria-hidden="true" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Right 8 Columns: Impact Bullet Points & Stack */}
                  <div className="lg:col-span-8 space-y-4">
                    <ul className="space-y-2.5 text-sm sm:text-base text-[var(--text-secondary)]">
                      {exp.highlights.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            className="mt-2 inline-block size-1.5 shrink-0 bg-[var(--accent)]"
                            aria-hidden="true"
                          />
                          <span className="pretty-copy">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-[var(--border-hairline)] bg-[var(--surface-elevated)] px-2.5 py-0.5 font-mono text-[0.6875rem] text-[var(--text-secondary)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 04 // TECHNICAL SPECIFICATION, EDUCATION & AWARDS
        ========================================================= */}
        <section
          id="credentials"
          className="border-x border-b border-[var(--border-hairline)] py-16 sm:py-24"
        >
          <div className="px-6 sm:px-10">
            <div className="pb-8 border-b border-[var(--border-hairline)]">
              <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                04 // CAPABILITIES, ACADEMIC RECORD &amp; HONOURS
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                Technical Architecture &amp; Education
              </h2>
            </div>

            {/* 4-Column Skill Matrix */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[var(--border-hairline)]">
              {SKILL_GROUPS.map((group, idx) => (
                <div
                  key={group.category}
                  className={`p-6 flex flex-col justify-between bg-[var(--surface-elevated)]/25 ${
                    idx < 3 ? "lg:border-r border-[var(--border-hairline)]" : ""
                  } border-b lg:border-b-0 border-[var(--border-hairline)]`}
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-[var(--accent)] mb-3">
                      <span>SPEC // {group.index}</span>
                      <RiCodeSSlashLine className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {group.category}
                    </h3>
                    <p className="mt-1.5 text-xs text-[var(--text-muted)] leading-relaxed">
                      {group.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-[var(--border-hairline)] pt-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                      {group.items.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                          <RiCheckLine
                            className="size-3.5 text-[var(--accent)] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Awards Split Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 6 Columns: Academic Education */}
              <div className="lg:col-span-6 border border-[var(--border-hairline)] p-6 sm:p-8 bg-[var(--surface-elevated)]/20">
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <RiBookOpenLine className="size-4 text-[var(--accent)]" aria-hidden="true" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)]">
                      ACADEMIC CREDENTIALS
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)]">2017 — 2025</span>
                </div>

                <div className="space-y-8">
                  {EDUCATION.map((edu) => (
                    <div key={edu.institution} className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[var(--accent)]">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                        {edu.institution}
                      </h4>
                      <div className="text-sm font-medium text-[var(--text-secondary)]">
                        {edu.degree}
                      </div>
                      {edu.honors && (
                        <div className="inline-block border border-[var(--border-strong)] bg-[var(--surface-paper)] px-2.5 py-0.5 font-mono text-xs text-[var(--text-primary)]">
                          {edu.honors}
                        </div>
                      )}
                      <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)] pt-1">
                        {edu.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 inline-block size-1.5 shrink-0 bg-[var(--accent)]"
                              aria-hidden="true"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 6 Columns: Scholarships, Certifications & Awards */}
              <div className="lg:col-span-6 border border-[var(--border-hairline)] p-6 sm:p-8 bg-[var(--surface-elevated)]/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <RiAwardLine className="size-4 text-[var(--accent)]" aria-hidden="true" />
                      <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)]">
                        SCHOLARSHIPS, AWARDS &amp; CERTIFICATIONS
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-muted)]">06 VERIFIED</span>
                  </div>

                  <ul className="divide-y divide-[var(--border-hairline)]">
                    {CERTIFICATIONS.map((cert) => (
                      <li
                        key={cert.title}
                        className="py-3.5 flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <RiShieldStarLine
                              className="size-3.5 text-[var(--accent)] shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-semibold text-[var(--text-primary)]">
                              {cert.title}
                            </span>
                          </div>
                          <p className="mt-0.5 pl-5 text-xs text-[var(--text-secondary)]">
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="flex flex-col items-end shrink-0">
                          <span className="font-mono text-xs font-semibold text-[var(--accent)] tabular-nums">
                            {cert.year}
                          </span>
                          <span className="font-mono text-[0.65rem] uppercase text-[var(--text-muted)]">
                            {cert.category}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spoken Languages & Personal Interests Footer Box */}
                <div className="mt-6 border-t border-[var(--border-hairline)] pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="font-mono uppercase text-[var(--text-muted)] mb-1.5">
                      Spoken Languages
                    </div>
                    <div className="space-y-1">
                      {PROFILE.spokenLanguages.map((lang) => (
                        <div key={lang.language} className="flex justify-between">
                          <span className="font-medium text-[var(--text-primary)]">
                            {lang.language}
                          </span>
                          <span className="font-mono text-[var(--text-muted)]">
                            {lang.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono uppercase text-[var(--text-muted)] mb-1.5">
                      Creative Interests
                    </div>
                    <ul className="space-y-1 text-[var(--text-secondary)]">
                      {PROFILE.interests.map((interest) => (
                        <li key={interest} className="flex items-center gap-1.5">
                          <RiCompass3Line
                            className="size-3 text-[var(--accent)] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{interest}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 05 // DIRECT CONTACT & PROJECT INQUIRY DISPATCH
        ========================================================= */}
        <section
          id="contact"
          className="border-x border-b border-[var(--border-hairline)] py-16 sm:py-24"
        >
          <div className="px-6 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left 6 Columns: Direct Contact Channels */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    05 // INITIATE COLLABORATION
                  </div>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                    Available for Frontend Web &amp; Mobile Engineering Roles.
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pretty-copy">
                    Whether you are overhauling a React Native mobile application, shipping a Next.js product surface, or expanding an engineering team, reach out directly via email, phone, or LinkedIn. References are available upon request.
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-between border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-4">
                      <div>
                        <div className="font-mono text-[0.6875rem] uppercase text-[var(--text-muted)]">
                          Electronic Mail
                        </div>
                        <a
                          href={`mailto:${PROFILE.email}`}
                          className="text-sm sm:text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent)]"
                        >
                          {PROFILE.email}
                        </a>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex min-h-9 items-center gap-1.5 border border-[var(--border-strong)] bg-[var(--surface-paper)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)] hover:border-[var(--accent)]"
                      >
                        {copiedEmail ? (
                          <>
                            <RiCheckLine className="size-3.5 text-[var(--accent)]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <RiFileCopyLine className="size-3.5 text-[var(--accent)]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-4">
                      <div>
                        <div className="font-mono text-[0.6875rem] uppercase text-[var(--text-muted)]">
                          Direct Telephone / WhatsApp
                        </div>
                        <a
                          href={PROFILE.phoneHref}
                          className="text-sm sm:text-base font-mono font-medium text-[var(--text-primary)] hover:text-[var(--accent)]"
                        >
                          {PROFILE.phone}
                        </a>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="inline-flex min-h-9 items-center gap-1.5 border border-[var(--border-strong)] bg-[var(--surface-paper)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)] hover:border-[var(--accent)]"
                      >
                        {copiedPhone ? (
                          <>
                            <RiCheckLine className="size-3.5 text-[var(--accent)]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <RiPhoneLine className="size-3.5 text-[var(--accent)]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
                      >
                        <span className="flex items-center gap-2 font-mono text-xs font-medium">
                          <RiGithubFill className="size-4 text-[var(--accent)]" />
                          GitHub Profile
                        </span>
                        <RiArrowRightUpLine className="size-4" />
                      </a>
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between border border-[var(--border-hairline)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-[var(--accent)]"
                      >
                        <span className="flex items-center gap-2 font-mono text-xs font-medium">
                          <RiLinkedinBoxFill className="size-4 text-[var(--accent)]" />
                          LinkedIn Profile
                        </span>
                        <RiArrowRightUpLine className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 6 Columns: Direct Dispatch Composer */}
              <div className="lg:col-span-6 border border-[var(--border-hairline)] bg-[var(--surface-elevated)]/35 p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4 mb-6">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)]">
                    DIRECT MESSAGE DISPATCH
                  </span>
                  <RiBriefcase4Line className="size-4 text-[var(--accent)]" aria-hidden="true" />
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor={nameInputId}
                      className="block font-mono text-xs uppercase text-[var(--text-secondary)] mb-1.5"
                    >
                      Your Name or Organization
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      autoComplete="name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Engineering Lead at Koyo"
                      className="min-h-11 w-full border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-3.5 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={scopeInputId}
                      className="block font-mono text-xs uppercase text-[var(--text-secondary)] mb-1.5"
                    >
                      Engagement / Project Track
                    </label>
                    <select
                      id={scopeInputId}
                      value={inquiryScope}
                      onChange={(e) => setInquiryScope(e.target.value)}
                      className="min-h-11 w-full border border-[var(--border-hairline)] bg-[var(--surface-paper)] px-3.5 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    >
                      <option value="Mobile Application (React Native / Expo)">
                        Mobile Application (React Native / Expo)
                      </option>
                      <option value="Frontend Web Platform (Next.js / TypeScript)">
                        Frontend Web Platform (Next.js / TypeScript)
                      </option>
                      <option value="Full-Time / Contract Software Engineering Role">
                        Full-Time / Contract Software Engineering Role
                      </option>
                      <option value="Product Overhaul & UI Architecture">
                        Product Overhaul &amp; UI Architecture
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={messageInputId}
                      className="block font-mono text-xs uppercase text-[var(--text-secondary)] mb-1.5"
                    >
                      Project Context or Role Brief
                    </label>
                    <textarea
                      id={messageInputId}
                      rows={4}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Outline your timeline, product surface, or engineering team requirements..."
                      className="w-full resize-y border border-[var(--border-hairline)] bg-[var(--surface-paper)] p-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[var(--accent)] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                  >
                    <RiMailSendLine className="size-4" aria-hidden="true" />
                    <span>Compose Direct Email Dispatch</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Architectural Colophon Footer */}
      <footer className="mx-auto max-w-[1360px] px-4 sm:px-8 pb-12">
        <div className="border-x border-b border-[var(--border-hairline)] px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            <span className="text-[var(--text-primary)] font-semibold">AYANYIOLA ENOCH</span> —
            B.TECH COMPUTER SCIENCE (LAUTECH) · FRONTEND &amp; MOBILE ENGINEER
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)]"
            >
              <span>RETURN TO TOP</span>
              <RiArrowUpLine className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================
          NATIVE HTML <dialog> TECHNICAL DOSSIER MODAL
      ========================================================= */}
      <dialog
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeProjectModal();
          }
        }}
        className="backdrop:bg-black/70 m-auto w-[min(92vw,760px)] border border-[var(--border-strong)] bg-[var(--surface-paper)] p-0 text-[var(--text-primary)] shadow-2xl"
      >
        {activeProject && (
          <div>
            <div className="flex items-center justify-between border-b border-[var(--border-hairline)] px-6 py-4">
              <div className="font-mono text-xs text-[var(--accent)]">
                DOSSIER // {activeProject.index} · {activeProject.category}
              </div>
              <button
                type="button"
                onClick={closeProjectModal}
                className="inline-flex min-h-8 min-w-8 items-center justify-center border border-[var(--border-hairline)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                aria-label="Close project dossier dialog"
              >
                <RiCloseLine className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[80dvh] overflow-y-auto">
              <div>
                <div className="font-mono text-xs text-[var(--text-muted)]">
                  {activeProject.organization} · {activeProject.year} · {activeProject.role}
                </div>
                <h2
                  id={dialogTitleId}
                  className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight"
                >
                  {activeProject.title}
                </h2>
                <p className="mt-1 font-mono text-xs text-[var(--accent)]">
                  {activeProject.packageOrDomain}
                </p>
              </div>

              <div className="border border-[var(--border-hairline)]">
                <ProjectBlueprint type={activeProject.blueprintType} />
              </div>

              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Architectural Context
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                  {activeProject.engineeringContext}
                </p>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Key Engineering Deliverables
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {activeProject.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <RiCheckLine
                        className="size-4 text-[var(--accent)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-hairline)]">
                {activeProject.links.map((link) => (
                  <a
                    key={link.url + link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 bg-[var(--accent)] px-4 py-2 font-mono text-xs font-medium text-white hover:opacity-90"
                  >
                    <LinkKindIcon kind={link.kind} />
                    <span>{link.label}</span>
                    <RiArrowRightUpLine className="size-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
