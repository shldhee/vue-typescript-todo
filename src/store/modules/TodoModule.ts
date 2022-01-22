import { Module, VuexModule, Mutation } from "vuex-module-decorators";
export interface ItemList {
  id: number;
  content: string;
  status: string;
}

export interface ItemListArray {
  itemList: ItemList[];
}
@Module
export default class Todo extends VuexModule {
  itemList: ItemList[] = [
    { id: 1, content: "씻기", status: "clear" },
    { id: 2, content: "준비하기", status: "clear" },
    { id: 3, content: "학교가기", status: "clear" },
    { id: 4, content: "게임하기", status: "yet" },
  ];

  @Mutation
  addItem(item: ItemList): void {
    this.itemList.push(item);
  }

  @Mutation
  removeItem(id: number): void {
    const idx = this.itemList.findIndex((item) => item.id === id);
    this.itemList.splice(idx, 1);
  }

  @Mutation
  changeStatus(item: ItemList): void {
    const idx = this.itemList.findIndex((param) => param.id === item.id);
    this.itemList[idx].status = item.status === "yet" ? "clear" : "yet";
  }

  get setYet(): ItemList[] {
    return this.itemList.filter((item: ItemList) => item.status === "yet");
  }
  get setClear(): ItemList[] {
    return this.itemList.filter((item: ItemList) => item.status === "clear");
  }
}
