import { cn } from "@/utils/util";

export default function CustomImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full object-cover", {
        [className]: className,
      })}
    />
  );
}
