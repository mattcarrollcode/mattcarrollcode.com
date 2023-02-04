import {
    GithubIcon,
    TwitterIcon,
    LinkedInIcon,
    ReactIcon,
} from '../components/icons';

export default function Page() {
    return <div className="flex flex-col gap-7">
        <div className="flex flex-row justify-center gap-7">
            <div className="flex flex-col gap-2">
                <ProfilePicture />
            </div>
            <div className="flex flex-col w-64 gap-2">
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
    </div>
}

function Description() {
    return <p className="text-white">
        Hey, I'm Matt - I help people build better developer products. Right now, I'm working on <a target="_blank" className="underline hover:text-purple-600" href="https://reactjs.org">React</a>. I used to work on products like <a target="_blank" className="underline hover:text-purple-600" href="https://developers.google.com/youtube">YouTube</a>, <a target="_blank" className="underline hover:text-purple-600" href="https://fuchsia.dev/">Fuchsia</a>, <a target="_blank" className="underline hover:text-purple-600" href="https://cloud.google.com/products/ai">Google Cloud AI</a>, and the <a target="_blank" className="underline hover:text-purple-600" href="https://developers.google.com/assistant">Google Assistant</a>.
    </p>
}

function ProfilePicture() {
    return <img src="/profile.png" className="rounded-full object-cover h-48 w-48" />
}