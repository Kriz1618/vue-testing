import { reactive } from "vue";

export const counterStore = reactive({
  count: 0,
  handleAdd(){
    this.count += 1;
  },
  handleDis(){
    this.count -= 1;
  },
  handleReset(){
    this.count = 0;
  },

});