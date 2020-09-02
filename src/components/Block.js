// 我方飞机
import { defineComponent, h, ref, toRefs } from "@vue/runtime-core";
import { block_json } from "../data/block.js";

export default defineComponent({
    props: ["x", "y"],
    setup(props, { emit }) {
        const { x, y } = toRefs(props)
        const allType = ["S", "Z", "J", "L", "I", "O", "T"][
            ~~(Math.random() * 7)
        ];
        const color = {
            S: "0xa93434",
            Z: "0x388E3C",
            J: "0x8a9115",
            L: "0x00838F",
            I: "0x207da7",
            O: "0x5D4037",
            T: "0x9c43b4",
        };
        // 这是所有方向的个数
        const allDirectionNumber = block_json[allType].length;
        // 随机方向
        const direction = ~~(Math.random() * allDirectionNumber);
        // 得到自己的code
        const code = block_json[allType][direction];
        const codeColor = color[allType];
        return { code, codeColor, x, y };
    },
    render({ code, codeColor, x, y }) {
        return h("Block", { Block: { code, codeColor, x, y } });
    },
});
