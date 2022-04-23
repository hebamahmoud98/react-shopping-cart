import React from 'react'
import "../../css/Filter/Filter.css"
 function Filter(props) {
  return (
    <div className='filter-wrapper'>
        <h2 className='filter-title'>  Filter</h2>
        <div className='numof-products '>number of Products {props.productNumber}</div>
        <div className='filter-by-size '>
            <span>Filter</span>
            <select value={props.size} className='filter-select' onChange={props.handleFilterbysize}>
                    <option value="All">All</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
            </select>
        </div>
        <div className='filter-by-size '>
            <span>Order</span>
            <select className='filter-select' value={props.sort} onChange={props.handleFilterbysort}>
                    <option value="lastest">Lastest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                    
            </select>
        </div>
      
        </div>
  )
}
export default Filter