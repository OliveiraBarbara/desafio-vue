<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      loadPoke() {
        const inputNome = document.getElementById('nome');
        const nome = inputNome.value;
        const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
        fetch(url)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const types = data.types.map(typeInfo => typeInfo.type.name);
              const hab = data.abilities.map(abilitiesInfo => abilitiesInfo.ability.name);
              const carac = data.stats.map(statsInfo => statsInfo.stat.name);
              const caracN = data.stats.map(nInfo => nInfo.base_stat);
              document.getElementById('poke').innerHTML = data['name'];
              document.getElementById('tipo').innerHTML = `Tipos: ${types.join(', ')}`;
              document.getElementById('hab').innerHTML = `Habilidades: ${hab.join(', ')}`;
              document.getElementById('stats').innerHTML = `Características: ${carac.join(', ')}`;
              document.getElementById('peso').innerHTML = 'Peso: ' + data['weight'];
              let img = data['sprites']['front_default'];
              document.getElementById('pic').setAttribute('src', img, 'alt', data['name']);
              })
            .catch((erro) => {
              console.error(erro);
            });
        this.name = '';
      }
    }
  }
</script>

<template>
    <div class="form">
      <h3>Digite o nome do Pokemon que deseja pesquisar!</h3>
      <input type="text" id="nome" placeholder="Nome do Pokemon" name="poke" class="form-control" v-model="name">
      <button v-on:click="loadPoke" type="submit" class="btn btn-primary">Pesquisar</button>
    </div>

    <div class="list">
      <div>
        <h2>Atributos do Pokemon </h2>
            <ul>
              <li class="card">
                <h3 id="poke"></h3>
                <p id="tipo" class="sub"></p>
                <p id="hab" class="sub"></p>
                <p id="stats" class="sub"></p>
                <p id="peso" class="sub"></p>
                <img id="pic">
              </li>
            </ul> 
      </div>

      <div class="list-evo">
        <span> <h2>Evolução do Pokemon</h2></span>
        <h3 id="evoPoke"></h3>
        <img id="evoPic">
      </div>
    </div>
</template>

<style>

.btn{
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  background-color: #25b16d;
  border: #205107;
  color: white;
  font-weight: bold;
}

#nome{
  font-weight: 600;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 10px;
  border-color: black;
}

.card{
  list-style: none;
	padding: 40px;
	color: #222;
	text-align: center;
	border-radius: 20px;
	position: relative;
} 

/* table{
  margin: 25px;
  border: 0.5px solid #41167f;
  border-radius: 20px;
  box-shadow: 2px 2px 10px #41167f;
  display: inline-table;
  align-items: center;
  text-align: center;
} */

.card::after {
  
	margin: 25px;
  border: 0.5px solid #41167f;
  border-radius: 20px;
  box-shadow: 2px 2px 10px #41167f;
  display: inline-table;
  align-items: center;
  text-align: center;
}

#poke {
	text-transform: capitalize;
	margin-bottom: 0px;
  margin-top: 5px;
	font-size: 32px;
	font-weight: normal;
}

.sub {
	margin: 10px;
	color: #2b2929;
	font-weight: lighter;
}

#pic{
  height: 120px;
}
</style>