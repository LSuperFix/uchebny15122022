import MyButton from './UI/MyButton'
const TaskItem = ({id, title, body, deleteTask}) => {
  return(
    <div className="item__contaner">
      <div className="item__textblock">
        <h2>{id}. {title}</h2>
        <p>{body}</p>    
      </div>
      <MyButton onClick = {() => deleteTask(id)}>Удалить</MyButton>
    </div>
  )
}

export default TaskItem