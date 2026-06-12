# UI/UX Inspiration for Cellar Notes

Research-only recommendations for Cellar Notes v1. This document summarizes UI/UX patterns from wine, beer, coffee, spirits, food journaling, restaurant, cocktail, and general memory-journal products/forums, with a bias toward what is realistic for a one-month v1.

## Product context

Cellar Notes is a personal wine memory journal: log bottles, upload a label/bottle photo, rate from 1-100, record wine metadata and the memory around the bottle, browse cards, view detail pages, edit/delete, search/filter, and keep the app mobile-friendly. The intended feel is personal, warm, premium, and more like a wine scrapbook than a spreadsheet.

## Research sources reviewed

- Vivino: label scanning, personal wine journal, ratings, tasting notes, food pairings, cellar organization, premium discovery. <https://www.vivino.com/en/wine-news/the-complete-guide-to-the-vivino-experience>
- Delectable: photo label capture, ratings, tasting notes, people/location tagging, expert/community discovery. <https://apps.apple.com/us/app/delectable-scan-rate-wine/id512106648>
- CellarTracker: 100-point scoring norms, tasting notes, cellar filtering, vintage comparison, deep wine database patterns. <https://support.cellartracker.com/article/83-how-to-sort-and-filter-your-wine-cellar>
- Untappd: check-in flow, photo, tasting notes, ratings, serving style, friends, location, badges. <https://help.untappd.com/hc/en-us/articles/360034404451-How-to-Check-In-a-Beer>
- Day One: memory-journal patterns, rich media entries, location/weather metadata, timeline, On This Day. <https://dayoneapp.com/features/>
- Rivo: private-by-default food/drink memory logging with photo, rating, note, location, and map. <https://apps.apple.com/us/app/rivo-eat-drink-remember/id6759478462>
- Treatly: joyful photo-first treat logging, sticker/calendar views, rating, notes, order-again sentiment, share cards. <https://www.treatly.app/>
- Memolli: private food/drink notes, photos, ratings, detailed tasting notes, organization into lists. <https://www.memolli.com/>
- Savor: dish-specific tracking, quick photo capture, personal database, 10-point dish ratings, tags/lists. <https://www.savortheapp.com/>
- Flavor Notes: coffee tasting via visual flavor wheel, guided tasting, flavor patterns, searchable archive. <https://flavornotes.app/>
- Distiller: spirits rating with tasting notes, flavor tags, location, price, bottle image, flavor-profile detail pages. <https://distiller.com/articles/everything-you-need-to-know-about-the-distiller-app>
- Mixel: cocktail recipes organized around ingredients, search, filters, and what the user can make now. <https://www.mixelcocktails.com/>
- Reddit/user behavior threads reviewed for qualitative signals: users often treat drink apps as diaries, value search through their own notes, dislike unreliable crowd scores, and can find database-heavy tools powerful but intimidating.

## 1. Ten useful UI/UX patterns

### 1. Photo-first capture with progressive detail

Many food and drink apps start with the camera because the photo is the memory anchor. Vivino and Delectable are famous for label photos; Untappd, Rivo, Treatly, Savor, and MunchMap all frame logging around snapping the drink/meal first.

**Pattern for Cellar Notes:** make the first action on mobile feel like `Add wine -> add photo -> add the minimum memory`. After the photo, show a short form with the essential fields first, then optional sections.

**Why it matters:** if logging feels like data entry, it will not happen at dinner. The label/bottle photo makes an entry feel complete even when the user only has time for rating, location, and a one-line note.

### 2. One-screen quick log plus optional sections

Untappd's check-in model is useful because it supports quick capture while still allowing photo, notes, rating, serving style, friends, venue, and flavor details. Distiller does the same for spirits with rating, tasting notes, flavor tags, location, price, and image.

**Pattern for Cellar Notes:** v1 should have a short required section and collapsible optional sections:

