import React from "react";
import Link from "next/link";
import styles from './styles.module.css';

function Header() {
     return (
      <header className={styles.header}>
          <Link href='/' className={styles.logo}>
              <span>Blog</span>
          </Link>
          <nav>
               <Link href='https://github.com/CinareT' target="_blank">
                    About
               </Link>
          </nav>
      </header>
     );
}


export default Header;