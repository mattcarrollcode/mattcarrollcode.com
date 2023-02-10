import {
    GithubIcon,
    TwitterIcon,
    LinkedInIcon,
    BlogIcon,
} from '../components/icons';

export default function Page() {
    return <div className="flex flex-col gap-7">
        <div className="flex flex-row justify-center gap-7">
            <div className="flex flex-col"><ProfilePicture /></div>
            <div className="flex flex-col gap-2 w-72">
                <h1 className="font-bold text-3xl font-mono text-white">Matt Carroll</h1>
                <Description />
            </div>
        </div>
        <div className="flex flex-row justify-center gap-7">
            <a target="_blank" href="https://github.com/mattcarrollcode">
                <GithubIcon />
            </a>
            <a target="_blank" href="https://twitter.com/mattcarrollcode">
                <TwitterIcon />
            </a>
            <a target="_blank" href="https://linkedin.com/in/mattcarrollcode">
                <LinkedInIcon />
            </a>
            <a href="/blog">
                <BlogIcon />
            </a>
        </div>
    </div>
}

function Link({ name, url }) {
    return <a target="_blank" className="underline hover:text-purple-600" href={url}>{name}</a>
}

function Description() {
    return <div className="text-white font-mono">
        Hey, I'm Matt - I help people build better developer products.
        Currently, I am focused on <Link url="https://reactjs.org" name="React ⚛️" />.
        My previous work include <Link url="https://developers.google.com/youtube" name="YouTube 📺" />
        , <Link url="https://fuchsia.dev/" name="Fuchsia 🌺" />
        , <Link url="https://cloud.google.com/products/ai" name="Google Cloud AI ☁" />
        , and the <Link url="https://developers.google.com/assistant" name="Google Assistant 🗣️" />.
    </div>
}



function ProfilePicture() {
    return <img src="/profile.png" className="rounded-full object-cover h-48 w-48" />
}