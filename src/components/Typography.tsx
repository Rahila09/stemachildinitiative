import type { ReactNode } from "react";

export function SectionEyebrow({ children, color = "text-[#213b68]" }: { children: ReactNode; color?: string }) {
  return <p className={`reveal font-inter text-[14px] sm:text-[16px] font-semibold uppercase tracking-wide ${color}`}>{children}</p>;
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`reveal font-nunito text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight tracking-tight text-[#181d27] ${className}`} style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
      {children}
    </h2>
  );
}

export function SplitWords({ text, baseDelay = 0, stepMs = 60, className = "" }: { text: string; baseDelay?: number; stepMs?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="word-rise"
          style={{ "--word-delay": `${baseDelay + i * stepMs}ms` } as React.CSSProperties}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
