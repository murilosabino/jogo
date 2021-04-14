function Loki1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="../artemis/artemis.css">
    </head>
    <header>
    <h1>Salvo por pouco!</h1>
    </header>
    <p> Loki se transforma em uma mosca e voa para fora do palácio. Muito inteligente, Loki como mosca entra por uma janela de banheiro que estava aberta e sai de lá como se nada tivesse acontecido. <br> <br>
    Thor pergunta para ele o que aconteceu e Loki diz que estava no banheiro desde a sua saída, pois a carne de cervo não fez muito bem.
    Para sua sorte, Thor concorda e todos voltam a celebrar o evento.
    <br> <br>
    <h2>PARABÉNS, VOCÊ CONCLUIU O JOGO E LOKI CONSEGUIU FAZER UMA TRAVESSURA SEM SER DESCOBERTO.</h2>
    
    
    
    </p>
    <a href="../creditos.html">Créditos</a>`;
    var primeiraEscolha = prompt("1- Se transformar em uma cadeira.\n2- Se transformar em uma mosca. ");
    while(true){
        if(primeiraEscolha == 2){
            document.write(acertou)
            break}
        else if(primeiraEscolha == 1){
            document.write(`
            
            
            <h1>GAME OVER</h1> <br> <br>
        
        <a href="../index.html">Clique para voltar ao início</a>`)
        break;
        }
        else{
            alert("Digite 1 ou 2");
            var primeiraEscolha = prompt("1- Se transformar em uma cadeira.\n2- Se transformar em uma mosca. ");
        }
    }
    }
    
    Loki1();