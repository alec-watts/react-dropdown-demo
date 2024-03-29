import React, { useState } from 'react'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'


const App = () => {
  return (
    <NavBar> 
      <NavItem icon={ <PlusIcon /> } />
      <NavItem icon={ <BellIcon /> } />
      <NavItem icon={ <MessengerIcon /> } />

      <NavItem icon={ <CaretIcon /> }>
        <DropdownMenu />
      </NavItem>
    </NavBar>

  )
}

const DropdownMenu = () => {

  const DropdownItem = (props) => {
    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'> { props.leftIcon } </span>

        { props.children }

        <span className='icon-right'> { props.rightIcon } </span>
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <DropdownItem> My Profile </DropdownItem>
      <DropdownItem leftIcon={ <CogIcon /> } rightIcon={ <ChevronIcon /> }>
        Settings
      </DropdownItem>
    </div>
  )
}


const NavBar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children } </ul>
    </nav>
  )
}

const NavItem = (props) => {

  const [open, setOpen] = useState(false)

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        { props.icon }
      </a>

      {/* "open &&" checks if open is true and displays the following data if true" */}
      { open && props.children }
    </li>
  )
}

export default App