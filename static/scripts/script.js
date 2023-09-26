var api = '6407347946043276'

//pegar informações do personagem
//definir arquivo
document.querySelector('.form-pesquisa').addEventListener('submit', function(event) {
   event.preventDefault(); // nao limpar console log
   var id = document.querySelector('input[name="pesquisa"]').value; // pegar o id do input
   fetch(`https://www.superheroapi.com/api.php/${api}/${id}/`) // requisitar dados da api
       .then(response => response.json()) // parse JSON
       .then(data => {
           console.log(data)
           // 
           document.querySelector('.heroi-img').src = data.image.url;
           document.querySelector('.heroi-nome').textContent = data.name;
           document.querySelector('.heroi-nome-real').textContent = data.biography['full-name']; //nao da pra passar por conta do "-"
           //document.querySelector('.hero-primeira-aparicao').textContent = data.biography['first-appearance']
           //pegar stats
           document.querySelector('.poder-valor').textContent = data.powerstats['power']
           document.querySelector('.velocidade-valor').textContent = data.powerstats['speed']
           document.querySelector('.combate-valor').textContent = data.powerstats['combat']
           document.querySelector('.inteligencia-valor').textContent = data.powerstats['intelligence']
           document.querySelector('.forca-valor').textContent = data.powerstats['strength']
           document.querySelector('.durabilidade-valor').textContent = data.powerstats['durability']
       })
       .catch(error => console.error('Error:', error));
});