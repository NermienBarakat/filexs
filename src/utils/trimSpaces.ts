import config from '../config/config.json';

/**
 * Trims spaces from the beginning and end of the filename.
 * If the resulting filename is empty, returns the fallback value from config.
 *
 * @param {string} filename - The original filename to process.
 * @returns {string} - The trimmed filename, or the fallback if empty.
 */
export function trimSpaces(filename: string): string {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as filename');
  }

  // Retrieve fallback name from config
  const fallbackName = config.trimSpaces?.fallbackName || 'empty-filename';

  // Trim spaces from the beginning and end
  const processedFilename = filename.trim();

  // Return fallback if filename becomes empty
  return processedFilename === '' ? fallbackName : processedFilename;
}
