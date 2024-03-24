import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Navbar(){
    return(
        <>
        <nav className="nav">
            <Image src={Logo} alt="Meme Logo" width={40} height={30} />
            <h1 className="title">Meme Generator</h1>
            <h3 className="nav-subtitle">React Course - Project 3</h3>
        </nav>
        </>
    )
}