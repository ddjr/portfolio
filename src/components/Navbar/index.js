import React from 'react'
import vscode_icon from "../../media/vscode_icon.webp"
import './Navbar.scss'
function Navbar() {
  return (
    <div className='navbar'>
        <img className='navbar__logo' src={vscode_icon} alt=''/>
        <div className='navbar__tools'>
            <p>File</p>
            <p>Edit</p>
            <p>Selection</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
            <p>Help</p>
        </div>
        <div className='navbar__filename'>
            <p>David Daly - Visual Studio Code</p>
        </div>
    </div>
  )
}

export default Navbar