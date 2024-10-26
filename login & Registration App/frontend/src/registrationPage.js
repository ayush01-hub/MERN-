import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const RegistrationPage = () => {

    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: ''
    });

    //submit function
    const handleRegistrationSubmit=async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:8000/register',registrationData);
            const{success,message}=response.data;
            if(success){
                console.log('Registered Successfully')
            }else{
                console.log(message);
            }
        }
        catch(error){
            console.error('Registration error',error)
        }
        setRegistrationData({
            username:'',
            password:''
        })
    }

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };







    return (
        <div>
            <h1>Registration Page</h1>
                <form onSubmit={handleRegistrationSubmit}>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        value={registrationData.username}
                        onChange={handleRegistrationChange}
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={registrationData.password}
                        onChange={handleRegistrationChange}
                        required
                    />
                    <button type='submit'>Register</button>
                    <p>
                        Already registered?
                        <Link to='/login'>
                            Login Here
                        </Link>
                    </p>
                </form>
        </div>
    )
}

export default RegistrationPage
