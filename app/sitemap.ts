import { MetadataRoute } from 'next';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SCROLLSHIELD_RELEASE.officialDomain;

  const routes = [
    '',
    '/features',
    '/how-it-works',
    '/download',
    '/privacy',
    '/accessibility',
    '/data-privacy',
    '/permissions',
    '/terms',
    '/support',
    '/contact',
    '/faq',
    '/troubleshooting',
    '/troubleshooting/accessibility',
    '/troubleshooting/scroll-counting',
    '/troubleshooting/youtube',
    '/troubleshooting/floating-counter',
    '/troubleshooting/widget',
    '/troubleshooting/notifications',
    '/troubleshooting/apk-install',
    '/security',
    '/verify-download',
    '/changelog',
    '/about',
    '/legal',
    '/licenses',
    '/age-and-safety',
    '/guardian',
    '/compatibility',
    '/install',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/download' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/download' || route === '/privacy' ? 0.9 : 0.8,
  }));
}
