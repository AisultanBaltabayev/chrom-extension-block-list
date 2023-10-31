type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  additional: string[] = [],
  mods: Mods = {},
): string {
  const modsClassNames = Object.keys(mods).filter(
    (className) => mods[className],
  );

  return [cls, ...additional.filter(Boolean), ...modsClassNames].join(" ");
}
