
import Link from 'next/link';

export default function Footer(){
    return (
    <section id="footer" className="bg-cyan-700 text-white">
        <div className="container mx-auto p-10">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 ">
            <h3 className="text-xl mb-3">About</h3>
            <p className="pr-8 text-left">Cyril Nicko Gaspar is a professional web developer and web designer.</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl mb-3">Quick Links</h3>
            <ul className="space-y-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/skills">Skills</Link></li>
            </ul>
            </div>
            <div className="w-full md:w-1/3">
            <h3 className="text-xl mb-3">Contact</h3>
            <p>Quezon City, Philippines</p>
            <p>Email: cyrilnicko@gmail.com</p>
            <p>Phone: +63915.808.7114</p>
            </div>
        </div>
        <hr className="my-6" />
        <div className="text-center">
            <p className="text-sm">This portfolio website is created and designed by Cyril Nicko Gaspar.</p>
        </div>
        </div>
  </section>
    )
}
