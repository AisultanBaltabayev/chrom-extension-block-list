import { ButtonHTMLAttributes } from "react";
import { classNames } from "@/6-shared/lib/classNames";

export type UiButtonVariant = "primary" | "secondary" | "outlined";
export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "px-6 h-12 rounded cursor-pointer flex gap-2 items-center justify-center",
        [
          className,
          {
            primary:
              "text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30",
            secondary:
              "text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30",
            outlined:
              "border border-slate-300 hover:border-slate-500 disabled:opacity-50",
          }[variant],
        ],
      )}
    />
  );
}
