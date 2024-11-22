// ---------------- FAQS ---------------
// Seleciona todos os elementos com a classe 'accordion'
const accordions = document.querySelectorAll('.accordion');

// Itera sobre cada elemento 'accordion'
for (let i = 0; i < accordions.length; i++) {
    // Adiciona um evento de clique ao elemento atual
    accordions[i].addEventListener('click', function () {
        // Fecha todos os outros acordes
        for (let j = 0; j < accordions.length; j++) {
            if (i !== j) {
                // Remove a classe 'active' dos corpos dos outros accordions
                const otherBody = accordions[j].querySelector('.accordion-body');
                otherBody.classList.remove('active');
            }
        }

        // Alterna a classe 'active' no elemento encontrado
        const body = accordions[i].querySelector('.accordion-body');//encontra o elemento accordion-body dentro do accordion atual e põe na const "body"
        
        body.classList.toggle('active');//Se a classe active não está presente: toggle() adiciona a classe ao elemento.
        //Se a classe já está presente: toggle() remove a classe do elemento. metodo - "toggle"(alterar)
    });
}
// .............. FIM FAQS .............

// ------------ MAP INTERATIVO NO SITE-------
// Inicializando o mapa em São Luís-MA (Rua Ceará, Vila Isabel)
// Não adicionei por satelite porque não encontrei gratuito
var map = L.map('map').setView([-2.532573, -44.310517], 15); // Coordenadas de São Luís-MA e zoom ajustado

// Adicionando o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionando um marcador na Rua Ceará, Vila Isabel (São Luís-MA)
var marker = L.marker([-2.532573, -44.310517]).addTo(map); // Latitude e Longitude do marcador
marker.bindPopup("<b>Rua Ceará, Vila Isabel</b><br>São Luís-MA, CEP: 65.082-099").openPopup();
// .............. FIM DO MAPA .............


// ---------------- SLIDER ---------------
// Selecionar as imagens do slider
let imagens = document.querySelectorAll('.imagem-slider');
let indiceAtivo = 0;  // Controla a imagem ativa

// Função para mudar a imagem
function mudarImagem() {
    // Remover a classe 'ativo' da imagem atual
    imagens[indiceAtivo].classList.remove('ativo');
    
    // Atualizar o índice para a próxima imagem
    indiceAtivo = (indiceAtivo + 1) % imagens.length; // Vai voltar para a primeira imagem após a última
    
    // Adicionar a classe 'ativo' na nova imagem
    imagens[indiceAtivo].classList.add('ativo');
}

// Função para ir à imagem anterior
function imagemAnterior() {
    // Remover a classe 'ativo' da imagem atual
    imagens[indiceAtivo].classList.remove('ativo');
    
    // Atualizar o índice para a imagem anterior
    indiceAtivo = (indiceAtivo - 1 + imagens.length) % imagens.length; // Vai voltar para a última imagem se estiver na primeira
    
    // Adicionar a classe 'ativo' na nova imagem
    imagens[indiceAtivo].classList.add('ativo');
}

// Função para ir à próxima imagem
function imagemProxima() {
    // Remover a classe 'ativo' da imagem atual
    imagens[indiceAtivo].classList.remove('ativo');
    
    // Atualizar o índice para a próxima imagem
    indiceAtivo = (indiceAtivo + 1) % imagens.length; // Vai voltar para a primeira imagem após a última
    
    // Adicionar a classe 'ativo' na nova imagem
    imagens[indiceAtivo].classList.add('ativo');
}

// Iniciar o slider (passar a imagem a cada 5 segundos)
setInterval(mudarImagem, 5000);

// Adicionar evento de clique nos botões
document.getElementById('anterior').addEventListener('click', imagemAnterior);
document.getElementById('proximo').addEventListener('click', imagemProxima);
// ............ FIM SLIDER ..........

