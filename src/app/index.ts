import express from 'express';
import path from "path";

const app = express();
const port = 3333;

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const __distDirName = path.join(__dirname, '../../dist');
const __distNodeName = path.join(__dirname, '../../node_modules');
const __distSprites = path.join(__dirname, '../../public/assets/sprites');

app.use('/dist', express.static(__distDirName));
app.use('/node_modules', express.static(__distNodeName));
app.use('/sprites', express.static(__distSprites));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    console.log("Página carregada");
});

app.listen(port, () => {
    return console.log(`Servidor rodando em http://localhost:${port}`);
});