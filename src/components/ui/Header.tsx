import Link from 'next/link';
import styles from './styles/Header.module.css';
import ImgHeaderLogoLarge from './imgs/img-header-logo-large';
import ImgHeaderLogoSmall from './imgs/img-header-logo-small';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <ImgHeaderLogoLarge
                        className={styles.iconLarge}
                    />
                    <ImgHeaderLogoSmall
                        className={styles.iconSmall}
                    />
                </Link>
            </header>
        </>
    );
}