- Required or near-required: photo, wine name, rating, date.
- Useful optional metadata: winery, vintage, grape, region/country, price.
- Memory metadata: location, people, occasion, food pairing, notes.

**Why it matters:** it preserves premium detail without making the first save intimidating.

### 3. Memory-first language, not review-platform language

Rivo explicitly positions itself as a memory app rather than a review app. Day One is about reliving memories, not optimizing recommendations. This aligns closely with Cellar Notes' scrapbook goal.

**Pattern for Cellar Notes:** use labels like `Memory`, `Story`, `Where we opened it`, `Who was there`, and `Would drink again?` rather than only `Review`, `Venue`, or `Score`.

**Why it matters:** a wine can be personally meaningful even when it is not technically excellent. The interface should make room for emotion and context.

### 4. Rating plus sentiment, not rating alone

Wine apps commonly use numeric ratings, and Cellar Notes already specifies 1-100. Food apps often add a simpler sentiment dimension: Treatly has an order-again choice, and Savor uses dish-specific numeric ratings. A single number can be too clinical for a memory app.

**Pattern for Cellar Notes:** keep the 1-100 score, but pair it with a lightweight sentiment prompt such as:

- `Would buy again`
- `Special occasion only`
- `Glad I tried it`
- `Not for me`

**Why it matters:** sentiment helps future browsing. A 91-point wine the user would not rebuy at the price tells a different story than an 88-point weeknight favorite.

### 5. Cards that privilege image, identity, score, and memory cue

Photo-led food apps often use cards as a visual archive. For Cellar Notes, the card should not try to show every field. It should help the user recognize the bottle and recall the moment.

**Pattern for Cellar Notes cards:**

- Large label/bottle photo.
- Wine name and vintage.
- Winery or region as secondary text.
- Rating badge.
- Date and location.
- One memory cue: people, occasion, or a short note excerpt.

**Why it matters:** the browse page should feel like flipping through a personal wine album, not scanning a database grid.

### 6. Detail pages as scrapbook pages

Distiller and Vivino detail pages emphasize bottle identity, score, flavor, reviews, and commercial info. Day One and Rivo are better inspiration for Cellar Notes because detail pages should preserve context and memory.

**Pattern for Cellar Notes detail pages:** organize the page as:

1. Hero photo and wine identity.
2. Rating and `would drink again` sentiment.
3. Memory block: occasion, people, place, date.
4. Tasting notes and food pairing.
5. Wine facts: vintage, grape, region, country, price.
6. Edit/delete actions tucked away but reachable.

**Why it matters:** this hierarchy puts the memory before the spreadsheet fields while still preserving useful wine information.

### 7. Search should include memory text, not just wine fields

CellarTracker and forum comments show that serious wine users value searching tasting notes. For Cellar Notes, search should work across wine metadata and memory metadata.

**Pattern for Cellar Notes:** one search box should match:

- Winery and wine name.
- Vintage, grape, region, country.
- Location, people, occasion.
- Food pairing and notes.

**Why it matters:** later, the user may remember `that Barolo with pasta at Emma's` more readily than the exact producer.

### 8. Simple filter chips beat complex database controls in v1

CellarTracker's multi-select filtering is powerful, but a one-month v1 should avoid a dense cellar-management interface. Food apps like Savor and Treatly lean on tags, lists, locations, and simple categories.

**Pattern for Cellar Notes:** add visible filter chips for the most common recall tasks:

- Rating: `90+`, `80-89`, `<80`.
- Color/type or grape if available.
- Country/region.
- Vintage decade or exact vintage.
- Occasion or location.
- Price range.

**Why it matters:** filter chips feel approachable on mobile and support fast browsing without building a power-user query builder.

### 9. Taste vocabulary helpers without requiring a flavor wheel

Coffee and spirits apps often use flavor wheels, flavor tags, radar charts, or guided tasting. Flavor Notes is especially useful conceptually: it helps users articulate taste by tapping through categories. For v1, a full wheel is probably too much.

