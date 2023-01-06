import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, PRODUCTS_PATH } from "../../api";
import { removeItem } from "../../store/slices/cartSlices";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.cart);
  const [productDetails, setProduct] = useState([]);

  const dispatch = useDispatch();

  const getItems = (item) => {
    return axios.get(`${BASE_URL}/${PRODUCTS_PATH}/${item}`);
  };

  async function getAllItems() {
    const a = await Promise.all(favorites.map((item) => getItems(item)));
    return a;
  }

  const b =
    favorites.length > 0 ? getAllItems().then((res) => setProduct(res)) : "";

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container">
      <h2>Favorites</h2>
      <ul>
        {favorites.length > 0 ? (
          productDetails.map((item) => (
            <li key={item.id}>
              {item.data.data.attributes.title}{" "}
              {item.data.data.attributes.price}
              <button>
                <Link
                  to={`/detail/${item.data.data.id}`}
                  className="detail-btn"
                >
                  Detail
                </Link>
              </button>
              <button className="favorites-btn" onClick={() => handleRemove(item.data.data.id)}>
                Remove From Favorites
              </button>
            </li>
          ))
        ) : (
          <div className="favorites-msg">
            You have not added anything yet to your favorites.
          </div>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
