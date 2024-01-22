import fs from 'node:fs/promises'
import { renderToStaticMarkup } from "react-dom/server"
import babel from "@babel/core"
// import reactPreset from "@babel/preset-react"


async function build() {
    const filename = "index.js";
    const source = await fs.readFile(filename, 'utf-8');
    const result = await babel.transformAsync(source, {
        presets: [["@babel/preset-react", {"runtime": "automatic"}]],
    });
    const tempFilename = 'index_.js';
    await fs.writeFile(tempFilename, result.code);
    const { default: App } = await import('./index_.js');
    const ssg = renderToStaticMarkup(App())
    await fs.writeFile('public/index.html', ssg);
    await fs.unlink(tempFilename);

}

build()
