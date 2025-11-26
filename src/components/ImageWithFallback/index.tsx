"use client";
import React from "react";

import Image, { ImageProps } from "next/image";

import { FALLBACK_IMAGE } from "@/constant/fallback-image.constant";
import { sanitizeImageUrl } from "@/constant/sanitize-image-url";

import { StyledDiv } from "./style";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  showMagnifier?: boolean;
}

const zoom = 2;

const ImageWithFallback = ({
  src,
  alt,
  showMagnifier = false,
  ...props
}: ImageWithFallbackProps) => {
  const [imageSrc, setImageSrc] = React.useState(sanitizeImageUrl(src));
  const [showImageMagnifier, setShowImageMagnifier] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const imageRef = React.useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || !showMagnifier) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({
      x: Math.max(0, Math.min(x, rect.width)),
      y: Math.max(0, Math.min(y, rect.height)),
    });
  };

  const handleMouseEnter = () => {
    if (!showMagnifier) return;
    setShowImageMagnifier(true);
  };

  const handleMouseLeave = () => {
    if (!showMagnifier) return;
    setShowImageMagnifier(false);
  };

  return (
    <StyledDiv>
      <Image
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onError={() => {
          setImageSrc(FALLBACK_IMAGE);
        }}
        draggable={false}
        {...props}
      />
      {showImageMagnifier && (
        <div className="image-magnifier-wrapper">
          <Image
            src={src.startsWith("blob:") ? src : imageSrc}
            alt={alt}
            width={200 * zoom}
            height={200 * zoom}
            style={{
              position: "absolute",
              left: -pos.x * (zoom - 1),
              top: -pos.y * (zoom - 1),
            }}
            draggable={false}
          />
        </div>
      )}
    </StyledDiv>
  );
};

export default React.memo(ImageWithFallback);
