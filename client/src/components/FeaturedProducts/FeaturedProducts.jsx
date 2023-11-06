import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import { data } from "./data";

const FeaturedProducts = ({ type }) => {

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        {
          type === "featured" ? (
            <p>Explore our handpicked selection of extraordinary creations from local artisans and craftsmen. These featured products showcase the finest craftsmanship and artistic expressions that India has to offer. Each item is a masterpiece, a testament to the skill and passion of our talented artisans. Discover unique jewelry, clothing, home decor, and more, all crafted with love and care.</p>
          ) : (
            <p>Stay in the know with our trending products that are captivating the hearts of our customers. These items are the talk of the town, loved by shoppers for their exceptional quality and style. From the latest fashion trends to innovative home decor, our trending products offer a glimpse into what's hot in the world of Indian artisanal craftsmanship. Don't miss out on these popular gems!</p>
          )
        }
      </div>
      <div className="bottom">
        {data[type].map(item => (
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;