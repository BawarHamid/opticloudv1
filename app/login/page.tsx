import Image from 'next/image';
import LoginForm from './components/LoginForm';

export default async function Login() {
    return (
        <main className='h-screen pb-48'>
            <Image
                src='/logo.png'
                alt='logo'
                className='drop-shadow-[0_0_1rem_theme(colors.primary.DEFAULT)] pb-16'
                width={356}
                height={170}
                priority
            />
            <LoginForm />
        </main>
    )
}
