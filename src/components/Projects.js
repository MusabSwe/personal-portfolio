import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import ProjectCard from "./projectCard";
const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Vel, voluptatum quidem
                            odio nam assumenda, sit, officiis nostrum
                            maxime suscipit dolore laudantium?
                            Debitis ab quia, ipsam in architecto
                            ad esse impedit.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((p, i) => (
                                                <ProjectCard key={i} {...p} />
                                            ))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consectetur consequatur
                                    cum fugiat culpa similique veniam
                                    laboriosam quis minima enim ipsa
                                    optio iusto velit, sapiente,
                                    distinctio dolorum atque.
                                    Quo, nobis inventore?
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Consectetur consequatur
                                    cum fugiat culpa similique veniam
                                    laboriosam quis minima enim ipsa
                                    optio iusto velit, sapiente,
                                    distinctio dolorum atque.
                                    Quo, nobis inventore?
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
}

export default Projects;