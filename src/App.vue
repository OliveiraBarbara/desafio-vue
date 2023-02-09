<script setup>
import Search from './components/Search.vue'
</script>

<template>
  <header>
      <div>
        <h1>BUSCANDO POKEMONS</h1>
      </div>
  </header>

  <main>
    <Search />
  </main>

  <footer>
    <div>
      <p>Desenvolvido por Bárbara Beatriz Bueno de Oliveira</p>
      <address>barbara_oliveira@ufms.br</address>
      <phone>(17)99772-8063</phone>
    </div>
  </footer>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  display: flex;
  justify-content:space-around;
  align-items: center;
} 

footer {
  margin: 0px;
  background-color: #333D51;
  color: white;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  width: 100%;
  padding: 10px;
}*/

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
