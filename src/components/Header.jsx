import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
    return (
        <header className="py-10 px-14 bg-hero-image">
            <Navbar />
            <Hero />
        </header>
    );
}