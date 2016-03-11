import React from 'react'

const LeftNavigation = () => {
  return (
    <div className='leftNavigation' id='togglaNav'>
      <div className='toggleNavigation'>
        <i className='material-icons' onClick={() => {
          const navBar = document.getElementById('togglaNav')
          const content = document.getElementById('dashboardContainer')
          if (navBar.className.indexOf('closedNavigation') > 0) {
            navBar.className = 'leftNavigation'
            content.className = 'dashboardContainer'
          } else {
            navBar.className += ' closedNavigation'
            content.className += ' wideView'
          }
        }}>menu</i>
      </div>
      <ul className='navigationContent'>
        <li><i className='material-icons'>dashboard</i>Dashboard</li>
        <li><i className='material-icons'>timeline</i>Cahrts</li>
        <li><i className='material-icons'>map</i>Map</li>
        <li><i className='material-icons'>description</i>Pages</li>
        <li><i className='material-icons'>grid_on</i>Tables</li>
      </ul>
      <div className='loggedUser'>AS</div>
    </div>
  )
}

export default LeftNavigation
