function Anubis1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="../artemis/artemis.css">
    </head>
    <header>
    <h1>Eu te invoco!</h1>
    </header>
    <p> Ammit aparece e consegue interceptar antes que Olirum acabasse com Anúbis. O ladrão não tem 
    mais reação, já foi mordido ferozmente por Ammit que está sedente por comida e ataca sem cessar.<br> <br>
    Já não há mais escapatória, Olirum entrou em um beco sem saída. Apenas seus gritos são ecoados pelo ambiente. <br> <br>
    <h2>PARABÉNS, VOCÊ CONCLUIU O JOGO E ANUBIS CONSEGUIU RECUPERAR O TESOURO.</h2>
    
    
    </p>
    <a href="../creditos.html">Créditos</a>`;
    var primeiraEscolha = prompt("1- Invocar Ammit para devorar Olirum\n2- Aceitar a morte trágica ");
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
            var primeiraEscolha = prompt("1- Invocar Ammit para devorar Olirum\n2- Aceitar a morte trágica ");
    
        }
    }
    }
    
    Anubis1();