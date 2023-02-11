import React, { useEffect,useState } from 'react'
import "./style.css"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OnClickImage, SaveDetail } from '../../../redux/todoSlice';
import { GetCompanyById } from '../../../api/companyDetail/api';
export default function Card(props) {
  const {companyName,companyId ,website,location,jobType,experience,qualification,Batch,salary,point1,point2,point3,point4,point5}=props
  const navigate = useNavigate();
  const count = useSelector((store) => store.counter);
  const dispatch=useDispatch();
  const [data, setdata] = useState([]);
    async function GetCompanyForDetail() {
        const res = await GetCompanyById({Id:companyId});
        if (res.state) {
          console.log("success res");
          setdata(res.data[0])
          console.log(count.Id)
        //   window.location.reload();
          console.log(res.data[0])
        } else {
          console.log("error");
        }
      }
    return (
      <div className='Card-name' onClick={() => {
        localStorage.setItem(
            "companyDetail"
            
            ,JSON.stringify({companyId,companyName,website,location,jobType,experience,qualification,Batch,salary,point1,point2,point3,point4,point5})
          );
        console.log(companyId);
        GetCompanyForDetail();
        navigate("/jobdetail")}}>
        
        <span className='Card-inside'>
          {companyName}
        </span>
        
      </div>  
    );
}