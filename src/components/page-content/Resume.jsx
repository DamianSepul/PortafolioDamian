import '../../stylesheets/Resume.css'
import { BsDownload } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
const Resume = () => {
    return ( 
    <div className="Resume" id="Resume">
            <Container>
            <Row>

                <Col>
                <Col>
                <h1 className="text-white display-2" id = "title">
                Resume
            </h1>
            <div className="centrado">
            <Button variant="primary" id='Download' className='text-center'  href="https://drive.google.com/file/d/1qFIFA4fiy9DmKKUmELl5o3ov0Qjpr3BD/view?usp=sharing" target='_blank'> Download Resume <BsDownload /> </Button>
            </div>
           
            </Col>
                </Col>
            </Row>
            
            </Container>
    </div> 
    );
}
 
export default Resume;