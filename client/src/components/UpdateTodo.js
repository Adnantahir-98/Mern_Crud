import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetSingleTodo } from '../redux/todoSlice'
import { Link, useParams, useLocation } from 'react-router-dom'
import axios from 'axios'


const URL = "http://localhost:3000/";

const UpdateTodo = () => {

  // const { id } = useParams()
  const location = useLocation()
  const dispatch = useDispatch()

  const { todos } = useSelector((state) => state.todo)
  const [updatetodo, setUpdateTodo] = useState(todos)

  const id = location.pathname.split("/")[2]


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/todo/${id}`);
        setUpdateTodo(res.data);
      } catch(error) { 
        console.log(error)
      }
    };
    getProduct();
  }, [id]);
  
  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch(AddTodo({updatetodo}))
    // setUpdateTodo('')
  }

  return (
    <div>
      <h4><Link to="/">Go to Home</Link></h4>
      <form onSubmit={submitHandler}>
        <label>Update Todo</label> <br />
        <input type="text" value={updatetodo.todo} onChange={(e) => setUpdateTodo({ [e.target.name]: e.target.value })} name="todo" /> <br />
        <button type="submit">Update</button>
      </form>
      <br />
    </div>
  )
}

export default UpdateTodo
