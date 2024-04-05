import React from "react";
import { kiacar } from "../../images.js";
import { Form, Input, Select, Space, Button } from "antd";
import { Option } from "antd/es/mentions";
import "./UserDashboard.css";
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const carBrands = [
  "Audi",
  "BMW",
  "Chevrolet",
  "Dodge",
  "Ford",
  "Honda",
  "Hyundai",
  "Jeep",
  "Kia",
  "Mercedes-Benz",
  "Nissan",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Tesla",
  "Others",
];
function CarDetails() {
  return (
    <>
      {" "}
      {/* Car Details */}
      <Select
        className="car-select"
        defaultValue="Select car"
        style={{
          width: "10%",
          height: "5%",
          color: "black",
          position: "absolute",
          top: "100px",
          left: "50px",
        }}
        dropdownStyle={{ overflowY: "scroll" }}
      >
        {carBrands.map((brand, index) => (
          <Option key={index} value={brand}>
            {brand}
          </Option>
        ))}
      </Select>
      <div>   
      <h2 className="text-center"> Enter your car Details</h2>
      <div
        id="Car-details"
        className="Car-details-div "
        style={{
          display: "flex",
          flexDirection: "row",
          
        }}
      >
        <div className="car-img" >
          <img src={kiacar}
          style={{ marginTop:"150px"}}
          
          
          ></img>
        </div>
        <div
          className="Car-details-form"
          style={{  width: "70%", }}
        >
          <Form
            className=""
            // {...formItemLayout}
            variant="filled"
            layout="vertical"
            style={
              {
                //  width: 900,
                // border:"1px solid black",
                // float:'right'
                // float: "right",
                // position:"absolute",
              }
            }
          >
            <Form.Item
              label="Model Name"
              name="ModelName"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                style={{
                  Width: 400,
                }}
              />
            </Form.Item>
            <Form.Item
              label="Color"
              name="Color"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                style={{
                  Width: 400,
                }}
              />
            </Form.Item>

            <Form.Item
              label="License Plate Number"
              name="LicensePlateNumber"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                style={{
                  Width: 400,
                }}
              />
            </Form.Item>

            <Form.Item
              label="Year of Manufacture"
              name="YearofManufacture"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                style={{
                  Width: 400,
                }}
              />
            </Form.Item>

            <Form.Item
              label="VIN (Vehicle Identification Number)"
              name="Vin"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                style={{
                  Width: 200,
                }}
              />
            </Form.Item>

            <Form.Item
              label="Fuel Type"
              name="fuel-type"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Select style={{ width: "500px" }}>
                <Option value="Petrol">Petrol</Option>
                <Option value="Diesel">Diesel</Option>
                <Option value="Electric">Electric</Option>
                <Option value="Hybrid">Hybrid</Option>
                <Option value="Others">Others</Option>
              </Select>
              {/* <Input 
    style={{
      Width: 400,
    }}
  /> */}
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
      </div>
    </>
  );
}

export default CarDetails;
