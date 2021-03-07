import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
      Built by Damien Angelos using <img src="/nextjs.svg" alt="Next.js" className={styles.logo} />
    </a>
  </footer>
);

export default Footer;
