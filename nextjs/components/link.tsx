interface LinkProps {
    name: string
    url: string
    newWindow?: boolean
}

export function Link({ name, url, newWindow }: LinkProps) {
    return <a target={newWindow ? '_blank' : ''} className="underline hover:text-purple-600" href={url}>{name}</a>
}
