import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>© 2023 Spotify statistics. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;