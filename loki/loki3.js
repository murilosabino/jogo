function Loki1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="../artemis/artemis.css">
    </head>
    <header>
    <h1>Ajuda (in)grata.</h1>
    </header>
    <p> Loki diz a todos que irá resolver o problema de Thor, para que este possa voltar e aproveitar a noite.
    Ninguém sabe, mas isso é mentira. Loki só vai até a parte do fora do palácio, se afasta um pouco e procura um lugar vazio e escuro para conseguir se transformar.
    Passados 10 minutos, “Thor” (que na verdade é Loki) entra no saguão e todos vão até ele para conversar e oferecer diversas bebidas, comidas e outras regalias.
    <br> <br> Loki está se aproveitando da situação e seu plano parece funcionar perfeitamente, mas o inesperado acontece: o verdadeiro Thor entra pela porta.
    Todos se chocam, ninguém sabe o que está acontecendo!<br> <br> Agora Loki precisa agir rápido, o que fazer?
    <br> <br>
    
    </p>
    <a href="fase4.html">O que você irá fazer?</a>`;
    var primeiraEscolha = prompt("1- Se transformar em Thor. \n2- Manter a ordem e o respeito.");
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
            var primeiraEscolha = prompt("1- Se transformar em Thor. \n2- Manter a ordem e o respeito.");
        }
    }
    }
    
    Loki1();