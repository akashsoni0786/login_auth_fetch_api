import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/welcome' element={<Welcome />}/>
        </Routes>
   
      </header>
    </div>
  );
}

export default App;
