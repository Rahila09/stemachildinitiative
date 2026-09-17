import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  overlay = "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.3))",
  align = "left",
  minHeight = "710px",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  image: string;
  overlay?: string;
  align?: "left" | "center";
  minHeight?: string;
  children?: ReactNode;
}) {
  const alignClasses = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <section className="relative overflow-hidden" style={{ minHeight }}>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: overlay }} />
      <div className={`relative mx-auto max-w-[1440px] flex flex-col gap-6 px-4 pt-8 pb-24 sm:px-8 lg:px-[130px] lg:pt-12 lg:pb-32 ${alignClasses}`}>
        {eyebrow && (
          <p className="font-inter text-[13px] font-semibold uppercase tracking-wider text-brand-orange sm:text-[14px]">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-nunito text-[36px] font-semibold leading-tight tracking-tight text-white sm:text-[44px] lg:text-[54px]">
          {title}
        </h1>
        {body && (
          <div className="max-w-2xl font-inter text-[15px] leading-[1.6] text-white/90 sm:text-[17px] lg:text-[18px]">
            {body}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
