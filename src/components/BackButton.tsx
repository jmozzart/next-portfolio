"use client"
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className="bg-mainaccent-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Go Back
        </button>
    );
}