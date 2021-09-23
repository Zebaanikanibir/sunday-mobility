import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import image from '../../image/photo-1507525428034-b723cf961d3e.jpg'
import '../Style.css';
const Register = () => {
    const [userData, setUserData] = useState([]);
	
	
    const { register, handleSubmit, formState: { errors } } = useForm();
    var userData = JSON.parse(localStorage.getItem('data'));
  const onSubmit = data => {
    
        const newData = [...userData,data]
    setUserData(newData)
    console.log('new',newData)
    localStorage.setItem('data',JSON.stringify(newData));
  
    console.log('data',data)
    alert('Registered successfully')
    
  };
  return (
    <div className="home">
    <div >
     <img src={image} alt="nibir" />
      </div>
       <div className="form"> 
       <form  onSubmit={handleSubmit(onSubmit)}>
      <label className="labelStyle" htmlFor="name">Name</label><br/>
      <input className="inputStyle" id="name" type="text" name="name"{...register('name', {
          required: true, maxLength: {
            value: 30,
            message: "Max length is 30"
          },
          pattern: {
            value:

              /^[a-zA-Z\s]*$/
            ,
            message: "only alphabet"
          }
        })} />
      {errors.name && errors.name.type === "required" && <span style={{color:'red'}}>This is required</span>}
      {errors.name && errors.name.type === "pattern" && (
          <span style={{color:'red'}} role="alert">only letter</span>

        )}
<br/>
<label className="labelStyle" htmlFor="number">Phone</label><br/>
      <input className="inputStyle" id="number" type="text" name="number"{...register('number', {
          required: true, maxLength: {
            value: 10,
            message: "Max length is 10"
          },
          pattern: {
            value:

            /^[0-9]*$/ 
            ,
            message: "only alphabet"
          }
        })} />
      {errors.number && errors.number.type === "required" && <span style={{color:'red'}}>This is required</span>}
      {errors.number && errors.number.type === "pattern" && (
          <span role="alert">only number</span>

        )}
{errors.number && errors.number.type === "maxLength" && <span style={{color:'red'}}>Max length is 10</span> }
<br/>
      <label className="labelStyle" htmlFor="password">Password</label><br/>
      <input className="inputStyle" id="password" type="password" name="password"{...register('password', {
          required: true, maxLength: {
            value: 30,
            message: "Max length is 30"
          },
          pattern: {
            value:

            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            ,
            message: "letter, number and special character. Minimum 8 characters"
          }
        })} />
      {errors.password && errors.password.type === "required" && <span style={{color:'red'}}>This is required</span>}
      {errors.password && errors.password.type === "pattern" && (
          <span role="alert" style={{color:'red'}}>letter, number and special character. Minimum 8 characters</span>

        )}
<br/>
      <label className="labelStyle" htmlFor="email">Email</label><br/>
      <input className="inputStyle"  id="email" type="email" name="email"{...register('email', { required: true, maxLength: 30 })} />
      {errors.email && errors.email.type === "required" && <span style={{color:'red'}}>This is required</span>}
      {errors.email && errors.email.type === "maxLength" && <span style={{color:'red'}}>Max length exceeded</span> }
<br/>
      
      <input className="submit" type="submit" />
    </form>
    <p>Already account?</p>
    <Link to="/login">Login</Link>
       </div>

    </div>
  )
}

export default Register
