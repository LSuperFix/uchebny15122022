import AddForm from "../AddForm"

const MyModal = ({addNewTask, hideModal, ...props}) => {
  return(
    <div {...props}>
      <AddForm hideModal = {hideModal} addNewTask = {addNewTask}/>
    </div>
  )
}

export default MyModal