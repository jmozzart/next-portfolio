"use client";
import Image from 'next/image';
import { useState, useRef, MouseEvent } from 'react';
import Link from 'next/link';


const menuitems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "contact"]
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)




    const handleClick = (e: MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
        e.preventDefault();
        try {
          const element = document.querySelector(url);
          if (element) {
            const rect = element.getBoundingClientRect();
            window.scrollTo({
            top: rect.top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        } catch (err) {
          console.error('Invalid selector', err);
        }
      };

    return (
        <header className="bg-gray-300 fixed top-0 z-50 w-full">
            <div className="container mx-auto flex justify-between px-4 py-2">
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="Cyril Nicko"
                        width={250}
                        height={40}
                        loading='eager'
                        priority
                    />
                </Link>
                <nav className="hidden sm:flex justify-center font-medium pt-1">
                    {menuitems.map(([title, url]) => (
                        <Link
                        href="#"
                        key={url}
                        className="px-1.5 lg:px-3 py-2 text-center
                        hover:text-cyan-800 text-xs lg:text-base
                        hover:underline decoration-8 decoration-mainaccent-700 underline-offset-8"
                        // @ts-ignore
                        onClick={(e) => handleClick(e, url)}
                        >
                        {title}
                        </Link>
                    ))}
                </nav>
                <button onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu Button"
                    className="sm:hidden flex flex-col justify-center items-center">
                    <span className={`bg-gray-800 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`} >
                    </span>
                    <span className={`bg-gray-800 transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-gray-800 transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                        }`} >
                    </span>
                </button>
                <nav className={`flex flex-col sm:hidden space-y-2
                    absolute right-0 top-16
                    bg-gray-200/100 shadow-lg
                    transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {menuitems.map(([title, url]) => (
                        <Link
                            href={"/" + url}
                            key={url}
                            className="px-4 py-2 text-right text-gray-800
                            font-medium hover:bg-gray-800 hover:text-gray-300
                            hover:border-b-4 hover:border-mainaccent-700"
                            onClick={(e) => {
                                setIsOpen(false);
                                // @ts-ignore
                                handleClick(e, url);
                              }}
                        >
                            {title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}