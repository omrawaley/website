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
}

export default function Box({ children, href }: BoxProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`bg-muted rounded-3xl relative group overflow-hidden ${href && "hover:cursor-pointer"}`}
    >
      {children}
      <div className="absolute top-8 right-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition">
        {href && (
          <div className="bg-muted rounded-full opacity-80 drop-shadow-sm shadow-muted-dark">
            <ArrowIcon />
          </div>
        )}
      </div>
    </Wrapper>
  );
}
