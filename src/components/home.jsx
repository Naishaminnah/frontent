import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
      
    <center>
      <div style={{height:'750px',backgroundImage:`url(images.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>
            <nav style={{color:'white',fontFamily:'Times New Roman',fontSize:'30px'}} ><h1 >Home</h1></nav>
     
      <div style={{borderRadius:'100px',border:'2px solid black',borderColor:'maroon',borderColor:'black',backgroundColor:'white',borderWidth:'thick',gap:'10px',width:'300px',padding:'60px',height:'400px'}}><h2>Welcome, {user}!</h2>
      <br></br>
      <p>This is your home page.</p>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <button style={{width:'200px',height:'50px',borderBlockColor:'pink'}}onClick={logout}>logout</button>
      </div>
      
      </div>
    
    </center>
    
  );
};

export default Home;
