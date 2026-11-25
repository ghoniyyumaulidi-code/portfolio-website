// Sample content used until the Sanity CMS is connected.
// Once the CMS has entries, the site uses those instead.
import type { CaseStudy, Work } from './types';

const ph = (label: string, ratio = 16 / 10) => ({ placeholder: label, ratio });

export const sampleCases: CaseStudy[] = [
  { slug: 'insurance-purchase-journey', title: 'Insurance purchase journey', company: 'Vida', summary: 'From product discovery to checkout, a simpler journey that raised the conversion rate from 15% to 23%.', role: 'UI/UX Manager', year: '[YEAR]', platform: 'Web, iOS, Android', team: [], cover: ph('Cover 16:10'), metricValue: '15% → 23%', metricLabel: 'Conversion rate', body: [] },
  { slug: 'operations-back-office', title: 'Operations back office', company: 'Vida', summary: 'A rebuilt back office for Operations teams that cut claim review time by 75%.', role: 'UI/UX Manager', year: '[YEAR]', platform: 'Web', team: [], cover: ph('Cover 16:10'), metricValue: '−75%', metricLabel: 'Claim review time', body: [] },
  { slug: 'vida-essential', title: 'Vida Essential', company: 'Vida', summary: 'The first wellness insurance launched through digital marketing, with access to 120+ brands and 300+ clinics.', role: 'UI/UX Manager', year: '[YEAR]', platform: 'Web, App', team: [], cover: ph('Cover 16:10'), body: [] },
  { slug: 'the-clover-and-mbak-vida', title: 'The Clover & Mbak Vida', company: 'Vida', summary: "Brand mascots born from Vida's three-heart logo.", role: 'UI/UX Manager', year: '2022', platform: 'Brand', team: [], cover: ph('Cover 16:10'), body: [] },
  { slug: 'new-vida-app-features', title: 'New Vida app features', company: 'Vida', summary: 'Hospital appointments, Advance Premium payments, AI-powered services and multi-account family insurance.', role: 'UI/UX Manager', year: '[YEAR]', platform: 'iOS, Android', team: [], cover: ph('Cover 16:10'), body: [] },
  { slug: 'b2b-employee-benefits', title: 'B2B employee benefits', company: 'Vida', summary: 'A B2B insurance platform for employee benefits.', role: 'UI/UX Manager', year: '[YEAR]', platform: 'Web', team: [], cover: ph('Cover 16:10'), body: [] },
  { slug: 'tpa-hospital-integration', title: 'TPA & hospital integration', company: 'Vida', summary: 'Insurance systems connected to partner hospitals and TPAs across Indonesia.', role: 'UI/UX Manager', year: '[YEAR]', platform: 'Web', team: [], cover: ph('Cover 16:10'), body: [] },
  { slug: 'ott-video-manager', title: 'OTT video manager system', company: 'Mola', summary: 'A redesigned Video Manager System that cut upload work from 8 to 10 minutes to 3 minutes per video.', role: 'Senior UX Designer', year: '2019', platform: 'Web', team: [], cover: ph('Cover 16:10'), metricValue: '10 → 3 min', metricLabel: 'Per video', body: [] },
];

export const sampleWorks: Work[] = [
  { slug: 'evently', title: 'Evently, Premium Event App', category: 'Apps', client: '[Client]', year: '2024', background: '[The project background in 2 to 3 sentences.]', cover: ph('Cover 4:3', 4 / 3), gallery: [] },
  { slug: 'brand-identity', title: '[Brand identity project]', category: 'Branding', year: '[YEAR]', cover: ph('Cover 4:5', 4 / 5), gallery: [] },
  { slug: 'company-website', title: '[Company website]', category: 'Website', year: '[YEAR]', cover: ph('Cover 3:4', 3 / 4), gallery: [] },
  { slug: 'admin-dashboard', title: '[Admin dashboard]', category: 'Dashboard', year: '[YEAR]', cover: ph('Cover 16:10', 16 / 10), gallery: [] },
  { slug: 'ai-assistant', title: '[AI assistant product]', category: 'AI Product', year: '[YEAR]', cover: ph('Cover 21:9', 21 / 9), gallery: [] },
  { slug: 'mobile-app', title: '[Mobile app]', category: 'Apps', year: '[YEAR]', cover: ph('Cover 1:1', 1), gallery: [] },
  { slug: 'packaging', title: '[Packaging]', category: 'Branding', year: '[YEAR]', cover: ph('Cover 4:5', 4 / 5), gallery: [] },
  { slug: 'landing-page', title: '[Landing page]', category: 'Website', year: '[YEAR]', cover: ph('Cover 4:3', 4 / 3), gallery: [] },
];
