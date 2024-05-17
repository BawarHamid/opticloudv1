## Description

This repository contains a template project for [Next.js](https://nextjs.org/).

Uses:

- Next.js 14 (with App Router)
- Typescript
- Tailwind CSS

## System Requirements:

- Node.js 18.17 or later

## Getting Started

Add a `.env` file in the root directory, copy the contents in `.env.example` and define the values according to your project.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The page auto-updates with the latest changes each time the project is saved.

## Customization

- Change favicon.ico, for example by generating one [here](https://favicon.io/favicon-generator/)
- Replace the logo.png image in the `/public` folder. This is also where you add additional images to use in the project. After changing the logo, adjust the `width` and `height` properties in the `<Image/>` components that display it.
- Change and add colors in `tailwind.config.ts`. You can use [UI Colors](https://uicolors.app/create) to help create a color palette.
- Customize `globals.css`, for example to define the font sizes used in h1, h2 etc.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
