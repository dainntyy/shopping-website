import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './favourite.css';

export default function YoungsFavoriteSection() {
    return (
        <Container className='mb-5'>
            <Row>
                <Col xs={12}>
                    <h2 className='section-title-arrivals my-5'>Young's Favourite</h2>
                </Col>
            </Row>
            <Row>
                <CardGroup className='group mt-3'>
                    <Card className="card-item">
                        <Card.Img variant='top' src={require('../../assets/images/youngs1.svg').default}></Card.Img>
                        <Card.Body className='card-container p-0'>
                            <div>
                                <Card.Title className='mt-3'>Trending on Instagram</Card.Title>
                                <Card.Text className="text-muted">Explore Now!</Card.Text>
                            </div>
                            <Button variant='outline-dark' className='rounded-circle pb-2 card-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className="card-item">
                        <Card.Img variant='top' src={require('../../assets/images/youngs2.svg').default}></Card.Img>
                        <Card.Body className='card-container p-0'>
                            <div>
                                <Card.Title className='mt-3'>All under $40</Card.Title>
                                <Card.Text className="text-muted">Explore Now!</Card.Text>
                            </div>
                            <Button variant='outline-dark' className='rounded-circle pb-2 card-button'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    );
}