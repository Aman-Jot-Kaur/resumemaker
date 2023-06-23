import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Otppage() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState('');
  const [validate, setValidate] = useState(false);
  const Navigate = useNavigate();
  const handleSubmit = (e) => {

    e.preventDefault();
    setValidate(false);

    if (otp !== process.env.REACT_APP_OTP4) {
      setValidate(true);
      Navigate("/login")
      return;
    }

    else {

      Navigate("/home")
    }
  };



  return (
    <Form style={{ backdropFilter: "blur(5px)", margin: "200px", paddingTop: "-400px", borderRadius: "20%", padding: "120px", marginLeft: "550px", height: "20vw", width: "30vw", border: "solid #f5dfdf 3px" }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}

    >
      <Form.Item
        label="Enter Otp of 4 digits"
        name="numberValue"
        rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Value should contain just number",
          },
          {
            pattern: /^[\d]{0,4}$/,
            message: "Value should be less than 4 character",
          },
        ]}
        validateTrigger="onBlur"
      >
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </Form.Item>


      <Form.Item>
        <Button type="submit" onClick={handleSubmit} style={{ backgroundColor: "grey" }} htmlType="submit" className="login-form-button">
          Confirm
        </Button>

      </Form.Item>
    </Form>
  );
};


export default Otppage
