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
                console.clear();
                document.getElementById('poke').innerHTML = 'Pokemon: ' + data['name'];
                console.log(data['abilities']);
                document.getElementById('tipo').innerHTML = 'Tipos: ' + data.types.map(typeInfo => typeInfo.type.name);
                document.getElementById('peso').innerHTML = 'Peso: ' + data['weight'];
                let img = data['sprites']['front_default'];
                document.getElementById('pic').setAttribute('src', img);
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
      <div class="list-atr">
        <span><h2>Atributos do Pokemon </h2></span>
        <h3 id="poke"></h3>
        <p id="tipo"></p>
        <p id="peso"></p>
        <img id="pic">
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
}
</style>