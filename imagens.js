//Váriaveis das imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemBandeira;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemEstrada = loadImage("imagens/estrada.png")
    imagemAtor = loadImage("imagens/ator-1.png")
    imagemCarro1 = loadImage("imagens/carro-1.png")
    imagemCarro2 = loadImage("imagens/carro-2.png")
    imagemCarro3 = loadImage("imagens/carro-3.png")
    imagemCarro4 = loadImage("imagens/carro-4.png")
    imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3,imagemCarro2, imagemCarro1, imagemCarro3, imagemCarro1, imagemCarro4]
    imagemBandeira = loadImage("imagens/bandeirawinner.png");

    somDaTrilha = loadSound("sons/Top-Gear2.mp3");
    somDaColisao = loadSound("sons/Cow-Dead3.mp3");
    somDoPonto = loadSound("sons/Winner.mp3");
  }