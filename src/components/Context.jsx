import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const StoreContext = createContext();

export default function Context({ children }) {
  const [product, setproducts] = useState([]);
  const [cart, setcart] = useState([]);
  async function fetchdata() {
    let response = await axios.get("https://dummyjson.com/products");
    setproducts(response.data.products);
  }
  useEffect(() => {
    fetchdata();
  }, []);
  function addtocart(id) {
    const item = product.find((prod) => prod.id === id);
    const productincart = cart.find((prod) => prod.id == id);
    if (productincart) {
      const updatedcart = cart.map((cp) => {
        return cp.id == id ? { ...cp, qty: cp.qty + 1 } : cp;
      });
      setcart(updatedcart);
    } else {
      setcart([...cart, { ...item, qty: 1 }]);
    }

    // console.log(cart)
  }

  function removeitem(id) {
    const updatedcart = cart.filter((prod) => prod.id != id);
    setcart(updatedcart);
  }

  function qtyhandler(id, flag) {
    let updatedcart = [];
    if (flag === "inc") {
      updatedcart = cart.map((cp) => {
        return cp.id == id ? { ...cp, qty: cp.qty + 1 } : cp;
      });
    } else {
      updatedcart = cart.map((cp) => {
        return cp.id == id ? { ...cp, qty: cp.qty - 1 } : cp;
      });
    }

    setcart(updatedcart);
  }
  return (
    <StoreContext.Provider value={{ addtocart, cart, removeitem, qtyhandler }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext };
