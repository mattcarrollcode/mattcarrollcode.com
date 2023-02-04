import * as fs from 'fs';
import { join } from 'path'
import ReactMarkdown from 'react-markdown'

// app/page.js
// This file maps to the index route (/)
export default function Page({ params }) {
    console.log(process.cwd())
    const path = join("content", params.slug + ".md")
    let content
    try {
        content = fs.readFileSync(path, 'utf8')

    } catch (e) {
        return <h1>Not found.</h1>
    }
    return <ReactMarkdown children={content} />

}