function Artemis1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="artemis.css">
    </head>
    <header>
    <h1>Um bilhete nada amigável...</h1>
    </header>
    <p> Artemis se aproxima do corpo do mensageiro, pega o bilhete e se assusta com o conteúdo. <br> <br> 
    O bilhete é de Hera, e diz o seguinte: <br> “Nossa batalha ainda não terminou, volte e me encare! Você tem 2 dias,
     me encontre no campo de batalha, ao primeiro raio de sol. Se tiver coragem...”. <br> <br>
     Artemis congela, pois Hera está falando da batalha que aconteceu durante a Guerra de Troia, quando com um 
     sorriso irônico na face e sem nenhuma dificuldade, Hera partiu ao meio o arco de Ártemis, que fugiu para o 
     Olimpo em lágrimas.</p>
     <br> <br>
     <a href="fase3.html">O que você irá fazer?</a>`;
    var primeiraEscolha = prompt("1- Pega o bilhete para saber o que aconteceu\n2- Manda retirar o corpo que está obstruindo a passagem. ")
    while(true){
        if(primeiraEscolha == 1){
            document.write(acertou)
            break}
        else if(primeiraEscolha == 2){
            document.write(`
        
            
            <h1>GAME OVER</h1> <br> <br>
        
        <a href="../index.html">Clique para voltar ao início</a>`)
        break;
        }
        else{
            alert("Digite 1 ou 2");
            var primeiraEscolha = prompt("1- Pega o bilhete para saber o que aconteceu\n2- Manda retirar o corpo que está obstruindo a passagem. ")
    
        }
    }
    }
    
    Artemis1();