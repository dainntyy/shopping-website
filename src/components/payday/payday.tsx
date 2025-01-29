import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './payday.css'

export default function PaydaySection() {
    return (
        <Container fluid className='p-0 mb-5 section-container'>
            <Row className='m-0'>
                <Col className="p-0">
                    <Image src={require('../../assets/images/payday-section.svg').default} className='sale-image'></Image>
                </Col>
                <Col className='p-0 align-items-center d-flex'>
                    <div className='sale-group'>
                        <h3 className='section-title-sale'><span className='sale-accent'>PayDay</span> <br/> Sale Now</h3>
                        <p className='sale-text fw-medium'> Spend minimal $100 get 30% off voucher code for your next purchase</p>
                        <p className='mb-0 fw-bold text'>1 June - 10 June 2021</p>
                        <p className='pt-0 text'>*Terms & Conditions apply</p>
                        <Button variant='dark' className='sale-button'>Shop Now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};