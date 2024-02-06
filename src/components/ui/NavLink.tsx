"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props extends LinkProps {
    exact?: boolean,
    children: ReactNode,
    className?: string,
}

export default function NavLink({ href, exact, children, ...props }: Props) {
  const pathname = usePathname();
  const notActive = " text-gray";
  const isActive = exact ? pathname === href : pathname.startsWith(href.toString());

  if (!isActive) {
    props.className += notActive;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
