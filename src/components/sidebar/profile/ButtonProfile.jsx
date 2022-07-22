import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import "../../../stylesheets/Profile.css"
 const ButtonProfile = () => {
    return (  
        <div className="ButtonProfile">
                
            <a href="https://github.com/DamianSepul" id = "git" target='_blank'>
            <GrGithub size={35}  /> 
            </a>
          
      
            
            <a href="https://www.linkedin.com/in/damian-sepulveda/" id="linkedin" target='_blank'>
            <GrLinkedinOption size={35} />
            </a>
            
          
            
        </div>
    );
}
 
export default ButtonProfile;