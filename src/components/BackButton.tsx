"use client"
import { useRouter } from 'next/navigation';
type BackButtonProps = {
  buttonText: string;
  className: string;
}

export default function BackButton(btnProps: BackButtonProps) {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className={btnProps.className}>
            {btnProps.buttonText}
        </button>
    );
}