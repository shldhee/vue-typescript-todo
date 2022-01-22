<template>
  <div class="create">
    <input type="text" class="create__input" v-model="content" />
    <button type="button" class="create__button" @click="addItem">+</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  content = "";

  addItem(): void {
    this.$store.commit("addItem", {
      id: this.$store.state.todo.itemList.length + 1,
      content: this.content,
      status: "yet",
    });
  }
}
</script>

<style scoped></style>
