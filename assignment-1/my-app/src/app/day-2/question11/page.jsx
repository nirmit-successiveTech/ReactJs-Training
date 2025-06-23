"use client";
import { useCart } from "../context/ShoppingContext";

export default function Question11() {
  const { price, setprice, cart, setcart, img } = useCart();
  function AddItem(){
    setcart(cart+1)
  }
    function RemoveIem(){
        if(cart===0) return
    setcart(cart-1)
  }
  return (
    <div>
      <div className="img-wrapper">
        {img.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" width={350} height={300} />
            <div className="button-wrapper">
              <button onClick={AddItem}>Add to Cart</button>
              <button onClick={RemoveIem}>Remove From Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="price-section">
        <p>{`The total price of the cart is:${price*cart}`}</p>
      </div>
    </div>
  );
}
