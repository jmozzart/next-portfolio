"use client";
import { useEffect, useState, MouseEvent, use } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';


const menuitems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Stats", "#stats"],
    ["Projects", "#projects"],
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const isHomePage = usePathname() === '/';
    const isNotHomePage = usePathname() !== '/';
    const [isScrolled, setIsScrolled] = useState(isNotHomePage);
    
 
 


/*     useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setIsScrolled(isScrolled);
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []); */


  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
/*         const element = document.querySelector('#projects');
        console.log(element); */
        setIsScrolled(isScrolled);
      };

      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isHomePage]);




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

        <header className={`fixed top-0 z-50 w-full
        transition-colors duration-300 ${isScrolled ? 'bg-gray-100 dark:bg-gray-900 shadow-md' : 'bg-transparent'}
        
        `}>
            <div className="container mx-auto flex justify-between px-4 py-2">
                <Link href="/" aria-label="Logo">
                    {/* <Image
                        src="/images/logo.svg"
                        alt="Cyril Nicko"
                        width={250}
                        height={40}
                        loading='eager'
                        priority
                    /> */}
                    <svg className="mt-1" width={200} height={50} viewBox="0 0 123 30">
                        <g className="fill-gray-800 dark:fill-gray-100" >
                            <path d="M6,24c-0.7,0-1.4-0.2-2.1-0.7c-0.6-0.5-1.2-1.1-1.7-2c-0.5-0.8-0.9-1.8-1.1-2.9c-0.3-1.1-0.4-2.3-0.4-3.5
		s0.1-2.4,0.4-3.5c0.3-1.1,0.7-2.1,1.1-2.9c0.5-0.8,1-1.5,1.7-2S5.2,5.9,6,5.9c0.7,0,1.3,0.2,1.9,0.6s1.2,1,1.7,1.8l-2.1,3.1
		c-0.5-0.6-1-0.9-1.6-0.9c-0.4,0-0.7,0.1-1,0.4c-0.3,0.2-0.6,0.6-0.8,1c-0.2,0.4-0.4,0.9-0.5,1.4c-0.1,0.5-0.2,1.1-0.2,1.7
		c0,0.6,0.1,1.2,0.2,1.7c0.1,0.5,0.3,1,0.5,1.4c0.2,0.4,0.5,0.7,0.8,1c0.3,0.2,0.6,0.4,1,0.4c0.4,0,0.8-0.2,1.2-0.5
		c0.4-0.3,0.7-0.8,0.9-1.4l2.1,2.9c-0.5,1.1-1.2,2-1.9,2.6C7.6,23.7,6.8,24,6,24z"/>
                            <path d="M14.5,18.4v5h-2.5v-5L9.3,8.9H12l1.3,4.6l1.3-4.6h2.8L14.5,18.4z" />
                            <path d="M22.9,23.4L21.5,19H20v4.4h-2.5V8.9h4.5c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.6,0.4c0.2,0.2,0.4,0.4,0.6,0.6
		c0.2,0.2,0.3,0.5,0.4,0.8c0.1,0.4,0.3,0.8,0.3,1.2c0.1,0.4,0.1,0.9,0.1,1.3c0,0.7-0.1,1.4-0.3,2c-0.2,0.6-0.5,1.1-0.8,1.6l2,6.5
		H22.9z M21.2,12.3H20v2.8h1.3c0.2,0,0.4-0.1,0.6-0.4c0.2-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1C21.7,12.5,21.5,12.3,21.2,12.3z"/>
                            <path d="M25.5,23.4V8.9H28v14.5H25.5z" />
                            <path d="M29,23.4V8.9h2.4v10.8h4.4v3.7H29z" />
                        </g>
                        <g className="fill-mainaccent-700">
                            <path d="M42.7,23.4l-3.5-9.1v9.1h-2.7v-17h2.7l3.5,9.2V6.4h2.7v17H42.7z" />
                            <path d="M46.2,23.4V8.9h2.5v14.5H46.2z" />
                            <path d="M53.3,23.9c-0.6,0-1.2-0.2-1.8-0.6c-0.5-0.4-1-1-1.4-1.7s-0.7-1.5-0.9-2.4c-0.2-0.9-0.3-1.9-0.3-3s0.1-2,0.3-3
		c0.2-0.9,0.5-1.7,0.9-2.4c0.4-0.7,0.9-1.2,1.4-1.7c0.5-0.4,1.1-0.6,1.8-0.6c0.6,0,1.1,0.2,1.6,0.5c0.5,0.4,1,0.9,1.5,1.7l-1.9,2.8
		c-0.4-0.5-0.9-0.8-1.3-0.8c-0.3,0-0.5,0.1-0.8,0.3c-0.2,0.2-0.5,0.4-0.6,0.8c-0.2,0.3-0.3,0.7-0.4,1.1c-0.1,0.4-0.2,0.9-0.2,1.3
		s0,0.9,0.1,1.4c0.1,0.4,0.2,0.8,0.4,1.1s0.4,0.6,0.6,0.8c0.2,0.2,0.5,0.3,0.8,0.3c0.7,0,1.2-0.5,1.7-1.6l1.9,2.7
		c-0.5,1-1,1.8-1.6,2.3S54,23.9,53.3,23.9z"/>
                            <path d="M61.4,23.4L59.3,19v4.4h-2.5V8.9h2.5v4.4l2.1-4.4h3L61,16.2l3.5,7.3H61.4z" />
                            <path d="M67.4,23.9c-0.6,0-1.2-0.2-1.8-0.6c-0.6-0.4-1-0.9-1.4-1.6c-0.4-0.7-0.7-1.5-1-2.4c-0.2-0.9-0.4-1.9-0.4-3
		s0.1-2,0.4-3c0.2-0.9,0.6-1.7,1-2.4c0.4-0.7,0.9-1.2,1.4-1.6c0.6-0.4,1.1-0.6,1.8-0.6s1.2,0.2,1.8,0.6c0.6,0.4,1,0.9,1.4,1.6
		s0.7,1.5,1,2.4c0.2,0.9,0.4,1.9,0.4,3s-0.1,2.1-0.4,3s-0.6,1.8-1,2.4s-0.9,1.2-1.4,1.6S68,23.9,67.4,23.9z M67.4,12.5
		c-0.3,0-0.6,0.1-0.8,0.3c-0.3,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.3,0.7-0.4,1.2c-0.1,0.4-0.2,0.9-0.2,1.4s0.1,1,0.2,1.4
		c0.1,0.4,0.3,0.8,0.4,1.2s0.4,0.6,0.7,0.8c0.3,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3c0.3-0.2,0.5-0.5,0.7-0.8s0.3-0.7,0.4-1.2
		s0.2-0.9,0.2-1.4s-0.1-1-0.2-1.4s-0.2-0.8-0.4-1.2c-0.2-0.3-0.4-0.6-0.7-0.8C67.9,12.6,67.7,12.5,67.4,12.5z"/>
                        </g>
                        <g className="fill-gray-800 dark:fill-gray-100">
                            <path d="M80.3,23.4V23c-0.8,0.7-1.6,1-2.5,1c-0.8,0-1.5-0.2-2.1-0.7c-0.6-0.5-1.2-1.1-1.7-1.9
		c-0.5-0.8-0.8-1.8-1.1-2.9s-0.4-2.3-0.4-3.5c0-1.2,0.1-2.4,0.4-3.5c0.3-1.1,0.6-2.1,1.1-2.9s1-1.5,1.7-2s1.3-0.7,2.1-0.7
		c0.8,0,1.6,0.3,2.3,0.9c0.7,0.6,1.3,1.4,1.9,2.5l-2.2,2.5c-0.3-0.5-0.6-0.8-0.9-1c-0.3-0.2-0.7-0.4-1-0.4c-0.4,0-0.7,0.1-1.1,0.4
		c-0.3,0.3-0.6,0.6-0.8,1c-0.2,0.4-0.4,0.9-0.6,1.5c-0.1,0.6-0.2,1.2-0.2,1.8c0,0.6,0.1,1.2,0.2,1.8c0.1,0.6,0.3,1.1,0.6,1.5
		s0.5,0.8,0.9,1c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.2,1.2-0.5c0.4-0.3,0.7-0.7,0.9-1.3h-1.8v-4.1h4.4v9.6H80.3z"/>
                            <path d="M88.8,23.4l-0.4-2H86l-0.4,2H83l3.1-14.5h2.1l3.1,14.5H88.8z M87.2,15.1l-0.5,2.8h1.1L87.2,15.1z" />
                            <path d="M94.5,23.9c-0.6,0-1.1-0.1-1.7-0.4s-1.1-0.6-1.6-1c0,0,0,0,0,0s0,0-0.1,0c0,0-0.1-0.1-0.1-0.1
		c0-0.1,0-0.1,0-0.1c0,0,0-0.2,0.1-0.5c0.1-0.3,0.2-0.6,0.3-1c0.1-0.3,0.2-0.7,0.3-1s0.2-0.6,0.3-0.8c0.1,0.1,0.2,0.1,0.2,0.2
		s0.1,0.1,0.1,0.1c0.4,0.3,0.8,0.6,1.1,0.7c0.4,0.2,0.8,0.3,1.2,0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.4-0.1
		c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.3,0.1-0.6c0-0.2,0-0.3-0.1-0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1,0-0.1-0.1-0.2-0.1
		c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.1-0.5-0.2c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2-0.1-0.4-0.2-0.6-0.3c-0.2-0.1-0.4-0.2-0.6-0.3
		c-0.2-0.1-0.3-0.3-0.5-0.4c-0.3-0.3-0.6-0.8-0.8-1.3c-0.2-0.5-0.3-1.3-0.3-2.2c0-0.6,0.1-1.3,0.2-1.9c0.2-0.6,0.4-1.1,0.6-1.4
		c0.3-0.4,0.5-0.7,0.9-0.9c0.3-0.2,0.6-0.4,1-0.5c0.3-0.1,0.7-0.1,1-0.1c0.6,0,1.1,0.1,1.7,0.4c0.5,0.2,1.1,0.6,1.6,1.2
		c-0.2,0.6-0.4,1.1-0.6,1.6c-0.2,0.5-0.4,1.1-0.6,1.6c-0.4-0.4-0.9-0.7-1.2-0.9c-0.4-0.2-0.8-0.3-1.2-0.3c-0.1,0-0.2,0-0.3,0
		s-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.2,0.3c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.1,0,0.3,0.1,0.4c0,0.1,0.1,0.2,0.2,0.3
		c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.1,0.5,0.2,0.7,0.3c0.2,0.1,0.5,0.2,0.7,0.4s0.5,0.3,0.7,0.5
		c0.2,0.2,0.4,0.5,0.6,0.7c0.2,0.3,0.3,0.6,0.4,1c0.1,0.3,0.1,0.6,0.2,0.9c0,0.3,0,0.7,0,1c0,1-0.1,1.8-0.3,2.4
		c-0.2,0.6-0.5,1.1-0.9,1.5c-0.4,0.4-0.8,0.6-1.2,0.8S94.9,23.9,94.5,23.9z"/>
                            <path d="M102.8,19.1h-1.5v4.3h-2.5V8.9h4c0.4,0,0.8,0.1,1.2,0.4c0.4,0.3,0.7,0.6,1,1.1s0.5,1,0.7,1.6
		c0.2,0.6,0.3,1.3,0.3,2c0,0.7-0.1,1.4-0.3,2c-0.2,0.6-0.4,1.1-0.7,1.6c-0.3,0.4-0.6,0.8-1,1.1S103.3,19.1,102.8,19.1z M102.8,12.5
		h-1.4v2.8h1.4c0.2,0,0.4-0.1,0.6-0.4c0.2-0.3,0.2-0.6,0.2-0.9c0-0.4-0.1-0.7-0.2-1S103,12.5,102.8,12.5z"/>
                            <path d="M111,23.4l-0.4-2h-2.4l-0.4,2h-2.5l3.1-14.5h2.1l3.1,14.5H111z M109.4,15.1l-0.5,2.8h1.1L109.4,15.1z" />
                            <path d="M119,23.4l-1.3-4.4h-1.5v4.4h-2.5V8.9h4.5c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.2,0.6,0.4
		c0.2,0.2,0.4,0.4,0.6,0.6c0.2,0.2,0.3,0.5,0.4,0.8c0.1,0.4,0.3,0.8,0.3,1.2c0.1,0.4,0.1,0.9,0.1,1.3c0,0.7-0.1,1.4-0.3,2
		c-0.2,0.6-0.5,1.1-0.8,1.6l2,6.5H119z M117.4,12.3h-1.3v2.8h1.3c0.2,0,0.4-0.1,0.6-0.4c0.2-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1
		C117.8,12.5,117.6,12.3,117.4,12.3z"/>
                        </g>
                    </svg>
                </Link>
                <div>{isHomePage}</div>
                <nav className={`hidden sm:flex justify-center font-medium pt-1 text-gray-800 dark:text-gray-100
                transition-colors duration-300 ${isScrolled ? '' : ' lg:text-gray-200'}`
                }>

                    {menuitems.map(([title, url]) => (
                        <Link
                            href="#"
                            key={url}
                            aria-label={`Menu Button Link for ${title}`}
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
                    <span className={`bg-gray-800 dark:bg-gray-100 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                            'rotate-45 translate-y-1' : '-translate-y-0.5'
                        }`} >
                    </span>
                    <span className={`bg-gray-800 dark:bg-gray-100 transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                            'opacity-0' : 'opacity-100'
                        }`} >
                    </span>
                    <span className={`bg-gray-800 dark:bg-gray-100 transition-all duration-300 ease-out 
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
                            aria-label={`Menu Button Link for ${title}`}
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