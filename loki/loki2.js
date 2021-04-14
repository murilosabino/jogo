function Loki1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="../artemis/artemis.css">
    </head>
    <header>
    <h1>Hora da ação!</h1>
    </header>
    <p> Loki decide animar as coisas, mas ainda não tem ideia de como fazer isso. Eis que a oportunidade perfeita aparece: Thor é chamado para resolver um problema bem longe do palácio e a brilhante ideia de se passar por Thor surge na mente.
    Imagine todas as oportunidades e regalias que Loki conseguiria se passando por Thor, mas também é muito perigoso pois alguém pode te reconhecer.
    Mas e se ninguém reconhecer?
    
    </p>
     <br> <br>
     <a href="fase3.html">O que você irá fazer?</a>`;
    var primeiraEscolha = prompt("1- Melhor tudo continuar tranquilo.\n2- Que chatice, hora de tornar as coisas mais interessantes.")
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
            var primeiraEscolha = prompt("1- Melhor tudo continuar tranquilo.\n2- Que chatice, hora de tornar as coisas mais interessantes.")
       
        }
    }
    }
    
    Loki1();