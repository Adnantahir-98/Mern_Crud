
import './App.css';
import AddTodo from './components/AddTodo'
import GetTodo from './components/GetTodos'
import UpdateTodo from './components/UpdateTodo'

import {Routes, Route} from 'react-router-dom'


function App() {

  
  return (
    <div className="App">

      

      <Routes>
        <Route path="/" exact element={<AddTodo />} />
        <Route path="/updatetodo/:id" element={<UpdateTodo />} />
      </Routes>

      <GetTodo />

    </div>
  );
}

export default App;
