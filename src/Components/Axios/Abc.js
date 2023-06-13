import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Style.css'
import {FaHeart} from "react-icons/fa"

const Abc = () => {
    const [user,SetUser]=useState([])
    useEffect(()=>{
        getdata()
    },[])
    const getdata = async()=>{
        const url = "https://dummyjson.com/products"
        try {
       const result = await axios.get(url)
      
       
          SetUser(result.data.products)
        }
        catch(error){
            console.log(error)
        }
         
        }
        const deleteData=(id)=>{
            SetUser(user.filter((del)=>del.id !==id))
        }
    
    
  return (
    <div  className='parent'>
        <div className='head'>
            <p className='hd'><span className='sp'>S</span>hopping <span className='sp'>S</span>ite</p>
        <input type='text' placeholder='Search'></input>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Contact'>Contact</a>
        <a href='#Logout'>Logout</a>
        </div>
        {user.map((value)=>{
            return(
            <div className='child' key={value.id}>
            <h1 className='hed'>{value.title}</h1>
            <p className='para'><img src={value.thumbnail}/></p>
            <p className='pri'><span className='dollar'>$</span> {value.price} <span className='heart'><FaHeart/> {value.rating}</span></p>
            <p className='bran'>{value.brand}</p>
            <button className='btn' onClick ={()=>deleteData(value.id)} >Delete</button>
            </div>
                )
            }
        )}
    </div>
  )}
        

export default Abc

 