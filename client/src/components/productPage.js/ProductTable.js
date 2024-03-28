import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../../features/ProductAction";
import { unwrapResult } from "@reduxjs/toolkit";
const ProductTable = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);
  console.log(product);
  useEffect(() => {
    dispatch(fetchproducts())
      .then(unwrapResult)
      .then((res) => {
        setData(product.products);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className="card m-5">
      <div className="card-header">
        <h5 className="card-title">Sales Products</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
