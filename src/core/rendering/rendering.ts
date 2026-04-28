interface Size {
    w: number;
    h: number;
}

class Renderer {
    private static _ctx: CanvasRenderingContext2D | null;
    private static _screenSize: Size = { w: window.innerWidth, h: window.innerHeight };

    constructor() {}

    // Metodos
    public static clear() {
        if(!Renderer._ctx) return;
        Renderer._ctx.clearRect(0, 0, Renderer._screenSize.w, Renderer._screenSize.h);
    }

    // Loops
    public static Start() {

    }

    public static Update(delta: number) {

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