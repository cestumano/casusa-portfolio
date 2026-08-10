import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { ArtworkLightbox } from '@/components/artwork-lightbox';
import { artworks } from '@/data/artworks';
import { siteConfig } from '@/config/site';

export function generateStaticParams() { return artworks.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) return { title: 'Obra não encontrada' };
  const description = artwork.description ?? `${artwork.title}, ${artwork.year}. Obra de Casusa Oliveira.`;
  return {
    title: artwork.title, description, alternates: { canonical: `/obras/${artwork.slug}` },
    openGraph: { title: `${artwork.title} — ${siteConfig.name}`, description, type: 'article', images: [{ url: artwork.image, width: artwork.width, height: artwork.height, alt: artwork.title }] },
  };
}

export default async function ArtworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) notFound();
  const index = artworks.findIndex((item) => item.slug === artwork.slug);
  const previous = artworks[(index - 1 + artworks.length) % artworks.length];
  const next = artworks[(index + 1) % artworks.length];
  const schema = {
    '@context': 'https://schema.org', '@type': 'VisualArtwork', name: artwork.title,
    dateCreated: artwork.productionDate ?? String(artwork.year), artMedium: artwork.technique, artform: 'Técnica mista',
    image: `${siteConfig.url}${artwork.image}`, creator: { '@type': 'Person', name: siteConfig.name },
  };

  return (
    <>
      <a className="skip-link" href="#obra">Pular para a obra</a><SiteHeader />
      <main id="obra" className="artwork-page">
        <div className="section-shell artwork-page-head">
          <p className="eyebrow">Obra · {String(index + 1).padStart(2, '0')}</p>
          <h1>{artwork.title}</h1>
          <p>{artwork.year}</p>
        </div>
        <figure className="artwork-full section-shell">
          <Image src={artwork.image} alt={`${artwork.title}, obra de Casusa Oliveira`} width={artwork.width} height={artwork.height} sizes="100vw" priority />
          <ArtworkLightbox src={artwork.image} title={artwork.title} width={artwork.width} height={artwork.height} />
        </figure>
        <section className="section-shell artwork-details" aria-label="Ficha técnica da obra">
          <div className="artwork-description">
            <p className="eyebrow">Sobre a obra</p>
            <p>{artwork.description ?? 'A obra integra a pesquisa de Casusa Oliveira sobre memória, matéria, escrita e experiência cotidiana.'}</p>
          </div>
          <dl>
            <div><dt>Data de produção</dt><dd>{artwork.productionDate ?? artwork.year}</dd></div>
            <div><dt>Técnica</dt><dd>{artwork.technique}</dd></div>
            {artwork.materials && <div><dt>Materiais</dt><dd>{artwork.materials}</dd></div>}
            {artwork.artworkDimensions && <div><dt>Dimensão</dt><dd>{artwork.artworkDimensions}</dd></div>}
            {artwork.totalDimensions && <div><dt>Dimensão total</dt><dd>{artwork.totalDimensions}</dd></div>}
            {artwork.inspiration && <div><dt>Inspiração musical</dt><dd><em>{artwork.inspiration.title}</em> · {artwork.inspiration.artist}</dd></div>}
            {artwork.inspirationText && <div><dt>Inspiração</dt><dd>{artwork.inspirationText}</dd></div>}
            {artwork.frame && <div><dt>Moldura</dt><dd>{artwork.frame}</dd></div>}
            <div><dt>Local</dt><dd>{artwork.location}</dd></div>
            <div><dt>Situação</dt><dd>{artwork.status ?? 'Sob consulta'}</dd></div>
          </dl>
          <a className="button" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Interesse na obra ${artwork.title}`)}`}>Consultar disponibilidade <span>↗</span></a>
        </section>
        <nav className="section-shell artwork-navigation" aria-label="Navegação entre obras">
          <Link href={`/obras/${previous.slug}`}><span>← Anterior</span><strong>{previous.title}</strong></Link>
          <Link href="/obras"><span>Índice</span><strong>Todas as obras</strong></Link>
          <Link href={`/obras/${next.slug}`}><span>Próxima →</span><strong>{next.title}</strong></Link>
        </nav>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
