var api = '6407347946043276' //API para pegar os valores
var totalPowerstats = [0, 0]; // TEM QUE CHAMAR ESSA MERDA PRA FUNCIONAR KRL FIQUEI 300 HORAS NESSA MERDA

//Definir qual heroi vai ser modificadodo
//Modificar Primeiro Herói
document.querySelector('.heroi1-pesquisa').addEventListener('submit', function(event){
    chamarQuery(1);
});

//Modificar Segundo Herói
document.querySelector('.heroi2-pesquisa').addEventListener('submit', function(event){
    chamarQuery(2);
});




//pegar informações do personagem
//definir arquivo
function chamarQuery(int) {
    resetWinner()
    event.preventDefault(); // nao limpar console log
    var id = document.querySelector(`input[name="pesquisa${int}"]`).value; // pegar o id do input
    fetch(`https://www.superheroapi.com/api.php/${api}/${id}/`) // requisitar dados da api
        .then(response => response.json()) // parse JSON, ler essa bobeirinha
        .then(data => {
            console.log(data)
            document.querySelector(`.heroi-img${int}`).src = data.image.url;
            document.querySelector(`.heroi-nome${int}`).textContent = data.name;
            document.querySelector(`.heroi-nome-real${int}`).textContent = data.biography[`full-name`]; // tem que passar assim por conta do "-"
            //document.querySelector(`.hero-primeira-aparicao`).textContent = data.biography[`first-appearance`] // descontinuado
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
            // Meu primo tambem disse que a principio essa bagaça é uma string, entao tem que passar como numero
            totalPowerstats[int - 1] =  (Number(data.powerstats.power)          || 0) +
                                        (Number(data.powerstats.speed)          || 0) +
                                        (Number(data.powerstats.combat)         || 0) +
                                        (Number(data.powerstats.intelligence)   || 0) +
                                        (Number(data.powerstats.strength)       || 0) +
                                        (Number(data.powerstats.durability)     || 0);
            // Call comparePowerstats function
            compararPowerstats();
            console.log(`PowerStats = ${totalPowerstats}`) // verificar powerstats de que nao tem valor (tudo null)
        })
        .catch(error => console.error(`Error:`, error));
};

function compararPowerstats() {
    // Esquece essa merda
    // Verificar se ambos os herois foram chamados, comparar os valores e determinar o vencedor dessa bagaça
    // Tive que colocar 
    //if (totalPowerstats[0] > 0 && totalPowerstats[1] > 0) {
        var vencedor = totalPowerstats[0] > totalPowerstats[1] ? 1 : 2;

        //tirar o alerta porque agora os valores iniciais atrapalham
        //alert(`Player ${vencedor} venceu o duelo!`); 

        //adicionar classe vencedor no heroi que vencer
        document.querySelector(`.heroi${vencedor}-card`).classList.add('vencedor');
    //}   
}

// resetar a classe winner cada vez que rolar uma trocação sincera
function resetWinner() {
    document.querySelector('.heroi1-card').classList.remove('vencedor');
    document.querySelector('.heroi2-card').classList.remove('vencedor');
}

window.onload = function() {
    chamarQuery(1);
    chamarQuery(2);
};

//pegar informações do personagem
//definir arquivo
// document.querySelector('.heroi1-pesquisa').addEventListener('submit', function(event) {
//    event.preventDefault(); // nao limpar console log
//    var id = document.querySelector('input[name="pesquisa1"]').value; // pegar o id do input
//    fetch(`https://www.superheroapi.com/api.php/${api}/${id}/`) // requisitar dados da api
//        .then(response => response.json()) // parse JSON
//        .then(data => {
//            console.log(data)
//            // 
//            document.querySelector('.heroi-img').src = data.image.url;
//            document.querySelector('.heroi-nome').textContent = data.name;
//            document.querySelector('.heroi-nome-real').textContent = data.biography['full-name']; //nao da pra passar por conta do "-"
//            //document.querySelector('.hero-primeira-aparicao').textContent = data.biography['first-appearance']
//            //pegar stats
//            document.querySelector('.poder-valor').textContent = data.powerstats['power']
//            document.querySelector('.velocidade-valor').textContent = data.powerstats['speed']
//            document.querySelector('.combate-valor').textContent = data.powerstats['combat']
//            document.querySelector('.inteligencia-valor').textContent = data.powerstats['intelligence']
//            document.querySelector('.forca-valor').textContent = data.powerstats['strength']
//            document.querySelector('.durabilidade-valor').textContent = data.powerstats['durability']
//        })
//        .catch(error => console.error('Error:', error));
// });