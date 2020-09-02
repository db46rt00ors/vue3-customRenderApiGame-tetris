// 游戏页面
import {
  defineComponent,
  h,
  reactive,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";
import Map from "../components/Map.js";
import Block from '../components/Block.js'
import { game } from "../Game";
// import { hitTestObject } from "../utils";

export default defineComponent({
  setup(_, { emit }) {
    // console.log(Map)
    const {BlockPosition} = BlockInfo()
    let FPS = 1;
    const handleTicker = () => {
      FPS++
      if(FPS % 60 == 0) {
        BlockPosition.y += 20
      }
    }
    onMounted(()=>{
      // console.log(game)
      game.ticker.add(handleTicker)
    })

    return {
      BlockPosition
    }
  },
  render(ctx) {
    console.log(ctx.BlockPosition.y)
    return h("Container", [
      h(Block,{
        x: ctx.BlockPosition.x,
        y: ctx.BlockPosition.y,
      }),
      h(Map),
    ]);
  },
});

function BlockInfo() {
  const BlockPosition = reactive({ x: 120, y: -20 });
  const speed = 20;
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "Down":
        BlockPosition.y += speed;
        break;
      case "Left":
        BlockPosition.x -= speed;
        break;
      case "Right":
        BlockPosition.x += speed;
        break;
    }
  });
  return { BlockPosition };
}

function check (row, col) {
  for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
          if (Block.code[i][j] != 0 && game.map.code[row + i][col + j] != 0) {
              return false
          }
      }
  }
  return true
}
