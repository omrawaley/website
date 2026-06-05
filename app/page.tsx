import { BlogPosts } from "app/components/posts";
import RGBIcon from "./components/RGBIcon";

export default function Page() {
  return (
    <section>
      {/*<div className="mb-8">
        <RGBIcon />
      </div>*/}
      <h1 className="mb-8 text-2xl font-semibold tracking-tight">
        <span className="text-muted">Hi! I'm </span>
        Om Rawaley
        <span className="text-muted">
          {", "}
          an embedded systems developer. I design and build video game consoles,
          PDAs, and much more.
        </span>
      </h1>
      {/*<p className="mb-4 text-lg">
        I founded Pocketbyte in 2025 and continue to build there today.
      </p>*/}
      <p className="mb-8">
        Welcome to my corner of the internet. Here, you can learn more about me,
        check out my projects, and read my writing.
      </p>
      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-bold tracking-tighter">
          Featured Writing
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
