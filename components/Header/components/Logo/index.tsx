import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo/logo.svg";
import mobileLogo from "@/assets/icons/logo/mobile-logo.svg";
import debounce from "lodash-es/debounce";

function Logo() {
  const [currentLogo, setCurrentLogo] = useState(logo);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth <= 767) {
        setCurrentLogo(mobileLogo);
      } else {
        setCurrentLogo(logo);
      }
    }, 300);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <h1>
      <Link href="/">
        <Image className={styles["logo"]} src={currentLogo} alt="판다마켓" />
      </Link>
    </h1>
  );
}

export default Logo;
