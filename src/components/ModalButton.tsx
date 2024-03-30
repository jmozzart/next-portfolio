"use client"
import React, { useState, ReactNode } from 'react';
import Modal from './Modal';

type ModalButtonProps = {
    buttonClass?: string;
    children: ReactNode;
    buttonLabel: string;
};

export default function ModalButton({ children, buttonClass, buttonLabel }: ModalButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleModal} className={buttonClass}>
                {buttonLabel}
            </button>
            <Modal isOpen={isOpen} onClose={toggleModal}>{children}</Modal>
        </>
    );
}