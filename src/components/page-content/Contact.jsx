
import '../../stylesheets/Contact.css'
import { MdOutlineEmail,MdPhone} from "react-icons/md";
import ButtonProfile from '../sidebar/profile/ButtonProfile';
const Contact = () => {
    return ( 
        <div className="Contact" id='Contact'>
            <h1 className="text-white"> Contact me!</h1>
            <div className="info-box">
                <h3 className='text-white'>Social Profiles</h3>
                <ButtonProfile id="botones" />
                <p><MdOutlineEmail/><strong>Email:</strong>damiansepul98@gmail.com</p>
                <p><MdPhone /><strong>Phone Number:</strong>+52 1 6621467925</p>
            </div>
        </div>
     );
}
 
export default Contact;
