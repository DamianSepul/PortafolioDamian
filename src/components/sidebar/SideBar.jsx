import '../../stylesheets/SideBar.css'
import {SideBarData} from "./SideBarData"
import Profile from './profile/Profile'
import {useRef} from 'react'
//Esto hay que cambiarlo cuando ya este enrutando con nodejs
// Recarga la pagina cada que cambia de link, eso no debe ser

export const SideBar = ({Home,About,Resume,Contact}) => {
  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
    return (
        <div className='SideBar'>
          <Profile />
            <ul className='SideBarList'>
            {SideBarData.map((val,key)=>{
                return (
                  <li
                    key={key}
                    className="row"
                    id={window.location.pathname === val.link ? "active": ""}
                    onClick={() => {
                      if (val.title==="Home")
                      scrollToSection(Home);
                      if (val.title==="About")
                      scrollToSection(About);
                      if (val.title==="Resume")
                      scrollToSection(Resume);
                      if (val.title ==="Contact")
                      scrollToSection(Contact)
                    }}
                  >
                    {" "}
                    <div id='icon'>{val.icon}</div>
                    <div id='title'>{val.title}</div>
                  </li>
                );
            })}
            </ul>
        </div>
     );
}
 
export default SideBar;