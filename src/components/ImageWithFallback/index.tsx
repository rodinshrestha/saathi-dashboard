"use client";
import React from "react";

import Image, { ImageProps } from "next/image";

import { FALLBACK_IMAGE } from "@/constant/fallback-image.constant";
import { sanitizeImageUrl } from "@/constant/sanitize-image-url";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
}

const ImageWithFallback = ({ src, alt, ...props }: ImageWithFallbackProps) => {
  const [imageSrc, setImageSrc] = React.useState(sanitizeImageUrl(src));

  return (
    <Image
      src={imageSrc}
      alt={alt}
      onError={() => {
        debugger;
        setImageSrc(FALLBACK_IMAGE);
      }}
      draggable={false}
      {...props}
    />
  );
};

export default React.memo(ImageWithFallback);
