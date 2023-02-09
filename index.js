// function loadpoke(){
//     const inputNome = document.getElementById('nome');
//     const url1 = 'https://pokeapi.co/api/v2/pokemon/';
//     const nome1 = inputNome.value;
//     const url = url1 + nome1;
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.clear();
//             console.log(data);
//         })
//         .catch((erro) => {
//             console.error(erro);
//         });
// }

// document.getElementById('btn').onclick = loadpoke;