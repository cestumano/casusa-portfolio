import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { title: 'Imprensa e materiais', description: 'Biografia, retrato e portfólio de Casusa Oliveira para imprensa, galerias e curadoria.' };

export default function PressPage() {
  return <><SiteHeader /><main className="press-page section-shell">
    <header className="index-heading"><p className="eyebrow">Imprensa · Galerias · Curadoria</p><h1>Materiais do <em>artista</em></h1><p>Informações e arquivos oficiais para divulgação do trabalho de Casusa Oliveira.</p></header>
    <section className="press-grid">
      <div className="press-portrait"><Image src="/images/artist/casusa-oliveira-artista.png" alt="Retrato de Casusa Oliveira" width={2268} height={3600} sizes="(max-width: 800px) 100vw, 40vw" /></div>
      <div className="press-copy"><p className="eyebrow">Biografia curta</p><h2>Casusa Oliveira</h2><p>José Casusa de Oliveira Neto é artista visual brasileiro baseado em Maceió, Alagoas. Sua produção articula memória, tempo, percepção e matéria por meio de pintura, escrita, colagem e materiais reutilizados.</p><p>Entre abstração e figuração, seu trabalho aproxima experiência cotidiana, imaginário popular e referências musicais em superfícies construídas por camadas.</p><p className="press-note">Ao publicar imagens, credite: “Obra de Casusa Oliveira”. Para arquivos em resolução original ou outras informações, solicite autorização diretamente ao artista.</p><div className="press-actions"><a className="button" href="/portfolio-casusa-oliveira.pdf" download>Baixar portfólio PDF <span>↓</span></a><a className="button" href={`mailto:${siteConfig.email}?subject=Imprensa%20e%20materiais`}>Solicitar materiais <span>↗</span></a></div></div>
    </section>
    <section className="press-contact"><p className="eyebrow">Contato direto</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">{siteConfig.phone}</a><Link href="/">Voltar ao portfólio →</Link></section>
  </main></>;
}
