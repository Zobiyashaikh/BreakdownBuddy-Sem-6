import React from 'react'
import './ScrollNavbar.css'
import { useSearchParams } from 'react-router-dom'
function ScrollNavbar() {
  
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get('serviceType');
  return (
    <>
    <div className="scrollmenu" style={{width:"100%"}}>
    <a href="/services?serviceType=Periodic Services" className={serviceType=="Periodic Services"?"active":""}>Periodic Services</a>
    <a href="/services?serviceType=AC Service and Repair" className={serviceType=="AC Service and Repair"?"active":""}>AC Repair Services</a>
    <a href="/services?serviceType=Batteries" className={serviceType=="Batteries"?"active":""}>Batteries</a>
    <a href="/services?serviceType=Tyre & Wheel Care" className={serviceType=="Periodic"?"active":""}>Tyre & Wheel Care</a>
    <a href="/services?serviceType=Tyre" className={serviceType=="Periodic"?"active":""}>Denting & Painting</a>
    <a href="/services?serviceType=Denting and Painting" className={serviceType=="Periodic"?"active":""}>Detailing Services</a>
    <a href="/services?serviceType=Detailing Services" className={serviceType=="Periodic"?"active":""}>Car SPA & Cleaning</a><br/>
    <a href="/services?serviceType=Car Inspection" className={serviceType=="Periodic"?"active":""}>Car Inspection</a>
    <a href="/services?serviceType=Windshields and Lights" className={serviceType=="Periodic"?"active":""}>Windshield & Light</a>
    <a href="/services?serviceType=Suspension and Fittings" className={serviceType=="Periodic"?"active":""}>Suspension & Fitments</a>
    <a href="/services?serviceType=Clutch and Body Parts" className={serviceType=="Periodic"?"active":""}>Clutch & Body Parts</a>
    </div>
  </>
  )
}

export default ScrollNavbar