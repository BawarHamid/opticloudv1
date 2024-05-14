import type { Metadata } from 'next';
import { inter } from './theme/fonts';
import './globals.css';

export const metadata: Metadata = {
    title: 'NEXT Template',
    description: '',
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}