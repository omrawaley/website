import Image from "next/image";
import Box from "./Box";
import { cn } from "lib/utils";

interface BoxImageProps {
  href: string;
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
}

export default function BoxImage({
  href,
  src,
  alt,
  className,
  imageClassName,
}: BoxImageProps) {
  return (
    <Box href={href} className={className} arrow={true}>
      <Image
        src={src}
        alt={alt}
        width={4284}
        height={5712}
        className={cn("object-cover w-full h-auto", imageClassName)}
      />
    </Box>
  );
}
