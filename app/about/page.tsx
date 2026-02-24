export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>

      <p className="mt-4 text-neutral-800">
        I’m Samet Dogan, a software developer with experience building internal dashboards, running
        performance tests, and prototyping speech/video analysis workflows.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-semibold">What I’m good at</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-800">
            <li>Building clear, reliable internal tools and dashboards</li>
            <li>Performance testing mindset (repeatable load tests, bottleneck analysis)</li>
            <li>Applied AI evaluation (speech transcription, model comparisons)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">How I work</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-800">
            <li>Start with the problem and success metrics</li>
            <li>Ship iteratively with simple, testable interfaces</li>
            <li>Prioritize maintainability: readable code, predictable UI states</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Proof</h2>
          <p className="mt-2 text-neutral-700">
            See the <a className="underline" href="/kit/resume">resume</a> and{" "}
            <a className="underline" href="/kit/references">employment reference</a>.
          </p>
        </section>
      </div>
    </main>
  );
}