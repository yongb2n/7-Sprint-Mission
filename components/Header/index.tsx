import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "@/public/assets/icons/logo/logo.svg";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const isAddItemPage = router.pathname === "/additem";

  return (
    <header className={styles.container}>
      <h1>
        <Link href="/">
          <picture>
            <Image className={styles.logo} src={logo} alt="판다마켓" />
          </picture>
        </Link>
      </h1>
      <div className={styles.item}>
        <Link href="/comunity" className={styles["item-list"]}>
          자유게시판
        </Link>
        <Link
          href="/items"
          className={styles['item-list']}
        >
          중고마켓
        </Link>
      </div>
      <Link href="/login" className={styles["login-button"]}>
        로그인
      </Link>
    </header>
  );
}

export default Header;
