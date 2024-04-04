// components/ClientDataFetcher.js

import { useEffect } from 'react';
import BlogCard from "@/components/Blogcard";

const ClientDataFetcher = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products?limit=10');
      const data = await response.json();
      const posts = data.posts;
      console.log(posts); // Verileri kontrol etmek için konsola yazdır
      // Burada verileri işleyebilirsiniz
    };
    fetchData();
  }, []);

  return <div></div>; // Verileri doğrudan görsel bileşen olarak döndürmüyoruz
};

export default ClientDataFetcher;
