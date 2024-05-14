import { LinkButton } from './components/Buttons';

export default function NotFound() {
    return (
        <main className='h-screen'>
            <h2>Not Found</h2>
            <p className='pt-2 pb-8'>Could not find the requested resource</p>
            <LinkButton href='/' text='Go home'/>
        </main>
    );
}
