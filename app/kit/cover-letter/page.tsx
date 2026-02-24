"use client";

import { useMemo, useState } from "react";

const achievements = [
  "Built dashboards for speech-to-text and streaming workflows in a production environment.",
  "Ran load and performance tests with locust.io to surface bottlenecks early.",
  "Implemented transcription workflows (Whisper) and compared models for quality tradeoffs.",
];

function buildLetter(jobTitle: string, company: string, jd: string, selected: string[]) {
  const bullets = selected.map((a) => `- ${a}`).join("\n");
  const jdLine = jd.trim() ? "I’m applying based on the role description you shared." : "I’m applying because the role matches my experience.";

  return `Dear Hiring Team at ${company || "[Company]"},
  
I’m writing to apply for the ${jobTitle || "[Job Title]"} position. ${jdLine}

In my recent experience, I’ve shipped internal tools and evaluation workflows that prioritize reliability, performance, and clear UX. Highlights:
${bullets || "- [Add 2–3 relevant achievements]"}

I work well in environments where requirements evolve, and I’m comfortable moving from ambiguity to a shipped, maintainable solution. I focus on measurable outcomes, readable code, and performance validation.

I’d welcome the chance to discuss how I can contribute to ${company || "your team"}. Thank you for your time and consideration.

Sincerely,
Samet Dogan
samet.d421@gmail.com`;
}

export default function CoverLetterPage() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jd, setJd] = useState("");
  const [selected, setSelected] = useState<string[]>([achievements[0], achievements[1]]);

  const letter = useMemo(() => buildLetter(jobTitle, company, jd, selected), [jobTitle, company, jd, selected]);

  function toggle(a: string) {
    setSelected((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  }

  async function copy() {
    await navigator.clipboard.writeText(letter);
    alert("Copied to clipboard");
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Cover letter generator</h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Fill job title + company, optionally paste the job description, select achievements, and copy the result.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-lg border border-neutral-200 p-5">
          <h2 className="text-lg font-semibold">Inputs</h2>

          <label className="mt-4 block text-sm font-medium">
            Job title
            <input
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g., Full-Stack Developer"
            />
          </label>

          <label className="mt-4 block text-sm font-medium">
            Company
            <input
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="e.g., Spotify"
            />
          </label>

          <label className="mt-4 block text-sm font-medium">
            Job description (optional)
            <textarea
              className="mt-1 h-32 w-full rounded-md border border-neutral-300 px-3 py-2"
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste job description here…"
            />
          </label>

          <div className="mt-4">
            <p className="text-sm font-medium">Select achievements</p>
            <div className="mt-2 space-y-2">
              {achievements.map((a) => (
                <label key={a} className="flex gap-2 text-sm text-neutral-800">
                  <input type="checkbox" checked={selected.includes(a)} onChange={() => toggle(a)} />
                  <span>{a}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-neutral-200 p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Output</h2>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={copy}
              type="button"
            >
              Copy
            </button>
          </div>

          <pre className="mt-4 whitespace-pre-wrap rounded-md border border-neutral-200 p-4 text-sm">
            {letter}
          </pre>
        </section>
      </div>
    </main>
  );
}