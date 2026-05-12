import { Assets } from "./rendering/assetManager.js";
import { Renderer } from "./rendering/rendering.js";

interface configInterface {
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D | null
}

const _screen = document.getElementById("game") as HTMLDivElement;
const canvas = document.createElement('canvas');
const config: configInterface = {
    width: 0,
    height: 0,
    ctx: null
}

// Funções
function Resize() {
    config.width = window.innerWidth;
    config.height = window.innerHeight;

    canvas.width = config.width;
    canvas.height = config.height;
}

// Eventos
window.addEventListener("resize", () => {
    Resize();
});

// Metodos
function Start() {
    console.log("starting");
    _screen.append(canvas);

    config.ctx = canvas.getContext("2d");
    Renderer.ctx = config.ctx!;
    Assets.loadSprite('player1', '/sprites/knight1.png');

    Resize();
}

function Update(delta: number) {

}

let x = 0;
function Render() {
    if (!config.ctx) return;
    config.ctx.clearRect(0, 0, config.width, config.height);

    Renderer.drawSprite(Assets.sprite.get('player1')!, {x, y:100}, {w: 20, h:20});
    x++;
}

let lastTime = 0;
function gameLoop(timestamp: number) {
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    Update(delta);
    Render();

    requestAnimationFrame(gameLoop);
}

// Inicialização
function main() {
    Start();
    gameLoop(0);
}
main();