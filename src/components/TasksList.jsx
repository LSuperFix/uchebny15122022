import { useState } from "react"
import Filters from "./Filters"
import TaskItem from "./TaskItem"
import MyButton from "./UI/MyButton"
import MyModal from "./UI/MyModal"

const TasksList = ({tasks, deleteTask, addNewTask, setSort, sort, searchQuery, setSearchQuery}) => {

  const [modalOnOff, setModalOnOff] = useState('mymodal__contreiner')
  const showModal = () => {
    setModalOnOff('mymodal__contreiner mymodal__contreiner_active')
  }
  const hideModal = () => {
    setModalOnOff('mymodal__contreiner')
  }

  return(
    <div className="wrapper">
      {tasks.length ? <h1>Список заданий</h1> : <h1>Постов нет</h1>}
      <MyButton onClick = {showModal} className = 'mybutton_addtask'>Добавить задание</MyButton>
      <Filters 
        setSort = {setSort} 
        sort = {sort} 
        onChange = {query => setSearchQuery(query)}
        searchQuery = {searchQuery}
      />
      <MyModal onClick = {hideModal} className = {modalOnOff} hideModal = {hideModal} addNewTask = {addNewTask}></MyModal>
      {tasks.map((task, index) => (
        <TaskItem 
          key = {task.id}
          id = {task.id} 
          title = {task.title}
          body = {task.body}
          deleteTask = {deleteTask}
        />
      ))}
    </div>
  )
}

export default TasksList