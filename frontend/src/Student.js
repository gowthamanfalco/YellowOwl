import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Student() {

    const[student,setStudent]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res =>setStudent(res.data))
        .catch(err =>console.log(err));
    },[])

    
    const handelDe = async(id)=>{
        try{
            await axios.delete('http://localhost:8081/student/'+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }

    }
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center container'>
        <div className='w-100 bg-white rounded p-3 '>
            <div className='cgr'>
               <center> <h1>yellowl Admin</h1></center>
            </div>
           <div className='container ijk'>
           <h1 className='jkt'>Student</h1>
            <input type='text'placeholder='Search' className='hjk' />
            <Link to='/create' className='btn btn-success hjt'>Add New Student</Link>
           </div>
            <div class="d-flex  bg-white justify-content-center align-items-center container">
                <div>
                <table className='table'>
                <thead>
                    <tr>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Enroll Number</th>
                       <th>Date of Admission</th>
                       <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.enrollnumber}</td>
                                <td>{data.dateofadmission}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e=>handelDe(data.ID)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Student