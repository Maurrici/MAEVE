# Planejamento - Site de Casamento MAEVE

## Resumo

Criar um site React enxuto para casamento, preparado para hospedagem no GitHub Pages, com identidade visual inspirada em azulejo portugues azul e branco, flores brancas, detalhes dourados e linguagem de convite/editorial.

O site deve conter:

- Home com animacao de abertura;
- MAEVE, com historia dinamica, fotos e galeria;
- Casamento, com data, horario, local e confirmacao;
- Lista de presentes com Pix.

## Premissas Confirmadas

- O projeto sera criado do zero no diretorio atual.
- A hospedagem desejada e GitHub Pages.
- A stack desejada e React.
- A primeira versao deve ser estatica, simples e facil de manter.
- A lista de presentes usara Pix inicialmente.
- O envio de comprovante/anexo por email fica reservado para uma evolucao futura.

## Decisoes Pendentes

- Nome final exibido: "MAEVE", nomes do casal, ou ambos.
- Data, horario, local e link do mapa.
- Chave Pix, nome do recebedor e texto da area de presentes.
- Fotos reais do casal.
- Ordem e textos dos capitulos da historia.
- Modelo inicial de confirmacao: link externo, botao para WhatsApp, formulario visual sem backend ou outra alternativa simples.

## Direcao Visual Recomendada

A direcao recomendada e combinar **Azulejo Vivo** com **Convite Editorial**:

- abertura com padrao de azulejos se revelando;
- fundo off-white;
- azul profundo como cor principal;
- azul porcelana como apoio;
- detalhes dourados discretos;
- tipografia serifada para titulos;
- textos com boa legibilidade;
- ornamentacao inspirada em papelaria fina de casamento.

---

## Task 1 - Definir Base Visual E Conteudo Editavel

Objetivo: estabelecer o contrato visual e a estrutura de dados editavel do site antes da implementacao.

Dependencias:

- Nenhuma.

Entregavel:

- Documento ou estrutura inicial com paleta, tipografia, secoes, dados editaveis e placeholders.

Sub-tasks:

- Definir paleta: azul profundo, azul porcelana, off-white, verde folhagem discreto e dourado suave.
- Escolher tipografia: uma fonte serifada elegante para titulos e uma fonte legivel para texto.
- Definir o modelo de conteudo editavel para Home, historia, galeria, casamento e Pix.
- Separar textos e fotos em um arquivo de dados, por exemplo `src/data/siteContent.ts`.
- Mapear imagens futuras em uma pasta previsivel, por exemplo `src/assets/photos`.

Fora de escopo:

- Implementar componentes visuais finais.
- Criar formulario real de RSVP ou envio de email.

Criterios de conclusao:

- Existe um contrato claro de conteudo que pode ser editado depois sem mexer na estrutura dos componentes.

---

## Task 2 - Criar Projeto React Enxuto Para GitHub Pages

Objetivo: ter uma aplicacao React minima, executavel localmente e preparada para publicacao estatica.

Dependencias:

- Task 1.

Entregavel:

- Projeto React configurado, provavelmente com Vite, TypeScript e build estatico.

Sub-tasks:

- Criar estrutura com Vite + React + TypeScript.
- Configurar scripts `dev`, `build` e `preview`.
- Definir suporte a GitHub Pages, incluindo `base` configuravel se necessario.
- Criar estrutura inicial de pastas: `components`, `sections`, `data`, `assets`, `styles`.
- Validar que o build gera arquivos estaticos.

Fora de escopo:

- Implementar design completo das secoes.
- Publicar no GitHub Pages.

Criterios de conclusao:

- `npm run dev` abre a aplicacao.
- `npm run build` conclui com sucesso.

---

## Task 3 - Implementar Layout Global E Identidade Visual

Objetivo: entregar a base visual compartilhada do site, incluindo navegacao, fundo, espacamento e responsividade.

Dependencias:

- Task 2.

Entregavel:

- Layout global responsivo com aparencia consistente de convite/editorial azul e branco.

Sub-tasks:

- Criar estilos globais, tokens de cor e tipografia.
- Implementar header/nav discreto com links para Home, MAEVE, Casamento e Presentes.
- Criar textura ou padrao inspirado em azulejo sem depender ainda de imagens finais.
- Adicionar ornamentos visuais leves: bordas, molduras, divisores e detalhes dourados.
- Garantir boa leitura no celular.

Fora de escopo:

- Criar animacao de abertura.
- Implementar conteudo especifico das secoes.

Criterios de conclusao:

- O site ja parece parte da identidade visual desejada mesmo com conteudo placeholder.
- Nao ha quebras visuais obvias em desktop e mobile.

---

## Task 4 - Criar Home Com Animacao De Abertura

Objetivo: entregar a primeira experiencia do site com abertura memoravel e leve.

Dependencias:

- Task 3.

Entregavel:

- Home com animacao inicial inspirada em azulejos se revelando e entrada do nome/data.

Sub-tasks:

- Criar composicao de abertura com mosaico azul e branco.
- Animar entrada dos elementos: padrao, titulo "MAEVE", nomes/data e chamada principal.
- Adicionar botao ou atalho para confirmacao de presenca ou secao Casamento.
- Respeitar usuarios com preferencia por reducao de movimento.
- Validar que a animacao nao atrasa demais o acesso ao conteudo.

Fora de escopo:

- Galeria de fotos.
- Formulario funcional de confirmacao.

Criterios de conclusao:

