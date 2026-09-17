import { img } from "../lib/images";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionEyebrow, SectionHeading } from "../components/Typography";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";

const pilotHighlights = [
  { quote: '"I want to make something like this one day."', body: "— One of our students, aged 9, during our Glass Fusion industry visit. He had never been inside a factory before.", role: "STEM Club Student", org: "Eternal Excellence School, Lagos — 2026" },
  { quote: '"This is how futures are shaped — through exposure, inspiration, and real-world experience. Thank you for playing such an important role in guiding them. Their future selves will thank you."', body: "", role: "Venture Strategy Consultant", org: "Lagos, Nigeria" },
];

const impactStats = [
  { value: "130+", label: "Children reached in Program" },
  { value: "8", label: "Weeks of weekly hands-on sessions" },
  { value: "3", label: "STEM Clubs launched" },
  { value: "10K+", label: "Children targeted by 2030 across Nigeria" },
];

const visionStats = [
  { value: "10K+", label: "Children" },
  { value: "90", label: "Schools" },
  { value: "6", label: "Zones" },
];

const galleryColumns: { photos: { src: string; height: number }[] }[] = [
  { photos: [{ src: img.impactGallery1, height: 398 }, { src: img.impactGallery2, height: 398 }] },
  { photos: [{ src: img.impactGallery3, height: 486 }, { src: img.impactGallery4, height: 398 }] },
  { photos: [{ src: img.impactGallery5, height: 398 }, { src: img.impactGallery6, height: 398 }] },
];

export default function Impact() {
  return (
    <div className="bg-white text-text-primary">
      <SiteHeader />
      <main>
        <PageHero
          image={img.impactHero}
          title={<>Small numbers.<br />Enormous momentum.</>}
          body="We started with 14 children and one classroom. Every number below represents a real child who built something they'd never built before — and who discovered they could."
        />
        <PilotNumbers />
        <Gallery />
        <Voices />
        <CTABanner />
      </main>
      <SiteFooter />
    </div>
  );
}

function PilotNumbers() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-10 px-4 py-20 sm:px-8 lg:px-[130px]">
        <div className="flex max-w-2xl flex-col gap-3">
          <SectionEyebrow color="text-brand-orange">BY THE NUMBERS</SectionEyebrow>
          <SectionHeading>Our pilot in numbers</SectionHeading>
          <p className="font-inter text-[15px] leading-[1.6] text-[#61656c] sm:text-[16px]">
            In just our first cohort, we reached 44 children across 2 schools in Lagos with 8 weeks of hands-on, weekly STEM sessions — achieving a 100% completion rate.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col gap-4">
            {pilotHighlights.map((h) => (
              <blockquote key={h.role} className="rounded-lg bg-brand-dark-blue p-6 text-white">
                <p className="font-inter text-[14px] italic leading-[1.6] text-white/90 sm:text-[15px]">{h.quote}</p>
                {h.body && <p className="mt-3 font-inter text-[13px] leading-[1.6] text-white/70 sm:text-[14px]">{h.body}</p>}
                <footer className="mt-4">
                  <p className="font-nunito text-[14px] font-semibold text-white">{h.role}</p>
                  <p className="font-inter text-[13px] text-white/70">{h.org}</p>
                </footer>
              </blockquote>
            ))}
            <div className="rounded-lg bg-brand-dark-blue p-6 text-white">
              <p className="font-inter text-[13px] font-semibold uppercase tracking-wider text-brand-orange">5-Year Vision (2025-2030)</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {visionStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-nunito text-[28px] font-semibold text-white sm:text-[32px]">{s.value}</p>
                    <p className="mt-1 font-inter text-[12px] font-semibold text-white/70 sm:text-[13px]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <figure className="overflow-hidden rounded-lg">
            <img src={img.impactByNumbers} alt="Students during an industry visit" className="h-full min-h-[400px] w-full object-cover" loading="lazy" decoding="async" />
          </figure>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4">
            {impactStats.map((s) => (
              <div key={s.label} className="flex h-full w-full flex-col justify-between gap-3 rounded bg-[#e6e9eb] px-5 py-4">
                <p className="font-nunito text-[28px] font-semibold text-text-secondary lg:text-[32px]">{s.value}</p>
                <p className="font-nunito text-[13px] font-semibold text-[#85888e] sm:text-[14px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-4 py-[90px] sm:px-8 lg:px-[80px]">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionEyebrow color="text-brand-orange">FROM THE CLASSROOM</SectionEyebrow>
          <SectionHeading className="text-center">What hands-on really looks like</SectionHeading>
        </div>
        <div className="relative w-full overflow-hidden lg:h-[816px]">
          <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {galleryColumns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[20px]">
                {col.photos.map((p, pi) => (
                  <div
                    key={pi}
                    className="overflow-hidden rounded-lg bg-[#cecfd2]"
                    style={{ height: p.height }}
                  >
                    <img src={p.src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[151px]"
            style={{
              background:
                "linear-gradient(to top, #ffffff 21%, rgba(217,217,217,0.18) 67%, rgba(217,217,217,0.03) 92%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="bg-[#faf8f4]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-4 py-[90px] sm:px-8 lg:px-[80px]">
        <div className="flex max-w-[527px] flex-col items-center gap-3 text-center">
          <SectionEyebrow color="text-brand-orange">VOICES</SectionEyebrow>
          <SectionHeading className="text-center">What people say when they see it happen</SectionHeading>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col-reverse items-stretch gap-[64px] py-[48px] lg:flex-row lg:items-end">
          <div className="flex flex-1 flex-col gap-[48px] lg:min-w-[400px]">
            <blockquote className="font-nunito text-[24px] font-normal leading-[1.25] tracking-tight text-[#181d27] sm:text-[30px] lg:text-[36px] lg:leading-[44px]">
              Can we build a house on air? That question — from an 8-year-old pupil during our construction session — stopped the entire room. Then the tutor said: <em>Actually, why not?</em> That's the moment I knew this programme was working.
            </blockquote>
            <div className="flex items-start gap-3">
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-inter text-[18px] font-semibold leading-[28px] text-[#181d27]">Rahila Namah</p>
                <p className="font-inter text-[16px] leading-[24px] text-[#535862]">Founder, STEM Education for Children Foundation</p>
              </div>
              <div className="flex shrink-0 gap-[32px]">
                <button aria-label="Previous quote" className="grid h-[56px] w-[56px] place-items-center rounded-full border border-[#e9eaeb] text-[#535862] transition-colors hover:bg-white">
                  <span aria-hidden="true" className="text-[20px]">←</span>
                </button>
                <button aria-label="Next quote" className="grid h-[56px] w-[56px] place-items-center rounded-full border border-[#e9eaeb] text-[#535862] transition-colors hover:bg-white">
                  <span aria-hidden="true" className="text-[20px]">→</span>
                </button>
              </div>
            </div>
          </div>
          <figure className="relative flex-1 overflow-hidden lg:h-[720px] lg:min-w-[560px]">
            <img src={img.impactVoicesPhoto} alt="Rahila Namah" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
            <figcaption className="absolute inset-x-0 bottom-0">
              <div className="mx-auto flex w-full max-w-[608px] flex-col gap-2 border-t border-white/30 bg-white/30 p-[32px] pt-[96px] text-white backdrop-blur-md">
                <p className="font-inter text-[24px] font-semibold leading-[32px] sm:text-[28px] lg:text-[30px] lg:leading-[38px]">Rahila Namah</p>
                <p className="font-inter text-[16px] font-medium leading-[24px]">Founder, STEM Education for Children Foundation</p>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10"
                style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)" }}
              />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
