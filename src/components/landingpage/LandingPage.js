import styles from './LandingPage.module.css';
import ThemeToggle from '../pagelayout/themeToggle'
import { useState, useEffect } from 'react';
const slides = [
    {
        description: "The platform is super clean and intutive, i feel at home!",
    },
    {
        description: "I love connecting with students from other universties here."
    },
    {
        description: " I can see all my university info in one place, it's so easy! "
    },
    {
        description: "Finding professors and contatcing them has never been simpler."
    }
]
export default function LandingPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [theme , setTheme] = useState('dark');
    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme == 'dark' ? 'light' : 'dark'));
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    const currentSlide = slides[currentIndex];

    return (
        <div className={theme == "dark" ? styles.darkContainer : styles.lightContainer}>
            <div className={styles.headerSection}>
                <div className={styles.leftHeader}>
                    <p className={styles.headerText}>See colleges</p>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                </div>
                <div className={styles.headerRight}>
                    <button>Q&A</button>
                    <button>About</button>
                    <button className={styles.contactUs}>Contact us</button>
                </div>

            </div>
            <div className={styles.bodySection}>
                <div className={styles.firstHalf}>
                    <p className={styles.bodyFirstTitle}>PROJECT</p>
                    <p className={styles.bodySecondTitle}>CAMPUS</p>
                    <p key={currentIndex} className={`${styles.bodyDescription} ${styles.fade}`}>{currentSlide.description}</p>


                </div>



            </div>
            <div className={styles.bottomSection}>
                <div className={styles.bottomContent}>
                    <button className={styles.signUpButton}>Get Started</button>
                    

                </div>
            </div>

        </div>
    )
}