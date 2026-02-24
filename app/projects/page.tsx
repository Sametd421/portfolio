const caseStudies = [
  {
    slug: "speech-to-text-dashboard",
    title: "Speech-to-Text Dashboard",
    summary:
      "Built a web dashboard to run speech transcription and support repeatable evaluation workflows.",
    stack: ["JavaScript", "Speech SDK", "Web UI"],
    role: "Software Developer",
    timeframe: "2023",
  },
  {
    slug: "streaming-dashboard",
    title: "Streaming Server Dashboard",
    summary:
      "Implemented a Django-based dashboard to monitor and support streaming workflows.",
    stack: ["Python", "Django", "SQL"],
    role: "Software Developer",
    timeframe: "2023–2024",
  },
  {
    slug: "load-testing-locust",
    title: "Load & Performance Testing (locust.io)",
    summary:
      "Created load scenarios and ran stress tests to surface bottlenecks before release.",
    stack: ["Python", "locust.io"],
    role: "Software Developer",
    timeframe: "2023–2024",
  },
  {
    slug: "whisper-model-eval",
    title: "Whisper + Model Evaluation",
    summary:
      "Implemented transcription with Whisper and compared models for recognition/translation quality.",
    stack: ["Python", "Whisper", "Hugging Face"],
    role: "Software Developer",
    timeframe: "2024",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Case studies
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Selected work from production environments. Code and screenshots are not public due to
        confidentiality. I can walk through architecture and decisions in interviews.
      </p>

      <div className="mt-8 grid gap-4">
        {caseStudies.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-lg border border-neutral-200 p-5 hover:border-neutral-400"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-sm text-neutral-600">
                {p.timeframe} • {p.role}
              </p>
            </div>

            <p className="mt-2 text-neutral-700">{p.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-3 text-sm text-neutral-600">Code: Private (work project)</p>
          </a>
        ))}
      </div>
    </main>
  );
}