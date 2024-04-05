import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../utils/config';
import GlobalNav from '../Nav';
import FooterMain from '../Footer/FooterMain';
import './OverallMechanic.css';
import { Form, Input, Button,  Select, message } from 'antd';
import { useSearchParams } from 'react-router-dom'

function EditMechanic() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mechanicData, setMechanicData] =  useState(null)
  const [form] = Form.useForm()
  useEffect(() => {
    let queryParams = searchParams.get('id')
    axios.post(`${API}/view-mechanic`, {
      id: queryParams
    })
    .then(function (response) {
      if(response?.data?.success == true){
        setMechanicData(response?.data?.mechanic)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [searchParams])

  useEffect(() => {
    let mechanic = mechanicData
    let speciality = mechanic?.speciality?.split(', ')
    form.setFieldsValue({
      ...mechanic, speciality
    })
  }, [mechanicData])
  
  
  const onFinish = (values) => {
    // console.log(values);
    let {firstName, lastName, email, phoneNumber, state, city, speciality,latitude, longitude} = values
    axios.post(`${API}/update-mechanic`, {
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
        message.success("Mechanic updated successfully.", 5);
        setTimeout(() => {
          window.location = '/mechanics'
        }, 2000);
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <> 
    <GlobalNav/>
    <Form form={form} name="form_item_path" layout="vertical" onFinish={onFinish} className='container ' style={{
        width:"700px",
        borderRadius:'0px 120px',
        border: 'none',
        marginTop:"130px",
        marginBottom:"20px",
        boxShadow: '11px 15px 15px 11px #adadad'

    }}>
      <h1 style={{textAlign:'center', marginBottom:'30px'}}>Edit Mechanic Details</h1>
      <Form.Item  label="First Name" size="large" name="firstName"><Input />
        </Form.Item>
        <Form.Item  label="Last Name" name="lastName">
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
        <Button className='add-mechanic-form-btn' type="submit" htmlType="submit" style={{
          backgroundColor:"yellowgreen",
          border:'1px solid red',
          width:'150px',
          height:"35px",
          marginLeft:"500px",
          marginBottom:"50px"
        }}>
          Submit
        </Button>
    </Form>
    <FooterMain/>
    </>
  );
};



export default EditMechanic