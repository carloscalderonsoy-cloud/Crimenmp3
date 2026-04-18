'use client'
import { FaArrowRight } from "react-icons/fa6";

function Shop() {

    const scrollToNewsLetter = () => {
        const newsLetterSection = document.getElementById('newsletter-section');
        if (newsLetterSection) {
            newsLetterSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="shop-section" className="bg-cream">
            <div className="flex flex-col w-full items-center pt-16">
                <span className="text-black text-3xl font-comic [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Shop</span>
                <div className="flex flex-row pt-10">
                    <img src="/shop.png" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between sm:mx-20 pt-6 mx-4 sm:space-y-0 space-y-4">
                <span className="text-3xl font-comic">Pre Ordena Ahora</span>
                <span onClick={scrollToNewsLetter} className="hover:text-black cursor-pointer text-3xl font-comic text-light-purple flex flex-row items-center">Registro<FaArrowRight className="pl-2" /></span>
            </div>
        </div>
    )
}

export default Shop;