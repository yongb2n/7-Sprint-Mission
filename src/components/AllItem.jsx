import AllItemList from "./AllItemList";
import Dropdown from "./Dropdown";
import "../styles/AllItem.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function AllItem() {
  const [filter, setFilter] = useState("recent");

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="all-item-container">
      <div className="all-item-wrapper">
        <label className="all-item-label">전체 상품</label>
        <div className="all-item-input-button-container">
          <input
            className="all-item-input"
            placeholder="검색할 상품을 입력해주세요"
          ></input>
          <Link to="/additem">
            <button className="all-item-button">상품 등록하기</button>
          </Link>
          <Dropdown filter={filter} changeFilter={changeFilter}/>
        </div>
      </div>
      <AllItemList filter={filter} />
    </div>
  );
}

export default AllItem;
