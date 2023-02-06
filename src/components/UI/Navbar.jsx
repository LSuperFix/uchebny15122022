import { NavLink, useLocation, useParams } from "react-router-dom"

const Navbar = () => {
  const listPages = [
    {name:'about', path: 'about'},
    {name:'posts', path: 'posts'},
  ]

  const param = useLocation()
  console.log(param)
  return(
    <div className="navbar">
      {listPages.map((p) => (
        <NavLink 
          key={p.name} 
          to = {p.path}
          style = {({isActive}) => ({color: isActive ? 'red' : 'white'})}
        > 
          { p.name }
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar