import { ImgHTMLAttributes, useMemo } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ src, alt, ...props }: Readonly<ImageProps>) => {
  const srcImage = useMemo(() => {
    const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? "";

    const isAbsoluteURL =
      src?.startsWith("http://") || src?.startsWith("https://");

    if (isAbsoluteURL) return src;

    return baseURL ? `${baseURL}${src}` : src;
  }, [src]);

  return (
    <picture>
      <img src={srcImage} alt={alt} {...props} />
    </picture>
  );
};

export default Image;
