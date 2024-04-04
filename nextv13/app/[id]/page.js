import React from "react";
import Image from 'next/image';
import styles from "./styles.module.css";
import { notFound } from "next/navigation";

async function getPosts(id) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return await response.json();
}

export default async function Page(params) {
    const { id, title, description } = await getPosts(params.id);

    if(!title) {
     return notFound();
    }
    return (
        <div className={styles.blogContainer}>
            <div className={styles.cardImage}>
                <Image src={`https://picsum.photos/960/400?random=${params.id}`} alt={title} width={400} height={300} />
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
