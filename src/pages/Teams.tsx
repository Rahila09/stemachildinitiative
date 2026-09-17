import { img } from "../lib/images";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SectionEyebrow, SectionHeading } from "../components/Typography";
import { PrimaryButton, OutlineButton } from "../components/Buttons";
import { PageHero } from "../components/PageHero";
import { routeHrefs } from "../lib/router";

const leadership = [
  { name: "Rahila Namah", role: "FOUNDER & EXECUTIVE DIRECTOR", photo: img.teamRahila },
  { name: "Mr. Micheal Mu'azu", role: "ADVISOR — DEVELOPMENT & POLICY", photo: img.teamMicheal },
  { name: "Mr. Olakunmi Agbaje", role: "ADVISOR — STRATEGY & PARTNERSHIPS", photo: img.teamOlakunmi },
  { name: "Saraya Namah", role: "MEMBER — BOARD OF TRUSTEES", photo: img.teamSaraya },
  { name: "Tochi Okiri", role: "COMMUNITY ENGAGEMENT & PARTNERSHIPS", photo: img.teamTochi },
];

export default function Teams() {
  return (
    <div className="bg-white text-text-primary">
      <SiteHeader />
      <main>
        <PageHero
          image={img.teamHero}
          title="The people behind the mission"
          body="Diverse expertise in education, technology, development, and strategy — united by one belief: every child deserves access to STEM learning."
        />
        <Leadership />
        <BringYourSkills />
      </main>
      <SiteFooter />
    </div>
  );
}

function Leadership() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-12 px-4 py-20 sm:px-8 lg:px-[130px]">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-2xl flex-col gap-3">
            <SectionEyebrow color="text-brand-orange">OUR TEAM</SectionEyebrow>
            <SectionHeading>Leadership team</SectionHeading>
            <p className="font-inter text-[15px] leading-[1.6] text-[#61656c] sm:text-[16px]">
              We're a cross-disciplinary team that loves to create great experiences for our customers.
            </p>
          </div>
          <PrimaryButton href={routeHrefs.contact}>Join Our Team</PrimaryButton>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((p) => (
            <figure key={p.name} className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#c9d0d6]">
              <img src={p.photo} alt={p.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/45 px-4 py-3 text-white backdrop-blur">
                <p className="font-nunito text-[16px] font-semibold sm:text-[18px]">{p.name}</p>
                <p className="mt-0.5 font-inter text-[11px] font-semibold uppercase tracking-wider text-white/85">{p.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BringYourSkills() {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 pb-20 sm:px-8 lg:px-[130px]">
      <div className="mx-auto flex flex-col items-center gap-5 rounded-lg bg-brand-orange-25 px-6 py-14 text-center sm:px-12">
        <h3 className="max-w-2xl font-nunito text-[24px] font-semibold text-text-secondary sm:text-[28px]">
          Bring your skills to the classroom
        </h3>
        <p className="max-w-2xl font-inter text-[15px] leading-[1.6] text-[#61656c] sm:text-[16px]">
          We welcome STEM professionals, educators, curriculum designers, and strategic advisors who believe in our mission. Whether you want to volunteer, advise, or partner — there's a place for you here.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <OutlineButton href={routeHrefs.contact}>Volunteer with us</OutlineButton>
          <PrimaryButton href={routeHrefs.contact}>Send Us a message</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
