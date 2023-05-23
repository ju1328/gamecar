
function setup() {
  createCanvas(600, 400);
  //somDaTrilha.loop();
}


function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarros();
  voltaPosicaoInicialCarro ();
  verificaColisaoAtor();;
  incluiPontos();
  meuPlacar();
  avisosGame ();
}

