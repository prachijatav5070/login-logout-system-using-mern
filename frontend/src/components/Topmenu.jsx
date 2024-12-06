
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Header from './Header';

const TopMenu=()=>{
    return(

        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Login System</Navbar.Brand>
            <Nav className="me-auto">
           <Nav.Link  as={Link}  to="home">Home</Nav.Link>
           <Nav.Link as={Link} to="registration">Registration</Nav.Link>
          </Nav>
        
          <div className="hed">
           <Header/>
           </div>
         
        </Container>
      </Navbar>
        
        </>
    )
}
export default TopMenu;