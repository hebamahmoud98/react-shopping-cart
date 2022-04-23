import React , {useState} from "react";
import "../../css/Products/Products.css";
import Modal from 'react-modal';
function Products(props) {
    const [product, setProduct] = useState("");
    const openModal=(product)=>{
        setProduct(product)
    }
    const colseModal=()=>{setProduct(false)}
  return (
    <div className="products">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
       <a href="#" onClick={()=> openModal(product)}>
       <img src={product.imageUrl} alt={product.title} />
       </a>

          <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}$</span>
          </div>
          <button onClick={()=>props.addToCard(product)}>Add to cart</button>
        </div>
      ))}
      <Modal  isOpen={product} onRequestClose={colseModal}>
          <span className="close-icon" onClick={colseModal}>&times;</span>
          <div className="product-info">
<img src={product.imageUrl} alt={product.title}/>
<p>{product.title}</p>
<p>{product.desc}</p>
<p>${product.price}</p>
          </div>
      </Modal>
    </div>
  );
}
export default Products;
