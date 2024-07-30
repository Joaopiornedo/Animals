var foto =document.getElementById("mainft")
var botao1 = document.getElementById("btn-1")
var botao2 = document.getElementById("btn-2")
var botao3 = document.getElementById("btn-3")
var article = document.getElementById("msg");
var h1 = article.querySelector("h1");
var h4 = article.querySelector("h4");
var p = article.querySelector("p");

function btn_main_1() {
    h1.innerHTML = "A Arara Vermelha: Um Ícone da Floresta Amazônica";
    h4.innerHTML = "Características Gerais";
    p.innerHTML = "A arara vermelha, cientificamente conhecida como Ara macao, é uma das espécies mais emblemáticas de papagaios da América do Sul. Esta ave de plumagem vibrante exibe uma impressionante combinação de vermelho, amarelo e azul. As araras vermelhas são conhecidas por seu grande porte, medindo cerca de 90 cm de comprimento e pesando até 1,5 kg. Suas penas são predominantemente vermelhas, com detalhes azuis nas asas e cauda, e uma faixa amarela nas asas. Além de sua beleza, são aves inteligentes e sociais, frequentemente vistas em pares ou grupos familiares.";
    botao1.style.width = "4.5em"
    botao1.style.height = "4.5em"
    botao1.style.background = "#FBB13C"
    botao2.style.width = "3.5em"
    botao2.style.height = "3.5em"
    botao2.style.background = ""
    botao3.style.width = "3.5em"
    botao3.style.height = "3.5em"
    botao3.style.background = ""
    foto.style.backgroundImage= "url(../src/img/ft-1.jpg)"
}
function btn_main_2() {
    h1.innerHTML = "Habitat e Distribuição";
    h4.innerHTML = "Onde Encontrar a Arara Vermelha";
    p.innerHTML = "A arara vermelha habita as florestas tropicais da América Central e do Sul, com uma presença marcante na Floresta Amazônica. Seu habitat inclui áreas de floresta densa, bem como florestas de galeria próximas a rios e áreas pantanosas. Estas aves preferem regiões onde possam encontrar árvores altas para nidificação e fontes abundantes de alimentos, como frutas, sementes e nozes. A destruição de seu habitat natural devido ao desmatamento e à expansão agrícola tem impactado significativamente suas populações, tornando a conservação dessas áreas um fator crucial para sua sobrevivência.";
    botao1.style.width = "3.5em"
    botao1.style.height = "3.5em"
    botao1.style.background = ""
    botao2.style.width = "4.5em"
    botao2.style.height = "4.5em"
    botao2.style.background = "#FBB13C"
    botao3.style.width = "3.5em"
    botao3.style.height = "3.5em"
    botao3.style.background = ""
    foto.style.backgroundImage= "url(../src/img/ft-2.jpg)"
}
function btn_main_3() {
    h1.innerHTML = "Comportamento e Reprodução";
    h4.innerHTML = "Vida Social e Ciclo Reprodutivo";
    p.innerHTML = "As araras vermelhas são aves extremamente sociais e monogâmicas, formando pares que duram por toda a vida. Elas demonstram comportamentos de cooperação e comunicação avançada, utilizando uma variedade de vocalizações para interagir umas com as outras. O período reprodutivo dessas aves ocorre geralmente na estação chuvosa. Os casais escolhem cavidades em árvores altas para construir seus ninhos, onde a fêmea põe de 2 a 4 ovos. Os pais se revezam na incubação dos ovos e no cuidado dos filhotes, que permanecem no ninho por cerca de 3 meses antes de estarem prontos para voar. A dedicação parental e os fortes laços sociais são fundamentais para o desenvolvimento e a sobrevivência dos filhotes.";
    botao1.style.width = "3.5em"
    botao1.style.height = "3.5em"
    botao1.style.background = ""
    botao2.style.width = "3.5em"
    botao2.style.height = "3.5em"
    botao2.style.background = ""
    botao3.style.width = "4.5em"
    botao3.style.height = "4.5em"
    botao3.style.background = "#FBB13C"
    foto.style.backgroundImage= "url(../src/img/ft-3.jpg)"
    
}
//Cursor Efect
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#E01E00"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

//Leading Page Efect
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});