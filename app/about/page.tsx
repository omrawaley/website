export const metadata = {
  title: "About",
  description: "Learn more about me.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold tracking-tighter">About</h1>
      <p className="mb-8">I live in Toronto, Canada. 🇨🇦</p>
      <p className="mb-8">
        I started my journey into electronics at ten when I disassembled a
        four-function calculator because I was curious about how it worked.
        Shortly after, I saw Game Boy Zero builds on YouTube (by sudomod) and
        knew I had to build one myself. During this time, I also taught myself
        how to solder from the very same guy. So, during the pandemic, I bought
        a ton of Arduino kits and taught myself electronics.
      </p>
    </section>
  );
}
