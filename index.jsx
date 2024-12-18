export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Matt Carroll</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="main.css" rel="stylesheet" />
      </head>
      <body className="antialiased mb-40 flex flex-col mx-4 mt-8 bg-gradient-to-r from-gray-900 via-stone-900 to-black text-white bg-black">
        <Page />
      </body>
    </html>
  );
}

function Page() {
  return <div className="flex flex-col gap-7">
    <div className="flex flex-row justify-center gap-7">
      <div className="flex flex-col w-48 pt-6"><ProfilePicture src={"/profile.png"} /></div>
      <div className="flex flex-col gap-2 w-72">
        <h1 className="font-bold text-3xl font-sans text-white">Matt Carroll</h1>
        <Description />
      </div>
    </div>
    <div className="flex flex-row justify-center gap-7">
      <a target="_blank" href="https://github.com/mattcarrollcode">
        <GithubIcon />
      </a>
      <a target="_blank" href="https://x.com/mattcarrollcode">
        <XIcon />
      </a>
      <a target="_blank" href="https://bsky.app/profile/mattcarrollcode.com">
        <BlueskyIcon />
      </a>
      <a target="_blank" href="https://linkedin.com/in/mattcarrollcode">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://react.dev/">
        <ReactIcon />
      </a>
    </div>
  </div>
}

function Description() {
  return <div className="text-white font-mono">
    Hey, I&apos;m Matt - I help people build better developer products through community.
    Currently, I am focused on <Link url="https://reactjs.org" name="React ⚛️" />.
    My previous work includes <Link url="https://developers.google.com/youtube" name="YouTube 📺" />
    , <Link url="https://fuchsia.dev/" name="Fuchsia 🌺" />
    , <Link url="https://cloud.google.com/products/ai" name="Google Cloud AI ☁" />
    , and the <Link url="https://developers.google.com/assistant" name="Google Assistant 🗣️" />.
  </div>
}



function ProfilePicture({ src }) {
  return <img src={src} alt="Matt Carroll headshot" className="rounded-full" />
}

function Link({ name, url, newWindow }) {
  return <a target={newWindow ? '_blank' : ''} className="underline hover:text-purple-600" href={url}>{name}</a>
}

function XIcon() {
  return (
    <svg
      aria-label="X icon" width="60" height="60"
      className="invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
      viewBox="0 0 24 24"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon() {
  return <svg role="img" aria-label="GitHub icon" width="60" height="60" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" /></svg>
}

function LinkedInIcon() {
  return <svg role="img" aria-label="LinkedIn icon" height="60" viewBox="0 0 72 72" width="60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB" /><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF" /></g></svg>
}

function ReactIcon() {
  return <svg role="img" aria-label="React icon" width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" >
    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g>
  </svg >
}

function BlueskyIcon() {
  return <svg width="60" height="60" viewBox="0 0 600 530" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#1185fe" />
    </svg>
}

