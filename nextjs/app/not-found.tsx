import { Analytics } from '@vercel/analytics/react';
import { Link } from '../components/link';
import BackButton from '../components/back-button'

function ListItem({ children }) {
    return <li className="list-disc list-outside ml-8">{children}</li>
}

export default function NotFound() {
    return (
        <html lang="en">
            <head />
            <body className="antialiased mb-40 flex flex-col mx-4 mt-8 bg-gradient-to-r from-gray-900 via-stone-900 to-black text-white bg-black">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-row justify-center gap-7">
                        <div className="flex flex-col gap-2 w-92">
                            <h1 className="font-bold text-3xl font-sans text-white">Whoops...</h1>
                            <div className="text-white font-mono">
                                Sorry, this page doesn&apos;t exist.
                            </div>
                            <div className="text-white font-mono">
                                Here are some things to try:
                                <ul>
                                    <ListItem><Link url="/" name="Homepage" /></ListItem>
                                    <ListItem><BackButton /></ListItem>
                                    <ListItem><Link newWindow={true} url="https://twitter.com/messages/compose?recipient_id=378380992" name="Message me on Twitter" /></ListItem>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Analytics />
            </body>
        </html >
    )
}