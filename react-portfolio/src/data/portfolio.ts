export const heroContent = {
  name: 'Emily',
  greeting: 'Olá, sou a',
  description:
    'Desenvolvedora apaixonada por tecnologia, arte e comunicação. Estudo Ciência da Computação no Insper e acredito que código é uma forma de expressão criativa.',
  image: '/img/emily.jpg',
  skills: ['Python', 'HTML/CSS', 'JavaScript', 'Godot'],
}

export const timeline = [
  {
    title: 'Ensino Fundamental',
    items: [
      'Olimpíada Brasileira de Astronomia e Astronáutica',
      'Olimpíada Brasileira de Matemática das Escolas Públicas',
      'Olimpíada Paulista de Física',
      'First Cambridge English - FCE aos 13 anos',
    ],
  },
  {
    title: 'Ensino Médio',
    items: [
      'Publicação de textos na Festa Literária de Araras – FLAP',
      'Desafio Nacional Acadêmico – DNA (líder de equipe)',
      'Eletiva Hackeando a Vida',
      'Trabalho voluntário na OSAF Araras',
    ],
  },
  {
    title: 'Graduação',
    items: [
      'Graduação em Ciência da Computação no Insper (bolsa integral)',
      'Coordenação de projeto na Organização Estudantil InsperCode',
      'Membro e marketing da Organização Estudantil InsperSec',
      'Curso de extensão na FFLCH–USP',
    ],
  },
]

export const projects = [
  {
    title: 'Pygame: O Quebra-Nozes',
    description:
      'Jogo inspirado no balé clássico com 5 fases únicas e mapa overworld. Desenvolvido em Pygame com animações frame-by-frame, telas personalizadas e mecânicas exclusivas por fase.',
    images: [
      { src: '/img/nutcracker/nutcracker.png', alt: 'Pygame: O Quebra-Nozes' },
      { src: '/img/nutcracker/map.png', alt: 'Mapa do jogo' },
      { src: '/img/nutcracker/fase1.png', alt: 'Fase 1 do jogo' },
      { src: '/img/nutcracker/fase3.png', alt: 'Fase 3 do jogo' },
      { src: '/img/nutcracker/fase4.png', alt: 'Fase 4 do jogo' },
      { src: '/img/nutcracker/fase5.png', alt: 'Fase 5 do jogo' },
    ],
  },
  {
    title: 'Site Informar - GAS',
    description:
      'Plataforma educacional desenvolvida para o Insper Code em parceria com o projeto GAS. Sistema responsivo com React, FastAPI, PostgreSQL e deploy na Vercel.',
    images: [
      { src: '/img/informar/informa.png', alt: 'Página inicial do Informar' },
      { src: '/img/informar/informar_ex.png', alt: 'Dashboard do Informar' },
      { src: '/img/informar/informa.png', alt: 'Interface Informar' },
    ],
  },
  {
    title: 'Help the Fox',
    description:
      'Escape Room desenvolvido para o Insper Code a fim de arrecadar fundos para o Programa de Bolsas. O jogo em Godot mescla ambientes físicos e digitais e possui artes e minigames autorais.',
    images: [
      { src: '/img/help_the_fox/1.png', alt: 'Menu principal Help the Fox' },
      { src: '/img/help_the_fox/2.png', alt: 'Fase do jogo Help the Fox' },
      { src: '/img/help_the_fox/3.png', alt: 'Tela estática Help the Fox' },
      { src: '/img/help_the_fox/4.png', alt: 'Tela de inserção de senha Help the Fox' },
    ],
  },
  {
    title: 'Plataforma de Questionários - Sono 360',
    description:
      'Aplicação Django desenvolvida por 6 estudantes em parceria com a empresa Sono 360. Permite envio de questionários, coleta de respostas e importação de dados via CSV.',
    images: [
      { src: '/img/sprint25.1/aviso.png', alt: 'Aviso antes do questionário' },
      { src: '/img/sprint25.1/login.png', alt: 'Tela de login' },
      { src: '/img/sprint25.1/cadastro.png', alt: 'Tela de cadastro' },
      { src: '/img/sprint25.1/medico.png', alt: 'Painel médico' },
      { src: '/img/sprint25.1/paciente.png', alt: 'Painel paciente' },
      { src: '/img/sprint25.1/questionario.png', alt: 'Pergunta no questionário' },
      { src: '/img/sprint25.1/senha.png', alt: 'Tela de divergência de senhas' },
    ],
  },
]

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/emilybrtt/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    href: 'https://github.com/emilybrtt',
    label: 'GitHub',
    icon: 'github',
  },
  {
    href: 'mailto:debrittoemily@gmail.com',
    label: 'Email',
    icon: 'email',
  },
]
