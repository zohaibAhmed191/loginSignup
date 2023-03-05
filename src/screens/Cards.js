import React from "react";
import {  Divider, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import {FaMapMarkerAlt} from 'react-icons/fa'

function Cards() {
  return (
    <>
      <Divider orientation="left">Our Popular Stores</Divider>
      <Space
        size={[2, 6]}
        wrap
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {new Array(4).fill(null).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
      
          <div className="Store_Card">
            <img
              className="cardImg"
              alt="example"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            />
            <div className="d-flex-card-body">
              <div className="card-title">
                <h6>Card Title Card Title Card Title</h6>
              </div>
              <div className="d-flex-card">
                <StarFilled className="star" />
                <p className="bold-text">3.5 (3 reviews)</p>
              </div>
            </div>
            <div className="location-name"><FaMapMarkerAlt /><p>Gulshan-e-Iqbal Block 6</p></div>
            
            <div className="offer_text">25% OFF</div>
          </div>
      
        ))}
      </Space>
      
    </>
  );
}

export default Cards;
