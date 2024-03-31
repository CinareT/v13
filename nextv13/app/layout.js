import { Inter } from 'next/font/google'; 

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import style from './style.module.css';
import '../styles/global.css';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={style.container}>
        <Header/>
        <main> {children} </main> 
        <Footer/>
        </body>
    </html>
  );
}
