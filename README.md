# 🚀 Fullstack Starter Kit — Next.js + Clerk + Prisma + NeonDB + shadcn/ui

![Last Commit](https://img.shields.io/github/last-commit/phongvudzz/next-clerk-starter)
![GitHub Stars](https://img.shields.io/github/stars/phongvudzz/next-clerk-starter?style=social)
![GitHub Forks](https://img.shields.io/github/forks/phongvudzz/next-clerk-starter?style=social)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A modern **Fullstack Starter Kit** designed to help **developers bootstrap fullstack applications in minutes**. Just **fork or clone**, run `npm install`, add your `.env`, and you're ready to build!

---

## 🧠 Purpose

This project is built for **developers who want to get started quickly with a fullstack app** using modern tools like **Next.js App Router**, **Clerk authentication**, **shadcn/ui**, and **Prisma with NeonDB**.

> Skip the boilerplate and focus on what matters — building features.

---

## ⚙️ Tech Stack

- ⚛️ **React 19**
- ⚡️ **Next.js 15** with App Router
- ✨ **TypeScript**
- 🔐 **Clerk** — Authentication and User Management
- 🧬 **Prisma ORM** — Type-safe database access
- 🛢 **NeonDB** — Scalable, serverless Postgres database
- 💅 **shadcn/ui** — Accessible, modern UI components
- 💨 **Tailwind CSS 4** — Configured with CSS Variables to extend the primary color
- 📈 **Absolute Import and Path Alias** — Import components using @/ prefix
- 📏 **ESLint** — Find and fix problems in your code, also will auto sort your imports
- 🌓 **Dark Mode Support** — Easily toggle light/dark using class strategy

---

## 🧑‍💻 Getting Started

### 1. Clone or Fork

```bash
git clone https://github.com/phongvudzz/next-clerk-starter.git
cd next-clerk-starter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Fill in the values for:

```env
# Clerk

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Prisma + NeonDB

DATABASE_URL=your_neon_database_url
🔐 Note: Never commit your .env file to version control.
```

### 4. Set up Prisma

```bash
npx prisma db push
```

Or, if you’re using migrations:

```bash
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
```

### 6. Open http://localhost:3000 in your browser

---

## 📁 Folder Structure

```
├── app/         # Next.js App Router pages
├── components/  # Reusable UI Components (shadcn)
├── lib/         # Utilities & helper functions
├── prisma/      # Prisma schema & migration files
├── public/      # Static assets
├── styles/      # Global styles
└── .env         # Your environment variables
```

---

## 🛠️ Customization

The project is built to be modular and extensible.
Feel free to:

- Add new routes
- Connect APIs
- Integrate Stripe, email services, or your favorite UI tools

---

## 💬 Feedback & Contribution

If this starter helps you, ⭐ the repo and share it with your friends.
Found a bug or want to contribute?
Open an [Issue](https://github.com/phongvudzz/next-clerk-starter/issues) or a [Pull Request](https://github.com/phongvudzz/next-clerk-starter/pulls).

---

## 📝 License

MIT License

Copyright (c) 2025 Phong Vu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---
