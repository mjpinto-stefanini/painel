import { Col, Container, Row } from "react-bootstrap";

const Footer = () => (
    <div className="main-footer text-center">
        <Container>
            <Row className="row-sm">
                <Col md={12} className="col-md-12">
                    <span>Todos os direitos reservados a Fundação Hemominas - 2022</span>
                </Col>
            </Row>
        </Container>
    </div>
);

Footer.propTypes    = {};
Footer.defaultProps = {};

export default Footer;