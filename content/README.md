# Content Folder — Lab Website

This folder contains **all tunable content** for the website.
Edit these files to update the site — no need to touch `app.jsx`.

## Folder Structure

```
content/
├── content.js            ← Main data file (loaded by index.html)
├── photos/
│   ├── team/             ← Team member photos (name them anything)
│   ├── glimpse/          ← Gallery/glimpse photos
│   └── hero/             ← Hero section images
└── README.md             ← This file
```

## How to Update

### Text Content
Edit `content.js` — it has clearly labeled sections:
- `HERO` — Hero headline and subtitle
- `ABOUT` — "Our Science" paragraphs
- `RESEARCH` — Research areas, paragraphs, disease focus list
- `TEAM` — Team members, roles, bios, social links
- `PUBLICATIONS` — Papers, categories, news items
- `GLIMPSE` — Gallery items
- `FOOTER` — Contact info, address

### Photos
1. Drop photos into the appropriate `photos/` subfolder
2. Update the filename in `content.js` (e.g., `photo: "content/photos/team/tanmoy.jpg"`)

### Adding a New Team Member
In `content.js`, add a new object to the `team` array:
```js
{
  name: "New Person",
  role: "Position",
  initials: "NP",
  photo: "content/photos/team/new_person.jpg",  // or "" for initials placeholder
  linkedin: "https://linkedin.com/in/...",
  github: "https://github.com/...",
  twitter: "",
  email: "mailto:name@ashoka.edu.in",
  desc: "Short bio description."
}
```

### Adding a New Publication
Add to the relevant category's `papers` array in `content.js`.

### Adding a New Research Area
Add a new object to the `research.areas` array with `title`, `tagline`, and `paragraphs`.
