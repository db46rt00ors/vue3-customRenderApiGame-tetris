// 地图
import { defineComponent, h, ref } from "@vue/runtime-core";
import { game } from "../Game";
// import Block from './Block.js'
export default defineComponent({
    setup() {},
    render(ctx) {
        return h("Container", [
            h("Map", {
                Map: "0xbfbfbf",
            }),
        ]);
    },
});
