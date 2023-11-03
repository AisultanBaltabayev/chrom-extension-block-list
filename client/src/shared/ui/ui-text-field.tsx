import React, { InputHTMLAttributes, PropsWithRef, useId } from "react";
import { classNames } from "@/shared/lib/classNames";

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UiTextField({
  className,
  label,
  error,
  inputProps,
}: UiTextFieldProps) {
  const id = useId();
  return (
    <div className={classNames("flex flex-col gap-1", [className])}>
      {label && (
        <label htmlFor={id} className={"block"}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={classNames(
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
          [inputProps?.className],
        )}
      />
      {error && <div className={"text-rose-400 text-sm"}>{error}</div>}
    </div>
  );
}
