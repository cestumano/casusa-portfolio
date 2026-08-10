'use client';

import { useMemo, useState } from 'react';
import { ArtworkCard } from '@/components/artwork-card';
import type { Artwork } from '@/types';

const filters = ['Todas', 'Com inspiração musical', 'Horizontal', 'Vertical', 'Quadrada'] as const;

export function WorksGallery({ artworks }: { artworks: Artwork[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Todas');
  const visible = useMemo(() => artworks.filter((artwork) => {
    if (filter === 'Com inspiração musical') return Boolean(artwork.inspiration);
    if (filter === 'Horizontal') return artwork.width / artwork.height > 1.1;
    if (filter === 'Vertical') return artwork.height / artwork.width > 1.1;
    if (filter === 'Quadrada') return Math.abs(artwork.width / artwork.height - 1) <= .1;
    return true;
  }), [artworks, filter]);

  return <>
    <div className="work-filters" aria-label="Filtrar obras">
      {filters.map((item) => <button key={item} type="button" className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
    </div>
    <p className="filter-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'obra' : 'obras'}</p>
    <div className="artwork-grid">{visible.map((artwork, index) => <ArtworkCard key={artwork.id} artwork={artwork} priority={index < 3} />)}</div>
  </>;
}
