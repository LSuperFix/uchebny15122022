import { useState } from 'react'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'
const AddForm = ({hideModal, addNewTask}) => {
  const [newTask, setNewTask] = useState({id: '', title: '', body:''})
  const createTask = (e) => {
    e.preventDefault()
    const date = Date.now()
    console.log(date)
    setNewTask({...newTask, id: date})
    addNewTask(newTask)
    hideModal()
    setNewTask({id: '', title: '', body:''})
  }
  return(
    <div>
      <form>
        <div className='addform' onClick={e=>e.stopPropagation()}>
          <MyInput 
            onChange = {e => setNewTask({...newTask, title: e.target.value})}
            type = 'text' 
            placeholder="Тема" 
            name = 'title' 
            value = {newTask.title}
          />
          <MyInput 
            onChange = {e => setNewTask({...newTask, body: e.target.value})}
            type = 'text' 
            placeholder = "Задание" 
            name = 'body' 
            value = {newTask.body} 
          />
          <MyButton onClick ={createTask}>Добавить задание</MyButton>
        </div>

      </form>
    </div>
  )
}

export default AddForm
