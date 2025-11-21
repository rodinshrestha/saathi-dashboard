import Link, { LinkProps } from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

const NextLink = ({ children, className, ...props }: Props) => {
  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default NextLink;
