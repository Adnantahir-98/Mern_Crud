import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../redux/todoSlice'


const CreateTodo = () => {

  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(AddTodo({todo}))
    setTodo(' ')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Add Todo</label> <br />
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Add New Todo' /> <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  )
}

export default CreateTodo
