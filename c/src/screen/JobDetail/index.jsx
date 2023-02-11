import React, { useEffect, useState } from 'react'
import { GetCompanyById } from '../../api/companyDetail/api';
import "./style.css"

import { useSelector, useDispatch } from "react-redux";
export default function Detail(props) {
    const count = useSelector((store) => store.counter);
    // let data=count.companyDetail
    let data=JSON.parse(localStorage.getItem("companyDetail"));
      useEffect(() => {
        data=JSON.parse(localStorage.getItem("companyDetail"));

      }, []);
    return (
        <div className='detail-cont'>
            <div className='company-name'>
                Amazone/software engineer
            </div>
            <div className='company-description'>
            Flipkart is an online retailer based in India. It was founded by Binny and Sachin Bansal in 2007, and the company is based in Bengaluru, Karnataka, India. The organization’s CEO since 2017 is Kalyan Krishnamurthy. Its parent company is Walmart. In accordance with the data produced in 2019, the corporation had a revenue of 43,615 crore and 30,000 employees overall.
            </div>
            <div className='requirment'>
                <span className='req-header'>Requirments</span>
                <span>
                <table className='table1'>
                    
                    <tr className='table1' >
                        <td className='table1' >Company name</td>
                        <td>{data.companyName}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{data.website}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{data.location}</td>
                    </tr>
                    <tr>
                        <td>Job Type</td>
                        <td>{data.jobType}</td>
                    </tr>
                    <tr>
                        <td>Experience</td>
                        <td>{data.experience}</td>
                    </tr>
                    <tr>
                        <td>Qualification</td>
                        <td>{data.qualification}</td>
                    </tr>
                    <tr>
                        <td>Batch</td>
                        <td>{data.Batch}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>{data.salary}</td>
                    </tr>
                </table>
                </span>
            </div>
            <div className='r\equired-skills'>
                <span className='req-header'>
                    Required skills
                </span>
               
                <ul>
                    <li>{data.point1}</li>
                    <li>{data.point2}</li>
                    <li>{data.point3}</li>
                    <li>{data.point4}</li>
                    <li>{data.point5}</li>
                </ul>
                
            </div>
            <div>
            {/* {props.link} */}
            <a className='link-name' href="https://jobs.bentley.com/job/Pune-Software-Engineer-I-411028/947050900/">click here to apply</a>
            
                     
            </div>
        </div>

    );
}
