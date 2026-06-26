"use client";

import Box from "./components/Box";
import Link from "next/link";
import { motion } from "framer-motion";
import BoxImage from "./components/BoxImage";
import TechStack from "./components/TechStack";

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
      className="mt-0 mb-32"
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
        <BoxImage
          alt="pocketbyte devkit"
          href="https://pocketbyte.co"
          src="/images/PocketbyteDevKit.JPG"
          className="col-span-2"
          imageClassName="scale-200"
        />
        <BoxImage
          alt="pocketbyte launcher"
          href="https://pocketbyte.co"
          src="/images/PocketbyteLauncherCloseup.JPG"
          className="col-span-2"
        />
        <BoxImage
          alt="gameboy emulator (C++)"
          href="https://github.com/omrawaley/gameboy-emulator"
          src="/images/GameBoyEmulator.png"
          className="col-span-2 md:col-span-4"
        />
        <BoxImage
          alt="chip8-go (Go)"
          href="https://github.com/omrawaley/chip8-go"
          src="/images/chip8-go.png"
          className="col-span-2 md:col-span-4"
        />

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
        <BoxImage
          alt="pocketbyte"
          href="https://pocketbyte.co"
          src="/images/PocketByteWordmarkGear.png"
          className="bg-[#fab81e] col-span-2 grid place-items-center"
          imageClassName="p-12"
        />

        <TechStack />

        <div className="grid grid-cols-2 col-span-2 gap-6">
          <BoxImage
            alt="email"
            href="mailto:omrawaley@icloud.com"
            src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/email-envelope-white-icon.png"
            className="bg-sky-400"
            imageClassName="p-12"
          />
          <BoxImage
            alt="github"
            href="https://github.com/omrawaley"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
            className="bg-black"
            imageClassName="p-12"
          />
          <BoxImage
            alt="linkedin"
            href="https://www.linkedin.com/in/om-rawaley-a575853a7/"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1280px-LinkedIn_icon.svg.png"
            className="bg-[#007fba]"
            imageClassName="p-12"
          />
          <Box href="/rss" className="bg-[#f26522]" arrow={true}>
            <div className="object-cover w-full h-auto p-6 md:p-12">
              <RSSIcon />
            </div>
          </Box>
        </div>

        <Box className="grid place-items-center p-12 col-span-2 row-span-2">
          <Link
            className="text-2xl md:text-4xl text-muted-dark tracking-tight"
            href="/blog"
          >
            Read my <span className="underline text-blue-700">blog</span>!
          </Link>
        </Box>
      </div>
    </motion.section>
  );
}
