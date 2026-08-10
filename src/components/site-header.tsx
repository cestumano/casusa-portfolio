'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

const links = [
  ['Obras', '/#obras'],
  ['Poética', '/#poetica'],
  ['Sobre', '/#sobre'],
  ['Exposições', '/#exposicoes'],
  ['Contato', '/#contato'],
  ['Imprensa', '/imprensa'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link href="/" className="wordmark" aria-label="Casusa Oliveira — página inicial">
          Casusa <span>Oliveira</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? 'Fechar' : 'Menu'}</span>
          <span aria-hidden="true">{open ? '×' : '＋'}</span>
        </button>
        <nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          <Link href="/en" lang="en" onClick={() => setOpen(false)}>EN</Link>
        </nav>
      </div>
    </header>
  );
}
