const modal = document.getElementById('artworkModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');
const cards = document.querySelectorAll('.card');
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

const artworkData = {
  Liberdade: {
    image: '/images/casusa_imagens_melhoradas/webp/liberdade.webp',
    meta: '2024 · Técnica mista',
    description: 'Composição que investiga memória, percepção e gesto em camadas visuais.'
  },
  'O Tempo Não Para': {
    image: '/images/casusa_imagens_melhoradas/webp/o-tempo-nao-para.webp',
    meta: '2024 · Mista',
    description: 'Obra desenvolvida em diálogo com a memória do tempo e com a materialidade da superfície.'
  },
  Exagerado: {
    image: '/images/casusa_imagens_melhoradas/webp/exagerado.webp',
    meta: '2024 · Mista',
    description: 'Uma obra em que a energia visual se transforma em textura e presença.'
  },
  Gambiarra: {
    image: '/images/casusa_imagens_melhoradas/webp/gambiarra.webp',
    meta: '2024 · Técnica mista',
    description: 'A obra articula cotidiano, colagem e gesto em um campo visual sensível.'
  },
  'O Que É, O Que É?': {
    image: '/images/casusa_imagens_melhoradas/webp/o-que-e-o-que-e.webp',
    meta: '2024 · Mista',
    description: 'Camadas e percepção organizam uma composição entre dúvida, memória e forma.'
  },
  'Amor Perfeito': {
    image: '/images/casusa_imagens_melhoradas/webp/amor-perfeito.webp',
    meta: '2024 · Mista',
    description: 'Uma obra de presença delicada, construída em torno da relação entre cor e matéria.'
  }
};

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3')?.textContent?.trim() || 'Obra';
    const data = artworkData[title];
    if (!data) return;
    modalImage.src = data.image;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalMeta.textContent = data.meta;
    modalDescription.textContent = data.description;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

closeModal?.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});

modal?.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = (formData.get('name') || '').toString().trim();
  const email = (formData.get('email') || '').toString().trim();
  const message = (formData.get('message') || '').toString().trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Preencha nome, e-mail e mensagem para enviar.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formStatus.textContent = 'Informe um e-mail válido.';
    return;
  }

  formStatus.textContent = 'Mensagem enviada com sucesso. Em breve entraremos em contato.';
  form.reset();
});
