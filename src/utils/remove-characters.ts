import config from '@config/config.json';

export function removeCharacters(
  filename: string,
  charactersToRemove: string[] = config.reservedCharacters,
): string {
  return charactersToRemove.reduce(
    (result, char) => result.split(char).join(''),
    filename,
  );
}
