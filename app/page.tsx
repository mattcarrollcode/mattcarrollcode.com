import {
    GithubIcon,
    TwitterIcon,
    LinkedInIcon,
    ReactIcon,
} from 'components/icons';

export default function Page() {
    return <>
        <div className="flex flex-row">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl font-sans-serif text-white">Matt Carroll</h1>
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
        </div>
    </>;
}

function Description() {
    return <p className="text-white">
        Hi, I'm Matt! I help people build better developer products. Currently, I'm working on <a target="_blank" className="underline hover:text-purple-600" href="https://reactjs.org">React</a>. Previously, I've worked on products like <a target="_blank" className="underline hover:text-purple-600" href="https://developers.google.com/youtube">YouTube</a>, <a target="_blank" className="underline hover:text-purple-600" href="https://fuchsia.dev/">Fuchsia</a>, <a target="_blank" className="underline hover:text-purple-600" href="https://cloud.google.com/products/ai">Google Cloud AI</a>, and the <a target="_blank" className="underline hover:text-purple-600" href="https://developers.google.com/assistant">Google Assistant</a>.
    </p>
}