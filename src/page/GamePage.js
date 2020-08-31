// 游戏页面
import {
  defineComponent,
  h,
  reactive,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";
import Map from "../components/Map";
import Block from '../components/Block.js'
// import Plane from "../components/Plane";
// import { game } from "../Game";
// import { hitTestObject } from "../utils";

export default defineComponent({
  setup(_, { emit }) {

  },
  render(ctx) {
    console.log(ctx)
    return h("Container", [
      h(Block),
      h(Map),
    ]);
  },
});
