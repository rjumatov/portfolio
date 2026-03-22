# Freelance Developer Portfolio

![⚠️ Deprecated](https://img.shields.io/badge/status-deprecated-red)

> ⚠️ Note: This repository is not actively maintained anymore.
> The current version of my portfolio is private and replaces this one.
> You can see the live website here: [jumatov.com](https://jumatov.com)

![opengraph-en.png](public/opengraph-en.png)

## Overview

This repository contains the source code for my personal website, designed to highlight my expertise, experience, and services as a freelance software developer.

## Features

- 🌍 **Multi-Language Support**: Fully localized content with [next-intl](https://next-intl.dev/) to cater to a global audience
- ✅ **Form Validation**: Built with [react-hook-form](https://react-hook-form.com) and [zod](https://zod.dev) for reliable, smooth user experience
- 💾 **Form Integration**: Stores submissions in [Supabase](https://supabase.com) for seamless backend management
- 📧 **Email Verification**: Secures form submissions with an email verification process using [Nodemailer](https://nodemailer.com)
- 🪷️ **Email Templating**: Generates beautiful, customizable emails with [React Email](https://react.email/) using React and TypeScript
- 📄 **Content Management**: Manages content via [Contentful](https://contentful.com), integrated with [GraphQL](https://graphql.org/) queries
- 🌙 **Dark Mode Support**: Supports light/dark mode switching with [next-themes](https://github.com/pacocoursey/next-themes)
- 📱 **Mobile-First Styling**: Ensures a responsive, fluid layout across all devices with [Tailwind CSS](https://tailwindcss.com)
- 👁 **Accessibility Testing**: Automatically detects WCAG A & AA violations using [axe-core](https://github.com/dequelabs/axe-core)
- 🖋️ **Modern Typography**: Uses the [Geist font](https://vercel.com/font) from Vercel for clean, readable text
- 🌀 **Smooth Animations**: Enhances the user experience with engaging animations powered by [Motion](https://motion.dev/)

## Commands

Run these commands to interact with the project:

- 🖥️ `npm run dev`: Start the local development server
- 🧩 `npm run dev:mock`: Start the local development server with mocked data using _MSW_
- 📦 `npm run build`: Build the project for production and prefetch _Contentful data_
- 🚀 `npm run start`: Run the production server
- 🧑‍💻 `npm run check`: Check for code issues using _Biome_ (linting, formatting, TypeScript)
- 🎨 `npm run check:fix`: Apply fixes for fixable issues with _Biome_
- 🧪 `npm test`: Run unit tests with _Vitest_
- 🎭 `npm run test:e2e`: Run end-to-end tests with _Playwright_ including _axe-core_ accessibility tests
- 🧬 `npm run types:generate`: Generate types for _GraphQL queries_ and _Supabase schema_
