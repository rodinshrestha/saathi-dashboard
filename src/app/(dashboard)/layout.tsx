import Col from "@/components/Col";
import Container from "@/components/Container";
import ErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import Row from "@/components/Row";
import BaseProvider from "@/providers/BaseProvider";

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <BaseProvider>
      <div className="dasbhoard-layout">
        <Navbar />
        <main className="dashboard-main">
          <Header />
          <div className="dashboard-body">
            <Container>
              <Row>
                <Col>
                  <ErrorBoundary>{children}</ErrorBoundary>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    </BaseProvider>
  );
}
