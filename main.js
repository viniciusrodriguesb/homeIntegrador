/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {

  //EVENTO CLICK, QUE APÓS CLICAR ELE VAI CHAMAR A CLASSE SHOW, FAZENDO COM QUE ABRA O MENU HAMBURGUER
  

  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
// E VICE-VERSA PARA QUANDO O USUARIO CLICAR NO "X" PARA FECHAR O MENU
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}


/* mudar o header da página quando der scroll */
/* ESSE AQUI VOCE PODE TIRAR SE NÃO GOSTAR, SERVE PARA QUANDO DER O SCROLL DEIXAR UMA SOMBRA NO MENU/HEADER */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* CARROSSEL DOS TESTEMUNHOS */
/*ESTE JS JÁ VEM PRONTO VOCE SO INSERE A CLASSE QUE BOTOU NO SWIPPER LÁ NO HTML, DEPOIS EU LEMBRO QUAL SITE USEI PARA ISSO
  E TE PASSO OS DOCUMENTOS
*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
/* ESSE AQUI É O SCROLLREVEAL AQUI É QUE FAZ AS COISAS APARECEREM COM EFEITO */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  /* NESTA AREA VOCE INSERE AS CLASSES/IDS QUE DESEJA REALIZAR O EFEITO AO DESCER/SUBIR MOUSE */
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
/* ESSE AQUI É O EFEITO DE SUBIR PARA O TOPO DA PAGINA, SE NÃO GOSTAR PODE TIRAR FICA A VONTADE */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO AO CLICAR */
const sections = document.querySelectorAll(' main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// TODOS OS EVENTS QUE UTILIZAM O SCROLL 
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
