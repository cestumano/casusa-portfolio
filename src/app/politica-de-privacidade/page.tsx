import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = { title: 'Política de privacidade', robots: { index: false } };

export default function PrivacyPage() {
  return <><SiteHeader /><main className="legal-page section-shell"><p className="eyebrow">Informações</p><h1>Política de privacidade</h1><p>Este site não armazena os dados preenchidos no formulário de contato. Ao enviar uma mensagem, o seu aplicativo de e-mail é aberto e o envio ocorre diretamente entre você e o endereço do artista.</p><p>O site pode registrar dados técnicos anônimos fornecidos pelo serviço de hospedagem, como navegador, dispositivo e páginas acessadas, para fins de segurança e melhoria da experiência.</p><p>Para dúvidas relacionadas à privacidade, entre em contato pelo e-mail <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></main></>;
}
