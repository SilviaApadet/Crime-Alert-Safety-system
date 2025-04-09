import React from "react";
import { useState,useEffect } from "react";

function SafetyAlert(){
    const [Alert,setAlert]=useState([])
    useEffect(()=>{
        fetch('')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setAlert(data);
        })
        .catch((error)=>{
            console.error("Error fetching Alerts",error)
        })   
    },[])
    return(
        <div>
            <h2>Recent Safety Alerts</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Reported_at</th>
                        <th>Report_type</th>
                        <th>Severity_level</th>
                        <th>is_verified</th>
                    </tr> 
                </thead>
                <tbody>
                    {Alert.map((alerts)=>(
                        <tr key={alerts.id}>
                            <td>{alerts.title}</td>
                            <td>{alerts.description}</td>
                            <td>{alerts.location}</td>
                            <td>{alerts.reported_at}</td>
                            <td>{alerts.report_type}</td>
                            <td>{alerts.severity_level}</td>
                            <td>{alerts.is_verified}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default SafetyAlert;