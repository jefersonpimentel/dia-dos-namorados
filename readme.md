# 💜 Projeto Dia dos Namorados - Surpresa Interativa

Uma aplicação web interativa, responsiva e cheia de romance desenvolvida para comemorar o Dia dos Namorados. Este projeto combina boas práticas de desenvolvimento front-end com uma experiência de storytelling digital personalizada.

## 🔗 Demonstração ao Vivo
[Insira o seu link da Vercel/Netlify ou GitHub Pages aqui]

---

## 🚀 Funcionalidades (Features)

A aplicação foi estruturada para guiar o usuário através de uma jornada fluida, dinâmica e de alta interatividade:

* **Filtro Inicial Interativo (O Desafio do "Sim/Não"):** Um card de boas-vindas com uma pergunta crucial. O botão "NÃO" utiliza lógica de coordenadas dinâmicas em JavaScript para fugir do cursor do mouse ou do toque na tela, tornando o clique impossível. Já o botão "SIM" desbloqueia toda a experiência do site.
* **Contador de Relacionamento em Tempo Real:** Um cronômetro preciso que calcula e renderiza na tela a duração exata do relacionamento em dias, horas, minutos e segundos, atualizando-se dinamicamente a cada `1000ms`.
* **Player de Músicas Sincronizado:** Um player flutuante elegante, inspirado na interface do Spotify, que ativa automaticamente a música de fundo do casal assim que a seção principal é desbloqueada, contando também com controles manuais de play/pause.
* **Linha do Tempo (Timeline) Responsiva:** Um layout vertical limpo e cronológico para contar a história do casal. O design escala perfeitamente de monitores desktop de alta resolução até telas de celulares, utilizando estruturas flexíveis de Flexbox, Grid e Media Queries.
* **Cards 3D Interativos:** Uma coleção de cards contendo mensagens especiais que utilizam transformações CSS 3D (`perspective`, `rotateY` e `backface-visibility`) para virar suavemente ao serem clicados.
* **Efeito Máquina de Escrever Automatizado:** Uma seção de carta romântica que utiliza um loop assíncrono sequencial (`setTimeout`) para digitar o texto letra por letra. O disparo pode ser configurado por tempo de espera (delay) ou de forma inteligente ao entrar na tela através da API **Intersection Observer**.
* **Sistema de Partículas Dinâmico (Chuva de Corações):** Um motor de renderização contínuo em JavaScript que gera programaticamente corações flutuantes no plano de fundo, com tamanhos, posições horizontais e tempos de animação completamente aleatórios.

---

## 🎨 Paleta de Cores & Design (UI)

A interface foi projetada utilizando uma paleta moderna, sofisticada e premium em tons de roxo (estilo *night-mode*), garantindo excelente contraste, legibilidade e tipografia acessível:

* **Cor de Fundo (Lilás Pastel Suave):** `#f3e5f5`
* **Acento Principal/Texto (Violeta Profundo):** `#4a148c`
* **Acento Secundário (Roxo Vibrante):** `#8e24aa`
* **Destaques Claros (Roxo Pastel Claro):** `#e1bee7`

---

## 🛠️ Tecnologias & Conceitos Aplicados

* **HTML5:** Arquitetura semântica (`<section>`, `<header>`, `<audio>`).
* **CSS3:** Layouts avançados (Grid e Flexbox), animações customizadas via `@keyframes`, transições 3D e responsividade focada em dispositivos móveis (*mobile-first*).
* **Vanilla JavaScript (ES6+):** * Manipulação direta da DOM e alternância de classes CSS.
    * Operações de tempo assíncronas (`setInterval`, `setTimeout`).
    * Tratamento matemático de datas (uso de Timestamps com `new Date()` e conversão de milissegundos para tempo legível).

---

## 🔧 Como Personalizar Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/surpresa-dia-dos-namorados.git](https://github.com/seu-usuario/surpresa-dia-dos-namorados.git)