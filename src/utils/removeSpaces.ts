import config from '../config/config.json';

/**
 * Removes all spaces from a filename.
 * If the resulting filename is empty, returns the fallback value from config.
 *
 * @param {string} filename - The original filename to process.
 * @returns {string} - The filename with all spaces removed, or the fallback if empty.
 */
export function removeSpaces(filename: string): string {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as filename');
  }

  // Retrieve fallback name from config
  const fallbackName = config.removeSpaces?.fallbackName || 'empty-filename';

  // Remove all spaces
  const processedFilename = filename.replace(/\s+/g, '');

  // Return fallback if filename becomes empty
  return processedFilename.trim() === '' ? fallbackName : processedFilename;
}
