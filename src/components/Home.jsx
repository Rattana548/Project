import React,{useState} from 'react'

function Home() {
   const [count, setCount] = useState([])

  return (
    <>
    <h1>Hello</h1>
    <hr />
    <button className="btn btn-primary" onClick={getCount}>Show User</button>
   
    {count.map((value, key)=>{
        return (
            <div className="card-body text-center">
                <p className="card-text">Fname : </p>
                <p className="card-text">Lname : </p>
                <p className="card-text">Enail : </p>
                <p className="card-text">Phone : </p>
                <p className="card-text">Password : </p>
                <p className="card-text">Password : </p>
            </div>
        )

    })}
    </>
  )
}

export default Home