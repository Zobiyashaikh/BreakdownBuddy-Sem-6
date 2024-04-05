import React, { useState, useEffect } from 'react'
import GlobalNav from "../Nav";
import FooterMain from "../Footer/FooterMain";
import { Form, Input, Button, Checkbox, DatePicker, TimePicker, message } from 'antd';
import axios from 'axios';
import { API } from '../../utils/config';

function Checkout() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [serviceIds, setServicesIds] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(() => {
      let cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem("cart")) : [];
      let user = localStorage.getItem('userDetails')? JSON.parse(localStorage.getItem("userDetails")) : null;
      let service_ids = []
      console.log(user)
      if(cart?.length == 0){
        message.destroy();
        message.warning('Your cart is empty!', 5)
        setTimeout(() => {
            window.location = '/services'
        }, 3000);
      }
      else{
        cart?.map((value, index)=>{
            service_ids.push(value?.id)
        })
        setUserId(user?.id)
        // console.log(service_ids)
        setServicesIds(service_ids)
      }
    }, [])
    
    const onFinish = (values) => {
        setLoading(true);
        let {name, address, phoneNumber, time, date } = values
        axios.post(`${API}/checkout`, {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            time: time,
            date:date,
            paymentMethod:'Cash on delivery',
            serviceIds:serviceIds,
            customerId:userId
        })
        .then(function (response) {
        if(response?.data?.success == true){
            message.destroy();
            message.success("Your service(s) booked successfully.", 5);
            setLoading(false);
            setTimeout(() => {
                window.location = '/services';
            }, 3000);
        }
        console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // setTimeout(() => {
        //     setLoading(false);
        //     // axios.post()
        //     console.log('Received values of form: ', values);
        // }, 1000);
    };
  return (
    <>
      <GlobalNav />
        <div className='container mt-5 pt-5'>
            <h1>Book Now</h1>
            <div className='w-50 p-3 bg-white rounded-3'>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                        { required: true, message: 'Please enter your phone number' },
                        { pattern: /^\d{10}$/, message: 'Please enter a valid phone number' },
                        ]}
                    >
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[{ required: true, message: 'Please enter your address' }]}
                    >
                        <Input.TextArea placeholder="Enter your address" />
                    </Form.Item>
                    <Form.Item
                        name="date"
                        label="Date"
                        rules={[{ required: true, message: 'Please select a date' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="time"
                        label="Time"
                        rules={[{ required: true, message: 'Please select a time' }]}
                    >
                        <TimePicker style={{ width: '100%' }} />
                    </Form.Item>
                    
                    <Form.Item
                        name="paymentMethod"
                        label="Payment Method"
                    >
                        <Checkbox checked={true} disabled={false}>
                            Cash on delivery
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Book Now
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      <FooterMain />
    </>
    
  )
}

export default Checkout