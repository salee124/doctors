import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Navigation from './Navigation'
import Doctor from './Doctors/Doctor'
import Patient from './Patients/PatientsInfo'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/patient" element={<Patient/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
