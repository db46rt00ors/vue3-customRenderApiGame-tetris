import { createRenderer } from "@vue/runtime-core";
import { map } from "../data/map.js";
import { Text, Container, Graphics } from "pixi.js";
const renderer = createRenderer({
    createElement(type) {
        let element;
        switch (type) {
            case "Container":
                element = new Container();
                break;
            case "Text":
                element = new Text();
                break;
            case "Map":
                element = new Graphics();
                break;
            case "Block":
                element = new Graphics();
                break;
        }
        return element;
    },

    // setElementText(node, text) {
    //     const cText = new Text(text);
    //     node.addChild(cText);
    // },

    // createText(text) {
    //     return new Text(text);
    // },
    patchProp(el, key, prevValue, nextValue) {
        // x y el
        switch (key) {
            case "onClick":
                el.on("pointertap", nextValue);
                break;
            case "Map":
                // 横线
                el.lineStyle(1, nextValue, 1);
                for (let i = 1; i <= map.length; i++) {
                    el.moveTo(0, i * 20);
                    el.lineTo(320, i * 20);
                }
                // 竖线
                for (let j = 1; j <= map[0].length; j++) {
                    el.moveTo(j * 20, 0);
                    el.lineTo(j * 20, 540);
                }
                el.endFill();
                break;
            case "Block":
                // 根据组件传递来的颜色和砖块数组 来绘制砖块
                el.beginFill(nextValue.codeColor);
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 4; j++) {
                        if (nextValue.code[i][j] == 1) {
                            el.drawRect(100 + i * 20, j * 20, 20, 20);
                        }
                    }
                }
                el.endFill();
                break;
            default:
                el[key] = nextValue;
        }
    },

    insert(el, parent) {
        parent.addChild(el);
    },

    // 新加
    // 处理注释
    createComment() {},
    // 获取父节点
    parentNode() {},
    // 获取兄弟节点
    nextSibling() {},
    // 删除节点时调用
    remove(el) {
        const parent = el.parent;
        if (parent) {
            parent.removeChild(el);
        }
    },
});

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent);
}
