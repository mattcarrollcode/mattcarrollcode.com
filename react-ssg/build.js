import fs from 'node:fs/promises'
import renderToStaticMarkup from "react-dom/server"
import babel from "@babel/core"
// import reactPreset from "@babel/preset-react"


async function build() {
    const filename = "index.js";
    const source = await fs.readFile(filename, 'utf-8');
    const result = await babel.transformAsync(source, {
        presets: [["@babel/preset-react", {"runtime": "automatic"}]],
    });
    console.log(result.code)
    console.log(typeof result.code)
    const buffer = Buffer.from(result.code).toString('base64');
    console.log(buffer)
    const module = await import(`data:text/javascript;base64,${buffer}`)
    console.log(module)


    console.log(renderToStaticMarkup(module.default()))

}

build()
