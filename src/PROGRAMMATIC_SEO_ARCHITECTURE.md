# Programmatic SEO Architecture - Phase 1

## Overview
This document outlines the foundational Programmatic SEO architecture implemented for the Best Oral Health Guide website. This system is designed to support 100+ highly targeted, semantic, and interlinked pages structured around 7 primary hubs.

## 1. The 7 Semantic Hubs
The architecture is built upon 7 distinct content hubs:
1. **Bad Breath Hub** (`/bad-breath`)
2. **Gum Health Hub** (`/gum-health`)
3. **Tooth Sensitivity Hub** (`/tooth-sensitivity`)
4. **Oral Care Routine Hub** (`/oral-care-routine`)
5. **FAQ Hub** (`/faq`)
6. **Comparisons Hub** (`/comparisons`)
7. **Best Products Hub** (`/best-products`)

## 2. Semantic Hierarchy & URL Patterns
Each hub acts as a top-level directory, with sub-categories (clusters), comparisons, and FAQs nested logically to maximize semantic relevance for search engines.
*   **Hub Landing:** `/{hub-slug}` (e.g., `/bad-breath`)
*   **Cluster Page:** `/{hub-slug}/{cluster-slug}` (e.g., `/bad-breath/causes`)
*   **Comparison Page:** `/{hub-slug}/comparisons/{comparison-slug}` (e.g., `/bad-breath/comparisons/mouthwash-vs-probiotics`)
*   **FAQ Page:** `/{hub-slug}/faq/{faq-slug}` (e.g., `/bad-breath/faq/is-morning-breath-normal`)

## 3. Data Structure
All architecture mapping is localized in JSON data files to allow for rapid expansion without massive hardcoded changes.
*   `src/data/hubs.json`: Defines the 7 main hubs and their relationships.
*   `src/data/clusters.json`: Defines the specific sub-topics/clusters within each hub.

## 4. Component Architecture
Reusable template components ensure consistency, maintainability, and built-in technical SEO best practices (schema, proper heading hierarchies, internal linking).
*   **Breadcrumb.jsx:** Provides consistent site hierarchy navigation.
*   **HubLanding.jsx:** Premium landing page for hubs displaying clustered topics and cross-links.
*   **ClusterPage.jsx:** Detailed content page structured with semantic HTML.
*   **ComparisonPage.jsx:** Table-driven layout for VS queries.
*   **FAQPage.jsx:** Accordion-driven layout optimized for PAA (People Also Ask) queries.

## 5. Implementation Status
In Phase 1, the foundational templates and data structures have been created. 
*   **Routes:** URL patterns are documented and prepared as commented-out code in `App.jsx`.
*   **Navigation:** Dropdowns and footer links are prepared as commented-out blocks in `Header.jsx` and `Footer.jsx`.
*   **Activation:** To activate in Phase 2, simply un-comment the routes in `App.jsx` and the navigation links in the header/footer, and supply the dynamic content arrays to the template components.

## 6. SEO Optimization Principles Implemented
*   **Silo Architecture:** Content is strictly organized by topic to build topical authority.
*   **Internal Linking:** Every template automatically interlinks to related tools, comparisons, and clusters.
*   **Breadcrumbs:** Active on every sub-page to pass link equity up to the hub.
*   **Semantic HTML:** Strict adherence to H1 -> H2 -> H3 nesting.
*   **Mobile-First Design:** Responsive components using Shadcn UI ensure excellent Core Web Vitals.