import { useEffect, useRef } from "react";
import { img, heroCollage } from "../lib/images";
import { PrimaryButton, OutlineButton } from "../components/Buttons";
import { SectionEyebrow, SectionHeading, SplitWords } from "../components/Typography";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { routeHrefs } from "../lib/router";

const stats = [
  { value: "<2%", label: "of African students finish school with basic STEM skills", source: "Source: UN OSAA" },
  { value: "1 in 4", label: "university students in Africa pursue STEM fields", source: "Source: UN OSAA" },
  { value: "60%", label: "of Africa's population is under 25 — the opportunity", source: "Source: AU Commission" },
  { value: "79", label: "scientists per million in Africa vs 4,500 in the US", source: "Source: UN OSAA" },
];

const impactStats = [
  { value: "130+", label: "Children reached in Program" },
  { value: "8", label: "Weeks of weekly hands-on sessions" },
  { value: "3", label: "STEM Clubs launched" },
  { value: "10K+", label: "Children targeted by 2030 across Nigeria" },
];

const partners = [
  { logo: img.partnerA, name: "Cs4Hope Foundation" },
  { logo: img.partnerB, name: "Stem Dost" },
  { logo: img.partnerC, name: "Fem Tech" },
];

const involveOptions: { title: string; body: string; cta: string; href: string; external?: boolean }[] = [
  { title: "Donate", body: "Covers one child's full programme for a year. Every amount matters.", cta: "Donate Now", href: "#/contact?topic=donations" },
  { title: "Partner With Us", body: "CSR partnerships, school collaborations, and institutional funding all welcome.", cta: "Partner", href: "#/contact?topic=corporate" },
  { title: "Volunteer", body: "Educators, engineers, and STEM professionals — bring your skills to the classroom.", cta: "Volunteer", href: "https://forms.gle/FcXRpUxkqVMhtT8L6", external: true },
];

