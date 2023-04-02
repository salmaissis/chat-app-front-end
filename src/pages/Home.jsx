import pic1 from '../assets/images/pic1.png';
import { useNavigate } from 'react-router-dom';



export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }
    return (
        <div class="wrapper">
            <section class="users">
            <header>
                <div class="content">
                <img src={pic1} alt="" />
                <div class="details">
                    <span>Salma</span>
                    <p>Active Now</p>
                    {/* <span><i class="fas fa-pen"></i></span> */}
                </div>
                </div>
                <button class="logout" onClick={handleClick}>Logout</button>
            </header>
            <div class="search">
                <span class="text">Select an user to start chat</span>
                <input type="text" placeholder="Enter name to search..." />
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="users-list">
        
            </div>
            </section>
        </div>
    )
}