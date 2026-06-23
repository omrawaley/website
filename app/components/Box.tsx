"use client";

import { cn } from "lib/utils";
import { motion } from "framer-motion";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

const boxVariants = {
  initial: {},
  hovered: {},
};

const arrowVariants = {
  initial: { y: 0, x: 0 },
  hovered: { y: -10, x: 10 },
};

interface BoxProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  arrow?: boolean;
}

export default function Box({ children, href, className, arrow }: BoxProps) {
  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      {...(href ? { href } : {})}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "bg-muted rounded-3xl relative group overflow-hidden drop-shadow-lg",
        className,
        href && "hover:cursor-pointer",
      )}
      variants={boxVariants}
      whileHover="hovered"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
      <motion.div
        className="absolute top-8 right-8"
        variants={{ initial: { opacity: 0.6 }, hovered: { opacity: 1 } }}
      >
        {arrow && href && (
          <motion.div
            className="bg-muted rounded-full opacity-80 drop-shadow-sm shadow-muted-dark"
            variants={arrowVariants}
          >
            <ArrowIcon />
          </motion.div>
        )}
      </motion.div>
    </Wrapper>
  );
}
