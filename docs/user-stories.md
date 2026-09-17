
# User Stories

## Overview
This document contains the user stories and the Requirement Traceability Matrix (RTM) for the CatchUp application.

## Requirement Traceability Matrix

The following matrix maps the User Stories to their Bounded Contexts and Implementation Elements.

| User Story                                            | Bounded Context | Implementation Elements                                                                                                                                                                                              |
|:------------------------------------------------------|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **US001**: Browse News Sources                        | News            | `Source` (Entity), `Url` (Value Object), `newsStore` (Store), `NewsApi` (Resource), `LogoDevApi` (Resource), `SourceAssembler` (Assembler), `SourceList` (Component), `SourceItem` (Component), `Layout` (Component) |
| **US002**: View Articles                              | News            | `Article` (Entity), `Url` (Value Object), `DateTime` (Value Object), `newsStore` (Store), `NewsApi` (Resource), `ArticleAssembler` (Assembler), `ArticleList` (Component), `ArticleItem` (Component)                 |
| **US003**: Engage with Ethical and Inclusive Features | Shared          | `newsStore` (i18n), `LanguageSwitcher` (Component), `FooterContent` (Component)                                                                                                                                      |
| **US004**: Interact with Articles and Sources         | News            | `Article` (Entity), `Source` (Entity), `Url` (Value Object), `newsStore` (Store), `ArticleItem` (Component), `SourceSummary` (Component)                                                                             |

## User Stories for CatchUp

### US001: Browse News Sources
**As a** User, **I want to** browse available news sources, **so that** I can choose a source to access its articles.
- **Given** the User accesses the CatchUp application, **when** the news sources are retrieved from the provider, **then** the User can access the available news sources, including their names and logos, being the first source chosen by default.
- **Given** the User is viewing the available news sources, **when** the User chooses a different source, **then** the chosen source is indicated as active.

### US002: View Articles
**As a** User, **I want to** access articles from a chosen source, **so that** I can read news content with clear authorship and publishing time.
- **Given** the User accesses the CatchUp application, **when** the news sources are retrieved and the first source is chosen, **then** the User can access articles for the first source, including their titles, summaries, author names, and relative publishing time.
- **Given** the User chooses a different source, **when** the articles for that source are retrieved, **then** the User can access articles for the chosen source.
- **Given** an article lacks a featured image, **when** the article list is displayed, **then** a placeholder image is shown to maintain visual consistency.

### US003: Engage with Ethical and Inclusive Features
**As a** User, **I want to** engage with features that promote inclusivity and transparency, **so that** I can interact with the application in my preferred language and understand its data sources.
- **Given** the User is using the CatchUp application, **when** the User chooses a language (English or Spanish), **then** the User experiences the application in the chosen language.
- **Given** the User accesses the CatchUp application, **when** the User seeks attribution information, **then** the User is presented with attributions for NewsAPI.org and Logo.dev.

### US004: Interact with Articles and Sources
**As a** User, **I want to** interact with articles and get more information about their sources, **so that** I can distribute news, read full content, or understand the source's background.
- **Given** the User accesses an article, **when** the User initiates sharing the article, **then** the User can share the article’s title and URL via a sharing mechanism if supported.
- **Given** the User initiates sharing and the sharing mechanism is not supported, **when** the User opts to copy the article’s URL, **then** the article’s URL is copied for sharing.
- **Given** the User completes sharing or copying the article, **when** the action is finalized, **then** the User receives confirmation of the action.
- **Given** the User accesses an article, **when** the User chooses to visit the article’s original source, **then** the User is directed to the article’s original URL.
- **Given** the User is viewing an article, **when** the User requests more information about the source, **then** a summary of the source is provided, including the source's description, category, language, country, and website link.