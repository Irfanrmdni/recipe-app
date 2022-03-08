import Image from 'next/image'
import Button from "./Button";

export default function Navbar() {

    const items = [
        {
            id: 1,
            text: 'home',
            href: '/',
        },
        {
            id: 2,
            text: 'product',
            href: '/products',
        },
        {
            id: 3,
            text: 'about',
            href: '#about',
        },
        {
            id: 4,
            text: 'contact',
            href: '#contact',
        },
    ];

    return (
        <>
            <nav className="w-full flex items-center justify-between">
                <div className="w-3/12 cursor-pointer">
                    <Image src="/logo.png" alt="logo" width={185} height={80} />
                </div>

                <ul className="w-6/12 flex items-center justify-center capitalize text-base">
                    {items.map(item => {
                        return (
                            <li key={item.id}><a href={item.href} className={`w-28 inline-block transition ease-in ${item.id === 1 ? 'font-bold' : 'hover:font-bold'}`}>{item.text}</a></li>
                        )
                    })}
                </ul>

                <div className="w-3/12 text-right">
                    <Button variant="stroke">Login</Button>
                </div>
            </nav>
        </>
    );
}
