import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './heroSection.css';

export default function AppHeroSection() {
    return (
        <Container>
            <Row className='align-items-center hero-banner pt-3'>
                <Col xs={5} className="ps-5 mb-5">
                    <h1 className="banner-text display-1 fw-bold mt-4 ">Let's explore <span className="uniqe">uniqe</span> clothes.</h1>
                    <p className="banner-description mt-4 mb-4 lead">Live for influential and innovative fashion!</p>
                    <Button variant='outline-dark' className="banner-button">Shop Now</Button>
                </Col>
                <Col xs={6} sm className="image-container">
                    <Image src={require('../../assets/images/hero-section.svg').default} alt="Woman dancing" className="banner-image" />
                </Col>
            </Row>
        </Container>
    );
};