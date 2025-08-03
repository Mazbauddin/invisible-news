import NewsList from "@/components/news/NewsList";
import { NewsItem } from "@/types/news";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

const Newspage = () => {
  // const [news, setNews] = useState<NewsItem[]>([]);
  // const [search, setSearch] = useState<string>("");
  // const [category, setCategory] = useState<string>("");

  // useEffect(() => {}, []);
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>

      <NewsList />
    </div>
  );
};

export default Newspage;
