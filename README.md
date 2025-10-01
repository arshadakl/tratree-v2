# ELT Next.js 15 Boilerplate

A modern, feature-rich boilerplate for Next.js 15 applications with enterprise-level tooling and configurations.

## Features

- ⚡ **Next.js 15** - Built on the latest version of Next.js
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Static type checking
- 🧪 **Vitest** - Unit testing setup
- 📚 **Storybook** - Component documentation and testing
- 🔍 **ESLint** - Code linting and formatting
- 🐶 **Husky** - Git hooks for code quality
- 📋 **Commitlint** - Standardized commit messages
- 🔄 **Environment Variables** - Configuration via `.env` files
- 🔒 **Sentry** - Error tracking and monitoring
- 🎯 **PostCSS** - CSS processing and optimization

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```
3. Copy the environment variable:
```bash
cp .env.example .env
```
4. Start the development server:
```bash
pnpm dev
```

## Available Scripts
- pnpm dev - Start development server
- pnpm build - Build production bundle
- pnpm start - Start production server
- pnpm test - Run Vitest tests
- pnpm storybook - Start Storybook development server
- pnpm lint - Run ESLint

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Use conventional commits for version control
- Document components using Storybook
- Follow the project's ESLint rules
