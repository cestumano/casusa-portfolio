'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/config/site';

export function ContactForm() {
  const [status, setStatus] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const subject = String(form.get('subject') || 'Contato pelo site');
    const message = String(form.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('Preencha nome, e-mail e mensagem.');
      return;
    }

    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Seu aplicativo de e-mail foi aberto com a mensagem preenchida.');
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>Nome<input name="name" autoComplete="name" required /></label>
        <label>E-mail<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>
        Assunto
        <select name="subject" defaultValue="Interesse em uma obra">
          <option>Interesse em uma obra</option>
          <option>Galeria ou curadoria</option>
          <option>Exposição</option>
          <option>Projeto artístico</option>
          <option>Imprensa</option>
          <option>Outro assunto</option>
        </select>
      </label>
      <label>Mensagem<textarea name="message" rows={5} required /></label>
      <div className="form-footer">
        <button className="button button-dark" type="submit">Preparar mensagem <span>↗</span></button>
        <a className="button button-outline-light" href={`${siteConfig.whatsapp}?text=${encodeURIComponent('Olá, Casusa. Conheci seu trabalho pelo site e gostaria de conversar.')}`} target="_blank" rel="noreferrer">Enviar por WhatsApp <span>↗</span></a>
        <p role="status" aria-live="polite">{status}</p>
      </div>
    </form>
  );
}
