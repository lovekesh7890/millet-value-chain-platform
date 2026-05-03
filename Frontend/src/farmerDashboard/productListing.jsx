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
          <div
            key={index}
            className="flex flex-col border-2 border-black rounded-xl bg-olive-200 p-3"
          >
            <div className="flex justify-between items-start">
              <h5 className="font-serif">
                {item.ProductName}
                <p className="font-roboto text-sm text-gray-600">
                  {item.Variety}
                </p>
              </h5>
              <p className="text-green-900 font-roboto text-xl">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                {item.Price}
              </p>
            </div>

            <div className="flex gap-2">
              <div className="bg-yellow-500 text-sm font-bold rounded-full">
                <button className="p-1">Organic</button>
              </div>
              <div className=" text-sm font-bold rounded-full border-2 border-olive-100">
                <button className="p-1">FSSAI</button>
              </div>
            </div>

            <div className="flex justify-between font-roboto font-medium text-gray-500">
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