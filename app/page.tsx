import { BlogPosts } from "app/components/posts";
import RGBIcon from "./components/RGBIcon";
import Box from "./components/Box";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="tracking-tight text-9xl">hi</h1>
      <p className="tracking-tight text-3xl mb-12">
        My name's{" "}
        <span className="font-semibold text-4xl bg-gradient-to-l from-[#38bdf8] via-[#fb7185] to-[#84cc16] bg-clip-text text-transparent">
          Om
        </span>
        . I build cool hardware and software.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <Box href="https://pocketbyte.co">
          <Image
            src="/images/PocketbyteDevKit.JPG"
            alt="pocketbyte devkit"
            width={4284}
            height={5712}
            className="object-cover w-full h-auto scale-200"
          />{" "}
        </Box>
        <Box href="https://pocketbyte.co">
          <Image
            src="/images/PocketbyteLauncherCloseup.JPG"
            alt="pocketbyte launcher closeup"
            width={4284}
            height={5712}
            className="object-cover w-full h-auto"
          />{" "}
        </Box>
      </div>
    </section>
  );
}
