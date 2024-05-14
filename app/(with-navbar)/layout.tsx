import Navbar from '../components/Navbar';

export default function NavbarLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-1 overflow-hidden'>
                {children}
            </div>
        </div>
    )
}
