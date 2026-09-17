import { useEffect, useState } from "react";
import { img } from "../lib/images";
import { routeHrefs, useRoute, type Route } from "../lib/router";

const navLinks: { label: string; route: Route }[] = [
  { label: "About", route: "about" },
  { label: "Programmes", route: "programmes" },
  { label: "Impact", route: "impact" },
  { label: "Teams", route: "teams" },
  { label: "Contact", route: "contact" },
];

export function SiteHeader() {
  const current = useRoute();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [current]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-[#f7f7f7]/95 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto max-w-[1440px] flex items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-[130px]">
        <a href={routeHrefs.home} className="flex items-center gap-3">
          <img src={img.brandMark} alt="" className="h-10 w-10 sm:h-11 sm:w-11" loading="lazy" decoding="async" />
          <span className="font-nunito text-[14px] sm:text-[16px] font-semibold text-text-primary">
            STEM Foundation for Children
          </span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const active = current === item.route;
            return (
              <li key={item.route}>
                <a
                  href={routeHrefs[item.route]}
                  className={`font-nunito text-[16px] font-semibold transition-colors ${active ? "text-brand-orange" : "text-text-primary hover:text-brand-navy"}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={routeHrefs.contact}
          className="hidden rounded bg-brand-navy px-4 py-3 font-nunito text-[14px] sm:text-[16px] font-semibold text-white transition-colors hover:bg-brand-dark-blue lg:inline-flex"
        >
          Get Involved
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid h-11 w-11 place-items-center rounded-md text-text-primary transition-colors hover:bg-black/5 lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 top-[72px] z-30 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full z-40 origin-top border-b border-[#e9eaeb] bg-[#f7f7f7] shadow-lg transition-[transform,opacity] duration-200 ease-out lg:hidden ${open ? "opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
      >
        <ul className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4 sm:px-8">
          {navLinks.map((item) => {
            const active = current === item.route;
            return (
              <li key={item.route}>
                <a
                  href={routeHrefs[item.route]}
                  className={`block rounded-md px-3 py-3 font-nunito text-[16px] font-semibold transition-colors ${active ? "bg-brand-orange-25 text-brand-orange" : "text-text-primary hover:bg-black/5"}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="mt-2">
            <a
              href={routeHrefs.contact}
              className="block rounded bg-brand-navy px-4 py-3 text-center font-nunito text-[16px] font-semibold text-white transition-colors hover:bg-brand-dark-blue"
            >
              Get Involved
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
