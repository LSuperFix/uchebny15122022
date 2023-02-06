const MyButton = ({children, ...props}) => {
  return(
    <div >
      <button className="mybutton" {...props} >{children}</button>
    </div>
  )
}

export default MyButton