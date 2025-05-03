# Contributing to two-bucket-challenge

Thank you for considering contributing to this project! To make the collaboration process smoother, please follow these guidelines.

## How to Contribute

1. **Fork the Repository**: Fork this repository to your GitHub account.
2. **Create a new branch from `main`**.
3. **Make changes**: Make your changes in a clear and concise manner. Ensure your code is clean and well-documented.
4. **Commit changes**.
5. **Push changes**: Push your changes to your fork.
6. **Create a Pull Request (PR)**: 
   - Create a PR describing the changes you made.
   - Ensure the PR targets the `main` branch of the repository.

## Branching Rules

- Use a specific branch for each feature or fix.
- Keep your branch up to date with the main branch before pushing.
- Branch names must follow this format: `type/imperative-description`.

#### Allowed Types

- `feature`: New features or enhancements.
- `fix`: Bug fixes.
- `hotfix`: Urgent fixes or patches.
- `refactor`: Code restructuring that doesn't change functionality.
- `docs`: Documentation-only changes.
- `test`: Adding or updating tests.
- `chore`: Maintenance or tooling tasks (e.g., updating dependencies).

#### Description Rules

- Write the description in **imperative mood** (e.g., “add”, not “added” or “adds”).
- Use lowercase and hyphens (`-`) to separate words.
- Keep it short and meaningful.

#### Examples

- `feature/add-login-page`
- `bugfix/fix-header-alignment`
- `refactor/remove-unused-hooks`
- `chore/update-biome-config`


## Commit Message Rules

Follow this convention for your commit messages:

- Commit messages must follow this format: `<type>(<scope>): <imperative description>`.
  - `type`: Indicates the category of the change. Allowed types are in branchig rules.
  - `scope` (optional): Specifies the area affected (e.g., `auth`, `form`, `readme`, etc.).
  - `imperative description`: A concise, action-oriented summary in **imperative mood** (e.g., "add", not "added").
- Use the **present tense**, imperative mood.
  - ✅ `add login button`
  - ❌ `added login button` or `adds login button`
- Keep messages short and descriptive.
- Do not end the description with a period (`.`).

#### Examples

- `feature(auth): add Google login`
- `fix(form): fix email validation on register`
- `docs(readme): update installation instructions`
- `refactor(utils): extract date formatter function`
- `test(login): add test for failed login`
- `chore: update development dependencies`
- `ci(github): add production deploy workflow`


## Code Review

- All changes must be reviewed before being merged.
- The review should focus on code quality, tests, and clarity.
- If something is unclear, ask questions to make sure we're all on the same page.
