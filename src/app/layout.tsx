import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cyril Nicko Next Portfolio",
    description: "Hand coded portfolio using Next.js and TailwindCSS",
    icons: {
        icon: 'images/16.png',
      }

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}