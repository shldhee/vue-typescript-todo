<template>
  <div class="list">
    <div class="list__input-list" v-for="item in itemList" :key="item.id">
      <span class="list__check-input-wrapper">
        <input
          class="list__check-input"
          type="checkbox"
          :checked="item.status === 'clear'"
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
import { Component, Vue } from "vue-property-decorator";

interface ItemList {
  id: number;
  content: string;
  status: string;
}

@Component
export default class extends Vue {
  // data를 요로케 선언한다.?
  itemList: ItemList[] = [
    { id: 1, content: "씻기", status: "clear" },
    { id: 2, content: "준비하기", status: "clear" },
    { id: 3, content: "학교가기", status: "clear" },
    { id: 4, content: "게임하기", status: "yet" },
  ];

  created(): void {
    // this.itemList = this.$store.state.itemList;
  }

  removeItem(id: number): void {
    this.$store.commit("removeItem", id);
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
