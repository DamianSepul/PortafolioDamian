import '../../stylesheets/AboutMe.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutMe = () => {
    return (
      <div className="AboutMe" id='About'>
        <h1 className="text-white">About me</h1>

        <div className="presentation">
          <p>
            Hello! Im' Damián I've 23 years old im from Hermosilo Sonora Mexico.
            When a I was 15 years I learn code in C in Highschool, it was magic
            to me since that day I love be a developer . Today I am finishing my
            university career in Software Engineer in the school Tecnologico
            Nacional de Mexico Campus Hermosillo {"(ITH)"} . My top goal right
            now is become a Full Stack Developer.
          </p>
        </div>
        <Container >
          <Row>
            <Col xs={2}>
              
            </Col>
            <Col >
               <h3 className='text-white display-6'>Projects in which I've participated</h3>            
                <Container fluid className='WorkExperience'>
                    <Row>
                        <Col>
                        <a href="https://github.com/Bold98/NutriWellness" target="_blank">
                            <p>
                            <strong>
                               Nutriwellness:
                            </strong>
                            </p>
                        </a>
                        </Col>
                        <Col xs={9}>
                        <p>
                            
                            Its a system dedicated to help nutritionist keep track in the patients.
                            Tecnologies used (.NET, ASP.NET, GIT, Bootstrap, SCRUM, Design Patterns, DataBases SQL, Triggers and Stored procedures )

                        </p>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <a href="https://github.com/Bold98/Creativa" target="_blank">
                    <p>
                            <strong>
                                Creativa
                            </strong>
                        </p>
                    </a>
                    </Col>
                    <Col xs={9}>
                        <p>
                        Its a website for a graphic designer for store his work, sell products and send email to her. Tecnologies used (PHP, HTML5, CSS, Bootstrap, SCRUM, MySQL )
                        </p>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                        <a href="https://github.com/DamianSepul/TiendaDeRegalos" target="_blank">
                        <p>
                            <strong>
                                Gift Shop
                            </strong>
                        </p>
                        </a>
                        </Col>
                        <Col xs={9}>
                            <p>
                            It is about an amusement park, the important thing is that is connected with different modules with API, our module was the Gift Shop. Tecnologies used
                            (NodeJS, Javascript, HTML5, CSS, Bootstrap, SCRUM, GIT, MySQL and Heroku)
                            </p>
                        </Col>
                    </Row>
                    
                    
                </Container>
                <h4 className='text-white '>Small projects that I do for practice </h4> 
                <Row>
                  <Col>
                  <a href="https://damiansepul.github.io/CalculatorReact/" target="_blank">
                  <p>
                            <strong>
                                Calculator 
                            </strong>
                        </p>
                  </a>

                  <a href="https://github.com/DamianSepul/Compilador-Rust" target="_blank">
                  <p>
                            <strong>
                                Compilator of Rust
                            </strong>
                        </p>
                  </a>
                  </Col>
                  <Col>
                  <a href="https://damiansepul.github.io/CounterClics/" target="_blank">
                  <p>
                            <strong>
                                Counter of clicks
                            </strong>
                        </p>
                  </a>

                  <a href="https://damiansepul.github.io/TodoList-React/" target="_blank">
                  <p>
                            <strong>
                                Todo-List 
                            </strong>
                        </p>
                  </a>
                  </Col>
                  </Row>          
            </Col>
          </Row>
        </Container>
        
      </div>
    );
}
 
export default AboutMe;
