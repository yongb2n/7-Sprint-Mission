import Image from "next/image";
import styles from "./styles.module.scss";
import laptop from "@/assets/images/img_laptop.png";
import heartIcon from "@/assets/icons/ic_heart.svg";
import profileImage from "@/assets/icons/ic_profile.svg";

function AllPost() {
  return (
    <div className={styles["container"]}>
      <div className={styles["post-top-info"]}>
        <p className={styles["title"]}>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </p>
        <div className={styles["image-wrapper"]}>
          <Image src={laptop} alt="상품 사진" width={48} height={44} />
        </div>
      </div>
      <div className={styles['post-bottom-info']}>
        <div className={styles['user-wrapper']}>
          <Image src={profileImage} alt="프로필" width={24} height={24} />
          <span className={styles['user-name']}>총명한 판다</span>
          <span className={styles['date']}>2024. 04. 16</span>
        </div>
        <div className={styles['like-wrapper']}>
          <div className={styles['like-image-wrapper']}>
            <Image src={heartIcon} alt="좋아요" width={20} height={17} />
          </div>
          <span className={styles['like-count']}>9999+</span>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
