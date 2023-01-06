import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, PRODUCTS_PATH } from "../../api";
import "./Home.css";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../store/slices/cartSlices";

function Home(props) {
  // console.log(props);
  const [myData, setMyData] = useState([]);

  const dispatch = useDispatch();
  // console.log(myData);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/${PRODUCTS_PATH}`)
      .then(function (response) {
        // handle success
        // console.log(response.data.data);
        setMyData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  }, []);

  const handleClick = (id) => {
    dispatch(addToFavorites(id));
  };

  return (
    <div className="container">
      <h2>Home page</h2>
      <ul>
        {myData.map((item) => (
          <li key={item.id}>
            {item.attributes.title} {item.attributes.price}
            <button>
              <Link to={`/detail/${item.id}`} className="detail-btn">
                Detail
              </Link>
            </button>
            <button
              className="favorites-btn"
              onClick={() => handleClick(item.id)}
            >
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
