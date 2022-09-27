import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BodyCard from "./BodyCard";

function Grid() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <Image
            src="https://picsum.photos/900/400"
            fluid
            rounded
            className=""
          />
        </Col>
        <Col sm={5}>
          <h1 className="font-weight-light">Tagline</h1>
          <p className="mt-4">
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p>
          <Button variant="outline-primary">Call to action</Button>
        </Col>
      </Row>
      <Row>
        <Card className="text-center bg-secondary text-white my-5 py-4">
          <Card.Body>
            This call to action card is a great place to showcase some important
            information or display a clever tagline!
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <BodyCard />
        </Col>
        <Col>
          <BodyCard />
        </Col>
        <Col>
          <BodyCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
