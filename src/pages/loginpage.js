import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from 'react-dom';

import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { addUser } from "../features/addSlice";
import { useNavigate } from "react-router-dom";
const NormalLoginForm = () => {

  const dispatch = useDispatch();
  const [number, setNumber] = useState("");
  const [validate, setValidate] = useState(false);
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate("/home")
    }
  }, [])

  const handleAdd = (e) => {

    setValidate(false);



    dispatch(addUser(number));
    Navigate("/Otp")
  }
  // useEffect(() => {

  //   dispatch(addnummber(num));

  //   console.log(add);
  // }, [num])

  return (
    <Form style={{ backdropFilter: "blur(5px)", margin: "200px", paddingTop: "-400px", borderRadius: "20%", padding: "120px", marginLeft: "550px", height: "20vw", width: "30vw", border: "solid #f5dfdf 3px" }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}


    >
      <Form.Item
        label="Number:"
        name="numberValue"
        rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Value should contain just number",
          },
          {
            pattern: /^[\d]{0,50}$/,
            message: "Value should be less than 50 character",
          },
        ]}
        validateTrigger="onBlur"
      >
        <Input onChange={(e) => setNumber(e.target.value)} value="100" style={{ width: "10vw" }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter Number" />
      </Form.Item>


      <Form.Item>
        <Link to="/otp">
          <Button onClick={handleAdd} type="primary" style={{ backgroundColor: "grey" }} htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Link>
        <a style={{ marginLeft: "20px", color: "black" }} href="">  Or register now!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;