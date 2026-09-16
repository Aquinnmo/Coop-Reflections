# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

Package manager is bun (`bun.lock` present).

- `bun install` — install dependencies
- `bun run dev` — start Vite dev server
- `bun run build` — type-check (`tsc -b`) then production build via Vite
- `bun run lint` — run ESLint over the repo
- `bun run preview` — preview the production build locally

There is no test suite configured yet.

## Architecture

Minimal Vite + React 19 + TypeScript app, currently just the unmodified Vite React-TS starter (`src/App.tsx` still has starter/counter content) — the real Coop-Reflections app has not been built out yet.

- `src/main.tsx` — entry point, mounts `App` into `#root` under `StrictMode`
- `src/App.tsx` — single top-level component; all app content currently lives here
- `src/App.css` / `src/index.css` — component and global styles
- `public/icons.svg` — sprite sheet referenced via `<use href="/icons.svg#...">`
- TypeScript is split into three configs via project references: `tsconfig.app.json` (browser code in `src/`, bundler module resolution, JSX) and `tsconfig.node.json` (Node-side config files like `vite.config.ts`), tied together by the root `tsconfig.json`.
