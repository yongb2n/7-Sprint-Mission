import AllItemList from "./AllItemList";
import Dropdown from "./Dropdown";
import "../styles/AllItem.css";

function AllItem() {
  return (
    <div className="all-item-container">
      <div className="all-item-wrapper">
        <label className="all-item-label">전체 상품</label>
        <div className="all-item-input-button-container">
          <input
            className="all-item-input"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
          <button className="all-item-button">상품 등록하기</button>
          <Dropdown />
        </div>
      </div>
      <AllItemList />
    </div>
  );
}

export default AllItem;
