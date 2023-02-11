import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import "./style.css";
import logo from "../../assests/AlljobAssest/a.png";
import { GetCompanyById, GetCompanys } from "../../api/companyDetail/api";
export default function Alljob(props) {
  const [data, setdata] = useState([]);
  async function GetCompany() {
    const res = await GetCompanys();
    if (res.state) {
      console.log("success res");
      setdata(res.data.data);
      //   window.location.reload();
      console.log(res.data);
      setdata(res.data);
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    GetCompany();
  }, []);
  return (
    <div className="cont">
      <span className="logo-set">
        <img src={logo} className="logo-setting" />
      </span>
      <div className="all-jobs">
        <span className="job-name">
          {data?.map((item) => {
            return <Card companyName={item.companyName} companyId={item.companyId} website={item.website} location={item.location} jobType={item.jobType} 
          experience={item.experience} qualification={item.qualification} Batch ={item.Batch } salary={item.salary} point1={item.point1} point2={item.point2} point3={item.point3} point4={item.point4} point5={item.point5}  />;
          })}
        </span>
      </div>
    </div>
  );
}
