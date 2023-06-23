import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CvItems from './contentresume';
import { logOut } from '../features/addSlice';
import { Link } from "react-router-dom";
function Homepage() {
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resumeData);
  const user = useSelector((state) => state.user)

  const Navigate = useNavigate()



  const handleLogOut = () => {
    dispatch(logOut());
    Navigate("/login")
  }
  const filteredData = [1, 2, 3, 4, 5];
  const listItems = filteredData.map(
    (element) => {
      return (
        <div style={{ backdropFilter: "blur(8px)", marginLeft: "10px", boxShadow: "white 0px 50px 100px -20px, white 0px 30px 60px -30px, white 0px -2px 6px 0px inset", border: "3px solid white ", borderRadius: "20%", height: "100px", width: "100px", backgroundColor: "#C0B4EE" }}>
          <p style={{ margin: "40px" }}>{element}</p>
        </div>
      )
    }
  )
  return (
    <div style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backdropFilter: "blur(5px)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", paddingLeft: "90px", margin: "80px", paddingTop: "-400px", borderRadius: "10%", padding: "50px", marginLeft: "150px", height: "40vw", width: "80vw", border: "solid #f5dfdf 3px" }}>

      {/* <div
      style={{
        width: "250px",
        height: "250px",
        display: "inline",
        backgroundColor: "blue",
        color: "black",
      paddingLeft:"10px"
      }}
    > */}

      <Button onClick={handleLogOut} type="dashed">logout</Button>

      {resumeData.map((item) => ((user === item.userId && <CvItems key={item.userId} item={item} />)))}
      <Link to="./resumemaking">
        <Button style={{ height: "50px", width: "150px", border: "2px solid white", borderRadius: "50%", position: "fixed", right: "60px", bottom: "20px" }} type="dashed">New Resume +</Button>
      </Link>

    </div>

  )
}

export default Homepage
