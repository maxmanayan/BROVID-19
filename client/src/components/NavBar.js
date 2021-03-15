import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


const NavBar = () => {
  const { pathname } = useLocation()
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


export default NavBar;