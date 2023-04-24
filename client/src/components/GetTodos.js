import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTodo } from '../redux/todoSlice'
import { Link } from 'react-router-dom'


const GetTodos = () => {

  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todo)

  useEffect(() => {
    dispatch(GetTodo())
  }, [])


  return (
    <div style={{ background: 'lightgreen', width: '350px', margin: 'auto' }}>
      {todo.todos?.map((items, index) => (
        <div key={index}>
          <h4>{items.todo}</h4>
          <button><Link to={`/updatetodo/${items._id}`}>Update</Link></button>
          <button><Link to={`/deletetodo/${items._id}`}>Delete</Link></button>
          <p>{new Date(items.createdAt).toLocaleString('en-US')}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default GetTodos
