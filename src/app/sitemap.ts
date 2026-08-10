import { MetadataRoute } from 'next';
import { artworks } from '@/data/artworks';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/obras`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/politica-de-privacidade`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/imprensa`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/en`, changeFrequency: 'monthly', priority: 0.7 },
    ...artworks.map((artwork) => ({
      url: `${baseUrl}/obras/${artwork.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
