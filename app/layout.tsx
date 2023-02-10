import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body className="antialiased mb-40 flex flex-col mx-4 mt-8 bg-gradient-to-r from-gray-900 via-stone-900 to-black text-white bg-black">{children}</body>
        </html >
    );
}
