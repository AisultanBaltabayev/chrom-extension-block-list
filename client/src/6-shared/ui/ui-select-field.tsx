import React, { PropsWithRef, SelectHTMLAttributes, useId } from "react";
import { classNames } from "@/6-shared/lib/classNames";

export type UiSelectOption = {
  label: string;
  value: string;
};

export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOption[];
};

export function UiSelectField({
  className,
  label,
  error,
  selectProps,
  options,
}: UiSelectFieldProps) {
  const id = useId();
  return (
    <div className={classNames("flex flex-col gap-1", [className])}>
      {label && (
        <label htmlFor={id} className={"block"}>
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={classNames(
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
          [selectProps?.className],
        )}
      >
        {options?.map(({ label, value }, index) => (
          <option key={value + index} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div className={"text-rose-400 text-sm"}>{error}</div>}
    </div>
  );
}
