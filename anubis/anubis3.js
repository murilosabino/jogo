function Anubis1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="../artemis/artemis.css">
    </head>
    <header>
    <h1>Um inimigo conhecido...</h1>
    </header>
    <p> O impostor começa a falar pois sabe que não tem mais escapatória e diz que trabalha para um dos ladrões mais famosos do Egito: Olirum. <br> <br>
    Anubis, por sorte sabe onde vive Olirum e sem pensar duas vezes, parte em busca do tesouro roubado.
    Ao chegar no local, uma batalha é travada entre os dois, mas Anubis está sendo derrotado pois Olirum é muito mais forte e rápido.
    Olirum agarra Anubis e está prester a dar o golpe final.
    <br> <br>
    </p>
    <a href="fase4.html">O que você irá fazer?</a>`;
    var primeiraEscolha = prompt("1- Matar o guardião, traidores não são bem vindos \n2- Descobrir mais sobre o impostor");
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
            var primeiraEscolha = prompt("1- Matar o guardião, traidores não são bem vindos \n2- Descobrir mais sobre o impostor");
   
        }
    }
    }
    
    Anubis1();