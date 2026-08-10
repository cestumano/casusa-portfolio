export interface Artwork {
  id: string;
  slug: string;
  title: string;
  year?: number;
  technique?: string;
  materials?: string;
  location?: string;
  artworkDimensions?: string;
  totalDimensions?: string;
  inspiration?: {
    title?: string;
    artist?: string;
  };
  description?: string;
  image: string;
  width: number;
  height: number;
  accent?: string;
  status?: 'Sob consulta' | 'Disponível' | 'Vendida' | 'Acervo do artista';
  images?: string[];
  featured?: boolean;
  isMusic?: boolean;
  exhibition?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  city: string;
  year: number;
  description: string;
  image?: string;
}
