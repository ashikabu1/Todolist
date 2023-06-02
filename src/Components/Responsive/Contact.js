import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText,setButtonText] = useState('Send')
    const [status,setStatus] = useState({})

    const onFormupdate = (category, value) => {
        setFormDetails({
            ...formDetails,[category]: value
        })
    }

    const handleSubmit = () =>{
        
    }

    return(
        // <div className="con">
        // <div className="can"> 
        // <div className="ti_cum">
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        {/* <img src={backf} alt="Contact Us"/> */}
                    </Col>
                    <Col md={6}>
                        <h2 className="h2">Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormupdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormupdate('lastName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFormupdate('email',e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=> onFormupdate('phone',e.target.value)}/>
                                </Col>
                                <Col className="px-2">
                                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormupdate('message',e.target.value)}></textarea>
                                <button className="btn" type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
        // </div>
        // </div>
        // </div>
    )
}