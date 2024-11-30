
# Filexs

**Filexs** is a lightweight and modular TypeScript library designed for processing filenames. It offers functionalities like removing spaces, replacing special characters, and ensuring compatibility with Blob storage, URLs, and operating systems.

---

## Features

- **Filename Cleaning**: Remove unwanted characters or spaces.
- **Compatibility**: Ensure filenames work across different environments like URLs, Blob storage, and OS.
- **Customizable Rules**: Users can define their own rules for processing filenames.
- **Well-documented Defaults**: Includes pre-configured settings for common use cases.

---

## Getting Started

### Installation

Using **pnpm**:
```bash
pnpm install filexs
```

### Usage

```typescript
import { cleanFilename } from "filexs";

// Clean a filename
const sanitizedFilename = cleanFilename("example file @2024.txt");
console.log(sanitizedFilename); // Output: example-file-2024.txt
```

---

## Scripts

The following scripts are available for development and testing:

- `pnpm build`: Build the project using TypeScript.
- `pnpm test`: Run tests using Jest.
- `pnpm lint`: Check code quality with ESLint.
- `pnpm format`: Format the code using Prettier.

---

## Project Structure

```
src/
  utils/       # Utility functions for filename processing
  pipelines/   # Core pipeline logic for processing
  config/      # JSON files for constants and defaults
tests/         # Unit tests for library functionality
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

---

## License

This project is licensed under the MIT License.

---

## Author

Created by **Neri Barakat**.
