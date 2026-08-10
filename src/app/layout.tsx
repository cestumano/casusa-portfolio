import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site';

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f2eee6' };

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} — Artista visual`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  keywords: ['Casusa Oliveira', 'artista visual', 'arte contemporânea', 'Maceió', 'Alagoas', 'arte brasileira', 'técnica mista'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — Artista visual`, description: siteConfig.description,
    type: 'website', url: siteConfig.url, locale: 'pt_BR', siteName: siteConfig.name,
    images: [{ url: '/images/artworks/gambiarra.png', width: 1200, height: 944, alt: 'Gambiarra, obra de Casusa Oliveira' }],
  },
  twitter: { card: 'summary_large_image', title: `${siteConfig.name} — Artista visual`, description: siteConfig.description, images: ['/images/artworks/gambiarra.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
