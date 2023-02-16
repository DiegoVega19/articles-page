import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import { Card, Col, Container, Row } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Container fluid className="p-0">
          <Row>
            <Col sm={12}>
              <Card
                style={{
                  borderRadius: 38,
                }}
              >
                <Card.Img
                  style={{
                    height: 326,
                    objectFit: "cover",
                    borderRadius: 38,
                  }}
                  src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/kirby_30th_anniversary/H2x1_Kirby30thAnniversary_image1600w.jpg"
                />
              </Card>
            </Col>
            <h1 className="text-center">Hello World</h1>
            <h1 className="text-center">
              Ex voluptate voluptate enim reprehenderit pariatur non consequat
              amet incididunt non commodo officia non.
            </h1>
            <h1 className="text-center">
              Ex voluptate voluptate enim reprehenderit pariatur non consequat
              amet incididunt non commodo officia non. Mollit culpa amet nostrud
            </h1>
            <h1>
              <h1 className="text-center">
                Ex voluptate voluptate enim reprehenderit pariatur non consequat
                amet incididunt non commodo officia non. Mollit culpa amet
                nostrud
              </h1>
            </h1>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
