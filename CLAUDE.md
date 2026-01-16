# GrowthRings

Client proposal site for Josh Krueger - luxury home builder in Flathead Valley, MT.

## Overview

Interactive proposal/discovery site (similar to WLC proposal) where client can:
- Review project scope
- Answer discovery questions
- Leave feedback on each section
- Submit consolidated feedback

**Staging URL**: growthrings.nevinstech.com (when deployed)
**Password**: growthrings2025 (set via SITE_PASSWORD env var)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Auth**: Simple password protection via middleware
- **Hosting**: TBD (likely Netlify)

## Commands

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run start   # Start production server
```

## Project Structure

```
src/
├── app/
│   ├── (auth)/login/       # Password-protected login
│   ├── (main)/             # Main content (requires auth)
│   │   ├── page.tsx        # Home/overview
│   │   ├── discovery/      # Business discovery questions
│   │   ├── services/       # What we're building
│   │   ├── process/        # How we work together
│   │   └── feedback/       # Consolidated feedback
│   └── api/auth/           # Auth endpoint
├── components/
│   ├── Header.tsx          # Navigation
│   ├── FadeIn.tsx          # Scroll animations
│   └── CommentSection.tsx  # Feedback on each page
└── lib/
    └── comments.ts         # LocalStorage feedback management
```

## TODO - Next Session

### High Priority
- [ ] Deploy to growthrings.nevinstech.com
- [ ] Add .env.example with SITE_PASSWORD
- [ ] Connect feedback submission to email/webhook
- [ ] Add Josh's actual project photos (when provided)

### Content Updates Needed
- [ ] Update discovery questions based on Josh's answers
- [ ] Add specific pricing/timeline info when confirmed
- [ ] Customize services based on final scope

### Polish
- [ ] Add page transitions
- [ ] Add "Back to top" button
- [ ] Mobile testing
- [ ] Lighthouse optimization

### Future
- [ ] Export feedback to PDF
- [ ] Admin view of submitted feedback
- [ ] Email notification on feedback submit

## Related

- **Obsidian notes**: `1-Projects/Josh/` in InventBiglyObsidian
- **NEXUS entity**: `entities/projects/growthrings.md`
- **Similar project**: `~/projects/wlc-proposal`

## Client Info

- **Client**: Josh Krueger (GrowthRings)
- **Business**: Spec homes + custom home construction
- **Location**: Flathead Valley, Montana
- **30 years construction experience, 10 as GC**
- **Key differentiators**: Personal relationships, hands-on, exceptional quality
