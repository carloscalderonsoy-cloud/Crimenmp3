import { FaAmazon } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

function Plataformas() {
    return (
        <div className="flex flex-col bg-cream items-center pt-14">
            <span className="text-black text-3xl pt-10 font-comic text-center md:px-0 px-4">Sigue el podcast en tu plataforma favorita</span>
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-20 pt-10 pb-10 w-11/12 md:w-4/5 lg:w-3/5 mx-10 space-y-10 md:space-y-0">
                <div className="flex flex-row w-full space-x-10 md:space-x-20">
                    <a href="https://music.amazon.com.mx/podcasts/64b8759f-18f8-4bb7-835e-b2e214482935/crimen-mp3" target="_blank" rel="noopener noreferrer" className="w-full h-full"><FaAmazon className="w-full h-full hover:text-light-purple transition-all duration-200"/></a>
                    <a href="https://open.spotify.com/show/4VB9XlfWgpksjUbQQEVS8l?si=28a31be2ffd54e60" target="_blank" rel="noopener noreferrer" className="w-full h-full"><FaSpotify className="w-full h-full hover:text-light-purple transition-all duration-200"/></a>
                    <a href="https://www.youtube.com/@crimenmp3" target="_blank" rel="noopener noreferrer" className="w-full h-full"><FaYoutube className="w-full h-full hover:text-light-purple transition-all duration-200"/></a>
                </div>
                <div className="flex flex-row w-full space-x-10 md:space-x-20">
                    <a href="https://www.instagram.com/crimenmp3" target="_blank" rel="noopener noreferrer" className="w-full h-full"><FaInstagram className="w-full h-full hover:text-light-purple transition-all duration-200"/></a>
                    <a href="https://www.facebook.com/crimenmp3" target="_blank" rel="noopener noreferrer" className="w-full h-full"><FaFacebook className="w-full h-full hover:text-light-purple transition-all duration-200"/></a>
                    <a href="https://www.tiktok.com/@crimenmp3" target="_blank" rel="noopener noreferrer" className="w-full h-full"><AiFillTikTok className="w-full h-full hover:text-light-purple transition-all duration-200"/></a>
                </div>
                
            </div>
        </div>
    )
}

export default Plataformas;