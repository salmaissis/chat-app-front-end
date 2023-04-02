import {useEffect, useState} from "react";
import pic1 from '../assets/images/pic1.png';
import { useNavigate } from "react-router-dom";

export default function Chat() {

    const [username, setUsername] = useState('username');
    // const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    // let allMessages = [];
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/home');
    }

    useEffect(() => {
        console.log("Fetching data");
         fetch('http://127.0.0.1:8000/api/messages')
         .then(response=> response.json())
         .then((res)=> console.log('Data is ',res.Messager ))
        // var pusher = new Pusher('2090809be4b9d419a7be', {
        //     cluster: 'eu'
        //   });
      
        //   var channel = pusher.subscribe('chat');
        //   channel.bind('message', function(data) {
        //     alert(JSON.stringify(data));
        //   });
        }, []);

    const submit = async e => {
        e.preventDefault();
        console.log(message);

        await fetch('http://localhost:8000/api/messages', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });
        
      }
      
      const submitByEnter = (e) => {
        console.log("sending message by e");
        if(e.key === "Enter"){
          submit(e);
          setMessage('');
        }
      }

    return (
        <div className="wrapper">
        <section className="chat-area">
          <header>     
            <a href="" className="back-icon" onClick={handleClick}><i className="fas fa-arrow-left"></i></a>
            <img src={pic1} alt="" />
            <div className="details">
              <span>Aya</span>
              <p>Offline</p>
            </div>
          </header>
          <div className="chat-box">
    
          </div>
          <form action="#" className="typing-area" onSubmit={submit}>
            <input type="text" name="message" className="input-field" placeholder="Type a message here..." autoComplete="off" value={message} onChange={(e)=>setMessage(e.target.value)} onKeyDown={submitByEnter}/>
            <button className="send-btn"><i className="fab fa-telegram-plane"></i></button>
          </form>
        </section>
      </div>
      
    )
}

    