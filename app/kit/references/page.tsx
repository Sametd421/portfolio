export default function ReferencesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">References</h1>

      <div className="mt-6 rounded-lg border border-neutral-200 p-5">
        <p className="font-medium">Public view</p>
        <p className="mt-2 text-neutral-700">
          References are <strong>available upon request</strong>.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Privacy note: I don’t publish contact details publicly. If you’re a recruiter or hiring
          manager, I can share verified reference contacts privately.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-neutral-200 p-5">
        <p className="font-medium">Employment reference document</p>
        <p className="mt-2 text-neutral-700">
          You can also review a written employment reference (PDF).
        </p>
        <div className="mt-4">
          <a className="rounded-md border border-neutral-300 px-4 py-2" href="/reference-telekom.pdf">
            Open employment reference (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}