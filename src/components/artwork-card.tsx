import Image from 'next/image';
import Link from 'next/link';
import type { Artwork } from '@/types';

export function ArtworkCard({ artwork, priority = false }: { artwork: Artwork; priority?: boolean }) {
  return (
    <article className="artwork-card" style={{ '--accent': artwork.accent } as React.CSSProperties}>
      <Link href={`/obras/${artwork.slug}`} aria-label={`Ver obra ${artwork.title}`}>
        <div className="artwork-image-wrap">
          <Image
            src={`/images/thumbnails/${artwork.slug}.png`}
            alt={`${artwork.title}, ${artwork.year ?? 'sem data'}, obra de Casusa Oliveira`}
            width={Math.min(artwork.width, 1100)}
            height={Math.round(Math.min(artwork.width, 1100) * artwork.height / artwork.width)}
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            priority={priority}
          />
          <span className="artwork-view" aria-hidden="true">Ver obra ↗</span>
        </div>
        <div className="artwork-meta">
          <h3>{artwork.title}</h3>
          <p>{artwork.year} <span>·</span> {artwork.technique}</p>
        </div>
      </Link>
    </article>
  );
}
