import React from "react";
import "./Total.css";

type TotalProps = {
  productList: Array<ProductType>;
};

type ProductType = {
  price: string;
  amount: string;
};

export default function Total({ productList }: TotalProps) {
  return (
    <div>
      <div className="Total">
        Total sum:
        {productList.reduce(
          (sum: number, product) => sum + +product.price * +product.amount,
          0
        )}
      </div>
    </div>
  );
}
