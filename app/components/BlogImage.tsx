interface BlogImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function BlogImage({ src, alt, children }: BlogImageProps) {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{children}</figcaption>
    </figure>
  );
}
