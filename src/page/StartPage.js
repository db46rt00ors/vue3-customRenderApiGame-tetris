// 开始页面
import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
    setup(props, { emit }) {
        const onClick = () => {
            console.log(123);
            emit("changePage", "GamePage");
        };
        return {
            onClick,
        };
    },
    render(ctx) {
        // 开始游戏文案
        return h("Text", {
            x: 66,
            y: 350,
            text: "开始游戏",
            style: {
                fontFamily: "Arial",
                fontSize: "36px",
                fontStyle: "italic",
                fontWeight: "bold",
                fill: "#F7EDCA",
                stroke: "#4a1850",
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
                wordWrap: true, //是否允许换行
                wordWrapWidth: 440
            },
            interactive: true,
            onClick: ctx.onClick,
        });
    },
});
