import React, { useContext } from 'react';
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider';


const NavBar = (props) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const {user, handleLogout} = useContext(AuthContext)

  const getRightMenu = () => {

    if(user) {
      return(
        <Menu.Menu position='right'>
          <Menu.Item onClick={()=>handleLogout(history)}>
            Logout
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item active={pathname == '/login'}>
              Login
            </Menu.Item>
          </Link>
          <Link to='/register'>
            <Menu.Item active={pathname == '/register'}>
              Register
            </Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }
  }

  return(
    <Menu>
      <Link to='/'>
        <Menu.Item active={pathname == '/'}>
          Home
        </Menu.Item>
      </Link>
      <Link to='/about'>
        <Menu.Item active={pathname == '/about'}>
          About
        </Menu.Item>
      </Link>
      <Link to='/Colleges'>
        <Menu.Item active={pathname == '/Colleges'}>
          Colleges
        </Menu.Item>
      </Link>
      <Link to='/Frats'>
        <Menu.Item active={pathname == '/Frats'}>
          Frats
        </Menu.Item>
      </Link>
      {/* <Link to='/componentDemo'>
        <Menu.Item active={pathname == '/componentDemo'}>
          Component Demo
        </Menu.Item>
      </Link> */}
      {getRightMenu()}
    </Menu>
  )
}


// Class Component
// class NavBar extends React.Component {
//   render(){
//     const { location } = this.props
//     return(
//       <Menu>
//         <Link to='/'>
//           <Menu.Item active={location.pathname == '/'}>
//             Home
//           </Menu.Item>
//         </Link>
//         <Link to='/about'>
//           <Menu.Item active={location.pathname == '/about'}>
//             About
//           </Menu.Item>
//         </Link>
//       </Menu>
//     )
//   }
// }

// export const ConnectedNavBar = (props) => {
//   return(
//     <AuthConsumer>
//       { (value) => (
//         <NavBar {...props} auth={value}/>
//       )}
//     </AuthConsumer>
//   )
// }
export default withRouter(NavBar);