import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.css';

export default function FormSection() {
    return (
        <section className="promo-section text-center py-5">
      <Container>
        <Row className="justify-content-center my-5">
          <Col lg={8}>
            <h2 className="fw-bold text-uppercase">
              Join Shopping Community to Get Monthly Promo
            </h2>
            <p className="mt-3">
              Type your email down below and be young wild generation
            </p>
            <Form className="d-flex mt-4 justify-content-center">
              <Form.Control
                type="email"
                placeholder="Add your email here"
                className="me-2 p-3"
                style={{ maxWidth: "300px", borderRadius: "10px" }}
              />
              <Button variant="dark" className="px-4" style={{ borderRadius: "10px" }}>
                SEND
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    )
}