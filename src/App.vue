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
      <address>ba.bueno.oliveira@gmail.com</address>
      <phone>(17)99772-8063</phone>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content:space-around;
    align-items: center;
    place-items: center;
  }
}
</style>
