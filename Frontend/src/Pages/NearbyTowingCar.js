import React, {useState, useMemo, useEffect} from 'react'
import { Map, MapContainer, TileLayer, useMap, Marker, Popup, Circle, CircleMarker, Rectangle, Polygon, Tooltip } from 'react-leaflet'
import GlobalNav from '../Components/Nav'
import FooterMain from '../Components/Footer/FooterMain'
// import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { towing_car_icon} from '../Components/images'
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import { message } from 'antd'
import axios from 'axios'

const NearbyTowingCar = () =>{
  const [towingCarData, setTowingCarData] = useState([])
  const [gasStationsMarker, setGasStationsMarker] = useState([])
  const [latitudeVal, setLatitudeVal] = useState(null)
  const [longitudeVal, setLongitudeVal] = useState(null)
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 15) + 5; // Generates a random integer between 1 and 15
    setRandomNumber(newRandomNumber);
  };


  useEffect(() => {
   
    if(navigator?.geolocation){
      navigator.geolocation.getCurrentPosition(showExactPosition)
    }
    else{
      alert("Location Not Provided!")
    }
    function showExactPosition(position){
      let latitude=parseFloat(position?.coords?.latitude).toFixed(6)
      let longitude=parseFloat(position?.coords?.longitude).toFixed(6)
      
      setLatitudeVal(Number(latitude))
      setLongitudeVal(Number(longitude))
    }
  }, [])


  const getNearestTowingCar = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api/users/towing-car', {latitude:latitudeVal, longitude: longitudeVal});
        let data = response?.data
        if(data){
          setTowingCarData(data)
        }
    } catch (error) {
        console.error(error);
        message.warning(`Sorry! we have got an error: ${error}!`, 5);
    }
  };

  useEffect(() => {
    getNearestTowingCar()
  }, [latitudeVal, longitudeVal])
  

  useEffect(() => {
    
      if(towingCarData?.TowingCarList?.length > 0){
        let TowingCarList = []
        towingCarData.TowingCarList.map((value, index)=>{
          TowingCarList.push(
            <Marker key={index} position={ [value?.latitude, value?.longitude]} icon={new Icon({iconUrl: towing_car_icon, iconSize: [60, 60], iconAnchor: [12, 41]})} > 
              <Popup>
                <span className='fw-bold fs-5 pb-1'>{`${value?.name}`}</span>, <br/><br/>
                {value?.country}, {value?.state}, {value?.city} <br/><br/>
                <span className='fw-bold'> <a href={`tel:+91 ${value?.phoneNumber}`}> +91 {value?.phoneNumber}</a></span> <br/><br/>
                {/* <span className='fw-bold'>Services : </span> {value?.speciality} */}
                {value?.googleMapLink && (
        <a href={value.googleMapLink} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
                 )}
              </Popup>
            </Marker>
          )
        })
        return setGasStationsMarker(TowingCarList)
      }
  }, [towingCarData])
  
  const center = [18.9629, 72.83]
  
  function TooltipCircle() {
    const [clickedCount, setClickedCount] = useState(0)
    const eventHandlers = useMemo(
      () => ({
        click() {
          setClickedCount((count) => count + 1)
        },
      }),
      [],
    )

    const clickedText =
      clickedCount === 0
        ? 'Click this Circle to change the Tooltip text'
        : `Circle click: ${clickedCount}`

    return (
      <Circle
        center={center}
        eventHandlers={eventHandlers}
        pathOptions={{ fillColor: 'blue' }}
        radius={200}>
        <Tooltip>{clickedText}</Tooltip>
      </Circle>
    )
  }
  return(
    <>
      <GlobalNav />
      <div>
      <div><h1 className='fs-3 text-info text-center py-2'>Call Nearby Towing Services</h1>
      <p className="text-success mb-0" style={{fontSize:"30px", textAlign:"center" }}><b className='text-danger fs-bold fs-1'>{towingCarData?.TowingCarList?.length}</b> Nearby towing services found near you!</p>
      </div>
      {gasStationsMarker?.length > 0 && 
        <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{width:'100%', height:"500px"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {gasStationsMarker}
          <Marker position={[51.51, -0.09]}>
            <Popup>Popup for Marker</Popup>
            <Tooltip>Tooltip for Marker</Tooltip>
          </Marker>
        </MapContainer>
      }
      </div>
      <FooterMain />
    </>
  )
}

export default NearbyTowingCar