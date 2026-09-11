export type StoryBlockKind = 'text-photo' | 'photo-text' | 'quote' | 'milestone' | 'photo-grid'

export type StoryImage = {
  src: string
  alt: string
  caption?: string
}

export type StoryBlock = {
  id: string
  kind: StoryBlockKind
  eyebrow?: string
  title?: string
  date?: string
  text?: string[]
  quote?: string
  images?: StoryImage[]
  imageFolder?: string
}

export const siteContent = {
  couple: {
    brandName: 'E&M',
    logoSrc: '/logo-maeve.jpeg',
    names: 'Evelyn & Maurício',
    date: '23 | 10 | 2027',
    location: 'Casa Beijo do Sol - Iparana, Caucaia - CE',
    welcomeMessage:
      'Criamos este espaço para compartilhar os detalhes do nosso casamento com as pessoas que amamos.',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'MAEVE', href: '#maeve' },
    { label: 'Casamento', href: '#casamento' },
    { label: 'Presentes', href: '#presentes' },
  ],
  home: {
    openingLabel: 'Sejam bem-vindos ao nosso casamento',
    headline: 'E&M',
    subtitle: 'Uma celebração que carrega nossas cores, nossa história e tudo o que construímos juntos.',
    primaryAction: {
      label: 'Confirmar presença',
      href: '#casamento',
    },
  },
  story: {
    sectionTitle: 'Nossa história',
    blocks: [
      { id: 'capitulo-01', kind: 'text-photo', eyebrow: 'Capítulo 1', title: 'Onde tudo começou', text: ['Nossa história começou muito antes de imaginarmos que um dia estaríamos aqui.', 'Ainda crianças, nos conhecemos no ABC, sem fazer ideia do que o futuro reservava para nós. Vestimos fantasias de abelhinha juntos, seguramos a bandeira do Brasil na formatura e compartilhamos alguns dos primeiros momentos de uma história que ainda levaria muitos anos para ser compreendida.', 'O tempo passou e nossos caminhos voltaram a se cruzar durante a Primeira Comunhão. Mais uma vez, estávamos lado a lado. Esses encontros também aproximaram nossas mães e, alguns anos depois, a vida tratou de nos colocar novamente no mesmo caminho, dessa vez no Colégio Luiza Távora.', 'Foi ali, entre idas e vindas da escola, conversas e a rotina de todos os dias, que começamos a nos aproximar de verdade. Sem perceber, aquele vínculo de infância começava a ganhar um novo significado.'], images: [], imageFolder: '/photos/chapter01' },
      { id: 'capitulo-02', kind: 'text-photo', eyebrow: 'Capítulo 2', title: 'Quando viramos nós', text: ['Anos depois, em uma tarde aparentemente comum, combinamos de assistir a um filme: A Mulher de Preto. O que parecia ser apenas mais um encontro acabou se tornando o início de uma das partes mais importantes da nossa história.', 'Depois do filme, entre uma conversa e outra, aconteceu o nosso primeiro beijo. E, a partir dali, começou o nosso namoro.', 'Vieram muitas idas ao cinema, histórias engraçadas, momentos inesperados, descobertas, sonhos e inúmeras alegrias compartilhadas. Mas vieram também as conversas importantes, os ajustes, os aprendizados e tudo aquilo que faz parte de construir uma relação de verdade.', 'Com o passar dos anos, crescemos individualmente e também juntos. E, pouco a pouco, aquilo que antes era apenas um sentimento foi se transformando em certeza: queríamos continuar escolhendo um ao outro por toda a vida.'], images: [], imageFolder: '/photos/chapter02' },
      { id: 'capitulo-03', kind: 'text-photo', eyebrow: 'Capítulo 3', title: 'O próximo passo', text: ['Depois de nove anos de namoro, já havíamos vivido muitas mudanças, conquistas e desafios. Em cada nova fase, seguimos encontrando um no outro apoio, parceria e força para continuar.', 'Até que chegou o momento de transformar em promessa aquilo que já existia em nossos corações havia muito tempo.', 'Durante uma das viagens mais marcantes das nossas vidas, em Ubajara, no Ceará, veio o pedido de casamento. E, com ele, um sim que abriu um novo capítulo da nossa história.', 'Ubajara passou a ocupar um lugar ainda mais especial em nossas memórias, como cenário de um momento que jamais esqueceremos.', 'Agora chegamos até aqui. Depois de tantos reencontros, anos de namoro, crescimento, escolhas e dois anos de noivado, estamos prestes a encerrar mais um ciclo para começar aquele que talvez seja o mais bonito de todos: a nossa vida como marido e mulher.'], images: [], imageFolder: '/photos/chapter03' },
    ] satisfies StoryBlock[],
  },  wedding: {
    sectionTitle: 'Casamento',
    date: 'Sábado, 23 de outubro de 2027',
    time: '16h30',
    venue: 'Casa Beijo do Sol',
    address: 'Iparana, Caucaia - CE, 61627-250',
    mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=Casa+Beijo+do+Sol%2C+Iparana%2C+Caucaia+-+CE',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.0163302752811!2d-38.61988023877693!3d-3.690845876886757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c73509d335d8a1%3A0xb36ab1c75c434b75!2sCasa%20Beijo%20do%20Sol!5e0!3m2!1spt-BR!2sbr!4v1788922742265!5m2!1spt-BR!2sbr',
    confirmation: {
      label: 'Confirmar presença',
      href: '',
      helperText: 'Em breve vamos adicionar o link ou formulário de confirmação.',
    },
    notes: ['Cerimônia e recepção no mesmo local.', 'Traje social.', 'A cor azul serenity é reservada para as madrinhas.', 'Não vestir preto.'],
  },
  gifts: {
    sectionTitle: 'Presentes',
    message:
      'A presença de vocês já é o nosso maior presente. Para quem desejar contribuir, deixamos uma chave Pix abaixo.',
    pixKey: 'Adicionar chave Pix',
    pixReceiver: 'Adicionar nome do recebedor',
    qrCodeSrc: '',
  },
}







