import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import Header from '@/components/ui/Header';

// const geistSans = Geist({
//     variable: '--font-geist-sans',
//     subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//     variable: '--font-geist-mono',
//     subsets: ['latin'],
// });

export const metadata: Metadata = {
    title: '두잇 - Do it !',
    description: 'You can anything do it !',
    icons: {
        icon: './favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css"
                />
            </head>
            <body
            // className={`${geistSans.variable} ${geistMono.variable}`}
            >
                <Header />
                <div className="app-container">
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
