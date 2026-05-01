import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductListing() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("TOKEN:", token);

      if (!token) {
        console.log("No token found");
        return;
      }

      const res = await axios.get(
        "http://localhost:5000/api/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("DATA:", res.data);
      setProducts(res.data);

    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

 
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-2 p-2 font-roboto font-semibold cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

        {products.map((item, index) => (
          <div key={index} className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3">

            <div className="flex justify-between items-start">
              <h6>
                {item.ProductName}
                <p>{item.Variety}</p>
              </h6>
              <p>₹{item.Price}</p>
            </div>

            <div className="mt-2 flex gap-2">
              <button>Organic</button>
              <button>FSSAI</button>
            </div>

            <div className="flex justify-between mt-2">
              <p>Stock: {item.Stock}</p>
              <p>{item.Location}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductListing;