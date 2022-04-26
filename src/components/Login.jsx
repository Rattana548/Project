import React,{useState} from 'react'
import {Link} from "react-router-dom"

async function login(data) {
    return fetch('http://rattana.app.ruk-com.cloud/login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(data =>data.json()) 
}


function Login() {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await login({
            email,
            password
        })
        alert(result.message)
        if('user' in result) {
            localStorage.setItem('user',JSON.stringify(result.user))
            window.location.href = '/showproduct'
        }
      
    }

    return (
        <>


            <div className="container-lgx a login">
                <div className="image"></div>
                <form className="user bg-w r" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control form-control-user"
                            onChange={e=>{setEmail(e.target.value)}} placeholder="Enter Email" required />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control form-control-user"
                           onChange={e=>{setPassword(e.target.value)}} placeholder="Enter Password" required />
                    </div>
                    
                    <div className="form-check mb-3">
                        
                            <label className="form-check-label">
                                <Link to="#" className="text-decoration">Forgot Password</Link>
                            </label>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-outline-primary mb-3 col-lg-2" value="Login" />
                    </div>


                </form>
            </div>
        </>
    )
}

export default Login