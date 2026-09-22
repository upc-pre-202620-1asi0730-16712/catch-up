# Catch Up

Catch Up is a newsreader application that helps users browse news sources and read top headlines, built with a focus on Clean Architecture and Domain-Driven Design (DDD).

## Features

- **Browse News Sources**: Select from a variety of news providers as your active feed.
- **Top Headlines**: View the latest articles from the selected source.
- **Article Summaries**: Read concise summaries and access original content.
- **Source Interaction**: View detailed information about news sources through interactive summaries.
- **Robust Content Handling**: Graceful handling of missing data and invalid URLs, with placeholder support.
- **Multi-language Support**: Seamlessly switch between English (`en`) and Spanish (`es`).
- **Responsive Design**: Optimized for different screen sizes using PrimeFlex.

## Technology Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **UI Components**: PrimeVue + PrimeIcons
- **CSS Utility**: PrimeFlex
- **HTTP Client**: Axios
- **Internationalization**: vue-i18n
- **State Management**: Reactive Stores (based on Composition API)

## Prerequisites

- Node.js (LTS recommended)
- npm

## Quick Start

1.  **Clone and Install**:
    ```bash
    npm install
    ```

2.  **Environment Setup**: Create a `.env.local` file (see [Environment Variables](#environment-variables)).

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev`: starts the development server.
- `npm run build`: creates a production build in `dist/`.
- `npm run preview`: serves the production build locally.

## Environment Variables

This project reads API settings from Vite environment variables (`import.meta.env`).

Vite uses different `.env` files based on the current mode:

- `.env.development`: variables used during development (`npm run dev`).
- `.env.production`: variables used for production builds (`npm run build`).
- `.env.local`: can be used to override variables locally (should not be committed).

### Obtaining API and License Keys

To run the application, you will need to obtain the following keys and add them to your `.env.local` file:

1.  **NewsAPI API Key**:
    - Go to [NewsAPI.org Registration](https://newsapi.org/register).
    - Create an account and log in.
    - Copy your API Key from your dashboard.
    - Set it as `VITE_NEWS_API_KEY` in your `.env.local`.

2.  **Logo.dev Publishable API Key**:
    - Visit [Logo.dev](https://logo.dev).
    - Sign up for an account to get your publishable key.
    - Set it as `VITE_LOGO_PUBLISHABLE_API_KEY` in your `.env.local`.

3.  **Prime UI License Key**:
    - Visit [PrimeUI](https://primeui.dev).
    - Register for a Community or Commercial license.
    - Once obtained, set it as `VITE_PRIME_UI_LICENSE_KEY` in your `.env.local`.

Create a local env file (for example `.env.local`) to provide your keys:

```bash
VITE_NEWS_API_URL=https://newsapi.org/v2
VITE_NEWS_API_KEY=your_news_api_key
VITE_SOURCES_ENDPOINT_PATH=/top-headlines/sources
VITE_TOP_HEADLINES_ENDPOINT_PATH=/top-headlines
VITE_LOGO_API_URL=https://img.logo.dev
VITE_LOGO_PUBLISHABLE_API_KEY=your_logo_dev_publishable_key
VITE_PRIME_UI_LICENSE_KEY=your_prime_ui_license_key
```

Notes:

- Do not commit real API keys.
- Use provider dashboards to rotate keys if they are exposed.

## Project Structure

```text
src/
  news/
    application/      # reactive store and use-case orchestration
    domain/model/     # entities (Article, Source)
    infrastructure/   # API clients and assemblers
    presentation/     # news-related UI components
  shared/
    domain/model/     # shared Value Objects (Url, DateTime, StringValidator)
    infrastructure/   # shared API helpers and interceptors
    presentation/     # shared layout/footer/language components
  locales/            # i18n dictionaries (en, es)
docs/                 # architectural and requirement documentation
```

## Architecture

The codebase follows **Domain-Driven Design (DDD)** principles and **Clean Architecture** to ensure maintainability and separation of concerns.

- **Domain Layer**: Core business logic, Entities (`Article`, `Source`), and Value Objects (`Url`, `DateTime`).
- **Application Layer**: Orchestrates domain logic and manages application state (`newsStore`).
- **Infrastructure Layer**: Handles external communications, API clients (`NewsApi`), and data mapping (Assemblers).
- **Presentation Layer**: Vue.js components and user interactions.

For more details on architectural decisions, see [Architectural Decision Records (ADRs)](docs/adrs.md).

## Internationalization

- **i18n setup**: `src/i18n.js`
- **Dictionaries**: `src/locales/en.json`, `src/locales/es.json`

## Documentation & History

This project maintains comprehensive documentation to bridge the gap between requirements and implementation:

- **ADRs**: [Architectural Decision Records](docs/adrs.md)
- **User Stories**: [Requirements and Traceability Matrix](docs/user-stories.md)
- **Design**: [Class Diagram (PlantUML)](docs/class-diagram.puml)
- **Change Tracking**: [CHANGELOG.md](CHANGELOG.md)

## Attribution

This app uses data and branding services from:

- [NewsAPI.org](https://www.newsapi.org)
- [Logo.dev](https://logo.dev)

## License

MIT
