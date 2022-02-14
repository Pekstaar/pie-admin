import React from "react";
import { Form, Input, Button, Checkbox, Divider } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-slate-200  rounded h-96 lg:w-7/12 w-10/12 xl:w-5/12 flex justify-center items-center">
        <Form
          name="normal_login"
          className="login-form w-10/12"
          initialValues={{ remember: true }}
          onFinish={() => {}}
        >
          <Divider className="uppercase ">
            <span className="text-xl">Admin-Login</span>{" "}
          </Divider>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone Number!" },
            ]}
          >
            <Input
              className="p-2.5"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Phone no."
            />
          </Form.Item>

          <br />

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              className="p-2.5"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button text-black mr-6"
            >
              Log in
            </Button>
            Or{" "}
            <Link to="/register" className="text-blue-600 hover:underline ">
              &nbsp;Click here to register!
            </Link>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
