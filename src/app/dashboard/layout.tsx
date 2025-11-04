import Col from "@/components/Col";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import Row from "@/components/Row";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div className="dasbhoard-layout">
      <Navbar />
      <main className="dashboard-main">
        <Header />
        <Container>
          <Row>
            <Col>
              <div className="dashboard-body">{children}</div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
