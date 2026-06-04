// ============================================================================
// Site content — edit everything here. Markup/components read from this file.
// ============================================================================

export interface SocialLink {
  /** Used to pick the icon: 'github' | 'twitter' | 'email' | 'linkedin' | 'website' */
  name: "github" | "twitter" | "email" | "linkedin" | "website";
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  /** Path (in /public) or URL to the downloadable CV. */
  resumeUrl: string;
  social: SocialLink[];
}

export interface Stat {
  /** The headline number, e.g. "300k+". */
  value: string;
  /** Short unit, e.g. "jobs / day". */
  unit: string;
  /** One-line context. */
  label: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  url?: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  /** Shown as a small badge, e.g. the main language. */
  language?: string;
  /** Optional note, e.g. "Open-source contribution". */
  note?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail?: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  description: string;
  url?: string;
}

export const profile: Profile = {
  name: "Silvio Pavanetto",
  role: "Software Engineer",
  tagline: "Backend platforms, optimization engines & ML — built to run at scale.",
  bio: "Software engineer with a passion for basketball, food and logic riddles. I care about system design, backend platforms and machine learning — currently bringing software and optimization to heavy industry at Duferco, end-to-end from the rolling mill to shipping.",
  location: "Lugano, Switzerland",
  email: "silvio.pavanetto@gmail.com",
  resumeUrl: "/cv.pdf",
  social: [
    { name: "github", url: "https://github.com/reidemeister94", label: "GitHub" },
    { name: "twitter", url: "https://twitter.com/silviopavanetto", label: "Twitter / X" },
    { name: "email", url: "mailto:silvio.pavanetto@gmail.com", label: "Email" },
  ],
};

// Headline metrics — real, verifiable numbers from the work below.
// These do the heavy lifting: credibility through specifics, not adjectives.
export const stats: Stat[] = [
  { value: "15×", unit: "faster", label: "Core scheduler: 30 min → 2 min" },
  { value: "1k", unit: "req / s", label: "Search API throughput on Elasticsearch" },
  { value: "300k+", unit: "jobs / day", label: "Crawled and processed at scale" },
  { value: "95%", unit: "accuracy", label: "ML classifier serving ~1M jobs/day" },
];

export const experience: ExperienceItem[] = [
  {
    company: "Duferco",
    role: "Software Engineer",
    location: "Lugano, Switzerland",
    period: "Mar 2025 — Present",
    highlights: [
      "Define and own the backend engineering standards across Duferco Travi e Profilati (DTP) — observability, data modelling, authentication and software-engineering best practices shared across many services.",
      "Re-architected the overnight optimization engine (the \"Verification Procedure\") behind the shipping flow of two steel plants, cutting its runtime from ~30 minutes to ~2 — a ~15× speedup.",
      "Built pynno, a shared Python platform library powering the DTP backends: AWS (S3, Secrets Manager, SNS), AS/400 access, asyncpg PostgreSQL, Entra M2M auth and Logfire observability.",
      "Bringing software end-to-end across the rolling-mill flow — from LLM-based order extraction (Claude / AWS Bedrock) to lamination scheduling and shipping — bridging legacy AS/400 (IBM DB2 for i) with modern FastAPI services on AWS.",
    ],
  },
  {
    company: "Jobtome",
    role: "Software Engineer",
    location: "Stabio, Switzerland",
    period: "Nov 2021 — Feb 2025",
    highlights: [
      "Built and maintained search APIs in Python over Elasticsearch, handling 1,000 requests per second.",
      "Designed Apache Beam pipelines ingesting and processing millions of records per day, from Google Pub/Sub to BigQuery.",
      "Architected a job-offers crawler on GCP with 5,000+ crawlers collecting 300k+ jobs/day — Airflow, Kubernetes, Cloud Tasks, Cloud Run, Dataflow, BigQuery, Pub/Sub.",
      "Built and deployed an NLP/deep-learning classifier (BERT, CNN) on Vertex AI processing ~1M jobs/day at 95% accuracy.",
    ],
  },
  {
    company: "Polytechnic University of Milan",
    role: "Research Fellow",
    location: "Milan, Italy",
    period: "Oct 2019 — Oct 2021",
    highlights: [
      "Monitored 3M Italian conversations about vaccines across social media to study the interplay between online discourse and vaccine hesitancy/uptake.",
      "Built a data pipeline ingesting and analysing hundreds of reviews and social posts per day from 100 Italian museums.",
    ],
  },
  {
    company: "Deloitte Digital",
    role: "Software Developer",
    location: "Milan, Italy",
    period: "Feb 2019 — Aug 2019",
    highlights: [
      "Developer on international cloud projects built on Salesforce technology, using Java and JavaScript.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "development-skills",
    description: "A skills system that makes AI coding agents produce staff-engineer-quality code.",
    tags: ["AI agents", "Tooling", "Workflow"],
    url: "https://github.com/reidemeister94/development-skills",
    language: "Python",
  },
  {
    name: "promptvault",
    description: "Search all your Claude Code conversations instantly from the terminal — Markdown vault, SQLite FTS5 and fzf integration.",
    tags: ["CLI", "SQLite FTS5", "fzf"],
    url: "https://github.com/reidemeister94/promptvault",
    language: "Python",
  },
  {
    name: "whisper-notes",
    description: "Native macOS app for audio recording and transcription with whisper.cpp — SQLite storage, Markdown sync and multi-language support.",
    tags: ["macOS", "whisper.cpp", "Transcription"],
    url: "https://github.com/reidemeister94/whisper-notes",
    language: "Swift",
  },
  {
    name: "scrapy",
    description: "Contributor to Scrapy, the fast high-level web crawling & scraping framework for Python.",
    tags: ["Open source", "Web scraping"],
    url: "https://github.com/scrapy/scrapy",
    language: "Python",
    note: "Open-source contribution",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "C++"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Google Cloud Platform", "Docker", "Kubernetes", "Airflow", "Git", "CI/CD"],
  },
  {
    category: "Backend & Data",
    items: ["FastAPI", "Elasticsearch", "Pandas", "NumPy", "Microservices", "Distributed systems"],
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "Scikit-Learn", "NLP", "Deep learning"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "Polytechnic University of Milan",
    location: "Milan, Italy",
    period: "2016 — 2019",
    detail: "Final grade: 110 with honors / 110",
  },
  {
    degree: "B.Sc. in Engineering of Computing Systems",
    institution: "Polytechnic University of Milan",
    location: "Milan, Italy",
    period: "2013 — 2016",
  },
];

export const publications: Publication[] = [
  {
    title:
      "A Content-based Approach for the Analysis and Classification of Vaccine-related Stances on Twitter: the Italian Scenario",
    venue: "ICWSM 2021",
    year: "2021",
    description:
      "Collected and analysed 3M Italian conversations about COVID-19 vaccines on Twitter — geographical, temporal and lexical distribution — and trained a binary classifier predicting tweet stance towards vaccines.",
    // url: "https://...", // TODO: add the paper link
  },
  {
    title:
      "Generation of Realistic Navigation Paths for Web Site Testing using Recurrent Neural Networks and Generative Adversarial Neural Networks",
    venue: "ICWE 2020, Helsinki",
    year: "2020",
    description:
      "A method for generating high-quality weblog data using deep learning, benchmarked against a suite of data-mining algorithms as a baseline.",
    // url: "https://...", // TODO: add the paper link
  },
];
