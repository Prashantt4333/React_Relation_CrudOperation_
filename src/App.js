import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreateStudents from './pages/Students/CreateStudents';
import CreateTeacher from './pages/Teachers/CreateTeacher';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>  
          <Route path='/student/create' element={ <CreateStudents /> }></Route>  
          <Route path='/teacher/create' element={ <CreateTeacher /> }></Route>  
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
