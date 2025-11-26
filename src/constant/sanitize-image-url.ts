import { FALLBACK_IMAGE } from "./fallback-image.constant";

export const sanitizeImageUrl = (src: string) => {
  if (!src) return FALLBACK_IMAGE;

  if (src.startsWith("/") || src.startsWith("http")) {
    return src;
  }

  return FALLBACK_IMAGE;
};
