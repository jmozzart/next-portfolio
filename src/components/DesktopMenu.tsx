import Link from 'next/link';

const menuitems = [
    ['About', '/about'],
    ['Skills', '/skills'],
    ['Projects', '/projects'],
    ['Experiences', '/experiences']
];


export default function DesktopMenu() {
    return (
        <nav id="desktopmenu" className="hidden sm:flex justify-center space-y-2">
                    {menuitems.map(([title, url]) => (
                        <Link href={url} key={url} className="rounded-lg px-3 py-2 text-center text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
                            {title}
                        </Link>
                    ))}
                </nav>
    );
}