**Pattern for Cellar Notes:** include optional tasting-note prompt chips inside the notes area, such as:

- Fruit: cherry, blackberry, citrus, apple.
- Earth/spice: tobacco, leather, pepper, vanilla.
- Structure: acidic, tannic, smooth, full-bodied.
- Finish: short, long, fresh, oaky.

**Why it matters:** it makes tasting notes easier for normal people without making the app feel like a sommelier exam.

### 10. Personal archive views create premium feeling cheaply

Day One's timeline and On This Day, Treatly's calendar/sticker views, Rivo's map, and CellarTracker's year-in-review style all show that archive views make logged memories feel valuable over time.

**Pattern for Cellar Notes:** for v1, prioritize a beautiful card grid/list and a few tasteful empty states. For near-future, add calendar, map, and yearly recap views.

**Why it matters:** the product becomes more rewarding as the user logs more bottles, without requiring social features or AI.

## 2. Five things Cellar Notes should copy conceptually

1. **Vivino/Delectable's camera-first confidence, without OCR in v1.** Start with a label photo because it feels natural for wine, but do not promise identification until later.
2. **Untappd's check-in simplicity, without badges or feed pressure.** A wine entry should be fast enough to complete at a table.
3. **Day One's memory archive tone.** Treat each wine as a dated personal memory with context, not just a review object.
4. **Savor/Rivo's private personal database framing.** The app should help the user answer, `What did I drink, where, with whom, and would I want it again?`
5. **Flavor Notes/Distiller's guided vocabulary.** Use optional flavor tags and note prompts to help users write better notes without forcing expert structure.

## 3. Five things to avoid

1. **Avoid building a social network in v1.** Friends, likes, comments, public profiles, and feeds are already outside the v1 spec and would dilute the personal journal positioning.
2. **Avoid marketplace/commercial pressure.** Vivino-style buying, merchant links, price shopping, and discovery ads would make Cellar Notes feel less personal.
3. **Avoid a complex wine database workflow.** CellarTracker-style depth is powerful but can feel intimidating. v1 should not require exact producer matching, duplicate resolution, or vintage database lookup.
4. **Avoid gamification that changes logging behavior.** Badges, streaks, leaderboards, and public counts can make the product feel performative rather than intimate.
5. **Avoid over-formal tasting forms.** A full professional tasting grid, mandatory flavor wheel, or dozens of fields will slow down real dinner-table use.

## 4. Recommended v1 design changes

These are realistic within a one-month v1 and do not require new dependencies beyond the planned stack.

### A. Make `Add wine` a mobile-first guided flow

Recommended field order:

1. Photo upload.
2. Wine identity: wine name, winery, vintage.
3. Rating: 1-100, shown as a premium score badge.
4. Memory: date, location, people, occasion.
5. Taste: notes, food pairing, grape, region, country.
6. Value: price and optional `would drink again` sentiment.

Keep everything on one page for implementation simplicity, but use visual sectioning and optional/collapsible groups.

### B. Add a `memory cue` to cards

Cards should show one human detail in addition to wine facts. Good defaults:

- If `occasion` exists, show it.
- Else if `people` exists, show it.
- Else if `location` exists, show it.
- Else show a short note excerpt.

This small rule will make the browse page feel personal immediately.

### C. Use a premium but warm visual system

Suggested direction:

- Cream/parchment background.
- Deep burgundy, oxblood, plum, or espresso accents.
- Soft shadows and rounded cards.
- Serif display type for headings if already available via system fonts; otherwise use tasteful system typography.
- Photo cards with subtle borders, not harsh grids.
- Empty states that invite logging the first bottle rather than explaining database features.

### D. Keep rating prominent but not dominant

Use a small badge or capsule for the 1-100 score. Avoid making every page look like a leaderboard. Pair the score with contextual details like `with dinner`, `anniversary`, or `would buy again`.

### E. Build search/filter around recall

For v1, implement a single search input plus simple filters. Prioritize matching the user's likely memory fragments:

