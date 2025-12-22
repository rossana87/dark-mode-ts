# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React + TypeScript portfolio application demonstrating dark mode implementation using React Context API. Built with Vite for development and bundling.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Launches Vite dev server with HMR at http://localhost:5173 (default)

### Build for Production
```bash
npm run build
```
Runs TypeScript compiler checks followed by Vite production build. Output goes to `dist/` directory.

### Run Tests
```bash
npm test
```
Executes Jest test suite with jsdom environment for React component testing.

### Lint Code
```bash
npm run lint
```
Runs ESLint on TypeScript/TSX files. Currently configured rules are commented out in `.eslintrc.cjs`.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

## Architecture

### Theme Management System

The application uses a centralized theme context pattern located in `src/assets/context/`:

- **Context.tsx**: Defines `ThemeContext` with `ThemeProvider` component that manages theme state
  - Exports `lightTheme` and `darkTheme` objects containing CSS class mappings
  - Provides `toggleTheme()` function to switch between themes
  - Theme objects map semantic keys (e.g., `buttonClass`, `container`, `h1`) to CSS class names

- **useTheme.tsx**: Custom hook that wraps `useContext(ThemeContext)` with null safety check
  - Throws error if used outside `ThemeProvider`
  - Returns `{ theme, toggleTheme }` interface

### Application Structure

- **Entry Point**: `src/main.tsx` renders the app wrapped in `ThemeProvider`
  - The main `App.tsx` is currently unused; `Container.tsx` serves as the primary component

- **Component Hierarchy**:
  ```
  ThemeProvider (Context.tsx)
  └── Container (Container.tsx)
      ├── About
      ├── Interests
      └── Footer (contains Button component for theme toggle)
  ```

- **Theme Application**: Components access theme via `useTheme()` hook and apply classes dynamically:
  ```tsx
  const { theme } = useTheme();
  <div className={theme.container}>
  ```

### Testing Setup

- Jest configured with `jsdom` environment for React testing
- Babel presets handle TypeScript and React JSX transformation (automatic runtime)
- Testing Library used for component tests (see `Container.test.tsx` for pattern)

## CI/CD

GitHub Actions workflow (`.github/workflows/test.yml`) runs on push/PR to master:
1. Installs dependencies with `npm ci`
2. Runs test suite
3. Validates production build

## TypeScript Configuration

- Target: ES2020 with strict mode enabled
- JSX: `react-jsx` (automatic runtime, no need for React imports in components)
- Module resolution: bundler mode (Vite-specific)
- Linting enabled: unused locals/parameters, no fallthrough cases
