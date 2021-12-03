function toTitleCase(key: string): string {
  const withSpaces = key.replace(/([A-Z])/g, ' $1');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
}

export function getColumns<Type>(keys: Array<keyof Type>) {
  return keys.map((key) => {
    return {
      key,
      title: toTitleCase(key.toString()),
    };
  });
}
