"use client";

import { BlogPosts } from "app/components/posts";
import RGBIcon from "./components/RGBIcon";
import Box from "./components/Box";
import Image from "next/image";

export default function Page() {
  return (
    <section className="mt-16 mb-32">
      <h1 className="tracking-tight text-9xl">hi</h1>
      <p className="tracking-tight text-3xl mb-12">
        My name's{" "}
        <span className="font-semibold text-4xl bg-gradient-to-l from-[#38bdf8] via-[#fb7185] to-[#84cc16] bg-clip-text text-transparent">
          Om
        </span>
        . I build cool hardware and software.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <Box href="https://pocketbyte.co" className="col-span-2" arrow={true}>
          <Image
            src="/images/PocketbyteDevKit.JPG"
            alt="pocketbyte devkit"
            width={4284}
            height={5712}
            className="object-cover w-full h-auto scale-200"
          />
        </Box>
        <Box href="https://pocketbyte.co" className="col-span-2" arrow={true}>
          <Image
            src="/images/PocketbyteLauncherCloseup.JPG"
            alt="pocketbyte launcher closeup"
            width={4284}
            height={5712}
            className="object-cover w-full h-auto"
          />
        </Box>

        <Box className="col-span-2 p-10">
          <p className="text-muted-dark text-large text-lg">
            I'm super passionate about embedded systems development with over
            half a decade of experience, starting at 10 years old with Arduino
            game consoles. I love the challenge of building robust hardware
            complimented by seamless software.
            <br />
            <br />
            In 2025, I founded{" "}
            <a href="https://pocketbyte.co" target="_blank">
              Pocketbyte ↗
            </a>{" "}
            where I continue to build today.
          </p>
        </Box>
        <Box
          href="https://pocketbyte.co"
          className="bg-[#fab81e] col-span-2 grid place-items-center"
          arrow={true}
        >
          <Image
            src="/images/PocketByteWordmarkGear.png"
            alt="pocketbyte"
            width={500}
            height={500}
            className="object-cover w-full h-auto p-12"
          />
        </Box>

        <Box
          href="mailto:omrawaley@icloud.com"
          className="bg-blue-500"
          arrow={true}
        >
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-white-icon.png"
            alt="email"
            width={500}
            height={500}
            className="object-cover w-full h-auto p-12"
          />
        </Box>
        <Box
          href="https://github.com/omrawaley"
          className="bg-black"
          arrow={true}
        >
          <Image
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
            alt="github"
            width={500}
            height={500}
            className="object-cover w-full h-auto p-12"
          />
        </Box>
        <Box
          href="https://www.linkedin.com/in/om-rawaley-a575853a7/"
          className="bg-[#007fba]"
          arrow={true}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
            alt="github"
            width={500}
            height={500}
            className="object-cover w-full h-auto p-12"
          />
        </Box>
        <Box className="grid place-items-center p-10 ">
          <h2 className="text-xl md:text-3xl text-muted-dark tracking-tight">
            Send me a message!
          </h2>
        </Box>
      </div>
    </section>
  );
}
