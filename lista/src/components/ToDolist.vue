<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="lista">
    <div class="itens"><input type="text"><i class="fa-regular fa-plus" title="Adicionar"></i></div>
    <div class="itens">Planejar a semana</div>
    <div class="itens">Ligar para a família <input type="checkbox"></div>
    <div class="itens">Fazer uma caminhada <input type="checkbox"></div>
    <div class="itens">Ler um capitulo de um livro <input type="checkbox"></div>
    <div class="itens">Preparar uma refeição saudável <input type="checkbox"></div>
    <div class="itens">Organizar a casa <input type="checkbox"></div>
    <div class="itens">Assistir a um filme <input type="checkbox"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .itens{
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px black;
    gap: 10px;
    padding: 10px;
  }
  .lista{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  i {
    cursor: pointer;
    border: solid 1px black;
    padding: 5px;
    border-radius: 5px;
  }
  i:hover{
    background-color: rgb(195, 195, 195);
    color: white;
  }
</style>