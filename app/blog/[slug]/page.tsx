import * as fs from 'fs';
// import { join } from 'path'
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'

import { allPosts } from 'contentlayer/generated'

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

// app/page.js
// This file maps to the index route (/)
export default function Page({ params }) {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) {
        notFound()
    }
    const date = new Date(post.date)
    const prettyDate = date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })
    return <section>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{post.title}</h1>
            </div>
            <div className="flex flex-row">
                <p className="font-mono italic">{prettyDate}</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col font-mono gap-4 [&>*]:list-disc">
                    <ReactMarkdown children={post.body.raw} />
                </div>
            </div>
        </div >
    </section>

}
