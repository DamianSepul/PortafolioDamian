import '../../stylesheets/AboutMe.css'
import Imagen from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const AboutMe = () => {
    return (
      <div className="AboutMe">
        <h1 className="text-white">About me</h1>

        <div className="presentation">
          <p>
            Hello! Im' Damián i've 23 years old im from Hermosilo Sonora Mexico.
            When a I was 15 years I learn code in C in Highschool, it was magic
            to me since that day I love be a developer . Today I am finishing my
            university career in Software Engineer in the school Tecnologico
            Nacional de Mexico Campus Hermosillo {"(ITH)"} . My top goal right
            now is become a Full Stack Developer.
          </p>
        </div>
        <Container >
          <Row>
            <Col xs={4}>
              <div className="Image">
                <Imagen
                  src="https://avatars.githubusercontent.com/u/74329705?v=4"
                  thumbnail
                  fluid
                />
              </div>
            </Col>
            <Col xs={8}>
               <h3 className='text-white'>Projects in which i've participated</h3>            
                <Container fluid className='WorkExperience'>
                    <Row>
                        <Col>
                        <p>
                            <strong>
                               Nutriwellness:
                            </strong>
                        </p>
                        </Col>
                        <Col xs={9}>
                        <p>
                            
                            Its a system dedicated to help nutritionist keep track in the patients.
                            Tecnologies used (.NET, ASP.NET, GIT, Bootstrap, SCRUM, Design Patterns, DataBases SQL, Triggers, )

                        </p>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p>
                            <strong>
                                Creativa
                            </strong>
                        </p>
                    </Col>
                    <Col xs={9}>
                        <p>
                        Its a website for a graphic designer for store his work, sell products and send email to her. Tecnologies used (PHP, HTML5, CSS, Bootstrap, SCRUM, MySQL )
                        </p>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>
                            <strong>
                                Gift Shop
                            </strong>
                        </p>
                        </Col>
                        <Col xs={9}>
                            <p>
                            It is about an amusement park, the important thing is that is connected with different modules with API, our module was the Gift Shop. Tecnologies used
                            (NodeJS, Javascript, HTML5, CSS, Bootstrap, SCRUM, GIT, MySQL and Heroku)
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default AboutMe;
