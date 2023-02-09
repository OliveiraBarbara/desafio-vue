<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      addComment() {
        const inputNome = document.getElementById('nome');
        const url1 = 'https://pokeapi.co/api/v2/pokemon/';
        const nome1 = inputNome.value;
        const url = url1 + nome1;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.clear();
                console.log(data);
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
    <div>
        <input type="text" id="nome" placeholder="Nome do Pokemon" name="poke" class="form-control" v-model="name">
        <button v-on:click="addComment" type="submit" class="btn btn-primary">Pesquisar</button>
    </div>
</template>