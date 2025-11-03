"use client";
import React from "react";

import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/images/fallback.png", // default fallback
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      draggable={false}
    />
  );
}
