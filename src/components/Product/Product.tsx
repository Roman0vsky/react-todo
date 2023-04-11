import React, { useState } from "react";
import Form from "../Form/Form";
import "./Product.css";

export default function Product(props: any) {
  const [isEditing, setEditing] = useState(false);

  const defaultTemplate = (
    <div className="Product">
      <div className="Product__name">{props.name}</div>
      <div className="Product__numeric">{props.price}</div>
      <div className="Product__numeric">{props.amount}</div>
      <div>
        <button
          className="Product__button"
          onClick={() => setEditing(!isEditing)}
        >
          Edit
        </button>
        <button
          className="Product__button Product__button_delete"
          onClick={() => props.deleteProduct(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  const editingTemplate = (
    <div>
      <Form
        isEditing={isEditing}
        setEditing={setEditing}
        productId={props.id}
        productName={props.name}
        productPrice={props.price}
        productAmount={props.amount}
        editProduct={props.editProduct}
      />
    </div>
  );

  return (
    <li className="product">{isEditing ? editingTemplate : defaultTemplate}</li>
  );
}
