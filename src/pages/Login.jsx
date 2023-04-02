import { useState } from "react"
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('email or password invalid');
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/signup');
    }
    

    const submit = e => {
        e.preventDefault();
        
        console.log([email, password]);
        fetch('http://localhost:8000/api/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Do something with the data
            setData(data);
            // setMessage('you are logged in');
            
            data === null ? alert(message) : navigate('/home');
        })
        .catch(error => {
            // Handle errors
            setError(error);
        });
    }
    const submitByEnter = (e) => {
        if(e.key === "Enter"){
            submit(e);
            setEmail('');
            setPassword('')
        }
      }


    return (
        <div className="wrapper">
            <section className="form login">
            <header>Realtime Chat App</header>
            <form action="#" method="POST" encType="multipart/form-data" autoComplete="off" onSubmit={submit}>
                <div className="error-text"></div>
                <div className="field input">
                <label>Email Address</label>
                <input type="text" name="email" value={email} placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="field input">
                <label>Password</label>
                <input type="password" name="password" value={password} placeholder="Enter your password" required onChange={(e)=>setPassword(e.target.value)} onKeyDown={submitByEnter}/>
                <i className="fas fa-eye"></i>
                </div>
                <div className="field button">
                <input type="submit" name="submit" value="Continue to Chat" />
                </div>
            </form>
            <div className="link">Not yet signed up? <a onClick={handleClick}>Signup now</a></div>
            </section>
        </div>
    )
}