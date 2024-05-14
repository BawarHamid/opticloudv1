'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from './Buttons';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        /* Modify and add your routes here after creating a folder with a page.tsx file in it */
        {
            id: 1,
            path: '/dashboard',
            title: 'Dashboard',
        },
        {
            id: 2,
            path: '/items',
            title: 'Items',
        },
    ];

    return (
        <nav className='flex items-center h-12 w-full bg-primary-800 text-white'>
            <Link href='/' className='px-4'>
                <Image
                    src='/logo-white.png'
                    alt='logo'
                    width={93}
                    height={32}
                    priority
                />
            </Link>
            <ul className='flex items-center h-full w-full gap-2'>{links.map(link => {
                return(
                    <li key={link.id}>
                        <Link className={`px-6 py-3 hover:underline ${pathname === link.path ? 'underline' : ''}`} href={link.path}>{link.title}</Link> 
                    </li>
                );
            })}</ul>
            <LogoutButton />
        </nav>
    );
}
