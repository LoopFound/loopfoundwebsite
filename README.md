# Loop Found Website

The official website for [Loop Found](https://www.loopfound.in), a web development agency that designs and builds websites focused on business growth, conversions, and long-term usability.

## About the project

The website introduces Loop Found's services, process, team, and selected client work. It gives prospective clients several ways to learn about the agency and start a conversation.

The site includes:

- A landing page with the agency's positioning and calls to action
- Services covering UI/UX design, frontend development, branding, and web development
- A portfolio of selected projects
- Information about the team and website development process
- Testimonials, FAQs, integrations, and client promises
- Contact and consultation details
- A referral programme for people who introduce new clients
- SEO metadata, structured data, Google Tag Manager, and Vercel Analytics

## Routes

| Route | Description |
| --- | --- |
| `/` | Main landing page |
| `/about` | Team and agency information |
| `/services` | Services offered by Loop Found |
| `/projects` | Selected portfolio projects |
| `/contact` | Contact details and enquiry form |
| `/referral` | Referral programme information |

## Tech stack

- React 18 and TypeScript
- Vite
- Tailwind CSS
- shadcn/ui and Radix UI
- React Router
- Framer Motion
- TanStack Query
- Vitest and Testing Library
- Vercel Analytics

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/goprocker/loopfoundwebsite.git
cd loopfoundwebsite
npm install
```

### Local development

```bash
npm run dev
```

The development server runs at `http://localhost:8080` by default.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

```text
public/                 Static assets, robots.txt, and sitemap.xml
src/
  assets/               Portfolio images
  components/           Shared page sections and UI components
  hooks/                Reusable React hooks
  lib/                  Shared utilities
  pages/                Route-level page components
  test/                 Test setup and tests
  App.tsx                Providers and application routes
  main.tsx               Application entry point
```

## Deployment

The project is configured for deployment on Vercel. `vercel.json` provides SPA route rewrites, asset caching, and basic security headers.

Build command:

```bash
npm run build
```

Vite writes the production output to `dist/`.

## Current development note

The contact form currently shows a success notification and clears the entered values, but it is not connected to an email service, API, or database. A backend integration is required before enquiries can be delivered or stored.

## Contact

- Website: [loopfound.in](https://www.loopfound.in)
- Email: [team@loopfound.in](mailto:team@loopfound.in), [teamloopfound@gmail.com](mailto:teamloopfound@gmail.com)
- Instagram: [@teamloopfound](https://www.instagram.com/teamloopfound)
