import fs from 'node:fs/promises'
import { prerenderToNodeStream } from 'react-dom/static';
import babel from "@babel/core"

import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import postcssNested from 'postcss-nested'
import tailwindcss from 'tailwindcss'
import cssnano from 'cssnano'

const inputFilename = "index.jsx";
const inputCSSFilename = "input.css";
const tempFilename = 'index_.js';
const outputFilename = 'index.html';
const outputCSSFilename = 'main.css';

async function build() {
    // Transform JSX to JS
    const source = await fs.readFile(inputFilename, 'utf-8');
    const result = await babel.transformAsync(source, {
        presets: [["@babel/preset-react", { "runtime": "automatic" }]],
    });
    await fs.writeFile(tempFilename, result.code);
    const { default: App } = await import('./index_.js');
    await fs.unlink(tempFilename);

    // Render to HTML
    const { prelude } = await prerenderToNodeStream(App());
    let ssg = '';
    prelude.on('data', (chunk) => {
        ssg += chunk;
    });
    prelude.on('end', async () => {
     await fs.writeFile(`public/${outputFilename}`, ssg);
    })

    // Use PostCSS to process Tailwind styles
    const pcss = postcss([autoprefixer, postcssNested, tailwindcss, cssnano])
    const css = await fs.readFile(inputCSSFilename)
    const cssResult = await pcss.process(css, { from: inputCSSFilename, to: `public/${outputCSSFilename}` })
    fs.writeFile(`public/${outputCSSFilename}`, cssResult.css)
}

build()
