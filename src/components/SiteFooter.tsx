import { img } from "../lib/images";
import { routeHrefs } from "../lib/router";

const footerColumns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Organisation",
    links: [
      { label: "About Us", href: routeHrefs.about },
      { label: "Programmes", href: routeHrefs.programmes },
      { label: "Impact", href: routeHrefs.impact },
      { label: "Teams", href: routeHrefs.teams },
      { label: "Gallery", href: "#" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: routeHrefs.contact },
      { label: "Partner With Us", href: routeHrefs.contact },
      { label: "Volunteer", href: routeHrefs.contact },
      { label: "School Partnership", href: routeHrefs.contact },
      { label: "Contact Us", href: routeHrefs.contact },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-brand-footer text-white">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-12 px-4 pb-10 pt-16 sm:px-8 lg:px-[130px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-6">
            <a href={routeHrefs.home} className="flex items-center gap-3">
              <img src={img.logo} alt="" className="h-11 w-11 rounded-2xl object-cover" loading="lazy" decoding="async" />
              <span className="font-nunito text-[16px] font-semibold">STEM Foundation for Children</span>
            </a>
            <ul className="flex items-center gap-4" aria-label="Social">
              <li><a href="#" aria-label="X / Twitter"><img src={img.social1} alt="" className="h-9 w-9" loading="lazy" decoding="async" /></a></li>
              <li><a href="https://www.linkedin.com/company/stemeducation4children" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={img.social2} alt="" className="h-9 w-9" loading="lazy" decoding="async" /></a></li>
              <li><a href="https://www.instagram.com/stemeducationforchildren" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={img.social3} alt="" className="h-9 w-9" loading="lazy" decoding="async" /></a></li>
              <li><a href="#" aria-label="WhatsApp"><img src={img.social4} alt="" className="h-9 w-9" loading="lazy" decoding="async" /></a></li>
            </ul>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr]">
            {footerColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <p className="font-inter text-[14px] font-semibold text-[#f7f7f7]">{col.heading}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="font-inter text-[15px] font-semibold text-[#cecfd2] transition-colors hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <label htmlFor="newsletter-email" className="font-inter text-[14px] font-semibold text-[#f7f7f7]">
                Stay up to date
              </label>
              <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-[#373a41] bg-[#0c0e12] px-4 py-2.5 font-inter text-[15px] text-white placeholder:text-[#85888e] focus:border-brand-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-brand-gold px-4 py-2.5 font-inter text-[15px] font-semibold text-white shadow-sm ring-1 ring-inset ring-black/10 transition-colors hover:brightness-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#22262f] pt-8 font-inter text-[14px] text-[#94979c] sm:text-[16px]">
          <p>© 2026 STEM Education for Children Foundation. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
