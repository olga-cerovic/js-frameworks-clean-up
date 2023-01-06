import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, PRODUCTS_PATH } from "../../api";

function Detail() {
  const [productDetails, setProductDetails] = useState();
  const urlParams = useParams();
  console.log(productDetails);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/${PRODUCTS_PATH}/${urlParams.param}`)
      .then(function (response) {
        // handle success
        setProductDetails(response.data.data);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <h2>Detail page</h2>
      <p>{productDetails?.attributes.title}</p>
      <p>{productDetails?.attributes.price}</p>
      <p>{productDetails?.attributes.description}</p>
    </div>
  );
}
export default Detail;
