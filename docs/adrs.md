# Architectural Decision Records (ADRs)

This document records the significant architectural decisions made in the CatchUp project.

## ADR 001: Adoption of Domain-Driven Design (DDD) and Clean Architecture

### Status
Accepted

### Context
The application needs to be maintainable, scalable, and easy to understand. We need a clear separation between business logic, application orchestration, and infrastructure details.

### Decision
We will follow Domain-Driven Design (DDD) principles combined with a layered Clean Architecture. The project is organized into the following layers:
- **Domain**: Contains Entities and Value Objects that represent the core business logic (e.g., `Article`, `Source`, `Url`, `DateTime`).
- **Application**: Contains Application Services (e.g., `newsStore`) that orchestrate the flow of data and use cases.
- **Infrastructure**: Handles technical details such as API communication (e.g., `NewsApi`, `LogoDevApi`), data mapping (Assemblers), and external integrations.
- **Presentation**: The Vue.js user interface components.

### Consequences
- **Pros**: Strong separation of concerns, easier testing of business logic, and independence from external frameworks in the domain layer.
- **Cons**: Increased initial complexity and boilerplate due to multiple layers and mapping (Assemblers).

---

## ADR 002: Use of Value Objects for Domain Data

### Status
Accepted

### Context
Primitive strings were being used for complex concepts like URLs and Dates, leading to duplicated validation logic and potential for invalid states across the application.

### Decision
Implement specialized **Value Objects** in the shared domain layer (e.g., `Url`, `DateTime`). These objects are:
- **Immutable**: They use `Object.freeze()`.
- **Self-Validating**: They ensure a valid state upon creation or handle invalid states gracefully (e.g., empty URL fallback).
- **Behavior-Rich**: They provide domain-specific methods like `isFuture()`, `toRelative()`, or `equals()`.

### Consequences
- **Pros**: Centralized validation, improved type safety (even in JS), and more expressive domain code.
- **Cons**: Requires wrapping and unwrapping values when interacting with APIs or templates.

---

## ADR 003: Presentation Layer with Vue 3 Composition API and PrimeVue

### Status
Accepted

### Context
We need a modern, reactive, and component-based UI framework with a robust set of UI components to speed up development.

### Decision
Use **Vue 3** with the **Composition API** (specifically `<script setup>`) for better logic reuse and IDE support. Use **PrimeVue** as the primary UI component library for consistency and accessibility.

### Consequences
- **Pros**: High productivity, modern reactive patterns, and a rich set of pre-built UI components (e.g., Popover, Sidebar/Drawer, Avatar).
- **Cons**: Dependency on the PrimeVue ecosystem and Vue-specific patterns.

---

## ADR 004: Standardized Data Mapping via Assemblers

### Status
Accepted

### Context
Data returned from external APIs (NewsAPI, Logo.dev) does not always match our internal Domain model. We want to prevent infrastructure details from leaking into the Domain or Application layers.

### Decision
Implement the **Data Mapper** pattern using **Assembler** classes (e.g., `ArticleAssembler`, `SourceAssembler`). These classes are responsible for converting raw API Resource objects into Domain Entities.

### Consequences
- **Pros**: Decouples the Domain from external API schemas. Changes in the API only require updates in the Infrastructure layer.
- **Cons**: Requires additional classes and mapping logic for each data structure.

---

## ADR 005: Centralized Technical Error Handling via Interceptors

### Status
Accepted

### Context
Technical errors (e.g., 401 Unauthorized, 404 Not Found, Network errors) should be handled consistently across all API calls without duplicating logic in every resource.

### Decision
Use **Axios Interceptors** to centralize response handling. A shared `errorInterceptor` is applied to Axios instances to process successful responses and catch technical errors, which are then reported to the Application layer (e.g., via `newsStore`).

### Consequences
- **Pros**: Consistent error handling, reduced boilerplate in API client classes, and centralized logging/reporting.
- **Cons**: Might be too generic for specific requests that require custom error handling.

---

## ADR 006: Progressive Enhancement for URL Validation

### Status
Accepted

### Context
Modern browsers support `URL.canParse()`, but we need to maintain compatibility and robustness when dealing with invalid or missing URLs from external sources.

### Decision
Use a centralized `Url.isValidUrl` utility that attempts to use `URL.canParse()` when available, falling back to a `new URL()` try-catch block for older environments. The `Url` Value Object uses this utility to safely handle input.

### Consequences
- **Pros**: Leverages modern APIs while remaining safe. Prevents application crashes due to malformed external data.
- **Cons**: Adds a small layer of abstraction over native URL parsing.
