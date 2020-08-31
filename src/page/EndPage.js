// 结束页面
import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
  setup(props, { emit }) {
    const onClick = () => {
      emit("changePage", "GamePage");
    };

    return {
      onClick,
    };
  },
  render(ctx) {
    // 图片
    // <div><img src="imgPage"></div>
    // pixi.js
    return h("Container");
  },
});
