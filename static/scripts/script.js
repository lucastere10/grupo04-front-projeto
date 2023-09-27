var api = '6407347946043276'

//definir qual heroi vai ser modificadodo

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
   event.preventDefault(); // nao limpar console log
   var id = document.querySelector(`input[name="pesquisa${int}"]`).value; // pegar o id do input
   fetch(`https://www.superheroapi.com/api.php/${api}/${id}/`) // requisitar dados da api
       .then(response => response.json()) // parse JSON
       .then(data => {
           console.log(data)
                      document.querySelector(`.heroi-img${int}`).src = data.image.url;
           document.querySelector(`.heroi-nome${int}`).textContent = data.name;
           document.querySelector(`.heroi-nome-real${int}`).textContent = data.biography[`full-name`]; //nao da pra passar por conta do "-"
           //document.querySelector(`.hero-primeira-aparicao`).textContent = data.biography[`first-appearance`]
           //pegar stats
           document.querySelector(`.poder-valor${int}`).textContent = data.powerstats[`power`]
           document.querySelector(`.velocidade-valor${int}`).textContent = data.powerstats[`speed`]
           document.querySelector(`.combate-valor${int}`).textContent = data.powerstats[`combat`]
           document.querySelector(`.inteligencia-valor${int}`).textContent = data.powerstats[`intelligence`]
           document.querySelector(`.forca-valor${int}`).textContent = data.powerstats[`strength`]
           document.querySelector(`.durabilidade-valor${int}`).textContent = data.powerstats[`durability`]
       })
       .catch(error => console.error(`Error:`, error));
};

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