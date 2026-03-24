import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, ChevronRight } from "lucide-react";

export type LegalTocItem = { id: string; label: string };

type LegalDocumentLayoutProps = {
  title: string;
  description?: string;
  meta: { label: string; value: string }[];
  toc: LegalTocItem[];
  children: ReactNode;
  relatedLinks?: { to: string; label: string }[];
};

const LegalDocumentLayout = ({
  title,
  description,
  meta,
  toc,
  children,
  relatedLinks = [
    { to: "/faq", label: "FAQ" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms & Conditions" },
  ],
}: LegalDocumentLayoutProps) => {
  const shortTitle = title.replace(/^Pullova Home Beauty\s+/i, "").trim();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-pink-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" aria-hidden />
            <span className="text-gray-700 font-medium">{shortTitle}</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
                <FileText className="w-6 h-6 text-white" aria-hidden />
              </div>
              <div className="min-w-0">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  {title}
                </h1>
                {description ? (
                  <p className="mt-3 text-gray-600 leading-relaxed max-w-3xl">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm">
              {meta.map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">{row.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-10 lg:items-start">
            <div className="legal-document space-y-10 text-gray-700 leading-relaxed min-w-0">
              {children}
            </div>

            <aside className="hidden lg:block sticky top-28 self-start">
              <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  On this page
                </h2>
                <ul className="space-y-1.5 text-sm">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-gray-600 hover:text-pink-600 transition-colors block py-0.5 border-l-2 border-transparent hover:border-pink-500 pl-2 -ml-px"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Related
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {relatedLinks.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="text-pink-600 hover:text-pink-700 font-medium"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* Mobile TOC */}
          <div className="lg:hidden mt-10 p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              On this page
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalDocumentLayout;

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 pb-2 mb-4 border-b border-gray-200 flex flex-wrap items-baseline gap-x-2 gap-y-0">
        {number ? (
          <span className="text-pink-600 font-bold tabular-nums">{number}</span>
        ) : null}
        <span>{title}</span>
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold text-gray-900 mt-6 first:mt-0">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-pink-500">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export { Section, Subheading, BulletList };
