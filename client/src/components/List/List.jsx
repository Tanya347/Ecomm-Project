import React from 'react'
import "./list.scss"
import Card from "../Card/Card"

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1627237072130-a20fdded539c?auto=format&fit=crop&q=80&w=1902&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1627237072133-2978ac20e0ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            title: "Embellished Jar",
            isNew: true,
            oldPrice: 1100,
            newPrice: 800
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1606074508174-6fa572bd2777?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhbmRpY3JhZnRzfGVufDB8fDB8fHww",
            title: "Handmade Dreamcatcher",
            isNew: true,
            oldPrice: 250,
            newPrice: 200
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
            title: "Ethnic Bangles",
            oldPrice: 300,
            newPrice: 280
        },
    ]


  return (
    <div className='list'>
        {
            data.map(item => (
                <Card item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default List