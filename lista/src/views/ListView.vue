<template>
  <div class="listView">
    <list class="list" />
  </div>
</template>

<script>
import list from '../components/ToDolist.vue'
export default {
    components: {
        list
    }

}
</script>

<style scoped>
.listView{
  display: flex;
  flex-direction: column;
  background-color: rgb(234, 234, 234);
  padding: 10px;
  min-height: 450px;
  max-height: 550px;
  max-width: 450px;
  min-width: 300px;
  margin: 20px auto;
}



</style>  