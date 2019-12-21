import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div className='navBar'>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/#/">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/#/codes">ALL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BEAUTY</a>
            <ul className='nav-two'>
              <li>Selfridge</li>
              <li>Beautylish</li>
              <li>Sephora</li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CLOTH</a>
            <ul className='nav-two'>
              <li>SSENCE</li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SHOES</a>
          </li>


        </ul>

      </div>

    )
  }
}


export default Nav