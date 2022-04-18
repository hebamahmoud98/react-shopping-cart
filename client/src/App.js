import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
export default function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handleFilterbysize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "All") {
      setProducts(data);
    } else
     {
      let productsClone = [...products];
    
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1 );  
    
    setProducts(newProducts);
  };
  }
  // const Category = (e) => {
  //   setSize(e.target.value); 
  //   if (e.target.value =="All") {
  //         setProducts(data);
  //       }
  //       else{
  //         const result=products.filter((curData)=>{
  //           return curData.sizes==e.target.value;
  //         });
  //         setProducts(result);
  //       }
   

  
  const handleFilterbysort = (e) => {
    let order=e.target.value;
    setSort(order)
    let productsClone = [...products];
    
      let newProducts = productsClone.sort( (a, b) => {
        if(order=="lowest"){
          return a.price-b.price
        }else if(order=="highest"){
          return b.price - a.price
        }else{
          return    a.id < b.id ? 1 :-1
        }
      })
setProducts(newProducts)
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="rapper">
          <Products products={products} />
          <Filter
            size={size}
            sort={sort}
            handleFilterbysize={handleFilterbysize}
            // Category={Category}
            handleFilterbysort={handleFilterbysort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
