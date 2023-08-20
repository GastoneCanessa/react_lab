import styles from '../style/Header.module.css';

export default function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src='/logo512.png' alt="Logo" className={styles.logo}/>
            </div>
            <h1 className={styles.title}>NexaTech</h1>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">Home</a></li>
                    <li className={styles.navItem}><a href="/about">About</a></li>
                    <li className={styles.navItem}><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}