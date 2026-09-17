import { img } from "../lib/images";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionEyebrow, SectionHeading } from "../components/Typography";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";

const clubModules = [
  { title: "Curriculum Design", body: "Tailored, age-appropriate modules built for each school." },
  { title: "Train the Trainer", body: "Our educator leads sessions while school teachers shadow every week." },
  { title: "Projects, Exhibition & Industry Visit", body: "Students build, present, and see STEM working in the real world." },
  { title: "Handover to School", body: "Trained teachers take full ownership — the club belongs to them." },
  { title: "Continuous Support", body: "Resources, guidance, and materials to sustain impact long-term." },
];

const mentorshipTracks = [
  { title: "Mathematics", body: "Mathematical reasoning, competition problem-solving, calculus, and ideas beyond the traditional classroom." },
  { title: "Computer Science", body: "Programming, computational thinking, algorithms, machine learning, and modern computing foundations." },
  { title: "Engineering", body: "Scientific thinking, design, systems, experimentation, and practical problem-solving." },
  { title: "AI & Applications", body: "Real-world AI applications including computer vision, ALPR, NLP, and more.", highlight: true },
];

const tradeSkills = ["Electrical installation", "Plumbing", "Construction", "Renewable energy systems", "Fabrication and technical works"];

export default function Programmes() {
  return (
    <div className="bg-white text-text-primary">
      <SiteHeader />
      <main>
        <PageHero
          image={img.programsHero}
          title={<>Learning that sticks because<br />you built it yourself</>}
          body="We don't teach from textbooks. We teach through building, testing, failing, and trying again. Every session is a real experiment. Every project is a real solution to a real problem."
        />
        <FlagshipClub />
        <Mentorship />
        <SkilledTrades />
        <CTABanner />
      </main>
      <SiteFooter />
    </div>
  );
}

function FlagshipClub() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-10 px-4 py-20 sm:px-8 lg:px-[130px]">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionEyebrow color="text-brand-orange">FLAGSHIP PROGRAMME</SectionEyebrow>
          <SectionHeading className="text-center">The After-School STEM Club</SectionHeading>
          <p className="max-w-2xl font-inter text-[15px] leading-[1.6] text-[#61656c] sm:text-[16px]">
            Our signature 8-week programme is already changing lives in Lagos — and it's built to scale across Nigeria.
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.64), rgba(46,44,44,0.41)), url("${img.programsClubBg}")`,
          }}
        >
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,619fr)_minmax(0,465fr)] lg:gap-[69px] lg:p-[40px_63px]">
            <div className="flex flex-col gap-5 text-white">
              <h3 className="font-nunito text-[28px] font-semibold leading-[1.15] sm:text-[32px] lg:text-[36px]">
                After-School STEM Club
              </h3>
              <p className="font-inter text-[16px] leading-[1.6] text-white/90 sm:text-[18px] lg:text-[20px]">
                Our 8-week After-School STEM Club brings children aged 7–13 together once a week for hands-on, project-based STEM learning using low-cost, locally available materials. Sessions cover Electricity, Mechanical Systems, Chemistry, Biology, Construction, and Scratch Programming — and culminate in a real-world Capstone Project and a public Project Exhibition.
              </p>
              <p className="font-inter text-[18px] font-semibold text-white lg:text-[20px]">Age -7 -13</p>
            </div>
            <div className="flex flex-col gap-[18px]">
              {clubModules.map((m) => (
                <div key={m.title} className="flex h-[122px] flex-col justify-center overflow-hidden rounded-lg bg-white px-[14px] py-[20px]">
                  <p className="font-nunito text-[18px] font-semibold text-brand-dark-blue lg:text-[20px]">{m.title}</p>
                  <p className="mt-1 font-inter text-[14px] leading-[24px] text-[#61656c]">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mentorship() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-8 lg:px-[130px]">
        <div
          className="overflow-hidden rounded-lg px-0 py-6 sm:py-10 lg:py-[40px]"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(255,226,161,0.51) 7%, rgba(255,238,200,0) 25%, rgba(255,255,255,0) 38%)",
          }}
        >
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-10">
            <div className="flex max-w-[420px] flex-col gap-5">
              <SectionHeading>Mentorship & STEM Career Pathways</SectionHeading>
              <p className="font-inter text-[16px] leading-[1.6] text-brand-dark-blue sm:text-[18px] lg:text-[20px]">
                What comes after the spark? This programme pairs young learners with student and professional mentors across four tracks:
              </p>
              <p className="font-inter text-[18px] font-semibold text-brand-dark-blue lg:text-[20px]">Age -11 -15</p>
            </div>
            <div className="flex w-full flex-col gap-[18px] lg:w-[409px] lg:shrink-0">
              {mentorshipTracks.map((t) => (
                <div
                  key={t.title}
                  className={`flex h-[122px] flex-col justify-center overflow-hidden rounded-lg px-[14px] py-[20px] ${t.highlight ? "" : "bg-white"}`}
                >
                  <p className="font-nunito text-[18px] font-semibold text-brand-dark-blue lg:text-[20px]">{t.title}</p>
                  <p className="mt-1 font-inter text-[14px] leading-[24px] text-[#61656c]">{t.body}</p>
                </div>
              ))}
            </div>
            <div className="h-[397px] w-[358px] max-w-full shrink-0 self-center overflow-hidden rounded-lg lg:self-auto">
              <img src={img.programsMentorshipPhoto} alt="Mentor with student" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkilledTrades() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-24 sm:px-8 lg:px-[130px]">
        <div className="flex flex-col gap-[64px]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <SectionHeading>Skilled Trades & Technical Careers</SectionHeading>
            <SectionHeading>Coming Soon</SectionHeading>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[69px]">
            <div className="h-[397px] w-[358px] max-w-full shrink-0 self-center overflow-hidden rounded-lg lg:self-auto">
              <img src={img.programsSkillsPhoto} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-inter text-[16px] leading-[1.6] text-text-secondary sm:text-[18px] lg:text-[20px]">
                Not every path to a great future runs through a university. This programme introduces young people to the practical professions that build and power the world — and the livelihoods that come with mastering them. For every student who learns best by doing.
              </p>
              <p className="font-inter text-[18px] font-semibold text-brand-dark-blue lg:text-[20px]">Age -16 -21</p>
              <div className="flex flex-col gap-3">
                <p className="font-nunito text-[18px] font-semibold text-brand-dark-blue lg:text-[20px]">The Skills:</p>
                <div className="flex flex-wrap gap-[15px]">
                  {tradeSkills.map((s) => (
                    <span key={s} className="rounded-2xl bg-brand-dark-blue px-4 py-2.5 font-inter text-[14px] text-white sm:text-[16px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
