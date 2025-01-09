import NextLink from "next/link";

export const Link = ({ children, ...props }) => {
  return (
    <NextLink
      {...props}
      className="text-blue-500 dark:text-blue-400 hover:underline"
      target="_blank"
    >
      {children}
    </NextLink>
  );
};
