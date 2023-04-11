import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.css";

type Inputs = {
  name: string;
  price: number;
  amount: number;
};

export default function Form(props: any) {
  const [productName, setProductName] = useState(props.productName);
  const [productPrice, setProductPrice] = useState(props.productPrice);
  const [productAmount, setProductAmount] = useState(props.productAmount);

  function handleChangeName(e: any) {
    setProductName(e.target.value);
  }
  function handleChangePrice(e: any) {
    setProductPrice(e.target.value);
  }
  function handleChangeAmount(e: any) {
    setProductAmount(e.target.value);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    formState,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = props.isEditing
    ? (data) => {
        console.log(data);

        props.editProduct(data, props.productId);
        props.setEditing(!props.isEditing);
      }
    : (data) => {
        props.addProduct(data);
      };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);
  if (props.isEditing) {
    return (
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="Form__input"
          placeholder="Name"
          autoComplete="off"
          value={props.isEditing ? productName : ""}
          {...register("name", {
            required: true,
            pattern: {
              value: /^[A-Z]\w{4,19}$/,
              message:
                "Name must be 5 - 20 characters long, must start with a big letter, only alphanumeric characters allowed",
            },
          })}
          style={{ borderColor: errors.name && "red" }}
          onChange={handleChangeName}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <input
          className="Form__input"
          placeholder="Price"
          autoComplete="off"
          value={props.isEditing ? productPrice : ""}
          {...register("price", {
            required: true,
            pattern: {
              value: /^[1-9]\d{0,9}$/,
              message: "Price must be 1-9999999999, only numbers allowed",
            },
          })}
          style={{ borderColor: errors.price && "red" }}
          onChange={handleChangePrice}
        />
        {errors.price && <span>{errors.price.message}</span>}
        <input
          className="Form__input"
          placeholder="Amount"
          autoComplete="off"
          value={props.isEditing ? productAmount : ""}
          {...register("amount", {
            required: true,
            pattern: {
              value: /^[1-9]\d{0,1}$/,
              message: "Amount must be 1-99, only numbers allowed",
            },
          })}
          style={{ borderColor: errors.amount && "red" }}
          onChange={handleChangeAmount}
        />
        {errors.amount && <span>{errors.amount.message}</span>}

        <input className="Form__button" type="submit" value="Save" />
      </form>
    );
  } else {
    return (
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="Form__input"
          placeholder="Name"
          autoComplete="off"
          {...register("name", {
            required: true,
            pattern: {
              value: /^[A-Z]\w{4,19}$/,
              message:
                "Name must be 5 - 20 characters long, must start with a big letter, only alphanumeric characters allowed",
            },
          })}
          style={{ borderColor: errors.name && "red" }}
          onChange={handleChangeName}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <input
          className="Form__input"
          placeholder="Price"
          autoComplete="off"
          {...register("price", {
            required: true,
            pattern: {
              value: /^[1-9]\d{0,9}$/,
              message: "Price must be 1-9999999999, only numbers allowed",
            },
          })}
          style={{ borderColor: errors.price && "red" }}
        />
        {errors.price && <span>{errors.price.message}</span>}
        <input
          className="Form__input"
          placeholder="Amount"
          autoComplete="off"
          {...register("amount", {
            required: true,
            pattern: {
              value: /^[1-9]\d{0,1}$/,
              message: "Amount must be 1-99, only numbers allowed",
            },
          })}
          style={{ borderColor: errors.amount && "red" }}
          onChange={handleChangeAmount}
        />
        {errors.amount && <span>{errors.amount.message}</span>}

        <input className="Form__button" type="submit" value="Add product" />
      </form>
    );
  }
}
