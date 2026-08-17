# How to Edit Your Website Text (for Josh)

All the words on your website live in the files in this folder. You never need to touch code. Edit a file here, save it, and the site republishes itself in a few minutes.

## Which file is which page

| File | What it controls |
|---|---|
| `home.json` | The homepage (headline, three pillars, quote, service area, bottom banner) |
| `about.json` | The About Josh page |
| `process.json` | The How We Build page (the 5 steps, budget/timeline numbers) |
| `contact.json` | The Contact page |
| `for-realtors.json` | The For Realtors page |
| `projects.json` | Every portfolio project: titles, descriptions, highlights, photo lists |
| `site.json` | Phone number, email, service towns, services list (used on EVERY page) |

## How to make an edit on GitHub

1. Go to your repository on github.com and open the `content` folder.
2. Click the file you want, then click the **pencil icon** (top right of the file view).
3. Change the text **between the quotation marks only**. Example - to change the phone number, in `site.json` change `"(406) 858-0748"` to your new number.
4. Click the green **Commit changes** button, then **Commit changes** again in the popup.
5. Wait about 3 minutes. Refresh your website. Done.

## The three rules

1. **Only change text between "double quotes."** Don't delete quotes, commas, colons, brackets, or the words to the left of the colons.
2. **The phone number lives in TWO fields** in `site.json`: `"phone"` is what people see, `"phoneRaw"` is what their phone dials (digits only, no spaces or dashes). Change both.
3. **If the site doesn't update after 5 minutes, don't panic.** A typo probably broke the update, but the old site stays live - nothing is down. Look at the file again for a missing quote or comma, or call Justin.

## Changing photos

Photos live in the `public/images` folder. The safest swap: upload a new photo, then edit the matching file path in `projects.json` (or the `"image"` field in the page file) to point at your new photo's name. Photo file names must match exactly, including the `.jpeg` ending. If in doubt, send photos to Justin instead.
