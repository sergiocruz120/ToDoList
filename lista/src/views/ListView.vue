<template>
  <div class="listView">
    <list />
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

<style>
.listView{
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  padding: 10px;
  /* gap: 10px; */
}

</style>