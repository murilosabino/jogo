function Artemis1(){
    var acertou = `
    <head>
    <link rel="stylesheet" href="artemis.css">
    </head>
    <header>
    <h1>Que comecem os treinos!</h1>
    </header>
    <p> Sem tempo para maiores conversas, Artemis pega seu arco, dezenas de flechas e parte o campo 
    de treinamento. <br> <br>
    Após horas de treinamento, seus disparos estão cada vez mais precisos e ágeis. Dos últimos 10 disparos, 9 acertaram
     o alvo em cheio e 1 atravessou o alvo por completo. <br> <br>
    Artemis está confiante e sentindo que dessa vez pode derrotar Hera, ainda mais por ter mais um dia inteiro de 
    treinamento, mas algo assustador acontece... <br> <br>
    Hera aparece no campo de treinamento e diz:
    -Ora ora, parece que alguém acha que pode me vencer... Sinto muito, mas você não terá chance nenhuma! <br> <br>
    Artemis não responde e Hera vira de costas, se tornando uma presa fácil para a caçadora.
    </p> <br>
    <a href="fase4.html">O que você irá fazer?</a>`;
    var primeiraEscolha = prompt("1- Rasga o bilhete pois essa é uma batalha passada, não há motivo para reviver o confronto. \n2- Começa a se preparar desde agora, 2 dias de treinamento é o tempo que você precisa para voltar à ativa! ");
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
            var primeiraEscolha = prompt("1- Rasga o bilhete pois essa é uma batalha passada, não há motivo para reviver o confronto. \n2- Começa a se preparar desde agora, 2 dias de treinamento é o tempo que você precisa para voltar à ativa! ");
    
        }
    }
    }
    
    Artemis1();