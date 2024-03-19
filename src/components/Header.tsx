"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const menuitems = [
    ['About', '/about'],
    ['Skills', '/skills'],
    ['Projects', '/projects'],
    ['Experiences', '/experiences']
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white-900 sticky top-0 z-50">
            <div className="container mx-auto flex bg-gray-300">
                <Image
                    src="/logo.svg"
                    alt="Cyril Nicko"
                    width={250}
                    height={40}
                    loading='eager'
                    priority
                />
                <nav id="desktopmenu" className="hidden sm:flex justify-center space-y-2">
                    {menuitems.map(([title, url]) => (
                        <Link href={url} key={url} className="rounded-lg px-3 py-2 text-center text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                            {title}
                        </Link>
                    ))}
                </nav>
                <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
                    {isOpen ? 'Close' : 'Menu'}
                </button>
                {isOpen && (
                    <nav id="mobilemenu" className="flex flex-col sm:hidden space-y-2 sm:space-y-0 sm:space-x-4">
                        {menuitems.map(([title, url]) => (
                            <Link href={url} key={url} className="rounded-lg px-3 py-2 text-center text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                                {title}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}