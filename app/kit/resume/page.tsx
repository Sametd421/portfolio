export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Resume</h1>
      <p className="mt-3 text-neutral-700">
        Download the PDF or copy the ATS-friendly text version below.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a className="rounded-md bg-black px-4 py-2 text-white" href="/resume.pdf" download>
          Download resume (PDF)
        </a>
        <a className="rounded-md border border-neutral-300 px-4 py-2" href="/projects">
          View case studies
        </a>
      </div>

      <section className="mt-10 border-t border-neutral-200 pt-6">
        <h2 className="text-lg font-semibold">ATS-friendly resume text</h2>
        <p className="mt-2 text-sm text-neutral-600">
          This version is optimized for parsing: consistent headings, no columns, minimal symbols.
        </p>

        <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-neutral-200 p-4 text-sm">
{`SAMET DOGAN
Software Developer
Email: samet.d421@gmail.com | Phone: +49 15566 274432

SUMMARY
Software developer with experience building dashboards, running load tests, and prototyping speech/video analysis workflows.

SKILLS
Java, JavaScript, Python, HTML/CSS, SQL

EXPERIENCE
Deutsche Telekom MMS GmbH — Software Developer (Intern → Working Student)
Mar 2023 – Sep 2024
- Built dashboards (speech-to-text, streaming server)
- Performed load/performance testing with locust.io
- Implemented speech transcription with OpenAI Whisper
- Compared Hugging Face models for speech recognition/translation
- Compared Azure AI Video Indexer vs GPT-style prompt analysis approaches for video/audio data

EDUCATION
B.Sc. Wirtschaftsinformatik — HTW Berlin (Apr 2020 – present)
Freie Universität Berlin — Informatik (2018–2019)

LANGUAGES
German (native), Turkish (native), English (C1)
`}
        </pre>
      </section>
    </main>
  );
}