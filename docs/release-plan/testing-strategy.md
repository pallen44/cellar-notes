# Cellar Notes v1 Testing Strategy

## Goal

Testing is part of v1, not a post-launch nice-to-have. The goal is to give one evening/weekend developer enough automated and manual coverage to ship confidently without building a heavyweight QA process.

## Testing Pyramid for v1

Use a pragmatic testing pyramid:

1. **Static checks and linting: widest layer**
   - TypeScript type checking
   - Linting
   - Formatting checks if configured
   - Build verification
2. **Unit tests: broad, fast layer**
   - Validation helpers
   - Wine entry mapping/normalization helpers
   - Search/filter logic
   - Any pure utility functions for rating, price, and display formatting
3. **Component/front-end tests: focused middle layer**
   - Wine form rendering and validation states
   - Wine card rendering
   - Detail page display behavior for missing optional fields
   - Search input behavior if implemented client-side
4. **Integration tests: narrow middle layer**
   - Data-access functions against mocked Supabase responses or a local test double
   - Create/update/delete happy paths and failure handling
   - Photo upload success/failure handling with mocked storage calls
5. **End-to-end smoke tests: small top layer**
   - Create a wine
   - Upload or attach a photo path through the UI
   - Browse cards
   - Open detail page
   - Edit a wine
   - Search for a wine
   - Delete a test wine

## Recommended Tooling

Final tooling can be adjusted by the developer, but the default recommendation is:

- **TypeScript:** `tsc --noEmit` or framework equivalent
- **Lint:** Next.js/ESLint
- **Unit and component tests:** Vitest with React Testing Library
- **End-to-end tests:** Playwright
- **Mocking:** lightweight mocks for Supabase client/storage interactions

## Minimum Automated Test Coverage for v1

The v1 release should include automated coverage for:

- Rating validation rejects values below 1 and above 100.
- Required create-entry fields are enforced.
- Search/filter matches wine name, winery, grape, region, country, occasion, and notes.
- Wine card renders the primary identifying fields.
- Detail view handles missing optional fields gracefully.
- Create/update/delete data helpers handle success and error results.
- Photo upload helper handles successful upload and upload failure.
- One end-to-end smoke path covers create, browse, detail, edit, search, and delete.

## Manual QA Still Required

Automated tests do not replace realistic product validation. Before release, manually test on a phone or mobile browser with at least 10 realistic wine entries, including:

- A wine with every field filled out
- A wine with only required fields
- A wine with a long note
- A wine with a high rating
- A wine with a low rating
- Multiple grapes/regions/countries for search coverage
- At least one uploaded phone photo
- Edit and delete of a non-important test record

## Definition of Done Addition

A story is not done unless relevant tests or a documented reason for no test are included. For docs-only work, markdown lint/spell checks are enough if configured.

## MVP Boundaries

Do not block v1 on:

- Exact percentage-based coverage goals
- Visual regression testing
- Cross-browser matrix beyond current mobile Safari/Chrome smoke testing
- Accessibility automation beyond basic semantic checks and manual keyboard/touch review
- Full Supabase local environment if lightweight mocks are faster and reliable enough for v1
