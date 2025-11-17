# React Metrics Dashboard

<img width="697" height="383.5" alt="Screenshot_2025-11-16" src="https://github.com/user-attachments/assets/ba17221a-b5c5-411b-9061-601b85347678" />


A simple, modular dashboard UI built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
This project is designed as a portfolio piece to showcase modern React layout patterns, component structure, and a clear roadmap for integrating real metrics.

---

## Live Demo

🚀 **Deployed on Vercel:**  
https://react-metrics-dashboard.vercel.app/

---

## Overview

This version (v1.0.0) focuses on:

- A **clean, responsive layout** with sidebar + topbar + main content area
- A **feature-based folder structure** suitable for scaling
- **Placeholder metric cards** ready to be wired up to real data sources

Future versions will progressively introduce live metrics, charts, and richer interactions, mirroring how a real-world dashboard evolves over time.

---

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS (v4)**

---

## Current Features (v1.0.0)

- **AppShell Layout**
  - Wraps the entire app in a reusable shell.
  - Provides a consistent frame: Sidebar → Topbar → Main content.

- **Sidebar**
  - Static navigation entries for now:
    - Overview
    - GitHub Stats
    - System Health
    - Activity Feed
  - Dark-themed and aligned with the overall UI.

- **Topbar**
  - Displays the current view context (e.g., “Dashboard Overview”).
  - Includes a simple version label (v1.0.0).

- **DashboardPage**
  - Responsive grid of placeholder cards for:
    - GitHub Stars
    - Repo Count
    - Follower Count
    - Recent Activity
  - Cards are intentionally minimal to keep the focus on layout and future data integration.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/react-metrics-dashboard.git
cd react-metrics-dashboard

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open the printed URL (typically `http://localhost:5173`) in your browser.

---

## Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build locally

---

## Project Structure

```text
src/
  components/
    layout/
      AppShell.tsx   # Overall layout frame (sidebar + topbar + main)
      Sidebar.tsx    # Left-side navigation
      Topbar.tsx     # Top header bar
  features/
    metrics/
      DashboardPage.tsx  # Main dashboard with placeholder metric cards
  App.tsx
  main.tsx
  index.css          # Tailwind v4 entrypoint + global styles
```

The structure is intentionally simple but feature-oriented, making it easy to extend with new metric views, routes, or pages.

---

## Planned Improvements

These are intentional “next steps” for future versions:

1. **GitHub Metrics Integration**
   - Use the GitHub REST API to display:
     - Total public repos
     - Total stars across selected repos
     - Follower count
   - Add loading and error states per card.

2. **System Health & Uptime Cards**
   - Mock or connect to a simple API that returns system status, uptime, or latency.
   - Display colored status indicators (e.g., healthy / degraded / down).

3. **Activity Feed**
   - Show a basic activity list (commits, releases, or mock events).
   - Support “last N items” with timestamps.

4. **Visual Enhancements**
   - Add icons for navigation items.
   - Use subtle hover/active states, transitions, and skeleton loaders.
   - Add simple charts (e.g., using a chart library) for key metrics.

5. **Routing / View Switching**
   - Introduce lightweight routing or tab-style navigation between different metric views.
   - Keep the AppShell layout consistent across views.

6. **Testing**
   - Add unit tests for key components (AppShell, Sidebar, Topbar, DashboardPage).
   - Validate that layout renders correctly and key content is present.

---

## Why This Project Exists

This dashboard is designed to demonstrate:

- Comfort with **React + TypeScript** for real-world UI structure
- Use of **Tailwind CSS** for fast, consistent styling
- A **feature-first folder structure** that scales beyond a toy app
- Awareness of **progressive enhancement** and future work (roadmap)
- Integration-readiness for external APIs (GitHub, system health, etc.)

It’s not meant to be “finished” in a single version.  
Instead, it’s structured as a foundation that can grow in clear, well-defined steps—just like a production system.
 README-dashboard.md…]()


A simple, modular dashboard UI built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
This project is designed as a portfolio piece to showcase modern React layout patterns, component structure, and a clear roadmap for integrating real metrics.

---

## Live Demo

🚀 **Deployed on Vercel:**  
https://react-metrics-dashboard.vercel.app/

---

## Overview

This version (v1.0.0) focuses on:

- A **clean, responsive layout** with sidebar + topbar + main content area
- A **feature-based folder structure** suitable for scaling
- **Placeholder metric cards** ready to be wired up to real data sources

Future versions will progressively introduce live metrics, charts, and richer interactions, mirroring how a real-world dashboard evolves over time.

---

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS (v4)**

---

## Current Features (v1.0.0)

- **AppShell Layout**
  - Wraps the entire app in a reusable shell.
  - Provides a consistent frame: Sidebar → Topbar → Main content.

- **Sidebar**
  - Static navigation entries for now:
    - Overview
    - GitHub Stats
    - System Health
    - Activity Feed
  - Dark-themed and aligned with the overall UI.

- **Topbar**
  - Displays the current view context (e.g., “Dashboard Overview”).
  - Includes a simple version label (v1.0.0).

- **DashboardPage**
  - Responsive grid of placeholder cards for:
    - GitHub Stars
    - Repo Count
    - Follower Count
    - Recent Activity
  - Cards are intentionally minimal to keep the focus on layout and future data integration.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/react-metrics-dashboard.git
cd react-metrics-dashboard

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open the printed URL (typically `http://localhost:5173`) in your browser.

---

## Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build locally

---

## Project Structure

