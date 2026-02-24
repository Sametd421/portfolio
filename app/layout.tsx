import "./globals.css";

export const metadata = {
  title: "Samet Dogan — Software Developer",
  description:
    "Software developer portfolio: case studies, resume, references, and cover letter generator.",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-md px-2 py-1 text-sm text-neutral-800 hover:bg-neutral-100"
    >
      {label}
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
            <a href="/" className="font-semibold tracking-tight">
              Samet Dogan
            </a>

            <nav className="flex flex-wrap items-center gap-1">
              <NavLink href="/projects" label="Case studies" />
              <NavLink href="/kit" label="Job kit" />
              <NavLink href="/kit/resume" label="Resume" />
              <NavLink href="/contact" label="Contact" />
            </nav>

            <a
              href="/resume.pdf"
              className="hidden rounded-md bg-black px-3 py-2 text-sm text-white sm:inline-block"
            >
              Download resume
            </a>
          </div>
        </header>

        <main id="content">{children}</main>

        <footer className="mt-16 border-t border-neutral-200">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p>© {new Date().getFullYear()} Samet Dogan</p>
              <div className="flex flex-wrap gap-3">
                <a className="underline" href="/resume.pdf">
                  Resume PDF
                </a>
                <a className="underline" href="/kit/references">
                  References
                </a>
                <a className="underline" href="/projects">
                  Case studies
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}