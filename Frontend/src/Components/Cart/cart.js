import React, { useState, useEffect } from 'react'
import GlobalNav from "../Nav";
import FooterMain from "../Footer/FooterMain";
import { Button, message } from 'antd';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
      let cart = localStorage.getItem('cart')
      if(cart?.length > 0){
        setCartItems(JSON.parse(cart))
      }
      else{
        message.destroy();
        message.warning('Your cart is empty!', 5)
        setTimeout(() => {
            window.location = '/services'
        }, 3000);
      }
    }, [])
    let cartList = []
    cartItems?.length>0 && cartItems.map((value, index)=>{
        cartList.push(
            <div key={index}>
                <div className="px-3 py-2 d-flex justify-content-between border-bottom">
                    <div>
                        <span className="fw-bold fs-5 text-primary">{value?.product?.serviceName}</span>
                    </div>
                    <div>
                        <span className="fs-4 text-success">₹ {value?.product?.price}</span>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <>
      <GlobalNav />
        <div className='container mt-5 pt-5'>
            <h1 className='text-center'>Cart</h1>
            <br/>
            {cartList}
            <div className="d-flex flex-column align-items-center px-3 py-2 my-4">
              <Button type="primary" size="large" className='w-15' onClick={()=>window.location="/checkout"}>Checkout</Button>
            </div>
        </div>
        
      <FooterMain />
    </>
    
  )
}

export default Cart