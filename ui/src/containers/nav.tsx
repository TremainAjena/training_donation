import '../nav.css'
import { Link } from "react-router-dom"
import { Button } from "@radix-ui/themes"
import { useContext } from "react"
import AuthContext from "../context/auth"

function Nav() {
  const {logout} = useContext(AuthContext)
  const {user} = useContext(AuthContext)

  const authenticatedNavbar = () => {
     return (
       <div className="nav">
         <img className="logo" src="/vite.svg"/>
         <div className="links">
           <Link to={'/counts'} className='nav-link'><Button color="cyan" variant="soft">Counts</Button></Link>
           <Link to={'/users'} className='nav-link'><Button color="cyan" variant="soft">Users</Button></Link>
           <Link to={'/organizations'} className='nav-link'><Button color="cyan" variant="soft">Organizations</Button></Link>
           <Button color="red" variant="soft" className='nav-link' onClick={logout}>Logout</Button>
         </div>
       </div>
     )
   }
   const unauthenticatedNavbar = () => {
    return (
      <div className="nav">
        <img className="logo" src="/vite.svg"/>
        <div className="links">
          <Link to={'/counts'} className='nav-link'><Button color="cyan" variant="soft">Counts</Button></Link>
          <Button color="red" variant="soft" className='nav-link' onClick={logout}>Logout</Button>
        </div>
      </div>
    )
  }
    return (
        <>
            {user ? authenticatedNavbar() : unauthenticatedNavbar()}
        </>
    )
  }
  
  export default Nav