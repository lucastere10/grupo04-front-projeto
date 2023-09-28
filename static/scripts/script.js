var api = '6407347946043276'            // Chave da API para pegar os valores, com npm da pra usar dotenv para armazenar um valor no arquivo .env
var totalPowerstats = [0, 0];           // TEM QUE CHAMAR ESSA MERDA PRA FUNCIONAR NAO ME PERGUNTE PORQUE MAS PRECISA
                                        // Mentira, precisa pq os valores nao podem ser null no inicio (eu acho :D)

//Definir qual heroi vai ser modificadodo
//Modificar Primeiro Herói
document.querySelector('.heroi1-pesquisa').addEventListener('submit', function(event){
    chamarQuery(1);
});
//Modificar Segundo Herói
document.querySelector('.heroi2-pesquisa').addEventListener('submit', function(event){
    chamarQuery(2);
});

//pegar informações do personagem através da API
function chamarQuery(int) {
    //resetar resultados
    resetVencedor();
    resetPerdedor();
    resetEmpate();
    event.preventDefault(); // nao limpar console log, remover depois

    // IMPORTANTE!!! AQUI ACONTECE A MAGIA //

    var id = document.querySelector(`input[name="pesquisa${int}"]`).value;                                              // pegar o id do input
    fetch(`https://www.superheroapi.com/api.php/${api}/${id}/`)                                                         // GENTE É AQUI QUE REQUISITA OS DADOS DA API
        .then(response => response.json())                                                                              // response JSON, gera uma promessa
        .then(data => {                                                                                                  
            console.log(data);
            document.querySelector(`.heroi-img${int}`).src = data.image.url;
            document.querySelector(`.heroi-nome${int}`).textContent = data.name;
            document.querySelector(`.heroi-nome-real${int}`).textContent = data.biography[`full-name`];                 // tem que passar assim por conta do "-"
            //document.querySelector(`.hero-primeira-aparicao`).textContent = data.biography[`first-appearance`]        // descontinuado
            //pegar stats
            document.querySelector(`.poder-valor${int}`).textContent = data.powerstats[`power`]
            document.querySelector(`.velocidade-valor${int}`).textContent = data.powerstats[`speed`]
            document.querySelector(`.combate-valor${int}`).textContent = data.powerstats[`combat`]
            document.querySelector(`.inteligencia-valor${int}`).textContent = data.powerstats[`intelligence`]
            document.querySelector(`.forca-valor${int}`).textContent = data.powerstats[`strength`]
            document.querySelector(`.durabilidade-valor${int}`).textContent = data.powerstats[`durability`]

            // Calcular total powerstats para esse heroi
            // Coloquei int-1 porque tava procurando totalPowerstats[0] e nao encontrava
            // Agora totalPowerstats[1] = Player 1 e totalPowerstats[1] = Player 2
            // Meu primo disse que caso o valor seja null, colocar para passar "|| 0" no lugar
            // Meu primo tambem disse que a principio essa bagaça é uma string, entao tem que usar Number()
            // Meu primo = Copilot, obrigado deu tudo certo.
            totalPowerstats[int - 1] =  (Number(data.powerstats.power)          || 0) +
                                        (Number(data.powerstats.speed)          || 0) +
                                        (Number(data.powerstats.combat)         || 0) +
                                        (Number(data.powerstats.intelligence)   || 0) +
                                        (Number(data.powerstats.strength)       || 0) +
                                        (Number(data.powerstats.durability)     || 0);

            // Chamar funcao para comparar os powerstats de cada comédia
            compararPowerstats();
            console.log(`PowerStats = ${totalPowerstats}`) // verificar powerstats de que nao tem valor (tudo null)
        })
        .catch(error => console.error(`Error:`, error));
};

function compararPowerstats() {
        //verificar qual jogador tem o maior somatorio de stats
        var vencedor = totalPowerstats[0] > totalPowerstats[1] ? 1 : 2;
        var perdedor = totalPowerstats[0] < totalPowerstats[1] ? 1 : 2;

        //alert(`Player ${vencedor} venceu o duelo!`);          // removido pois os valores iniciais agora atrapalham
        
        //adicionar classe vencedor no heroi que vencer
        if (totalPowerstats[0] != totalPowerstats[1]){         
            // se os herois tiverem powerstats diferentes, definir ganhador e perdedor
            document.querySelector(`.heroi${vencedor}-card`).classList.add('vencedor');
            document.querySelector(`.heroi${perdedor}-card`).classList.add('perdedor');
        } else {                                                                            
            //caso contrário, dar empate para os comédias
            document.querySelector(`.heroi1-card`).classList.add('empate');
            document.querySelector(`.heroi2-card`).classList.add('empate');
        } 
}

// resetar a classe winner cada vez que rolar uma trocação sincera
function resetVencedor() {
    document.querySelector('.heroi1-card').classList.remove('vencedor');
    document.querySelector('.heroi2-card').classList.remove('vencedor');
}
// resetar a classe loser cada vez que rolar uma trocação sincera
function resetPerdedor() {
    document.querySelector('.heroi1-card').classList.remove('perdedor');
    document.querySelector('.heroi2-card').classList.remove('perdedor');
}
// resetar a classe empate cada vez que rolar uma trocação sincera
function resetEmpate() {
    document.querySelector('.heroi1-card').classList.remove('empate');
    document.querySelector('.heroi2-card').classList.remove('empate');
}

// definir qual dos dois players está selecionado
function chamarQueryPlayerSelecionado(idcharacter) {
    //pegar o id do input com nome options que está selecionado
    var selectedPlayer = document.querySelector('input[name="options"]:checked').id;
    //verificar se o input é o primeiro ou o segundo.
    var int = selectedPlayer === 'option1' ? 1 : 2;
     setInputChamarQuery(int, idcharacter);
}

//chamar personagem pré definido
function  setInputChamarQuery(int, id) {
    document.querySelector(`input[name="pesquisa${int}"]`).value = id; // definir id do heroi
    chamarQuery(int, id); // chamar a função chamarQuery()
}

window.onload = function() {
    chamarQuery(1);
    chamarQuery(2);
};
