import React, { useEffect, useState } from 'react'
import axios from "axios";


const DataShow = () => {

    let[data,setdata]=useState([])


    useEffect(()=>{
        let api= "http://localhost:3000/hotel"
        axios.get(api).then( (res)=>{
            console.log(res.data);

            setdata(res.data)
            
        }).catch((err)=>{
            console.log("error",err);
            
        })


    },[])
  return (
    < >

    </ >
  )
}

export default DataShow