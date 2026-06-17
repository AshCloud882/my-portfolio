import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Mail, MapPin, Github, Linkedin,
  Brain, Zap, Code2, ChevronDown, Menu, X, ExternalLink
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import fuzzyArchImg from "../imports/image.png";
import nnArchImg from "../imports/image-1.png";

/* ─── Utility ─────────────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      className={`rounded-2xl transition-all duration-300 ${
        hover ? "hover:border-cyan-500/30 hover:bg-white/[0.07]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      className={className}
    >
      {children}
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(139,92,246,0.15) 100%)",
        border: "1px solid rgba(6,182,212,0.3)",
        color: "#67e8f9",
        fontSize: "0.72rem",
      }}
      className="px-2.5 py-0.5 rounded-full font-medium tracking-wide"
    >
      {label}
    </span>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────────────────── */
const NAV_LINKS = ["About", "Skills", "Academic", "Projects", "Contact"];

function Navbar({
  active,
  onNav,
}: {
  active: string;
  onNav: (s: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    onNav(id);
    setOpen(false);
  };

  return (
    <header
      style={{
        background: scrolled ? "rgba(5,11,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50 px-8 h-16 flex items-center justify-between"
    >
      <button
        onClick={() => go("hero")}
        style={{
          background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        className="text-xl font-bold tracking-wider"
      >
        GJY
      </button>

      <nav className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => go(link.toLowerCase())}
            style={{
              color: active === link ? "#06b6d4" : "#94a3b8",
              transition: "color 0.2s",
            }}
            className="text-sm font-medium hover:text-cyan-400"
          >
            {link}
          </button>
        ))}
      </nav>

      <button
        className="md:hidden text-slate-400"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          style={{
            background: "rgba(5,11,20,0.96)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          className="absolute top-16 left-0 right-0 flex flex-col py-4"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => go(link.toLowerCase())}
              className="py-3 px-8 text-left text-slate-300 hover:text-cyan-400 text-sm font-medium"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
function Hero({ onNav }: { onNav: (s: string) => void }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 40%, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
        className="absolute inset-0 pointer-events-none"
      />
      <div
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 60%, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
        className="absolute inset-0 pointer-events-none"
      />
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            border: "1px solid rgba(6,182,212,0.4)",
            color: "#67e8f9",
            background: "rgba(6,182,212,0.08)",
            fontSize: "0.75rem",
          }}
          className="px-4 py-1.5 rounded-full font-mono tracking-widest uppercase"
        >
          AI & Computer Science Student
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          style={{ color: "#f1f5f9" }}
        >
          Gan Jin Yong
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "#94a3b8" }}
          className="text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Specializing in <GradientText>Machine Learning</GradientText> and{" "}
          <GradientText>Agentic AI Workflows</GradientText> — building
          intelligent systems that turn complex data into actionable insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              color: "#fff",
            }}
            className="px-7 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              border: "1px solid rgba(6,182,212,0.5)",
              color: "#67e8f9",
              background: "rgba(6,182,212,0.06)",
            }}
            className="px-7 py-3 rounded-xl font-semibold text-sm"
            whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.9)" }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-2"
        >
          {[
            { icon: <Mail size={16} />, href: "mailto:jinyonggan10@gmail.com" },
            { icon: <Github size={16} />, href: "#" },
            { icon: <Linkedin size={16} />, href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                background: "rgba(255,255,255,0.04)",
              }}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-slate-600"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About ───────────────────────────────────────────────────────────────── */
function About() {
  const stats = [
    { value: "3.88", label: "Current CGPA" },
    { value: "4+", label: "Projects Built" },
    { value: "2+", label: "Years of Coding" },
    { value: "5+", label: "Tech Stacks" },
  ];

  return (
    <section id="about" className="py-28 px-8 max-w-6xl mx-auto">
      <FadeIn className="mb-16">
        <p
          style={{ color: "#06b6d4" }}
          className="text-sm font-mono tracking-widest uppercase mb-3"
        >
          About Me
        </p>
        <h2
          style={{ color: "#f1f5f9" }}
          className="text-4xl font-bold"
        >
          Personal Qualities
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn delay={0.1}>
          <p
            style={{ color: "#94a3b8" }}
            className="text-base leading-relaxed mb-6"
          >
            I'm an AI & Computer Science student at Universiti Teknikal Malaysia
            (UTeM), driven by a passion for building intelligent, data-driven
            systems. With a CGPA of 3.88, I combine strong academic foundations
            with hands-on experience in machine learning, fuzzy logic, and
            full-stack development.
          </p>
          <p
            style={{ color: "#94a3b8" }}
            className="text-base leading-relaxed"
          >
            From designing Agentic AI workflows to engineering full-stack desktop
            applications, I thrive at the intersection of theory and practice —
            turning complex problems into clean, logical solutions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: <Brain size={24} color="#06b6d4" />,
              title: "Analytical Thinking",
              desc: "Extracting actionable insights from raw, complex datasets.",
            },
            {
              icon: <Zap size={24} color="#8b5cf6" />,
              title: "Technical Adaptability",
              desc: "Quick to learn and implement new paradigms and frameworks.",
            },
            {
              icon: <Code2 size={24} color="#06b6d4" />,
              title: "Structured Execution",
              desc: "Clean, organized code with clear, logical architectures.",
            },
            {
              icon: <Brain size={24} color="#8b5cf6" />,
              title: "Problem Solving",
              desc: "Methodical approach to decomposing and solving hard problems.",
            },
          ].map((q, i) => (
            <FadeIn key={q.title} delay={0.1 + i * 0.08}>
              <GlassCard className="p-5 h-full">
                <div className="mb-3">{q.icon}</div>
                <h3
                  style={{ color: "#f1f5f9" }}
                  className="text-sm font-semibold mb-2"
                >
                  {q.title}
                </h3>
                <p
                  style={{ color: "#64748b" }}
                  className="text-xs leading-relaxed"
                >
                  {q.desc}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={0.1 + i * 0.07}>
            <GlassCard className="p-6 text-center">
              <p
                style={{
                  background:
                    "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="text-3xl font-bold mb-1"
              >
                {s.value}
              </p>
              <p
                style={{ color: "#64748b" }}
                className="text-xs font-medium"
              >
                {s.label}
              </p>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─── Skills ──────────────────────────────────────────────────────────────── */
const SKILLS = [
  { cat: "Languages", items: ["C++", "Python", "Java", "SQL"] },
  {
    cat: "AI / ML",
    items: [
      "Machine Learning",
      "Fuzzy Logic",
      "Neural Networks",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    cat: "Dev Tools",
    items: ["VS Code", "Jupyter Notebook", "Eclipse"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 px-8 max-w-6xl mx-auto">
      <FadeIn className="mb-16">
        <p
          style={{ color: "#06b6d4" }}
          className="text-sm font-mono tracking-widest uppercase mb-3"
        >
          Technical Skills
        </p>
        <h2
          style={{ color: "#f1f5f9" }}
          className="text-4xl font-bold"
        >
          What I Work With
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILLS.map((group, i) => (
          <FadeIn key={group.cat} delay={i * 0.1}>
            <GlassCard className="p-6 h-full">
              <h3
                style={{ color: "#06b6d4" }}
                className="text-xs font-mono tracking-widest uppercase mb-4"
              >
                {group.cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─── Academic ────────────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    date: "2024 – Present",
    institution: "Universiti Teknikal Malaysia (UTeM)",
    degree: "Bachelor of Computer Science in Artificial Intelligence",
    detail:
      "Core Focus: Machine Learning, Fuzzy Logic, Object-Oriented Programming.",
    badge: "CGPA 3.88",
  },
  {
    date: "2022 – 2024",
    institution: "SMJK Chung Ling Butterworth",
    degree: "Sijil Tinggi Persekolahan Malaysia (STPM)",
    detail: "Pre-university level qualification with strong STEM foundation.",
    badge: "CGPA 3.33",
  },
  {
    date: "2017 – 2022",
    institution: "SMJK Chung Ling Butterworth",
    degree: "Sijil Pelajaran Malaysia (SPM)",
    detail: "STEM Stream.",
    badge: null,
  },
];

function Academic() {
  return (
    <section id="academic" className="py-28 px-8 max-w-4xl mx-auto">
      <FadeIn className="mb-16">
        <p
          style={{ color: "#06b6d4" }}
          className="text-sm font-mono tracking-widest uppercase mb-3"
        >
          Education
        </p>
        <h2
          style={{ color: "#f1f5f9" }}
          className="text-4xl font-bold"
        >
          Academic History
        </h2>
      </FadeIn>

      <div className="relative pl-8">
        <div
          style={{
            background:
              "linear-gradient(180deg, #06b6d4, #8b5cf6, rgba(139,92,246,0.1))",
          }}
          className="absolute left-0 top-2 bottom-0 w-0.5"
        />

        <div className="flex flex-col gap-12">
          {TIMELINE.map((item, i) => (
            <FadeIn key={item.date} delay={i * 0.15}>
              <div className="relative">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                    left: "-2.25rem",
                    top: "1.1rem",
                    boxShadow: "0 0 12px rgba(6,182,212,0.5)",
                  }}
                  className="absolute w-4 h-4 rounded-full"
                />
                <GlassCard className="p-7 ml-4">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <p
                      style={{ color: "#06b6d4" }}
                      className="text-xs font-mono tracking-wide"
                    >
                      {item.date}
                    </p>
                    {item.badge && (
                      <span
                        style={{
                          background: "rgba(6,182,212,0.12)",
                          border: "1px solid rgba(6,182,212,0.3)",
                          color: "#67e8f9",
                        }}
                        className="px-3 py-0.5 rounded-full text-xs font-semibold"
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    style={{ color: "#f1f5f9" }}
                    className="text-base font-semibold mb-1"
                  >
                    {item.institution}
                  </h3>
                  <p
                    style={{ color: "#94a3b8" }}
                    className="text-sm font-medium mb-3"
                  >
                    {item.degree}
                  </p>
                  <p
                    style={{ color: "#64748b" }}
                    className="text-sm leading-relaxed"
                  >
                    {item.detail}
                  </p>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ────────────────────────────────────────────────────────────── */
function Projects() {
  const [openArch, setOpenArch] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenArch((prev) => (prev === id ? null : id));

  return (
    <section id="projects" className="py-28 px-8 max-w-6xl mx-auto">
      <FadeIn className="mb-16">
        <p
          style={{ color: "#06b6d4" }}
          className="text-sm font-mono tracking-widest uppercase mb-3"
        >
          Work Produced
        </p>
        <h2
          style={{ color: "#f1f5f9" }}
          className="text-4xl font-bold"
        >
          Projects
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {/* ── Real Estate Liquidity Predictor ── */}
        <FadeIn delay={0.1}>
          <GlassCard className="p-8" hover={false}>
            <div
              style={{
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: "1rem",
                background: "rgba(6,182,212,0.03)",
              }}
              className="p-8"
            >
              <div className="flex gap-2 flex-wrap mb-4">
                {["Agentic AI", "Fuzzy Logic", "Matlab"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <h3
                style={{ color: "#f1f5f9" }}
                className="text-2xl font-bold mb-3"
              >
                Real Estate Liquidity Predictor
              </h3>
              <p
                style={{ color: "#94a3b8" }}
                className="text-base leading-relaxed max-w-2xl mb-5"
              >
                Agentic AI workflow that processes Excel inputs to evaluate the
                exact likelihood of a real estate property being sold using
                Fuzzy Logic (Mamdani Inference Engine) implemented in Matlab.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {[
                  "Integrated a Fuzzy Logic Controller for market nuances",
                  "Automated the data pipeline to ingest raw Excel datasets",
                  "Mamdani Inference Engine with custom rule base",
                  "Fuzzification → Inference → Defuzzification pipeline",
                ].map((f) => (
                  <li
                    key={f}
                    style={{ color: "#64748b" }}
                    className="text-sm flex items-start gap-2"
                  >
                    <span style={{ color: "#06b6d4" }} className="mt-0.5">
                      ▸
                    </span>{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => toggle("realestate")}
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  color: "#fff",
                }}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
              >
                <ExternalLink size={14} />
                {openArch === "realestate" ? "Hide Architecture" : "View Architecture"}
              </motion.button>

              {openArch === "realestate" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-8 overflow-hidden"
                >
                  <p
                    style={{ color: "#64748b" }}
                    className="text-xs font-mono tracking-widest uppercase mb-4"
                  >
                    System Architecture
                  </p>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.97)",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                    }}
                  >
                    <ImageWithFallback
                      src={fuzzyArchImg}
                      alt="Fuzzy Logic Mamdani Inference Engine architecture diagram"
                      className="w-full rounded-lg object-contain"
                      style={{ maxHeight: "340px" }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </GlassCard>
        </FadeIn>

        {/* ── Bottom row ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Heart Disease */}
          <FadeIn delay={0.15}>
            <GlassCard className="p-7 h-full flex flex-col">
              <div className="flex gap-2 flex-wrap mb-4">
                {["Python", "Machine Learning"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <h3
                style={{ color: "#f1f5f9" }}
                className="text-lg font-semibold mb-3"
              >
                Early Detection of Cardiovascular Disease
              </h3>
              <p
                style={{ color: "#94a3b8" }}
                className="text-sm leading-relaxed mb-5"
              >
                Predictive ML model identifying early risk factors for heart
                disease through medical dataset processing and cleaning.
              </p>
              <ul className="flex flex-col gap-1.5 flex-1 mb-5">
                {[
                  "Processed and cleaned real-world medical datasets",
                  "Feature selection using correlation analysis",
                  "Feedforward Neural Network / Supervised Network (Backpropagation Algorithm)",
                  "High-accuracy binary classification with interpretability focus",
                ].map((f) => (
                  <li
                    key={f}
                    style={{ color: "#64748b" }}
                    className="text-xs flex items-start gap-2"
                  >
                    <span style={{ color: "#8b5cf6" }} className="mt-0.5">
                      ▸
                    </span>{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => toggle("heart")}
                style={{
                  border: "1px solid rgba(139,92,246,0.4)",
                  color: "#a78bfa",
                  background: "rgba(139,92,246,0.06)",
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 self-start"
                whileHover={{ scale: 1.04 }}
              >
                <ExternalLink size={12} />
                {openArch === "heart" ? "Hide Architecture" : "View Architecture"}
              </motion.button>

              {openArch === "heart" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-5 overflow-hidden"
                >
                  <div
                    style={{
                      background: "rgba(255,255,255,0.97)",
                      borderRadius: "0.75rem",
                      padding: "1rem",
                    }}
                  >
                    <ImageWithFallback
                      src={nnArchImg}
                      alt="Neural network backpropagation flowchart"
                      className="w-full rounded-lg object-contain"
                      style={{ maxHeight: "420px" }}
                    />
                  </div>
                </motion.div>
              )}
            </GlassCard>
          </FadeIn>

          {/* Library Management System */}
          <FadeIn delay={0.2}>
            <GlassCard className="p-7 h-full flex flex-col">
              <div className="flex gap-2 flex-wrap mb-4">
                {["Java"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <h3
                style={{ color: "#f1f5f9" }}
                className="text-lg font-semibold mb-3"
              >
                Comprehensive Library Management System
              </h3>
              <p
                style={{ color: "#94a3b8" }}
                className="text-sm leading-relaxed mb-5"
              >
                Full-stack desktop application with role-based access, borrowing
                history tracking, and catalog management.
              </p>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Role-based access control (Admin / Member)",
                  "Full borrowing history tracking",
                  "Search and filter across all database records",
                ].map((f) => (
                  <li
                    key={f}
                    style={{ color: "#64748b" }}
                    className="text-xs flex items-start gap-2"
                  >
                    <span style={{ color: "#8b5cf6" }} className="mt-0.5">
                      ▸
                    </span>{" "}
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
        </div>

        {/* ── Hobby Shop Management System ── */}
        <FadeIn delay={0.25}>
          <GlassCard className="p-7">
            <div className="flex gap-2 flex-wrap mb-4">
              {["C++", "MySQL", "PHP"].map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <h3
              style={{ color: "#f1f5f9" }}
              className="text-lg font-semibold mb-3"
            >
              Hobby Shop Management System
            </h3>
            <p
              style={{ color: "#94a3b8" }}
              className="text-sm leading-relaxed mb-5 max-w-2xl"
            >
              A full-stack shop management system for hobby retail, featuring
              dual access roles, membership tracking, and complete transaction
              history — built with a C++ backend, PHP web layer, and MySQL
              database.
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Role-based access control (Admin / User)",
                "Transaction record management",
                "Membership system",
              ].map((f) => (
                <li
                  key={f}
                  style={{ color: "#64748b" }}
                  className="text-xs flex items-start gap-2"
                >
                  <span style={{ color: "#06b6d4" }} className="mt-0.5">
                    ▸
                  </span>{" "}
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Contact ─────────────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const fieldStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: "0.75rem",
    color: "#e2e8f0",
    padding: "0.8rem 1rem",
    width: "100%",
    outline: "none",
    fontSize: "0.9rem",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-28 px-8 max-w-5xl mx-auto">
      <FadeIn className="mb-16 text-center">
        <p
          style={{ color: "#06b6d4" }}
          className="text-sm font-mono tracking-widest uppercase mb-3"
        >
          Get In Touch
        </p>
        <h2
          style={{ color: "#f1f5f9" }}
          className="text-4xl font-bold mb-4"
        >
          Let's Connect
        </h2>
        <p
          style={{ color: "#64748b" }}
          className="text-base max-w-xl mx-auto"
        >
          Open to internships, research collaborations, and interesting AI
          projects. Drop me a message.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn delay={0.1} className="flex flex-col gap-5">
          {[
            {
              icon: <Mail size={18} />,
              label: "Email",
              value: "jinyonggan10@gmail.com",
              href: "mailto:jinyonggan10@gmail.com",
            },
            {
              icon: <MapPin size={18} />,
              label: "Location",
              value: "Malaysia",
              href: null,
            },
          ].map((c) => (
            <GlassCard
              key={c.label}
              className="p-5 flex items-center gap-4"
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))",
                  border: "1px solid rgba(6,182,212,0.25)",
                  color: "#67e8f9",
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              >
                {c.icon}
              </div>
              <div>
                <p
                  style={{ color: "#64748b" }}
                  className="text-xs mb-0.5"
                >
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    style={{ color: "#e2e8f0" }}
                    className="text-sm font-medium hover:text-cyan-400 transition-colors"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p
                    style={{ color: "#e2e8f0" }}
                    className="text-sm font-medium"
                  >
                    {c.value}
                  </p>
                )}
              </div>
            </GlassCard>
          ))}
        </FadeIn>

        <FadeIn delay={0.15}>
          <GlassCard className="p-8" hover={false}>
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))",
                    border: "1px solid rgba(6,182,212,0.3)",
                  }}
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                >
                  <Mail size={24} color="#06b6d4" />
                </div>
                <p
                  style={{ color: "#f1f5f9" }}
                  className="text-lg font-semibold"
                >
                  Message Sent!
                </p>
                <p
                  style={{ color: "#64748b" }}
                  className="text-sm"
                >
                  I'll get back to you soon.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  style={{ color: "#06b6d4" }}
                  className="text-sm underline mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-4"
              >
                <div>
                  <label
                    style={{ color: "#64748b" }}
                    className="text-xs font-mono tracking-wide block mb-1.5"
                  >
                    NAME
                  </label>
                  <input
                    style={fieldStyle}
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(6,182,212,0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor =
                        "rgba(255,255,255,0.09)")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{ color: "#64748b" }}
                    className="text-xs font-mono tracking-wide block mb-1.5"
                  >
                    EMAIL
                  </label>
                  <input
                    style={fieldStyle}
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(6,182,212,0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor =
                        "rgba(255,255,255,0.09)")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{ color: "#64748b" }}
                    className="text-xs font-mono tracking-wide block mb-1.5"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    style={{ ...fieldStyle, minHeight: "120px", resize: "vertical" }}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(6,182,212,0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor =
                        "rgba(255,255,255,0.09)")
                    }
                  />
                </div>
                <motion.button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                    color: "#fff",
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-sm mt-1 shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      className="py-8 px-8 text-center"
    >
      <p style={{ color: "#334155" }} className="text-sm">
        © 2025 Gan Jin Yong · Built with React & Tailwind
      </p>
    </footer>
  );
}

/* ─── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = ["about", "skills", "academic", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const name = e.target.id;
            setActive(
              name.charAt(0).toUpperCase() + name.slice(1)
            );
          }
        }
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        background: "#050b14",
        color: "#e2e8f0",
        fontFamily: "'Inter', sans-serif",
      }}
      className="min-h-screen"
    >
      <Navbar active={active} onNav={setActive} />
      <Hero onNav={setActive} />
      <About />
      <Skills />
      <Academic />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
