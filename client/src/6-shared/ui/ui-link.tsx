import React from "react";
import { classNames } from "@/6-shared/lib/classNames";
import Link from "next/link";

export type UiLinkProps = {} & Parameters<typeof Link>[0];

export function UiLink({ className, ...props }: UiLinkProps) {
  return (
    <Link
      {...props}
      className={classNames(
        "p-1 text-teal-500 hover:text-teal-600 cursor-pointer",
        [className],
      )}
    />
  );
}
