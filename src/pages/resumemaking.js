import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { addResume } from "../features/addSlice";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox, Modal } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
let initialValue = {
  numberValue: "",
  nameValue: "",
  mailValue: "",
  skillValue: "",
  collegeValue: "",
  cgpaValue: "",
  experienceValue: "",
  imageValue: "",

}
const Resumemaking = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const dispatch = useDispatch()

  const [values, setValues] = useState(initialValue);
  const [submit, setSubmit] = useState(false);
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    if (values !== initialValue) {
      console.log(values);
      dispatch(addResume(values));
      setValues(initialValue);
      setSubmit(true);
    }
  }

  const handleInputChange = (e) => {
    setSubmit(false);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCancle = () => {
    Navigate("/home");
  }

  const handleReset = () => {
    setValues(initialValue)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (

    <Form style={{ backdropFilter: "blur(5px)", margin: "200px", paddingTop: "-400px", borderRadius: "20%", padding: "60px", paddingLeft: "90px", marginLeft: "550px", height: "30vw", width: "30vw", border: "solid #f5dfdf 3px", marginTop: "45px" }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item style={{ width: "10vw" }}
        label="Number: "
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
        <Input onChange={handleInputChange} value={values.numberValue} style={{ width: "10vw" }} placeholder="Enter Number" />
      </Form.Item>
      <Form.Item style={{ width: "20vw" }}
        label={<p style={{ width: "50px" }}>Name</p>}
        name="nameValue"
        validateTrigger="onBlur"
      >
        <Input style={{ width: "10vw" }} placeholder="Enter Name" />
      </Form.Item>

      <Form.Item style={{ width: "10vw" }}
        label={<p style={{ width: "50px" }}>Mail</p>}
        name="mailValue"
        rules={[
          {
            required: false,
            type: "email",
            message:
              'Enter a valid email address!',
          },
        ]}
        validateTrigger="onBlur"
      >
        <Input name="mailValue" onChange={handleInputChange} value={values.mailValue} style={{ width: "10vw" }} placeholder="Enter Name" />
      </Form.Item>


      <Form.Item style={{ width: "10vw" }}
        label={<p style={{ width: "40px" }}>Skills</p>}
        name="skillValue"
        rules={[
          {

            type: "textbox",
            message:
              'Enter skills!',
          }, {
            required: true,
            message: "dont leave empty"
          }
        ]}
        validateTrigger="onBlur"
      >
        <Input onChange={handleInputChange} value={values.skillValue} style={{ width: "10vw", height: "30px" }} placeholder=" comma separated" />
      </Form.Item>



      <Form.Item style={{ width: "10vw" }}
        label={<p style={{ width: "40px" }}>College</p>}
        name="collegeValue"
        rules={[
          {

            type: "textbox",
            message:
              'Enter college name!',
          }, {
            required: true,
            message: "dont leave empty"
          }
        ]}
        validateTrigger="onBlur"
      >
        <Input onChange={handleInputChange} value={values.collegeValue} style={{ width: "10vw" }} placeholder=" college name" />
      </Form.Item>


      <Form.Item style={{ width: "10vw" }}
        label={<p style={{ width: "50px" }}>cgpa</p>}
        name="cgpaValue"
        rules={[
          {

            type: "textbox",
            message:
              'Enter cgpa!',
          }
        ]}
        validateTrigger="onBlur"
      >
        <Input onChange={handleInputChange} value={values.cgpaValue} style={{ width: "10vw" }} placeholder=" cgpa" />
      </Form.Item>


      <Form.Item style={{ width: "10vw" }}
        label={<p style={{ width: "55px" }}>Experience</p>}
        name="experienceValue"
        rules={[
          {

            type: "textbox",
            message:
              'Enter experience',
          }
        ]}
        validateTrigger="onBlur"
      >
        <Input onChange={handleInputChange} value={values.experienceValue} style={{ width: "10vw", height: "30px" }} placeholder="experience" />
      </Form.Item>

      <Form.Item style={{ width: "10vw" }}
        label={<p style={{ width: "50px" }}>Image</p>}
        name="imageValue"
        rules={[
          {

            type: "textbox",
            message:
              'Enter experience',
          }
        ]}
        validateTrigger="onBlur"
      >
        <Input onChange={handleInputChange} value={values.imageValue} style={{ width: "10vw", height: "30px" }} placeholder="url for profile" />
      </Form.Item>

      <Form.Item>
        <Button onClick={handleSubmit} type="primary" style={{ backgroundColor: "grey", marginLeft: "10px", color: "white" }} htmlType="submit" className="login-form-button">
          Create
        </Button>
        <Button onClick={showModal} style={{ backgroundColor: "green", marginLeft: "10px", color: "white" }} className="login-form-button">
          preview
        </Button>
        <Link to="/home">
          <Button onClick={handleCancel} style={{ backgroundColor: "red", marginLeft: "10px", color: "white" }} className="login-form-button">
            cancel
          </Button>
        </Link>
      </Form.Item>
      <Form.Item>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

          <p>mail : {values.mailValue}</p>
        </Modal>
      </Form.Item>
    </Form>
  );
};

export default Resumemaking;