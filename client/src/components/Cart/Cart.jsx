import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./cart.scss"

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1627237072130-a20fdded539c?auto=format&fit=crop&q=80&w=1902&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            img2: "https://images.unsplash.com/photo-1627237072133-2978ac20e0ed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            title: "Embellished Jar",
            desc: "Adorned with delicate embellishments and hand-painted designs, this jar exudes timeless elegance, making it a perfect addition to your home decor or a cherished gift for a loved one",
            isNew: true,
            price: 1100,
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1601482438629-346a273776af?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMGJhbmdsZXN8ZW58MHwxfDB8fHww",
            img2: "https://images.unsplash.com/photo-1664506061150-ffc206b8bfd3?auto=format&fit=crop&q=80&w=1852&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Ethnic Bangles",
            desc: "These exquisite pieces of handcrafted jewelry capture the essence of Indian culture and craftsmanship, adding a touch of elegance to any ensemble.",
            isNew: true,
            price: 500,
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in Your Cart</h1>
        {
            data.map(item=> (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}...</p>
                        <div className="price">1 x ₹{item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>
                </div>
            ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>:</span>
            <span>₹1050</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart