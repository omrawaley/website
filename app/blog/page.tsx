import Box from "app/components/Box";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-6xl tracking-tighter">Blog</h1>
      <p className="mb-12 text-3xl">Read some of my writing!</p>
      <div className="max-w-2xl place-self-center ml-auto mr-auto">
        <Box>
          <div className="p-16">
            <BlogPosts />
          </div>
        </Box>
      </div>
    </section>
  );
}
