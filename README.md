# Two Bucket Challenge

Two Bucket Challenge is a project developed with **React**, **TypeScript**, and **Vite** that represents a logic puzzle: Get exactly 4 liters of water in one of the two buckets.

## Table of Contents

1. [Description](#description)
2. [Technologies](#technologies)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Available Scripts](#available-scripts)
6. [Project Structure](#project-structure)
7. [How to Contribute](#how-to-contribute)
8. [License](#license)

---

## Description

The goal of the project is to provide an interactive experience to solve the classic water bucket problem. Users can perform actions such as filling, emptying, or transferring water between buckets to reach the desired amount.

## Technologies

- [**React**](https://react.dev)
- [**TypeScript**](https://www.typescriptlang.org/docs)
- [**Vite**](https://vitejs.dev/guide/)
- [**TailwindCSS**](https://tailwindcss.com/docs)
- [**i18next**](https://www.i18next.com/)
- [**Husky**](https://typicode.github.io/husky/#/)
- [**Biome**](https://biomejs.dev/)
- [**Vitest**](https://vitest.dev/)
- [**pnpm**](https://pnpm.io/)

## Prerequisites

Before getting started, make sure you have the following installed:

- [**Node.js**](https://nodejs.org/en/download) (version 18 or higher)
- [**pnpm**](https://pnpm.io/) (package manager, you can install it with `npm install -g pnpm`)

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/two-bucket.git
   cd two-bucket
   ```

2. Install the dependencies:
   ```
   pnpm install
   ```

## Available Scripts

- **Start the development server**:
  ```
  pnpm run dev
  ```

- **Build the project for production**:
  ```
  pnpm run build
  ```

- **Run tests**:
  ```
  pnpm run test
  ```

## Project Structure

The main structure of the project is as follows:
```
src/
├── components/   # Reusable React components.
│   ├── layout/   # Components that make up the main layout.
│   ├── ui/       # Shadcn UI components.
│   └── others/   # Challenge-related components.
├── constants/    # Global constants.
├── context/      # React contexts for state management.
├── entities/     # Challenge entities.
├── hooks/        # Global hooks.
├── i18n/         # Internationalization configuration.
│   └── locales/  # Translation files.
├── lib/          # External libraries and utilities.
├── utils/        # Global utility functions.
└── index.css     # Global styles.
```

## How to Contribute
- See the `CONTRIBUTING.md` file for more details.

## License
- This project is licensed under the `MIT License`.
