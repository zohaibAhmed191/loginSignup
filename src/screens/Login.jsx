import { LoginOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

export const Login = () => {
  const onFinish = (values) => {
    alert(values.email);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="d-flex">
        <div className="login_form">
        <div className="head_form">
          <h1><LoginOutlined /> LOGIN  BEAUTOWNS</h1>
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 0,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 16,
              }}
            >
              <Button type="primary" className="loginbtn" htmlType="submit">
                login
              </Button>
            </Form.Item>
          </Form> 
        
          </div>
        </div>
        <img src="/2.jpg" className="login_image" alt="" />
      </div>
    </>
  );
};
