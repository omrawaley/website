export const metadata = {
  title: "Contact",
  description: "Reach out to me.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold tracking-tighter">Contact</h1>
      <li className="flex flex-col">
        <a className="cursor-pointer underline">GitHub</a>
        <a className="cursor-pointer underline">Email</a>
      </li>
    </section>
  );
}
