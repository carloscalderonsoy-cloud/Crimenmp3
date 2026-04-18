'use client'
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        setIsMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `/#${id}`;
        }
    };

    return (
        <div className="relative z-50">
            <div className="h-20 flex flex-row items-center mx-4 md:mx-10">
                <div className="w-28">
                    <Link href="/">
                        <Image src="/logo.png" alt="Crimen.mp3 logo" width={112} height={112} className="w-full" />
                    </Link>
                </div>
                <div className="hidden sm:flex flex-grow justify-center space-x-14 text-white">
                    <Link href="/" className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-comic text-2xl relative after:bg-white after:absolute after:w-full after:h-0 after:top-8 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200">Inicio</Link>
                    <Link href="/episodios" className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-comic text-2xl relative after:bg-white after:absolute after:w-full after:h-0 after:top-8 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200">Episodios</Link>
                    <button onClick={() => scrollTo('newsletter-section')} className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-comic text-2xl relative after:bg-white after:absolute after:w-full after:h-0 after:top-8 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200 cursor-pointer">Newsletter</button>
                    <button onClick={() => scrollTo('shop-section')} className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] font-comic text-2xl relative after:bg-white after:absolute after:w-full after:h-0 after:top-8 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200 cursor-pointer">Shop</button>
                </div>
                <div className="hidden sm:block w-28 text-right">
                    <IoIosSearch className="w-8 h-8 text-white inline-block" />
                </div>
                <div className="block sm:hidden ml-auto">
                    <FaBars className="w-8 h-8 text-white cursor-pointer" onClick={() => setIsMenuOpen(true)} />
                </div>
            </div>

            <div className={`absolute top-0 left-0 w-full bg-cream text-black transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out sm:hidden`}>
                <div className="flex justify-end items-end pr-4 pt-6">
                    <FaXmark className="w-8 h-8 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                </div>
                <div className="flex flex-col space-y-4 items-center pt-2 pb-6">
                    <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-comic text-lg relative after:bg-black after:absolute after:w-full after:h-0 after:top-6 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200">Inicio</Link>
                    <Link href="/episodios" onClick={() => setIsMenuOpen(false)} className="font-comic text-lg relative after:bg-black after:absolute after:w-full after:h-0 after:top-6 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200">Episodios</Link>
                    <button onClick={() => scrollTo('newsletter-section')} className="font-comic text-lg relative after:bg-black after:absolute after:w-full after:h-0 after:top-6 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200 cursor-pointer">Newsletter</button>
                    <button onClick={() => scrollTo('shop-section')} className="font-comic text-lg relative after:bg-black after:absolute after:w-full after:h-0 after:top-6 after:left-0 hover:after:h-0.5 after:transition-all after:duration-200 cursor-pointer">Shop</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
