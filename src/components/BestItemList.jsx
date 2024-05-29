import { useEffect, useState } from "react";
import heartIcon from "../images/icons/ic_heart.svg";
import { getProducts } from "../api/api";
import "../styles/BestItem.css";

function BestItemList() {
  const [products, setProducts] = useState([]);

  const getProductsList = async (options) => {
    const { list } = await getProducts(options);
    setProducts(list);
  };

  useEffect(() => {
    getProductsList({ page: 1, pageSize: 4, orderBy: "favorite" });
  }, []);

  return (
    <div className="best-item-list-container">
      {products.map((product) => (
        <div key={product.id} className="best-item-list-wrapper">
          <img
            src={product.images}
            alt={product.name}
            width="282"
            height="282"
          />
          <span className="best-item-list-title">{product.name} 팝니다</span>
          <strong className="best-item-list-price">
            {Number(product.price).toLocaleString()}원
          </strong>
          <div className="best-item-list-like-wrapper">
            <img src={heartIcon} alt="좋아요" width="16" height="16" />
            <span className="best-item-list-like-count">
              {product.favoriteCount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BestItemList;
