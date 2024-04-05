
import axios from "axios";
import { useEffect, useState } from "react";
import{useNavigate} from "react-router-dom";


function Forget(){
    const [email, setEmail] = useState('');
    const [newPassword, setPassword] = useState('');
    const navigator =useNavigate()
    useEffect(() =>{
        console.log('email is',email);
        console.log('password is',newPassword);
    }, [email, newPassword])

    const handleSubmit =async() => {
        const response = await axios.post('http://localhost:2000/forget',{email, newPassword})
        if(response.data){
            navigator('/login')
        }
    }
    
    return(
        <center>
<div >
    <h1>Forgot Password</h1>
    <div>Please Enter the email address and new address</div>
    <br></br><br></br>
    <div ><input onChange={(e) => setEmail(e.target.value)} style={{width:'500px'}}type="email" name="email" placeholder="Enter your email address"/> </div>
    <br></br><br></br>
    <div><input onChange={(e) => setPassword(e.target.value)}
          style={{width:'500px'}} type="password"  name="newPassword" placeholder="Enter new password"/></div>
    <br></br><br></br>
    <div><button  onClick={handleSubmit} style={{width:'300px'}}>Continue</button></div>
    

</div>
</center>
    )
}
export default Forget;