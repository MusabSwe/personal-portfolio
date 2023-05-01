import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
import { useEffect, useState } from "react";
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updateedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    {/* xs for extra small sizes */}
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm software engineer `} <br /> <span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Repudiandae nostrum error
                            iusto minima vel, quos modi delectus odit
                            dolorem magnam? Fuga quaerat at ullam
                            iusto minima commodi pariatur debitis
                            consequatur?
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;