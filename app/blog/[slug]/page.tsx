/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown' // ReactMarkdown uses  `children` prop
import remarkGfm from 'remark-gfm'
import { redirect } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function Page({ params }) {
    const post = allPosts.find((post) => post.slug === params.slug);
    if (!post) {
        // This is necessary because use the `notFound`
        // function doesn't load CSS for some reason
        // TODO: change this redirect to `notFound`
        redirect('/not-found')
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
                <div className="flex flex-col text-xl gap-4">
                    {/* eslint-disable react/no-children-prop */}
                    <ReactMarkdown
                        children={post.body.raw}
                        // className="[&>ul]:list-disc [&>ul]:list-inside [&>li]:indent-5"
                        linkTarget="_blank"
                        components={{
                            // Rewrite `li` to add tailwind styles
                            li: ({ node, ...props }) => <li className="list-disc list-outside ml-8" {...props} />,
                            // Rewrite `code` to add style TODO: add syntax highlighting
                            code: ({ node, ...props }) => <code className="font-mono" {...props} />,
                            // Rewrite `a` to add style
                            a: ({ node, ...props }) => <a className="underline hover:text-purple-600" {...props} />
                        }}
                        remarkPlugins={[remarkGfm]}
                    />
                </div>
            </div>
        </div >
    </section>

}
