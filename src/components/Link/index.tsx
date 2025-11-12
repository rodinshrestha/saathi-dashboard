import clsx from "clsx";
import { LinkProps, default as NextLink } from "next/link";

type Props = {
  className?: string;
} & LinkProps;

export const Link = ({ className, ...rest }: Props) => {
  return <NextLink {...rest} className={clsx(className)} />;
};
