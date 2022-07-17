import '../../stylesheets/SideBar.css'
import {SideBarData} from "./SideBarData"
import {Profile} from "./profile/Profile"
//Esto hay que cambiarlo cuando ya este enrutando con nodejs
// Recarga la pagina cada que cambia de link, eso no debe ser

export const SideBar = () => {
    return (
        <div className='SideBar'>
            <ul className='SideBarList'>
            {SideBarData.map((val,key)=>{
                return (
                  <li
                    key={key}
                    className="row"
                    id={window.location.pathname == val.link ? "active": ""}
                    onClick={() => {
                      window.location.pathname = val.link;
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