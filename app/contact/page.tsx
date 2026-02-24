export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-3 text-neutral-700">
        Reach out for roles, collaborations, or feedback.
      </p>

      <div className="mt-6 rounded-lg border border-neutral-200 p-5">
        <p className="text-neutral-800">
          Email:{" "}
          <a className="underline" href="mailto:samet.d421@gmail.com">
            samet.d421@gmail.com
          </a>
        </p>
        <p className="mt-2 text-neutral-800">Phone: +49 15566 274432</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a className="rounded-md border border-neutral-300 px-4 py-2" href="https://github.com/Sametd421">
            GitHub
          </a>
          <a className="rounded-md border border-neutral-300 px-4 py-2" href="#">
            LinkedIn (add link)
          </a>
        </div>
      </div>
    </main>
  );
}