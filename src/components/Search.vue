<script>
  export default {
    data() {
      return {
        pokeData: {},
        name: ''
      }
    },
    methods: {
      async loadPoke() {
        try{
          const inputNome = document.getElementById('nome');
          const nome = inputNome.value;
          const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
          const poke = await fetch(url);
          const pokemon = await poke.json();
          this.pokeData = pokemon;
          let img = pokemon.sprites.front_default;
          document.getElementById('pic').setAttribute('src', img);
          return pokemon
        }
        catch(error){
          alert("Pokemon não encontrado!");
        }
        // .then((response) => {
        //   return response.json();
        // })
        // .then((data) => {
        //   console.log(data.name);
        //   const types = data.types.map(typeInfo => typeInfo.type.name);
        //   const hab = data.abilities.map(abilitiesInfo => abilitiesInfo.ability.name);
        //   const carac = data.stats.map(statsInfo => statsInfo.stat.name);
        //   const caracN = data.stats.map(nInfo => nInfo.base_stat);
        //   document.getElementById('poke').innerHTML = data['name'];
        //   document.getElementById('tipo').innerHTML = `Tipos: ${types.join(', ')}`;
        //   document.getElementById('hab').innerHTML = `Habilidades: ${hab.join(', ')}`;
        //   document.getElementById('stats').innerHTML = `Características: ${carac.join(', ')}`;
        //   document.getElementById('peso').innerHTML = 'Peso: ' + data['weight'];
        //   let img = data.sprites.front_default;
        //   document.getElementById('pic').setAttribute('src', img);
        //   })
        // .catch((erro) => {
        //   console.error(erro);
        // });
      }
    }
  }
</script>

<template>
    <div class="form">
      <h2>Digite o nome do Pokemon que deseja pesquisar!</h2>
      <input type="text" id="nome" placeholder="Nome do Pokemon" name="poke" class="form-control" v-model="name">
      <button v-on:click="loadPoke" type="submit" class="btn btn-primary">Pesquisar</button>
    </div>

    <div v-if="name.length > 0">
      <div>
        <h2>Pokemon Encontrado!</h2>
          <ul class="list">
            <li class="card">
              <h3 id="poke">{{ pokeData.name }}</h3>
              <p id="tipo" class="sub"><b>Tipo: </b>
                <span v-for="(type, key) in pokeData.types" :key="key">{{ type.type.name }}. </span>
              </p>
              <p id="peso" class="sub"><b>Peso: </b> {{ pokeData.weight }}.</p>
              <p id="hab" class="sub"><b>Habilidades: </b>
                <span v-for="(hab, key) in pokeData.abilities" :key="key">{{ hab.ability.name}}. </span>
              </p>
              <p id="stats" class="sub"><b>Estatísticas:</b>
                <ul class="list-stat">
                  <li v-for="(carac, key) in pokeData.stats" :key="key" class="stat">{{ carac.stat.name}} = {{carac.base_stat }}</li>
                </ul>
                <!-- <span v-for="(carac, key) in pokeData.stats" :key="key">{{ carac.stat.name}} = {{carac.base_stat }}. </span> -->
              </p>
              <img id="pic" :alt="pokeData.name">
            </li>
          </ul> 
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
	margin: 25px;
  border: 0.5px solid #41167f;
  border-radius: 20px;
  box-shadow: 2px 2px 10px #41167f;
  display: inline-table;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 35px;
  padding-right: 35px;
}

.list{
  padding: 0px;
}

#poke {
	text-transform: capitalize;
	margin-bottom: 0px;
  margin-top: 5px;
	font-size: 36px;
	font-weight: normal;
}

.sub {
	margin: 10px;
	color: #2b2929;
	font-weight: normal;
  font-size: 18px;
}

.list-stat{
  list-style: none;
  padding: 0;
  margin: 0;
}

.stat{
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  padding: 2px;
}

#pic{
  height: 130px;
  background-color: rgba(93, 93, 199, 0.74);
  border-radius: 50px;
}
</style>