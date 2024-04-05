import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, Space } from "antd";
import axios from "axios";
import GlobalNav from "../Nav";
import "./ServiceListing.css";
import { Button } from "antd";
import FooterMain from "../Footer/FooterMain";

import "./ScrollNavbar";

import ScrollNavbar from "./ScrollNavbar";

import ProductList from "../Cart/productList";
import {useRecoilValue, useRecoilState} from 'recoil';
import { productListState } from '../Cart/productState';
import { cartState, addToCart } from '../Cart/cartState';
import { MechanicIntro, UserIntro, cartimg } from "../images.js";
import {cart} from "../images.js"
function ServiceListing() {
  const [fixed, setFixed] = useState(true);
  const [serviceData, setServiceData] = useState([]);
  const [prodIds, setProdIds] = useState([]);
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get("serviceType");

  const productList = useRecoilValue(productListState);
    const [cart, setCart] = useRecoilState(cartState); // 1. Get recoil state
    // console.log(cart)
    const handleAddToCart = (product) => {
      let prod_id = product?.id
      const newCart = addToCart(cart, product); // 2. Use helper to create a new state
      setCart(newCart); // 3. Update recoil state
      setProdIds([...prodIds, prod_id])
    }
  
  const getServices = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/services",
        { serviceType: serviceType }
      );
      let data = response?.data;
      if (data) {
        setServiceData(data);
      }
    } catch (error) {
      console.error(error);
      message.warning(`Sorry! we have got an error: ${error}!`, 5);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  let servicesList = [];
  if (serviceData?.servicesList?.length > 0) {
    serviceData.servicesList.map((value, index) => {
      let service_list = [];
      if (value?.services) {
        value?.services.split(", ").map((val, index) => {
          service_list.push(<li key={index}>{val}</li>);
        });
      }
      const checkIdExist = element => element == value.id;

      servicesList.push(
        <div
          className="col-md-7"
          style={{
            minWidth: 500,
          }}
          key={index}
        >
          <Card
            title={value?.serviceName}
            className="service-card"
            bordered={false}
          >
            <div className="">{value?.serviceDescription}</div>
            {/* <div className=''>{value?.services}</div> */}
            <ul>{service_list}</ul>
            <div>
              <div className="text-success price">&#8377; {value?.price} </div>
              {!prodIds.some(checkIdExist)?
              <Button type="submit" htmlType="submit" className="services-btn" onClick={() => handleAddToCart(value)} 
              >
                ADD TO CART
              </Button>
            :
              <Button className="services-btn" disabled="true" title="Already Added to Cart">
                ADDED TO CART
              </Button>
            }
            </div>
          </Card>
        </div>
      );
    });
  }


  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const fixedDiv = document.getElementById('scrollable-container');

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const fixedDivTop = fixedDiv.getBoundingClientRect().top;

        if (footerTop <= window.innerHeight) {
          // When footer is about to be reached, stop fixing the div
          if (fixedDivTop < footerTop) {
            setFixed(false);
          } else {
            setFixed(true);
          }
        } else {
          // When footer is not within the viewport, keep the div fixed
          setFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let cartItems = []
  cart?.length>0 && cart.map((value, index)=>{
    cartItems.push(
      <div className="px-3 py-2 d-flex justify-content-between border-bottom">
        <div>
          <span className="fw-bold fs-5 text-primary">{value?.product?.serviceName}</span>
        </div>
        <div>
          <span className="fs-4 text-success">₹ {value?.product?.price}</span>
          {/* Qty: <span className="fw-bold fs-5 text-primary">{value?.quantity}</span> */}
        </div>
      </div>
    )
  })

  const handleCheckout = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location = '/checkout' 
  }

  return (
    <>
      <GlobalNav />
      <ScrollNavbar/>
      <div className="service-listing">
        <div className="">{servicesList}</div>
        {/* <Affix target={() => document.getElementById('scrollable-container')}> */}
      
        <div id="scrollable-container" className="fixed-div" style={{position: fixed ? 'fixed' : 'static',}}>
          {cart?.length == 0 && <img src={cartimg} style={{zIndex:"-10", height:"270px", width:"290px", position:"absolute", top:"100px", left:"170px"}}/>}
          <h3 className="heading-fixed-div" >Cart</h3>
          <div className="cart-items px-3 py-0">
            {cartItems}
          </div>
          <div className="w-50 align-items-center text-center position-fixed" style={{backgroundColor:"white"}}>
            {/* <h1>hello</h1> */}
              <Button type="primary" onClick={handleCheckout} className='w-1 btn-md btn-fix' style={{height:40, width:"15%", position: "fixed", bottom: 20, right: 250, zIndex:1100 }}>
                Checkout
              </Button>
          </div>
        </div>
      
        
          
        {/* </Affix> */}
      </div>
      <FooterMain />
    </>
  );
}

export default ServiceListing;
