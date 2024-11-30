import { removeCharacters } from '@src/utils/remove-characters';
import config from '@config/config.json';

describe('removeCharacters utility', () => {
  // Basic Functionality
  test('removes a single character from the string', () => {
    const input = 'file@name.txt';
    const output = removeCharacters(input, ['@']);
    expect(output).toBe('filename.txt');
  });

  test('removes multiple characters from the string', () => {
    const input = 'file@name#2024.txt';
    const output = removeCharacters(input, ['@', '#']);
    expect(output).toBe('filename2024.txt');
  });

  test('returns the same string when no characters match', () => {
    const input = 'filename';
    const output = removeCharacters(input, ['@', '#']);
    expect(output).toBe('filename');
  });

  // Edge Cases
  test('returns an empty string when the input is empty', () => {
    const input = '';
    const output = removeCharacters(input, ['@', '#']);
    expect(output).toBe('');
  });

  test('returns an empty string when all characters are removed', () => {
    const input = '@@@';
    const output = removeCharacters(input, ['@']);
    expect(output).toBe('');
  });

  test('returns the original string when the characters array is empty', () => {
    const input = 'file@name.txt';
    const output = removeCharacters(input, []);
    expect(output).toBe('file@name.txt');
  });

  // Default Behavior
  test('removes default reserved characters from the string', () => {
    const input = 'file name.txt';
    const output = removeCharacters(input, config.reservedCharacters);
    expect(output).toBe('filename.txt');
  });

  test('removes reserved characters including spaces and symbols', () => {
    const input = 'file name @ 2024';
    const output = removeCharacters(input, [' ', '@']);
    expect(output).toBe('filename2024');
  });

  // Stress Tests
  test('handles large input strings efficiently', () => {
    const input = '@'.repeat(1000) + 'filename' + '@'.repeat(1000);
    const output = removeCharacters(input, ['@']);
    expect(output).toBe('filename');
  });

  test('handles a large set of characters to remove', () => {
    const input = 'file@name#2024.txt';
    const charactersToRemove = Array.from('@#0123456789');
    const output = removeCharacters(input, charactersToRemove);
    expect(output).toBe('filename.txt');
  });
});
