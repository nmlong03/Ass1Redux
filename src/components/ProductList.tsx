import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from '../actions/product';

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products } = useSelector((state: any) => state);
  return (
    <div>
      {products?.map((item: any) => {
        return <div key={item.id}>{item.name}</div>;
      })}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "product/addProduct",
              payload: { id: 4, name: "KKk" },
            })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "product/updateProduct",
              payload: { id: 4, name: "KKk update" },
            })
          }
        >
          Update
        </button>
        <button
          onClick={() =>
            dispatch({ 
              type: "product/deleteProduct", 
              payload: {id: 3},
            })
          }
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default ProductList;
