# CET Cell Portal — UI Redesign

A responsive frontend rebuild of the Maharashtra State CET Cell examination portal, built to practice real-world React patterns beyond tutorial projects. Most government portal UIs are dense, inconsistent, and not mobile-friendly — this project reimagines the student dashboard and notice board with a cleaner, responsive, accessible interface.

**Live demo:** [magical-entremet-5e7929.netlify.app](https://magical-entremet-5e7929.netlify.app/home)

## Features

- Responsive dashboard layout that adapts across mobile, tablet, and desktop
- Stat card components for at-a-glance student/exam data
- Notice Board table with data-driven rendering (no hardcoded rows)
- Reusable `Button` component built with `forwardRef`, `clsx`, and variant support
- Accessibility attributes (ARIA labels, semantic HTML) baked into components, not bolted on
- Styled with Tailwind CSS v4, including the newer CSS-variable-based syntax

## Tech Stack

- **React** (Vite)
- **React Router** for client-side navigation
- **Tailwind CSS v4** for styling
- **Netlify** for deployment

## Getting Started

```bash
# Clone the repo
git clone https://github.com/honeykokane2008/cet-cell-ui-change-project.git
cd cet-cell-ui-change-project

# Install dependencies
npm install

# Run locally
npm run dev
```

## Why I Built This

I wanted to move past small tutorial clones and practice React on a UI with real complexity — multiple views, tabular data, and responsive breakpoints that actually need to hold up on a phone. The Maharashtra CET Cell site was a natural target since it's public, information-dense, and (like most government portals) has a lot of room for a cleaner interface.

## Contributing

Contributions are welcome. Feel free to open an issue or submit a PR if you'd like to improve the UI, add features, or fix bugs.

## Author

**Honey Kokane** — Frontend Developer  
[GitHub](https://github.com/honeykokane2008)