export default function Home() {
  return (
    <div className="bg-white text-text-primary">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <OurStory />
        <Programmes />
        <Partners />
        <Impact />
        <GetInvolved />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const colA = useRef<HTMLDivElement>(null);
  const colB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      if (colA.current) colA.current.style.transform = `translate3d(0, ${y * -0.12}px, 0)`;
      if (colB.current) colB.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`;
      raf = 0;
    };
    const reset = () => {
      if (colA.current) colA.current.style.transform = "";
      if (colB.current) colB.current.style.transform = "";
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    const attach = () => {
      if (desktop.matches) {
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        reset();
        window.removeEventListener("scroll", onScroll);
      }
    };
    attach();
    desktop.addEventListener("change", attach);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", attach);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,#e4e7ec_1px,transparent_1px),linear-gradient(to_bottom,#e4e7ec_1px,transparent_1px)] [background-size:104px_104px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
      />
      <div className="relative mx-auto max-w-[1440px] grid gap-12 px-4 pt-4 pb-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-[130px] lg:pt-6 lg:pb-24">
        <div className="flex flex-col items-start gap-6 lg:justify-center lg:gap-10">
          <div className="hero-rise flex flex-wrap items-center gap-2 rounded-lg border border-[#d5d7da] bg-white p-1 pr-3 shadow-sm">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d5d7da] bg-white px-2 py-0.5 font-nunito text-[12px] font-semibold text-[#414651]">
              <img src={img.dot} alt="" className="h-2 w-2" loading="lazy" decoding="async" />
              NOW IN 2 STATES
            </span>
            <span className="inline-flex items-center gap-1 font-nunito text-[12px] font-semibold text-[#414651]">
              3 STEM CLUBS LAUNCHED, EXPANDING ACROSS NIGERIA
              <img src={img.arrowRight} alt="" className="h-4 w-4" loading="lazy" decoding="async" />
            </span>
          </div>
          <h1 className="font-nunito text-[36px] font-semibold leading-tight text-black sm:text-[44px] lg:text-[60px] lg:leading-[1.15]">
            <SplitWords text="Building Africa's Future, One Child in STEM at a Time" baseDelay={120} stepMs={50} />
          </h1>
          <p className="hero-rise font-nunito text-[16px] font-medium text-text-secondary sm:text-[18px] lg:text-[20px]" style={{ animationDelay: "160ms" }}>
            We spark curiosity, build confidence, and nurture young innovators in underserved communities through hands-on, project-based STEM education that is fun, practical, and life-changing.
          </p>
          <div className="hero-rise flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <PrimaryButton href={routeHrefs.contact}>Support Our Mission</PrimaryButton>
            <OutlineButton href={routeHrefs.programmes}>See Our Work</OutlineButton>
          </div>
        </div>
        <div className="hero-rise relative -mx-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] sm:mx-0 lg:mx-auto lg:h-[836px] lg:w-[576px]" style={{ animationDelay: "120ms" }}>
          <div className="grid grid-cols-2 gap-[10px]">
            <div ref={colA} className="flex flex-col gap-[10px] will-change-transform lg:-mt-[9px]">
              {[0, 2, 4, 6].map((i, idx) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <img
                    src={heroCollage[i]}
                    alt=""
                    className="aspect-[283/295] w-full object-cover"
                    loading="eager"
                    decoding="async"
                    {...(idx === 0 ? { fetchPriority: "high" as const } : {})}
                  />
                </div>
              ))}
            </div>
            <div ref={colB} className="flex flex-col gap-[10px] will-change-transform lg:-mt-[152px]">
              {[1, 3, 5, 7].map((i, idx) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <img
                    src={heroCollage[i]}
                    alt=""
                    className="aspect-[283/295] w-full object-cover"
                    loading="eager"
                    decoding="async"
                    {...(idx === 0 ? { fetchPriority: "high" as const } : {})}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section aria-label="Why this matters" className="border-y border-[#cecfd2] bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] grid gap-8 px-4 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-12 lg:px-[130px]">
        {stats.map((s, i) => (
          <div key={s.label} className="reveal flex flex-col gap-3" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
            <p className="font-nunito text-[32px] font-semibold text-brand-dark-blue lg:text-[40px]">{s.value}</p>
            <p className="font-nunito text-[14px] font-semibold text-[#85888e] lg:text-[16px]">{s.label}</p>
            <p className="font-nunito text-[13px] font-bold text-brand-orange lg:text-[14px]">{s.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section id="about" className="bg-[#faf8f4]">
      <div className="mx-auto max-w-[1440px] grid gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-[130px] lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <SectionEyebrow>Our Story</SectionEyebrow>
            <SectionHeading>We started this because the children couldn't wait.</SectionHeading>
          </div>
          <div className="reveal overflow-hidden rounded-lg">
            <img src={img.story} alt="Children in a STEM classroom" className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6 font-inter text-[16px] leading-[1.7] text-[#535862] sm:text-[18px]">
            <p>
              STEM Education for Children Foundation was built on a simple but urgent belief: every Nigerian child — regardless of where they grow up or what their family earns — deserves access to hands-on, practical STEM education that builds real skills and opens real doors.
            </p>
            <p>
              Founded by Rahila Namah, a Computer Engineer from Zuru, Kebbi State, the Foundation launched its first After-School STEM Club in Lagos in January 2026 with 14 children. We've been building ever since.
            </p>
          </div>
          <blockquote className="rounded-lg bg-[#e9eaeb] p-8">
            <p className="font-inter text-[16px] italic font-light leading-[1.7] text-[#374151] sm:text-[18px]">
              "I kept waiting until I was comfortable enough to start. Then I realised — the children can't wait for me to be comfortable."
            </p>
            <footer className="mt-6 font-inter text-[16px] font-semibold text-[#373a41] sm:text-[18px]">
              — Rahila Namah, Founder
            </footer>
          </blockquote>
          <div>
            <a
              href={routeHrefs.about}
              className="inline-flex items-center gap-2 rounded-lg bg-[#213b68] px-5 py-3 font-inter text-[16px] font-semibold text-white shadow-sm ring-1 ring-inset ring-black/10 transition-colors hover:bg-brand-dark-blue"
            >
              Read Our Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programmes() {
  return (
    <section id="programmes" className="bg-white">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center gap-12 px-4 py-20 sm:px-8 lg:px-[130px] lg:py-24">
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <SectionEyebrow color="text-brand-orange">OUR PROGRAMMES</SectionEyebrow>
          <SectionHeading className="text-center">Learning that sticks because you built it yourself</SectionHeading>
          <p className="font-inter text-[16px] leading-[1.6] text-[#535862] sm:text-[18px] lg:text-[20px]">
            We don't teach from textbooks. We teach through building, testing, failing, and trying again. Every session is a real experiment. Every project is a real solution to a real problem.
          </p>
        </div>
        <div className="grid w-full gap-6 lg:grid-cols-[344px_816px] lg:justify-center">
          <article className="reveal hover-lift flex flex-col gap-5 rounded-lg bg-[#f4f4f4] p-5 lg:h-[541px] lg:w-[344px]">
            <div className="flex flex-1 items-center justify-center overflow-hidden">
              <img src={img.programStemClub} alt="" className="h-[280px] w-[280px] object-contain" loading="lazy" decoding="async" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-nunito text-[18px] font-semibold text-text-secondary sm:text-[20px]">After-School STEM Club</h3>
              <p className="font-nunito text-[14px] leading-[1.7] text-[#61656c]">
                Our flagship 8-week programme brings children aged 7–13 together once a week for hands-on STEM learning using low-cost, locally available materials — culminating in a public Project Exhibition.
              </p>
            </div>
          </article>
          <div className="grid gap-6 lg:grid-rows-[254px_254px]">
            <article className="reveal hover-lift grid gap-5 rounded-lg bg-[#f4f4f4] p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center lg:h-[254px] lg:w-[816px]" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <div className="h-[200px] overflow-hidden rounded bg-[#fef5ec] lg:h-[214px]">
                <img src={img.programMentorship} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-nunito text-[18px] font-semibold text-text-secondary sm:text-[20px]">
                  Mentorship & STEM Career Pathways Program
                </h3>
                <p className="font-nunito text-[14px] leading-[1.7] text-[#61656c]">
                  Mentorship, career exposure, leadership development, industry engagement, and guidance on educational and career pathways.
                </p>
              </div>
            </article>
            <article className="reveal hover-lift grid gap-5 rounded-lg bg-[#f4f4f4] p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center lg:h-[254px] lg:w-[816px]" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
              <div className="flex flex-col gap-2 md:order-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-nunito text-[18px] font-semibold text-text-secondary sm:text-[20px]">
                    Skilled Trades & Technical Careers
                  </h3>
                  <span className="rounded-full bg-brand-orange-25 px-2 py-0.5 font-nunito text-[12px] font-semibold text-brand-orange">
                    Coming Soon
                  </span>
                </div>
                <p className="font-nunito text-[14px] leading-[1.7] text-[#61656c]">
                  Training and exposure to practical trades such as construction, electrical installation, plumbing, renewable energy systems, fabrication, and other technical professions.
                </p>
              </div>
              <div className="flex items-center justify-center md:order-2">
                <div className="h-[180px] w-[130px] shrink-0 overflow-hidden rounded-lg bg-[#f0d3f2]">
                  <img src={img.tradeA} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="relative z-10 -mx-3 h-[200px] w-[165px] shrink-0 self-center overflow-hidden rounded-lg bg-[#cecfd2]">
                  <img src={img.tradeC} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="h-[180px] w-[130px] shrink-0 overflow-hidden rounded-lg bg-[#f9c08b]">
                  <img src={img.tradeB} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
            </article>
          </div>
        </div>
        <PrimaryButton href={routeHrefs.programmes}>Explore All Programmes</PrimaryButton>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section aria-label="Partners" className="bg-white pb-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[130px]">
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-[#fafafa] px-6 py-14 sm:px-8">
          <p className="font-inter text-[16px] text-[#535862] sm:text-[20px]">Our Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {partners.map((p, i) => (
              <div key={p.name} className="reveal flex items-center gap-3" style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
                <img src={p.logo} alt="" className="h-10 w-10 object-contain sm:h-12 sm:w-12" loading="lazy" decoding="async" />
                <span className="font-nunito text-[18px] font-black text-text-primary sm:text-[22px]">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-10 px-4 py-20 sm:px-8 lg:px-[130px] lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-2xl flex-col gap-3">
            <SectionEyebrow color="text-brand-orange">OUR IMPACT</SectionEyebrow>
            <SectionHeading>Small numbers. Enormous momentum.</SectionHeading>
            <p className="font-inter text-[16px] leading-[1.5] text-[#61656c] sm:text-[18px]">
              We started with 14 children and one classroom. Every number below represents a real child who built something they'd never built before — and who discovered they could.
            </p>
          </div>
          <PrimaryButton href={routeHrefs.impact}>See Our Full Impact</PrimaryButton>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
          <figure className="reveal relative overflow-hidden rounded-lg">
            <img src={img.impact} alt="Students on an industry visit" className="h-full min-h-[400px] w-full object-cover" loading="lazy" decoding="async" />
            <figcaption className="absolute bottom-5 left-5 right-5 max-w-md rounded-lg bg-[#fef5ec]/95 p-5 backdrop-blur">
              <p className="font-nunito text-[14px] leading-[1.6] text-text-secondary">
                "I want to make something like this one day." — One of our students, aged 9, during our Glass Fusion industry visit. He had never been inside a factory before.
              </p>
              <div className="mt-3 flex flex-col gap-0.5">
                <p className="font-inter text-[14px] font-semibold text-text-secondary">STEM Club Student</p>
                <p className="font-inter text-[13px] text-[#61656c]">Eternal Excellence School, Lagos — 2026</p>
              </div>
            </figcaption>
          </figure>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:h-full lg:grid-cols-1 lg:grid-rows-4">
            {impactStats.map((s, i) => (
              <div key={s.label} className="reveal flex h-full w-full flex-col justify-between gap-3 rounded bg-[#e6e9eb] px-5 py-4" style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <p className="font-nunito text-[32px] font-semibold text-text-secondary lg:text-[40px]">{s.value}</p>
                <p className="font-nunito text-[14px] font-semibold text-[#85888e] sm:text-[16px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  return (
    <section id="get-involved" className="mx-auto max-w-[1440px] bg-white px-4 py-16 sm:px-8 lg:px-[130px]">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url("${img.ctaBg}")` }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-between gap-10 text-white">
            <div className="flex flex-col gap-4">
              <SectionEyebrow color="text-white">GET INVOLVED</SectionEyebrow>
              <h2 className="font-nunito text-[28px] font-semibold leading-tight tracking-tight sm:text-[32px] lg:text-[36px]">
                You can be part of building Africa's future.
              </h2>
              <p className="font-inter text-[16px] leading-[1.6] sm:text-[18px] lg:text-[20px]">
                Every donation, every partnership, every volunteer hour goes directly to giving a Nigerian child access to hands-on STEM learning they would otherwise never have.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href={routeHrefs.contact}>Contact Us Today</PrimaryButton>
              <OutlineButton variant="light">Follow Our Journey</OutlineButton>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {involveOptions.map((o, i) => (
              <div
                key={o.title}
                className="reveal hover-lift flex flex-col gap-3 rounded-lg bg-white/95 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="flex flex-col gap-1">
                  <p className="font-nunito text-[18px] font-semibold text-brand-dark-blue sm:text-[20px]">{o.title}</p>
                  <p className="font-nunito text-[14px] leading-[1.6] text-[#61656c]">{o.body}</p>
                </div>
                <a
                  href={o.href}
                  target={o.external ? "_blank" : undefined}
                  rel={o.external ? "noopener noreferrer" : undefined}
                  className="inline-flex shrink-0 items-center justify-center rounded bg-brand-navy px-4 py-3 font-nunito text-[14px] font-semibold text-white transition-colors hover:bg-brand-dark-blue sm:text-[16px]"
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
