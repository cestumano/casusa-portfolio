import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() { return <><SiteHeader /><main className="not-found section-shell"><p className="eyebrow">Erro 404</p><h1>Página não encontrada.</h1><p>Esta página pode ter mudado de endereço ou não estar mais disponível.</p><Link className="button" href="/">Voltar ao início <span>→</span></Link></main></>; }
