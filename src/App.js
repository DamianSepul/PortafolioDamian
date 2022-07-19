import SideBar from "./components/sidebar/SideBar";
import "./stylesheets/App.css"
import Home from "./components/page-content/Home";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <div className="App">
      <Container  id="ContainerHome">
        <Row>
          <Col  >
            <SideBar />
          </Col>
        </Row>
      </Container>
      
      <Container fluid>
      <Row>
      <Col>
      <Home /></Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
