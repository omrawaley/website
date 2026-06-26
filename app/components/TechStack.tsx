import Box from "./Box";

const items = [
  "C",
  "C++",
  "Rust",
  "Go",
  "Typescript",
  "React",
  "NextJS",
  "Tailwind",
  "Arduino",
  "ESP-IDF",
  "KiCad",
  "FreeCAD",
  "Blender",
];

interface ItemProps {
  name: string;
}

function Item({ name }: ItemProps) {
  return (
    <li className="rounded-full bg-muted-dark/15 text-muted-dark text-2xl py-2 px-6">
      {name}
    </li>
  );
}

export default function TechStack() {
  return (
    <Box className="col-span-2 md:col-span-4 p-12">
      <ul className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <Item name={item} key={item} />
        ))}
      </ul>
    </Box>
  );
}
