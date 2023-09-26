import Link from 'next/link';
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          MyApp
        </Link>
      </div>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">
              About
            </Link>
          </li>
          <li>
            <Link href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
