import React from 'react'
import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import { useState } from "react";
import {data, categ, headers} from "./data"
import "./products.scss"

const Products = () => {

  const catId = useParams().id
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className='products'>
      <div className="left">

        <div className="filterItem">
          <h2>Product Categories</h2>
            {
              categ[catId].map((item) => (
                <div className="inputItem" key={item.id}>
                  <input type="checkbox" id={item.id} value={item.id}/>
                  <label htmlFor={item.id}>{item.name}</label>
                </div>
              ))
            }
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e) => setSort("asc")}/>
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={(e) => setSort("desc")}/>
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={headers[catId]} className='catImg' alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products