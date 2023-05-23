//Variáveis dos Carros
let xCarros = [600, 600, 600, 600, 600, 600, 800, 900];
let yCarros = [60, 110, 157, 210, 255, 305, 110, 305];
let comprimentoCarro = 50;
let alturaCarro = 30;

let velocidadeCarros = [2, 1.6, 3.2, 2, 2.4, 2.1, 1.6, 2.1];

// Código dos carros

function mostraCarros (){
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros [i], xCarros [i], yCarros [i], comprimentoCarro, alturaCarro);
   
    }
  }
  
  function movimentaCarros(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros [i];
    }
  }
  function voltaPosicaoInicialCarro (){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros [i] = 600;
      }
    }
  }
  function passouTodaATela(xCarros){
    return xCarros < - 50;
  }
  