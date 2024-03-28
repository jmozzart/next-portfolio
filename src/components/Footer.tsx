
import Link from 'next/link';

export default function Footer(){
    return (
    <section id="footer" className="bg-gray-800 text-gray-100">
        <div className="container mx-auto p-10">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
            <h3 className="text-lg mb-3 text-left">About</h3>
            <p className="pr-8 text-left text-sm">Cyril Nicko Gaspar is a professional web developer and web designer.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg mb-3 text-left md:text-center">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/skills">Skills</Link></li>
            </ul>
            </div>
            <div className="w-full md:w-1/3 mb-8">
            <h3 className="text-lg mb-3 text-left">Contact</h3>
            <p className='text-left text-sm'>Quezon City, Philippines</p>
            <p className='text-left text-sm'>Email: cyrilnicko@gmail.com</p>
            <p className='text-left text-sm'>Phone: +63915.808.7114</p>
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
