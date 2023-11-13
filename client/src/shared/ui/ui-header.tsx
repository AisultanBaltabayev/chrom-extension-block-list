import { UiLogo } from "@/shared/ui/ui-logo";
import { classNames } from "@/shared/lib/classNames";
import { ReactNode } from "react";

export function UiHeader({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={classNames(
        "px-3 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        [className],
      )}
    >
      <UiLogo />
      {right}
    </header>
  );
}
