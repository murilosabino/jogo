function Anubis1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="../artemis/artemis.css">
    </head>
    <header>
    <h1>Um impostor!</h1>
    </header>
    <p> Anubis chama o guardião para uma sala isolada na pirâmide e começa o interrogatório. 
    O guardião a principio nega tudo que Anubis pergunta, mas algo ainda está estranho...<br> <br>
    Anubis é inteligente e faz uma última pergunta: o guardião fez a ronda na ala 31B conforme foi ordenado?
    O guardião prontamente diz que sim, tudo estava sem nada anormal.
    Antes mesmo do guardião terminar a frase, Anubis avança! Não existe nenhuma ala 31B.
    </p>
     <br> <br>
     <a href="fase3.html">O que você irá fazer?</a>`;
    var primeiraEscolha = prompt("1- Aceitar que ninguém achou nada, afinal o tesouro nem era tão valioso\n2- Interrogar esse guardião suspeito ")
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
        var primeiraEscolha = prompt("1- Aceitar que ninguém achou nada, afinal o tesouro nem era tão valioso\n2- Interrogar esse guardião suspeito ")
    
    }
}
}

Anubis1();