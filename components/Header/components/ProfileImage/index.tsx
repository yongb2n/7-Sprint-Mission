import Link from "next/link";
import Image from "next/image";
import loginIcon from "@/public/assets/icons/login-icon.svg";
import styles from "./styles.module.scss";

function ProfileImage() {
  return (
    <Link href="/login">
      <Image
        className={styles["profile-image"]}
        src={loginIcon}
        alt="프로필 이미지"
      />
    </Link>
  );
}

export default ProfileImage;
