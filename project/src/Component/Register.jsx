import React,{useState} from 'react'
import{toast,ToastContainer} from "react-toastify";
import"react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [pswd,setPswd] = useState("")
    let [age,setAge] = useState(0)


    function clear(){
        setName("");
        setEmail("");
        setPswd("");
        setAge(0);

    }

    function save_data(){
        try{
            axios.post("http://localhost:1000/Web/reg",{
                name:name,
                email:email,
                pass:pswd,
                age:age

            })
            toast.success("Data SAved");
            clear();

        }catch(error){
            toast.error(error)
            console.log(error)
        }

    }

    return (
        <div className='container'>
            <h2>User Register Foam</h2>
            <br></br>

            <p>Enter Your Name</p>
            <input type="text"
                placeholder='Enter Your Name'
                className="form-control my-2"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <p>Enter Your Email</p>
            <input type="email"
                placeholder='Enter Your Email'
                className="form-control my-2"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <p>Enter Your Password</p>
            <input type="password"
                placeholder='Enter Your Password'
                className="form-control my-2"
                value={pswd}
                onChange={(e)=>setPswd(e.target.value)}
                />

            <p>Enter Your Age</p>
            <input type="number"
                placeholder='Enter Your Age'
                className="form-control my-2"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                />

                <button className="btn-btn-primary my-2" onClick={save_data}>Submit</button>
                <ToastContainer/>
        </div>
    )
}
