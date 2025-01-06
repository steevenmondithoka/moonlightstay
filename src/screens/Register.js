import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

function Register() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[cpassword,setcpassword]=useState('')

    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const[success,setsuccess]=useState()


   async function register(){
       if(password===cpassword)
        {
            const user={
                name,
                email,
                password,
                cpassword
            }
            
            try {
                setloading(true)
                const result = (await axios.post('/api/users/register',user)).data
                setloading(false)
                setsuccess(true)
                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
                window.location.href='/login'
                
            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(true)
            }
       }
       else{
        {error&&(<Error message='password doesnot match'/>)}
       }

     if(name.length<=5){
        {error&&(<Error message='Username should be atleast 5 Charcters'/>)}
       }
    }
  return (
    <div>
        {loading&&(<Loader/>)}
        {error&&(<Error message='false'/>)}
       
    <div className='row justify-content-center mt-4 '>
        <div className='col-md-5'>
        {success && (<Success message={'Registered successfully!'}/>)}
            <div className='bs'>
                <h2>Register</h2>
                <input type='text' className='form-control' placeholder='username'
                value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <input type='email' className='form-control' placeholder='email'
                value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                <input type='password' className='form-control' placeholder='password'
                value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <input type='password' className='form-control' placeholder='confirm password'
                value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>

                <button className='btn btn-primary mt-3' onClick={register}>Create Account</button>
                <p className='mt-2 '>Already have an Account?<a href='/login'>Login</a></p>
            </div>

        </div>

    </div>
    </div>
  )
}

export default Register
