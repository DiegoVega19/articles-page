import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import ColorSchemesExample from "./Navbar";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <Container fluid className="p-0">
      <Row>
        <Col sm={12}>
          <ColorSchemesExample></ColorSchemesExample>
        </Col>
        <Col>{children}</Col>
      </Row>
    </Container>
  </>
);

export default Layout;
