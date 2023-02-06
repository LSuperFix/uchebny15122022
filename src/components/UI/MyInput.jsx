const MyInput = ({...props}) => {
  return(
    <div>
      <input className="myinput" type="text" {...props} />
    </div>
  )
}

export default MyInput