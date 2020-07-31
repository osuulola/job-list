import React,{useState} from 'react'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   const handleSubmit = (e) =>{
       e.preventDefault()
       console.log(email, password);
   }
    return (
        <div className='container'>
            <form>
            <div className=" form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary"onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}

export default Login
