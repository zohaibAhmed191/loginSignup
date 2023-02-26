import {
  FacebookOutlined,
  GoogleOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

export const Signup = () => {
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
            <h1>
              <LoginOutlined /> SignUp
            </h1>

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
                <Input className="login-input" placeholder="Enter Name" />
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
                <Input className="login-input" placeholder="Enter Email" />
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
                <Input className="login-input" placeholder="0333*******" />
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
                <Input.Password
                  className="login-input"
                  placeholder="*********"
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 16,
                }}
              >
                <Button type="primary" className="loginbtn" htmlType="submit">
                  SignUp
                </Button>
              </Form.Item>
            </Form>
            <p>or SignUp with</p>
            <div className="flex-buttons">
              <div className="login_with">
                <GoogleOutlined className="googelIcon" />
                &nbsp; Google
              </div>
              <div className="login_with">
                <FacebookOutlined className="googelIcon" />
                &nbsp; Facebook
              </div>
            </div>
            <br />
            <p><span className="bold-text">Have already an Account?</span> Login Now</p>
          </div>
        </div>
        <img src="/2.jpg" className="login_image" alt="" />
      </div>
    </>
  );
};
