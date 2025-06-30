"use client";
import { useCart } from "../context/ShoppingContext";

export default function Question11() {
  const { price, setprice, products} = useCart();

  const AddItem=(id)=>{
    products[id].count=products[id].count+1;
    setprice(price+products[id].price);
  }

    const RemoveIem=(id)=>{
    products[id].count=products[id].count-1;
    setprice(price-products[id].price);
  }
  
   
  return (
    <div>
        <div className="price-section" style={{width:'50%',margin:'auto',textAlign:'center',fontSize:'40px'}}>
        <p>{`The total price of the cart is:${price}`}</p>
      </div>
      <div className="img-wrapper" style={{display:'flex',paddingTop:'30px',margin:'20px',flexWrap:'wrap',justifyContent:'space-between'}}>
        {products.map((item, index) => (
          <div key={index} >
            <img src={item.img} alt="" width={350} height={300} style={{paddingTop:'20px'}} />
            <div className="button-wrapper" style={{paddingTop:'20px'}}>
              <div>Price:{products[index].price}</div>
              <button onClick={()=>AddItem(index)} style={{backgroundColor:'green',color:'white',border:'none',borderRadius:'10px'}}>+</button>
              <div style={{alignContent:'baseline'}}>{products[index].count}</div>

              {products[index].count>0 && 

              <button onClick={()=>RemoveIem(index)} style={{backgroundColor:'red',color:'white',border:'none',borderRadius:'10px'}}>-</button>
}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
