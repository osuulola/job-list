import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const history = useHistory();

   const handleSubmit = (e) =>{
       if (password === confirmPassword){
           history.push('/dashboard');
           return;
       }
       alert("password is not confirmed")
       }

    return (
        <div className='container'>
            <form>
            <div className=" form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="text" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className=" form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
            <label className="form-check-label">Confirm Password</label>
                <input type="password" className="form-control" value = {confirmPassword} onChange={e=>setconfirmPassword(e.target.value)}/>
                
            </div>
            <button type="submit" className="btn btn-primary"onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Signup
