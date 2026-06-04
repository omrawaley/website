function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function RSSIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="RSSicon"
      viewBox="0 0 8 8"
      width="24"
      height="24"
    >
      <rect width="8" height="8" rx="1.5" fill="#f26522" />
      <circle cx="2" cy="6" r="1" fill="white" />
      <path d="M1 4a3 3 0 0 1 3 3h1a4 4 0 0 0-4-4z" fill="white" />
      <path d="M1 2a5 5 0 0 1 5 5h1a6 6 0 0 0-6-6z" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 mb-16 flex flex-row justify-between mr-[8px]">
      <ul className="font-sm flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <li className="place-self-center">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            {/*<ArrowIcon />*/}
            <RSSIcon />
            <p className="ml-2 h-7 text-xl">rss</p>
          </a>
        </li>
      </ul>
      <p className="text-muted/80 place-self-center">
        © {new Date().getFullYear()} Om Rawaley
      </p>
    </footer>
  );
}
