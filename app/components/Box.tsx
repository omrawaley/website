"use client";

import { cn } from "lib/utils";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

interface BoxProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  arrow?: boolean;
}

export default function Box({ children, href, className, arrow }: BoxProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "bg-muted rounded-3xl relative group overflow-hidden drop-shadow-lg",
        className,
        href && "hover:cursor-pointer",
      )}
    >
      {children}
      <div className="absolute top-8 right-8 group-hover:translate-x-4 group-hover:translate-[-1rem] duration-300 transition">
        {arrow && href && (
          <div className="bg-muted rounded-full opacity-80 drop-shadow-sm shadow-muted-dark">
            <ArrowIcon />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
