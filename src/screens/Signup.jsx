import React from "react";
import { Button, Form, Input } from "antd";
import {LoginOutlined} from '@ant-design/icons'

export const Signup = () => {
  const onFinish = (values) => {
    alert(values.email);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="d-flex-signup">
        <div className="login_form">
     <div className="head_form">
          <h1><LoginOutlined /> SIGNUP  BEAUTOWNS</h1>
          <Form
            name="basic"
            labelCol={{
              span: 2,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 1000,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input
                className="login-input"
                placeholder="Enter Name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                className="login-input"
                placeholder="Enter Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="login-input" placeholder="*********" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone!",
                },
              ]}
            >
              <Input className="login-input" placeholder="033229*****" />
            </Form.Item>

          

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 16,
              }}
            >
              <Button type="primary" className="loginbtn" htmlType="submit">
                Signup
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
        <img src="/signup.jpg" className="signup_image" alt="" />
      </div>
    </>
  );
};
