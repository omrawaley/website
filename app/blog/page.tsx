import BackArrow from "app/components/BackArrow";
import Box from "app/components/Box";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my writing.",
};

export default function Page() {
  return (
    <section className="mt-0 mb-32">
      <div className="flex flex-row gap-4 items-center">
        <BackArrow href="/" />
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
