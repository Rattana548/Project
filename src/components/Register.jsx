import React ,{useState} from 'react'

async function register (data){
    return fetch('http://localhost:3001/register',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(data =>data.json()) 
}

function Login() {

    const [fname,setfname] = useState()
    const [lname,setlname] = useState()
    const [email,setemail] = useState()
    const [phone,setphone] = useState()
    const [password,setpassword] = useState()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const result = await register({
            fname,
            lname,
            email,
            phone,
            password
        })
        alert(result.message)
    }

    return (
        <>
            <div className="container-lgx a">
                <div className="image"></div>
                <form className="user bg-w r" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account Member!</h1>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-6 mb-3">
                            <input type="text" className="form-control form-control-user"
                               onChange={e=>{setfname(e.target.value)}} placeholder="First Name" />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className="form-control form-control-user"
                                onChange={e=>{setlname(e.target.value)}}  placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control form-control-user"
                            onChange={e=>{setemail(e.target.value)}}  placeholder="Email" />
                    </div>
                    <div className="form-group row mb-3">
                        <div className="col-sm-5 mb-4">
                            <input type="text" className="form-control form-control-user"
                               onChange={e=>{setphone(e.target.value)}} placeholder="Phone" />
                        </div>
                        <div className="col-sm-7">
                            <input type="text" className="form-control form-control-user"
                               onChange={e=>{setpassword(e.target.value)}}  placeholder="Password" />
                        </div>
                    </div>
                    <hr />
                    <div className="text-center">
                        <input type="submit" className="btn btn-outline-primary mb-3" value="Register" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login