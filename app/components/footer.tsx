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

export default function Footer() {
  return (
    <footer className="mt-32 mb-16 flex flex-row justify-between mr-[8px]">
      <ul className="font-sm flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <li className="place-self-center">
          <a
            className="flex items-center transition-all text-muted-dark"
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
      <p className="text-muted-dark/50 place-self-center">
        © {new Date().getFullYear()} Om Rawaley
      </p>
    </footer>
  );
}
