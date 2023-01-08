import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, PRODUCTS_PATH } from "../../api";
import "./Home.css";

function Home(props) {
  // console.log(props);
  const [myData, setMyData] = useState([]);

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
  return (
    <div className="container">
      <h2>Home page</h2>
      <ul>
        {myData.map((item) => (
          <li key={item.id}>
            {item.attributes.title} {item.attributes.price}
            <Link to={`/detail/${item.id}`} className="detail-btn">
              Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
