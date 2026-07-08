# Movie Streaming App

A Netflix-inspired movie and TV show browsing application built with **React**, **TypeScript**, and **Vite**, powered by **The Movie Database (TMDB) API**. Features multi-language support, a responsive Tailwind CSS interface, and persistent favorites.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![TMDB](https://img.shields.io/badge/API-TMDB-01D277?logo=themoviedatabase&logoColor=white)
![CI](https://github.com/Adarshkumar99/movie_streaming/actions/workflows/frontend.yml/badge.svg)

---

## Overview

This project is a movie and TV show discovery platform that consumes the TMDB API to deliver a browsing experience similar to major streaming services. It covers catalog browsing by category, detailed title pages with cast and trailers, search, a persistent favorites list, and full internationalization across three languages.

---

## Features

- **Movie & TV Catalog**
  - Browse trending, popular, and top-rated movies and TV shows
  - Dedicated TV Shows section
  - Genre-based browsing

- **Rich Detail Pages**
  - Full movie/show details including overview, ratings, and release info
  - Cast and crew information via TMDB's `credits` data
  - Embedded trailers via TMDB's `videos` data
  - "Similar titles" recommendations

- **Search**
  - Real-time movie search powered by the TMDB search endpoint

- **Favorites**
  - Add or remove titles from a personal favorites list
  - Favorites persisted in `localStorage` via React Context, so the list survives page reloads

- **Internationalization (i18n)**
  - Full UI translation support for **English**, **Hindi**, and **German** via `i18next` / `react-i18next`
  - TMDB API responses are localized to match the selected language

- **Modern Frontend Tooling**
  - Type-safe codebase with TypeScript
  - Utility-first styling with Tailwind CSS 4
  - Fast dev/build pipeline via Vite
  - Unit testing with Vitest and React Testing Library
  - Automated linting and CI via GitHub Actions

---

## Tech Stack

| Layer            | Technology                                  |
|-------------------|----------------------------------------------|
| Framework         | React 19, TypeScript                          |
| Build Tool        | Vite 7                                        |
| Styling           | Tailwind CSS 4                                |
| Routing           | React Router v7                               |
| HTTP Client       | Axios                                         |
| Data Source       | TMDB (The Movie Database) API                 |
| Internationalization | i18next, react-i18next                    |
| State Management  | React Context API                             |
| Testing           | Vitest, React Testing Library                 |
| Linting           | ESLint                                        |
| CI/CD             | GitHub Actions                                |

---

## Project Structure

```
movie_streaming/
├── src/
│   ├── api/              # TMDB API client and data-fetching functions
│   ├── components/       # Reusable UI components (Header, Footer, HeroSection, MovieRow)
│   ├── context/          # React Context providers (favorites state + localStorage sync)
│   ├── hooks/            # Custom React hooks
│   ├── i18n/              # Translation files (en, hi, de) and i18next configuration
│   ├── pages/              # Route-level pages (Home, MovieDetail, Search, TvShows, Favorites)
│   ├── types/                # Shared TypeScript type definitions
│   ├── App.tsx                # Root component and route definitions
│   └── main.tsx                 # Application entry point
├── public/                        # Static assets
├── .github/workflows/               # CI pipeline configuration
└── vite.config.ts                     # Vite build configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### 1. Clone the repository

```bash
git clone https://github.com/Adarshkumar99/movie_streaming.git
cd movie_streaming
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 4. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`.

---

## Available Scripts

| Command           | Description                              |
|--------------------|-------------------------------------------|
| `npm run dev`      | Starts the Vite development server         |
| `npm run build`    | Builds the app for production               |
| `npm run preview`  | Previews the production build locally        |
| `npm run lint`     | Runs ESLint across the codebase                |

---


---

## License

This project is licensed under the [MIT License](LICENSE).
