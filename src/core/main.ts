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

    config.ctx = canvas.getContext("2d");
}

// Eventos
window.addEventListener("resize", () => {
    Resize();
});

// Metodos
function Start() {
    console.log("starting");
    _screen.append(canvas);

    Resize();
}

// Inicialização
function main() {
    Start();
    //gameLoop(0);
}
main();