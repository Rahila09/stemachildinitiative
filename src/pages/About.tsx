import { img } from "../lib/images";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionEyebrow, SectionHeading } from "../components/Typography";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";

const classroomCards = [
  { src: img.aboutClassroomOuterLeft, height: 250 },
  { src: img.aboutClassroomInnerLeft, height: 280 },
  { src: img.aboutClassroomInnerRight, height: 280 },
  { src: img.aboutClassroomOuterRight, height: 250 },
];

export default function About() {
  return (
    <div className="bg-white text-text-primary">
      <SiteHeader />
      <main>
        <PageHero
          image={img.aboutHero}
          overlay="linear-gradient(rgba(10,13,18,0.18), rgba(10,13,18,0.18))"
          title={<>We started this because<br />the children couldn't wait.</>}
          body="A foundation built not when it was convenient, but when it became impossible to ignore the need for hands-on STEM education in underserved communities across Nigeria."
        />
        <Mission />
        <BandImage />
        <Vision />
        <UrgentBelief />
        <Classroom />
        <CTABanner />
      </main>
      <SiteFooter />
    </div>
  );
}

function Mission() {
  return (
    <TwoColumnSection
      eyebrow="OUR MISSION"
      heading="Equipping young Africans with the skills to lead in STEM"
      body="To equip young Africans with the confidence, curiosity, and skills needed for future STEM careers through practical, project-based learning and teacher-led sustainability models."
      smallImage={img.aboutMissionSmall}
      bigImage={img.aboutMissionBig}
    />
  );
}

function TwoColumnSection({
  eyebrow,
  heading,
  body,
  smallImage,
  bigImage,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  smallImage: string;
  bigImage: string;
}) {
  return (
    <section className="border-t border-[#e9eaeb] bg-[#f7f7f7]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-[130px] lg:py-[49px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,527fr)_minmax(0,684fr)] lg:items-end lg:gap-[73px] lg:h-[749px]">
          <div className="flex w-full flex-col justify-between gap-10 lg:h-full">
            <div className="flex flex-col gap-3">
              <SectionEyebrow color="text-brand-orange">{eyebrow}</SectionEyebrow>
              <SectionHeading>{heading}</SectionHeading>
              <p className="mt-4 font-inter text-[16px] leading-[1.6] text-[#61656c] sm:text-[18px]">{body}</p>
            </div>
            <div className="overflow-hidden rounded-lg lg:h-[220px] lg:w-[282px]">
              <img src={smallImage} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg lg:h-full">
            <img src={bigImage} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BandImage() {
  return (
    <section aria-hidden="true" className="bg-white">
      <img src={img.aboutBand} alt="" className="block h-[300px] w-full object-cover sm:h-[380px] lg:h-[474px]" loading="lazy" decoding="async" />
    </section>
  );
}

function Vision() {
  return (
    <TwoColumnSection
      eyebrow="OUR VISION"
      heading="STEM education that is accessible and inclusive for every child across Africa"
      body="To make STEM education accessible and inclusive for every child across Africa"
      smallImage={img.aboutVisionSmall}
      bigImage={img.aboutVisionBig}
    />
  );
}

function UrgentBelief() {
  return (
    <section className="bg-brand-dark-blue text-white">
      <div className="mx-auto max-w-[1440px] grid items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-[130px]">
        <div className="flex flex-col justify-center gap-8 lg:h-[726px]">
          <div className="flex flex-col gap-3">
            <p className="font-inter text-[13px] font-semibold uppercase tracking-wider text-brand-orange sm:text-[14px]">OUR STORY</p>
            <h2 className="font-nunito text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-[32px] lg:text-[36px]">
              Built on an urgent belief
            </h2>
          </div>
          <div className="flex flex-col gap-5 font-inter text-[15px] leading-[1.7] text-white/85 sm:text-[16px]">
            <p>
              STEM Education for Children Foundation was built on a simple but urgent belief: every Nigerian child — regardless of where they grew up or what their family earns — deserves access to hands-on, practical STEM education that builds real skills and opens real doors.
            </p>
            <p>
              Founded by <strong>Rahila Namah</strong>, a passionate Computer Engineer from Zuru, Kebbi State, the Foundation launched its first After-School STEM Club in Lagos in January 2026 with 14 pioneer children. We've been building, learning, and expanding ever since to make practical science accessible.
            </p>
            <p>
              Our approach is simple: bring real science and engineering into the hands of real children, using low-cost, locally available materials, and train the school's own teachers to sustain it. When we leave a school, the STEM Club belongs to that school — forever.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg lg:h-[726px]">
          <img src={img.aboutStory} alt="A young student with a stack of books" className="h-full min-h-[440px] w-full object-cover" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

function Classroom() {
  return (
    <section className="bg-[#faf8f4]">
      <div className="mx-auto flex flex-col items-center gap-8 px-4 py-16 sm:px-8 lg:px-0 lg:py-[60px]">
        <div className="flex max-w-[527px] flex-col items-start gap-3 text-left">
          <SectionEyebrow color="text-brand-orange">FROM THE CLASSROOM</SectionEyebrow>
          <SectionHeading>What hands-on really looks like</SectionHeading>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-visible">
          <div className="mx-auto flex w-max items-center justify-center gap-[21px] lg:w-[1384px]">
            {classroomCards.map((c, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-lg border border-[#b3b3b3] bg-[#d9d9d9] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)]"
                style={{ width: 330, height: c.height }}
              >
                <img src={c.src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg border-2 border-white/10 bg-brand-navy px-[18px] py-3 font-inter text-[16px] font-semibold text-white shadow-sm ring-1 ring-inset ring-black/10 transition-colors hover:bg-brand-dark-blue"
        >
          View Full Gallery
        </a>
      </div>
    </section>
  );
}
