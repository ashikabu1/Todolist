import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"

export const Project = () => {

    const projects = [
            {
                title: "Image Gallery",
                description: "Design & Development",
                imgUrl: './images/images25.jpeg' 
            },
            {
                title: "Twitter Page",
                description: "Design & Development",
                imgUrl: './images/Twiter.jpg'
            },
            {
                title: "Robot Details Website",
                description: "Design & Development",
                imgUrl: './images/web2.jpg'
            },
            {
                title: "Webpage",
                description: "Design & Development",
                imgUrl: './images/web1.jpeg'
            },
            {
                title: "Todo List App",
                description: "Design & Development",
                imgUrl: './images/images24.jpeg'
            },
            {
                title: "Shopping Site",
                description: "Design & Development",
                imgUrl: './images/image28.jpg'
            },
    ]
    return (
           
           <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>The objective of these project is to create a visually appealing and responsive websites using the 
                        Bootstrap framework, HTML, Javascript, CSS, APIs.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                   <Nav.Link eventKey="first">Tab One</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                   <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                     </Nav.Item>
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {projects.map((project, index) => {
                                        return(
                    
                                           <ProjectCard key={index}
                                           {...project}/>
                                           
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">MERN stack web developer</Tab.Pane>
                        <Tab.Pane eventKey="third">MERN stack web developer</Tab.Pane> */}
                     </Tab.Content>
                     </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>


    )
}