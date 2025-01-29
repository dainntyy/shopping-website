import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import './accent.css';

export default function AccentSection() {
    return (
        <Container fluid className="p-0 m-0">
            <Row className="p-0 m-0">
                <Col className="p-0">
                    <ListGroup className="list m-0 p-5" horizontal>
                        <ListGroup.Item className="list-item">
                            <img src={require('../../assets/images/h&m.svg').default} alt="H&M"/>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <img src={require('../../assets/images/obey.svg').default} alt="Obey"/>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <img src={require('../../assets/images/Shopify.svg').default} alt="Shopify"/>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <img src={require('../../assets/images/Lacoste.svg').default} alt="Lacoste"/>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <img src={require('../../assets/images/Levis.svg').default} alt="Levis"/>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-item">
                            <img src={require('../../assets/images/amazon.svg').default} alt="Amazon"/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};