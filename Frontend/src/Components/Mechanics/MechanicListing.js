import React, { useState, useEffect } from 'react';
import {  Avatar,Card, Button, Checkbox, Collapse, Radio, message  } from 'antd'
import axios from 'axios';
import GlobalNav from '../Nav'
import './OverallMechanic.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
import { mechanic1, mechanic2, mechanic3,mechanic4,mechanic5,mechanic6, mechanic7 } from '../images';


function MechanicListing() {
    const [mechanicData, setMechanicData] = useState([])
    const [allMechanicsList, setAllMechanicsList] = useState([])
    const [selectedServices, setSelectedServices] = useState([])
    const [selectedLocations, setSelectedLocations] = useState("")

    const getRandomImage = (min, max) => {
      let imageList = [mechanic1, mechanic2, mechanic3,mechanic4,mechanic5,mechanic6, mechanic7]
      return (imageList[Math.floor(Math.random() * (max - min + 1) + min)])
    }
    const getMechanics = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/users/mechanics', {});
        let data = response?.data
        if(data){
          setMechanicData(data)
        }
      } catch (error) {
        message.warning(`Sorry! we have got an error: ${error}!`, 5);
      }
    };

    const editMechanic = (id) => {
      window.location =`/edit-mechanic?id=${id}`
    }

    useEffect(() => {
      getMechanics();
    }, [])
    
    useEffect(() => {
      let mechanicsList = []
      if(mechanicData?.mechanicsList?.length > 0){
        mechanicData.mechanicsList.map((value, index)=>{
          let mechanic_list = [];
          if(value?.speciality){
            value?.speciality.split(", ").map((val, index)=>{
              mechanic_list.push(<li key={index}>{`=> ${val}`}</li>)
            })
          }
          mechanicsList.push(
            <div 
              style={{
                backgroundColor:'#0052A2'
              }}
              className='col-md-4 col-4 mb-4'
              key={index}
            > 
              <Card
                // title={`${value?.firstName} ${value?.lastName}`}
                style={{
                  backgroundColor:'white',
                  borderRadius:20,
                  height:500,
                }}
                bordered={false}
                cover={
                  <img src={getRandomImage(0,5)} width="230px"/>
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" onClick={()=>editMechanic(value?.id)}/>,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title={`${value?.firstName} ${value?.lastName}`}
                description={value?.email}
              />
                  <div className='px-2'>
                    +91 {value?.phoneNumber}<br/>
                    {value?.speciality}<br/>
                    {value?.country}, {value?.state}, {value?.city}<br/>
                    Latitude:{value?.latitude}<br/>
                    Longitude:{value?.longitude}<br/>
                  </div>
              </Card>
            </div>
          )
        })
      }
      setAllMechanicsList(mechanicsList)
    }, [mechanicData])

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
          setMechanicData(data)
        }
        else if(data && data?.notFound){
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
      getMechanics();
    }

  return (
    <>  
        <GlobalNav/>
        <div className='mechanic-listing w-100' style={{
          backgroundColor:'#0052A2',
        }}>
          <div className='row mx-0'>
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
                <div className='row mx-0'>
                  {allMechanicsList?.length > 0 && allMechanicsList}
                </div>
              </div>
          </div>
        </div>
   
    </>
  )
}

export default MechanicListing;