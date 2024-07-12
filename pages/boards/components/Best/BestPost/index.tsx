import Image from "next/image";
import styles from "./styles.module.scss";
import bestBadge from "@/assets/images/img_badge.png";
import heartIcon from "@/assets/icons/ic_heart.svg";
import laptop from "@/assets/images/img_laptop.png";

function BestPost() {
  return (
    <div className={styles["container"]}>
      <Image className={styles["best-badge"]} src={bestBadge} alt="베스트" />
      <div className={styles["wrapper"]}>
        <div className={styles["best-post-title-container"]}>
          <p className={styles["title"]}>
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
          </p>
          <div className={styles["post-image-container"]}>
            <Image className={styles["post-image"]} src={laptop} alt="맥북" />
          </div>
        </div>
        <div className={styles["post-user-container"]}>
          <div className={styles["post-user-like"]}>
            <span className={styles["user-name"]}>총명한판다</span>
            <div className={styles["like-wrapper"]}>
              <Image src={heartIcon} alt="좋아요" />
              <span className={styles["like-count"]}>10</span>
            </div>
          </div>
          <span className={styles["date"]}>2024. 04. 16</span>
        </div>
      </div>
    </div>
  );
}

export default BestPost;
