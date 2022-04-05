import React , {useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import data from './data.json';
import Products from './components/Products/Products';
function App() {
  const [products, setProducts ]= useState(data);
  return (
   
<div className='layout'>
<Header/>
    <main>
    <div className='rapper'> 
<Products products={products}/>
<div className='Filter'>Fliter</div>
    </div>
    </main>
 <Footer/>
</div>

     
  );
}

export default App;
