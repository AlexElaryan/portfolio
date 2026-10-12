# Alex Elaryan · Developer Portfolio

A React portfolio presenting selected web projects, services, experience, and contact information.

[View portfolio](https://alexelaryan.github.io/portfolio/) · [GitHub profile](https://github.com/AlexElaryan) · [LinkedIn](https://www.linkedin.com/in/alex-elaryan-2398642b3/)

## Overview

The site brings project browsing and contact into a single-page interface. Visitors can filter work by category, open project details in an animated modal, follow links to individual websites, and send an enquiry through the contact form.

## Implementation highlights

- **Component-based interface:** dedicated sections for the introduction, background, services, experience, projects, and contact.
- **Shared state with Zustand:** project categories, filtering, selected-project details, and modal visibility.
- **Motion and interaction:** Framer Motion modal transitions, Swiper carousels, and section navigation with React Scroll.
- **Responsive styling:** custom CSS alongside Tailwind utilities.
- **Contact integration:** Web3Forms submission with SweetAlert2 success feedback.

## Stack

React 18 · JavaScript · Zustand · Framer Motion · Tailwind CSS · Swiper · Create React App

## Run locally

Install Node.js and npm, then:

```bash
git clone https://github.com/AlexElaryan/portfolio.git
cd portfolio
npm install
npm start
```

Open [localhost:3000](http://localhost:3000). The development server reloads as source files change.

### Build

```bash
npm run build
```

Creates the production bundle in `build/`.

### Publish to GitHub Pages

For maintainers with repository write access:

```bash
npm run deploy
```

The `predeploy` script runs the build first; `gh-pages` then publishes `build/`. The configured project URL is `https://alexelaryan.github.io/portfolio`.

## Code map

| Path | Responsibility |
| --- | --- |
| `src/App.js` | Composes the page sections |
| `src/commponents/` | Section components; directory spelling matches the repository |
| `src/commponents/Works.js` | Project filters, cards, and detail modal |
| `src/commponents/Contact.js` | Contact form and external submission integration |
| `src/store.js` | Portfolio content, shared state, and interaction actions |
| `src/index.css` | Site styling |
| `public/` | Static files and assets |
| `tailwind.config.js` | Tailwind configuration |

## Content and configuration

Project cards, navigation, services, and experience entries are defined in `src/store.js`. Section markup lives in `src/commponents/`.

The contact form uses an external Web3Forms endpoint and requires network access. If adapting the site, configure your own form destination in `Contact.js` before submitting messages. Some project categories currently contain “Coming Soon” entries; these are placeholders, not completed work.

## Author

**Alex Elaryan** — software engineer based in Yerevan, Armenia.

[LinkedIn](https://www.linkedin.com/in/alex-elaryan-2398642b3/) · [Kwork](https://kwork.ru/user/web-dev-2000)
