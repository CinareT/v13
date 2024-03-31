import react from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css"

function BlogCard () {
     return (
      <Link href='/' className={styles.card}>
        <div>
           <Image src='https://picsum.photos/200/300' alt="Blog Card Image" width={96} height={96}/>
        </div>
        <div className={styles.cardBody}>
           <h3>Title</h3>
           <p>Lorem ipsum</p>
        </div>
      </Link>

     );
}

export default BlogCard;