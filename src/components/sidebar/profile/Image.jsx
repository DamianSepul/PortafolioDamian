import Imagen from 'react-bootstrap/Image'
import "../../../stylesheets/Profile.css"
export const Image = () => {
    return (  
        <div>
            
            <Imagen src='https://avatars.githubusercontent.com/u/74329705?v=4' className='ProfileImage' roundedCircle fluid />
            <p id='Nombre'> Damián Sepúlveda </p>
        </div>
            
    );
}
 
export default Image;