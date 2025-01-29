import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './footer.css';

export default function FooterSection() {
    return (
        <Container fluid className='py-5 footer-section text-white'>
            <Row className=' py-5 my-5'>
                <Col xs={5} className='d-flex flex-column gap-3 ps-3'>
                    <h3 className='fw-bold text-uppercase display-5'>Fashion</h3>
                    <p className='footer-p'>Complete your style with awesome clothes from us.</p>
                    <ul className='list-unstyled media-section d-flex gap-2 flex-wrap'>
                        <li>
                            <a href="/">
                                <Image src={require('../../assets/images/facebook.svg').default}></Image>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Image src={require('../../assets/images/instagram.svg').default}></Image>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Image src={require('../../assets/images/twitter.svg').default}></Image>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Image src={require('../../assets/images/linkedin.svg').default}></Image>
                            </a>
                        </li>
                    </ul>
                </Col>
                {/* <Col></Col> */}
                <Col xs={2}>
                    <h5 className='mb-3'>Company</h5>
                    <ul className='d-flex flex-column list-unstyled gap-3'>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                About
                            </a>
                        </li>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Contact us
                            </a>
                        </li>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Support
                            </a>
                        </li>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Careers
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={2}>
                    <h5 className='mb-3'>Quick Link</h5>
                    <ul className='d-flex flex-column list-unstyled gap-3'>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Share Location
                            </a>
                        </li>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Orders Tracking
                            </a>
                        </li>
                       <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Size Guide
                            </a>
                        </li>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={3}>
                    <h5 className='mb-3'>Legal</h5>
                    <ul className='d-flex flex-column list-unstyled gap-3'>
                       <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Terms & conditions
                            </a>
                        </li>
                        <li clasName='my-3'>
                            <a href="#" className="nav-link footer-items">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};