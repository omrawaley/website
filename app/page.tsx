"use client";

import { BlogPosts } from "app/components/posts";
import RGBIcon from "./components/RGBIcon";
import Box from "./components/Box";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function RSSIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="RSSicon"
      viewBox="0 0 8 8"
      width="128"
      height="128"
    >
      <rect width="8" height="8" rx="1.5" fill="#f26522" />
      <circle cx="2" cy="6" r="1" fill="white" />
      <path d="M1 4a3 3 0 0 1 3 3h1a4 4 0 0 0-4-4z" fill="white" />
      <path d="M1 2a5 5 0 0 1 5 5h1a6 6 0 0 0-6-6z" fill="white" />
    </svg>
  );
}

export default function Page() {
  return (
    <motion.section
      className="mt-16 mb-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
        <Box
          href="https://github.com/omrawaley/gameboy-emulator"
          className="col-span-4"
          arrow={true}
        >
          <Image
            src="/images/GameBoyEmulator.png"
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

        <div className="grid grid-cols-2 col-span-2 gap-6">
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
          <Box href="/rss" className="bg-[#f26522]" arrow={true}>
            <div className="object-cover w-full h-auto p-6 md:p-12">
              <RSSIcon />
            </div>
          </Box>
        </div>

        <Box className="grid place-items-center p-10 col-span-2 row-span-2">
          <Link
            className="text-2xl md:text-4xl text-muted-dark tracking-tight"
            href="/blog"
          >
            Read my <span className="underline">writing</span>!
          </Link>
        </Box>
      </div>
    </motion.section>
  );
}
