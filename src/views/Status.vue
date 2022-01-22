<template>
  <div class="status">
    <Create />
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Create from "@/components/Create.vue";
import List from "@/components/List.vue";

@Component({
  components: {
    Create,
    List,
  },
})
export default class extends Vue {}
</script>

<style scoped lang="scss"></style>
