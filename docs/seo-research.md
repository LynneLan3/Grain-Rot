# GRAIN ROT SEO research

Research date: 2026-08-11

## Confirmed identity and facts

- **Title:** GRAIN ROT (also styled as Grain Rot)
- **Developer:** Beck & Branch Games
- **Publisher:** Neem
- **Release:** August 7, 2026 on Steam for Windows PC
- **Positioning:** a co-op extraction-horror / builder game set in shifting underground ruins, with fragile wooden vessels, Living Sparks, loot extraction, and persistent Outpost rebuilding.
- **Multiplayer evidence:** the Steam listing supports online co-op; the existing launch materials used by this site state a 1–4 online co-op range. This page does not infer cross-play, local co-op, or a competitive mode.
- **PC requirements:** Steam lists Windows 10 64-bit, 8 GB RAM minimum, DirectX 11, 10 GB storage, and broadband internet. Recommended CPU/GPU values are also listed on Steam.

## Sources

1. [Steam store page](https://store.steampowered.com/app/4450620/GRAIN_ROT/) — identity, developer/publisher, release date, description, tags, online features, price, and PC requirements; checked 2026-08-11.
2. [Steam Community hub](https://steamcommunity.com/app/4450620/) — official post-release community context; checked 2026-08-11.
3. [Neem / Beck & Branch launch coverage](https://gamebiz.jp/news/429671) — secondary confirmation of the August 7, 2026 Steam launch; checked 2026-08-11.

## Page opportunities selected

The existing five-URL experiment is retained because each page answers a distinct, evidence-supported player query and is already internally linked:

- `/grain-rot/game/` — what the game is and its confirmed gameplay loop.
- `/grain-rot/release-date/` — release date, Steam price, and launch status.
- `/grain-rot/platforms/` — confirmed PC platform, console status, and PC requirements.
- `/grain-rot/multiplayer/` — online co-op size and solo/co-op caveats.
- `/` — hub with concise facts and links to the Guides.

## Intentionally omitted

No character roster, named map guide, build guide, quest walkthrough, or exhaustive loot/crafting database is published. The current official listing does not provide enough stable detail for those pages, so adding them would create speculative content.

## Migration decision

The repository already contains a target-specific static Hub + Guide architecture with self-canonicals, an XML sitemap, robots policy, breadcrumbs, and cross-links. The migration keeps those public URLs and applies the reusable architecture contract without introducing a framework rewrite or changing deployment configuration. The public “LaunchWire” template label is removed from the target chrome.
