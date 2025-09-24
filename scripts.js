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

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;
let autoPlay; // vai guardar o setInterval

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide === slider.length - 1) ? 0 : currentSlide + 1;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide === 0) ? slider.length - 1 : currentSlide - 1;
  showSlider();
}

// autoplay
function startAutoPlay() {
  autoPlay = setInterval(nextSlider, 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

// eventos dos botões
btnNext.addEventListener('click', () => {
  stopAutoPlay(); 
  nextSlider();
});

btnPrev.addEventListener('click', () => {
  stopAutoPlay(); 
  prevSlider();
});

// inicia o slider
showSlider();
startAutoPlay();
