import SideBar from "./components/sidebar/SideBar";
import "./stylesheets/App.css"
import Home from "./components/page-content/Home";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <div className="App">
      <Container  fluid id="ContainerHome">
        <Row>
          <Col  >
            <SideBar />
          </Col>
          <Col xs={10}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
