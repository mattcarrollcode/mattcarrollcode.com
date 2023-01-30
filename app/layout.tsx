export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body className="h-screen bg-gradient-to-b from-green-200 to-green-500">{children}</body>
        </html>
    );
}
