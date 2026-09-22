# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-09-09

### Added
- **Domain**: Introduced `Url` and `DateTime` Value Objects to encapsulate domain logic, ensure immutability, and centralize validation.
- **Presentation**: Created `SourceSummary` component to display detailed news source information.
- **Infrastructure**: Added `ErrorsInterceptor` to centralize Axios response handling and error reporting.
- **Documentation**: Added `docs/adrs.md` to record key architectural decisions (DDD, Clean Architecture, Value Objects).
- **Documentation**: Created `CHANGELOG.md` to track project evolution.
- **Types**: Added global type augmentation for Vue i18n (`$t`, `$i18n`) in `src/vite-env.d.ts` for better IDE support.

### Changed
- **Domain**: Refactored `Article` and `Source` entities to use `Url` and `DateTime` Value Objects instead of primitive strings.
- **Infrastructure**: Renamed `NewsApi` methods from `fetch` to `get` (e.g., `getSources`) to better reflect data retrieval intent and align with repositories.
- **Infrastructure**: Relocated URL validation logic from `StringValidator` utility to `Url` Value Object.
- **Presentation**: Enhanced `ArticleItem` to trigger a summary popover when interacting with source information.
- **Presentation**: Updated `LanguageSwitcher` to use the Vue 3 Composition API `useI18n` composable.
- **Presentation**: Refactored `Layout` and `SourceList` to use two-way binding (`v-model:visible`) for sidebar management.
- **Documentation**: Updated `README.md` to include information about `.env.development` and `.env.production` environment files, added the missing `VITE_PRIME_UI_LICENSE_KEY` variable, and provided instructions for obtaining API and license keys.
- **Documentation**: Updated `docs/class-diagram.puml` with architectural stereotypes (Entity, ValueObject, Component, etc.) and current relationships.
- **Documentation**: Refactored `docs/user-stories.md` to focus on requirements and business value, and refined the Requirement Traceability Matrix (RTM) to map User Stories to Bounded Contexts and Implementation Elements.
- **Documentation**: Comprehensive update of JSDoc comments across the codebase to align with DDD and OOP best practices.

### Fixed
- **Presentation**: Fixed the sidebar close button in `SourceList` not collapsing the drawer.
- **Validation**: Improved robustness of NewsAPI data handling by allowing missing or invalid URLs and providing placeholder images.
- **IDE**: Resolved "Unresolved variable" warnings in WebStorm for Vue templates using i18n.

## [1.0.0] - 2026-09-09
- Initial release of the CatchUp news application.
- Basic support for browsing news sources and reading articles.
- Multi-language support (English/Spanish).
- Integration with NewsAPI.org and Logo.dev.
