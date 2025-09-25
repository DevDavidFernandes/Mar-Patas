// Seleciona o botão hamburguer (abre o menu mobile)
const hamburgerButton = document.querySelector("#hamburgerButton");

// Seleciona o botão de fechar (X) do menu mobile
const closeButton = document.querySelector("#closeButton");

// Seleciona o container do menu mobile
const mobileMenu = document.querySelector("#mobileMenu");

// Evento de clique no botão hamburguer
// -> adiciona a classe "flex" para exibir o menu mobile
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
});

// Evento de clique no botão fechar (X)
// -> remove a classe "flex" e esconde o menu mobile
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});

// Seleciona todos os slides
const slides = document.querySelectorAll('.slider');

// Seleciona os botões de navegação (anterior e próximo)
const btnPrev = document.querySelector('.slider-btn.prev');
const btnNext = document.querySelector('.slider-btn.next');

// Índice do slide atual
let current = 0;

// Variável para guardar o autoplay (setInterval)
let autoPlay;

/* ========================= */
/* Funções de exibição       */
/* ========================= */

// Mostra um slide específico pelo índice
function showSlide(index) {
  // Remove a classe "on" de todos os slides
  slides.forEach(slide => slide.classList.remove('on'));
  
  // Adiciona a classe "on" apenas no slide atual
  slides[index].classList.add('on');
}

/* ========================= */
/* Navegação manual          */
/* ========================= */

// Avança para o próximo slide
function nextSlide() {
  // Se passar do último, volta pro primeiro (ciclo infinito)
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Volta para o slide anterior
function prevSlide() {
  // Se for antes do primeiro, vai pro último (ciclo infinito)
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

/* ========================= */
/* Controle do autoplay      */
/* ========================= */

// Inicia autoplay (muda slide a cada 2s)
function startAutoPlay() {
  autoPlay = setInterval(nextSlide, 2000);
}

// Para o autoplay
function stopAutoPlay() {
  clearInterval(autoPlay);
}

/* ========================= */
/* Eventos dos botões        */
/* ========================= */

// Botão "próximo"
// -> Para o autoplay e avança manualmente
btnNext.addEventListener('click', () => {
  stopAutoPlay();
  nextSlide();
});

// Botão "anterior"
// -> Para o autoplay e volta manualmente
btnPrev.addEventListener('click', () => {
  stopAutoPlay();
  prevSlide();
});

/* ========================= */
/* Inicialização do slider   */
/* ========================= */

// Mostra o primeiro slide ao carregar
showSlide(current);

// Começa o autoplay automaticamente
startAutoPlay();








const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 220, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -220, behavior: "smooth" });
});
