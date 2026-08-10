import Image from 'next/image';
import Link from 'next/link';
import { ArtworkCard } from '@/components/artwork-card';
import { ContactForm } from '@/components/contact-form';
import { SiteHeader } from '@/components/site-header';
import { artworks, featuredArtwork } from '@/data/artworks';
import { exhibitions } from '@/data/exhibitions';
import { siteConfig } from '@/config/site';

const textureWorks = [artworks[0], artworks[6]];

export default function HomePage() {
  const artistSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Casusa Oliveira',
    alternateName: 'José Casusa de Oliveira Neto',
    jobTitle: 'Artista visual',
    url: siteConfig.url,
    sameAs: [siteConfig.instagram],
    homeLocation: { '@type': 'Place', name: 'Maceió, Alagoas, Brasil' },
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow">Artista visual · Maceió, Brasil</p>
            <h1 id="hero-title">Casusa<br /><em>Oliveira</em></h1>
            <p className="hero-intro">Memória, tempo e percepção transformados em matéria, cor e gesto.</p>
            <div className="hero-actions">
              <Link className="text-link" href="#obras">Percorrer as obras <span>↓</span></Link>
              <a className="text-link muted" href="/portfolio-casusa-oliveira.pdf" download>Baixar portfólio <span>↗</span></a>
            </div>
          </div>
          <Link href={`/obras/${featuredArtwork.slug}`} className="hero-art reveal delay-1">
            <Image
              src={featuredArtwork.image}
              alt={`${featuredArtwork.title}, obra em destaque de Casusa Oliveira`}
              width={featuredArtwork.width}
              height={featuredArtwork.height}
              sizes="(max-width: 800px) 100vw, 55vw"
              priority
            />
            <div className="hero-caption">
              <span>01</span>
              <div><p>Obra em destaque</p><h2>{featuredArtwork.title}</h2></div>
              <span>Ver ↗</span>
            </div>
          </Link>
        </section>

        <section id="obras" className="section-shell section-block" aria-labelledby="works-title">
          <div className="section-heading">
            <div><p className="eyebrow">Seleção · 2023—2025</p><h2 id="works-title">Obras</h2></div>
            <p>Colagem, pintura e matéria recuperada compõem um arquivo visual de lembranças, música e cotidiano.</p>
          </div>
          <div className="artwork-grid">
            {artworks.slice(0, 9).map((artwork, index) => <ArtworkCard key={artwork.id} artwork={artwork} priority={index < 2} />)}
          </div>
          <div className="center-action"><Link className="button" href="/obras">Ver todas as {artworks.length} obras <span>→</span></Link></div>
        </section>

        <section id="poetica" className="dark-section section-block" aria-labelledby="poetics-title">
          <div className="section-shell poetics-grid">
            <div className="sticky-copy">
              <p className="eyebrow light">Poética</p>
              <h2 id="poetics-title">A superfície como <em>memória viva.</em></h2>
            </div>
            <div className="poetics-copy">
              <p className="lead">A imagem é investigada como território de experiência sensível e reflexão estética.</p>
              <p>Memória, tempo e percepção visual revelam tensões entre forma, cor e matéria. Camadas, gestos e contrastes transformam a superfície em um campo de energia visual, situado entre abstração, expressão e experimentação.</p>
              <div className="poetics-index" aria-label="Elementos da poética">
                {['Matéria', 'Memória', 'Música', 'Cotidiano'].map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="texture-section section-shell section-block" aria-labelledby="material-title">
          <div className="section-heading compact">
            <div><p className="eyebrow">Matéria e transformação</p><h2 id="material-title">A matéria conta</h2></div>
            <p>Detalhes revelam costuras, inscrições e materiais reaproveitados que participam da narrativa.</p>
          </div>
          <div className="texture-grid">
            {textureWorks.map((artwork, index) => (
              <figure key={artwork.id} className={`texture texture-${index + 1}`}>
                <Image src={artwork.image} alt={`Detalhe de textura da obra ${artwork.title}`} fill sizes="(max-width: 720px) 100vw, 50vw" />
                <figcaption>Detalhe · {artwork.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="sobre" className="about-section section-block" aria-labelledby="about-title">
          <div className="section-shell about-grid">
            <div className="artist-portrait">
              <Image src="/images/artist/casusa-oliveira-artista.png" alt="José Casusa de Oliveira Neto, artista visual" width={2268} height={3600} sizes="(max-width: 800px) 100vw, 45vw" />
            </div>
            <div className="about-copy">
              <p className="eyebrow">Sobre o artista</p>
              <h2 id="about-title">José Casusa de Oliveira Neto</h2>
              <p className="lead">Artista visual brasileiro, baseado em Maceió, Alagoas.</p>
              <p>Sua produção investiga relações entre percepção, emoção e experiência estética contemporânea. Cor, textura e composição constroem superfícies que convidam à contemplação e à interpretação sensível, enquanto camadas, gestos e contrastes estruturam sua linguagem.</p>
              <div className="about-links">
                <a className="text-link" href="/portfolio-casusa-oliveira.pdf" target="_blank">Abrir portfólio em PDF <span>↗</span></a>
                <a className="text-link" href={siteConfig.instagram} target="_blank" rel="noreferrer">{siteConfig.instagramHandle} <span>↗</span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="exposicoes" className="section-shell section-block exhibitions" aria-labelledby="exhibitions-title">
          <div className="section-heading"><div><p className="eyebrow">Percurso</p><h2 id="exhibitions-title">Exposições</h2></div><p>Registros selecionados da trajetória expositiva do artista.</p></div>
          {exhibitions.map((exhibition) => (
            <article className="exhibition-row" key={exhibition.id}>
              <span className="exhibition-year">{exhibition.year}</span>
              <div><h3>{exhibition.title}</h3><p>{exhibition.description}</p></div>
              <p>{exhibition.location}<br />{exhibition.city}, AL</p>
            </article>
          ))}
        </section>

        <section id="contato" className="contact-section section-block" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow light">Contato</p>
              <h2 id="contact-title">Vamos conversar<br /><em>sobre arte?</em></h2>
              <p>Para informações sobre obras, exposições, projetos e colaborações.</p>
              <div className="contact-links">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp · {siteConfig.phone}</a>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram · {siteConfig.instagramHandle}</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p className="wordmark">Casusa <span>Oliveira</span></p>
          <p>Artista visual<br />Maceió · Alagoas · Brasil</p>
          <div><a href={siteConfig.instagram} target="_blank" rel="noreferrer">{siteConfig.instagramHandle} ↗</a><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">{siteConfig.phone}</a><a href="/politica-de-privacidade">Privacidade</a></div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artistSchema) }} />
    </>
  );
}
