import '../../stylesheets/SideBar.css'
import {SideBarData} from "./SideBarData"
//Esto hay que cambiarlo cuando ya este enrutando con nodejs
export const SideBar = () => {
    return (
        <div className='SideBar'>
            <ul className='SideBarList'>
            {SideBarData.map((val,key)=>{
                return (
                  <li
                    key={key}
                    className="row"
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