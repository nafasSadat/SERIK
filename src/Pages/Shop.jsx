import React, { useContext } from 'react'
import { Hero } from '../Components/Hero/Hero'
import {Item} from '../Components/Items/Item'
import data_products from '../../src/Assets/data'
import Product from '../Components/Product/Product'
import './Shop.css';
import { Offer } from '../Components/Offer/Offer'
import { ShopContext } from '../Context/ShopContext'
export const Shop = () => {
    const { all_products } = useContext(ShopContext);

  return (
    <div>
        <Hero/>
        <div className="shopTitle">Popular Products</div>
        <div className="products">
          {all_products.map((products) => (
            <Product data={products} />
          ))}
        </div>

        <Offer/>

    </div>
  )
}
