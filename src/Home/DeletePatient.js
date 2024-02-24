import React from 'react'
import axios from 'axios'
export default function DeletePatient(props) {
    function deletePatient(){
        axios.delete('https://doc-back.onrender.com/patients/${props.id}')
            .then((res)=>{
                console.log(res)
                alert("Patient deleted successfully")
            })
    }
  return (
    <div>
      <button onClick={deletePatient}>Delete</button>
    </div>
  )
}