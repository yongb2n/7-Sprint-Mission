import BestPost from "./BestPost";
import styles from "./styles.module.scss";

function Best() {
  return (
    <div className={styles["container"]}>
      <label className={styles["title"]}>베스트 게시글</label>
      <div className={styles["best-post-wrapper"]}>
        <BestPost />
        <BestPost />
        <BestPost />
      </div>
    </div>
  );
}

export default Best;
