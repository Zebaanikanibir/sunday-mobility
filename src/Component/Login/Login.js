import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import image from '../../image/photo-1507525428034-b723cf961d3e.jpg'
import User from '../../Component/User/User'
const Login = () => {
    const [showForm, setShowForm] =useState(true)
    const [userDetails, setUserDetails] =useState(false)
	const userData = JSON.parse(localStorage.getItem('data'));
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        if(data===null){
			alert('no user found!');
		}
			
			
		const same = userData.filter(d=>d.email===data.email);

		console.log('same',same)

			if(same.length!==0){
                if (same[0].password===data.password){
                alert('right password.');
				localStorage.setItem('userlogined',data.name);
				
				setShowForm(false)
                setUserDetails(true)
			}
			else{
				alert('wrong password.');
			}
            }
		

    };

  return (
    <div className="home">
     <div>
     <img src={image} alt="nibir" />
      </div>
     <div>
      {
          showForm &&
         (
           <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
     <label className="labelStyle" htmlFor="email">Email</label><br/>
      <input className="inputStyle"  id="email" type="email" name="email"{...register('email', { required: true, maxLength: 30 })} />
      {errors.email && errors.email.type === "required" && <span style={{color:'red'}}>This is required</span>}
      {errors.email && errors.email.type === "maxLength" && <span style={{color:'red'}}>Max length exceeded</span> }<br/>
      <label className="labelStyle" htmlFor="password">Password</label><br/>
      <input className="inputStyle"  id="password" type="password" name="password"{...register('password', { required: true, maxLength: 30 })} />
      {errors.password && errors.password.type === "required" && <span>This is required</span>}
      {errors.password && errors.password.type === "maxLength" && <span>Max length exceeded</span> }

<br/>

      
      <input className="submit" type="submit" />
    </form>
    <p>Have any account?</p>
    <Link to="/register">Register</Link>

      </div>   
         )
      }
{
    userDetails &&
    (
    
             <div className="form">
             {
                 userData.map(data=><User data={data}></User>)
             }
             </div>
         
    )
}
     </div>

    </div>
  )
}

export default Login
