type CaseStudy = {
  title: string;
  timeframe: string;
  role: string;
  stack: string[];
  tldr: string;
  context: string;
  problem: string[];
  solution: string[];
  impact: string[];
  contributions: string[];
  nextSteps: string[];
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  "speech-to-text-dashboard": {
    title: "Speech-to-Text Dashboard",
    timeframe: "2023",
    role: "Software Developer",
    stack: ["JavaScript", "Speech SDK", "Web UI"],
    tldr:
      "Built a web dashboard to run speech transcription and support repeatable evaluation workflows.",
    context:
      "Internal tooling for speech workflows. Details are intentionally generalized to respect confidentiality.",
    problem: [
      "Manual steps slowed transcription testing and made results hard to compare.",
      "Teams needed a consistent UI flow to run tests and capture outputs.",
    ],
    solution: [
      "Implemented a dashboard workflow: input → transcribe → review → export/copy.",
      "Designed clear UI states for reliability (loading, error, success).",
      "Kept outputs consistent to support repeatable evaluation runs.",
    ],
    impact: [
      "Reduced manual effort in transcription testing. (Qualitative)",
      "Improved repeatability of evaluation runs. (Qualitative)",
    ],
    contributions: [
      "Built the UI and transcription flow end-to-end.",
      "Handled edge cases and error states to keep runs repeatable.",
      "Documented usage and limitations for internal users.",
    ],
    nextSteps: [
      "Add structured evaluation sets (fixed audio samples) for consistent benchmarking.",
      "Add export formats (JSON/CSV) to support analysis workflows.",
    ],
  },

  "streaming-dashboard": {
    title: "Streaming Server Dashboard",
    timeframe: "2023–2024",
    role: "Software Developer",
    stack: ["Python", "Django", "SQL"],
    tldr:
      "Implemented a Django-based dashboard to monitor and support streaming workflows.",
    context:
      "Operational dashboard for internal teams. Implementation details and UI are omitted due to confidentiality.",
    problem: [
      "Streaming workflows needed a central view for status and operational checks.",
      "Troubleshooting took longer without a shared, structured overview.",
    ],
    solution: [
      "Built a Django dashboard to surface key states and operational signals.",
      "Focused on clarity: meaningful labels, stable layout, predictable navigation.",
      "Added guardrails and sensible defaults for safe operation.",
    ],
    impact: [
      "Faster troubleshooting and improved operational visibility. (Qualitative)",
      "Reduced reliance on ad-hoc manual checks. (Qualitative)",
    ],
    contributions: [
      "Implemented core pages and server-rendered views.",
      "Worked with data structures needed for operational visibility.",
      "Improved maintainability by keeping UI and data flow clear and consistent.",
    ],
    nextSteps: [
      "Add alert thresholds and notifications for key states.",
      "Introduce role-based views for different operational audiences.",
    ],
  },

  "load-testing-locust": {
    title: "Load & Performance Testing (locust.io)",
    timeframe: "2023–2024",
    role: "Software Developer",
    stack: ["Python", "locust.io"],
    tldr:
      "Created load scenarios and ran stress tests to surface bottlenecks before release.",
    context:
      "Performance testing for web apps. Results are summarized without revealing internal systems.",
    problem: [
      "Functional tests didn’t reveal performance bottlenecks under realistic load.",
      "The team needed repeatable test scenarios for critical paths.",
    ],
    solution: [
      "Wrote locust scenarios that simulate key user flows.",
      "Ran tests under increasing load and recorded results consistently.",
      "Shared findings and recommendations to improve stability.",
    ],
    impact: [
      "Earlier detection of bottlenecks and stability issues. (Qualitative)",
      "Higher confidence before release. (Qualitative)",
    ],
    contributions: [
      "Created and executed load profiles.",
      "Analyzed results and communicated findings clearly.",
      "Iterated on scenarios to better match real-world usage patterns.",
    ],
    nextSteps: [
      "Add automated performance regression checks in CI.",
      "Define performance budgets (p95 latency, error rate) per critical path.",
    ],
  },

  "whisper-model-eval": {
    title: "Whisper + Model Evaluation",
    timeframe: "2024",
    role: "Software Developer",
    stack: ["Python", "Whisper", "Hugging Face"],
    tldr:
      "Implemented transcription with Whisper and compared models for recognition/translation quality.",
    context:
      "Applied AI evaluation work. Specific datasets and internal metrics are omitted due to confidentiality.",
    problem: [
      "Speech workflows needed reliable transcription and, in some cases, translation.",
      "Model choice affected quality depending on audio conditions and language.",
    ],
    solution: [
      "Implemented a Whisper-based transcription workflow.",
      "Compared multiple Hugging Face models to assess quality tradeoffs.",
      "Summarized strengths/weaknesses to guide model selection.",
    ],
    impact: [
      "Improved confidence in model selection for speech workflows. (Qualitative)",
      "Clarified tradeoffs for accuracy vs speed. (Qualitative)",
    ],
    contributions: [
      "Implemented evaluation flow and comparison approach.",
      "Documented findings in a way teams could act on.",
      "Improved workflow reliability via repeatable runs.",
    ],
    nextSteps: [
      "Add a standardized evaluation set and scoring rubric (WER + qualitative notes).",
      "Track model performance by language and audio condition categories.",
    ],
  },
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];

  if (!cs) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="mt-2 text-neutral-700">
          This case study doesn’t exist yet.
        </p>
        <a className="mt-4 inline-block underline" href="/projects">
          Back to case studies
        </a>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <a className="text-sm underline" href="/projects">
        ← Back to case studies
      </a>

      <header className="mt-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {cs.title}
        </h1>
        <p className="mt-2 text-neutral-700">
          {cs.role} • {cs.timeframe}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {cs.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-5 text-neutral-800">{cs.tldr}</p>

        <p className="mt-4 rounded-lg border border-neutral-200 p-4 text-sm text-neutral-700">
          <strong>Confidentiality note:</strong> Code, screenshots, and internal links are omitted.
          I can walk through architecture, tradeoffs, and results in an interview.
        </p>
      </header>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Context</h2>
        <p className="mt-2 text-neutral-700">{cs.context}</p>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Problem</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
          {cs.problem.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Solution</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
          {cs.solution.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Impact</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
          {cs.impact.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">My contributions</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
          {cs.contributions.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Next steps</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
          {cs.nextSteps.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}