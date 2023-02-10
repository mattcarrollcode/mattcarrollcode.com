// app/blog/layout.js
export default function BlogLayout({ children }) {
    return <>
        <header className="p-4 mb-4 md:px-64 flex justify-between items-center">
            <a className="text-xl font-bold" href="/blog">Blog</a>
            <a className="font-bold text-xl" href="/">About</a>
        </header>
        <main className="px-4 md:px-64">
            {children}
        </main>
    </>
}