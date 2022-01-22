<template>
  <div class="list">
    <div class="list__input-list" v-for="item in itemList" :key="item.id">
      <span class="list__check-input-wrapper">
        <input
          class="list__check-input"
          type="checkbox"
          :checked="item.status === 'clear'"
          @change="changeStatus(item)"
        />
      </span>
      <div class="list__text-input-wrapper">
        <input class="list__text-input" type="text" :value="item.content" />
      </div>
      <button class="list__close-button" @click="removeItem(item.id)">
        ❌
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

interface ItemList {
  id: number;
  content: string;
  status: string;
}

@Component
export default class extends Vue {
  itemList: ItemList[] = [];

  created(): void {
    this.itemList = this.$store.state.todo.itemList;
  }
  initItem(): void {
    this.itemList = this.$store.state.todo.itemList;
  }
  removeItem(id: number): void {
    this.$store.commit("removeItem", id);
    this.initItem();
  }
  changeStatus(item: ItemList): void {
    console.log(this.$route.params.status);
    this.$store.commit("changeStatus", item);
    this.initItem();
  }

  @Watch("$route.params.status")
  routeUpdate(newValue: string): void {
    console.log("newValue :", newValue);
    if (!newValue) {
      this.itemList = this.$store.state.todo.itemList;
    } else if (newValue === "yet") {
      this.itemList = this.$store.getters.setYet;
    } else {
      this.itemList = this.$store.getters.setClear;
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  &__input-list {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__check-input-wrapper {
  }
  &__check-input {
  }
  &__text-input-wrapper {
  }
  &__text-input {
  }
  &__close-button {
  }
}
</style>
