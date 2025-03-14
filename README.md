## Portfolio Project

### About this Project

This is the source code for my **personal portfolio website**, built to showcase my **skills, experience, and services** as a freelance software developer.  
It serves as a **technical demonstration** of my expertise in **Next.js, TypeScript, and full-stack web development**.

While the primary audience of the website is clients, this repository is meant for **developers** who are interested in the tech stack, best practices, and implementation details.

## ✨ Features

- 🌍 **Multi-Language Support**: Fully localized content with [next-intl](https://next-intl.dev/) to cater to a global audience
- ✅ **Form Validation**: Built with [react-hook-form](https://react-hook-form.com) and [zod](https://zod.dev) for reliable, smooth user experience
- 💾 **Form Integration**: Submissions stored in [Supabase](https://supabase.com) for seamless backend management
- 📧 **Email Verification**: Implements a secure email verification process on form submissions using [Nodemailer](https://nodemailer.com)
- 📄 **Content Management**: Manage content via [Contentful](https://contentful.com), integrated with [GraphQL](https://graphql.org/) queries
- 🌙 **Dark Mode Support**: Switch between light and dark mode, powered by [next-themes](https://github.com/pacocoursey/next-themes)
- 📱 **Mobile-First Styling**: Developed with [Tailwind CSS](https://tailwindcss.com) to ensure a responsive, fluid layout across all devices
- 👁 **Accessibility Testing**: Automatically detects WCAG A & AA violations using [axe-core](https://github.com/dequelabs/axe-core)
- 🖋️ **Modern Typography**: Uses the [Geist font](https://vercel.com/font) from Vercel for clean, readable text
- 🖼️ **Lightweight Icons**: Integrated with [hugeicons-react](https://hugeicons.com) for scalable, high-quality icons
- 🌀 **Smooth Animations**: Engaging animations and scroll effects powered by [Motion](https://motion.dev/)

## 🛠 Commands

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
