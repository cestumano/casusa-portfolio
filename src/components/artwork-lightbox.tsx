'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function ArtworkLightbox({ src, title, width, height }: { src: string; title: string; width: number; height: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const current = dialog.current;
    const close = (event: MouseEvent) => { if (event.target === current) current?.close(); };
    current?.addEventListener('click', close);
    return () => current?.removeEventListener('click', close);
  }, []);
  return <>
    <button className="zoom-button" type="button" onClick={() => dialog.current?.showModal()}>Ampliar imagem <span>＋</span></button>
    <dialog className="lightbox" ref={dialog} aria-label={`Visualização ampliada de ${title}`}>
      <button type="button" aria-label="Fechar imagem ampliada" onClick={() => dialog.current?.close()}>Fechar ×</button>
      <div className="lightbox-image"><Image src={src} alt={`${title}, visualização ampliada`} width={width} height={height} sizes="100vw" /></div>
      <p>{title} · use o gesto de zoom do dispositivo para observar os detalhes</p>
    </dialog>
  </>;
}
