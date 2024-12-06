import { useEffect ,useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const Dashboard=()=>{
      // Declare state variables to hold username and email
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    const uname= window.localStorage.getItem("useName")
    const uemail= window.localStorage.getItem("userEmail")
    if(!uname){
        navigate("/home")
    }
      // Update state with values from localStorage
      setUname(uname);
      setUemail(uemail);
  },[])

  
const logout=()=>{
    window.localStorage.clear(); 
    navigate("/home");
}
    return(
        <>
        <div id="adminDashboard">
        welcome: {uname} Email : {uemail}
        <Button variant="primary" size="sm" style={{marginLeft:"20px"}} onClick={logout}>
         Logout
        </Button>
        </div>
      
        <h1>welcome to Dashboard</h1>
        </>
    )
}
export default Dashboard;