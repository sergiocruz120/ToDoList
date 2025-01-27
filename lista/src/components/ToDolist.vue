<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="lista">
    <div class="titulo">
      Lista de Tarefas
    </div>

    <div class="task">
      <input class="entrada" maxlength="30" 
      v-model="tarefas" type="text" placeholder="Digite uma tarefa...">

      <button title="Adicionar tarefa" @click="adicionarTarefa" class="btn btn-primary">
        <i class="fa-regular fa-plus"></i>
        <span class="text">Adicionar</span>
      </button>
    </div>

    <div class="tarefas">
      <div class="itens" v-for="(item, index) in list" :key="index">
        <input class="form-check-input" type="checkbox">
        <span class="text">{{ item }}</span>
        <i @click="removerTarefa(index)" class="fa-solid fa-xmark"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const tarefas = ref('')

const list = computed(() => {
  return store.state.list
})

const adicionarTarefa = () => {
  if (!tarefas.value) return
  store.dispatch('adicionarTarefa', tarefas.value)
  tarefas.value = ''
}

const removerTarefa = (index) => {
  store.dispatch('removerTarefa', index)
}


</script>

<style>
.task > button {
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 0px 5px 5px 0px;
}
.tarefas {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 7px;
  max-height: 400px;
  background-color: rgb(247, 247, 247);
  overflow-y: auto;
}

.tarefas::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem */
}

.tarefas::-webkit-scrollbar-track {
    background: #f8f8f8; /* Cor do trilho da barra de rolagem */
    border: solid 2px #c4c4c4; /* Bordas da barra de rolagem */
    border-radius: 6px; /* Bordas arredondadas para o trilho */
}

.tarefas::-webkit-scrollbar-thumb {
    background: #bbbbbb; /* Cor do polegar da barra de rolagem */
    border-radius: 6px; /* Bordas arredondadas para o polegar */
}

.tarefas::-webkit-scrollbar-thumb:hover {
    background: #7f7f7f; /* Cor do polegar da barra de rolagem ao passar o mouse */
}

@media (max-width: 370px) {
  .task .text {
    display: none;
  }
}

.itens {
  display: flex;
  font-size: 18px;
  gap: 10px;
  align-items: center;
  padding: 7px;
  background-color: white;
  color: rgb(85, 85, 85);
  border-radius: 5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.task {
  display: flex;
  justify-content: space-between;
  padding: 7px;
  background-color: white;
  color: rgb(85, 85, 85);
  border-radius: 5px;
}

.titulo {
  display: flex;
  background-color: #000089;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  justify-content: center;
  border: none;
  padding: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.itens input[type="checkbox"] {
  width: 15px;
  height: 15px;
  border-radius: 16px;
  border: solid 3px rgb(187, 187, 187);
}

.lista {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

i {
  cursor: pointer;
}

.entrada {
  /* border: none; */
  font-size: 18px;
  color: rgb(85, 85, 85);
  padding: 5px;
  border-radius: 5px;
  border: solid 3px rgb(187, 187, 187);
  width: 270px;
}

input:focus {
  outline: none;
}
</style>