// 地图
import { defineComponent, h } from "@vue/runtime-core";
import { game } from "../Game";
import { mapCode } from "../data/map.js";
export default defineComponent({
    setup() {
        return {
            mapCode
        }
    },
    render(ctx) {
        // console.log(mapCode)
        return h("Map", {
            Map: {
                mapColor: '0xbfbfbf',
                mapCode: ctx.mapCode,
            },
        });
    },
});
// 0xbfbfbf
