import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateStudent() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone]=useState("")
    const [enrollnumber, setEnrollNumber]=useState("")
    const [dateofadmission, setDateOfAdmission]=useState("")
    const{id}=useParams();
    const navigator=useNavigate();

    function handelSub(event){
       event.preventDefault();
       axios.put('http://localhost:8081/update/'+id, {name,email,phone,enrollnumber,dateofadmission} )
       .then(res=>{
        console.log(res);
        navigator('/');
       })
       .catch(err=> console.log(err));
    }


  return (
    <div  className='d-flex vh-100 bg-secondary justify-content-center align-items-center container'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handelSub}>
                <h2>Update Student</h2>
                <input type="text" placeholder='Name' className='form-control' onChange={e=>setName(e.target.value)}/><br></br>
                <input type="mail" placeholder='EMAIL' className='form-control' onChange={e=>setEmail(e.target.value)}/><br></br>
                <input type="number" placeholder='Phone' className='form-control' onChange={e=>setPhone(e.target.value)}/><br></br>
                <input type="number" placeholder='Enroll Number' className='form-control' onChange={e=>setEnrollNumber(e.target.value)}/><br></br>
                <input type="date" placeholder='Date of admission' className='form-control' onChange={e=>setDateOfAdmission(e.target.value)}/><br></br>
                <button className='btn btn-success '>Update</button>
                
               
            </form>

        </div>
    </div>
  )
}

export default UpdateStudent