# React CI/CD Demo with GitHub Actions and GitHub Pages

An automated CI/CD pipeline demonstration built for Software Engineering Lab 11.

![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=github-actions)
![React](https://img.shields.io/badge/React-18-cyan?logo=react)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite)
![Vitest](https://img.shields.io/badge/Testing-Vitest-green?logo=vitest)

---

## 📌 Overview

This project provides a full Continuous Integration & Continuous Deployment (CI/CD) cycle:

1. **Continuous Integration (CI)**:
   - **ESLint**: Automatic code quality and linting verification.
   - **Vitest**: Automated unit tests for utilities and React components.
   - **Vite Build**: Production bundling and tree-shaking verification.
2. **Continuous Deployment (CD)**:
   - **GitHub Pages**: Automated deployment upon pushes or merges into the `main` branch.

---

## 🛠️ Local Development

### Prerequisites

- Node.js (v18+ or v22+)
- npm

### Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run linter
npm run lint

# Run automated tests
npm run test:run

# Build production bundle
npm run build
```

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # GitHub Actions CI/CD Pipeline definition
├── src/
│   ├── utils/
│   │   ├── calculator.js     # Tested logic module
│   │   └── calculator.test.js# Vitest unit tests
│   ├── App.jsx               # Interactive dashboard & calculator UI
│   ├── App.test.jsx          # React Testing Library component tests
│   ├── index.css             # Design styles (dark theme, glassmorphism)
│   ├── main.jsx              # Application entry point
│   └── setupTests.js         # Jest-DOM matchers setup
├── DEMO_GUIDE.md             # Step-by-step presentation script for the lab demo
├── eslint.config.js          # ESLint 9 configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
└── vite.config.js            # Vite and Vitest configuration
```

---

## 📖 Presentation Guide

See [DEMO_GUIDE.md](./DEMO_GUIDE.md) for step-by-step instructions on setting up the GitHub repository, running the happy path, and introducing a bug to show CI quality gates blocking bad deployments.
