import { useEffect, useState } from "react";
import { img } from "../lib/images";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionEyebrow, SectionHeading } from "../components/Typography";
import { PrimaryButton, OutlineButton } from "../components/Buttons";
import { PageHero } from "../components/PageHero";
import { useHashParam } from "../lib/router";

const VOLUNTEER_URL = "https://forms.gle/FcXRpUxkqVMhtT8L6";

const involveOptions: { title: string; body: string; cta: string; href: string; external?: boolean }[] = [
  { title: "Donate", body: "covers one child's full programme for a year. Every amount matters.", cta: "Donate Now", href: "#/contact?topic=donations" },
  { title: "Partner With Us", body: "CSR partnerships, school collaborations, and institutional funding all welcome.", cta: "Partner", href: "#/contact?topic=corporate" },
  { title: "Volunteer", body: "Educators, engineers, and STEM professionals — bring your skills to the classroom.", cta: "Volunteer", href: VOLUNTEER_URL, external: true },
];

export default function Contact() {
  const topic = useHashParam("topic");
  useEffect(() => {
    if (!topic) return;
    const el = document.getElementById("contact-form");
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [topic]);
  return (
    <div className="bg-white text-text-primary">
      <SiteHeader />
      <main>
        <PageHero
          image={img.hero8}
          overlay="linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.45))"
          title={<>Let's build something<br />together.</>}
          body="Whether you're a school, a company with CSR goals, an individual donor, or just someone who believes what we believe — we'd love to hear from you."
        />
        <BeAPart />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function BeAPart() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 py-16 sm:px-8 lg:px-[130px]">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-center px-6 py-12 sm:px-12 lg:px-16 lg:py-16"
        style={{ backgroundImage: `linear-gradient(to right, rgba(5,34,57,0.85), rgba(5,34,57,0.55)), url("${img.ctaBg}")` }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-between gap-10 text-white">
            <div className="flex flex-col gap-4">
              <SectionEyebrow color="text-brand-orange">GET INVOLVED</SectionEyebrow>
              <h2 className="font-nunito text-[26px] font-semibold leading-tight tracking-tight sm:text-[30px] lg:text-[34px]">
                You can be part of building Africa's future.
              </h2>
              <p className="font-inter text-[15px] leading-[1.6] text-white/90 sm:text-[16px] lg:text-[18px]">
                Every donation, every partnership, every volunteer hour goes directly to giving a Nigerian child access to hands-on STEM learning they would otherwise never have.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton>Contact Us Today</PrimaryButton>
              <OutlineButton variant="light">Follow Our Journey</OutlineButton>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {involveOptions.map((o) => (
              <div
                key={o.title}
                className="rounded-lg bg-white/95 p-5 shadow-[0_0_0_0_rgba(10,13,18,0)] transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(10,13,18,0.08)] motion-reduce:transform-none motion-reduce:hover:translate-y-0"
              >
                <p className="font-nunito text-[17px] font-semibold text-brand-dark-blue sm:text-[19px]">{o.title}</p>
                <p className="mt-1 font-inter text-[13px] leading-[1.6] text-[#61656c] sm:text-[14px]">{o.body}</p>
                <a
                  href={o.href}
                  target={o.external ? "_blank" : undefined}
                  rel={o.external ? "noopener noreferrer" : undefined}
                  className="mt-3 inline-flex items-center justify-center rounded bg-brand-navy px-4 py-2 font-nunito text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark-blue sm:text-[14px]"
                >
                  {o.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact-form" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1440px] grid gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-[130px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <SectionHeading>Contact us</SectionHeading>
            <p className="font-inter text-[15px] leading-[1.6] text-[#61656c] sm:text-[16px]">
              Our friendly team would love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
        <MapPlaceholder />
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-inter text-[13px] font-semibold text-text-secondary sm:text-[14px]">
        {label}
        {required && " *"}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-md border border-[#d5d7da] bg-white px-3 py-2.5 font-inter text-[14px] text-text-primary placeholder:text-[#94979c] focus:border-brand-navy focus:outline-none";

const validTopics = new Set(["donations", "corporate", "school", "general", "media"]);

function ContactForm() {
  const raw = useHashParam("topic");
  const [override, setOverride] = useState<string | null>(null);
  const topic = override ?? (validTopics.has(raw) ? raw : "");
  useEffect(() => {
    setOverride(null);
  }, [raw]);
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" required>
          <input className={inputClass} placeholder="First name" />
        </Field>
        <Field label="Last name" required>
          <input className={inputClass} placeholder="Last name" />
        </Field>
      </div>
      <Field label="Email" required>
        <input type="email" className={inputClass} placeholder="you@company.com" />
      </Field>
      <Field label="Phone number">
        <div className="flex overflow-hidden rounded-md border border-[#d5d7da]">
          <select className="border-r border-[#d5d7da] bg-white px-3 py-2.5 font-inter text-[14px] text-text-primary focus:outline-none" defaultValue="US">
            <option value="US">US</option>
            <option value="NG">NG</option>
            <option value="UK">UK</option>
          </select>
          <input className="flex-1 bg-white px-3 py-2.5 font-inter text-[14px] text-text-primary placeholder:text-[#94979c] focus:outline-none" placeholder="+1 (555) 000-0000" />
        </div>
      </Field>
      <Field label="I'm reaching out about" required>
        <select
          className={`${inputClass} appearance-none bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'><path d='M6 8l4 4 4-4' stroke='%2361656c' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
            backgroundPosition: "right 12px center",
          }}
          value={topic}
          onChange={(e) => setOverride(e.target.value)}
        >
          <option value="" disabled>Select a topic</option>
          <option value="donations">Donations</option>
          <option value="corporate">Corporate / CSR partnership</option>
          <option value="school">School partnership</option>
          <option value="general">General question</option>
          <option value="media">Media / press inquiry</option>
        </select>
      </Field>
      <Field label="Message" required>
        <textarea rows={4} className={inputClass} placeholder="Leave us a message..." />
      </Field>
      <label className="flex items-start gap-2 font-inter text-[13px] text-[#61656c]">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#d5d7da]" />
        <span>
          You agree to our friendly <a href="#" className="underline">privacy policy</a>.
        </span>
      </label>
      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-brand-dark-blue px-5 py-3 font-nunito text-[15px] font-semibold text-white transition-colors hover:bg-brand-navy"
      >
        Send message
      </button>
    </form>
  );
}

function MapPlaceholder() {
  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-lg bg-[#e6e9eb]">
      <iframe
        title="Lagos, Nigeria"
        src="https://www.openstreetmap.org/export/embed.html?bbox=3.15%2C6.40%2C3.65%2C6.65&layer=mapnik&marker=6.5244%2C3.3792"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
      <a
        href="https://www.openstreetmap.org/?mlat=6.5244&mlon=3.3792#map=11/6.5244/3.3792"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 rounded bg-white/90 px-2 py-1 font-inter text-[11px] font-semibold text-brand-dark-blue shadow-sm hover:bg-white"
      >
        View larger map
      </a>
    </div>
  );
}
