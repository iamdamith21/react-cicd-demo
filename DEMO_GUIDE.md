# CI/CD Demo Presentation Guide

This guide gives you the exact script and steps to present your CI/CD pipeline lab demonstration using **React**, **GitHub Actions**, and **GitHub Pages**.

---

## 🎯 What is Shown in This Demo?

1. **Continuous Integration (CI)**:
   - Automated Linting (`ESLint`) to check code quality.
   - Automated Unit Testing (`Vitest`) to prevent regression bugs.
   - Automated Build (`Vite`) to ensure bundle compilation succeeds.
2. **Continuous Deployment (CD)**:
   - Automated zero-config deployment to **GitHub Pages**.
   - Immediate live production updates upon merging/pushing to `main`.
3. **Quality Gates in Action (Failure Demonstration)**:
   - Showing what happens when a developer pushes broken code: CI fails, and deployment is blocked!

---

## 📋 Step 1: Initial Setup (Do this before or at the start of your demo)

### 1.1 Initialize Git & Commit

Open your terminal in this project folder:

```bash
git init
git add .
git commit -m "feat: initial commit with full CI/CD pipeline"
```

### 1.2 Create a New GitHub Repository

1. Go to [GitHub](https://github.com/new) and create a **Public** repository (e.g. `react-cicd-demo`).
2. Link your local repo and push to `main`:

```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/react-cicd-demo.git
git push -u origin main
```

### 1.3 Enable GitHub Pages for GitHub Actions

1. On your GitHub repository page, click **Settings** (top navigation).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment > Source**, click the dropdown and select **GitHub Actions** (NOT "Deploy from a branch").
4. That's it! GitHub Actions now has permission to publish your live website automatically.

---

## 🚀 Step 2: Demonstrating Successful CI/CD (Happy Path)

1. Click on the **Actions** tab in your GitHub repository.
2. You will see the workflow run named **CI/CD Pipeline**.
3. Click on the workflow run to view the interactive pipeline graph:
   - **Continuous Integration (CI)** job:
     - `Checkout repository code`
     - `Setup Node.js`
     - `Install dependencies`
     - `1. Code Linting (ESLint)`
     - `2. Automated Unit Tests (Vitest)`
     - `3. Production Build (Vite)`
     - `Upload Pages Artifact`
   - **Continuous Deployment (CD)** job:
     - `Deploy to GitHub Pages`
4. Once completed (all green checkmarks), click the URL under the **deploy** step or look at the repository homepage on the right sidebar under **Deployments**.
5. Open the live site URL (`https://<username>.github.io/react-cicd-demo/`).
6. Demonstrate the live React app:
   - Show the interactive pipeline visualizer cards.
   - Test the interactive calculator live in the browser.

---

## 🛡️ Step 3: Demonstrating the CI Quality Gate (Failure Path)

*This is the most impressive part of a CI/CD presentation: proving that CI protects production from broken code.*

### 3.1 Create a Feature Branch

In your terminal:

```bash
git checkout -b test-bug
```

### 3.2 Introduce a Bug in the Logic

Open `src/utils/calculator.js` and intentionally break the `add` function:

```javascript
// Change this:
export function add(a, b) {
  return Number(a) + Number(b);
}

// To this broken code:
export function add(a, b) {
  return Number(a) - Number(b); // BUG: using minus instead of plus
}
```

### 3.3 Commit and Push to the Branch

```bash
git commit -am "fix: update add calculation"
git push -u origin test-bug
```

### 3.4 Create a Pull Request & Show CI Blocking It

1. On GitHub, open a **Pull Request** from `test-bug` into `main`.
2. Notice the GitHub Actions checks running automatically on the Pull Request.
3. Within ~30 seconds, the check will show **❌ Failed**:
   - Click **Details** to show the audience the Vitest test output:
     `AssertionError: expected -1 to be 5 // at add(2, 3)`
4. Explain to your audience/evaluator:
   > *"Because the automated unit test failed in the CI stage, GitHub prevents this code from ever being deployed to production. Our live users are protected!"*

---

## 🛠️ Step 4: Fixing the Bug & Automatic Redeployment

### 4.1 Fix the Code

Restore `src/utils/calculator.js` back to:

```javascript
export function add(a, b) {
  return Number(a) + Number(b);
}
```

### 4.2 Push the Fix

```bash
git commit -am "fix: resolve addition logic bug"
git push
```

### 4.3 Merge Pull Request

1. Watch the PR checks turn **Green (Passed)**!
2. Click **Merge pull request** into `main`.
3. The merge push immediately triggers the **CD** stage.
4. Refresh your live GitHub Pages site—the new version is deployed seamlessly without touching a server!
