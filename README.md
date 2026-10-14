# Simple countdown page

This is a tiny static site designed for GitHub Pages.

## Files

- `index.html` — page structure
- `styles.css` — styling and layout
- `script.js` — logic for the date-based message

## Behavior

- Shows `NO` before November 4th
- Shows `SOON` on November 4th before 6:00 PM EST
- Shows `YES` after 6:00 PM EST on November 4th

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000

## GitHub Pages

Upload these files to the root of your GitHub Pages repository and enable GitHub Pages.
