import { MetadataRoute } from 'next';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${SCROLLSHIELD_RELEASE.officialDomain}/sitemap.xml`,
  };
}
