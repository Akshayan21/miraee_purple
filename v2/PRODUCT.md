# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Companies that run business travel, and the general public reading about it. The people who decide and approve are finance and travel managers; employees who travel are the people it serves. (Audience answer from the owner: "the company and the general audience".)

## Product Purpose
Miraee is business travel and expense software. Employees book inside company policy through an assistant; approvers decide; finance sees every trip with its budget and GL code in one dashboard with a full audit log. Success for the marketing site: a visitor signs up (free to sign up and onboard, at any company size) or asks for a spend review.

## Positioning
Business travel and expenses in one trip record: every booking arrives with its budget and GL code, changes are handled when plans change, and the corporate cards a company already uses are kept. Built by Tabhi, the company behind the Mondee travel marketplace.

## Operating Context
V1 of the site (miraee-web) is live as a React + Vite SSG site. V2 (miraee-web/v2) is a redesign of the same content as a calm, scroll-led page with one 3D object, shipped beside V1 at `/v2/`, with a toggle in each site's nav to switch. The route line and plane were tried and removed by the owner.

## Capabilities and Constraints
- Content comes from V1 and must be kept word for word: copy, product screens (policy, flight options, finance dashboard, spend review findings, trip tag, alert phone), FAQs, videos, links, form dialogs.
- Layouts, scroll behaviour and visual treatment of V2 are new.
- Sign-in is Google work accounts; single sign-on is on the roadmap (stated in V1 copy).
- Statistics and figures shown in product views are illustrative data.

## Brand Commitments
Logo and name Miraee; tangerine orange accent (#E55602); plum dark grounds.

## Evidence on Hand
V1 copy, product UI components, looping Pexels videos in `public/video`, icons in `public/img`. No customer logos or testimonials are claimed; do not invent any.

## Product Principles
1. The trip record is the story: every booking carries its budget and GL code in one place.
2. Show the product doing its job before describing it.
3. Immersion never hides copy: all text stays real HTML, reachable and readable without motion.
4. Free and plainly priced: never imply a cost, a customer or a result that V1 does not state.

## Accessibility & Inclusion
Reduced-motion users get a static, fully readable version; every scene has a no-3D and small-screen fallback; keyboard and screen-reader order follow the content.
