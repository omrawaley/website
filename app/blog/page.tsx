import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold tracking-tighter">Blog</h1>
      <BlogPosts />
    </section>
  );
}
