import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

class Menu extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showMenu: false,
      buttonClass: 'menu-icon'
    }
  }

  showMenu = (event) => {
    event.preventDefault()

    // changes state to show menu items
    this.setState({
      showMenu: true,
      buttonClass: 'menu-icon rotated'
    })
  
    // adds event listener to document, so clicking anywhere outside of the menu closes it
    document.addEventListener('click', this.closeMenu)
    
  }

  closeMenu = (event)=>{
    // if (!this.dropDownMenu.contains(event.target)){
      this.setState({
        showMenu: false,
        buttonClass: 'menu-icon'
      })

      // removes event listener from document
      document.removeEventListener('click', this.closeMenu)
    // }
  }


  render(){
    return(
      <div className="menu-wrapper">
        <button  onClick={this.showMenu} className={this.state.buttonClass}>
          <i  class="fas fa-chevron-down"></i>
        </button>
      
        {/* if showMeny is true, show the menu items */}
        { this.state.showMenu ? (

          <div 
            className="menu"
            ref={element => this.dropDownMenu = element}
          >
            <Link to="/">Home</Link>
            <Link to="/about">Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          )
          // else don't show the menu items
          : (
            null
          )
        }
      </div>

    )
  }



}

export default Menu