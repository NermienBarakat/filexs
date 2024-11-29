import config from '../config/config.json';

/**
 * Replaces all spaces in a filename with a specified replacement character from config or a provided one.
 *
 * @param {string} filename - The original filename to process.
 * @param {string} [replacementCharacter] - Optional character to replace spaces with. Defaults to config value.
 * @returns {string} - The filename with spaces replaced by the replacement character.
 */
export function replaceSpaces(
  filename: string,
  replacementCharacter?: string,
): string {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as filename');
  }

  // Use the provided replacement character or fallback to the config value
  const finalReplacementCharacter =
    replacementCharacter || config.replaceSpaces?.replacementCharacter || '_';

  if (finalReplacementCharacter.length !== 1) {
    throw new TypeError(
      'Replacement character must be a single valid character',
    );
  }

  // Replace all spaces with the replacement character
  return filename.replace(/\s+/g, finalReplacementCharacter);
}
