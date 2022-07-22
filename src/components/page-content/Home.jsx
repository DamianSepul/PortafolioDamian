import "../../stylesheets/HomePage.css"
import Typical from 'react-typical'
const Home = () => {
    return ( 
        <div>
            <div className="HomePageImage" id='Home'>
                <h1 className="text-white display-2">
                    Hello World !
                </h1>

                <h4 className="text-white display-6">
                    {'>_'} Damián Sepúlveda 
                </h4>
                <p className="animation">
               <Typical 
                    loop={Infinity}
                    wrapper="b"
                    steps = {[
                        'Software Engineer',
                        1000,
                        'Developer',
                        1000,
                        'Full-Stack',
                        1000,
                    ]}
                
                /> 
                </p>
                
            </div>
           
        </div>
     );
}
 
export default Home;