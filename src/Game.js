import { Application } from "pixi.js";
// setup canvas
export const game = new Application({
    width: 280,
    height: 540,
    backgroundColor: "0xffffff",
});

document.body.append(game.view);

// game.stage
export function getRootContainer() {
    return game.stage;
}
