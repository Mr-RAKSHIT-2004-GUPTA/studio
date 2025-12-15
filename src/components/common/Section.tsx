import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto px-4 py-16 sm:py-24 animate-in fade-in-0 duration-500 ease-in-out",
        className
      )}
    >
      {children}
    </section>
  );
}
