import type { Metadata } from 'next';
import { WorksGallery } from '@/components/works-gallery';
import { SiteHeader } from '@/components/site-header';
import { artworks } from '@/data/artworks';

export const metadata: Metadata = { title: 'Obras', description: 'Conheça as obras selecionadas de Casusa Oliveira.', alternates: { canonical: '/obras' } };

export default function WorksPage() {
  return <><SiteHeader /><main className="section-shell works-index"><div className="index-heading"><p className="eyebrow">Arquivo visual · {artworks.length} obras</p><h1>Todas as <em>obras</em></h1><p>Pintura, colagem, escrita e materiais recuperados organizados em um percurso visual.</p></div><WorksGallery artworks={artworks} /></main></>;
}
