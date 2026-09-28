export const SITE = {
  name: 'OnPoint Health Media & Tech',
  shortName: 'OnPoint',
  legalName: 'OnPoint Health Media and Tech, Inc.',
  tagline: 'The revenue infrastructure layer for modern telehealth.',
  description:
    'OnPoint helps cash-pay telehealth operators turn patient demand into recurring revenue: acquisition, conversion, checkout, payment continuity, retention, and lifetime value, run as one system.',
  url: 'https://www.onpointhealthmedia.com',
  email: 'david@onpointhealthmedia.com',
  careersEmail: 'david@onpointhealthmedia.com',
  legalEmail: 'accounts@onpointhealthmedia.com',
  privacyEmail: 'privacy@onpointhealthmedia.com',
  address: { region: 'NJ', country: 'US' },
  linkedin: 'https://www.linkedin.com/company/onpoint-health-media',
  /** One-paragraph entity definition. Reuse verbatim everywhere (footer, about, llms.txt, press releases) so every crawler reads the same definition. */
  boilerplate:
    'OnPoint Health Media & Tech is the revenue infrastructure layer for modern telehealth. OnPoint helps cash-pay telehealth and health-commerce operators turn patient demand into recurring revenue by improving acquisition, conversion, checkout, payment continuity, retention, and lifetime value. The platform combines performance marketing and affiliate distribution, checkout and payment continuity, WowLoop revenue intelligence, and ZYVO member engagement. Operators keep ownership of their customer and payment relationships. Categories include GLP-1 and weight loss, TRT and men’s health, ED, women’s health, hair loss, longevity, metabolic health, and sleep. OnPoint is a marketing and revenue operations company, not a medical provider.',
  sameAs: ['https://www.linkedin.com/company/onpoint-health-media'],
  knowsAbout: [
    'Telehealth revenue operations', 'Payment continuity and failed-payment recovery', 'Subscription retention and rebill', 'Telehealth affiliate marketing', 'GLP-1 patient acquisition', 'Testosterone replacement therapy marketing', 'Erectile dysfunction telehealth offers',
    'Hair loss telehealth marketing', 'Women’s hormone health marketing', 'At-home diagnostics marketing', 'Server-to-server postback tracking',
    'Everflow', 'CPA and revenue share payouts', 'Health advertising compliance', 'Meta advertising for telehealth',
  ],
};

/** Prefix an internal path with the configured base (needed for sub-path previews). */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const NAV = [
  { label: 'Home', path: '/' },
  { label: 'Platform', path: '/platform/' },
  { label: 'For Operators', path: '/brands/' },
  { label: 'For Partners', path: '/partners/' },
  { label: 'Compliance', path: '/compliance/' },
  { label: 'About', path: '/about/' },
  { label: 'Blog', path: '/blog/' },
];
