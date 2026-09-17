import { routeHrefs } from "../lib/router";

export function CTABanner({
  title = "Ready to be part of the story?",
  body = "Join us as a donor, partner, or volunteer and help shape Africa's future.",
  cta = "Get Involved Today",
  href = routeHrefs.contact,
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-4 py-12 sm:px-8 lg:px-[130px]">
      <div className="mx-auto flex flex-col items-center gap-4 rounded-lg bg-brand-orange-25 px-6 py-10 text-center sm:px-12">
        <h3 className="font-nunito text-[22px] font-semibold text-text-secondary sm:text-[26px]">{title}</h3>
        <p className="max-w-2xl font-inter text-[15px] leading-[1.6] text-[#61656c] sm:text-[16px]">{body}</p>
        <a
          href={href}
          className="mt-2 inline-flex items-center justify-center rounded bg-brand-navy px-6 py-3 font-nunito text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark-blue sm:text-[16px]"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
