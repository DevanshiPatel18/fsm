import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import logo from './images/logo.png';
import db from '../../firebase';
import { Redirect } from 'react-router-dom';

const jwt  = require('jsonwebtoken');

export default function Login({setToken}){
    const [form, setForm] = useState({
        Username: '',
        Password: ''
    })
    


    const handleInputChange = (e) => {
        var {name, value} = e.target
        setForm({
            ...form,[name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let flag = 1;
        //console.log(form.Username + " " + form.Password)
        db.collection('User').get().then((querySnapshot) => {
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
          //      console.log(doc.data().Email + " " + doc.data().Password + " " );
                if(doc.data().email === form.Username && doc.data().password === form.Password){
                    //alert('hello' + doc.data().username);
                    let token = jwt.sign({username: doc.data().username,email: form.Username, password: form.Password}, 'A_VERY_LONG_STRING_FOR_AUTHNETICATION_AND_USER_PROTECTION', {algorithm: 'HS256'}, {expiresIn: '1hr'});
                    setToken(token);
                    console.log(token);
                     
                    flag = 0;
                }
            })
        }).catch(err => alert(err)).then(() => {if (flag === 1) alert('Invalid credentials')});
    }
        return ( 
            <section className = 'vh-100 overflow-hidden'>
                <div className = 'contianer-fluid'>
                    <div className = 'row login-container'>
                        <div className = 'login'>
                            <div className = 'col-md-5 col-lg-5 col-xl-4 offset-xl-1 login-form'>
                                <div className = 'col' >
                                    <img className = 'img-fluid mb-3' src= {logo} alt="logo" />
                                </div>
                                <form onSubmit = {handleSubmit} className = 'mt-4'>
                                        <div className = 'form-outline mb-3 col-8'>
                                            <input type="email" id='email' className = 'form-control' name="Username" placeholder = 'Username' onChange = {handleInputChange}/>
                                        </div>
                                        <div className = 'form-outline mb-5 col-8'>
                                            <input type="password" id='password' className = 'form-control' name="Password" placeholder = 'Password' onChange = {handleInputChange}/>
                                        </div>
                                        <div className = 'form-outline col-6'>
                                            <input type="Submit" id='submit' className = 'form-control btn' value = "Submit"/>
                                        </div>
                                </form>
                            </div>
                            <div className = 'col-md-3 col-lg-4 col-xl-5 image-container'>
                                <img className = 'image-fluid random'src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="alt-img" />    
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        )
}

Login.propTypes = {
    setToken : PropTypes.func.isRequired
}
