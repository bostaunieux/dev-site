import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    Built by Damien Angelos using
    <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
      <img src="/nextjs.svg" alt="Next.js" className={styles.logo} />
    </a>
  </footer>
);

export default Footer;
