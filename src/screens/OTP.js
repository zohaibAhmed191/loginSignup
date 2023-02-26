
   import { Button, Form, Input } from "antd";
   import React from "react";
   
   export const OTP = () => {
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
           {/* <img src="/send.png" width={150} alt="" /> */}
               
               <h1>
                ENTER OTP
               </h1>
               <p><span>Enter OTP CODE To Verfity Your Account</span></p>
   
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
                   name="otp-code"
                   rules={[
                    {
                      pattern: /^(?:\d*)$/,
                      message: "Value should contain just number",
                    },
                    {
                      pattern: /^[\d]{0,5}$/,
                      message: "Value should be less than 5 character",
                    },
                  ]}
                  validateTrigger="onChange"
                 >
                   <Input className="login-input" placeholder="Enter Email" />
                 </Form.Item>
   
   
                 <Form.Item
                   wrapperCol={{
                     offset: 0,
                     span: 16,
                   }}
                 >
                   <Button type="primary" className="loginbtn" htmlType="submit">
                     Verify OTP
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
   