import { cookies } from "next/headers";

import Col from "@/components/Col";
import Container from "@/components/Container";
import Debugger from "@/components/Debugger";
import ErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import Row from "@/components/Row";
import { DEBUGGER } from "@/constant/debugger.constant";
import BaseProvider from "@/providers/BaseProvider";

type Props = {
  children: React.ReactNode;
};

export default async function BaseLayout({ children }: Props) {
  const apiDebugger = (await cookies()).get(DEBUGGER)?.value === "true";

  return (
    <BaseProvider>
      <div className="dasbhoard-layout">
        <Navbar />
        <main className="dashboard-main">
          <Header />
          <Debugger apiDebugger={apiDebugger} />
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
