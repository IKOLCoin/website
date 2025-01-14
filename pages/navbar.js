// components/Navbar.js
import { useState } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from 'next/router';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
	const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };



    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarpad}>
                <div className={styles.logo}><img src="./logo.svg"></img></div>
                <div className={styles.links}>
                    <a onClick={() => handleScroll("#about")}>About</a>
                    <a onClick={() => handleScroll("#tokenomics")}>Tokenomics</a>
                    <a onClick={() => handleScroll("#partners")}>Partners</a>
                    <a onClick={() => handleScroll("#roadmap")}>Roadmap</a>
                    <a onClick={() => handleScroll("#contact")}>Contact</a>
                </div>
                <a onClick={() => router.push('/IKOL_Lightpaper_v1.0.pdf')} className={styles.externalLink}>Lightpaper</a>
                <div className={styles.menuToggle} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
                    <a onClick={() => handleScroll("#about")}>About</a>
                    <a onClick={() => handleScroll("#tokenomics")}>Tokenomics</a>
                    <a onClick={() => handleScroll("#partners")}>Partners</a>
                    <a onClick={() => handleScroll("#roadmap")}>Roadmap</a>
                    <a onClick={() => handleScroll("#contact")}>Contact</a>
                    <a onClick={() => handleScroll("#tokenomics")} className={styles.externalLinkM}>External</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;