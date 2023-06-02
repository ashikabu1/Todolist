import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import round1 from '../../assets/images/round1.png'



export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0)
    const [isDeleting,setIsDeleting] = useState(false)
    const toRotate = ["Web Developer","Web Designer"]
    const [text,setText] = useState('')
    const [delta,setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <div className="Ban">
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Ashik  `}<span className="wrap">{text}</span></h1>
                    <p>As a MERN stack web developer, I am a passionate and dedicated individual aspiring to pursue a
                        Mern Full Stack Developer. As a fresher in this field, I bring a strong foundation in programming
                        concepts and a willingness to learn and grow. I have recently completed my education and gained theoretical
                        knowledge in web development, Javascript and the Mern Stack.During my internship journey, I had the 
                        opportunity to work on various projects that involved building web applications using HTML,CSS,
                        Javascript and React.js. These experiences have provided me with exposure to front-end development principles,
                        including creating responsive user interfaces and utilizing libraries and frameworks to enhance user 
                        experiences.
                    </p>
                    <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={round1} alt="Headder Img"/>
                </Col>
            </Row>
        </Container>
        </section>
        </div>
    )

}