export default function KitPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Job Application Kit
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Everything a recruiter or hiring manager needs: resume, references (privacy-first), and a
        cover letter generator.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          className="rounded-lg border border-neutral-200 p-5 hover:border-neutral-400"
          href="/kit/resume"
        >
          <h2 className="text-lg font-semibold">Resume</h2>
          <p className="mt-2 text-neutral-700">
            Download PDF + ATS-friendly text version.
          </p>
        </a>

        <a
          className="rounded-lg border border-neutral-200 p-5 hover:border-neutral-400"
          href="/kit/references"
        >
          <h2 className="text-lg font-semibold">References</h2>
          <p className="mt-2 text-neutral-700">
            Privacy-first: public shows “available upon request”. Private mode can be enabled later.
          </p>
        </a>

        <a
          className="rounded-lg border border-neutral-200 p-5 hover:border-neutral-400"
          href="/kit/cover-letter"
        >
          <h2 className="text-lg font-semibold">Cover letter generator</h2>
          <p className="mt-2 text-neutral-700">
            Generate a tailored cover letter from a job description + your achievements.
          </p>
        </a>
      </div>
    </main>
  );
}