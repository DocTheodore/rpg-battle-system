export class Assets {
    static sprite = new Map<string, HTMLImageElement>();

    private constructor () {}

    static loadSprite(name: string, path: string) {
        try {
            const img = document.createElement('img');
            img.src = path;
            Assets.sprite.set(name, img);
        } catch (err) {
            console.log(err);
        }
    }
}