import React from "react";
import {  Card,  Divider, Space } from "antd";
const { Meta } = Card;

function Cards() {
  return (
    <>
      <Divider orientation="left">Our Popular Stores</Divider>
      <Space size={[2, 6]} wrap direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
    {new Array(4).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Card
      className="Store_Card"
      hoverable
      cover={
        <img
          className="cardImg"
          alt="example"
          src="https://media.istockphoto.com/id/175388112/photo/cosmetics-shopping.jpg?s=612x612&w=0&k=20&c=vVvNclSmGe374HMb9gt9iNIVmXMuVKkYqEYTCtj7VIo="
        />
      }
    >
      
      <Meta title={`Party MakeUp ${index}`} description="Najlas Beauty Parlor" />
    </Card>
    ))}
  </Space>
      <Divider orientation="left">Nearby Stores</Divider>
      <Space size={[2, 6]} wrap direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
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
      
      <Meta title={`Bridal MakeUp ${index}`} description="Mahrose Beauty Parlor" />
    </Card>
    ))}
  </Space>

    </>
  );
}

export default Cards;
