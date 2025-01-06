import React,{useState} from 'react'
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

import Success from '../components/Success';
function Loginscreen() {
   
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const[success,setsuccess]=useState()
   async function login(){


        const user={
            email,
            password
        }
        try {
            setloading(true)
            const result=(await axios.post('/api/users/login',user)).data
            setloading(false)
            localStorage.setItem('currentUser',JSON.stringify(result));
            window.location.href='/'
            setsuccess(true)
        } catch (error) {
            console.log(error);
            setloading(false)
            seterror(true)
        }
        
    }
  return (
    <div>
        {loading &&(<Loader/>)}

       <div className='row justify-content-center mt-4'>
        <div className='col-md-5 mt-5'>
            {error&&(<Error message='Invalid Credintials'/>)}
                        
            {success && (<Success message={'Login successfully!'}/>)}

            
            <div className='bs'>
                <h2>Login</h2>
             
                <input type='email' className='form-control' placeholder='email'
                value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input type='password' className='form-control' placeholder='password'
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
               

                <button className='btn btn-primary mt-3'  onClick={login}>Login</button>
                <p className='mt-2'>Don't Have an account <a href='/register'>Register</a></p>
            </div>

        </div>


    </div>
    </div>
  )
}

export default Loginscreen
