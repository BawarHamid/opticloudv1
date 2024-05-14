'use client'

import { LinkButton } from './components/Buttons';

export default function Error({error, reset}: {error: Error & { digest?: string }; reset: () => void}) {
    return (
        <main className='h-screen'>
            <h1 className='pb-8'>Something went wrong!</h1>
            <LinkButton href='/' text='Go home'/>
        </main>
    );
}
