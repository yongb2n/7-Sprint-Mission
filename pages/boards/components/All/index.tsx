import Image from "next/image";
import Dropdown from "./Dropdown";
import styles from "./styles.module.scss";
import searchIcon from "@/assets/icons/ic_search.svg";
import AllPost from "./AllPost";

function All() {
  const options = ["최신순", "좋아요순"];

  return (
    <div className={styles["container"]}>
      <div className={styles["all-post-top-header"]}>
        <label className={styles["title"]}>게시글</label>
        <button className={styles["button"]}>글쓰기</button>
      </div>
      <div className={styles["all-post-bottom-header"]}>
        <div className={styles["search-container"]}>
          <Image
            src={searchIcon}
            alt="검색"
            className={styles["search-icon"]}
            width={24}
            height={24}
          />
          <input
            type="text"
            className={styles["search"]}
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <Dropdown options={options} defaultOption="최신순" />
      </div>
      <AllPost />
      <AllPost />
      <AllPost />
      <AllPost />
      <AllPost />
    </div>
  );
}

export default All;
