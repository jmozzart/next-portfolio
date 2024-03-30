"use client";
import { useEffect, useState, MouseEvent } from 'react';

type SectionButtonProps = {
    url: string;
    text: string;
    className?: string;
}

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



export default function SectionButton({ url, text, className }: SectionButtonProps) {
    return (
    // @ts-ignore
        <button onClick={(e) => handleClick(e, url)} className={className}>{text}</button>
    );
}