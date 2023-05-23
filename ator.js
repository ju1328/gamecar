
//Váriaveis do Ator
let xAtor = 85;
let yAtor = 365;
let colisao = false;
let minhaPontuacao = 0;
let xBandeira = 100;
let yBandeira = 40;

//Códigos do ator
function mostraAtor (){
    image(imagemAtor, xAtor, yAtor, 30, 30);
  }

function movimentaAtor (){
    //MOVIMENTA PARA CIMA E PARA BAIXO
    if (keyIsDown(87)){
       yAtor -=2;
     }
   
    if (keyIsDown(83)){
        if (podeSeMover()){
       yAtor += 2;
     }
    }
    //MOVIMENTA PARA OS LADOS
      if (keyIsDown(65)){
         xAtor -=10;
      }
      if (keyIsDown(68)){
        xAtor += 10;
     }
    }
function verificaColisaoAtor (){
      for (let i = 0; i < imagemCarros.length; i = i + 1){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao){
            colidiuVolta ()
            somDaColisao.play();
            if (pontosMaiorQueZero()){
                minhaPontuacao -= 1;
         }
        }
      }
    }
function colidiuVolta (){
      yAtor = 370;
    }

function incluiPontos(){
        stroke(255);
        textAlign(CENTER);
        fill(25, 145, 40);
        rect(285, 5, 30, 25);
        stroke(0);
        textSize(25);
        fill(255);
        text(minhaPontuacao, width/ 2,26);
      }

function meuPlacar (){
        if (yAtor < 30){
            minhaPontuacao += 1;
            somDoPonto.play();
            colidiuVolta();
        }
        
    } 

function pontosMaiorQueZero (){
    return minhaPontuacao > 0;
}

function podeSeMover (){
    return yAtor < 360;
}

function avisosGame (){
    if(minhaPontuacao == 10){
        image(imagemBandeira, xBandeira, yBandeira, 400, 200)
        stroke(0)
        fill(0, 85,90)
        textSize(55)
        text("Você venceu!", 297,149);
        stroke(0)
        fill(255, 200,75)
        textSize(55)
        text("Você venceu!", width/ 2,150);
    }
}