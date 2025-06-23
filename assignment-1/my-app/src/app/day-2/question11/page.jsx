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
      <div className="img-wrapper" style={{display:'flex',paddingTop:'30px',margin:'20px',flexWrap:'wrap',justifyContent:'space-between'}}>
        {img.map((item, index) => (
          <div key={index} >
            <img src={item} alt="" width={350} height={300} style={{paddingTop:'20px'}} />
            <div className="button-wrapper" style={{paddingTop:'20px'}}>
              <button onClick={AddItem} style={{backgroundColor:'green',color:'white',border:'none',borderRadius:'10px'}}>Add to Cart</button>
              <button onClick={RemoveIem} style={{backgroundColor:'red',color:'white',border:'none',borderRadius:'10px'}}>Remove From Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="price-section" style={{width:'50%',margin:'auto',textAlign:'center',fontSize:'40px'}}>
        <p>{`The total price of the cart is:${price*cart}`}</p>
      </div>
    </div>
  );
}
