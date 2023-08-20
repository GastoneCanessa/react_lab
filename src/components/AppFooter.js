import styles from '../style/Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <h1>Footer</h1>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/terms">Term and conditions</a></li>
                    <li className={styles.navItem}><a href="/privacy">Privacy Policy</a></li>
                    <li className={styles.navItem}><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className={styles.copyright}>
                © NexaTech. All rights reserved.
            </div>
        </footer>
    )
}