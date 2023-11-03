import React from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
//   const { data, loading, error } = useFetch(
//     `/products?populate=*&[filters][type][$eq]=${type}`
//   );

    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1601482438629-346a273776af?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGJhbmdsZXN8ZW58MHwxfDB8fHww",
            img2: "https://images.unsplash.com/photo-1664506061150-ffc206b8bfd3?auto=format&fit=crop&q=80&w=1852&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Ethnic Bangles",
            isNew: true,
            oldPrice: 500,
            newPrice: 450
        },
        {
            id: 2,
            img: "/Assets/keychain.jpg",
            title: "DIY Keychains",
            isNew: true,
            oldPrice: 160,
            newPrice: 80
        },
        {
            id: 3,
            img: "/Assets/horse.jpg",
            title: "Handmade Clay Horse",
            oldPrice: 300,
            newPrice: 200
        },
        {
            id: 4,
            img: "/Assets/trays.jpg",
            title: "Colorful Trays",
            oldPrice: 300,
            newPrice: 280
        },
    ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;