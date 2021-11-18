import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Products from './components/Products';
import Navigation from './components/Navigation';
import Course from './components/Course'
import Enquiry from './components/Enquiry';
import Courses from './components/Courses';
import CourseD from './components/CourseD';
import CourseRegisterD from './components/CourseRegisterD';
import EnqForm from './components/EnqForm';
function App() {
  return (
    <div className="App">
      {/* <CourseD/>
      <CourseRegisterD/> */}
      
      {/* <Router>
        <Routes>
        
        <Route path="/EnqForm" exact component={EnqForm}/>
          

      </Routes>
      </Router> */}
<Router>
<Container className="App">
      <Navigation/>
        <Routes>
          {/* <Route path="/" element={<Navigation/>}/>  */}
          <Route path="/products" element={<Products/>}/> 
          <Route path="/courses" element={<Courses/>}/> 
       </Routes>
      
       </Container>
  </Router>
  
      
      {/* <Navigation/>
      <Products/>
      <Courses/> */}
       {/* <Course/> */}
      {/* <Enquiry/>  */}
    </div>
  );
}

export default App;