- `pinot`, `italy`, `2018`, `mom`, `birthday`, `pasta`, `paris`, `under 30`, `90+`.

If advanced filtering must be reduced, keep search broad and chips minimal.

## 5. Future ideas for future.md

These should remain out of v1, but they fit the product direction.

- **On This Day / One Year Ago:** resurface bottles opened on this date in prior years.
- **Wine memory map:** browse entries by where they were opened or purchased.
- **Calendar scrapbook:** monthly view with label-photo thumbnails on days with entries.
- **Shareable memory card:** export a single beautiful card image for one wine without building a social network.
- **Would drink again shelf:** a lightweight favorites/rebuy list based on sentiment, not just score.
- **Guided tasting prompts:** optional step-by-step prompts for aroma, palate, finish, structure, and mood.
- **Flavor tag insights:** personal patterns like most-used tasting notes, favorite grapes, favorite regions, or best value bottles.
- **Dinner party / trip collections:** group bottles by event, trip, holiday, or tasting night.
- **Private friend tasting session:** collaborative notes for a specific bottle/event, separate from a public feed.
- **OCR/label recognition:** add only after manual logging feels excellent.
- **AI note cleanup:** turn rough personal notes into polished private tasting notes while preserving the original.
- **Printable journal pages:** export a beautiful PDF scrapbook for selected bottles or a year in review.


## 6. Visual references and screenshot policy

I did not save third-party screenshots or app-store images directly into this repository. Most useful screenshots from wine, food, cocktail, coffee, and journaling products are copyrighted marketing or app-store assets, so copying the image files into the repo could create licensing ambiguity.

Instead, use these source pages as a lightweight visual reference board when designing Cellar Notes:

| Product/source | What to look at visually | Link |
| --- | --- | --- |
| Vivino | Label-photo-first wine identity, rating prominence, bottle/detail hierarchy, wine discovery surfaces | <https://www.vivino.com/en/wine-news/the-complete-guide-to-the-vivino-experience> |
| Delectable | Label scan entry point, simple rating/tasting-note capture, bottle photo as the core memory object | <https://apps.apple.com/us/app/delectable-scan-rate-wine/id512106648> |
| Untappd | Check-in composition, rating control, photo attachment, venue/friends fields, social mechanics to avoid in v1 | <https://help.untappd.com/hc/en-us/articles/360034404451-How-to-Check-In-a-Beer> |
| Day One | Journal timeline, rich media entry layout, memory-first hierarchy, premium private archive feel | <https://dayoneapp.com/features/> |
| Treatly | Playful photo-first food cards, calendar/sticker archive ideas, lightweight sentiment prompts | <https://www.treatly.app/> |
| Savor | Dish/photo cards, personal database framing, fast rating and tagging patterns | <https://www.savortheapp.com/> |
| Flavor Notes | Guided flavor vocabulary, visual tasting helpers, searchable tasting archive | <https://flavornotes.app/> |
| Distiller | Spirits detail-page structure, tasting-note sections, flavor tags, rating and price placement | <https://distiller.com/articles/everything-you-need-to-know-about-the-distiller-app> |
| Mixel | Search/filter patterns around ingredients and `what can I make now` style filtering | <https://www.mixelcocktails.com/> |
| CellarTracker | Dense cellar-management filtering to learn from but simplify heavily for v1 | <https://support.cellartracker.com/article/83-how-to-sort-and-filter-your-wine-cellar> |

If actual image files are needed later, the safest approach is to create a private design mood board outside the code repo, capture original Cellar Notes screenshots once the UI exists, or only commit images that are self-created, licensed, or explicitly permitted for reuse.

## Bottom line

For v1, Cellar Notes should feel like a premium private scrapbook with enough wine structure to be useful. The best immediate product bet is not social discovery, AI, or a massive wine database. It is a fast photo-first logging flow, warm card-based browsing, memory-centered detail pages, and search that helps the user find a bottle by the story around it.
