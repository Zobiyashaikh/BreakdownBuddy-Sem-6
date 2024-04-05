import React, {useState, useMemo, useEffect} from 'react'
import { Map, MapContainer, TileLayer, useMap, Marker, Popup, Circle, CircleMarker, Rectangle, Polygon, Tooltip } from 'react-leaflet'
import GlobalNav from '../Components/Nav'
import FooterMain from '../Components/Footer/FooterMain'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";

import axios from 'axios'

import {  Avatar,Card, Button, Checkbox, Collapse, Radio, message  } from 'antd'

const NearbyMechanic = () =>{
  const [mechanicData, setMechanicData] = useState([])
  const [mechanicsMarker, setMechanicsMarker] = useState([])
  const [latitudeVal, setLatitudeVal] = useState(null)
  const [longitudeVal, setLongitudeVal] = useState(null)
  const [allMechanicsList, setAllMechanicsList] = useState([])
  const [selectedServices, setSelectedServices] = useState([])
    const [selectedLocations, setSelectedLocations] = useState("")
  

  useEffect(() => {
    // getMechanics();
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


  const getNearestMechanics = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api/users/mechanics-by-location', {latitude:latitudeVal, longitude: longitudeVal});
        let data = response?.data
        // console.log({data})
        if(data){
          setMechanicData(data)
        }
    } catch (error) {
        console.error(error);
        message.warning(`Sorry! we have got an error: ${error}!`, 5);
    }
  };

  useEffect(() => {
    getNearestMechanics()
  }, [latitudeVal, longitudeVal])
  

  useEffect(() => {
    console.log(mechanicData)
      if(mechanicData?.mechanicsList?.length > 0){
        let mechanicsList = []
        mechanicData.mechanicsList.map((value, index)=>{
          mechanicsList.push(
            <Marker key={index} position={ [value?.latitude, value?.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} > 
              <Popup>
                <span className='fw-bold fs-5 pb-1'>{`${value?.firstName} ${value?.lastName}`}</span>, <br/><br/>
                {value?.country}, {value?.state}, {value?.city} <br/><br/>
                <span className='fw-bold'> <a href={`tel:+91 ${value?.phoneNumber}`}> +91 {value?.phoneNumber}</a></span> <br/><br/>
                <span className='fw-bold'>Specialities: </span> {value?.speciality}
              </Popup>
            </Marker>
          )
        })
        return setMechanicsMarker(mechanicsList)
      }
  }, [mechanicData])
  
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

  const onChangeServices = (val) => {
    setSelectedServices(val)
  };
  // const onChangeLocation = (val) => {
  //   setSelectedLocations(val)
  // };
  const onChangeLocation = ({ target: { value } }) => {
    console.log('radio2 checked', value);
    setSelectedLocations(value)
  };
  
  const servicesOptions = ['AC Servicing', 'Car Spa', 'Engine', 'Tyre', 'Batteries'];
  const locationOptions = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai'];

  const items = [
    {
      key: '1',
      label: 'Search by Services',
      children: <div>
        <Checkbox.Group options={servicesOptions} value={selectedServices} defaultValue={selectedServices} onChange={onChangeServices} />
      </div>
    },
    {
      key: '2',
      label: 'Search by Location',
      children: <div>
        <Radio.Group options={locationOptions} value={selectedLocations} defaultValue={selectedLocations} onChange={onChangeLocation} />
        {/* <Checkbox.Group options={locationOptions} value={selectedLocations} defaultValue={selectedLocations} onChange={onChangeLocation} /> */}
      </div>
    },
  ];
  const onChange = (key) => {
    // console.log(key);
  };

  const onFilterSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/filter-mechanics', {
        locations : selectedLocations,
        speciality  : selectedServices});
      let data = await response?.data
      if(data && !data?.notFound){
        console.log(data)
        setMechanicData(data)
      }
      else if(data && data?.notFound){
        console.log("no data")
        message.warning("Sorry, No Mechanics Found!", 5)
      }
    } catch (error) {
        console.error(error);
        message.warning(`Sorry! we have got an error: ${error}!`, 5);
    }
  }

  const resetFilter = () => {
    setSelectedLocations("");
    setSelectedServices([]);
    // getMechanics();
  }


  return(
    <>
      <GlobalNav />
      <>
        <div className='mechanic-listing'>
            <div className='row mx-0'>
            <div className="text-center w-100" ><h1 className='fs-3 text-primary text-center mt-5'> Find Nearby Mechanics </h1></div>
                <div className='col-3'>
                  <h4 className='text-white mb-2'>Filter 
                  <Button disabled={selectedLocations?.length > 0 || selectedServices?.length > 0?false:true} className='float-end mb-3 text-white' type="primary" onClick={resetFilter}>Reset Filter</Button></h4>
                  <Collapse 
                    defaultActiveKey={['1', '2']} 
                    onChange={onChange}
                    expandIconPosition={'end'}
                    items={items}
                    bordered={false}
                  >
                  </Collapse>
                  <Button type='primary' size='large' onClick={onFilterSubmit} className='w-100 mt-2'>Submit</Button>
                </div>
                <div className='col-9'>
                {mechanicsMarker?.length > 0 && 
                  <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{width:'100%', height:"600px"}}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {mechanicsMarker}
                  
                    <Marker position={[51.51, -0.09]}>
                      <Popup>Popup for Marker</Popup>
                      <Tooltip>Tooltip for Marker</Tooltip>
                    </Marker>
                    
                  </MapContainer>
                }
                  <div className='row mx-0'>
                    {allMechanicsList?.length > 0 && allMechanicsList}
                  </div>
                </div>
            </div>
        </div>
      </>
      
      <FooterMain />
    </>
  )
}

export default NearbyMechanic