export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="space-y-4">
        <p className="text-sm text-neutral-600">Samet Dogan • Software Developer</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          I build reliable web tools and applied AI workflows.
        </h1>
        <p className="max-w-2xl text-base text-neutral-700 sm:text-lg">
          Full-stack developer with experience building dashboards, running load tests, and prototyping
          speech/video analysis workflows. I care about performance, accessibility, and maintainable delivery.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="rounded-md bg-black px-4 py-2 text-white"
            href="/projects"
          >
            View projects
          </a>
          <a
            className="rounded-md border border-neutral-300 px-4 py-2"
            href="/kit/resume"
          >
            Download resume
          </a>
          <a
            className="rounded-md border border-neutral-300 px-4 py-2"
            href="/kit/cover-letter"
          >
            Generate cover letter
          </a>
        </div>
      </header>

      <section className="mt-12 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Credibility</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-800">
          <li>Deutsche Telekom MMS — Software Developer (Intern → Working Student)</li>
          <li>Built dashboards for streaming + speech-to-text workflows</li>
          <li>Load & performance testing with locust.io</li>
          <li>OpenAI Whisper + Hugging Face model comparisons</li>
        </ul>
      </section>

      <section className="mt-12 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Featured projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <a className="rounded-lg border border-neutral-200 p-4 hover:border-neutral-400" href="/projects/speech-to-text-dashboard">
            <p className="font-medium">Speech-to-Text Dashboard</p>
            <p className="mt-1 text-sm text-neutral-700">
              Web dashboard for transcription workflows and repeatable evaluation.
            </p>
          </a>
          <a className="rounded-lg border border-neutral-200 p-4 hover:border-neutral-400" href="/projects/load-testing-locust">
            <p className="font-medium">Load Testing Toolkit (locust.io)</p>
            <p className="mt-1 text-sm text-neutral-700">
              Load profiles + repeatable runs to surface bottlenecks early.
            </p>
          </a>
        </div>
      </section>

      <section className="mt-12 border-t border-neutral-200 pt-8">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-2 text-neutral-700">
          Email: <a className="underline" href="mailto:samet.d421@gmail.com">samet.d421@gmail.com</a>
        </p>
      </section>
    </main>
  );
}