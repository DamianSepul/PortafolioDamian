import SideBar from "./components/sidebar/SideBar";
import "./stylesheets/App.css"
import Home from "./components/page-content/Home";
import AboutMe from "./components/page-content/AboutMe";
import Resume from "./components/page-content/Resume";
import Contact from "./components/page-content/Contact";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useRef} from 'react'


function App() {
  const xHome = useRef(null)
  const xAbout = useRef(null)
  const xResume = useRef(null)
  const xContact = useRef(null)
  return (
    <div className="App">
      <header>
        <SideBar Home={xHome} About={xAbout} Resume={xResume} Contact={xContact} />
      </header>
      <Container fluid id="ContainerHome2">
        <Row>
          <Col>
            <Home ref={xHome}/>
            <AboutMe ref={xAbout}/>
            <Resume />
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
