import { Inter } from 'next/font/google'

import style from './style.module.css';
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={style.container}>
        <header>Header</header>
        <main> {children} </main> 
        <footer>Footer</footer>
        </body>
    </html>
  );
}
