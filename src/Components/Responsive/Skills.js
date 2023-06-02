import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import per13 from '../../assets/images/per13.png'
// import per11 from '../../assets/images/per11.png'
import per12 from '../../assets/images/per12.png'
import per10 from '../../assets/images/per10.png'
import backf from '../../assets/images/backf.jpg'


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (

        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>As a MERN stack web developer, I possess a strong foundation in building dynamic and responsive web applications using the MERN (MongoDB, Express.js, React.js, and Node.js) technology stack. With expertise in both front-end and back-end development, I bring a comprehensive skill set to deliver robust and user-friendly web solutions.

On the front-end, I am proficient in developing interactive and visually appealing user interfaces using React.js. I have hands-on experience with React components, state management (Redux), and popular libraries/frameworks like React Router, Material-UI, and Bootstrap. I strive to create seamless user experiences through responsive design, optimized performance, and cross-browser compatibility.
</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={per10} alt="Image" />
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={per10} alt="Image" />
                            <h5>Front End Development</h5>
                        </div>
                        <div className="item">
                            <img src={per12} alt="Image" />
                            <h5>Back End Development</h5>
                        </div>
                        <div className="item">
                            <img src={per13} alt="Image" />
                            <h5>Database Management</h5>
                        </div>
                    </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={backf}/>
        </section>
      )

}