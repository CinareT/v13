// import Image from "next/image";
import styles from "./style.module.css";
import BlogCard from "@/components/Blogcard";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  if (response) {
    return await response.json();
  }
}

export default async function Home() {
  const { products } = await getPosts();
  return (
    <div className={styles.blogsContainer}>
      {products.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
