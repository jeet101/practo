import { Appointment } from '../components/Appointment';
import { Navbar2 } from '../components/Navbar2';
import './PatientDetails.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PatinetForm } from '../components/PatinetForm';

export const PatientDetails=()=>{
 
  return <div className="patient-details-main">
    <Navbar2/>
    <div className = "patient-details-container-jb">
    <Appointment/>
    <PatinetForm/>
    </div>
    
  </div>
}