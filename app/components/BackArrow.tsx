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
      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 14l-4 -4l4 -4" />
      <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </svg>
  );
}

interface BackArrowProps {
  href: string;
}

export default function BackArrow({ href }: BackArrowProps) {
  return (
    <a
      className="bg-muted rounded-full opacity-80 drop-shadow-sm shadow-muted-dark"
      href={href}
    >
      <ArrowIcon />
    </a>
  );
}
