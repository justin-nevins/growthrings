# Continue Prompt for Next Session

Copy and paste this to resume:

---

## Context

Working on GrowthRings project - a proposal site for client Josh Krueger (home builder in Flathead Valley, MT).

**What's done:**
- Next.js site scaffolded with password protection
- Pages: home, discovery, services, process, feedback
- Deployed to Netlify: https://growthrings-proposal.netlify.app
- GitHub repo: https://github.com/Cato-Pine/growthrings
- Password: growthrings2025

**What's needed:**
1. Add DNS record for growthrings.nevinstech.com (CNAME → growthrings-proposal.netlify.app)
2. Connect feedback form submission to email/webhook
3. Add Netlify domain alias for the subdomain

## Quick Start

Run `/hello` and select **DigitalOcean** MCP, then:

```
/do add CNAME record: growthrings.nevinstech.com → growthrings-proposal.netlify.app
```

Then in Netlify dashboard, add `growthrings.nevinstech.com` as a domain alias.

## Files

- Project: `~/projects/growthrings/`
- NEXUS entity: `~/projects/nexus/entities/projects/growthrings.md`
- Obsidian notes: `1-Projects/Josh/` in InventBiglyObsidian
- Discovery doc: `1-Projects/Josh/Josh - Business Goals Discovery.md`

## Related

Similar to wlc-proposal project (`~/projects/wlc-proposal/`)
