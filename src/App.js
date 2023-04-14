import './App.css';
import Wapper from './components/counter/wrapper';

//import homePage from './components/home/homePage';
 import Navbar from 'react-bootstrap/Navbar';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import { BrowserRouter , Routes, Route } from "react-router-dom";
  import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/shop/shop';
import DetailsProduct from './components/shop/detailsProduct';
import Login from './components/forms/login';
import Register from './components/forms/register';
import CreateExamForm from './components/home/CreateExamForm ';
import AdminDashboard from './components/about/AdminDashboard';
import StudentDashboard from './components/student/StudentDashboard ';
import StudentHomework from './components/homework/studentHomework';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/examForm">CreateExam</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">exam</Nav.Link>
            <Nav.Link as={Link} to="/studentPanel">studentPanel</Nav.Link>
            <Nav.Link as={Link} to="/studentHomework">studentHomework</Nav.Link>
            <Nav.Link as={Link} to="/product">Shop</Nav.Link>
            <Nav.Link as={Link} to="/Counter">Counter</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
       <Routes>
        <Route element={<Wapper />} path='/counter'/>
        <Route element={<CreateExamForm></CreateExamForm>} path='/examForm' />
        <Route element={<AdminDashboard></AdminDashboard>} path='/AboutUs' />
        <Route element={<StudentDashboard></StudentDashboard>} path='/studentPanel' />
        <Route element={<StudentHomework></StudentHomework>} path='/studentHomework' />
        <Route element={<Shop></Shop>} path='/product' />
        <Route element={<DetailsProduct></DetailsProduct>} path='/product/:id' />
        <Route element={<Login></Login>} path='/login' />
        <Route element={<Register></Register>} path='/register' />
       </Routes>
      </BrowserRouter>
      {/* <Wapper></Wapper> */}
    </div>
  );
}

export default App;
