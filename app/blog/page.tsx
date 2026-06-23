import Box from "app/components/Box";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my writing.",
};

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

export default function Page() {
  return (
    <section className="mt-16 mb-32">
      <div className="flex flex-row gap-4 items-center">
        <a
          className="bg-muted rounded-full opacity-80 drop-shadow-sm shadow-muted-dark"
          href="/"
        >
          <ArrowIcon />
        </a>
        <h1 className="text-4xl tracking-tighter">Blog</h1>
      </div>
      <div className="max-w-2xl place-self-center ml-auto mr-auto">
        <div className="p-16">
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
