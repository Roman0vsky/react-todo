import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Product from "./components/Product/Product";
import Total from "./components/Total/Total";

type ProductType = {
  name: string;
  price: string;
  amount: string;
  id: number;
};

function App(props: any) {
  const [key, setKey] = useState(3);
  const [id, setId] = useState(3);
  const [data, setData] = useState(props.data);

  const productList = data.map((product: ProductType) => (
    <Product
      {...product}
      deleteProduct={deleteProduct}
      editProduct={editProduct}
    />
  ));

  function editProduct(newProduct: ProductType, id: number) {
    setData(
      data.map((product: ProductType) =>
        product.id === id ? {...product, ...newProduct} : product
      )
    );
  }

  function deleteProduct(id: number) {
    setData(data.filter((product: ProductType) => product.id !== id));
  }

  function addProduct(product: ProductType) {
    setData([...data, { ...product, key: key, id: id }]);
    setKey(key + 1);
    setId(id + 1);
  }

  return (
    <div className="App">
      <Form addProduct={addProduct} editProduct={editProduct} />
      <ul>{productList}</ul>
      <Total productList={data} />
    </div>
  );
}

export default App;
