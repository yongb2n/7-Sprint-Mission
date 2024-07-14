import Image from "next/image";
import kebabIcon from "@/assets/icons/ic_kebab.svg";
import profileImage from "@/assets/icons/ic_profile.svg";
import likeIcon from "@/assets/icons/ic_heart.svg";
import Comment from "./components/Comment";
import backIcon from "@/assets/icons/ic_back.svg";
import NotComment from "./components/NotComment";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

function BoardsDetail() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const router = useRouter();

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const handleBackListButtonClick = () => {
    router.push("/boards");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["title-container"]}>
          <p className={styles["title"]}>
            맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야 하나요?
          </p>
          <Image src={kebabIcon} alt="케밥 아이콘" width={24} height={24} />
        </div>

        <div className={styles["user-container"]}>
          <div className={styles["user-wrapper"]}>
            <Image
              className={styles["user-profile-image"]}
              src={profileImage}
              alt="프로필"
              width={24}
              height={24}
            />
            <span className={styles["user-name"]}>총명한 판다</span>
            <span className={styles["date"]}>2024. 01. 02</span>
          </div>
          <div className={styles["like-wrapper"]}>
            <Image src={likeIcon} alt="좋아요" width={24} height={24} />
            <span className={styles["like-count"]}>123</span>
          </div>
        </div>
      </div>
      <p className={styles["description"]}>
        맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야 하나요?
      </p>

      <div className={styles["comment-container"]}>
        <label className={styles["comment"]} htmlFor="comment">
          댓글 달기
        </label>
        <textarea
          id="comment"
          value={textAreaValue}
          onChange={handleTextAreaChange}
          className={styles["comment-textarea"]}
          placeholder="댓글을 입력해주세요."
        />
        <div className={styles["comment-button-container"]}>
          <div></div>
          <button
            className={styles["comment-button"]}
            disabled={!textAreaValue}
          >
            등록
          </button>
        </div>
      </div>

      <Comment />
      <Comment />
      <Comment />

      {/*  <NotComment /> */}

      <div className={styles["back-button-container"]}>
        <button
          className={styles["back-button"]}
          onClick={handleBackListButtonClick}
        >
          목록으로 돌아가기
          <Image src={backIcon} alt="뒤로가기" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default BoardsDetail;
