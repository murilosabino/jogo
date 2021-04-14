function Artemis1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="artemis.css">
    </head>
    <header>
    <h1>Flecha fatal!</h1>
    </header>
    <p> Artemis ajeita o arco, prepara a flecha e mira, tudo isso tão rápido que Hera nem se dá 
    conta do que está acontecendo. <br> <br>
    O disparo foi feito, a flecha rasga o ar em uma velocidade tão grande que se torna praticamente invisível, 
    apenas o silvo é identificável, mas Hera não identificou tão rápido assim. Quando tentou desviar, 
    a flecha já havia cravado em suas costas e atravessado seu peito.
    <br> <br> Artemis se aproxima e fala:<br>
    - Acabou pra você Hera, deveria ter me matado quando teve chance... Te falta ódio!
    <br> <br> <h2>PARABÉNS, VOCÊ CONCLUIU O JOGO E ARTEMIS TEVE A SUA VINGANÇA.</h2>
    
    </p>
    <a href="../creditos.html">Créditos</a>`;
    var primeiraEscolha = prompt("1- Hora de atacar! Um momento de indefesa é o melhor momento para atacar seu inimigo! Na guerra vale tudo! \n2- Não irei atacar um inimigo pelas costas, prefiro um combate honesto. ");
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
            var primeiraEscolha = prompt("1- Hora de atacar! Um momento de indefesa é o melhor momento para atacar seu inimigo! Na guerra vale tudo! \n2- Não irei atacar um inimigo pelas costas, prefiro um combate honesto. ");
    
        }
    }
    }
    
    Artemis1();