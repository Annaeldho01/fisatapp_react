import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
  
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch(
          
          (error)=>{
            console.log(error.message)
            alert(error.message)
          }
        
        ).finally()
    }
    useEffect(()=>fetchData,[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-success table-striped">
                <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">ID</th>
      <th scope="col">FIRST NAME</th>
      <th scope="col">LAST NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">MOBILE</th>
      <th scope="col">COLLEGE</th>
      <th scope="col">COURSE</th>
      <th scope="col">ADDRESS</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value, index)=>{
           return <tr>
           <th scope="row">{index+1}</th>
           <td>{value._id}</td>
           <td>{value.firstname}</td>
           <td>{value.lastname}</td>
           <td>{value.email}</td>
           <td>{value.mobile}</td>
           <td>{value.college}</td>
           <td>{value.course}</td>
           <td>{value.address}</td>
         </tr>
        }
    )}
  </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll