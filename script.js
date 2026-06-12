// 1. Botão que foge
function foge(botao) {
  const larguraJanela = window.innerWidth - 100;
  const alturaJanela = window.innerHeight - 50;
  const novoX = Math.random() * larguraJanela;
  const novoY = Math.random() * alturaJanela;
  botao.style.position = "fixed";
  botao.style.left = novoX + "px";
  botao.style.top = novoY + "px";
}

// 2. Ação ao aceitar
function aceitou() {
  document.getElementById("welcome-section").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");

  // Inicia funções dinâmicas
  setInterval(atualizarContador, 1000);
  setInterval(criarCoracao, 300);

  // Toca a música automaticamente
  const musica = document.getElementById("background-music");
  musica
    .play()
    .catch((e) =>
      console.log(
        "A reprodução automática pode ser bloqueada pelo navegador até interação.",
      ),
    );

  // Dispara efeito de máquina de escrever da carta
  setTimeout(function () {
    iniciarMaquinaDeEscrever();
  }, 10000);
}

// 3. Controle do Player (Play/Pause)
function togglePlay() {
  const musica = document.getElementById("background-music");
  const btn = document.getElementById("play-btn");
  if (musica.paused) {
    musica.play();
    btn.innerText = "⏸️";
  } else {
    musica.pause();
    btn.innerText = "▶️";
  }
}

// 4. Contador de Tempo Real (Ajuste a data do seu namoro aqui!)
const dataInicio = new Date(2022, 5, 8, 20, 0, 0); // Ex: 12 de Junho de 2024 (Mês 5 = Junho)

function atualizarContador() {
  const agora = new Date();
  const diferencaEmMs = agora - dataInicio;

  const dias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencaEmMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutos = Math.floor((diferencaEmMs % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencaEmMs % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = dias < 10 ? "0" + dias : dias;
  document.getElementById("hours").innerText = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutes").innerText =
    minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("seconds").innerText =
    segundos < 10 ? "0" + segundos : segundos;
}

// 5. Gerador da Chuva de Corações
function criarCoracao() {
  const container = document.getElementById("heart-rain-container");
  if (!container) return;

  const coracao = document.createElement("div");
  coracao.classList.add("falling-heart");
  coracao.innerText = "❤️";

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 15 + 10 + "px";
  coracao.style.animationDuration = Math.random() * 3 + 2 + "s";

  container.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

// 6. Efeito Máquina de Escrever para a Carta
const textoCarta =
  "Meu amor, criar esse site foi a forma que encontrei de usar o que sei para te mostrar o quanto você é importante para mim. Cada pedaço de código aqui representa um momento nosso, um sorriso que você me deu e a certeza de que quero codificar o meu futuro ao seu lado. Feliz Dia dos Namorados! Te amo daqui até o infinito. ❤️";
let indexTexto = 0;

function iniciarMaquinaDeEscrever() {
  if (indexTexto < textoCarta.length) {
    document.getElementById("typewriter-text").innerHTML +=
      textoCarta.charAt(indexTexto);
    indexTexto++;
    setTimeout(iniciarMaquinaDeEscrever, 50); // Velocidade da digitação (ms)
  }
}
