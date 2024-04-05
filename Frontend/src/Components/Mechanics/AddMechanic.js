import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  message,
} from 'antd';
import axios from 'axios';
import { API } from '../../utils/config';
import GlobalNav from '../Nav';
import FooterMain from '../Footer/FooterMain';
import './OverallMechanic.css';
// import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';

const AddMechanic = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [address, setAddress] = useState('default');
  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };
  const onFinish = (values) => {
    let {firstName, lastName, email, phoneNumber, state, city, speciality,latitude,longitude} = values
    axios.post(`${API}/add-mechanic`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      country: 'India',
      state: state,
      city: city,
      speciality: speciality?.join(', '),
      latitude:latitude,
      longitude:longitude
    })
    .then(function (response) {
      if(response?.data?.success == true){
        message.destroy();
        message.success("Mechanic added successfully.", 5);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  const handleChange = value => {
    setAddress(value);
  };

  return (
    <>
   <GlobalNav/>
    <div className='add-mechanic-container p-5 align-self-center border-1'>
      <Form className='form-overall-container '
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        initialValues={{
          size: componentSize,
        }}
        // onValuesChange={onFormLayoutChange}
        // size={componentSize}
        style={{
          maxWidth: 700,
        }}
        onFinish={onFinish}
      >
        <Form.Item  label="First Name" size="large" name="firstName"><Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Input />
        </Form.Item>
        <Form.Item label="State" name="state">
          <Input />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input />
        </Form.Item>
        <Form.Item label="Select Specialities" name="speciality">
          <Select
            mode='multiple'
          >
            <Option value="Tyre">Tyre and Wheel Care</Option>
            <Option value="Engine">Engine</Option>
            <Option value="Denting-Painting">Denting-Painting</Option>
            <Option value="AC Service">AC Service</Option>
            <Option value="Battery">Battery</Option>
            <Option value="Car SPA">Car SPA</Option>
            <Option value="Key Making">Key Making</Option>
            <Option value="Windshield & repair">Windshield & repair</Option>
            <Option value="Car Inspection">Car Inspection</Option>
            <Option value="Clutch & Body parts repairing">Clutch & Body parts repairing</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <Input />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item> */}
        <Form.Item label="Lattude" name="latitude">
          <Input />
        </Form.Item>
        <Form.Item label="Longitude" name="longitude">
          <Input />
        </Form.Item>

        <Form.Item label="">
          <Button class="add-mechanic-form-btn" htmlType="submit" size="large" style={{minWidth:150, backgroundColor:"yellowgreen", marginLeft:'500px'}}>Submit</Button>
        </Form.Item>


        
      </Form>
    </div>
    <FooterMain/>
   
    </>
  );
};

export default AddMechanic