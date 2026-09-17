import type { ReactNode } from "react";

export function PrimaryButton({ children, href = "#", className = "" }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded bg-brand-navy px-6 py-4 font-nunito text-[16px] sm:text-[18px] font-semibold text-white transition-[background-color,transform] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-dark-blue active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${className}`}
    >
      {children}
    </a>
  );
}

export function OutlineButton({
  children,
  href = "#",
  className = "",
  variant = "dark",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "dark" | "light";
}) {
  const color =
    variant === "dark"
      ? "border-brand-dark-blue text-brand-dark-blue hover:bg-brand-dark-blue hover:text-white"
      : "border-white text-white hover:bg-white hover:text-brand-dark-blue";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded border-2 px-6 py-4 font-nunito text-[16px] sm:text-[18px] font-semibold transition-[background-color,color,border-color,transform] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${color} ${className}`}
    >
      {children}
    </a>
  );
}
