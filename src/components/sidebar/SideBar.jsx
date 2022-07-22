import '../../stylesheets/SideBar.css'
import {SideBarData} from "./SideBarData"
import Profile from './profile/Profile'
import {Link} from 'react-scroll'

//Esto hay que cambiarlo cuando ya este enrutando con nodejs
// Recarga la pagina cada que cambia de link, eso no debe ser

export const SideBar = () => {
    return (
        <div className='SideBar'>
          <div className='menu-toggle'>
                <div className='hamburger'>
                        <span></span>
                </div>
          </div>
          <Profile />
            <ul className='SideBarList'>
            <Link 
            className="row"
            to="Home"
            smooth={true}
            duration={500}
            >
                    <div id='icon'>{SideBarData[0].icon}</div>
                    <div id='title'>{SideBarData[0].title}</div>
            </Link>
            <Link 
            className="row"
            to="About"
            smooth={true}
            duration={500}>
                    <div id='icon'>{SideBarData[1].icon}</div>
                    <div id='title'>{SideBarData[1].title}</div>
            </Link>
            <Link 
            className="row"
            to="Resume"
            smooth={true}
            duration={500}>
                    <div id='icon'>{SideBarData[2].icon}</div>
                    <div id='title'>{SideBarData[2].title}</div>
            </Link>
            <Link 
            className="row"
            to="Contact"
            smooth={true}
            duration={500}
            >
                    <div id='icon'>{SideBarData[3].icon}</div>
                    <div id='title'>{SideBarData[3].title}</div>
            </Link>
            </ul>
        </div>
     );
}
 
export default SideBar;