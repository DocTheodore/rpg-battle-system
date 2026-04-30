export class Renderer {
    private static _ctx: CanvasRenderingContext2D | null;
    private static _screenSize: Size = { w: window.innerWidth, h: window.innerHeight };


    private constructor() {}

    // Metodos
    public static clear() {
        if(!Renderer._ctx) return;
        Renderer._ctx.clearRect(0, 0, Renderer._screenSize.w, Renderer._screenSize.h);
    }

    public static drawSprite(sprite: Sprite, pos: Position, size: Size) {
        if(!Renderer._ctx) return;
        const img = document.createElement('img');
        img.src = '../../../public/assets/sprites/knight1.png';
        Renderer._ctx.drawImage(img, pos.x, pos.y, size.w, size.h);
    }

    // Getters/Setters
    static set ctx(context: CanvasRenderingContext2D) {
        Renderer._ctx = context;
    }
    static set screenSize(newScreenSize: Size) {
        Renderer._screenSize = { ...newScreenSize };
    }


    static get ctx(): CanvasRenderingContext2D | null {
        return Renderer._ctx;
    }
    static get screenSize(): Size {
        return { ...Renderer._screenSize }; // retorna cópia
    }
}