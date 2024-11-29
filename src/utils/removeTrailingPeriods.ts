import config from '../config/config.json';

/**
 * Removes trailing periods from the end of the filename.
 * If the resulting filename is empty, returns the fallback value from config.
 *
 * @param {string} filename - The original filename to process.
 * @returns {string} - The filename without trailing periods, or the fallback if empty.
 */
export function removeTrailingPeriods(filename: string): string {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as filename');
  }

  // Retrieve fallback name from config
  const fallbackName =
    config.removeTrailingPeriods?.fallbackName || 'empty-filename';

  // Remove trailing periods
  const processedFilename = filename.replace(/\.+$/, '');

  // Return fallback if filename becomes empty
  return processedFilename === '' ? fallbackName : processedFilename;
}
