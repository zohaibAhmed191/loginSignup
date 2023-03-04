import React from "react";
import { Card, Divider, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import {Icon} from '@iconify/react'
const { Meta } = Card;

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
              src="https://media.istockphoto.com/id/175388112/photo/cosmetics-shopping.jpg?s=612x612&w=0&k=20&c=vVvNclSmGe374HMb9gt9iNIVmXMuVKkYqEYTCtj7VIo="
            />
            <div className="d-flex-card-body">
              <div>
                <h6>Mahrose Beauty Parlor</h6>
              </div>
              <div className="d-flex-card">
                <StarFilled className="star" />
                <p className="bold-text">3.5 (3 reviews)</p>
              </div>
            </div>

            <div className="offer_text">25% OFF</div>
          </div>
        ))}
      </Space>
      <Divider orientation="left">Nearby Stores</Divider>
      <Space
        size={[2, 6]}
        wrap
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {new Array(4).fill(null).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card
            className="Store_Card"
            hoverable
            cover={
              <img
                className="cardImg"
                alt="example"
                src="https://www.pittsburghmagazine.com/content/uploads/2022/08/f/y/wedding-makeup.jpg"
              />
            }
          >
            <Meta
              title={`Bridal MakeUp ${index}`}
              description="Mahrose Beauty Parlor"
            />
          </Card>
        ))}
      </Space>
    </>
  );
}

export default Cards;
