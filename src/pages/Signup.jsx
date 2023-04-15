
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export default function Signup() {


    const [signupStates, setSignupStates] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        img: null
    }); 

    const signupRef = useRef();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    }
    const handle = () => {
        navigate('/home');
    }

    const submit = async e => {
        e.preventDefault();

        const signup = new FormData();
        Object.keys(signupStates).map(field => signup.append(field, signupStates[field]));
        console.log([...signup]);
        fetch('http://localhost:8000/api/signup', {
            method: 'POST',
            body: signup
        });
        
    }


    return (
    <div className="wrapper">
        <section className="form signup">
        <header>Realtime Chat App</header>
        <form ref={signupRef} action="#" method="POST" encType="multipart/form-data" autoComplete="off" onSubmit={submit}>
            <div className="error-text"></div>
            <div className="name-details">
            <div className="field input">
                <label>First Name</label>
                <input type="text" name="fname" placeholder="First name" required onChange={(e)=>{ setSignupStates({...signupStates, fname: e.target.value})}}/>
            </div>
            <div className="field input">
                <label>Last Name</label>
                <input type="text" name="lname" placeholder="Last name" required onChange={(e)=>{ setSignupStates({...signupStates, lname: e.target.value})}}/>
            </div>
            </div>
            <div className="field input">
            <label>Email Address</label>
            <input type="text" name="email" placeholder="Enter your email" required onChange={(e)=>setSignupStates({...signupStates, email: e.target.value})}/>
            </div>
            <div className="field input">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter new password" required onChange={(e)=>{setSignupStates({...signupStates, password: e.target.value})}}/>
            <i className="fas fa-eye"></i>
            </div>
            <div className="field image">
            <label>Select Image</label>
            <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required onChange={(e)=>{setSignupStates({...signupStates, img: e.target.files[0]})}}/>
            </div>
            <div className="field button">
            <input type="submit" name="submit" value="Continue to Chat" onClick={handle}/>
            </div>
        </form>
        <div className="link">Already signed up? <a onClick={handleClick}>Login now</a></div>
        </section>
    </div>
    )
}