- A Home comunica imediatamente o estilo do casamento.
- A abertura funciona bem no celular e nao prejudica navegacao.

---

## Task 5 - Criar Secao MAEVE Com Historia Dinamica

Objetivo: entregar uma estrutura rica e editavel para contar a historia do casal com textos e fotos.

Dependencias:

- Task 1.
- Task 3.

Entregavel:

- Secao "MAEVE" com narrativa modular e galeria complementar.

Sub-tasks:

- Criar componente de linha do tempo ou narrativa com blocos editaveis.
- Permitir variacoes por bloco: texto a esquerda/foto a direita, foto grande, citacao, marco de data e conjunto de fotos.
- Usar dados vindos de `siteContent.ts`, para adicionar ou remover capitulos depois.
- Criar placeholders elegantes quando ainda nao houver fotos.
- Criar galeria separada com grid responsivo.
- Preparar legendas opcionais para fotos.

Fora de escopo:

- Upload de fotos pelo proprio site.
- Edicao visual via painel administrativo.

Criterios de conclusao:

- Um novo capitulo da historia pode ser adicionado alterando apenas o arquivo de conteudo.
- A secao funciona com poucas ou muitas fotos.

---

## Task 6 - Criar Secao Casamento

Objetivo: exibir os dados praticos do evento de forma clara e bonita.

Dependencias:

- Task 3.

Entregavel:

- Secao com data, horario, local, mapa/link e confirmacao.

Sub-tasks:

- Criar blocos discretos para data, horario e local.
- Adicionar botao para abrir rota no Google Maps ou Waze quando houver endereco.
- Criar area de confirmacao de presenca em modo inicial: botao, link ou formulario placeholder.
- Preparar estrutura para futuramente trocar por formulario real.
- Adicionar espaco opcional para observacoes: traje, estacionamento, cerimonia e recepcao.

Fora de escopo:

- Backend de RSVP.
- Envio de email.
- Persistencia de respostas.

Criterios de conclusao:

- Um convidado consegue encontrar rapidamente quando, onde e como confirmar presenca.

---

## Task 7 - Criar Lista De Presentes Com Pix

Objetivo: entregar uma secao simples e elegante para presentes via Pix.

Dependencias:

- Task 3.

Entregavel:

- Secao de presentes com chave Pix, instrucoes e possivel QR Code futuro.

Sub-tasks:

- Criar bloco principal com mensagem curta de agradecimento.
- Exibir chave Pix e botao de copiar.
- Adicionar espaco opcional para QR Code como imagem.
- Preparar texto para futuras opcoes de lista externa.
- Garantir que a interacao de copiar funcione no navegador.

Fora de escopo:

- Upload de comprovante.
- Envio de email.
- Integracao com pagamento.

Criterios de conclusao:

- O convidado consegue copiar a chave Pix facilmente.
- A secao continua bonita mesmo sem QR Code.

---

## Task 8 - Preparar Evolucao Futura Para Comprovante E Email

Objetivo: deixar decisoes tecnicas registradas para uma futura etapa sem implementar backend agora.

Dependencias:

- Task 6.
- Task 7.

Entregavel:

- Contrato futuro documentado para envio de comprovante e email simples.

Sub-tasks:

- Definir opcoes futuras: Formspree, EmailJS, Netlify Forms ou endpoint serverless.
- Registrar campos previstos: nome, email ou telefone, mensagem e anexo/comprovante.
- Identificar limitacao do GitHub Pages: nao executa backend proprio.
- Sugerir abordagem mais simples para manter hospedagem estatica.

Fora de escopo:

- Implementar envio real.
- Armazenar arquivos enviados.

Criterios de conclusao:

- Existe uma recomendacao clara para evolucao sem reescrever o site.

---

## Task 9 - Validar Responsividade, Build E Publicacao Estatica

Objetivo: comprovar que o site esta pronto para rodar localmente e ser hospedado no GitHub Pages.

Dependencias:

- Tasks 2 a 7.

Entregavel:

- Aplicacao validada em desktop/mobile e build estatico funcionando.

Sub-tasks:

- Executar build de producao.
- Testar navegacao entre secoes.
- Verificar layout em larguras mobile e desktop.
- Verificar botoes: navegacao, copiar Pix, mapa e RSVP quando configurados.
- Corrigir problemas visuais encontrados.

Fora de escopo:

- Publicar efetivamente no GitHub Pages, a menos que isso seja solicitado.

Criterios de conclusao:

- Build final gerado sem erro.
- Fluxo principal do convidado esta validado.

---

## Task 10 - Documentar A Implementacao Concluida

Objetivo: registrar, depois da implementacao e validacao, como o site ficou estruturado e como manter o conteudo.

Dependencias:

- Todas as Tasks anteriores.

Entregavel:

- Arquivo de documentacao final no projeto, por exemplo `README.md` ou `docs/site-casamento.md`.

Sub-tasks:

- Documentar como editar textos, historia, fotos, galeria, dados do casamento e Pix.
- Registrar comandos de desenvolvimento e build.
- Explicar como publicar no GitHub Pages.
- Registrar limitacoes atuais: RSVP simples, sem backend, sem envio de comprovante.
- Documentar caminho recomendado para a evolucao futura de email/anexo.

Fora de escopo:

- Implementar novas funcionalidades.
- Corrigir bugs descobertos apos a documentacao sem abrir nova Task.

Criterios de conclusao:

- A documentacao permite alimentar e manter o site sem depender da memoria da implementacao.
