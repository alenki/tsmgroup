# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website landing page for TSM Group (KSA), a rework of their current site at http://tsmgroups.com/. Built with React 19, TypeScript, and Vite 7.

## Commands

- **Dev server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (runs `tsc -b` then Vite build)
- **Lint**: `npm run lint` (ESLint flat config with TypeScript and React rules)
- **Preview production build**: `npm run preview`

## Architecture

Single-page React application using the standard Vite template structure:

- `src/main.tsx` — App entry point, renders into `#root`
- `src/App.tsx` — Root component
- `src/assets/` — Static assets imported by components
- `public/` — Static files served as-is
- `index.html` — HTML shell with root div

## TypeScript

Strict mode is enabled with additional strictness flags (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, `noUncheckedSideEffectImports`). Two tsconfig files: `tsconfig.app.json` for app code (ES2022, react-jsx) and `tsconfig.node.json` for Vite config (ES2023).

## ESLint

Uses flat config format (`eslint.config.js`) with TypeScript ESLint recommended rules, React Hooks, and React Refresh plugins. Browser globals are enabled.
