
//button.addEventListener('click', função);
var btn1 = document.querySelector(".btn-1")
var btn2 = document.querySelector(".btn-2")
var btn3 = document.querySelector(".btn-3")


var btnAnima1 = btn1.querySelector("img")
var btnAnima2 = btn2.querySelector("img")
var btnAnima3 = btn3.querySelector("img")

var msg = document.getElementById("msg")
var h1 = msg.querySelector("h1")
var h4 = msg.querySelector("h4")
var p = msg.querySelector("p")

var card1 = document.querySelector(".img-card");



function trocar1() {
    btnAnima1.style.background = "#FBB13C"
    btnAnima2.style.background = "#4B8F8C"
    btnAnima3.style.background = "#4B8F8C"
   
    msg.style.backgroundImage = "url(src/img/ft-1.jpg)"
    h1.innerHTML = "A Arara Vermelha: Um Ícone da Floresta Amazônica"
    h4.innerHTML = "Características Gerais"
    p.innerHTML = "A arara vermelha, cientificamente conhecida como Ara macao, é uma das espécies mais emblemáticas de papagaios da América do Sul. Esta ave de plumagem vibrante exibe uma impressionante combinação de vermelho, amarelo e azul. As araras vermelhas são conhecidas por seu grande porte, medindo cerca de 90 cm de comprimento e pesando até 1,5 kg. Suas penas são predominantemente vermelhas, com detalhes azuis nas asas e cauda, e uma faixa amarela nas asas. Além de sua beleza, são aves inteligentes e sociais, frequentemente vistas em pares ou grupos familiares."


}
function trocar2() {
    btnAnima1.style.background = "#4B8F8C"
    btnAnima2.style.background = "#FBB13C"
    btnAnima3.style.background = "#4B8F8C"

    msg.style.backgroundImage = "url(src/img/ft-2.jpg)"
    h1.innerHTML = "Habitat e Distribuição"
    h4.innerHTML = "Onde Encontrar a Arara Vermelha"
    p.innerHTML = "A arara vermelha habita as florestas tropicais da América Central e do Sul, com uma presença marcante na Floresta Amazônica. Seu habitat inclui áreas de floresta densa, bem como florestas de galeria próximas a rios e áreas pantanosas. Estas aves preferem regiões onde possam encontrar árvores altas para nidificação e fontes abundantes de alimentos, como frutas, sementes e nozes. A destruição de seu habitat natural devido ao desmatamento e à expansão agrícola tem impactado significativamente suas populações, tornando a conservação dessas áreas um fator crucial para sua sobrevivência."
}
function trocar3() {
    btnAnima1.style.background = "#4B8F8C"
    btnAnima2.style.background = "#4B8F8C"
    btnAnima3.style.background = "#FBB13C"

    msg.style.backgroundImage = "url(src/img/ft-3.jpg)"
    h1.innerHTML = "Comportamento e Reprodução"
    h4.innerHTML = "Vida Social e Ciclo Reprodutivo"
    p.innerHTML = "As araras vermelhas são aves extremamente sociais e monogâmicas, formando pares que duram por toda a vida. Elas demonstram comportamentos de cooperação e comunicação avançada, utilizando uma variedade de vocalizações para interagir umas com as outras. O período reprodutivo dessas aves ocorre geralmente na estação chuvosa. Os casais escolhem cavidades em árvores altas para construir seus ninhos, onde a fêmea põe de 2 a 4 ovos. Os pais se revezam na incubação dos ovos e no cuidado dos filhotes, que permanecem no ninho por cerca de 3 meses antes de estarem prontos para voar. A dedicação parental e os fortes laços sociais são fundamentais para o desenvolvimento e a sobrevivência dos filhotes."
}

btn1.addEventListener('click', trocar1)
btn2.addEventListener('click', trocar2)
btn3.addEventListener('click', trocar3)