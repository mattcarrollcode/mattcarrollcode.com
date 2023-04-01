import { allPosts } from 'contentlayer/generated'

// app/page.js
// This file maps to the index route (/)
export default function Page({ params }) {

    return <div className="w-full flex flex-col gap-4">
        <Posts />
    </div>

}

function Posts() {
    const posts = allPosts
        .sort((x, y) => {
            return (new Date(x.date) > new Date(y.date)) ? -1 : 1
        })
    const content = posts.map((post) => {
        const date = new Date(post.date)
        const prettyDate = date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })
        return <Post key={post.slug} slug={post.slug} title={post.title} date={prettyDate} />
    })
    return <>{content}</>
}

function Post({ slug, title, date }) {
    return <a href={"/blog/" + slug}>
        <h1 className="text-xl font-bold">{title}</h1>
        <h3>{date}</h3>
    </a >
}
