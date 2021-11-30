export const showDescriptionValue = (value: string | number | boolean | undefined) =>
  value?.toString() ? value.toString() : 'n/a';

export function convertObjectToArray<T>(o: T): (keyof T)[] {
  return Object.keys(o) as (keyof T)[];
}

export const sliceAndUpperCaseString = (keyFromSchedule: string) => {
  const key = keyFromSchedule
    .split(/(?=[A-Z])/)
    .map((key) => key.charAt(0).toUpperCase() + key.slice(1));
  return key ? key.join(' ') : keyFromSchedule;
};
