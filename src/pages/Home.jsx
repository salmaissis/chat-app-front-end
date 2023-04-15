import { useState } from 'react';
import pic1 from '../assets/images/pic1.png';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('please make sure you have an account');
    const [users, setUsers] = useState(null);
    console.log('in home');

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log([result, 2]))
    .catch(error => console.log('error', error));
    // fetch('http://localhost:8000/api/login')
    // .then(response => {
    //     return response.json();
    // })
    // .then(data => {
    //     // Do something with the data
    //     console.log(data);
    //     // setMessage('you are logged in');
        
    //     // data === null ? alert(message) : navigate('/login');
    // })
    // .catch(error => {
    //     // Handle errors
    //     setError(error);
    // });
    fetch("http://127.0.0.1:8000/api/home")
    .then(response => {
            return response.json();
    }).then(data => {
        console.log(data);
        setUsers(data);
    })
    
    return (
        <div className="wrapper">
            <section className="users">
            <header>
                <div className="content">
                <img src={pic1} alt="" />
                <div className="details">
                    <span>Salma</span>
                    <p>Active Now</p>
                    {/* <span><i className="fas fa-pen"></i></span> */}
                </div>
                </div>
                <button className="logout" onClick={handleClick}>Logout</button>
            </header>
            <div className="search">
                <span className="text">Select an user to start chat</span>
                <input type="text" placeholder="Enter name to search..." />
                <button><i className="fas fa-search"></i></button>
            </div>
            <div className="users-list">
        
            </div>
            </section>
        </div>
    )
}