import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function VoucherSection() {
    return (
        <Container className='col-xxl-8 px-4 py-5'>
            <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
                <Col xs={10 } className='col-sm-8 col-lg-6'>
                    <Image src={require('../../assets/images/voucher-phone.svg').default} alt='Phone'></Image>
                </Col>
                <Col className='col-lg-6'>
                    <h3 className='display-5 fw-bold lh-1 mb-5 text-uppercase'>Download app & get the voucher</h3>
                    <p className='lead mb-5'>Get 30% off for first transaction using Rondovision mobile app for now.</p>
                    <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                        <Button variant='' className='p-0 btn-lg-px-4 me-md-2'>
                            <Image src={require('../../assets/images/app-store.svg').default} alt='App Store'/>
                        </Button>
                        <Button variant='' className='p-0 btn-lg px-4'>
                            <Image src={require('../../assets/images/google-play.svg').default} alt='Google Play' />
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}