import React,{createContext,useState} from 'react'
import all_products from '../Assets/all_product'
export const ShopContext = createContext(null);


const getDefaultCart =()=>{
  let cart = {};
  for (let index=0; index<all_products.length;index++){
    cart[index]=0;
  }
  return cart;

}

const ShopContextProvider = (props) => {
  const [carditem, setCartItem] = useState(getDefaultCart());
  
  console.log("Cart data",carditem)

  const addToCart = (itemid)=>{
    setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}));
    console.log("cart item form context",itemid)
  }

  const RemoveFromCart = (itemid)=>{
    setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in carditem) {
      if (carditem[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));

        totalAmount += carditem[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const getTotalitem = () => {
    let totalItem = 0;
    for (const item in carditem) {
      if (carditem[item] > 0) {
        // let infodata = all_products.find((product) => product.id === Number(item));
        totalItem += carditem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {all_products,carditem,addToCart,RemoveFromCart,getTotalCartAmount,updateCartItemCount,getTotalitem}
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;