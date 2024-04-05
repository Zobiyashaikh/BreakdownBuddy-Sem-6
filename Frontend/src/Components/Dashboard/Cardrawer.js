import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const carBrands = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'Volkswagen',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Tesla',
    'Hyundai'
  ];
const Cardrawer = () => {
    const drawerContent = (
        <div style={{ width: "10px", height: 10, overflowY: 'scroll', display:"inline" }}>
          {carBrands.map((brand, index) => (
            <div key={index} style={{ border: '1px solid black', padding: '8px' }}>
              {brand}
            </div>
          ))}</div>
    )
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('top');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  
  return (
    <>
      <Space>
        {/* <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group> */}
        {/* <Button type="primary" onClick={showDrawer}>
        Select your Location
        </Button> */}
          {/* <select id="states" name="states" onClick={showDrawer}>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
  <option value="Daman and Diu">Daman and Diu</option>
  <option value="Delhi">Delhi</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Ladakh">Ladakh</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Puducherry">Puducherry</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
</select> */}
      </Space>
      <Drawer
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key="top"
      width={500}
        
      >
     

       
      </Drawer>
    </>
  );
};
export default Cardrawer;