```text
src/
  components/
    layout/
      AppShell.tsx   # Overall layout frame (sidebar + topbar + main)
      Sidebar.tsx    # Left-side navigation
      Topbar.tsx     # Top header bar
  features/
    metrics/
      DashboardPage.tsx  # Main dashboard with placeholder metric cards
  App.tsx
  main.tsx
  index.css          # Tailwind v4 entrypoint + global styles
```

The structure is intentionally simple but feature-oriented, making it easy to extend with new metric views, routes, or pages.

---

## Planned Improvements

These are intentional “next steps” for future versions:

1. **GitHub Metrics Integration**
   - Use the GitHub REST API to display:
     - Total public repos
     - Total stars across selected repos
     - Follower count
   - Add loading and error states per card.

2. **System Health & Uptime Cards**
   - Mock or connect to a simple API that returns system status, uptime, or latency.
   - Display colored status indicators (e.g., healthy / degraded / down).

3. **Activity Feed**
   - Show a basic activity list (commits, releases, or mock events).
   - Support “last N items” with timestamps.

4. **Visual Enhancements**
   - Add icons for navigation items.
   - Use subtle hover/active states, transitions, and skeleton loaders.
   - Add simple charts (e.g., using a chart library) for key metrics.

5. **Routing / View Switching**
   - Introduce lightweight routing or tab-style navigation between different metric views.
   - Keep the AppShell layout consistent across views.

6. **Testing**
   - Add unit tests for key components (AppShell, Sidebar, Topbar, DashboardPage).
   - Validate that layout renders correctly and key content is present.

---

## Why This Project Exists

This dashboard is designed to demonstrate:

- Comfort with **React + TypeScript** for real-world UI structure
- Use of **Tailwind CSS** for fast, consistent styling
- A **feature-first folder structure** that scales beyond a toy app
- Awareness of **progressive enhancement** and future work (roadmap)
- Integration-readiness for external APIs (GitHub, system health, etc.)

It’s not meant to be “finished” in a single version.  
Instead, it’s structured as a foundation that can grow in clear, well-defined steps—just like a production system.
)

A simple, modular dashboard UI built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
This project is designed as a portfolio piece to showcase modern React layout patterns, component structure, and a clear roadmap for integrating real metrics.

---

## Live Demo

🚀 **Deployed on Vercel:**  
https://react-metrics-dashboard.vercel.app/

---

## Overview

This version (v1.0.0) focuses on:

- A **clean, responsive layout** with sidebar + topbar + main content area
- A **feature-based folder structure** suitable for scaling
- **Placeholder metric cards** ready to be wired up to real data sources

Future versions will progressively introduce live metrics, charts, and richer interactions, mirroring how a real-world dashboard evolves over time.

---

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS (v4)**

---

## Current Features (v1.0.0)

- **AppShell Layout**

  - Wraps the entire app in a reusable shell.
  - Provides a consistent frame: Sidebar → Topbar → Main content.

- **Sidebar**

  - Static navigation entries for now:
    - Overview
    - GitHub Stats
    - System Health
    - Activity Feed
  - Dark-themed and aligned with the overall UI.

- **Topbar**

  - Displays the current view context (e.g., “Dashboard Overview”).
  - Includes a simple version label (v1.0.0).

- **DashboardPage**
  - Responsive grid of placeholder cards for:
    - GitHub Stars
    - Repo Count
    - Follower Count
    - Recent Activity
  - Cards are intentionally minimal to keep the focus on layout and future data integration.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/react-metrics-dashboard.git
cd react-metrics-dashboard

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open the printed URL (typically `http://localhost:5173`) in your browser.

---

## Scripts

- `npm run dev` – Start the Vite dev server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build locally

---

## Project Structure

```text
src/
  components/
    layout/
      AppShell.tsx   # Overall layout frame (sidebar + topbar + main)
      Sidebar.tsx    # Left-side navigation
      Topbar.tsx     # Top header bar
  features/
    metrics/
      DashboardPage.tsx  # Main dashboard with placeholder metric cards
  App.tsx
  main.tsx
  index.css          # Tailwind v4 entrypoint + global styles
```

The structure is intentionally simple but feature-oriented, making it easy to extend with new metric views, routes, or pages.

---

## Planned Improvements

These are intentional “next steps” for future versions:

1. **GitHub Metrics Integration**

   - Use the GitHub REST API to display:
     - Total public repos
     - Total stars across selected repos
     - Follower count
   - Add loading and error states per card.

2. **System Health & Uptime Cards**

   - Mock or connect to a simple API that returns system status, uptime, or latency.
   - Display colored status indicators (e.g., healthy / degraded / down).

3. **Activity Feed**

   - Show a basic activity list (commits, releases, or mock events).
   - Support “last N items” with timestamps.

4. **Visual Enhancements**

   - Add icons for navigation items.
   - Use subtle hover/active states, transitions, and skeleton loaders.
   - Add simple charts (e.g., using a chart library) for key metrics.

5. **Routing / View Switching**

   - Introduce lightweight routing or tab-style navigation between different metric views.
   - Keep the AppShell layout consistent across views.

6. **Testing**
   - Add unit tests for key components (AppShell, Sidebar, Topbar, DashboardPage).
   - Validate that layout renders correctly and key content is present.

---

## Why This Project Exists

This dashboard is designed to demonstrate:

- Comfort with **React + TypeScript** for real-world UI structure
- Use of **Tailwind CSS** for fast, consistent styling
- A **feature-first folder structure** that scales beyond a toy app
- Awareness of **progressive enhancement** and future work (roadmap)
- Integration-readiness for external APIs (GitHub, system health, etc.)

It’s not meant to be “finished” in a single version.  
Instead, it’s structured as a foundation that can grow in clear, well-defined steps—just like a production system.
