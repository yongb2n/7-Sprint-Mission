import Image from "next/image";
import kebabIcon from "@/assets/icons/ic_kebab.svg";
import profileImage from "@/assets/icons/ic_profile.svg";
import styles from "./styles.module.scss";

function Comment() {
  return (
    <div className={styles["container"]}>
      <div className={styles["title-container"]}>
        <p className={styles["title"]}>혹시 사용기간이 어떻게 되실까요?</p>
        <Image src={kebabIcon} alt="케밥 아이콘" width={24} height={24} />
      </div>
      <div className={styles["user-container"]}>
        <div className={styles["user-wrapper"]}>
          <Image src={profileImage} alt="프로필" width={32} height={32} />
          <div className={styles["user-info"]}>
            <span className={styles["user-name"]}>상큼한판다</span>
            <span className={styles["time"]}>1시간 전</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Comment;
