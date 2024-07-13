// Best.tsx
import { useEffect, useState } from "react";
import BestPost from "./BestPost";
import styles from "./styles.module.scss";
import { getArticles, Article } from "@/pages/api/articles";

function Best() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const params = {
          page: 1,
          pageSize: 3,
          orderBy: "like",
          keyword: "",
        };
        const { list } = await getArticles(params);
        setArticles(list);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div className={styles["container"]}>
      <label className={styles["title"]}>베스트 게시글</label>
      <div className={styles["best-post-wrapper"]}>
        {articles.map((article) => (
          <BestPost key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Best;
