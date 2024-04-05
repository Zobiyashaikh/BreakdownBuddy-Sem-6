import React, {useState} from 'react'
import "./UserDashboard.css";
import {
    Form,
    Input,
    Radio,
    Button
  } from "antd";
function UserAddress() {
    const handleResidentialSubmit = (values) => {
        console.log("Residential Address:", values);
      };
    
      const handleOfficeSubmit = (values) => {
        console.log("Office Address:", values);
      };
      const { Item } = Form;
    
      const AddressForm = ({ type, onFinish }) => {
        const [isPermanent, setIsPermanent] = useState(false);
    
        const onFinishFailed = (errorInfo) => {
          console.log("Failed:", errorInfo);
        };
        return (
          <Form
            className="adress"
            name={`${type}-address-form`}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ isPermanent: false }}
          >
            <Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Please input the country!" }]}
            >
              <Input placeholder="Enter country" />
            </Item>
            <Item
              name="state"
              label="State"
              rules={[{ required: true, message: "Please input the state!" }]}
            >
              <Input placeholder="Enter state" />
            </Item>
            <Item
              name="city"
              label="City"
              rules={[{ required: true, message: "Please input the city!" }]}
            >
              <Input placeholder="Enter city" />
            </Item>
            <Item
              name="pincode"
              label="Pincode"
              rules={[{ required: true, message: "Please input the pincode!" }]}
            >
              <Input placeholder="Enter pincode" type="number" />
            </Item>
            <Item
              name="street"
              label="Street"
              rules={[{ required: true, message: "Please input the street!" }]}
            >
              <Input placeholder="Enter street" />
            </Item>
            <Item
              name="buildingName"
              label="Building Name"
              rules={[
                { required: true, message: "Please input the building name!" },
              ]}
            >
              <Input placeholder="Enter building name" />
            </Item>
            <Item
              name="roomNumber"
              label="Room Number"
              rules={[{ required: true, message: "Please input the room number!" }]}
            >
              <Input placeholder="Enter room number" type="number" />
            </Item>
            <Item
              name="landmark"
              label="Landmark"
              rules={[{ required: true, message: "Please input the landmark!" }]}
            >
              <Input placeholder="Enter landmark" />
            </Item>
            <Item name="isPermanent" label="Permanent Address">
              <Radio.Group
                onChange={(e) => setIsPermanent(e.target.value)}
                value={isPermanent}
              >
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Item>
            <Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Item>
          </Form>
        );
      };
    
  return (
    <>  {/* Address Form  */}
    <div className='address' style={{marginTop:"20px", marginLeft:"350px", width:"700px"}}>
   <h2 className="text-center mb-3">Residential Address</h2>
   <AddressForm type="residential" onFinish={handleResidentialSubmit} />
   <div className='address' style={{marginTop:"40px",width:"700px", float:"right"}}></div>
   <h2 className="text-center mb-3" >Office Address</h2>
   <AddressForm type="office" onFinish={handleOfficeSubmit} />
   </div></>
  )
}

export default UserAddress