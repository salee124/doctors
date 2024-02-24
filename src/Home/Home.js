import React,{useState,useEffect} from 'react'
import axios from 'axios'
import DeletePatient from './DeletePatient'
import EditPatient from './EditPatient'
// import DeleteDoctors from './DeleteDoctors'
// import EditDoctor from './EditDoctor'
export default function Home() {
  const [patients,setPatients]=useState()
  useEffect(()=>{
    axios.get("https://doc-back.onrender.com/patients")
        .then((res)=>{
            console.log(res)
            setPatients(res.data)
        })
  },[])
  
  
  return patients?(
    <div className='container'>
      {
        patients.map((patient)=>(
            <div className='patients' key={patient.id}>
                <p>Name:{patient.name}</p>
                <p>Age:{patient.age}</p>
                <p>Gender:{patient.gender}</p>
                <p>Weight:{patient.weight}</p>
                <p>Disease:{patient.disease}</p>
                <p>Doctor name:{patient.doctor}</p>
                <EditPatient/>
                <DeletePatient id={patient.id}/> 
            </div>
        ))
      }
    </div>
  ):"loading..."
}


