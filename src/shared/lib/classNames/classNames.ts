type Mods = Record<string, boolean | string>;

export function classNames(
  mainClass: string,
  mods: Mods,
  additionalClasses: string[]
): string {
  return [
    mainClass,
    ...additionalClasses,
    Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([className]) => className),
  ].join(" ");
}
