import config from '../config/config.json';

/**
 * Removes reserved characters from a filename.
 * If the resulting filename is empty, returns the fallback value from config.
 *
 * @param {string} filename - The original filename to process.
 * @returns {string} - The filename without reserved characters, or the fallback if empty.
 */
export function removeSpecialChars(filename: string): string {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as filename');
  }

  // Retrieve reserved characters and fallback name from config
  const reservedCharacters =
    config.removeSpecialChars?.reservedCharacters || [];
  const fallbackName =
    config.removeSpecialChars?.fallbackName || 'empty-filename';

  // Remove reserved characters
  const processedFilename = reservedCharacters.reduce(
    (currentFilename, char) => currentFilename.split(char).join(''),
    filename,
  );

  // Return fallback if filename becomes empty
  return processedFilename.trim() === '' ? fallbackName : processedFilename;
}
